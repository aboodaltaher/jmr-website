#!/usr/bin/env python3 -I
"""Merge every backlink source present into backlinks_agec.csv + summary.json.
Sources: Common Crawl web graph results in raw/, CSVs in gsc/ and bing/ (drop exports there, re-run).
Run from anywhere:  python3 -I backlinks/scripts/merge_backlinks.py
Counts are computed here, never by hand."""
import csv, glob, json, os, collections
from urllib.parse import urlparse
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
RAW = f"{ROOT}/raw"
FIELDS = ["referring_domain","linking_url","target_url","anchor_text","follow","first_seen","sources","category","toxic_flag","notes"]
rows = {}  # key: referring domain

def dom(x):
    x = (x or "").strip().lower()
    if "://" in x: x = urlparse(x).netloc
    x = x.split("/")[0].split(":")[0]
    return x[4:] if x.startswith("www.") else x

def add(domain, src, url="", target="", anchor="", follow="", seen=""):
    domain = dom(domain)
    if not domain or domain == "agec.ae" or domain.endswith(".agec.ae"): return  # ignore self-links
    r = rows.setdefault(domain, {k: "" for k in FIELDS} | {"referring_domain": domain, "_src": set(), "_urls": set(), "_anch": set()})
    r["_src"].add(src)
    if url: r["_urls"].add(url)
    if anchor: r["_anch"].add(anchor)
    for k, v in (("target_url", target), ("follow", follow), ("first_seen", seen)):
        if v and not r[k]: r[k] = v

def category(d):
    for k, c in (("facebook.com","social"),("instagram.com","social"),("linkedin.com","social"),("youtube.com","social"),("x.com","social"),("twitter.com","social"),
                 ("daikin","supplier/manufacturer"),("trane","supplier/manufacturer"),("carrier","supplier/manufacturer"),("mitsubishi","supplier/manufacturer"),
                 ("directory","directory"),("yellowpages","directory"),("top10","directory"),("listing","directory"),("business","directory"),("news","news")):
        if k in d: return c, "inferred from domain name only (page not reviewed)"
    return "other", "not classified: page content not reviewed"

# 1. Common Crawl (host-level and domain-level graph; no page, anchor or follow data)
rel = open(f"{RAW}/cc_release.txt").read().strip() if os.path.exists(f"{RAW}/cc_release.txt") else "?"
for lvl in ("domain", "host"):
    p = f"{RAW}/cc_{lvl}_names.json"
    if os.path.exists(p):
        for rev in json.load(open(p)).values():
            add(".".join(reversed(rev.split("."))), f"CommonCrawl {rel} ({lvl} graph)")

# 2. Search Console exports (tolerant column matching)
def pick(row, *names):
    for k, v in row.items():
        if k and k.strip().lower().lstrip("﻿") in names: return v
    return ""
for f in glob.glob(f"{ROOT}/gsc/*.csv"):
    for row in csv.DictReader(open(f, encoding="utf-8-sig")):
        site = pick(row, "site", "top linking sites", "linking site", "referring domain")
        if site: add(site, "GSC:" + os.path.basename(f))
# 3. Bing Webmaster backlinks export
for f in glob.glob(f"{ROOT}/bing/*.csv"):
    for row in csv.DictReader(open(f, encoding="utf-8-sig")):
        src = pick(row, "source url", "source page", "linking url", "source")
        if src: add(src, "Bing:" + os.path.basename(f), url=src, target=pick(row, "target url", "target page", "target"), anchor=pick(row, "anchor text", "anchor"))

out = []
for d, r in sorted(rows.items()):
    r["linking_url"] = " | ".join(sorted(r.pop("_urls"))) or "unknown (graph data is host-level)"
    r["anchor_text"] = " | ".join(sorted(r.pop("_anch"))) or "unknown"
    r["sources"] = "; ".join(sorted(r.pop("_src")))
    r["category"], r["notes"] = category(d)
    r["follow"] = r["follow"] or "unknown"
    r["first_seen"] = r["first_seen"] or "unknown"
    r["target_url"] = r["target_url"] or "unknown (agec.ae)"
    r["toxic_flag"] = "not assessed"
    out.append(r)
with open(f"{ROOT}/backlinks_agec.csv", "w", newline="") as fh:
    w = csv.DictWriter(fh, FIELDS); w.writeheader(); w.writerows(out)
srcs = collections.Counter(s.split(":")[0].split(" ")[0] for r in out for s in r["sources"].split("; "))
summary = {"referring_domains": len(out), "links_known": sum(1 for r in out if r["linking_url"].startswith("http")) or None,
           "sources_present": sorted(srcs), "gsc_present": bool(glob.glob(f"{ROOT}/gsc/*.csv")), "bing_present": bool(glob.glob(f"{ROOT}/bing/*.csv")),
           "commoncrawl_release": rel, "categories": dict(collections.Counter(r["category"] for r in out))}
json.dump(summary, open(f"{ROOT}/raw/summary.json", "w"), indent=1); print(json.dumps(summary, indent=1))
