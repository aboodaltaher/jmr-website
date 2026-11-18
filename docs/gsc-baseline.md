# AGEC — Search Console & GA4 Baseline (Phase 0, read-only)

- **Pulled:** 2026-11-18 via the Windsor.ai MCP, read-only (`get_connectors`, `get_fields`, `get_data` only — no connectors, destinations, custom fields or tasks were created or changed).
- **Sources connected:** Search Console `sc-domain:agec.ae` · GA4 property `562636226` ("AGEC") · Google Business Profile `locations/1094474062295842323`.

> ## ⚠️ Data window limitation — read first
> The brief asked for **16 months** of Search Console and **90 days** of GA4. Windsor returned:
> *"your trial includes the last 30 days of data history, and this request asks for older data."*
> **Every number below covers the last 30 days only** (Windsor preset `last_30d`, ending 2026-11-17). Nothing older was available and **no figure has been estimated or extrapolated**. To get the full window, either upgrade the Windsor plan or export from Search Console / GA4 directly, then re-run this baseline.

Other data caveats
- Search Console hides anonymised queries: page-level totals show **41 clicks / ≈2,470 impressions**; query-level rows only account for **10 clicks**. Query tables therefore under-count.
- Volumes are very small. Treat positions on 1–5 impressions as noise.
- ~60 queries are "\<brand\> vs ecobee" (e.g. "audi vs ecobee", "oakley vs ecobee") hitting `/blog/google-nest-vs-ecobee-uae`. They look automated/irrelevant and inflate that page's impressions.

---

## 1. Search Console — pages (all 56 pages with impressions, sorted by clicks then impressions)

The brief asked for the top 50; only 56 pages had any impressions, so all are listed.

