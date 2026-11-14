#!/usr/bin/env bash
# Fails if any business detail that lives in src/data/business.ts is hard-coded
# anywhere else in the site (src/, content/). Run any time:  npm run check-nap
#
# Checks: phone, email, street address, geo, licence number, alternate/legal
# names, review figures, Maps/review links, schema aggregateRating — and, if the
# business is NOT open 24 hours, any leftover "24/7" style claim.
set -u
cd "$(dirname "$0")/.."
CONFIG="src/data/business.ts"
fail=0

scan() {  # scan "<label>" "<ERE pattern>"
  local label="$1" pat="$2" hits
  hits=$(grep -rnE "$pat" src content --include=*.ts --include=*.tsx --include=*.md 2>/dev/null \
         | grep -v "^$CONFIG:" || true)
  if [ -n "$hits" ]; then
    echo "✗ $label — hard-coded outside $CONFIG:"; echo "$hits" | cut -c1-170 | sed 's/^/    /'; fail=1
  else
    echo "✓ $label"
  fi
}

scan "phone number"          '971 ?58 ?557 ?5987|971585575987'
scan "email address"         'a\.altaher@|m\.ghabboun@'
scan "street address"        'AlMasraf|Almasraf|Sheikh Zayed|Al Quoz Industrial'
scan "geo coordinates"       '25\.14[0-9]|55\.22[0-9]'
scan "licence number"        '1221573'
scan "legal / alternate name" 'Altaher Ghabboun Engineering|AGEC Technical Services L\.L\.C'
scan "review count / rating" '[0-9]+ (Google )?reviews?\b.*(verified|rated)|reviewCount: *[0-9]|ratingValue: *"?[0-9]|aggregateRating|AggregateRating'
scan "Maps / review links"   'maps\.app\.goo\.gl|g\.page/r/|google\.com/maps\?cid'

# Hours: if the config says the business is not always open, "24/7" must not appear.
if grep -qE 'alwaysOpen: *false' "$CONFIG"; then
  scan "24/7 claims (hours are not 24h)" '24/7|24 hours|24-hour|around the clock|round the clock|any time|anytime|23:59|على مدار الساعة'
else
  echo "✓ hours: config says open 24 hours, so 24/7 copy is consistent"
fi

echo "----------------------------------------------"
if [ "$fail" = "0" ]; then echo "NAP CHECK PASSED"; else echo "NAP CHECK FAILED"; fi
exit $fail
