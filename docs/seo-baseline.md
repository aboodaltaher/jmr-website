# AGEC — SEO Baseline (Phase 0, read-only audit)

- **Date:** 2026-11-18
- **Branch / commit audited:** `claude/peaceful-lovelace-x7rxhs` @ `96fa39a` (same as `main` at time of audit)
- **Live site crawled:** `https://agec.ae` (all 85 URLs in the live `sitemap.xml`)
- **This file replaces the earlier Step-1 baseline** (which described a Next.js 15 build). The earlier version is still in git: `git show 96fa39a:docs/seo-baseline.md`.

> **URL freeze.** From this baseline on, no URL listed below may change, be removed or be redirected without a 301 plan approved by the owner.

---

## 1. Project structure

| Item | Value |
|---|---|
| Framework | Next.js **16.2.6** (App Router, TypeScript), React 19.2.4 |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Forms | react-hook-form + a ~1 KB custom validator on the client (`src/lib/form-schema.ts`); full **zod 4** re-validation in server actions (`src/app/actions.ts`) |
| Email delivery | Resend SDK (`RESEND_API_KEY`), sender `onboarding@resend.dev`, recipient `CONTACT_EMAIL` env or `business.email` |
| Content | Blog posts are Markdown in `content/blog/*.md` (gray-matter + react-markdown) |
| Package manager | npm (`package-lock.json`); Node in CI: 22; sandbox: Node 22.23.5 / npm 10.9.9 |
| Hosting | Vercel (`vercel.json`: region `bom1`, build `npm run build`). Response headers confirm `server: Vercel` |
| CI | `.github/workflows/lighthouse-ci.yml` (LHCI on PRs, homepage budget in `lighthouserc.json`); `.github/workflows/psi-monthly.yml` (PSI API, needs `PSI_API_KEY` secret) |
| Build | `next build && node scripts/check-markers.mjs` (fails a production build if `[TO CONFIRM]` markers leak) |

### Directory map

| Purpose | Path |
|---|---|
| English pages (root layout `lang="en" dir="ltr"`) | `src/app/(en)/**/page.tsx` |
| Arabic pages (root layout `lang="ar" dir="rtl"`) | `src/app/(ar)/ar/**/page.tsx`, chrome in `src/app/(ar)/ar/layout.tsx` → `components/ArabicChrome.tsx` |
| Shared `<html>/<body>` | `src/components/RootDocument.tsx` |
| Header/footer (EN) | `src/components/SiteFrame.tsx`, `Header.tsx`, `Footer.tsx` |
| 404 | `src/app/global-not-found.tsx` + `components/NotFoundContent.tsx` |
| Components | `src/components/` (≈60 files) |
| Data / single sources of truth | `src/data/business.ts` (NAP, hours, reviews, links), `src/lib/routes.ts` (sitemap routes), `src/lib/nav.ts` (menu + `LOCALE_PAIRS` hreflang), `src/data/new-pages.ts` & `src/data/community-index.ts` (publish switches) |
| Styles | `src/app/globals.css` |
| Fonts | `src/lib/fonts.ts` (next/font) |
| Images | `public/images`, `public/projects`, `public/photos`, `public/team`, `public/og-image.png`, `public/agec-logo.png` (`archive/` is not served) |
| Config | `next.config.ts` (redirects, security headers, image formats), `vercel.json`, `eslint.config.mjs`, `tsconfig.json`, `postcss.config.mjs` |
| SEO scripts | `scripts/seo-check.ts`, `check-nap.sh`, `check-redirects.sh`, `crawl.mjs`, `onpage-check.ts`, `psi-check.ts` |

### How metadata is generated

- `src/lib/root-metadata.ts` — site defaults (`metadataBase: https://agec.ae`, default title/description/OG) for both root layouts.
- `src/lib/metadata.ts` → `buildMetadata()` — every page calls it: sets `title`, `description`, **self-referencing canonical** (`https://agec.ae{path}`, no trailing slash), optional `robots: noindex, follow`, OG (`og:image` = `/og-image.png` 1200×630 by default), Twitter `summary_large_image`, and **hreflang** (`en-AE`, `ar-AE`, `x-default`) derived automatically from `LOCALE_PAIRS`.
- Structured data: `components/SiteSchema.tsx` (Organization + HVACBusiness/GeneralContractor on every page), plus per-page Service, FAQPage, BreadcrumbList, Article/BlogPosting, CreativeWork, Person, VideoObject.

### Git status at audit time

- Branch `claude/peaceful-lovelace-x7rxhs`, `working tree clean`, no uncommitted changes. Last commit `96fa39a Sitemap: correct lastmod for the pages changed in the SEO update (#81)`.

---

## 2. URL inventory (live, 85 sitemap URLs — all return HTTP 200)

Summary of checks across all 85 URLs:

| Check | Result |
|---|---|
| Missing `<title>` | 0 |
| Duplicate titles | 0 |
| Titles > 60 chars | 0 |
| Missing meta description | 0 |
| Duplicate meta descriptions | 0 |
| Descriptions > 160 chars | 0 |
| Pages with 0 or >1 H1 | 0 (every page has exactly one H1) |
| Missing / non-self canonical | 0 |
| `noindex` pages in sitemap | 0 |
| Invalid JSON-LD | 0 (all blocks parse) |
| Orphan pages (no inbound link from another sitemap page) | 0 |
| Broken internal links (crawl of every `<a href>` on all 85 pages) | 0 |
| Thin (< 400 words of visible text) | 1 — `/ar/contact` (377). Borderline: 13 `/projects/*` case studies (441–475 words, same template, no dates/metrics/results), `/areas` (467), `/ar` (421) |

Routes that exist in code but are **not** in the sitemap (intentional):

| URL | Live status | Why |
|---|---|---|
| `/quote/thank-you` | 200, `noindex, follow` | Form success page |
| `/review` | 302 → Google review form, `X-Robots-Tag: noindex, nofollow` | QR-code redirect |
| `/mep-contractors-dubai`, `/ar/mep-contractors-dubai` | **404** in production (publish switch off) | Awaiting owner review |
| `/ac-maintenance/dubai-marina`, `/arabian-ranches`, `/villanova` | 404 in production | Unpublished community pages |
| `/sample-air-balancing-report.pdf`, `/sample-tab-report.pdf` | 200 | Linked downloads |

Existing redirects (`next.config.ts`, verified live):

