# AGEC — Business facts (single source of truth for content work)

Owner-confirmed. Every page, component, metadata field and JSON-LD block must match this file.
In code, these facts live in `src/data/business.ts`; this document is the human-readable reference.

| Fact | Value |
|---|---|
| Display name (matches Google Business Profile) | **AGEC Technical Services** |
| Alternate names | AGEC; Altaher Ghabboun Engineering Contracting |
| Legal name | Not published (no `legalName` in schema) |
| Address (exactly as on the Business Profile) | **AlMasraf Sheikh Zayed branch, Dubai, United Arab Emirates** |
| Maps | https://maps.google.com/maps?cid=14934329653680563760 |
| Phone and WhatsApp | **+971 58 557 5987** (the only number; no landline) |
| Service area | All 7 emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah |
| Licences / approvals | **NONE.** No Dubai Municipality, DEWA, Civil Defence, Trakhees, ISO or trade-licence claims anywhere |
| Google rating | **5.0 from 42 reviews** (all-time) — verified 19 Nov 2026 |
| Case studies | 13 exist. No new details: do not invent results, years or photos |

## Pending from the owner

- Lead inbox (`CONTACT_EMAIL` value in Vercel)
- Resend domain verification for agec.ae (until then the sender stays `onboarding@resend.dev`)
- Google Ads form conversion label
- Search Console data older than 30 days (16 months)
- Vercel preview URL and confirmation that previews are protected / noindex

## Protected redirects — must never be changed or removed

| From | To |
|---|---|
| `/services/maintenance` | `/ac-amc-dubai` |
| `/book` | `/quote` |
| `/services/ac-cleaning/premium-duct`, `/full-ac`, `/split-ac`, `/coil-cleaning` | `/ac-duct-cleaning-dubai` |
| `/google-nest-thermostat-installation-dubai` | `/smart-thermostat-installation-dubai` |
| `/ecobee-thermostat-installation-dubai` | `/smart-thermostat-installation-dubai` |

## Baseline

`docs/seo-baseline.md` (current version, with H1s) is the only baseline for comparison.