| # | Page | Clicks | Impr. | CTR | Avg pos. |
|---|---|---|---|---|---|
| 1 | `/` | 21 | 790 | 2.66% | 13.5 |
| 2 | `/smart-thermostat-installation-dubai` | 7 | 452 | 1.55% | 12.6 |
| 3 | `/blog/google-nest-vs-ecobee-uae` | 2 | 223 | 0.90% | 5.7 |
| 4 | `/blog/vrf-vs-chiller-dubai-villas` | 2 | 175 | 1.14% | 5.6 |
| 5 | `/services/dx-units` | 2 | 141 | 1.42% | 10.4 |
| 6 | `/contact` | 2 | 65 | 3.08% | 9.0 |
| 7 | `/blog/why-ac-bill-so-high-dubai` | 1 | 132 | 0.76% | 5.7 |
| 8 | `/ac-maintenance-dubai` | 1 | 122 | 0.82% | 29.7 |
| 9 | `/services/ventilation-fresh-air` | 1 | 47 | 2.13% | 12.2 |
| 10 | `/ecobee-thermostat-installation-dubai` *(301 → smart-thermostat)* | 1 | 6 | 16.7% | 20.7 |
| 11 | `/blog/ac-maintenance-contracts-dubai-amc-guide` | 1 | 2 | 50% | 3.5 |
| 12 | `/about` | 0 | 64 | 0% | 6.8 |
| 13 | `/ac-ducting-installation-dubai` | 0 | 46 | 0% | 28.5 |
| 14 | `/blog/smart-thermostat-ac-compatibility-uae` | 0 | 25 | 0% | 6.9 |
| 15 | `/services/maintenance` *(301 → /ac-amc-dubai)* | 0 | 25 | 0% | 24.1 |
| 16 | `/ac-maintenance/al-barsha` | 0 | 13 | 0% | 44.0 |
| 17 | `/blog/what-is-air-balancing-dubai` | 0 | 12 | 0% | 24.0 |
| 18 | `/ac-amc-dubai` | 0 | 9 | 0% | 26.7 |
| 19 | `/blog` | 0 | 9 | 0% | 3.7 |
| 20 | `/vrf-maintenance-dubai` | 0 | 9 | 0% | 49.0 |
| 21 | `/google-nest-thermostat-installation-dubai` *(301 → smart-thermostat)* | 0 | 7 | 0% | 33.0 |
| 22 | `/air-balancing-dubai` | 0 | 6 | 0% | 38.0 |
| 23 | `/blog/smart-thermostat-save-dewa-bill` | 0 | 6 | 0% | 10.8 |
| 24 | `/quote` | 0 | 6 | 0% | 23.2 |
| 25 | `/ac-duct-cleaning-dubai` | 0 | 5 | 0% | 58.8 |
| 26 | `/ac-installation-dubai` | 0 | 5 | 0% | 70.2 |
| 27 | `/ac-repair-dubai` | 0 | 5 | 0% | 50.0 |
| 28 | `/blog/ac-coil-cleaning-and-amc-dubai` | 0 | 5 | 0% | 14.2 |
| 29 | `/blog/what-is-a-c-wire-dubai` | 0 | 5 | 0% | 6.0 |
| 30 | `/kitchen-exhaust-cleaning-dubai` | 0 | 5 | 0% | 52.8 |
| 31 | `/ac-maintenance/business-bay` | 0 | 4 | 0% | 48.3 |
| 32 | `/ar` | 0 | 4 | 0% | 6.5 |
| 33 | `/ar/ac-maintenance-dubai` | 0 | 4 | 0% | 15.0 |
| 34 | `/ar/smart-thermostat-installation-dubai` | 0 | 4 | 0% | 23.5 |
| 35 | `/privacy-policy` | 0 | 4 | 0% | 28.8 |
| 36 | `/ar/services/vrf-vrv-systems` | 0 | 3 | 0% | 91.3 |
| 37 | `/hvac-contractor-abu-dhabi` | 0 | 3 | 0% | 55.3 |
| 38 | `/ar/about` | 0 | 2 | 0% | 5.0 |
| 39 | `/ar/ac-ducting-installation-dubai` | 0 | 2 | 0% | 14.5 |
| 40 | `/blog/ac-maintenance-vs-duct-cleaning-dubai` | 0 | 2 | 0% | 6.0 |
| 41 | `/blog/ac-running-but-not-cooling-dubai` | 0 | 2 | 0% | 9.0 |
| 42 | `/blog/when-to-replace-ac-thermostat-dubai` | 0 | 2 | 0% | 13.5 |
| 43 | `/projects/g1r-villa-dubai` | 0 | 2 | 0% | 17.0 |
| 44 | `/ac-maintenance/al-wasl` | 0 | 1 | 0% | 90.0 |
| 45 | `/ac-maintenance/dubai-hills` | 0 | 1 | 0% | 35.0 |
| 46 | `/ar/ac-amc-dubai` | 0 | 1 | 0% | 3.0 |
| 47 | `/ar/privacy-policy` | 0 | 1 | 0% | 11.0 |
| 48 | `/ar/services` | 0 | 1 | 0% | 7.0 |
| 49 | `/ar/services/dx-units` | 0 | 1 | 0% | 7.0 |
| 50 | `/ar/services/hvac-installation-dubai` | 0 | 1 | 0% | 25.0 |
| 51 | `/ar/terms` | 0 | 1 | 0% | 8.0 |
| 52 | `/blog/does-nest-work-with-vrf-dubai` | 0 | 1 | 0% | 8.0 |
| 53 | `/blog/why-does-my-ac-smell-bad-dubai` | 0 | 1 | 0% | 1.0 |
| 54 | `/hvac-contractor-ajman` | 0 | 1 | 0% | 14.0 |
| 55 | `/hvac-contractor-sharjah` | 0 | 1 | 0% | 76.0 |
| 56 | `/terms` | 0 | 1 | 0% | 2.0 |

**Published pages with zero impressions in the window:** `/services`, `/services/hvac-installation-dubai`, `/services/tab-testing-adjusting-balancing-dubai`, `/services/chiller-maintenance-dubai`, `/services/vrf-vrv-systems`, `/services/hvac-design`, `/projects` and 12 of 13 case studies, `/areas`, `/ac-maintenance/mira-oasis`, `/ac-maintenance/sustainable-city`, `/blog/how-often-service-villa-ac-dubai`, and most `/ar/*` pages.

## 2. Search Console — top 100 queries (of 329), sorted by clicks then impressions

Ties at 2 impressions are cut at row 100. One junk query (a `-site:facebook.com …` scraper string) is omitted.