| From | To | Code |
|---|---|---|
| `http://agec.ae/*` | `https://agec.ae/*` | 308 (Vercel) |
| `http://www.agec.ae/*` → `https://www.agec.ae/*` | `https://agec.ae/` | 308 then **301** (2 hops from http+www) |
| `/services/ac-cleaning/{premium-duct,full-ac,split-ac,coil-cleaning}` | `/ac-duct-cleaning-dubai` | 308 |
| `/services/maintenance` (+ `/`) | `/ac-amc-dubai` | 301 |
| `/services/testing-commissioning` (+ `/`) | `/services/tab-testing-adjusting-balancing-dubai` | 301 |
| `/air-balancing-airflow-testing-dubai` (+ `/`) | `/air-balancing-dubai` | 301 |
| `/ar/air-balancing-airflow-testing-dubai` (+ `/`) | `/ar/services/tab-testing-adjusting-balancing-dubai` | 301 |
| `/services/chillers` (+ `/`) | `/services/chiller-maintenance-dubai` | 301 |
| `/book` (+ `/`) | `/quote` | 301 |
| `/google-nest-thermostat-installation-dubai` (+ `/`) | `/smart-thermostat-installation-dubai#google-nest` | 301 |
| `/ecobee-thermostat-installation-dubai` (+ `/`) | `/smart-thermostat-installation-dubai#ecobee` | 301 |
| `/privacy`, `/ar/privacy` (+ `/`) | `/privacy-policy`, `/ar/privacy-policy` | 301 |

### Full inventory

"self" = canonical equals the URL. Robots = the page's `<meta name="robots">`; none of these pages sends one, so all are indexable.

