// ONE config for every price shown on the service pages: /ac-installation-dubai, /ac-maintenance-dubai,
// /ac-amc-dubai, /ac-duct-cleaning-dubai and /ac-repair-dubai. (Thermostat prices stay in src/lib/pricing.ts.)
//
// HOW IT WORKS
//  - A price is a number (AED) or TBC. A row whose price is TBC is HIDDEN: the placeholder text
//    is never rendered, and no Offer markup is emitted for it. Replace TBC with the number and
//    the row appears, with its Offer in the page's Service JSON-LD.
//  - Never invent a price. Row LABELS below are suggested bands for the owner to edit.
//  - The one-off service price (maintenance[0]) feeds the maintenance and AMC pages. The two FAQ
//    answers in src/data/communities.ts still say "AED 350" as text; update them if it changes.
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
  /** Shown after the price, e.g. "per machine". */
  unit?: string;
  note?: string;
}

export const PRICE_FOOTNOTE =
  "Prices exclude VAT unless stated; final quote after engineer inspection.";

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

  /** /ac-maintenance-dubai */
  maintenance: [
    { label: "One-off AC service", from: 350, unit: "per machine", note: "Minimum 3 units." },
    { label: "Ducted unit service", from: 250, exact: true, unit: "per machine" },
    // Unit ("per machine") assumed — the owner gave "AED 150" with no unit. Confirm.
    { label: "Gas top-up", from: 150, exact: true, unit: "per machine" },
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
  repair: [
    { label: "Call-out and diagnosis", from: 100, exact: true, note: "Waived if you go ahead with the repair." },
  ] as PriceRow[],
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

/** schema.org Offers for confirmed prices only (price + priceCurrency AED). */
export function offersFor(rows: PriceRow[]) {
  return visibleRows(rows).map((r) => ({
    "@type": "Offer",
    name: r.label,
    price: String(r.from),
    priceCurrency: "AED",
    ...(r.unit
      ? {
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(r.from),
            priceCurrency: "AED",
            unitText: r.unit.replace(/^per /, ""),
          },
        }
      : {}),
  }));
}