| # | Query | Clicks | Impr. | CTR | Pos. |
|---|---|---|---|---|---|
| 1 | smart thermostat installation dubai | 3 | 59 | 5.08% | 7.0 |
| 2 | agec | 3 | 25 | 12.0% | 4.1 |
| 3 | top 10 hvac companies in dubai | 1 | 5 | 20% | 6.6 |
| 4 | chiller technician near me | 1 | 2 | 50% | 2.0 |
| 5 | hvac dubai (with invisible character) | 1 | 1 | 100% | 29.0 |
| 6 | 한국어 | 1 | 1 | 100% | 2.0 |
| 7 | smart thermostat dubai | 0 | 61 | 0% | 22.6 |
| 8 | vrv maintenance dubai | 0 | 40 | 0% | 2.2 |
| 9 | vrf & vrv maintenance dubai | 0 | 38 | 0% | 6.3 |
| 10 | nest thermostat installation dubai | 0 | 30 | 0% | 12.2 |
| 11 | fcu maintenance dubai | 0 | 22 | 0% | 2.5 |
| 12 | dx units | 0 | 19 | 0% | 8.4 |
| 13 | vrf maintenance dubai | 0 | 19 | 0% | 22.4 |
| 14 | dx unit | 0 | 18 | 0% | 11.1 |
| 15 | smart thermostat installation | 0 | 18 | 0% | 10.1 |
| 16 | vrf system inspection dubai | 0 | 18 | 0% | 4.0 |
| 17 | hvac maintenance companies in dubai | 0 | 17 | 0% | 39.4 |
| 18 | chiller villa | 0 | 16 | 0% | 3.1 |
| 19 | hvac | 0 | 15 | 0% | 2.3 |
| 20 | ac maintenance in dubai | 0 | 13 | 0% | 38.5 |
| 21 | ahri certified vavs in dubai | 0 | 13 | 0% | 14.5 |
| 22 | duct sizing software training in dubai | 0 | 13 | 0% | 76.2 |
| 23 | smart thermostat | 0 | 13 | 0% | 29.7 |
| 24 | ac thermostat installation in dubai | 0 | 11 | 0% | 10.2 |
| 25 | hvac amc | 0 | 11 | 0% | 47.0 |
| 26 | hvac contractors in dubai | 0 | 11 | 0% | 24.5 |
| 27 | hvac air balancing | 0 | 10 | 0% | 6.1 |
| 28 | hvac consultants in dubai | 0 | 10 | 0% | 77.5 |
| 29 | central water chiller system design dubai | 0 | 9 | 0% | 6.9 |
| 30 | ecobee vs google | 0 | 9 | 0% | 6.2 |
| 31 | hvac integration dubai | 0 | 9 | 0% | 17.9 |
| 32 | smart thermostat uae | 0 | 9 | 0% | 22.8 |
| 33 | ecobee vs nest | 0 | 8 | 0% | 3.3 |
| 34 | ac repair al barsha | 0 | 7 | 0% | 49.9 |
| 35 | google nest thermostat installation in dubai in 350 dhs | 0 | 7 | 0% | 46.9 |
| 36 | hvac testing and commissioning companies | 0 | 7 | 0% | 36.7 |
| 37 | smart thermostat compatibility converter | 0 | 7 | 0% | 7.3 |
| 38 | ecobee thermostat dubai | 0 | 6 | 0% | 35.3 |
| 39 | hvac air balancing dubai | 0 | 6 | 0% | 24.8 |
| 40 | hvac contractor in dubai | 0 | 6 | 0% | 49.5 |
| 41 | hvac maintenance company dubai | 0 | 6 | 0% | 22.0 |
| 42 | ac duct | 0 | 5 | 0% | 14.6 |
| 43 | commercial control systems installation and maintenance services dubai | 0 | 5 | 0% | 21.6 |
| 44 | ecobee thermostats in dubai | 0 | 5 | 0% | 25.2 |
| 45 | hvac subcontractors near me | 0 | 5 | 0% | 5.0 |
| 46 | hvac system retro commissioning dubai | 0 | 5 | 0% | 6.2 |
| 47 | oakley vs ecobee | 0 | 5 | 0% | 5.2 |
| 48 | ac duct cleaning dubai | 0 | 4 | 0% | 72.3 |
| 49 | ac maintenance dubai | 0 | 4 | 0% | 128.3 |
| 50 | air conditioning maintenance dubai | 0 | 4 | 0% | 24.8 |
| 51 | dx ac unit | 0 | 4 | 0% | 38.3 |
| 52 | ecobee vs asics | 0 | 4 | 0% | 1.8 |
| 53 | ecobee vs audi | 0 | 4 | 0% | 10.0 |
| 54 | ecobee vs volkswagen | 0 | 4 | 0% | 6.0 |
| 55 | hvac contractors near me | 0 | 4 | 0% | 11.8 |
| 56 | hvac maintenance company in dubai | 0 | 4 | 0% | 41.0 |
| 57 | hvac optimization consultant uae | 0 | 4 | 0% | 46.3 |
| 58 | hvac testing and balancing dubai | 0 | 4 | 0% | 73.8 |
| 59 | hvac testing and commissioning companies in uae | 0 | 4 | 0% | 1.8 |
| 60 | vat on cooling bill | 0 | 4 | 0% | 3.5 |
| 61 | ac contractor | 0 | 3 | 0% | 13.0 |
| 62 | ac ducting | 0 | 3 | 0% | 6.7 |
| 63 | ac installation dubai | 0 | 3 | 0% | 87.0 |
| 64 | ac maintenance company | 0 | 3 | 0% | 17.0 |
| 65 | ac service | 0 | 3 | 0% | 48.3 |
| 66 | air balancing | 0 | 3 | 0% | 8.3 |
| 67 | air balancing services | 0 | 3 | 0% | 16.0 |
| 68 | amc contractor | 0 | 3 | 0% | 26.3 |
| 69 | boiler upgradation services in dubai | 0 | 3 | 0% | 34.0 |
| 70 | chevrolet vs ecobee | 0 | 3 | 0% | 8.3 |
| 71 | columbia vs ecobee | 0 | 3 | 0% | 3.3 |
| 72 | dx cooling | 0 | 3 | 0% | 43.7 |
| 73 | ecobee thermostat uae | 0 | 3 | 0% | 16.7 |
| 74 | giant vs ecobee | 0 | 3 | 0% | 1.0 |
| 75 | google nest thermostat supplier in uae | 0 | 3 | 0% | 7.3 |
| 76 | hvac contractors dubai | 0 | 3 | 0% | 8.0 |
| 77 | hvac integration uae | 0 | 3 | 0% | 73.0 |
| 78 | hvac systems | 0 | 3 | 0% | 5.0 |
| 79 | rei vs ecobee | 0 | 3 | 0% | 6.0 |
| 80 | thermostat installation in dubai in 350 | 0 | 3 | 0% | 40.3 |
| 81 | top 10 technical services companies in dubai | 0 | 3 | 0% | 8.0 |
| 82 | vrf company in dubai | 0 | 3 | 0% | 3.3 |
| 83 | vrf system inspection | 0 | 3 | 0% | 11.7 |
| 84 | ac commissioning | 0 | 2 | 0% | 9.5 |
| 85 | ac contractor in dubai | 0 | 2 | 0% | 23.5 |
| 86 | ac ducting companies in dubai | 0 | 2 | 0% | 131.5 |
| 87 | ac ducting dubai | 0 | 2 | 0% | 48.0 |
| 88 | ac ducting in dubai | 0 | 2 | 0% | 26.0 |
| 89 | ac duct work | 0 | 2 | 0% | 8.0 |
| 90 | ac maintenance companies in uae | 0 | 2 | 0% | 51.0 |
| 91 | ac repair | 0 | 2 | 0% | 96.5 |
| 92 | ac repair in al barsha | 0 | 2 | 0% | 48.5 |
| 93 | air balancing in hvac | 0 | 2 | 0% | 7.0 |
| 94 | air conditioning company | 0 | 2 | 0% | 1.0 |
| 95 | air conditioning contractor | 0 | 2 | 0% | 4.5 |
| 96 | aircon maintenance dubai | 0 | 2 | 0% | 15.0 |
| 97 | al barsha ac repair | 0 | 2 | 0% | 51.0 |
| 98 | amc dubai | 0 | 2 | 0% | 50.0 |
| 99 | buy ecobee smart thermostats in dubai | 0 | 2 | 0% | 40.5 |
| 100 | climate control engineering | 0 | 2 | 0% | 19.0 |

