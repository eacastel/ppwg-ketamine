# Ketamine landing corrections — September 13, 2026

Original source preserved on GitHub at annotated tag `backup/ketamine-before-funnel-2026-09-13`, commit `cd272a0c459fe0eb25f47c6049d6d1da019f767c`. This is a source backup; the checkout had no original compiled `public/` directory to preserve. Changes are on `marketing/ketamine-funnel-2026-09-13`; production/main are unchanged.

## Changes

- Keyword-aligned Torrance hero, Ketamine for Mental Health and Ketamine for Pain sections, visible self-pay pricing and course commitment, clear consultation process and FAQs.
- Existing logo, Poppins heading family, hero imagery, blue/teal gradients and rounded visual style retained. Shared scoped CSS defines consistent typography, spacing and button variants.
- Prominent telephone links, same-tab consultation navigation, consistent consultation component and a mobile bottom action bar.
- Unique section IDs, keyboard focus states, skip link, accurate lifestyle-image descriptions and page-specific title/description/canonical metadata. Kept existing testimonials verbatim while identifying general practice versus combined-treatment experiences.
- CTA attributes now use `consultation-cta` / `call-cta` with generic placement identifiers (no mental-health/pain selections). This changes markup only: it does not establish operational Google tracking. Existing Google/Facebook configuration was not edited.

## Verification

Production `npm run build` passed using existing installed dependencies; no packages installed or upgraded. Existing dependency deprecation/Browserslist/Tailwind warnings remain.

Local build command (keeps Gatsby CLI state inside this checkout):

```sh
XDG_CONFIG_HOME="$PWD/.local-runtime/config" GATSBY_TELEMETRY_DISABLED=1 GATSBY_CPU_COUNT=2 npm run build
python3 -m http.server 4174 --bind 127.0.0.1 --directory public
```

Browser check: `node scripts/check-landing.cjs`, with isolated Chrome debugging on localhost:9334. Passed at 1440, 1024, 768, 390 and 375px: no horizontal overflow, responsive action visibility, Poppins heading declaration, minimum hero CTA size, unique IDs, valid internal anchors, correct consultation destinations, same-tab behavior, metadata, FAQ interaction and no runtime exceptions. Visually inspected desktop/mobile screenshots. Browser checks block production analytics/advertising hosts and make no form submissions. Screenshots and runtime state are ignored under `.local-runtime/`.

## Release handoff

Website should review this branch, confirm live consent controls do not overlap the mobile bar, and verify the public CTA tracking contract before release. The shared Intake form still uses generic consultation copy; ketamine-specific protected-form presentation and confirmation belong to Intake's separate repository. Existing form route remains intact. No production deployment, Google Ads changes, budget changes or paid services were made. October 1 remains the earliest paid-pilot start.

## Footer and attribution follow-up

Added Torrance and Manhattan Beach locations with two lazy-loaded Google Maps embeds and directions links. Manhattan Beach address verified against the live main site's HTML and structured data at https://pacificpaingroup.com/manhattan-beach: 2809 N Sepulveda Blvd, Suite C, Manhattan Beach, CA 90266-2727. Scheduling copy asks the office to confirm the ketamine appointment location rather than asserting every service is offered at both offices.

Replicated the main footer's LegitScript verification destination and current seal 5280196, Google Business, Yelp, Facebook, Instagram, LinkedIn and Psychology Today profile links. Social SVGs were copied from the same Simple Icons sources used by the main footer; the Psychology Today SVG is copied from its existing footer markup. The LegitScript badge links to verification for pacificpaingroup.com. No social feeds, new pixels, Maps API keys or paid Maps services were added.

Every contact, directions and profile link has data-service="ketamine". GTM workspace 24 now contains new variables 76/77, trigger 78 and tag 79, saved in gtm-ketamine-landing-draft.json. Event: ketamine_landing_click; fields: service_context=ketamine, cta_type and cta_placement. Consultation/call actions are inquiry-intent signals; directions/profile/trust clicks remain separate engagement, not leads. No condition-specific user labels or audience creation.

These GTM changes are UNPUBLISHED pending Website preview and container review. They require explicit CookieYes analytics consent, no GPC, and analytics_storage. Trigger is scoped to the public ketamine homepage, with fixed URL/title/referrer fields and no form data. Local variable checks verified nested clicks, allowed values and fail-closed unknown values. Browser checks verified two maps, six profile links, the verification link and service attribution attributes. Maps rendered in the desktop preview. Live GA4 receipt is not yet verified; this does not change the previously agreed Website verification gate.