| # | URL | Title | Meta description | H1 | Canonical | Robots | Words | Flags |
|---|---|---|---|---|---|---|---|---|
| 1 | `/` | Engineer-Led HVAC Contractor in Dubai & the UAE \| AGEC | Engineer-led HVAC contractor in Dubai — installation, maintenance, AMC, testing and commissioning. Licensed since 2022, 5.0★ from 42 Google reviews. | HVAC Contractor and AC Maintenance in Dubai | self | index, follow (default) | 1572 | — |
| 2 | `/about` | About AGEC Technical Services — Engineer-Led HVAC Team | AGEC Technical Services: an engineer-led HVAC team in Dubai. 33 projects across the UAE since 2022. Meet the team and see our work. | Engineering-led HVAC contracting in Dubai | self | index, follow (default) | 774 | — |
| 3 | `/services` | HVAC Services Dubai & UAE \| AGEC | HVAC design, installation, testing and commissioning, and maintenance for villas, offices and commercial buildings across the UAE. | End-to-end HVAC services for every project type | self | index, follow (default) | 930 | — |
| 4 | `/ac-installation-dubai` | AC Installation Dubai \| Supply & Install \| AGEC | AC installation in Dubai, new unit included: split and cassette AED 2,500 per ton. Piping, insulation, drain and wiring included. Get a quote. | AC Installation in Dubai: New Unit Included, Priced Per Ton | self | index, follow (default) | 1655 | — |
| 5 | `/ac-maintenance-dubai` | AC Maintenance Dubai — Engineer-Led, Same-Day \| AGEC | AC maintenance in Dubai for villas and apartments: servicing, repair, gas top-up and AMC plans. One-off service from AED 350. Call +971 58 557 5987. | AC Maintenance & Servicing in Dubai | self | index, follow (default) | 2712 | — |
| 6 | `/ac-repair-dubai` | AC Repair Dubai — Same-Day Engineer Diagnosis \| AGEC | AC repair in Dubai: not cooling, leaking or tripping? AGEC engineers find the root cause, quote in writing first and report every repair. Call or WhatsApp. | AC Repair in Dubai: Diagnosed by an Engineer, Quoted Before We Start | self | index, follow (default) | 2238 | — |
| 7 | `/ac-amc-dubai` | AC AMC Dubai \| Annual Maintenance Contracts \| AGEC | AC AMC in Dubai: annual maintenance contracts for villas, apartments and buildings — scheduled visits, service reports with photos and priority repairs. | AC AMC in Dubai — Annual Maintenance Contracts | self | index, follow (default) | 1961 | — |
| 8 | `/ac-duct-cleaning-dubai` | AC Duct Cleaning Dubai \| Villas & Offices \| AGEC | AC duct cleaning in Dubai: grilles, ducts, coils, blower and drain cleaned and disinfected, with a written report of what we found. Request a quote. | AC Duct Cleaning in Dubai With a Completion Report | self | index, follow (default) | 1184 | — |
| 9 | `/smart-thermostat-installation-dubai` | Smart Thermostat Installation Dubai – Nest & ecobee \| AGEC | Google Nest and ecobee smart thermostat installation in Dubai and the UAE. Free compatibility check and C-wire installation by an engineer-led team. | Smart Thermostat Installation in Dubai — Google Nest & ecobee Experts | self | index, follow (default) | 3512 | — |
| 10 | `/services/hvac-installation-dubai` | HVAC Installation Dubai — AC, Ducted & VRF \| AGEC | HVAC and AC installation in Dubai: split, ducted, VRF and chilled-water systems, commissioned and handed over with test sheets and as-built drawings. | HVAC and AC Installation in Dubai | self | index, follow (default) | 1832 | — |
| 11 | `/services/tab-testing-adjusting-balancing-dubai` | HVAC Testing and Commissioning in Dubai \| TAB \| AGEC | HVAC testing and commissioning in Dubai: air and water balancing, chiller and VRF commissioning, functional performance tests and a signed handover report. | HVAC Testing and Commissioning in Dubai: TAB for New and Existing Buildings | self | index, follow (default) | 1870 | — |
| 12 | `/services/chiller-maintenance-dubai` | Chiller Installation, Repair & Maintenance Dubai \| AGEC | Chiller maintenance in Dubai for air- and water-cooled plant: planned preventive visits, repair and installation, with logged reports after every visit. | Chiller Maintenance in Dubai — Air- and Water-Cooled Plant | self | index, follow (default) | 1674 | — |
| 13 | `/services/vrf-vrv-systems` | VRF Installation in Dubai \| VRV Systems & Maintenance \| AGEC | VRF installation in Dubai: design, installation and commissioning of VRF/VRV systems for villas, offices and buildings, plus VRF and FCU maintenance. | VRF Installation in Dubai | self | index, follow (default) | 1022 | — |
| 14 | `/services/dx-units` | DX Units & Ducted Split Systems in Dubai \| AGEC | DX and split AC installation in Dubai — wall-mount, ducted, cassette and concealed units, sized from heat loads for homes and commercial spaces. | DX Units & Split Systems | self | index, follow (default) | 948 | — |
| 15 | `/services/ventilation-fresh-air` | Fresh Air, FAHU & Ventilation Systems Dubai \| AGEC | Ventilation in Dubai: FAHU and fresh-air systems, designed and balanced. Indoor air quality in Dubai: we test CO₂ and airflow, find the cause and fix it. | Ventilation in Dubai: Fresh Air, FAHU and Indoor Air Quality Testing | self | index, follow (default) | 1673 | — |
| 16 | `/services/hvac-design` | HVAC Design & Heat Load Calculation Dubai \| AGEC | HVAC system design, heat load calculations, duct sizing, and MEP coordination in Dubai. Engineering documentation from concept through construction. | HVAC Design & Consultancy | self | index, follow (default) | 872 | — |
| 17 | `/kitchen-exhaust-cleaning-dubai` | Kitchen Exhaust & Hood Cleaning Dubai \| AGEC | Kitchen exhaust, hood and grease duct cleaning for Dubai restaurants and kitchens by Dubai Municipality-approved AGEC, with photos and a service report. | Kitchen Exhaust & Hood Cleaning in Dubai | self | index, follow (default) | 1753 | — |
| 18 | `/ac-ducting-installation-dubai` | Ducting Contractors in Dubai — AC Duct Fabrication \| AGEC | Ducting contractors in Dubai: AC duct installation, fabrication and modification in GI or pre-insulated duct, leakage tested to SMACNA. Request a quote. | Ducting Contractors in Dubai: AC Duct Installation & Fabrication | self | index, follow (default) | 1970 | — |
| 19 | `/vrf-maintenance-dubai` | VRF Maintenance Dubai \| VRV Service, AMC, 24/7 \| AGEC | VRF maintenance in Dubai: preventive service, error-code diagnostics, AMC and 24/7 breakdown support for Daikin, Trane, O General, Midea and LG systems. | VRF Maintenance in Dubai: Service, AMC and 24/7 Breakdown Support | self | index, follow (default) | 1853 | — |
| 20 | `/air-balancing-dubai` | Air Balancing Dubai \| Airflow Testing & Reports \| AGEC | Air balancing in Dubai: airflow measured at every diffuser, grille, FCU and AHU, adjusted to design and signed off in a report for consultant approval. | Air Balancing in Dubai: Airflow Testing and Balancing Reports | self | index, follow (default) | 1602 | — |
| 21 | `/areas` | Areas We Serve \| AC Services in Dubai & UAE \| AGEC | AGEC's AC and HVAC services by area: local pages for Dubai communities, plus Sharjah, Ajman and Abu Dhabi. Find your area and call or WhatsApp an engineer. | AC and HVAC services by area | self | index, follow (default) | 467 | — |
| 22 | `/hvac-contractor-sharjah` | HVAC Contractor in Sharjah \| AC Install & Service \| AGEC | Engineer-led HVAC contractor for Sharjah — installation, maintenance, repair and AMC for villas and buildings. Dubai-based, serving across Sharjah. | HVAC Contractor in Sharjah | self | index, follow (default) | 1550 | — |
| 23 | `/hvac-contractor-ajman` | HVAC Contractor in Ajman \| Commercial & Villas \| AGEC | Engineer-led HVAC contractor for Ajman — VRF installation, commissioning, maintenance and AMC for commercial buildings. Dubai-based, serving Ajman. | HVAC Contractor in Ajman | self | index, follow (default) | 1440 | — |
| 24 | `/hvac-contractor-abu-dhabi` | HVAC Contractor in Abu Dhabi \| Data Centre Cooling \| AGEC | Engineer-led HVAC contractor for Abu Dhabi — precision data-centre cooling, ventilation, commissioning and maintenance. Dubai-based, serving Abu Dhabi. | HVAC Contractor in Abu Dhabi | self | index, follow (default) | 1446 | — |
| 25 | `/projects` | HVAC Projects in Dubai & the UAE \| AGEC | HVAC projects across Dubai, Sharjah, Ajman and Abu Dhabi — residential villas, commercial buildings, data centres and cultural facilities. | Projects across Dubai and the UAE | self | index, follow (default) | 686 | — |
| 26 | `/blog` | Insights & Engineering Guides \| AGEC | HVAC engineering guides, system comparisons, and practical advice from AGEC — based on real project experience across Dubai, Sharjah, and Abu Dhabi. | Insights & Engineering Guides | self | index, follow (default) | 1117 | — |
| 27 | `/quote` | Get a Quote or Book a Service in Dubai \| AGEC | Request an HVAC quote or book AC service, repair or maintenance in Dubai. One short form — we reply on call and WhatsApp 24/7, available across the UAE. | Get a quote or book a service | self | index, follow (default) | 464 | — |
| 28 | `/contact` | Contact AGEC \| HVAC Services in Dubai | Contact AGEC for HVAC services in Dubai — call or WhatsApp +971 58 557 5987, or send a message about AC maintenance, repair, AMC or a new project. | Get in touch | self | index, follow (default) | 447 | — |
| 29 | `/privacy-policy` | Privacy Policy \| AGEC Technical Services | How AGEC Technical Services collects, uses and protects the details you submit through agec.ae — used only to respond to your enquiry, never sold. | Privacy Policy | self | index, follow (default) | 916 | — |
| 30 | `/terms` | Terms of Use \| AGEC Technical Services | The terms that apply when you use agec.ae and when you request a quote, booking or service from AGEC Technical Services. | Terms of Use | self | index, follow (default) | 889 | — |
| 31 | `/ar` | تكييف وتهوية في دبي \| تركيب وصيانة وإصلاح \| AGEC | AGEC للخدمات الفنية في دبي: تركيب وصيانة وإصلاح أنظمة التكييف والتهوية للفلل والشقق والمنشآت التجارية. استجابة خلال ساعة على مدار الساعة. | تكييف وتهوية في دبي — تركيب، صيانة، وإصلاح | self | index, follow (default) | 421 | — |
| 32 | `/ar/ac-installation-dubai` | تركيب مكيفات في دبي \| توريد وتركيب \| AGEC | تركيب مكيفات في دبي والوحدة الجديدة مشمولة: سبليت وكاسيت 2,500 درهم للطن. المواسير والعزل والتصريف والتوصيل الكهربائي مشمولة. اطلب عرض سعر. | تركيب مكيفات في دبي: الوحدة الجديدة مشمولة والسعر بالطن | self | index, follow (default) | 1037 | — |
| 33 | `/ar/ac-maintenance-dubai` | صيانة مكيفات دبي — بإشراف مهندسين وفي نفس اليوم \| AGEC | صيانة مكيفات في دبي بإشراف مهندسين: خدمة وإصلاح وتنظيف وتعبئة غاز وعقود سنوية. الخدمة لمرة واحدة من 350 درهماً للوحدة. اتصل أو راسلنا على واتساب. | صيانة مكيفات في دبي — خدمة وإصلاح وعقود سنوية | self | index, follow (default) | 756 | — |
| 34 | `/ar/ac-repair-dubai` | إصلاح مكيفات في دبي \| فنيّو تكييف \| AGEC | المكيف لا يبرّد أو يسرّب أو يفصل الكهرباء؟ مهندسو AGEC يحدّدون السبب الجذري، ويعطونك السعر كتابةً قبل البدء. اتصل أو راسلنا على واتساب. | إصلاح مكيفات في دبي: تشخيص هندسي وسعر قبل البدء | self | index, follow (default) | 596 | — |
| 35 | `/ar/ac-duct-cleaning-dubai` | تنظيف دكت المكيف في دبي \| فلل ومكاتب \| AGEC | تنظيف دكت المكيف في دبي: تنظيف الدكت والمبادلات وصينية التصريف مع التعقيم وتقرير إنجاز مكتوب للفلل والشقق والمكاتب. اطلب عرض سعر أو أرسل صور الفتحات. | تنظيف دكت المكيف في دبي مع تقرير إنجاز | self | index, follow (default) | 656 | — |
| 36 | `/ar/ac-amc-dubai` | عقد صيانة المكيفات السنوي (AMC) في دبي \| AGEC | عقد صيانة المكيفات السنوي (AMC) في دبي للفلل والشقق والمكاتب والمباني: زيارات مجدولة، وتقرير خدمة مع صور بعد كل زيارة، وأولوية في الاستجابة عند الأعطال. | عقد صيانة المكيفات السنوي (AMC) في دبي | self | index, follow (default) | 1288 | — |
| 37 | `/ar/services` | خدمات التكييف في دبي والإمارات \| AGEC | خدمات التكييف في دبي والإمارات: تصميم وتركيب واختبار وتشغيل تجريبي وصيانة للفلل والمكاتب والمباني التجارية. اتصل أو راسلنا على واتساب. | خدمات تكييف متكاملة لكل أنواع المشاريع | self | index, follow (default) | 769 | — |
| 38 | `/ar/about` | من نحن \| AGEC مقاول تكييف في دبي | AGEC مقاول تكييف وكهروميكانيك وصيانة في دبي، أنجز 33 مشروعاً عبر الإمارات منذ 2022. تعرّف على فريقنا الهندسي واطّلع على مشاريعنا، ثم اطلب عرض سعر. | مقاولات تكييف يقودها المهندسون في دبي | self | index, follow (default) | 689 | — |
| 39 | `/ar/quote` | احصل على عرض سعر أو احجز خدمة في دبي \| AGEC | اطلب عرض سعر لأعمال التكييف أو احجز خدمة أو إصلاح أو صيانة في دبي. نموذج واحد قصير — نرد عبر الهاتف والواتساب 24/7، ومتاحون عبر الإمارات. | احصل على عرض سعر أو احجز خدمة | self | index, follow (default) | 407 | — |
| 40 | `/ar/contact` | اتصل بـ AGEC \| خدمات التكييف في دبي | تواصل مع AGEC لخدمات التكييف في دبي — اتصل أو راسلنا على واتساب ‎+971 58 557 5987، أو أرسل رسالة بخصوص صيانة أو إصلاح أو عقد صيانة أو مشروع جديد. | تواصل معنا | self | index, follow (default) | 377 | thin (<400 words) |
| 41 | `/ar/services/hvac-installation-dubai` | تركيب أنظمة التكييف في دبي \| من التصميم للتسليم \| AGEC | تركيب أنظمة تكييف في دبي على يد مهندسين — مجاري هواء ومواسير تبريد وتركيب المعدّات والتشغيل التجريبي، مع تسليم موثّق يشمل أوراق الاختبار والمخططات. | تركيب أنظمة التكييف | self | index, follow (default) | 941 | — |
| 42 | `/ar/services/tab-testing-adjusting-balancing-dubai` | اختبار وتشغيل وموازنة أنظمة التكييف في دبي \| AGEC | اختبار وتشغيل تجريبي وموازنة أنظمة التكييف في دبي — ضبط تدفّق الهواء والماء وإثباته وفق التصميم، والتحقّق من التحكّم، مع تقرير تسليم موثّق وموقّع. | اختبار وتشغيل وموازنة أنظمة التكييف في دبي | self | index, follow (default) | 1235 | — |
| 43 | `/ar/services/chiller-maintenance-dubai` | صيانة التشيلر في دبي \| صيانة محطات التبريد \| AGEC | صيانة تشيلر في دبي للمحطات المبرّدة بالهواء والماء — صيانة مجدولة وتنظيف الأنابيب وفحص الفريون والأداء، مع تقارير موثّقة بعد كل زيارة. | صيانة التشيلر | self | index, follow (default) | 1062 | — |
| 44 | `/ar/services/ventilation-fresh-air` | تهوية الهواء النقي وفحص ثاني أكسيد الكربون في دبي \| AGEC | ارتفاع ثاني أكسيد الكربون أو غرف خانقة أو فحص هواء نقي فاشل؟ نقيس تدفّق الهواء وكمية الهواء الخارجي، ونحدّد السبب ونعالجه. اطلب تقييماً. | تهوية الهواء النقي وفحص ثاني أكسيد الكربون | self | index, follow (default) | 1386 | — |
| 45 | `/ar/smart-thermostat-installation-dubai` | تركيب ثرموستات Nest و ecobee الذكي في دبي \| AGEC | تركيب ثرموستات ذكي Google Nest و ecobee في دبي والإمارات — فحص توافق مجاني وتركيب سلك C بإشراف فريق هندسي. قلّل فاتورة ديوا. | تركيب الثرموستات الذكي (Nest و ecobee) | self | index, follow (default) | 1380 | — |
| 46 | `/ar/services/vrf-vrv-systems` | تركيب وصيانة أنظمة VRF وVRV في دبي \| AGEC | تصميم وتركيب وتشغيل تجريبي لأنظمة VRF وVRV في دبي — تحكّم مناخي متعدد المناطق للفلل والمكاتب والمباني التجارية. اطلب عرض سعر. | أنظمة VRF / VRV | self | index, follow (default) | 785 | — |
| 47 | `/ar/services/dx-units` | وحدات DX وتركيب مكيفات سبليت مجاري في دبي \| AGEC | تركيب مكيفات DX وسبليت في دبي — وحدات جدارية ومجاري وكاسيت ومخفية، بأحجام محسوبة من الأحمال الحرارية للمنازل والمساحات التجارية. | وحدات DX وأنظمة السبليت | self | index, follow (default) | 795 | — |
| 48 | `/ar/services/hvac-design` | تصميم أنظمة التكييف وحساب الحمل الحراري في دبي \| AGEC | تصميم أنظمة التكييف وحسابات الحمل الحراري وتحديد أحجام المجاري وتنسيق MEP في دبي. وثائق هندسية من مرحلة الفكرة حتى التنفيذ. اطلب عرض سعر. | تصميم أنظمة التكييف والاستشارات | self | index, follow (default) | 751 | — |
| 49 | `/ar/ac-ducting-installation-dubai` | مقاول دكت تكييف في دبي \| تركيب وتصنيع المجاري \| AGEC | مقاول دكت تكييف في دبي: تركيب المجاري وتصنيعها وتعديلها من الحديد المجلفن أو الألواح المعزولة مسبقاً، مع اختبار التسرّب وفق SMACNA. اطلب عرض سعر. | مقاول دكت تكييف في دبي — تركيب وتصنيع المجاري | self | index, follow (default) | 1672 | — |
| 50 | `/ar/privacy-policy` | سياسة الخصوصية \| AGEC | كيف تجمع AGEC Technical Services بياناتك المُرسلة عبر agec.ae وتستخدمها وتحميها — تُستخدم للرد على استفسارك فقط، ولا تُباع أبداً. | سياسة الخصوصية | self | index, follow (default) | 736 | — |
| 51 | `/ar/terms` | شروط الاستخدام \| AGEC | شروط استخدام موقع agec.ae وطلب عرض سعر أو حجز خدمة من AGEC: عروض الأسعار، الملكية الفكرية، المسؤولية والقانون الحاكم في دبي. | شروط الاستخدام | self | index, follow (default) | 741 | — |
| 52 | `/ac-maintenance/al-barsha` | AC Maintenance Al Barsha, Dubai — Villas & Commercial \| AGEC | AC maintenance in Al Barsha, Dubai for ducted villas and commercial units: dust-driven faults, drain and coil care, AMC. Call or WhatsApp us for a booking. | AC Maintenance in Al Barsha, Dubai | self | index, follow (default) | 1349 | — |
| 53 | `/ac-maintenance/business-bay` | AC Maintenance Business Bay, Dubai — Offices & F&B \| AGEC | AC and FCU maintenance in Business Bay, Dubai for offices and restaurants on district cooling: leaks, weak cooling, rebalancing and AMC. Call or WhatsApp. | AC Maintenance in Business Bay, Dubai | self | index, follow (default) | 1236 | — |
| 54 | `/ac-maintenance/mira-oasis` | Ducted AC Installation Mira Oasis Dubai \| AGEC | Ducted AC installation in Mira Oasis, Dubai: unit above the ceiling, insulated ducts, new unit included, from AED 3,800 per ton. Call or WhatsApp AGEC. | Ducted AC Installation in Mira Oasis, Dubai | self | index, follow (default) | 863 | — |
| 55 | `/ac-maintenance/dubai-hills` | AC Installation & Replacement Dubai Hills \| AGEC | AC installation and machine replacement in Dubai Hills: split, cassette, ducted or VRF, new unit included, from AED 3,000 per unit. Call or WhatsApp AGEC. | AC Installation and Machine Replacement in Dubai Hills | self | index, follow (default) | 1021 | — |
| 56 | `/ac-maintenance/al-wasl` | AC Maintenance Contract Al Wasl Dubai \| AMC \| AGEC | AC maintenance contracts in Al Wasl, Dubai: 2, 4 or 6 visits a year from AED 250 per machine per visit, plus drain repairs. Call or WhatsApp AGEC. | AC Maintenance Contracts (AMC) in Al Wasl, Dubai | self | index, follow (default) | 1029 | — |
| 57 | `/ac-maintenance/sustainable-city` | AC Leak Repair & Compressor Replacement \| AGEC | AC leak repairs and compressor replacement in The Sustainable City, Dubai. Diagnosis AED 100, waived if you go ahead. Call or WhatsApp AGEC. | AC Leak Repairs and Compressor Replacement in The Sustainable City, Dubai | self | index, follow (default) | 1022 | — |
| 58 | `/projects/vrf-villa-al-mamzar-dubai` | B+G+1+R Villa Al Mamzar — 109 TR VRF HVAC Case Study \| AGEC | 109 TR VRF HVAC installation for a B+G+1+R villa in Al Mamzar, Dubai — zoned controls, commissioned to design conditions. Get a quote for a similar job. | B+G+1+R Villa, Al Mamzar | self | index, follow (default) | 472 | templated case study |
| 59 | `/projects/basil-mall-ajman` | Basil Mall Ajman — 224 TR VRF HVAC Case Study \| AGEC | 224 TR VRF HVAC installation for Basil Mall, a B+G+1+R commercial mall in Ajman — independent zoning for shops and common areas. Get a quote. | B+G+1+R Basil Mall | self | index, follow (default) | 475 | templated case study |
| 60 | `/projects/private-g4-building-dubai` | Private G+4 Building Dubai — 148 TR HVAC Case Study \| AGEC | 148 TR DX HVAC installation for a private G+4 residential building in Dubai, sized to the cooling load across its floors. Get a quote for a similar job. | Private G+4 Building | self | index, follow (default) | 451 | templated case study |
| 61 | `/projects/double-twin-villa-sharjah` | Double Twin Villa Sharjah — 60 TR DX HVAC Case Study \| AGEC | 60 TR DX HVAC installation and commissioning for a double twin G+1 villa development in Sharjah, with zoned comfort cooling. Get a quote for a similar job. | Double Twin Villa G+1 | self | index, follow (default) | 449 | templated case study |
| 62 | `/projects/g1r-villa-dubai` | G+1+R Villa Dubai — 45 TR DX HVAC Case Study \| AGEC | 45 TR DX HVAC installation and commissioning for a G+1+R villa in Dubai, matched to the home's room-by-room cooling load. Get a quote for a similar job. | G+1+R Villa | self | index, follow (default) | 445 | templated case study |
| 63 | `/projects/villa-al-barsha-dubai` | B+G+1+R Villa Al Barsha — 140 TR DX HVAC Case Study \| AGEC | 140 TR DX HVAC installation for a B+G+1+R villa in Al Barsha, Dubai — a large single-home system sized to the villa's cooling load. Get a quote. | B+G+1+R Villa, Al Barsha | self | index, follow (default) | 458 | templated case study |
| 64 | `/projects/18-villas-community` | 18 Villas Al Rgebah / Al Seyouh — HVAC Case Study \| AGEC | HVAC works across 18 G+1 villas in Al Rgebah / Al Seyouh — one coordinated programme, every villa commissioned to the same standard. Get a quote. | 18 Villas Community Project | self | index, follow (default) | 458 | templated case study |
| 65 | `/projects/private-villa-sharjah-flagship` | B+G+1 Private Villa Sharjah — Premium HVAC Case Study \| AGEC | Premium HVAC for a B+G+1 private villa in Sharjah — concealed ductwork and zoned controls for quiet, even comfort. Get a quote for a similar job. | B+G+1 Private Villa | self | index, follow (default) | 445 | templated case study |
| 66 | `/projects/mbz-ai-server-room-abu-dhabi` | MBZ-AI Server Room Masdar City — Cooling Case Study \| AGEC | Precision cooling for the MBZ-AI server room in Masdar City, Abu Dhabi — close-control units and rack airflow for a 24/7 load. Get a quote. | MBZ-AI Server Room | self | index, follow (default) | 461 | templated case study |
| 67 | `/projects/pure-gym-al-barsha` | Pure Gym Al Barsha — HVAC & Ventilation Case Study \| AGEC | HVAC and ventilation for Pure Gym in Al Barsha, Dubai — cooling for high-occupancy training floors with fresh-air supply and exhaust. Get a quote. | Pure Gym | self | index, follow (default) | 449 | templated case study |
| 68 | `/projects/ave-restaurant-business-bay` | AVE Restaurant Business Bay — Ventilation Case Study \| AGEC | HVAC for AVE Restaurant in Business Bay, Dubai — dining-area cooling plus kitchen exhaust and make-up air, balanced and commissioned. Get a quote. | AVE Restaurant | self | index, follow (default) | 443 | templated case study |
| 69 | `/projects/zain-solution-data-center-abu-dhabi` | Zain Solution Data Center Musaffah — HVAC Case Study \| AGEC | Precision cooling and ventilation for the Zain Solution data centre in Musaffah, Abu Dhabi — built for continuous, reliable operation. Get a quote. | Zain Solution Data Center | self | index, follow (default) | 441 | templated case study |
| 70 | `/projects/cultural-center-al-barsha` | Cultural Center Al Barsha — HVAC Case Study \| AGEC | HVAC works for a public cultural facility in Al Barsha, Dubai — cooling and ventilation that hold comfort as crowds come and go. Get a quote. | Cultural Center | self | index, follow (default) | 445 | templated case study |
| 71 | `/blog/does-nest-work-with-vrf-dubai` | Does Nest Work With VRF in Dubai? \| AGEC | Does Google Nest work with VRF/VRV in Dubai? Yes, with a drop-air adaptor that lets Nest control your VRF indoor unit. How it works and what it costs. | Does a Google Nest Work With VRF in Dubai? Yes — With a Drop-Air Adaptor | self | index, follow (default) | 1280 | — |
| 72 | `/blog/why-does-my-ac-smell-bad-dubai` | Why Does My AC Smell Bad in Dubai? \| AGEC | Why does your AC smell bad in Dubai? Musty, sour or burning smells point to mould, a dirty coil or a stagnant drain. Get the fix — call or WhatsApp 24/7. | Why Does My AC Smell Bad — and How to Fix It | self | index, follow (default) | 1107 | — |
| 73 | `/blog/when-to-replace-ac-thermostat-dubai` | When Should You Replace Your AC Thermostat? (Dubai) \| AGEC | When to replace your AC thermostat in Dubai: the signs it's failing and when a smart upgrade pays off. Get a free compatibility check before you buy. | When Should You Replace Your AC Thermostat? | self | index, follow (default) | 1045 | — |
| 74 | `/blog/what-is-air-balancing-dubai` | What Is Air Balancing and When Do You Need It? \| AGEC | Air balancing in Dubai fixes freezing rooms next to stuffy ones. See what we measure, the report you should get and when you need it. Get a quote. | What Is Air Balancing — and When Does a Building Need It? | self | index, follow (default) | 1079 | — |
| 75 | `/blog/how-often-service-villa-ac-dubai` | How Often Should You Service Villa AC in Dubai? \| AGEC | Service your villa AC in Dubai every 3 to 4 months — a neglected unit can lose 20–30% of its efficiency within two years. Book an AC service today. | How Often Should You Service Your Villa AC in Dubai? | self | index, follow (default) | 1071 | — |
| 76 | `/blog/ac-running-but-not-cooling-dubai` | Why Is My AC Running But Not Cooling? (Dubai) \| AGEC | AC running but not cooling in Dubai? Dirty coils, blocked drains and refrigerant leaks are the usual causes, not a gas top-up. Call or WhatsApp 24/7. | Why Is My AC Running But Not Cooling in Dubai? | self | index, follow (default) | 1187 | — |
| 77 | `/blog/ac-maintenance-vs-duct-cleaning-dubai` | AC Maintenance vs Duct Cleaning: Which Do You Need? \| AGEC | AC maintenance vs duct cleaning in Dubai: what each one does, which you need and when you need both, with no upselling. Call or WhatsApp 24/7. | AC Maintenance vs Duct Cleaning: Which One Do You Actually Need? | self | index, follow (default) | 1014 | — |
| 78 | `/blog/ac-coil-cleaning-and-amc-dubai` | AC Coil Cleaning & AMC in Dubai: Why Both Matter \| AGEC | Why AC coil cleaning and an annual maintenance contract (AMC) matter in Dubai: dust, heat, higher bills and breakdowns, and what to check. | AC Coil Cleaning and AMC in Dubai: Why Both Matter | self | index, follow (default) | 1888 | — |
| 79 | `/blog/google-nest-vs-ecobee-uae` | Google Nest vs ecobee UAE — Which Is Better? \| AGEC | Google Nest vs ecobee in the UAE: features, AC compatibility and typical 10–23% cooling energy savings, for villas & apartments. Free compatibility check. | Google Nest vs ecobee in the UAE: Which Smart Thermostat Is Right for You? | self | index, follow (default) | 1276 | — |
| 80 | `/blog/smart-thermostat-save-dewa-bill` | Do Smart Thermostats Save Money in Dubai? \| AGEC | How much can a Google Nest or ecobee smart thermostat save on your DEWA bill in Dubai? Realistic savings, how it works and how fast it pays for itself. | How Much Can a Smart Thermostat Save on Your DEWA Bill? | self | index, follow (default) | 1246 | — |
| 81 | `/blog/smart-thermostat-ac-compatibility-uae` | Is My AC Compatible With a Smart Thermostat? UAE \| AGEC | Will a smart thermostat work with your AC? Nest and ecobee with Daikin, O General and Carrier in the UAE: 24V vs 220V and the C-wire. Free check. | Will a Smart Thermostat Work With My AC? A UAE Compatibility Guide | self | index, follow (default) | 1182 | — |
| 82 | `/blog/what-is-a-c-wire-dubai` | What Is a C-Wire? Do You Need One in Dubai? \| AGEC | What a C-wire (common wire) is, why smart thermostats like Nest and ecobee need one, how to tell if you have it, and how AGEC installs one in Dubai. | What Is a C-Wire, and Do You Need One in Dubai? | self | index, follow (default) | 1225 | — |
| 83 | `/blog/why-ac-bill-so-high-dubai` | Why Is Your AC Bill So High in Dubai? \| AGEC | An HVAC engineer's breakdown of why your AC bill is so high in Dubai — sizing, maintenance, and district cooling charges — and what actually lowers it. | Why Your AC Bill Is So High in Dubai — and What Actually Lowers It | self | index, follow (default) | 3293 | — |
| 84 | `/blog/vrf-vs-chiller-dubai-villas` | VRF vs Chiller Systems for Dubai Villas \| AGEC | VRF vs chiller for Dubai villas: installed cost, performance and maintenance compared by villa size, from 30+ AGEC projects. Get a quote today. | VRF vs Chiller Systems for Dubai Villas: Which Is Right for You? | self | index, follow (default) | 2641 | — |
| 85 | `/blog/ac-maintenance-contracts-dubai-amc-guide` | AC Maintenance Contracts in Dubai \| AGEC | Is an AC maintenance contract (AMC) in Dubai worth it? See the real cost of skipped maintenance and what a proper AMC includes. Get an AMC quote. | AC Maintenance Contracts in Dubai: Why Reactive Maintenance Costs You More | self | index, follow (default) | 2219 | — |

