#!/usr/bin/env bash
# Request every Services mega-menu href (English + Arabic) and confirm each
# returns 200 directly — not a redirect, not a 404.
# Usage: scripts/check-nav-links.sh [BASE_URL]   (default http://localhost:3000)
set -u
B="${1:-http://localhost:3000}"

URLS=(
  # English
  /ac-maintenance-dubai /ac-repair-dubai /ac-duct-cleaning-dubai /ac-amc-dubai
  /smart-thermostat-installation-dubai /services/hvac-installation-dubai
  /services/chiller-maintenance-dubai /services/ventilation-fresh-air
  /services/dx-units /services/vrf-vrv-systems /services/hvac-design
  /services/tab-testing-adjusting-balancing-dubai /services
  /hvac-contractor-sharjah /hvac-contractor-ajman /hvac-contractor-abu-dhabi
  /projects/basil-mall-ajman /quote
  # Arabic
  /ar/ac-maintenance-dubai /ar/ac-repair-dubai /ar/ac-duct-cleaning-dubai
  /ar/ac-amc-dubai /ar/smart-thermostat-installation-dubai
  /ar/services/hvac-installation-dubai /ar/services/chiller-maintenance-dubai
  /ar/services/ventilation-fresh-air /ar/services/tab-testing-adjusting-balancing-dubai
  /ar/services /ar/quote
)

fail=0
for u in "${URLS[@]}"; do
  c=$(curl -s -o /dev/null -w "%{http_code}" "$B$u")
  if [ "$c" = "200" ]; then
    printf "  200  %s\n" "$u"
  else
    printf "  %s  %s  <-- expected 200\n" "$c" "$u"
    fail=1
  fi
done
echo "--------------------------------------------"
[ "$fail" = "0" ] && echo "ALL MENU LINKS RETURN 200" || echo "SOME MENU LINKS DID NOT RETURN 200"
exit $fail
