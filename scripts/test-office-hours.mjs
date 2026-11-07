import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
// Load the dependency-free ES module without changing Gatsby's package type.
const source = await readFile(new URL('../src/utils/officeHours.js', import.meta.url), 'utf8');
const {isOfficeOpen, safeCallbackUrl} = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
const cases = [
  ['2026-11-09T15:59:59Z', false], ['2026-11-09T16:00:00Z', true],
  ['2026-11-10T00:59:59Z', true], ['2026-11-10T01:00:00Z', false],
  ['2026-11-07T17:00:00Z', false], ['2026-11-08T17:00:00Z', false],
  ['2026-07-06T14:59:59Z', false], ['2026-07-06T15:00:00Z', true],
  ['2026-07-07T00:00:00Z', false], ['2026-03-09T15:00:00Z', true],
  ['2026-11-02T16:00:00Z', true],
];
for (const timeZone of ['UTC', 'Europe/Madrid', 'Asia/Tokyo']) {
  process.env.TZ = timeZone;
  for (const [instant, open] of cases) assert.equal(isOfficeOpen(new Date(instant)), open, instant + ' / ' + timeZone);
}
assert.equal(isOfficeOpen(new Date('2026-11-26T18:00:00Z'), ['2026-11-26']), false);
assert.equal(isOfficeOpen(new Date('invalid')), null);
for (const url of ['', null, 'javascript:alert(1)', 'http://example.com/callback',
  'https://example.com/callback?gclid=test', 'https://example.com/callback#health',
  'https://user:pass@example.com/callback']) assert.equal(safeCallbackUrl(url), '');
assert.equal(safeCallbackUrl('https://intake.pacificpaingroup.com/callback'), 'https://intake.pacificpaingroup.com/callback');
console.log('Passed: opening/closing boundaries, weekends, DST, visitor timezones, closure override, invalid clock and clean HTTPS callback URLs.');