---

## 3. Technical SEO

- **robots.txt** (live): `User-Agent: * / Allow: / / Disallow: /api/`, `Host: https://agec.ae`, `Sitemap: https://agec.ae/sitemap.xml`. Nothing important blocked; `/_next/` is allowed. (`Host:` is a Yandex-only directive; harmless.)
- **sitemap.xml**: well-formed XML, 85 `<loc>` entries, every one returns 200, every one self-canonical, no noindex URLs, `<lastmod>` per page from `src/lib/routes.ts`, reciprocal `xhtml:link` hreflang on the 21 bilingual pairs. Referenced in robots.txt. Matches the real published pages exactly.
- **JSON-LD**: all blocks parse. Sitewide `Organization` + `HVACBusiness/GeneralContractor` (name, legalName, phone, address, geo, 24h opening hours, `sameAs` = Maps CID + Instagram, `areaServed`). Service pages add `Service` + `BreadcrumbList` (+ `FAQPage` on most). Blog posts emit **both** an `Article` and a separate `BlogPosting` for the same post (duplicate entity). No `aggregateRating` (deliberate).
- **www vs non-www**: canonical host is `https://agec.ae`. `https://www.agec.ae` → 301 → apex. `http://www.agec.ae` takes 2 hops (308 → 301).
- **HTTP → HTTPS**: 308 (Vercel). HSTS `max-age=63072000; includeSubDomains; preload`.
- **Trailing slash**: `skipTrailingSlashRedirect: true` — `/about/` returns **200** (not a redirect) with canonical `/about`. Duplicates are consolidated only by canonical.
- **Case**: `/AC-Maintenance-Dubai` → 404 (no case-normalising redirect).
- **hreflang**: Arabic version exists at `/ar/*` for 21 pages; `en-AE` / `ar-AE` / `x-default` reciprocal in `<head>` and sitemap. English-only pages (kitchen exhaust, VRF maintenance, air balancing, emirate pages, community pages, blog, projects, `/areas`) have no hreflang (correct).
- **404**: real 404 status with `noindex` for unknown URLs (`global-not-found.tsx`).
- **Broken links / images**: none found on the 85 live pages.

