import './src/css/tailwind.css';

import './src/css/ketamine.css';


import { compactConsentNotice } from './src/utils/compactConsentNotice';

let stopConsentNotice;
export const onRouteUpdate = () => {
  const consent = window.ppwgNativeConsent && window.ppwgNativeConsent.install({
    loadCmp: true,
    measurementIds: ['G-VK55BK4WPF'],
    isPublicPage: () => window.location.protocol === 'https:' &&
      window.location.hostname === 'ketamine.pacificpaingroup.com' &&
      window.location.pathname === '/',
  });
  if (consent) consent.reconcile();
  if (stopConsentNotice) stopConsentNotice();
  stopConsentNotice = compactConsentNotice();
};