## 3. Striking-distance queries (avg. position 8–20, ≥ 5 impressions)

| Query | Impr. | Pos. | Ranking page | Note |
|---|---|---|---|---|
| nest thermostat installation dubai | 30 | 12.2 | `/smart-thermostat-installation-dubai` (29 @ 11.8) | Highest-value striking query |
| dx units | 19 | 8.4 | `/services/dx-units` | Informational intent |
| smart thermostat installation | 18 | 10.1 | `/smart-thermostat-installation-dubai` (17 @ 8.3) | |
| dx unit | 18 | 11.1 | `/services/dx-units` | |
| ahri certified vavs in dubai | 13 | 14.5 | `/` | Off-topic for AGEC services |
| ac thermostat installation in dubai | 11 | 10.2 | `/smart-thermostat-installation-dubai` | |
| hvac integration dubai | 9 | 17.9 | `/` | |
| ac duct | 5 | 14.6 | `/ac-ducting-installation-dubai` | |

Just outside the band but commercially important (20–30): smart thermostat dubai (61 @ 22.6), vrf maintenance dubai (19 @ 22.4), hvac contractors in dubai (11 @ 24.5), hvac maintenance company dubai (6 @ 22.0), smart thermostat uae (9 @ 22.8), air conditioning maintenance dubai (4 @ 24.8).

