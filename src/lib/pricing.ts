// Starting-price anchors for the smart-thermostat pages.
//
// Owner-accepted as indicative "from AED …" starting points. They're shown
// with a footnote that the exact fixed price is confirmed after a free
// compatibility check — never as fixed quotes — and are not emitted in Service
// JSON-LD offers (Google is fine without a price). To change a figure, edit it
// here once and it updates the visible page copy everywhere it's used. (AC
// servicing "from AED 350/unit, min 3" stays in the maintenance page copy.)

/** Install-only fitting of a smart thermostat you already own (from, AED). */
export const PRICE_THERMOSTAT_INSTALL_FROM = "250";

/** Supply + professional installation of a Google Nest thermostat (from, AED). */
export const PRICE_NEST_SUPPLY_INSTALL_FROM = "1,250";

/** Supply + professional installation of an ecobee thermostat (from, AED). */
export const PRICE_ECOBEE_SUPPLY_INSTALL_FROM = "1,400";

/** Footnote shown wherever a suggested price appears. */
export const PRICE_NOTE =
  "Indicative starting price — your exact fixed quote is confirmed after a free compatibility check.";
