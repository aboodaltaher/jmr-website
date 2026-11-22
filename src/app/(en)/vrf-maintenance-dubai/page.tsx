import { notFound } from "next/navigation";
import { isProductionSite } from "@/lib/draft";
import { buildMetadata } from "@/lib/metadata";
import { LongServicePage } from "@/components/LongServicePage";
import { VRF_MAINTENANCE } from "@/data/long-services";
import { isPublished } from "@/data/new-pages";
import { vrfAmc, formatPrice, offersFor, PRICE_FOOTNOTE } from "@/data/prices";

// Unpublished → noindex until the owner has reviewed it and flips the switch in
// src/data/new-pages.ts.
export const metadata = buildMetadata({
  title: VRF_MAINTENANCE.metaTitle,
  description: VRF_MAINTENANCE.metaDescription,
  path: VRF_MAINTENANCE.path,
  noindex: !isPublished("vrfMaintenance"),
});

// The price comes from the named row `vrfAmc` in src/data/prices.ts, never typed here.
const vrfPrice = formatPrice(vrfAmc) as string;
const service = {
  ...VRF_MAINTENANCE,
  faqs: VRF_MAINTENANCE.faqs.map((f) =>
    f.q === "How is a VRF AMC priced?"
      ? {
          ...f,
          a: `VRF maintenance is ${vrfPrice.replace(/^From/, "from")}, excl. VAT. ${PRICE_FOOTNOTE} Commercial maintenance pricing also depends on the systems, the number of units and the visit frequency, so we quote once we have seen the plant.`,
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
      afterSection={{
        h2: "VRF AMC options",
        node: (
          <section id="vrf-amc-price" className="scroll-mt-24 pb-14 md:pb-16">
            <div className="mx-auto max-w-4xl px-6">
              <div className="rounded-xl border border-primary/40 bg-bg-soft p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">VRF maintenance price</p>
                <p className="mt-2 font-heading text-2xl font-bold text-text">{vrfPrice}</p>
                <p className="mt-2 text-sm text-text-muted">{PRICE_FOOTNOTE}</p>
              </div>
            </div>
          </section>
        ),
      }}
    />
  );
}
