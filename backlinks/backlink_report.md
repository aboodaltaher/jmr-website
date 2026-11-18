# agec.ae backlink audit — 18 Nov 2026

Status: **partial.** Common Crawl (free, the only source reachable) is done. Search Console, Bing, a live checker and the competitor comparison are not. Every figure is labelled VERIFIED or ESTIMATE.

## Replacement row for the SEO audit table

| Item | Result | Evidence |
|---|---|---|
| Backlink profile | **1 referring domain / at least 1 link (as of 2026-11-18) — a floor, not the total** | VERIFIED in the Common Crawl web graph `cc-main-2026-aug-sep-oct`: one linking domain (`dubaitop10.ae`). Search Console and Bing are missing, so the real count is likely higher. |

The old "~20" estimate is **not supported** by any data I could reach. It may still be roughly right, because Common Crawl covers only part of the web. Treat "~20" as an unverified ESTIMATE until the Search Console export is in.

## What was verified (sources and dates)

| Fact | Value | Status |
|---|---|---|
| Release used | `cc-main-2026-aug-sep-oct`, built from crawls CC-MAIN-2026-34, -39, -43 (Aug–Oct 2026); latest in `graphinfo.json` on 2026-11-18 | VERIFIED |
| Domain-level graph | node `ae.agec` (id 44865) has **1** inbound edge, from `ae.dubaitop10` | VERIFIED (7.1 GiB edge file streamed and filtered in code) |
| Host-level graph | `ae.agec` (id 64043) has **1** inbound edge, from `ae.dubaitop10`. No `www.agec.ae` or other subdomain nodes exist in the graph | VERIFIED |
| Referring domains | 1 | VERIFIED floor |
| Links (URLs) | at least 1 | VERIFIED floor. The graph records host-to-host edges only, so URL counts are not available. |
| Dofollow share, anchor-text mix, top linked pages | **unknown** | Needs Search Console or Bing. The graph holds no anchor, rel or page data. |
| Toxic links | **0 identified, 0 reviewed.** Only one domain exists and its page could not be fetched | Not assessed |
| Category of `dubaitop10.ae` | directory (guess from the name only; page not opened) | ESTIMATE |

### Disavow
Not needed on this evidence. Google ignores most spam links automatically, and a disavow file is only worth filing for a manual action or a clear paid-link or link-network pattern. One unreviewed directory-type link is neither. Do not disavow without a Search Console export that shows an actual problem.

### Brand confusion
**Not done.** DuckDuckGo served a bot challenge (HTTP 202 with `anomaly.js`, no results) for both GET and POST on 2026-11-18, and I did not try to get past it. I will not list "other AGEC firms" from memory. Re-run these searches by hand and note the date:
- `"AGEC" dubai hvac`
- `"AGEC Technical Services"`
- `agec.ae`
- `"Altaher Ghabboun Engineering Contracting"`

When checking citations, look for listings under a different phone number or address. The NAP to match is in `src/data/business.ts`: AGEC Technical Services L.L.C., licence 1221573, +971 58 557 5987, a.altaher@agec.ae, AlMasraf Building, Sheikh Zayed Road, Al Quoz Industrial Area 1, Dubai.

## Competitor comparison

| Site | Referring domains | Status |
|---|---|---|
| agec.ae | 1 (floor) | VERIFIED floor |
| 5 Dubai HVAC competitors | **not collected** | See below |

Competitors must be confirmed from search results for "ac maintenance dubai", "ac repair dubai", "vrf installation dubai" and "hvac company dubai". DuckDuckGo was challenge-gated, and I won't name competitors without that evidence. `competitor_gap.csv` has headers only. To finish: send the 5 competitor domains, plus which search engine and date you used. Then I'll run the same graph method on all of them in a single streaming pass. The gap list is every domain that links to 2 or more of them and not to us.

## 90-day link-building plan

NAP must match the Google Business Profile exactly in every item. Source for the strings is `src/data/business.ts`.

