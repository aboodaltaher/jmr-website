# Phase 4 — on-site fixes (home focus, hreflang, company name, contact, nav)

Branch: `feature/onsite-fixes-phase4` (stacked on `feature/new-services-casestudies`).
Verification: `eslint` ✓ (0 errors) · `tsc --noEmit` ✓ · `next build` ✓ (50 routes) ·
`scripts/crawl.mjs` ✓ over 31 routes (one H1, unique title/description, self
canonical, og:image, correct hreflang pairs, consistent header links per locale,
duct anchors present + linked).

## T1 — Home title & hero focus
Two title options (both 50–60 chars, single promise):
- **A (used):** `Engineer-Led HVAC Contractor in Dubai & the UAE | AGEC` (54)
- B: `HVAC Installation & Maintenance Contractor Dubai | AGEC` (55)

Chose A — it leads with the one promise (engineer-led HVAC contractor) rather than a
feature list. Meta description (148), og/twitter follow via buildMetadata, with the
5.0★ / 32-review figures pulled from the config. Added two audience entry cards below
the hero: homeowner/tenant → /ac-maintenance-dubai, developer/consultant/FM → /services.

## T2 — Duct-cleaning card anchors
Home cards already deep-link to per-package anchors on /ac-duct-cleaning-dubai with
`scroll-mt-24` (clears the sticky header). Added reduced-motion-aware
`scroll-behavior: smooth`. Verified anchors resolve (crawl) and work on mobile widths.

## T3 — hreflang (en-AE / ar-AE / x-default)
All five EN/AR pairs carry reciprocal alternates with self-referencing canonicals;
keys switched to region-qualified `en-AE` / `ar-AE`, `x-default` → English. Pages with
no Arabic equivalent carry no hreflang. Arabic pages set `<html lang=ar dir=rtl>` via
`ArabicChrome`.

**hreflang pair list** (each page lists both + x-default→EN):

| English | Arabic |
|---|---|
| `/` | `/ar` |
| `/ac-maintenance-dubai` | `/ar/ac-maintenance-dubai` |
| `/ac-repair-dubai` | `/ar/ac-repair-dubai` |
| `/ac-duct-cleaning-dubai` | `/ar/ac-duct-cleaning-dubai` |
| `/ac-amc-dubai` | `/ar/ac-amc-dubai` |

## T4 — Company name explanation
/about now states: "AGEC is the trading name of AGEC Technical Services L.L.C., the
licensed company behind this website." (neutral line + TODO to confirm). Footer licence
line and the Organization + HVACBusiness JSON-LD now read `name`/`legalName` from the
shared `COMPANY_FULL` / `COMPANY_LEGAL` / `LICENCE_NO` constants.

## T5 — Contact form
Email and subject are now optional on /contact (client zod + server schema + labels);
name, phone and message stay required; reply-to is guarded when email is empty and the
email template already omits blank rows. The lazy Google Maps embed (fixed height,
`loading="lazy"`) and plain-text address/phone/email were already present; added a
WhatsApp row (wa.me link) to the contact-info block.

## T6 — Project category labels
Reviewed all 12 categories in `src/data/projects.ts`: all correct from scope text
(Residential 6, Commercial 4, Data Center 2 — totals match the filter tabs). AVE
Restaurant is correctly Commercial. Cultural Center (public facility) left as Commercial
— the closest of the three tabs — and flagged in CONTENT_NEEDED.md for confirmation.

## T7 — Shared header & nav
The English Header is already the single shared header on every route via `SiteFrame`.
Moved the nav arrays into one shared `src/lib/nav.ts` used by desktop and mobile menus,
and added `LOCALE_PAIRS` + helpers so the language switch targets the current page's
counterpart: the EN header's "العربية" → the page's `/ar/...` equivalent (else `/ar`),
and the Arabic chrome's "English" → the page's English equivalent (else `/`).

## Files changed (Phase 4)
`src/app/page.tsx`, `src/lib/nav.ts` (new), `src/components/Header.tsx`,
`src/components/ArabicChrome.tsx`, `src/app/globals.css`, the 9 EN/AR pages (hreflang
keys), `src/app/about/page.tsx`, `src/components/Footer.tsx`, `src/components/SiteSchema.tsx`,
`src/components/ContactForm.tsx`, `src/app/actions.ts`, `src/app/contact/page.tsx`,
`CONTENT_NEEDED.md`, `scripts/crawl.mjs`.

## Flagged for native Arabic review
No new Arabic copy this phase. (The language-switch targets changed, not the Arabic
text.) Prior Arabic flags remain in CONTENT_NEEDED.md.

## Note on branching
This branch stacks on the unmerged Phase 3 branch (`feature/new-services-casestudies`)
because T6 depends on its `data/projects.ts` refactor. Merge Phase 3 first, or merge
the two together.

## CONTENT_NEEDED.md additions this phase
- Confirm the trading-name ↔ licensed-entity relationship wording (T4).
- Confirm the Cultural Center category / whether to add an Institutional tab (T6).
(Full file sent alongside this report.)
