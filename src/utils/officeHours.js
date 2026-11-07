export const OFFICE_TIME_ZONE = 'America/Los_Angeles';
export const OFFICE_HOURS_LABEL = 'Monday–Friday, 8 a.m.–5 p.m. Pacific';

// null means the clock/timezone could not be determined. Prefer callback then.
export function isOfficeOpen(date = new Date(), closedDates = []) {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: OFFICE_TIME_ZONE,
      weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', hourCycle: 'h23',
    }).formatToParts(date);
    const value = key => parts.find(part => part.type === key)?.value;
    const localDate = `${value('year')}-${value('month')}-${value('day')}`;
    if (closedDates.includes(localDate)) return false;
    const hour = Number(value('hour'));
    if (!Number.isFinite(hour)) return null;
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(value('weekday')) &&
      hour >= 8 && hour < 17;
  } catch {
    return null;
  }
}

export function safeCallbackUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return '';
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) return '';
    return url.href;
  } catch {
    return '';
  }
}