| # | Action | Effort | Impact | Owner | When |
|---|---|---|---|---|---|
| 1 | Export Search Console and Bing links (see "What I could not get") and re-run the merge. This is the baseline everything else is measured against. | Low | High (decisions) | Owner | Week 1 |
| 2 | Open `dubaitop10.ae`. Confirm the listing exists and its NAP matches. Fix it if not. | Low | Medium | Owner | Week 1 |
| 3 | Brand-confusion check (4 queries above). Claim or correct any listing carrying another firm's details. | Low | Medium | Owner | Week 1 |
| 4 | Fill the empty `links.linkedin`, `facebook` and `youtube` in `business.ts`. Create the profiles (they also feed `sameAs` schema) and link them to agec.ae. | Medium | Medium | Owner | Weeks 1–2 |
| 5 | UAE directories and citations (e.g. Dubai Yellow Pages, Dubai Chamber member directory if eligible, Bing Places, Apple Business Connect, other Google-listed UAE directories). One submission pass, identical NAP. | Medium | Medium | Marketing/admin | Weeks 2–4 |
| 6 | Client and project links: ask 5–10 past clients (e.g. the Basil Mall, Ajman VRF project) for a "project by AGEC" link. | Medium | High | Owner | Weeks 3–8 |
| 7 | Supplier links: ask suppliers you buy from for a customer or contractor mention. Manufacturer or dealer partner pages (Daikin, Trane, O General, Mitsubishi, LG, Carrier, York, Midea) **only where a real partnership exists.** AGEC is not an authorised dealer or service centre of any of them, so do not request or claim partner pages. | Medium | Medium | Owner | Weeks 4–8 |
| 8 | Dubai trade bodies (e.g. an HVAC or contractors association, if you are or can become a member). Join only if membership is real. | Medium | Medium | Owner | Weeks 6–12 |
| 9 | Local PR: one technical piece (e.g. VRF sizing for villas) offered to UAE trade or property outlets. | High | High | Owner + a writer | Weeks 8–12 |
| 10 | Add the 5 competitors' referring domains and build the real outreach list from `competitor_gap.csv`. | Medium | High | Claude (once competitors are named) | After competitors are confirmed |

## What I could not get

| Source | Result | What is needed |
|---|---|---|
| Google Search Console Links | MISSING. Needs a login. | In Search Console go to Links and export "Top linking sites", "Top linked pages" and "Top linking text" as CSV. Drop them in `backlinks/gsc/`. |
| Bing Webmaster Tools Backlinks | MISSING. Needs a login. | Bing Webmaster Tools, Backlinks, export to CSV. Drop it in `backlinks/bing/`. |
| Common Crawl CDX index | FAILED. `index.commoncrawl.org` returned 502, 504 or connection resets on every query on 2026-11-18, although `collinfo.json` loaded. CDX only lists which agec.ae pages were crawled, not who links to them, so it would not change the link count. Retry later. | None |
| OpenLinkProfiler | GATED. Slider captcha plus Cloudflare Turnstile on the checker form (host `openlinkprofiler.org` was added to the allowlist and loads). I did not try to get past the captcha. | Open https://openlinkprofiler.org/ in a browser, run `agec.ae`, and export or paste the result. |
| Ahrefs, Moz, Semrush free checkers | BLOCKED by the network policy (hosts `ahrefs.com`, `moz.com`, `www.semrush.com`). Their free tools use captcha or login, so I did not propose adding hosts. | Run them in a browser and paste the counts. |
| DuckDuckGo SERPs | Bot challenge, no results. | See brand confusion and competitors above. |
| Competitor referring-domain counts | Not collected. | 5 confirmed competitor domains, with search engine and date. |
| Page-level anchor, dofollow, first-seen | Not in any reachable source. | Comes with the Search Console or Bing export. |

## Files
- `backlinks_agec.csv`: cleaned list (1 row).
- `competitor_gap.csv`: headers only.
- `scripts/cc_webgraph.sh`, `scripts/cc_filter.py`: stream the Common Crawl graph (domain and host level), keeping only inbound edges to agec.ae.
- `scripts/merge_backlinks.py`: merges the graph results and any CSVs in `gsc/` and `bing/`; run `python3 -I backlinks/scripts/merge_backlinks.py` after dropping files in.