Pages in striking distance by page-level position: `/` (790 @ 13.5), `/smart-thermostat-installation-dubai` (452 @ 12.6), `/services/dx-units` (141 @ 10.4), `/services/ventilation-fresh-air` (47 @ 12.2), `/contact` (65 @ 9.0).

## 4. Queries with two or more ranking pages (cannibalisation)

| Query | Pages (impr. @ pos.) | Assessment |
|---|---|---|
| vrv maintenance dubai | `/` (40 @ 2.2) · `/vrf-maintenance-dubai` (2 @ 82) | **Homepage outranks the dedicated page** |
| vrf & vrv maintenance dubai | `/` (38 @ 6.3) · `/vrf-maintenance-dubai` (1 @ 31) · `/ar/services/vrf-vrv-systems` (1 @ 84) | Same |
| vrf maintenance dubai | `/` (18 @ 22.1) · `/vrf-maintenance-dubai` (2 @ 19.5) | Same |
| vrf system inspection dubai | `/` (18 @ 4.0) · `/vrf-maintenance-dubai` (2 @ 62.5) · `/ar/services/vrf-vrv-systems` (1 @ 91) | Same |
| vrf service provider in dubai | `/` (1 @ 3) · `/vrf-maintenance-dubai` (1 @ 51) · `/ar/services/vrf-vrv-systems` (1 @ 99) | Same |
| hvac maintenance company dubai | `/ac-maintenance-dubai` (6 @ 23.2) · `/` (1 @ 22) | Home vs maintenance page |
| hvac maintenance company in dubai | `/ac-maintenance-dubai` (3 @ 46) · `/` (1 @ 26) | Same |
| ac contractor in dubai | `/` (1 @ 18) · `/ac-maintenance-dubai` (1 @ 29) | Low volume |
| hvac testing and balancing dubai | `/` (1 @ 4) · `/air-balancing-dubai` (2 @ 97) · `/blog/what-is-air-balancing-dubai` (2 @ 98) | Three pages; TAB page absent |
| air balancing / air balancing companies | `/` · `/blog/what-is-air-balancing-dubai` | Blog vs home; service page absent |
| smart thermostat installation dubai | `/smart-thermostat-installation-dubai` (57 @ 5.8) · `/google-nest-…` (2 @ 43.5) · `/ecobee-…` (1 @ 44) | Old URLs already 301 — consolidating |
| google nest thermostat installation in dubai in 350 dhs | `/google-nest-…` (3 @ 30.7) · `/smart-thermostat-…` (3 @ 60.7) · `/ar/smart-thermostat-…` (1 @ 54) | Same; still settling |
| nest thermostat installation dubai | `/smart-thermostat-…` (29 @ 11.8) · `/` (1 @ 25) | Minor |
| hvac contractors near me / hvac subcontractors near me / top 10 hvac companies in dubai | `/`, `/about`, `/contact` | Brand-level pages; low risk |
| hvac optimization consultant uae | `/quote` (3 @ 40) · `/` (1 @ 65) | Low volume |
| hvac energy auditing dubai | `/services/ventilation-fresh-air` (1 @ 19) · `/` (1 @ 90) | Low volume |
| agec | `/` (24 @ 2.1) · `/about` (4 @ 17.8) | Brand; fine |

## 5. High impressions, CTR below 2% (≥ 40 impressions)

| Page | Impr. | CTR | Pos. |
|---|---|---|---|
| `/smart-thermostat-installation-dubai` | 452 | 1.55% | 12.6 |
| `/blog/google-nest-vs-ecobee-uae` | 223 | 0.90% | 5.7 (impressions inflated by junk "X vs ecobee" queries) |
| `/blog/vrf-vs-chiller-dubai-villas` | 175 | 1.14% | 5.6 |
| `/services/dx-units` | 141 | 1.42% | 10.4 |
| `/blog/why-ac-bill-so-high-dubai` | 132 | 0.76% | 5.7 |
| `/ac-maintenance-dubai` | 122 | 0.82% | 29.7 |
| `/about` | 64 | 0% | 6.8 |
| `/ac-ducting-installation-dubai` | 46 | 0% | 28.5 |

