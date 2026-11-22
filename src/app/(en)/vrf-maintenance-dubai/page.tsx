import { notFound } from "next/navigation";
import { isProductionSite } from "@/lib/draft";
import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { LongServicePage } from "@/components/LongServicePage";
import { VRF_MAINTENANCE } from "@/data/long-services";
import { isPublished } from "@/data/new-pages";
import { vrfAmc, offersFor, VRF_AMC_LINE } from "@/data/prices";

// Unpublished → noindex until the owner has reviewed it and flips the switch in
// src/data/new-pages.ts.
export const metadata = buildMetadata({
  title: VRF_MAINTENANCE.metaTitle,
  description: VRF_MAINTENANCE.metaDescription,
  path: VRF_MAINTENANCE.path,
  noindex: !isPublished("vrfMaintenance"),
});

// The price comes from the named row `vrfAmc` in src/data/prices.ts, never typed here.
const service = {
  ...VRF_MAINTENANCE,
  faqs: VRF_MAINTENANCE.faqs.map((f) =>
    f.q === "How is a VRF AMC priced?"
      ? {
          ...f,
          a: `${VRF_AMC_LINE}, for villas and buildings alike. Commercial systems are quoted after a site visit, based on the systems, the number of units and the visit frequency.`,
        }
      : f,
  ),
};

export default function Page() {
  // 404 on the live site until published; local and Vercel preview builds still render it for review.
  if (isProductionSite() && !isPublished("vrfMaintenance")) notFound();
  return (
    <LongServicePage
      service={service}
      path={VRF_MAINTENANCE.path}
      published={isPublished("vrfMaintenance")}
      related={VRF_MAINTENANCE.related}
      offers={offersFor([vrfAmc])}
      afterSections={[
        {
          h2: "Error code diagnostics",
          node: (
            <section id="error-codes" className="scroll-mt-24 pb-14 md:pb-16">
              <div className="mx-auto max-w-4xl px-6">
                <h2 className="font-heading text-3xl font-bold md:text-4xl">VRF error codes our engineers see</h2>
                <div className="mt-5 overflow-x-auto" tabIndex={0} role="region" aria-label="VRF error codes our engineers see">
                  <table className="w-full table-fixed text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-border text-xs uppercase tracking-wider text-text-muted">
                        <th scope="col" className="w-[22%] py-3 pr-3 font-semibold sm:pr-4">Code</th>
                        <th scope="col" className="w-[39%] py-3 pr-3 font-semibold sm:pr-4">What we found on site</th>
                        <th scope="col" className="py-3 font-semibold">What we did</th>
                      </tr>
                    </thead>
                    <tbody className="align-top text-text-muted">
                      <tr className="border-b border-border">
                        <th scope="row" className="py-3 pr-3 font-semibold text-text sm:pr-4">U7</th>
                        <td className="py-3 pr-3 sm:pr-4">Daikin RXYTQ14T7YF, System 1: slave outdoor module (1) had no power.</td>
                        <td className="py-3">Isolated slave (1) and ran the master unit, so the system kept cooling. The electrical team was asked to check the supply.</td>
                      </tr>
                      <tr className="border-b border-border">
                        <th scope="row" className="py-3 pr-3 font-semibold text-text sm:pr-4">LC25 <span className="font-normal">(as recorded on site)</span></th>
                        <td className="py-3 pr-3 sm:pr-4">Daikin RXYTQ12T7YF, System 2: slave (1) fan PCB (1) and (2) were burnt, and fan motor (1) was defective.</td>
                        <td className="py-3">Isolated slave (1) and ran the master and slave (2). Recommended replacing fan PCB (1) and (2) and fan motor (1).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-sm text-text-muted">
                  Codes vary by brand and model; we read the full fault history on site before recommending any repair.
                </p>
                <p className="mt-3 text-text-muted">
                  Read the full case study:{" "}
                  <Link href="/projects/vrv-diagnosis-villa-al-safa-dubai" className="font-semibold text-primary hover:underline">
                    Daikin VRV fault diagnosis, villa in Al Safa, Dubai
                  </Link>
                  .
                </p>
              </div>
            </section>
          ),
        },
        {
          h2: "VRF AMC options",
          node: (
            <section id="vrf-amc-price" className="scroll-mt-24 pb-14 md:pb-16">
              <div className="mx-auto max-w-4xl px-6">
                <div className="rounded-xl border border-primary/40 bg-bg-soft p-6">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">VRF maintenance price</p>
                  <p className="mt-2 font-heading text-2xl font-bold text-text">{VRF_AMC_LINE}</p>
                  <p className="mt-2 text-sm text-text-muted">Every written quote shows VAT on a separate line. Commercial systems are quoted after a site visit.</p>
                </div>
              </div>
            </section>
          ),
        },
      ]}
    />
  );
}
