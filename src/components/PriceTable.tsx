import { PRICE_FOOTNOTE, formatPrice, visibleRows, type PriceRow } from "@/data/prices";

/**
 * Price table for a service page. Rows whose price is still [TO CONFIRM] are not rendered; if no
 * row is confirmed the whole thing renders nothing (no empty heading, no placeholder text).
 */
export function PriceTable({ rows, caption }: { rows: PriceRow[]; caption: string }) {
  const shown = visibleRows(rows);
  if (shown.length === 0) return null;
  return (
    <div className="mt-8">
      <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={caption}>
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-primary text-left text-white">
            <tr>
              <th scope="col" className="border border-border px-4 py-3 font-semibold">Service</th>
              <th scope="col" className="border border-border px-4 py-3 font-semibold">Price (AED)</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {shown.map((r) => (
              <tr key={r.label}>
                <th scope="row" className="border border-border px-4 py-3 text-left font-semibold">
                  {r.label}
                  {r.note && <span className="mt-0.5 block text-xs font-normal text-text-muted">{r.note}</span>}
                </th>
                <td className="border border-border px-4 py-3">{formatPrice(r)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm text-text-muted">{PRICE_FOOTNOTE}</p>
    </div>
  );
}
