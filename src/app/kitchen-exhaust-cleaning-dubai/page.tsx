import { buildMetadata } from "@/lib/metadata";
import { LongServicePage } from "@/components/LongServicePage";
import { KITCHEN_EXHAUST } from "@/data/long-services";

// DRAFT. Always noindex, never in the sitemap or menu, never linked. Do not launch
// until the Dubai Municipality approval question in the copy is answered.
export const metadata = buildMetadata({
  title: KITCHEN_EXHAUST.metaTitle,
  description: KITCHEN_EXHAUST.metaDescription,
  path: KITCHEN_EXHAUST.path,
  noindex: true,
});

export default function Page() {
  return (
    <LongServicePage
      service={KITCHEN_EXHAUST}
      path={KITCHEN_EXHAUST.path}
      published={false}
      related={KITCHEN_EXHAUST.related}
    />
  );
}
