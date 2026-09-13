// Run against a local production build and isolated Chrome on port 9334.
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const WebSocket = require('ws');
(async () => {
  const targets = await (await fetch('http://127.0.0.1:9334/json')).json();
  const ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve) => ws.once('open', resolve));
  let id = 0;
  const pending = new Map(),
    errors = [];
  ws.on('message', (data) => {
    const m = JSON.parse(data);
    if (m.id) {
      const p = pending.get(m.id);
      pending.delete(m.id);
      m.error ? p.reject(Error(m.error.message)) : p.resolve(m.result);
    }
    if (m.method === 'Runtime.exceptionThrown') errors.push(m.params.exceptionDetails.text);
  });
  const call = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const next = ++id;
      pending.set(next, { resolve, reject });
      ws.send(JSON.stringify({ id: next, method, params }));
    });
  const evaluate = async (expression) =>
    (await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result
      .value;
  try {
    await call('Page.enable');
    await call('Runtime.enable');
    await call('Network.enable');
    // Keep preview traffic out of production advertising/analytics.
    await call('Network.setBlockedURLs', {
      urls: [
        '*google-analytics.com*',
        '*googletagmanager.com*',
        '*facebook.com*',
        '*facebook.net*',
        '*googleadservices.com*',
        '*doubleclick.net*',
      ],
    });
    await call('Page.navigate', { url: 'http://127.0.0.1:4174/' });
    for (let n = 0; n < 60; n++) {
      if (
        await evaluate(
          "document.readyState === 'complete' && !!document.querySelector('#hero-title')",
        )
      )
        break;
      await new Promise((r) => setTimeout(r, 100));
    }
    await evaluate('document.fonts.ready.then(() => true)');
    const structure = await evaluate(
      `({title:document.title,h1:document.querySelectorAll('h1').length,ids:[...document.querySelectorAll('[id]')].map(e=>e.id),brokenAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash),ctas:[...document.querySelectorAll('[data-cta="consultation-cta"]')].map(a=>({href:a.href,target:a.target,section:a.dataset.section})),canonical:document.querySelector('link[rel="canonical"]').href})`,
    );
    assert.equal(structure.h1, 1);
    assert.equal(new Set(structure.ids).size, structure.ids.length);
    assert.deepEqual(structure.brokenAnchors, []);
    assert.match(structure.title, /Ketamine Therapy in Torrance/);
    assert.equal(structure.canonical, 'https://ketamine.pacificpaingroup.com/');
    assert.ok(structure.ctas.length >= 7);
    assert.ok(
      structure.ctas.every(
        (a) =>
          a.href === 'https://intake.pacificpaingroup.com/private-consultation-request' &&
          !a.target &&
          a.section !== 'generic',
      ),
    );
    await fs.mkdir('.local-runtime/screenshots', { recursive: true });
    for (const width of [1440, 1024, 768, 390, 375]) {
      await call('Emulation.setDeviceMetricsOverride', {
        width,
        height: 900,
        deviceScaleFactor: 1,
        mobile: width < 768,
      });
      await evaluate('window.scrollTo(0,0)');
      await new Promise((r) => setTimeout(r, 150));
      const layout = await evaluate(
        `({width:innerWidth,scroll:document.documentElement.scrollWidth,bar:getComputedStyle(document.querySelector('.ketamine-mobile-actions')).display,heroCta:document.querySelector('[data-section="hero"]').getBoundingClientRect().toJSON(),font:getComputedStyle(document.querySelector('h1')).fontFamily})`,
      );
      assert.ok(layout.scroll <= width, `Overflow at ${width}: ${layout.scroll}`);
      assert.equal(layout.bar === 'none', width >= 768);
      assert.match(layout.font, /Poppins/);
      assert.ok(layout.heroCta.height >= 44);
      const screenshot = await call('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: false,
      });
      await fs.writeFile(
        `.local-runtime/screenshots/landing-${width}.png`,
        Buffer.from(screenshot.data, 'base64'),
      );
      console.log(`PASS ${width}px: no overflow, responsive actions, typography, CTA target size`);
    }
    for (const width of [1440, 390]) {
      await call('Emulation.setDeviceMetricsOverride', {
        width,
        height: 1000,
        deviceScaleFactor: 1,
        mobile: width < 768,
      });
      for (const section of ['ketamine-care', 'pricing', 'contact', 'location']) {
        await evaluate(`document.getElementById('${section}').scrollIntoView()`);
        const screenshot = await call('Page.captureScreenshot', {
          format: 'png',
          captureBeyondViewport: false,
        });
        await fs.writeFile(
          `.local-runtime/screenshots/${section}-${width}.png`,
          Buffer.from(screenshot.data, 'base64'),
        );
      }
    }
    await evaluate("document.querySelector('summary').click()");
    assert.equal(await evaluate("document.querySelector('details').open"), true);
    const footer = await evaluate(
      `({maps:[...document.querySelectorAll('#location iframe')].map(e=>({title:e.title,src:e.src})),profiles:document.querySelectorAll('#location [data-cta="profile-cta"]').length,trust:document.querySelector('#location [data-cta="trust-cta"]').href,unscoped:[...document.querySelectorAll('[data-cta]')].filter(e=>e.dataset.service!=='ketamine').length})`,
    );
    assert.equal(footer.maps.length, 2);
    assert.ok(
      footer.maps.some((m) => m.src.includes('2809') && m.title.includes('Manhattan Beach')),
    );
    assert.ok(footer.maps.some((m) => m.src.includes('23150') && m.title.includes('Torrance')));
    assert.equal(footer.profiles, 6);
    assert.match(footer.trust, /legitscript.com/);
    assert.equal(footer.unscoped, 0);
    console.log(
      'PASS: two location maps, six profile links, verification link, ketamine context on every CTA.',
    );
    assert.deepEqual(errors, []);
    console.log(
      'PASS: unique IDs, working anchors, same-tab consultation routes, metadata, FAQ interaction, no runtime exceptions. No form submissions.',
    );
  } finally {
    ws.close();
  }
})().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
