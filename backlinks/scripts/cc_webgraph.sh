#!/usr/bin/env bash
# Stream Common Crawl web graph, keep only inbound edges to agec.ae. Nothing large is stored.
# Usage: cc_webgraph.sh [release]   (default = latest in graphinfo.json)
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"; OUT="$HERE/../raw"; mkdir -p "$OUT"
REL="${1:-cc-main-2026-aug-sep-oct}"  # latest release per graphinfo.json on 2026-11-18
B="https://data.commoncrawl.org/projects/hyperlinkgraph/$REL"
echo "$REL" > "$OUT/cc_release.txt"
curl -s --retry 6 --retry-delay 3 --retry-all-errors https://index.commoncrawl.org/graphinfo.json > "$OUT/graphinfo.json"
# domain level: single vertices + edges file
curl -sf --retry 6 --retry-delay 3 "$B/domain/$REL-domain-vertices.txt.gz" | zcat | python3 -I "$HERE/cc_filter.py" ids domain "$OUT"
curl -sf --retry 6 --retry-delay 3 "$B/domain/$REL-domain-edges.txt.gz"    | zcat | python3 -I "$HERE/cc_filter.py" edges domain "$OUT"
curl -sf --retry 6 --retry-delay 3 "$B/domain/$REL-domain-vertices.txt.gz" | zcat | python3 -I "$HERE/cc_filter.py" names domain "$OUT"
# host level: sharded files listed in paths.gz
for kind in vertices edges; do
  curl -sf --retry 6 --retry-delay 3 "$B/host/$REL-host-$kind.paths.gz" | zcat > "$OUT/host_$kind.paths"
done
cat_files(){ while read -r p; do curl -sf --retry 6 --retry-delay 3 "https://data.commoncrawl.org/$p" | zcat; done < "$OUT/host_$1.paths"; }
cat_files vertices | python3 -I "$HERE/cc_filter.py" ids host "$OUT"
cat_files edges    | python3 -I "$HERE/cc_filter.py" edges host "$OUT"
cat_files vertices | python3 -I "$HERE/cc_filter.py" names host "$OUT"
echo done
