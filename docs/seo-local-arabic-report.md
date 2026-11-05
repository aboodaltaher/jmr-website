# SEO / Arabic / Local SEO upgrade — report

Three workstreams, one commit each, on `claude/agec-ac-bill-blog-post-snlswv`
(branched fresh from `main` @ `dd36ce6`). No facts were invented; every new claim
is a translation of existing copy or a figure from `src/lib/company.ts`.

Verification on every commit: `npm run lint` (0 errors), `npm run typecheck` (clean),
`npm run build` (success), and `npm run seo-check` against the production build
(**0 problems** across 67 URLs on the final run).

---

## Workstream 1 — Technical SEO

**Files:** `src/app/robots.ts`, `src/app/sitemap.ts`, `src/lib/routes.ts` (new),
`src/lib/metadata.ts`, `src/components/SiteSchema.tsx`, `src/lib/company.ts`,
`src/app/layout.tsx`, `src/app/page.tsx`, `src/app/quote/thank-you/page.tsx`,
`scripts/seo-check.mjs` (new), `package.json`.

- **robots.ts** — allow all; `Disallow: /api/` only (NOT `/_next/`, which Google needs
  to render); sitemap + host referenced. `/robots.txt` returns 200.
- **sitemap.ts** — generated from one route list (`src/lib/routes.ts`). Each bilingual
  page carries reciprocal `en-AE` / `ar-AE` alternates (via `LOCALE_PAIRS`); drafts and
  the noindex utility pages (`/review`, `/quote/thank-you`) are excluded. `/sitemap.xml`
  returns 200 with `xhtml:link` alternates.
- **hreflang + canonicals** — `buildMetadata` now auto-derives `en-AE` / `ar-AE` /
  `x-default` from `LOCALE_PAIRS` when a page doesn't pass `languages` itself, so every
  bilingual page (EN and AR) gets reciprocal hreflang and a self-canonical. Arabic pages
  carry `lang`/`dir="rtl"` on their chrome container (ArabicChrome).
- **JSON-LD** — `AggregateRating` (5.0 / 32, from the shared constants, matching the
  visible rating) added to the LocalBusiness node; `sameAs` (Instagram + Google Maps)
  and `areaServed` already present. Service + BreadcrumbList on every service page,
  FAQPage wherever a visible FAQ exists. All blocks validate as JSON (checked by seo-check).
- **Performance** — see findings below.
- **scripts/seo-check.mjs** (`npm run seo-check`) — crawls the built site from the
  sitemap and checks: HTTP status, `<title>` length, meta description length, exactly one
  `<h1>`, self-canonical, hreflang pairs, `og:image`, JSON-LD validity, broken internal
  links, and missing `alt`. Run output is summarised below.

## Workstream 2 — Arabic & bilingual

**New Arabic pages (10):** `/ar/services`, `/ar/quote`, `/ar/contact`, `/ar/about`,
`/ar/services/hvac-installation-dubai`, `/ar/services/tab-testing-adjusting-balancing-dubai`,
`/ar/services/chiller-maintenance-dubai`, `/ar/services/ventilation-fresh-air`,
`/ar/smart-thermostat-installation-dubai`, `/ar/air-balancing-airflow-testing-dubai`.
(`/ar` + four `/ar/ac-*` pages already existed → 15 Arabic pages total.)

- `ServiceDetailLayout` is now locale-aware (`lang="ar"`): localised headings, CTA,
  breadcrumb and schema (`inLanguage`), `/ar` quote link; the English RelatedServices
  block is skipped on Arabic pages. The six Arabic service/landing pages reuse it, so the
  design matches the English template exactly.
- Forms translatable: `ContactForm`, `QuoteForm`, `FormAssurance` take a `lang` prop with
  Arabic labels, placeholders and validation messages. Phone/email kept LTR. The Arabic
  quote form confirms inline (no `/ar` thank-you route).
- Arabic chrome: header nav extended (Services, About, Contact) + Arabic quote CTA; the
  language switch resolves to the current page's counterpart (`arEquivalentOf` /
  `enEquivalentOf` over the extended `LOCALE_PAIRS`).
