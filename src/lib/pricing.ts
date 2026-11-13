// Suggested starting-price anchors for the smart-thermostat and AMC pages.
//
// ⚠️  SUGGESTED FIGURES — NOT OWNER-CONFIRMED.
// These were proposed as reasonable Dubai-market starting points so the new
// pages don't ship with empty "[price]" placeholders. Confirm or overwrite
// every value here before relying on it — changing a number in this one file
// updates the visible page copy everywhere it's used. Prices are shown as
// indicative "from AED …*" starting points (with a footnote), never as fixed
// quotes, and are deliberately NOT emitted in Service JSON-LD offers until a
// figure is confirmed. The one already-confirmed figure (AC servicing from
// AED 350 per unit, min 3 units) stays in the page copy where it already lives.

/** Install-only fitting of a smart thermostat you already own (from, AED). */
export const PRICE_THERMOSTAT_INSTALL_FROM = "250";

/** Supply + professional installation of a Google Nest thermostat (from, AED). */
export const PRICE_NEST_SUPPLY_INSTALL_FROM = "1,250";

/** Supply + professional installation of an ecobee thermostat (from, AED). */
export const PRICE_ECOBEE_SUPPLY_INSTALL_FROM = "1,400";

/** Footnote shown wherever a suggested price appears. */
export const PRICE_NOTE =
  "Indicative starting price — your exact fixed quote is confirmed after a free compatibility check.";
