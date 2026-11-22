#!/usr/bin/env bash
# Verify the keyword-cannibalisation merge redirects.
#
# For each retired URL (with AND without a trailing slash, plus the /ar variant)
# assert: a single 301 hop straight to the expected final target, ending in 200.
# Also spot-checks that query strings are preserved.
#
# Usage: scripts/check-redirects.sh [BASE_URL]   (default http://localhost:3000)
set -u
BASE="${1:-http://localhost:3000}"

# Once /air-balancing-dubai is published the old balancing URL must land there (one hop), not on the TAB page.
AIR_TARGET="/services/tab-testing-adjusting-balancing-dubai"
if [ "$(curl -s -o /dev/null -w "%{http_code}" "$BASE/air-balancing-dubai")" = "200" ]; then AIR_TARGET="/air-balancing-dubai"; fi

# "retired|final target"
PAIRS=(
  "/services/maintenance|/ac-amc-dubai"
  "/services/testing-commissioning|/services/tab-testing-adjusting-balancing-dubai"
  "/air-balancing-airflow-testing-dubai|$AIR_TARGET"
  "/ar/air-balancing-airflow-testing-dubai|/ar/services/tab-testing-adjusting-balancing-dubai"
  "/services/chillers|/services/chiller-maintenance-dubai"
  "/book|/quote"
  "/google-nest-thermostat-installation-dubai|/smart-thermostat-installation-dubai#google-nest"
  "/ecobee-thermostat-installation-dubai|/smart-thermostat-installation-dubai#ecobee"
)

fail=0

check() {
  local old="$1" target="$2"
  local url="$BASE$old" want="$BASE$target"
  local code loc hops final
  code=$(curl -s -o /dev/null -w "%{http_code}" "$url")           # first response (no follow)
  loc=$(curl -s -o /dev/null -w "%{redirect_url}" "$url")         # its Location
  hops=$(curl -s -o /dev/null -L -w "%{num_redirects}" "$url")    # redirects followed
  final=$(curl -s -o /dev/null -L -w "%{http_code}" "$url")       # final status
  if [ "$code" = "301" ] && [ "$loc" = "$want" ] && [ "$hops" = "1" ] && [ "$final" = "200" ]; then
    printf "PASS  %-46s  301 -> %s  (hops=%s final=%s)\n" "$old" "$target" "$hops" "$final"
  else
    printf "FAIL  %-46s  code=%s loc=%s hops=%s final=%s  (want 301 -> %s, 1 hop, 200)\n" \
      "$old" "$code" "$loc" "$hops" "$final" "$want"
    fail=1
  fi
}

echo "Base: $BASE"
echo "---- single-hop 301 checks (no slash / trailing slash) ----"
for pair in "${PAIRS[@]}"; do
  old="${pair%%|*}"; target="${pair##*|}"
  check "$old"  "$target"
  check "$old/" "$target"
done

echo "---- retired sample PDFs (file URLs: no trailing-slash variant) ----"
check "/sample-tab-report.pdf" "/downloads/agec-sample-tab-report-fcu-air-balance.pdf"
check "/sample-air-balancing-report.pdf" "/downloads/agec-sample-tab-report-fcu-air-balance.pdf"

echo "---- query-string preservation ----"
qs="/services/chillers?utm_source=test&x=1"
loc=$(curl -s -o /dev/null -w "%{redirect_url}" "$BASE$qs")
want="$BASE/services/chiller-maintenance-dubai?utm_source=test&x=1"
if [ "$loc" = "$want" ]; then
  printf "PASS  %-46s  -> %s\n" "$qs" "$loc"
else
  printf "FAIL  %-46s  -> %s  (want %s)\n" "$qs" "$loc" "$want"
  fail=1
fi

echo "----------------------------------------------------------"
if [ "$fail" = "0" ]; then echo "ALL REDIRECT CHECKS PASSED"; else echo "SOME REDIRECT CHECKS FAILED"; fi
exit $fail
