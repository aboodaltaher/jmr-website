import { notFound } from "next/navigation";
import { isProductionSite } from "@/lib/draft";
import { buildMetadata } from "@/lib/metadata";
import { LongServicePage } from "@/components/LongServicePage";
import { KITCHEN_EXHAUST } from "@/data/long-services";
import { isPublished } from "@/data/new-pages";

// Published. If the switch in src/data/new-pages.ts is turned off, the page goes back to
// noindex and 404s on the live site (local and preview builds still render it).
export const metadata = buildMetadata({
  title: KITCHEN_EXHAUST.metaTitle,
  description: KITCHEN_EXHAUST.metaDescription,
  path: KITCHEN_EXHAUST.path,
  noindex: !isPublished("kitchenExhaust"),
});

export default function Page() {
  if (isProductionSite() && !isPublished("kitchenExhaust")) notFound();
  return (
    <LongServicePage
      service={KITCHEN_EXHAUST}
      path={KITCHEN_EXHAUST.path}
      published={isPublished("kitchenExhaust")}
      related={KITCHEN_EXHAUST.related}
    />
  );
}
