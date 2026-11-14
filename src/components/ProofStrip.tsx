import Link from "next/link";
import { proofStats, proofLogos, PROOF_LICENCE } from "@/data/proof";

/**
 * Project-proof strip shown directly under the hero: 4 stats + a "trusted on
 * projects for" logo row + the Dubai licence line. Server component — the live
 * Google rating/count are passed in from the homepage so the review figure
 * matches the rest of the site.
 *
 * Layout: desktop one row (stats in 4 columns, logos wrapped on one line);
 * mobile 2×2 stat grid with the logos in a horizontal scroll. Logos are fixed
 * width/height so there is no layout shift.
 */
export function ProofStrip({ rating, count }: { rating: string; count: number }) {
  const stats = [
    ...proofStats,
    { value: `${rating}★`, label: `${count} Google reviews` },
  ];

  return (
    <section aria-label="Project proof" className="border-b border-border bg-bg-soft">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        {/* Stats — 2×2 on mobile, one row on desktop */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <p className="font-heading text-3xl font-bold text-primary md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm leading-snug text-text-muted">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Trusted-on-projects logo row */}
        <div className="mt-9">
          <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
            Trusted on projects for
          </p>
          <div className="mt-4 flex gap-4 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible md:pb-0">
            {proofLogos.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-label={`${l.name} — view case study`}
                className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md border border-border bg-white px-3 text-center text-xs font-medium leading-snug text-text-muted transition-colors hover:border-primary hover:text-primary"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-text-muted">{PROOF_LICENCE}</p>
      </div>
    </section>
  );
}
