// Confirmed thermostat prices (owner-provided).
//
// Itemised: device supply + installation, with a drop-air adaptor added only
// where a system (e.g. VRF/VRV) needs one. The "supply & install" bundles are
// simply device + installation. Prices show as "from AED …" because the
// adaptor and site specifics vary; the final price is confirmed after a free
// compatibility check. Not emitted in Service JSON-LD offers (the "from" +
// adaptor split makes a single structured price imprecise). Edit a figure here
// and it updates the visible page copy everywhere it's used. (AC servicing
// "from AED 350/unit, min 3" stays in the maintenance page copy.)

/** Google Nest device, supply only (AED). */
export const PRICE_NEST_SUPPLY = "850";
/** ecobee device, supply only (AED). */
export const PRICE_ECOBEE_SUPPLY = "720";
/** Professional installation, per thermostat (AED). */
export const PRICE_INSTALLATION = "300";
/** Drop-air adaptor for VRF/VRV or where a thermostat can't directly control the unit (AED). */
export const PRICE_DROP_AIR_ADAPTOR = "750";

/** Google Nest supply + installation (device + install) (AED). */
export const PRICE_NEST_SUPPLY_INSTALL = "1,150";
/** ecobee supply + installation (device + install) (AED). */
export const PRICE_ECOBEE_SUPPLY_INSTALL = "1,020";

/** Footnote shown wherever a price appears. */
export const PRICE_NOTE =
  "Final price is confirmed after a free compatibility check. A drop-air adaptor (AED 750) is added only where your system — e.g. VRF/VRV — needs one.";
