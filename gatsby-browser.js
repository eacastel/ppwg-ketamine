import './src/css/tailwind.css';

import './src/css/ketamine.css';


export const onRouteUpdate = () => {
  const consent = window.ppwgNativeConsent && window.ppwgNativeConsent.install({
    measurementIds: ['G-VK55BK4WPF'],
    isPublicPage: () => window.location.protocol === 'https:' && !window.location.port &&
      window.location.hostname === 'ketamine.pacificpaingroup.com' &&
      window.location.pathname === '/',
  });
  if (consent) consent.reconcile();
};