- Arabic home coverage wording and "32 مشروعاً" confirmed correct (no "الإمارات السبع").
- **`ARABIC_REVIEW.md`** lists every Arabic string for a native-speaker check. No native
  reviewer is on file (see CONTENT_NEEDED §G) — all Arabic is flagged for review.

## Workstream 3 — Local SEO

**New location pages (3):** `/hvac-contractor-sharjah`, `/hvac-contractor-ajman`,
`/hvac-contractor-abu-dhabi` — built on a shared `LocationPageLayout` matching the
service-page design. Each: unique title (57–60 chars), description (147–151), one H1,
~450–550-word body, FAQ (4) with FAQPage schema, Service schema with `areaServed` set to
that emirate, breadcrumb, quote CTA, and links to the relevant projects + service pages.
They use **only** projects already on `/projects`:
- Sharjah → Double Twin Villa G+1, B+G+1 Private Villa.
- Ajman → B+G+1+R Basil Mall (224 TR VRF).
- Abu Dhabi → MBZ-AI Server Room (Masdar City), Zain Solution Data Center (Musaffah).
They state the office is in Dubai and claim **no** branch or phone number in those emirates.

- **Dubai areas** section added to `/projects` (Al Barsha, Business Bay) linking the
  matching case studies — no thin per-neighbourhood pages.
- **Internal links** to the location pages: footer (sitewide), the home "Service areas"
  cards (now clickable), and a "Where we work" strip on `/services`. Sitemap updated.
- **NAP consistency** — Footer and the English Contact page now source name, phone, email,
  address and the Google Business Profile / Instagram URLs from `src/lib/company.ts`
  (previously hard-coded). Schema and metadata already used the constants.
- **Review flow** — `/review` (printable QR card → Google) already existed; added a
  "Leave a review" button to the Contact page and to the quote thank-you page. The Arabic
  Contact page has the same button.
- **Contact page** — lazy-loaded Google Maps embed (already present) kept; email and
  subject fields already optional (name + phone required).

---

## New URLs

```
/hvac-contractor-sharjah
/hvac-contractor-ajman
/hvac-contractor-abu-dhabi
/ar/services
/ar/quote
/ar/contact
/ar/about
/ar/services/hvac-installation-dubai
/ar/services/tab-testing-adjusting-balancing-dubai
/ar/services/chiller-maintenance-dubai
/ar/services/ventilation-fresh-air
/ar/smart-thermostat-installation-dubai
/ar/air-balancing-airflow-testing-dubai
```

## Performance findings & fixes

- **Fonts** — three families load via `next/font` (auto display:swap). Cairo (Arabic) was
  preloaded on every page though only `/ar` uses it → set `preload: false`, so English
  pages no longer preload Arabic glyphs. Inter (body) and Saira (headings) still preload.
- **Images** — all via `next/image`. The hero is the only `priority` image (correct). Three
  `fill` images on the home page were missing `sizes` (causing over-fetch / CLS risk) and
  lazy-loading → added `sizes` + `loading="lazy"`. The service-page hero `fill` image got a
  `sizes` hint too. Product/case-study images already had `sizes`.
- **Third-party scripts** — GTM/gtag load `afterInteractive` (deferred) already; no change.
- **Heaviest assets** — the hero JPGs under `/public/projects` and `/public/photos` are the
  largest payloads; they are already `next/image`-optimised (AVIF/WebP, responsive `sizes`).
  TODO(owner): a branded 1200×630 `og-image.png` (noted in CONTENT_NEEDED).

## seo-check output (final run)

```
0 problem(s), 25 warning(s)
ALL CHECKS PASSED   — 67 URLs (robots.txt + sitemap.xml + 54 sitemap URLs + internal links)
```

The 25 warnings are all **description-length** on pre-existing pages outside these three
workstreams: the 12 project case studies have short auto-generated descriptions (96–118
chars) and several blog posts have long descriptions (164–219). They are soft (length only)
and were not in scope; worth tightening in a future content pass.

## Outstanding content (owner-supplied only — never invented)

See **CONTENT_NEEDED.md** (new §H) and **ARABIC_REVIEW.md**:
- Native Arabic review of all new Arabic strings.
- Optional per-emirate project detail and owned photos for the location pages.
- Optional branded social share image.
- Carried over: per-project case-study narratives, the 5 missing capacities, 18-villas
  emirate, project photos.
