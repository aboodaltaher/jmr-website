// ONE config for every price shown on the service pages: /ac-installation-dubai, /ac-maintenance-dubai,
// /ac-amc-dubai, /ac-duct-cleaning-dubai and /ac-repair-dubai. (Thermostat prices stay in src/lib/pricing.ts.)
//
// HOW IT WORKS
//  - A price is a number (AED) or TBC. A row whose price is TBC is HIDDEN: the placeholder text
//    is never rendered, and no Offer markup is emitted for it. Replace TBC with the number and
//    the row appears, with its Offer in the page's Service JSON-LD.
//  - Never invent a price. Row LABELS below are suggested bands for the owner to edit.
//  - The one-off service prices (maintenanceRows) feed the maintenance, AMC and community pages.
//  - VAT: AMC plan prices are stated on /ac-amc-dubai as excluding 5% VAT, so "excluded" is
//    the default for every table. Change `vat` and the footnote if a price includes VAT.

export const TBC = "[TO CONFIRM]" as const;
export type Money = number | typeof TBC;

export const isConfirmed = (m: Money | undefined): m is number => typeof m === "number";

export interface PriceRow {
  label: string;
  /** Lowest price in AED. Row is hidden while this is TBC. */
  from: Money;
  /** Optional upper end of a range, AED. Ignored while TBC. */
  to?: Money;
  /** True when `from` is the exact price (shown as "AED 2,500", not "From AED 2,500"). */
  exact?: boolean;
  /** True when `from` is a minimum charge, not a unit price: schema.org gets minPrice instead of price. */
  minimum?: boolean;
  /** Shown after the price, e.g. "per machine". */
  unit?: string;
  note?: string;
}

export const VAT_RATE = 0.05;
/** 100 → 105. */
export const withVat = (n: number): number => Math.round(n * (1 + VAT_RATE) * 100) / 100;

export const PRICE_FOOTNOTE =
  "All prices exclude 5% VAT. Every written quote shows VAT on a separate line.";

/**
 * Maintenance rows, named so no page depends on array positions. Owner answers (Nov 2026), all excl. VAT:
 * apartment visits AED 199 (1 split unit) and AED 349 (2 units); AED 350 is the MINIMUM CHARGE FOR THE WHOLE VISIT
 * for 3 or more units (owner, 22 Nov 2026; not a per-machine price, and no per-unit price for 4+ units was given); gas top-up AED 250-400 per split unit depending on tonnage and gas type (R410A / R32).
 */
export const maintenanceRows = {
  apartment1: { label: "Standard split AC service, 1 unit", from: 199, exact: true, note: "Apartment visit." },
  apartment2: { label: "Standard split AC service, 2 units", from: 349, exact: true, note: "Apartment visit." },
  oneOff: {
    label: "One-off AC service, 3 or more units",
    from: 350,
    unit: "per visit",
    minimum: true,
    note: "Minimum charge; written quote by number of units.",
  },
  ducted: { label: "Ducted unit service", from: 250, exact: true, unit: "per machine" },
  gas: {
    label: "Gas top-up (R410A / R32)",
    from: 250,
    to: 400,
    unit: "per split unit",
    note: "Depends on tonnage and gas type. Not part of a standard service.",
  },
} satisfies Record<string, PriceRow>;

/** "AED 199 for 1 split unit, AED 349 for 2 units, and from AED 350 per visit for 3 or more units (minimum charge; written quote by number of units)". */
export const ONE_OFF_SUMMARY = `AED ${maintenanceRows.apartment1.from} for 1 split unit, AED ${maintenanceRows.apartment2.from} for 2 units, and from AED ${maintenanceRows.oneOff.from} per visit for 3 or more units (minimum charge; written quote by number of units)`;

/** "AED 250–400 per split unit". */
export const GAS_RANGE = `AED ${maintenanceRows.gas.from}–${maintenanceRows.gas.to} per split unit`;

/**
 * Repair rows (owner answer, Nov 2026): the AED 100 call-out fee excludes VAT (AED 105 with 5% VAT) and is
 * deducted from the repair bill if the customer goes ahead. Every written quote shows VAT on a separate line.
 */
export const repairRows = {
  callout: {
    label: "Call-out and diagnosis",
    from: 100,
    exact: true,
    note: "AED 105 including 5% VAT. Deducted from the repair bill if you go ahead.",
  },
} satisfies Record<string, PriceRow>;

