# Brand / NAP consistency audit (2026-11)

Method: production build served locally, every URL in `sitemap.xml` (85 pages) fetched, name, phone, address,
email, geo and hours extracted from the visible text and from the JSON-LD, and counted by script.
Source of truth: `src/data/business.ts` (re-exported by `src/lib/company.ts`). `scripts/check-nap.sh` fails the
build if a phone, address, email, licence or review figure is hard-coded anywhere else.

| Item | Variants found | Standard |
|---|---|---|
| Phone, visible | one format only | `+971 58 557 5987` |
| Phone, links | one value only | `tel:` / `wa.me` use `971585575987` |
| Phone, JSON-LD | one value only | `+971585575987` (E.164, as schema.org expects) |
| Address, visible | one string | `AlMasraf Building, Sheikh Zayed Road, Al Quoz Industrial Area 1, Dubai, UAE` |
| Address, JSON-LD | one string | same street address, locality Dubai, country AE |
| Geo | one pair on all 85 pages | 25.1431755, 55.2210469 |
| Hours, visible | "24/7" and "Open 24 hours" (same meaning) | open 24 hours, every day |
| Hours, JSON-LD | `00:00` to `23:59`, all days | matches the visible text |
| Email | one address on all pages, footer, contact page, mailto links and JSON-LD | `a.altaher@agec.ae` (owner decision) |
| Name | "AGEC Technical Services" (brand), "AGEC Technical Services L.L.C." (legal name, licence line and JSON-LD `legalName`), "AGEC" (short, JSON-LD `alternateName`) | roles are distinct, not conflicting |

Not found: "Altaher Ghabboun Engineering Contracting" (removed everywhere on the owner's instruction), old addresses
(Alhamra, Umm Hurair), `0` prefixed phone numbers, a second email address.

Notes
- The brief asked for `+971 X XXX XXXX`. AGEC's number is a 9-digit mobile, so the correct grouping is
  `+971 58 557 5987`, which is what every page already uses.
- Two matches for "AGEC Engineering" were false positives ("Why AGEC / Engineering-first", "About AGEC /
  Engineering-led").
- The footer shows the brand name; the legal name appears once, next to the licence number, as a licence line.
  The old trade name is gone, so no switch flag was added.
