import React, { createContext, useContext, useEffect, useState } from 'react';
import { CALLBACK_REQUEST_URL, LEGACY_FOLLOWUP_URL, OFFICE_CLOSED_DATES } from '../config/contact';
import { isOfficeOpen, safeCallbackUrl, OFFICE_HOURS_LABEL } from '../utils/officeHours';

const ContactContext = createContext({ isOpen: null, callbackUrl: '' });

export const ContactAvailabilityProvider = ({ children }) => {
  // Identical server/client initial markup; with a configured URL the safe default
  // is a working callback link, including when JavaScript is unavailable.
  const [isOpen, setIsOpen] = useState(null);
  useEffect(() => {
    let timer;
    const refresh = () => setIsOpen(isOfficeOpen(new Date(), OFFICE_CLOSED_DATES));
    const tick = () => {
      refresh();
      timer = window.setTimeout(tick, 60000 - (Date.now() % 60000) + 50);
    };
    tick();
    const visible = () => { if (!document.hidden) refresh(); };
    document.addEventListener('visibilitychange', visible);
    window.addEventListener('focus', refresh);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', visible);
      window.removeEventListener('focus', refresh);
    };
  }, []);
  return (
    <ContactContext.Provider value={{ isOpen, callbackUrl: safeCallbackUrl(CALLBACK_REQUEST_URL) }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactAvailability = () => {
  const state = useContext(ContactContext);
  return { ...state, showCallback: Boolean(state.callbackUrl) && state.isOpen !== true };
};

export const CallOrCallback = ({ section, className, callLabel = 'Call our ketamine team' }) => {
  const { callbackUrl, showCallback } = useContactAvailability();
  // Keep the telephone node mounted for Google's number replacement/restoration.
  // Its visibility changes; the callback is a separate node Google cannot rewrite.
  return (
    <>
      <a
        key="call"
        href="tel:+13104377399"
        className={className}
        hidden={showCallback}
        style={showCallback ? { display: 'none' } : undefined}
        data-service="ketamine"
        data-cta="call-cta"
        data-section={section}
        aria-label="Call our ketamine team at 310 437 7399"
      >
        {callLabel}
      </a>
      {callbackUrl && (
        <a
          key="callback"
          href={callbackUrl}
          className={className}
          hidden={!showCallback}
          style={!showCallback ? { display: 'none' } : undefined}
          data-service="ketamine"
          data-cta="followup-cta"
          data-section={section}
          rel="noreferrer"
          referrerPolicy="no-referrer"
          aria-label="Request a callback from our ketamine team"
        >
          Request a callback
        </a>
      )}
    </>
  );
};

export const PrivateFollowUp = ({ section = 'closing' }) => {
  const { callbackUrl, showCallback } = useContactAvailability();
  if (showCallback) return <p className="ketamine-note">Office hours: {OFFICE_HOURS_LABEL}.</p>;
  return (
    <p className="ketamine-note">
      Prefer to talk first?{' '}
      <a
        href={callbackUrl || LEGACY_FOLLOWUP_URL}
        data-service="ketamine"
        data-cta="followup-cta"
        data-section={section}
        rel="noreferrer"
        referrerPolicy="no-referrer"
        style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '0.2em' }}
      >
        Request a call from our team
      </a>
    </p>
  );
};
