# Phase 2 SEO/UX Audit — Fix Report

Branch: `audit-phase2` (7 commits off `main`).
Verification: `eslint` ✓ (0 errors) · `next build` ✓ (47/47 pages).

> **Context:** as in the earlier pass, much of this audit was already implemented
> in `main` (it reads against an older deploy). Where a finding was already
> resolved, that's noted below; the remaining real work was done.

## What changed, per task

**Task 1 — Single source of truth.** `src/lib/company.ts` is the one config
(phone, WhatsApp, email, address, licence, legal + trading names, review
count/rating/URL, project count, largest TR, emirates). It was already in use
site-wide — no stray `27`/`17` review counts, no old "Alhamra / Al Karama"
address, no "30+/more than 30" project counts remained. New this pass: wired the
Arabic service pages' JSON-LD `email`/`address` to `EMAIL`/`ADDRESS_LINE`/
`ADDRESS_CITY` (they already used `PHONE`). Review count stays **32** with an
existing confirm-monthly TODO; email is the single `a.altaher@agec.ae`.

**Task 2 — Two pages on the current template.** `/services/ventilation-fresh-air`
was already on the shared `ServiceDetailLayout` + `buildMetadata` (canonical,
og/twitter matching the page title, `/og-image.png`). The header/footer are
global via `SiteFrame`, so neither page carried an "old" chrome. Thermostat: meta
description rewritten to ~150 chars keeping **Dubai, Google Nest, ecobee**; title
already < 60 chars.

**Task 3 — Coverage claim.** Replaced every "all 7 / all seven emirates" with
honest wording derived from `EMIRATES_WITH_PROJECTS` (Dubai, Sharjah, Ajman,
Abu Dhabi) + "available across the UAE". Added `COVERAGE_SENTENCE`,
`COVERAGE_SHORT`, `EMIRATES_WITH_PROJECTS_LABEL` to config. Updated: home stat
tile + proof strip, quote/book copy, service-areas intro, page FAQs, hero
eyebrows, footer chips, thermostat stats, site JSON-LD description, and the
Arabic AMC answer. The quote-form emirate dropdown was left unchanged.

**Task 4 — Thermostat claims.** The `-23% / 10–23% / 15–20%` spread and the
"Join hundreds…" and "Authorized supplier" lines were already gone; the page
uses one manufacturer-sourced figure (ecobee eco+, footnoted) and
"Supplier and professional installer". Consolidated that figure into a single
config constant `THERMOSTAT_SAVINGS`. **Deviation:** kept the sourced
"up to 26%" rather than the brief's suggested unsourced "about 20%", per the
no-invented-numbers rule (see TODO to keep the citation).

**Task 5 — Duct cleaning.** Added anchor ids (`#premium-duct-cleaning`,
`#full-ac-cleaning`, `#split-ac-cleaning`, `#coil-cleaning`) to the packages on
`/ac-duct-cleaning-dubai` and pointed each home AC-cleaning card at its anchor
(`scroll-mt-24` offsets the sticky header). No Dubai Municipality text added.

**Task 6 — Navigation.** One shared `Header` already renders on every route via
`SiteFrame`, with Services, Maintenance, Projects, Insights, About, Contact,
Arabic switch and Get a quote, plus a working mobile menu. Verified; no change
needed.

**Task 7 — Overlapping maintenance pages.** No pages merged or deleted; URLs
unchanged. All four already had unique H1s and metadata (table below). Added
clear links from the hub's "What We Cover" paragraph to the dedicated
`/ac-repair-dubai` and `/ac-amc-dubai` pages (previously only commercial
maintenance was linked).

| Route | Title | Meta description | H1 |
|---|---|---|---|
| `/ac-maintenance-dubai` (hub) | AC Maintenance Dubai \| AC Servicing, Repair & AMC \| AGEC | AC maintenance in Dubai by HVAC engineers: servicing, repair, coil and duct cleaning, gas top-up and AMC plans. Call +971 58 557 5987. | AC Maintenance in Dubai — Servicing, Repair & AMC |
| `/ac-repair-dubai` | AC Repair Dubai \| AC Technicians \| AGEC | AC not cooling, leaking or tripping? AGEC engineers find the root cause, quote in writing first and report every repair. Call or WhatsApp. | AC Repair in Dubai: Diagnosed by an Engineer, Quoted Before We Start |
| `/ac-amc-dubai` | AC AMC Dubai \| Annual Maintenance Contracts \| AGEC | AC annual maintenance contracts for Dubai and UAE villas, apartments and offices: scheduled visits, written reports, priority repairs. Get an AMC quote. | AC Annual Maintenance Contracts in Dubai |
| `/services/maintenance` | Commercial HVAC Maintenance Dubai \| AMC \| AGEC | Chillers, AHUs, FCUs and VRF maintained under one contract, with logged visits and reports for facility managers. Request a site survey. | Commercial HVAC Maintenance and AMC for Buildings in Dubai |

**Task 8 — Structured data & mobile bar.** LocalBusiness (`HVACBusiness` +
`GeneralContractor`) + Organization JSON-LD already render site-wide (home and
contact included), with no `AggregateRating`; wired its NAP to the config.
Added `BreadcrumbList` JSON-LD to the two inner pages that lacked it
(`/air-balancing-airflow-testing-dubai` and blog posts). Added a **Get a quote**
button to the mobile sticky bar (now Call / WhatsApp / Get a quote).

**Task 9 — Event tracking (no keys).** `click_call` (tel:) and `click_whatsapp`
(wa.me) already fire globally via `ConversionTracking`. Changed `trackFormSubmit`
to push a single **`form_submit`** event with **`form_name`** (quote, repair,
amc, balancing, contact, thermostat); the thermostat inline form now reports
`thermostat`. Added a **`/quote/thank-you`** route and redirected the quote form
to it on success. No Google tags or IDs added (existing Google Ads tag left
as-is).

## TODOs that need the owner
- `company.ts` — `GOOGLE_RATING` / `GOOGLE_REVIEW_COUNT` (32): confirm monthly vs the live Google Business Profile.
- `company.ts` — `THERMOSTAT_SAVINGS` ("up to 26%"): keep the ecobee eco+ citation; change the figure only with a source.
- `company.ts` — second email `m.ghabboun@agec.ae`: confirm it's retired (site uses only `a.altaher@agec.ae`).
- `metadata.ts` — `DEFAULT_OG_IMAGE`: optional richer branded social image.
- `SiteSchema.tsx` — confirm office hours if different from phone availability; add a LinkedIn URL to `sameAs` if any.

## Not done / notes
- **Deviation (Task 4):** kept the sourced 26% over the brief's suggested 20% (see above).
- **Pre-existing lint warning:** unused `Check` import in `src/app/ar/ac-maintenance-dubai/page.tsx` — not caused by these changes; left in place (flagging, not deleting pre-existing dead code). Safe to remove.
- Nothing pushed / no PR opened (not requested).
