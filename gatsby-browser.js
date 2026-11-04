import './src/css/tailwind.css';

import './src/css/ketamine.css';


import { compactConsentNotice } from './src/utils/compactConsentNotice';

let stopConsentNotice;
export const onRouteUpdate = () => {
  if (stopConsentNotice) stopConsentNotice();
  stopConsentNotice = compactConsentNotice();
};
