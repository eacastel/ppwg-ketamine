(function (root) {
  'use strict';
  if (root.ppwgNativeConsent) return;
  var instance;
  var pendingWithdrawal = false;
  var key = '148ef9d7374bcc093b8b8bf6bf93398f';
  function fields() {
    var cookie;
    try { cookie = root.document.cookie.split(';').find(function (entry) {
      return entry.trim().indexOf('cookieyes-consent=') === 0;
    }); } catch (_) { return {}; }
    var result = {};
    if (!cookie) return result;
    try {
      decodeURIComponent(cookie.trim().slice('cookieyes-consent='.length)).split(',').forEach(function (entry) {
        var separator = entry.indexOf(':');
        if (separator > 0) result[entry.slice(0, separator)] = entry.slice(separator + 1);
      });
    } catch (_) { /* Invalid consent is not an affirmative choice. */ }
    return result;
  }
  function read() {
    var saved = fields();
    return {
      completed: saved.action === 'yes',
      analytics: !pendingWithdrawal && saved.action === 'yes' && saved.analytics === 'yes',
      pendingWithdrawal: pendingWithdrawal,
      functional: saved.action === 'yes' && saved.functional === 'yes',
      performance: saved.action === 'yes' && saved.performance === 'yes',
      advertisement: saved.action === 'yes' && saved.advertisement === 'yes',
      // Retain historical category truth without authorizing advertising.
      adsAllowed: false
    };
  }
  function install(options) {
    if (instance) return instance;
    if (!options || typeof options.isPublicPage !== 'function' || !options.isPublicPage()) return null;
    var doc = root.document;
    var ids = options.measurementIds || ['G-VK55BK4WPF'];
    var lastState = '';
    var observer;
    var scheduled = false;
    function clearCookies() {
      var host = root.location.hostname;
      var parts = host.split('.');
      var domains = ['', host, '.' + host];
      for (var i = 1; i < parts.length - 1; i++) domains.push('.' + parts.slice(i).join('.'));
      var pathParts = root.location.pathname.split('/').filter(Boolean);
      var paths = ['/'];
      for (var j = 1; j <= pathParts.length; j++) {
        var path = '/' + pathParts.slice(0, j).join('/');
        paths.push(path, path + '/');
      }
      doc.cookie.split(';').map(function (entry) { return entry.trim().split('=')[0]; })
        .filter(function (name) { return /^(?:_ga(?:_|$)|_gid$|_gat(?:_|$)|_gac_|_utm[a-z]$)/.test(name); })
        .forEach(function (name) {
          domains.forEach(function (domain) {
            paths.forEach(function (path) {
              doc.cookie = name + '=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=' + path + '; SameSite=Lax; Secure' + (domain ? '; Domain=' + domain : '');
            });
          });
        });
    }
    function gate(allowed) {
      ids.forEach(function (id) { root['ga-disable-' + id] = !allowed; });
      if (!allowed) clearCookies();
    }
    function announce(state) {
      if (!options.isPublicPage()) { gate(false);return; }
      var allowed = state.analytics;
      gate(allowed);
      var signature = JSON.stringify([state.completed, allowed, state.functional, state.performance, state.advertisement]);
      if (signature === lastState) return;
      lastState = signature;
      var detail = Object.assign({}, state, {analytics: allowed});
      doc.dispatchEvent(new CustomEvent('ppwg_consent_update', {detail: detail}));
      root.dataLayer = root.dataLayer || [];
      if (typeof root.dataLayer.push === 'function') root.dataLayer.push({
        event: 'ppwg_consent_update', ppwg_analytics_allowed: allowed,
        ppwg_page_path: root.location.pathname
      });
    }
    function toggle(category, checked) {
      var input = doc.getElementById('ckySwitch' + category);
      if (!input) return category !== 'analytics';
      if (input.checked !== checked) {
        if (input.disabled) return false;
        input.click();
      }
      return input.checked === checked;
    }
    function preferences() {
      if (typeof root.revisitCkyConsent === 'function') root.revisitCkyConsent();
    }
    function acceptAnalytics() {
      var save = doc.querySelector('[data-cky-tag="detail-save-button"]');
      var saved = read();
      if (!options.isPublicPage() || !save || !doc.getElementById('ckySwitchanalytics')) {
        gate(false);preferences();return false;
      }
      toggle('functional', saved.functional);
      toggle('performance', saved.performance);
      var privacySignal = root.navigator.globalPrivacyControl === true || root.navigator.doNotTrack === '1';
      toggle('advertisement', saved.advertisement && !privacySignal);
      if (!toggle('analytics', true)) { gate(false);preferences();return false; }
      pendingWithdrawal = false;
      // Delegate ID, expiry, category state, closing and legacy events to CMP.
      save.click();
      return read().analytics;
    }
    function decorate() {
      scheduled = false;
      if (!options.isPublicPage()) { gate(false);return; }
      doc.documentElement.setAttribute('data-ppwg-native-consent', '');
      var labels = {
        'accept-button': 'Accept cookies', 'detail-accept-button': 'Accept cookies',
        'reject-button': 'Reject', 'detail-reject-button': 'Reject',
        'settings-button': 'Preferences', 'detail-save-button': 'Save preferences'
      };
      Object.keys(labels).forEach(function (tag) {
        doc.querySelectorAll('[data-cky-tag="' + tag + '"]').forEach(function (button) {
          button.setAttribute('aria-label', labels[tag]);
          if (button.textContent.trim() !== labels[tag]) button.textContent = labels[tag];
        });
      });
    }
    function schedule() {
      if (scheduled) return;
      scheduled = true;
      root.setTimeout(decorate, 0);
    }
    function capture(event) {
      var button = event.target.closest && event.target.closest('[data-cky-tag]');
      if (!button || !options.isPublicPage()) return;
      var tag = button.getAttribute('data-cky-tag');
      if (tag === 'accept-button' || tag === 'detail-accept-button') {
        event.preventDefault();event.stopImmediatePropagation();acceptAnalytics();
      } else if (tag === 'reject-button' || tag === 'detail-reject-button') {
        pendingWithdrawal = true;
        announce(Object.assign({}, read(), {completed: true, analytics: false, functional: false, performance: false, advertisement: false}));
      } else if (tag === 'detail-save-button') {
        var input = doc.getElementById('ckySwitchanalytics');
        // Close the gate and clean cookies before native withdrawal handlers run.
        pendingWithdrawal = !input || !input.checked;
        if (pendingWithdrawal) announce(Object.assign({}, read(), {analytics: false}));
      }
    }
    function reconcile() {
      var saved = fields();
      if (saved.action === 'yes' && saved.analytics === 'no') pendingWithdrawal = false;
      announce(read());schedule();
    }
    function loadCmp() {
      if (!options.loadCmp || root.cookieyes || doc.querySelector('script[src^="https://cdn-cookieyes.com/client_data/' + key + '/script.js"]')) return;
      var script = doc.createElement('script');
      script.id = 'ppwg-native-cookieyes';script.async = true;
      script.src = 'https://cdn-cookieyes.com/client_data/' + key + '/script.js';
      script.onload = reconcile;
      doc.head.appendChild(script);
    }
    // Root and Analytics must agree on single source loading before enabling it.
    instance = {getState: read, acceptAnalytics: acceptAnalytics, preferences: preferences, reconcile: reconcile};
    doc.addEventListener('click', capture, true);
    doc.addEventListener('cookieyes_consent_update', reconcile);
    root.addEventListener('pageshow', reconcile);
    root.addEventListener('focus', reconcile);
    doc.addEventListener('visibilitychange', reconcile);
    reconcile();
    function start() {
      decorate();loadCmp();
      observer = new MutationObserver(schedule);
      observer.observe(doc.body, {childList: true, subtree: true});
    }
    if (doc.body) start();else doc.addEventListener('DOMContentLoaded', start, {once: true});
    return instance;
  }
  root.ppwgNativeConsent = {install: install, getState: read};
})(window);
