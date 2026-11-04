// Presentation only. CookieYes remains responsible for all consent choices.
export function compactConsentNotice() {
  if (typeof window === 'undefined' || window.location.pathname !== '/') return () => {};
  const media = window.matchMedia('(max-width: 767px)');
  let details;
  const matchViewport = () => {
    if (details) details.open = !media.matches;
  };
  const enhance = () => {
    const description = document.querySelector('.cky-consent-container .cky-notice-des');
    if (!description || !document.querySelector('.ketamine-hero')) return false;
    details = description.querySelector('.ppwg-consent-details');
    if (details) return true;
    // Keep an unfamiliar or translated notice intact.
    if (!description.textContent.includes('We use essential technologies')) return false;
    const brief = document.createElement('p');
    brief.className = 'ppwg-consent-brief';
    brief.textContent = 'Essential cookies keep this site working. Optional analytics and advertising technologies measure visits and campaigns, with your permission.';
    details = document.createElement('details');
    details.className = 'ppwg-consent-details';
    const summary = document.createElement('summary');
    summary.textContent = 'Cookie details and policy';
    // CookieYes handles keyboard events globally. Keep this native disclosure
    // operable without forwarding its Enter/Space keys to the consent controls.
    summary.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.stopPropagation();
        details.open = !details.open;
      }
    });
    details.appendChild(summary);
    // Preserve the complete original disclosure and its policy link.
    while (description.firstChild) details.appendChild(description.firstChild);
    description.appendChild(brief);
    description.appendChild(details);
    matchViewport();
    return true;
  };
  const observer = new MutationObserver(() => {
    if (enhance()) observer.disconnect();
  });
  if (!enhance()) observer.observe(document.body, { childList: true, subtree: true });
  media.addEventListener('change', matchViewport);
  return () => {
    observer.disconnect();
    media.removeEventListener('change', matchViewport);
  };
}
