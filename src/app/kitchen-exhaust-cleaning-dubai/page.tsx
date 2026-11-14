import { notFound } from "next/navigation";
import { isProductionSite } from "@/lib/draft";
import { buildMetadata } from "@/lib/metadata";
import { LongServicePage } from "@/components/LongServicePage";
import { KITCHEN_EXHAUST } from "@/data/long-services";

// DRAFT. 404 on the live site; renders only in local and Vercel preview builds. Never in
// the sitemap or menu, never linked. Do not launch until the Dubai Municipality approval
// question in the copy is answered.
export const metadata = buildMetadata({
  title: KITCHEN_EXHAUST.metaTitle,
  description: KITCHEN_EXHAUST.metaDescription,
  path: KITCHEN_EXHAUST.path,
  noindex: true,
});

export default function Page() {
  // 404 on the live site until published; local and Vercel preview builds still render it for review.
  if (isProductionSite()) notFound();
  return (
    <LongServicePage
      service={KITCHEN_EXHAUST}
      path={KITCHEN_EXHAUST.path}
      published={false}
      related={KITCHEN_EXHAUST.related}
    />
  );
}