export const prices = {
  vat: "excluded" as "excluded" | "included",

  /** /ac-installation-dubai — supply AND install: every price includes the new unit. */
  installation: [
    { label: "Split AC, supplied and installed", from: 2500, exact: true, unit: "per ton" },
    { label: "Cassette AC, supplied and installed", from: 2500, exact: true, unit: "per ton" },
    { label: "Ducted split AC, supplied and installed", from: 3800, unit: "per ton" },
    { label: "VRF for homes, supplied and installed", from: 5000, unit: "per ton" },
    { label: "Replacing an old unit", from: 3000, unit: "per unit", note: "New unit supplied; old unit removed and replaced." },
  ] as PriceRow[],

  /** /ac-maintenance-dubai. Rows live in `maintenanceRows` above; the table order is set here. */
  maintenance: [
    maintenanceRows.apartment1,
    maintenanceRows.apartment2,
    maintenanceRows.oneOff,
    maintenanceRows.ducted,
    maintenanceRows.gas,
  ] as PriceRow[],

  /** /ac-amc-dubai — the confirmed visit-frequency plans (per machine, per visit, excl. VAT). */
  amcPlans: [
    { name: "Basic", visits: "2", from: 250, response: "Response within 48 hours", partsDiscount: "5%", reports: "Yes", popular: false },
    { name: "Standard", visits: "4", from: 320, response: "Response within 24 hours", partsDiscount: "10%", reports: "Yes", popular: true },
    { name: "Premium", visits: "6", from: 400, response: "Same-day priority response", partsDiscount: "15%", reports: "Yes", popular: false },
  ],

  /** /ac-amc-dubai — comparison by property type. Hidden until each tier's price is confirmed. */
  amcTiers: [
    { id: "villa", label: "Villa", visitsPerYear: TBC as string, response: TBC as string, includes: [] as string[], from: TBC as Money },
    { id: "apartment", label: "Apartment", visitsPerYear: TBC as string, response: TBC as string, includes: [] as string[], from: TBC as Money },
    { id: "commercial", label: "Commercial", visitsPerYear: TBC as string, response: TBC as string, includes: [] as string[], from: TBC as Money },
  ],

  /** /ac-duct-cleaning-dubai — by property size. */
  ductCleaning: [
    { label: "Studio or 1-bedroom apartment", from: TBC },
    { label: "2 to 3-bedroom apartment", from: TBC },
    { label: "Villa up to 4 bedrooms", from: TBC },
    { label: "Villa with 5 or more bedrooms", from: TBC },
  ] as PriceRow[],

  /**
   * /ac-repair-dubai — call-out / diagnosis fee only. There are no fixed repair ranges: the exact
   * repair price is quoted after diagnosis, so there are deliberately no minor/mid/major rows.
   */
  repair: [repairRows.callout] as PriceRow[],
};

/** Rows whose price is confirmed (the only ones ever shown or marked up). */
export const visibleRows = (rows: PriceRow[]): PriceRow[] => rows.filter((r) => isConfirmed(r.from));

/** 2500 → "2,500". */
export const money = (n: number): string => n.toLocaleString("en-US");

/** "From AED 350", "AED 2,500", "AED 200–450" — returns null while the price is TBC. */
export function formatPrice(r: PriceRow): string | null {
  if (!isConfirmed(r.from)) return null;
  const range = isConfirmed(r.to)
    ? `AED ${money(r.from)}–${money(r.to)}`
    : `${r.exact ? "" : "From "}AED ${money(r.from)}`;
  return r.unit ? `${range} ${r.unit}` : range;
}

/** Property-tier rows with a confirmed price. */
export const visibleTiers = () => prices.amcTiers.filter((t) => isConfirmed(t.from));

/** schema.org Offers for confirmed prices only (price + priceCurrency AED, VAT excluded). */
export function offersFor(rows: PriceRow[]) {
  return visibleRows(rows).map((r) => {
    const from = r.from as number;
    const unitText = r.unit ? { unitText: r.unit.replace(/^per /, "") } : {};
    if (isConfirmed(r.to) || r.minimum) {
      return {
        "@type": "Offer",
        name: r.label,
        priceCurrency: "AED",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: String(from),
          ...(isConfirmed(r.to) ? { maxPrice: String(r.to) } : {}),
          priceCurrency: "AED",
          valueAddedTaxIncluded: false,
          ...unitText,
        },
      };
    }
    return {
      "@type": "Offer",
      name: r.label,
      price: String(from),
      priceCurrency: "AED",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: String(from),
        priceCurrency: "AED",
        valueAddedTaxIncluded: false,
        ...unitText,
      },
    };
  });
}
