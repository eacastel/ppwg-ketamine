(function (root) {
  'use strict';
  if (root.ppwgNativeConsent) return;
  var identity = 'ppwg-first-party-v1';
  var instance, options, dialog, opener, errorNode, analyticsInput, functionalInput;
  var pendingWithdrawal = false, pendingFunctionalWithdrawal = false, storageBlocked = false;
  var lastSignature = '', mode = 'notice';
  var cookieName = 'cookieyes-consent';
  function fields() {
    try {
      var entry = root.document.cookie.split(';').find(function (item) { return item.trim().indexOf(cookieName + '=') === 0; });
      var result = {};
      if (entry) decodeURIComponent(entry.trim().slice(cookieName.length + 1)).split(',').forEach(function (item) {
        var separator = item.indexOf(':');
        if (separator > 0) result[item.slice(0, separator)] = item.slice(separator + 1);
      });
      return result;
    } catch (_) { return {}; }
  }
  function publicPage() {
    try {
      return !!options && root.location.protocol === 'https:' && !root.location.port
        && ['pacificpaingroup.com', 'www.pacificpaingroup.com', 'ketamine.pacificpaingroup.com', 'wellness.pacificpaingroup.com'].indexOf(root.location.hostname) !== -1
        && !new URLSearchParams(root.location.search).has('preview') && options.isPublicPage() === true;
    } catch (_) { return false; }
  }
  function getState() {
    var saved = fields(), completed = saved.action === 'yes', eligible = publicPage();
    return {
      completed: completed,
      analytics: eligible && completed && saved.analytics === 'yes' && !pendingWithdrawal,
      pendingWithdrawal: pendingWithdrawal,
      functional: eligible && completed && saved.consent === 'yes' && saved.functional === 'yes' && !pendingFunctionalWithdrawal,
      performance: completed && saved.performance === 'yes',
      advertisement: completed && saved.advertisement === 'yes',
      adsAllowed: false,
      storageBlocked: storageBlocked
    };
  }
  function clearAnalyticsCookies() {
    var host = root.location.hostname, parts = host.split('.'), domains = ['', host, '.' + host], paths = ['/'];
    for (var i = 1; i < parts.length - 1; i++) domains.push('.' + parts.slice(i).join('.'));
    var segments = root.location.pathname.split('/').filter(Boolean);
    for (var j = 1; j <= segments.length; j++) {
      var path = '/' + segments.slice(0, j).join('/');paths.push(path, path + '/');
    }
    root.document.cookie.split(';').map(function (item) { return item.trim().split('=')[0]; })
      .filter(function (name) { return /^(?:_ga(?:_|$)|_gid$|_gat(?:_|$)|_gac_|_utm[a-z]$)/.test(name); })
      .forEach(function (name) { domains.forEach(function (domain) { paths.forEach(function (path) {
        root.document.cookie = name + '=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=' + path + '; SameSite=Lax; Secure' + (domain ? '; Domain=' + domain : '');
      }); }); });
  }
  function announce() {
    var state = getState();
    (options.measurementIds || ['G-VK55BK4WPF']).forEach(function (id) { root['ga-disable-' + id] = !state.analytics; });
    if (!state.analytics) clearAnalyticsCookies();
    if (!publicPage()) { if (dialog) dialog.hidden = true;return; }
    var signature = JSON.stringify(state);
    if (signature === lastSignature) return;
    lastSignature = signature;
    var path = root.location.pathname;
    if (typeof path !== 'string' || path.length > 250 || /[?#@%\\\u0000-\u0020]/.test(path)) return;
    root.document.dispatchEvent(new CustomEvent('ppwg_consent_update', {detail: Object.assign({}, state, {ppwg_analytics_allowed:state.analytics,ppwg_page_path:path})}));
    root.dataLayer = root.dataLayer || [];
    if (typeof root.dataLayer.push === 'function') root.dataLayer.push({event:'ppwg_consent_update', ppwg_analytics_allowed:state.analytics, ppwg_page_path:path});
  }
  function localIdentifier() {
    if (root.crypto && typeof root.crypto.randomUUID === 'function') return 'fp-' + root.crypto.randomUUID();
    if (!root.crypto || typeof root.crypto.getRandomValues !== 'function') throw new Error('Secure storage identifier unavailable');
    return 'fp-' + Array.from(root.crypto.getRandomValues(new Uint8Array(16))).map(function (x) { return x.toString(16).padStart(2, '0'); }).join('');
  }
  function save(next) {
    if (!publicPage()) return false;
    pendingWithdrawal = next.analytics !== true;
    pendingFunctionalWithdrawal = next.functional !== true;
    // Close gates and remove analytics cookies before any persistence/event work.
    if (pendingWithdrawal) announce();
    var saved = fields();
    try {
      if (!saved.consentid) saved.consentid = localIdentifier();
      saved.action = 'yes';saved.necessary = 'yes';
      ['analytics','functional','performance','advertisement'].forEach(function (key) { saved[key] = next[key] === true ? 'yes' : 'no'; });
      saved.consent = next.analytics || next.functional || next.performance || next.advertisement ? 'yes' : 'no';
      var value = Object.keys(saved).map(function (key) { return key + ':' + saved[key]; }).join(',');
      root.document.cookie = cookieName + '=' + encodeURIComponent(value) + '; Max-Age=31536000; Path=/; Domain=.pacificpaingroup.com; Secure; SameSite=Strict';
      var actual = fields();
      if (Object.keys(saved).some(function (key) { return actual[key] !== saved[key]; })) throw new Error('Choice was not persisted');
      pendingWithdrawal = false;pendingFunctionalWithdrawal = false;storageBlocked = false;
    } catch (_) {
      pendingWithdrawal = true;storageBlocked = true;announce();
      root.document.dispatchEvent(new CustomEvent('cookieyes_consent_update', {detail:getState()}));
      if (errorNode) { errorNode.hidden = false;errorNode.textContent = 'Your browser could not save this choice. Analytics remains off.'; }
      return false;
    }
    announce();
    // Compatibility event for the actual functional consumer, not a vendor log.
    root.document.dispatchEvent(new CustomEvent('cookieyes_consent_update', {detail:getState()}));
    close();return true;
  }
  function retained(analytics, functional) {
    var state = getState(), signal = root.navigator.globalPrivacyControl === true || root.navigator.doNotTrack === '1';
    return {analytics:analytics, functional:functional, performance:state.performance, advertisement:state.advertisement && !signal};
  }
  function close() {
    if (dialog) dialog.hidden = true;
    if (opener) opener.setAttribute('aria-expanded','false');
    if (opener) opener.focus({preventScroll:true});
  }
  function preferences() {
    if (!publicPage()) return;
    mount();mode = 'preferences';var state = getState();
    analyticsInput.checked = state.analytics;functionalInput.checked = state.functional;
    dialog.querySelector('[data-ppwg-categories]').hidden = false;
    dialog.querySelector('[data-ppwg-consent-action="accept"]').textContent = 'Save preferences';
    dialog.querySelector('[data-ppwg-consent-action="preferences"]').textContent = 'Back';
    errorNode.hidden = true;dialog.hidden = false;
    dialog.querySelector('.ppwg-privacy-close').hidden = !state.completed;
    opener.setAttribute('aria-expanded','true');
  }
  function notice() {
    mode = 'notice';dialog.querySelector('[data-ppwg-categories]').hidden = true;
    dialog.querySelector('[data-ppwg-consent-action="accept"]').textContent = 'Accept cookies';
    dialog.querySelector('[data-ppwg-consent-action="preferences"]').textContent = 'Preferences';dialog.hidden = false;
  }
  function mount() {
    if (dialog || !root.document.body || !publicPage()) return;
    opener = root.document.createElement('button');opener.type = 'button';opener.className = 'ppwg-privacy-reopen';opener.textContent = 'Cookie settings';opener.setAttribute('aria-controls','ppwg-privacy-dialog');opener.addEventListener('click',preferences);
    dialog = root.document.createElement('section');dialog.id = 'ppwg-privacy-dialog';dialog.className = 'ppwg-privacy-dialog';dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','false');dialog.setAttribute('aria-labelledby','ppwg-privacy-title');
    dialog.innerHTML = '<h2 id="ppwg-privacy-title">Your privacy choices</h2><div class="ppwg-privacy-copy"><p>We use essential technologies to operate and secure this website. With your permission, we also use analytics and advertising technologies, including Google services, to understand website use and measure our campaigns. These technologies may collect information such as your IP address, browser or device information, pages viewed and website interactions. You can accept, reject or customize nonessential technologies and change your choice at any time. <a href="https://pacificpaingroup.com/cookie-policy" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer">Cookie Policy</a></p><p>Advertising and personalization remain off. Functional and analytics choices are separate.</p><fieldset data-ppwg-categories hidden><legend>Cookie preferences</legend><label><input type="checkbox" checked disabled> Necessary (always on)</label><label><input type="checkbox" data-ppwg-functional> Functional (website assistant)</label><label><input type="checkbox" data-ppwg-analytics> Analytics (optional)</label><p>Other existing category choices are retained. Advertising is not enabled by these controls.</p></fieldset><p class="ppwg-privacy-error" role="alert" hidden></p></div><div class="ppwg-privacy-actions"><button type="button" data-ppwg-consent-action="accept">Accept cookies</button><button type="button" data-ppwg-consent-action="reject">Reject</button><button type="button" data-ppwg-consent-action="preferences">Preferences</button></div><button type="button" class="ppwg-privacy-close" aria-label="Close privacy preferences" hidden>Close</button>';
    root.document.body.appendChild(opener);root.document.body.appendChild(dialog);
    analyticsInput = dialog.querySelector('[data-ppwg-analytics]');functionalInput = dialog.querySelector('[data-ppwg-functional]');errorNode = dialog.querySelector('[role="alert"]');
    dialog.addEventListener('click',function (event) {
      var button = event.target.closest('[data-ppwg-consent-action]');if (!button) return;
      var action = button.getAttribute('data-ppwg-consent-action');
      if (action === 'reject') save({analytics:false,functional:false,performance:false,advertisement:false});
      else if (action === 'accept') save(retained(mode === 'preferences' ? analyticsInput.checked : true,mode === 'preferences' ? functionalInput.checked : getState().functional));
      else if (mode === 'preferences') notice();else preferences();
    });
    dialog.querySelector('.ppwg-privacy-close').addEventListener('click',close);
    dialog.addEventListener('keydown',function (event) { if (event.key === 'Escape' && getState().completed) close(); });
    dialog.querySelector('.ppwg-privacy-close').hidden = !getState().completed;
    dialog.hidden = getState().completed;
    opener.setAttribute('aria-expanded',dialog.hidden?'false':'true');
  }
  function reconcile() { if (!options) return;announce();mount(); }
  function install(settings) {
    if (instance) return instance;
    if (!settings || typeof settings.isPublicPage !== 'function') return null;
    options = settings;
    if (!publicPage()) { (settings.measurementIds || ['G-VK55BK4WPF']).forEach(function (id) { root['ga-disable-'+id] = true; });options = null;return null; }
    instance = {getState:getState,preferences:preferences,reconcile:reconcile,acceptAnalytics:function () { return save(retained(true,getState().functional)); }};
    root.addEventListener('pageshow',reconcile);root.addEventListener('focus',reconcile);root.document.addEventListener('visibilitychange',reconcile);
    root.document.addEventListener('cookieyes_consent_update',reconcile);
    if (root.cookieStore && typeof root.cookieStore.addEventListener === 'function') root.cookieStore.addEventListener('change',reconcile);
    reconcile();if (!root.document.body) root.document.addEventListener('DOMContentLoaded',reconcile,{once:true});
    return instance;
  }
  root.ppwgNativeConsent = {controllerId:identity,install:install,getState:getState,preferences:preferences,reconcile:reconcile};
})(window);
