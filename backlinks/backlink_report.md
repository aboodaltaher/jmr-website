# agec.ae backlink audit — 18 Nov 2026

Status: **partial.** Google Search Console (VERIFIED) and Common Crawl are in. Bing was not available (the owner has no Bing Webmaster Tools account). Competitor comparison and brand-confusion searches are not done (search engine blocked, see below).

## Replacement row for the SEO audit table

| Item | Result | Evidence |
|---|---|---|
| Backlink profile | **6 referring domains / 14 links (as of 2026-11-18)** | VERIFIED: Google Search Console Links export received 2026-11-18 (Google's own sample, so it may be incomplete). Common Crawl `cc-main-2026-aug-sep-oct` independently shows 1 of the 6 (`dubaitop10.ae`). Bing not available. |

The old "~20" estimate is not supported: Google reports 6 domains and 14 links. Search Console can undercount, so treat 6 / 14 as what Google reports, not a hard ceiling.

## Summary (all counts computed in code from `gsc/*.csv`)

| Metric | Value | Status |
|---|---|---|
| Referring domains | 6 | VERIFIED (GSC). Common Crawl graph finds 1 of them. |
| Incoming links | 14 (sum of linking pages = sum of incoming links) | VERIFIED (GSC) |
| Target pages | 6 | VERIFIED (GSC) |
| Homepage share | 9 of 14 links (64%) | VERIFIED (GSC) |
| Dofollow share | **unknown.** The GSC export has no rel data and the linking sites could not be fetched (hosts not on the allowlist) | Unknown |
| Anchor-text mix | 12 distinct anchors, in 3 groups (see below). The export does not say which anchor belongs to which site | VERIFIED list, per-site mapping unknown |
| Toxic links | **0 confirmed, 0 of 6 reviewed.** Sites could not be fetched, so none could be judged | Not assessed |

**Referring domains (links to agec.ae)**

| Domain | Links | Category | Basis |
|---|---|---|---|
| hvac1001.ae | 6 (to 6 different pages) | other / unconfirmed | Not fetched. Links to 6 pages suggests a site-wide or aggregated listing. Check whether it is a directory, scraper or competitor. |
| dubaitop10.ae | 2 | directory | ESTIMATE from the name only; also the only link Common Crawl saw |
| newomniyatcleaning.ae | 2 | other (business site) | ESTIMATE from the name; not fetched |
| yalqa.com | 2 | other | Not fetched |
| all-url.info | 1 | other, likely URL-list aggregator | ESTIMATE from the name; not fetched |
| leadralia.com | 1 | other, likely lead-gen aggregator | ESTIMATE from the name; not fetched |

**Top linked pages:** `/` (9), then `/about`, `/ac-maintenance-dubai`, `/blog`, `/contact`, `/services/maintenance` (1 each). `/services/maintenance` is now a redirect on agec.ae, so that link points at an old URL. Make sure the redirect is a 301 so the link value carries through.

**Anchor text (12 distinct, from GSC):** brand/URL (`agec ae`, `about agec`, `contact agec`, `insights & engineering guides agec`), generic (`website`, `their website`, `visit website`, `visit official website`, Arabic `الموقع` and `زيارة الموقع`), and keyword/descriptive (`ac maintenance dubai ac servicing repair & amc agec`, `hvac maintenance & amc plans`). Mostly brand or generic, with no exact-match keyword stuffing.

**Common Crawl cross-check:** release `cc-main-2026-aug-sep-oct` (crawls CC-MAIN-2026-34, -39, -43; latest in `graphinfo.json` on 2026-11-18). Domain graph node `ae.agec` (id 44865) and host graph node (id 64043) each have 1 inbound edge, from `dubaitop10.ae`. Common Crawl covers only part of the web, so it found 1 of Google's 6.

### Disavow
Not needed on this evidence. Google ignores most spam links automatically, and a disavow file is only for a manual action or a clear paid-link or link-network pattern. `all-url.info` and `leadralia.com` look like low-value aggregators but none of the 6 was reviewed. If you open them and they are clearly junk link lists, ignore them anyway unless Search Console shows a manual action.

### Brand confusion
**Not done.** DuckDuckGo served a bot challenge (HTTP 202 with `anomaly.js`, no results) for both GET and POST on 2026-11-18, and I did not try to get past it. I will not list "other AGEC firms" from memory. Re-run by hand and note the date:
- `"AGEC" dubai hvac`
- `"AGEC Technical Services"`
- `agec.ae`
- `"Altaher Ghabboun Engineering Contracting"`

NAP to match (source `src/data/business.ts`): AGEC Technical Services L.L.C., licence 1221573, +971 58 557 5987, a.altaher@agec.ae, AlMasraf Building, Sheikh Zayed Road, Al Quoz Industrial Area 1, Dubai.

## Competitor comparison

| Site | Referring domains | Status |
|---|---|---|
| agec.ae | 6 | VERIFIED (GSC, Google's sample) |
| 5 Dubai HVAC competitors | **not collected** | See below |

Competitors must be confirmed from search results for "ac maintenance dubai", "ac repair dubai", "vrf installation dubai" and "hvac company dubai". DuckDuckGo was challenge-gated, and I won't name competitors without that evidence. `competitor_gap.csv` has headers only. To finish: send the 5 competitor domains, plus which search engine and date you used. Then I'll run the same graph method on all of them in a single streaming pass. The gap list is every domain that links to 2 or more of them and not to us.

## 90-day link-building plan

NAP must match the Google Business Profile exactly in every item. Source for the strings is `src/data/business.ts`.

| # | Action | Effort | Impact | Owner | When |
|---|---|---|---|---|---|
| 1 | Open the 6 linking sites (start with `hvac1001.ae`, 6 links). Record the link rel, anchor and category in `backlinks_agec.csv`. Fix NAP errors in any listing. | Low | High | Owner | Week 1 |
| 2 | Make `/services/maintenance` a 301 redirect to its new URL, and ask `dubaitop10.ae` and others to update to the current URL where easy. | Low | Low | Developer | Week 1 |
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
| Google Search Console Links | **Received 2026-11-18** (three CSVs in `gsc/`, relayed from the owner; the export date inside Search Console was not stated). Google's own sample, so it may be incomplete. | Nothing, unless a fresh export is wanted |
| Bing Webmaster Tools Backlinks | **Not available.** The owner has no Bing Webmaster Tools account. | None |
| Common Crawl page index (CDX) | FAILED. `index.commoncrawl.org` returned 502, 504 or resets on every query on 2026-11-18. It lists crawled agec.ae pages, not inbound links, so it would not change the count. | None |
| OpenLinkProfiler | GATED. Slider captcha plus Cloudflare Turnstile. I did not try to get past it. | Optional: run `agec.ae` in a browser and paste the result |
| Ahrefs, Moz, Semrush free checkers | BLOCKED by network policy (`ahrefs.com`, `moz.com`, `www.semrush.com`) and captcha- or login-gated anyway. | Optional: run in a browser and paste the counts |
| The 6 linking sites (rel, anchor per site, first seen) | Not fetched: none of the hosts are on the network allowlist. | Allow the 6 hosts, or check each page by hand |
| DuckDuckGo SERPs | Bot challenge, no results. | See brand confusion and competitors |
| Competitor referring-domain counts | Not collected. | 5 confirmed competitor domains, with search engine and date |

## Files
- `backlinks_agec.csv`: cleaned list (6 rows).
- `competitor_gap.csv`: headers only.
- `scripts/cc_webgraph.sh`, `scripts/cc_filter.py`: stream the Common Crawl graph (domain and host level), keeping only inbound edges to agec.ae.
- `scripts/merge_backlinks.py`: merges the graph results and any CSVs in `gsc/` and `bing/` (Bing is unused); run `python3 -I backlinks/scripts/merge_backlinks.py` after dropping files in.