---

## 6. GA4 — last 30 days (90 days unavailable, see top)

### Sessions by channel

| Channel | Sessions | Engaged | Engagement rate | Key events |
|---|---|---|---|---|
| Direct | 170 | 30 | 17.6% | 0 |
| Organic Search | 24 | 13 | 54.2% | 0 |
| AI Assistant | 11 | 8 | 72.7% | 0 |
| Organic Social | 2 | 2 | 100% | 0 |
| Unassigned | 1 | 0 | 0% | 0 |
| Paid (Search/Social) | **0 rows returned** | — | — | — |
| Referral | **0 rows returned** | — | — | — |

Total ≈ 208 sessions. Direct traffic is 82% of sessions with a 17.6% engagement rate, almost all landing on `/` — consistent with bot/QA/internal traffic or untagged links (e.g. the Google Business Profile website link has no UTM). Not verifiable from this data alone.

### Top landing pages

| Landing page | Sessions | Engaged | Eng. rate | Key events |
|---|---|---|---|---|
| `/` | 172 | 41 | 23.8% | 0 |
| `/smart-thermostat-installation-dubai` | 9 | 6 | 66.7% | 0 |
| `(not set)` | 5 | 0 | 0% | 0 |
| `/about` | 5 | 2 | 40% | 0 |
| `/projects/mbz-ai-server-room-abu-dhabi` | 3 | 0 | 0% | 0 |
| `/contact` | 2 | 1 | 50% | 0 |
| `/services/tab-testing-adjusting-balancing-dubai` | 2 | 0 | 0% | 0 |
| `/ac-amc-dubai`, `/ac-maintenance-dubai`, `/blog/ac-maintenance-contracts-dubai-amc-guide`, `/blog/why-ac-bill-so-high-dubai`, `/kitchen-exhaust-cleaning-dubai`, `/mep-contractors-dubai`, `/projects`, `/services/chiller-maintenance-dubai`, `/services/ventilation-fresh-air` | 1 each | — | — | 0 |

### Events recorded (30 days)

| Event | Count | Marked as key event? |
|---|---|---|
| page_view | 322 | — |
| session_start | 207 | — |
| first_visit | 162 | — |
| user_engagement | 75 | — |
| scroll | 18 | — |
| nav_click | 10 | — |
| click | 5 | — |
| click_whatsapp | 3 | **No** (0 key events) |
| whatsapp_click (legacy duplicate) | 3 | No |
| form_start | 2 | — |
| form_submit (legacy) | 2 | No |
| form_submit_contact | 1 | **No** |
| form_submit_quote | 1 | **No** |
| generate_lead | 1 | **No** |

**No event is marked as a key event in GA4** (key events = 0 for every event, channel and page). `click_call` did not fire in the window. WhatsApp clicks are counted twice under two names.

## 7. Google Business Profile — last 30 days (context)

| Metric | Value |
|---|---|
| Profile impressions (Maps + Search) | 378 |
| Direction requests | 55 |
| Website clicks | 11 |
| Call clicks | 7 |
| Reviews (all-time) / average | 42 / 5.0 |

## 8. Cross-check: URLs with Search Console or GA4 data vs the codebase

| URL | Source | Live status | In codebase? | Action |
|---|---|---|---|---|
| `/services/maintenance` | GSC 25 impr. | 301 → `/ac-amc-dubai` | Redirect in `next.config.ts` | Keep the redirect permanently |
| `/google-nest-thermostat-installation-dubai` | GSC 7 impr. | 301 → `/smart-thermostat-installation-dubai#google-nest` | Redirect | Keep |
| `/ecobee-thermostat-installation-dubai` | GSC 6 impr., 1 click | 301 → `/smart-thermostat-installation-dubai#ecobee` | Redirect | Keep |
| `/mep-contractors-dubai` | GA4 1 session | **404** (publish switch off) | Route exists, gated | Publish or keep gated; not indexed |
| All other 52 GSC pages and GA4 landing pages | — | 200 | Yes | — |

No URL with clicks or impressions returns a 404 or is missing from the codebase.