## 4. Performance & UX (summary — details in the audit reply)

- `npm run build`: **0 errors, 0 warnings** (97 static pages). `eslint`: 1 warning (`'Check' is defined but never used` in `src/app/(ar)/ar/ac-maintenance-dubai/page.tsx:5`). `tsc --noEmit`: clean.
- `npm audit --omit=dev`: 8 production advisories (1 critical: `next` — Server Actions DoS / middleware bypass; high: `zod`, `sharp`, `postcss`, `nanoid`, `js-yaml`, `source-map-js`; moderate: `baseline-browser-mapping`).
- Lighthouse 12.6.1, mobile, live site, single run each, from this sandbox. **gtag.js was blocked by the sandbox proxy**, so the real pages carry ~130 KB more JS than measured; TBT/Performance below are therefore optimistic and Best-Practices 96 is caused by that blocked request.

| Page | Perf | A11y | Best Pr. | SEO | LCP | CLS | TBT | FCP |
|---|---|---|---|---|---|---|---|---|
| `/` | 88 | 100 | 96 | 100 | 2.3 s | 0 | 440 ms | 1.0 s |
| `/ac-maintenance-dubai` | 97 | 100 | 96 | 100 | 2.4 s | 0 | 110 ms | 1.2 s |
| `/ac-repair-dubai` | 96 | 100 | 96 | 100 | 2.3 s | 0 | 170 ms | 0.9 s |

- Images: all 101 `<img>` on the 85 pages have an `alt` attribute; all are served via `next/image` (AVIF/WebP) with dimensions or `fill`, lazy except the single LCP image per page. Exception: the YouTube thumbnail on `/ac-duct-cleaning-dubai` (external, no width/height). Largest served source: `public/images/google-nest-thermostat-4th-generation-dubai.png` (332 KB PNG, optimised on delivery).
- No page-level horizontal scroll at 375 / 768 / 1280 px on `/`, `/ac-maintenance-dubai`, `/ac-repair-dubai`, `/quote`, `/contact`, `/ar`, `/services/vrf-vrv-systems` (price table and brand strip scroll inside their own containers).

## 5. Conversion paths (summary)

- `tel:+971585575987`, `https://wa.me/971585575987?text=…` (page-specific prefilled message, EN + AR), `mailto:a.altaher@agec.ae`.
- Sticky mobile bar on every page < 768 px (EN: Call + WhatsApp + Get a quote; AR: Call + WhatsApp), hidden while a form field is focused. Floating WhatsApp button on desktop.
- Forms → Next.js server actions → Resend email. Client + server validation. **No spam protection** (no honeypot, CAPTCHA or rate limit). Success state reports real send failures (since #79).
- Tracking: gtag.js with **GA4 `G-H7HNVQGSYM`** and **Google Ads `AW-18332305339`** (hard-coded in `src/lib/gtag.ts`). GTM code exists but no `NEXT_PUBLIC_GTM_ID` is set in production (no GTM container on the live site). Events: `click_call`, `click_whatsapp`, `click_email` (dataLayer), `form_submit_{quote|contact|amc|inline}`, `generate_lead`, plus legacy `call_click`, `whatsapp_click`, `form_submit`. Ads conversions: call + WhatsApp labels set; **form label is still `REPLACE_FORM_LABEL`** (never fires).
- Verification: Search Console is a **domain property** (`sc-domain:agec.ae`, DNS-verified — no meta tag needed); Bing via `public/BingSiteAuth.xml`.

## 6. Content, trust and NAP (summary)

- Trust signals actually present in code: Dubai Commercial Licence No. 1221573; Google rating 5.0 from 42 reviews (matches the Google Business Profile today) + 3 real review texts; 13 published case studies and job photos in `public/projects`; founder bio (Mohannad Ghabboun, 10+ years UAE HVAC, Expo 2020 parcels); proof stats (projects delivered, largest TR, AED 8.75M largest contract); "Dubai Municipality-approved" for **kitchen hood & grease-duct cleaning only** (owner-confirmed per `src/data/long-services.ts`). No DEWA, Civil Defence, ISO or other certification claims (references to DEWA/Civil Defence/DM are "works to their requirements", not approvals).
- NAP on site is consistent (`scripts/check-nap.sh` passes): AGEC Technical Services · +971 58 557 5987 · AlMasraf Building, Sheikh Zayed Road, Al Quoz Industrial Area 1, Dubai, UAE.
- Google Business Profile (read via Windsor, read-only): title "AGEC Technical Services", phone `058 557 5987`, address line **"AlMasraf Sheikh Zayed branch"** with no locality set, category HVAC contractor, website `https://agec.ae/`, 42 reviews / 5.0. The street address wording differs from the website.

## 7. Security (summary)

- No API keys, tokens or private keys found in tracked files, git history, or the client bundle (`.next/static`). Secrets are read from env only (`RESEND_API_KEY`, `CONTACT_EMAIL`, `PSI_API_KEY`). Public IDs in the bundle (GA4, Google Ads, Bing auth, Maps CID) are public by design.
- Form values are interpolated into the notification email HTML **without escaping** (`src/app/actions.ts`, `row()`), so a submitter can inject HTML into the email the team receives.

---

## 8. Changes since previous baseline

**Previous baseline:** `docs/seo-baseline-previous.md` (restored from `96fa39a`; written in commit `25840c0`, 2026-11-05, measured on branch `seo-technical-pass`). It was **not a full inventory**: it audited a sample of **16 URLs** (plus the four `/services/ac-cleaning/*` redirects it mentions). It recorded title/description *lengths* (and the exact text only for a few titles), did not record H1s, and stated that all canonicals were self-referencing.

### 8.1 URLs in the previous baseline but missing from the current inventory

| URL (previous) | Current live status | Codebase | Search Console (last 30 days) | Flag |
|---|---|---|---|---|
| `/services/maintenance` | **301 → `/ac-amc-dubai`** (also the `/` variant) | Redirect in `next.config.ts` (`merges`, cluster A) | **25 impressions**, 0 clicks, pos. 24.1 (mostly "hvac amc", pos. 47) | **CRITICAL** — still collecting impressions. Redirect is correct and single-hop; it must never be removed |
| `/book` | **301 → `/quote`** (also the `/` variant) | Redirect in `next.config.ts` | No data | OK — keep redirect |
| `/services/ac-cleaning/premium-duct` | **308 → `/ac-duct-cleaning-dubai`** | Redirect in `next.config.ts` (`acCleaning`) | No data | OK — keep redirect |
| `/services/ac-cleaning/full-ac` | 308 → `/ac-duct-cleaning-dubai` | Same | No data | OK |
| `/services/ac-cleaning/split-ac` | 308 → `/ac-duct-cleaning-dubai` | Same | No data | OK |
| `/services/ac-cleaning/coil-cleaning` | 308 → `/ac-duct-cleaning-dubai` | Same | No data | OK |

No URL from the previous baseline returns a 404. None was renamed without a redirect.

Search Console URLs **not** in the previous baseline that are also redirected now (from later merges), still with impressions:

| URL | Live status | Search Console (30 days) | Flag |
|---|---|---|---|
| `/google-nest-thermostat-installation-dubai` | 301 → `/smart-thermostat-installation-dubai#google-nest` | 7 impressions, 0 clicks | **CRITICAL** — keep redirect permanently |
| `/ecobee-thermostat-installation-dubai` | 301 → `/smart-thermostat-installation-dubai#ecobee` | 6 impressions, **1 click** | **CRITICAL** — keep redirect permanently |

"CRITICAL" here means "protected: still has search demand". In every case the redirect is in place and correct; no action is needed except never removing it.

### 8.2 URLs in the current inventory but not in the previous baseline

The previous baseline was a sample, so most of these are "not previously audited", not necessarily new pages. 71 URLs:

- **Core / service (6):** `/ac-installation-dubai`, `/services/hvac-installation-dubai`, `/services/tab-testing-adjusting-balancing-dubai`, `/services/chiller-maintenance-dubai`, `/services/dx-units`, `/services/hvac-design`
- **Long-form service pages (4):** `/kitchen-exhaust-cleaning-dubai`, `/ac-ducting-installation-dubai`, `/vrf-maintenance-dubai`, `/air-balancing-dubai`
- **Location (4):** `/areas`, `/hvac-contractor-sharjah`, `/hvac-contractor-ajman`, `/hvac-contractor-abu-dhabi`
- **Community pages (6):** `/ac-maintenance/al-barsha`, `/business-bay`, `/mira-oasis`, `/dubai-hills`, `/al-wasl`, `/sustainable-city`
- **Legal (2):** `/privacy-policy`, `/terms`
- **Arabic (21):** `/ar` and its 20 sub-pages listed in section 2
- **Case studies (13):** the 13 `/projects/*` pages listed in section 2
- **Blog posts (15):** the 15 `/blog/*` posts listed in section 2

### 8.3 Pages in both baselines: title, H1 and canonical changes

| URL | Title before (length / text where recorded) | Title now (length) | Canonical before → now | H1 |
|---|---|---|---|---|
| `/` | 49 chars | "Engineer-Led HVAC Contractor in Dubai & the UAE \| AGEC" (54) | self → self | Not recorded before; now "HVAC Contractor and AC Maintenance in Dubai" |
| `/about` | **"About \| AGEC"** (12) | "About AGEC Technical Services — Engineer-Led HVAC Team" (54) | self → self | Not recorded; now "Engineering-led HVAC contracting in Dubai" |
| `/services` | 36 | "HVAC Services Dubai & UAE \| AGEC" (32) | self → self | Not recorded; now "End-to-end HVAC services for every project type" |
| `/ac-maintenance-dubai` | 60 | "AC Maintenance Dubai — Engineer-Led, Same-Day \| AGEC" (52) | self → self | Not recorded; now "AC Maintenance & Servicing in Dubai" |
| `/ac-repair-dubai` | 39 | "AC Repair Dubai — Same-Day Engineer Diagnosis \| AGEC" (52) | self → self | Not recorded; now "AC Repair in Dubai: Diagnosed by an Engineer, Quoted Before We Start" |
| `/ac-amc-dubai` | 50 | "AC AMC Dubai \| Annual Maintenance Contracts \| AGEC" (50) | self → self | Not recorded; now "AC AMC in Dubai — Annual Maintenance Contracts" |
| `/ac-duct-cleaning-dubai` | 52 | "AC Duct Cleaning Dubai \| Villas & Offices \| AGEC" (48) | self → self | Not recorded; now "AC Duct Cleaning in Dubai With a Completion Report" |
| `/services/vrf-vrv-systems` | 24 (no "Dubai") | "VRF Installation in Dubai \| VRV Systems & Maintenance \| AGEC" (60) | self → self | Not recorded; now "VRF Installation in Dubai" |
| `/services/ventilation-fresh-air` | 52 | "Fresh Air, FAHU & Ventilation Systems Dubai \| AGEC" (50) | self → self | Not recorded; now "Ventilation in Dubai: Fresh Air, FAHU and Indoor Air Quality Testing" |
| `/projects` | **"Projects \| AGEC"** (15) | "HVAC Projects in Dubai & the UAE \| AGEC" (39) | self → self | Not recorded; now "Projects across Dubai and the UAE" |
| `/contact` | **"Contact \| AGEC"** (14) | "Contact AGEC \| HVAC Services in Dubai" (37) | self → self | Not recorded; now "Get in touch" |
| `/quote` | 22 | "Get a Quote or Book a Service in Dubai \| AGEC" (45) | self → self | Not recorded; now "Get a quote or book a service" |
| `/smart-thermostat-installation-dubai` | 62 | "Smart Thermostat Installation Dubai – Nest & ecobee \| AGEC" (58) | self → self | Not recorded; now "Smart Thermostat Installation in Dubai — Google Nest & ecobee Experts" |
| `/blog` | 40 | "Insights & Engineering Guides \| AGEC" (36) | self → self | Not recorded; now "Insights & Engineering Guides" |

Summary:
- **Canonicals:** unchanged — self-referencing, no trailing slash, non-www, on every page in both baselines.
- **Titles:** every compared title changed. All are now 32–60 characters, include "Dubai" where relevant (except `/blog`), and the three brand-only titles (`/about`, `/projects`, `/contact`) were replaced.
- **H1s:** cannot be compared; the previous baseline did not record them.
- Note: `/services/vrf-vrv-systems` now includes "VRV Systems & Maintenance" in its title while `/vrf-maintenance-dubai` targets VRF maintenance. Search Console shows the homepage, not either of these, ranking for VRF-maintenance queries (see finding 6).
- Other items the previous baseline flagged and that are now fixed: `og:image` was missing everywhere (now `/og-image.png` 1200×630 sitewide); `twitter:title` was generic (now per page); `/contact` had no LocalBusiness schema (HVACBusiness is now sitewide); BreadcrumbList was missing on several pages (now present on all except `/` and `/ar`); the sitemap had no `lastmod` (now per page).
