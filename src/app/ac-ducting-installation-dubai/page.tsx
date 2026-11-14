import { buildMetadata } from "@/lib/metadata";
import { LongServicePage } from "@/components/LongServicePage";
import { DUCTING } from "@/data/long-services";
import { isPublished } from "@/data/new-pages";

// Unpublished → noindex until the owner resolves the [TO CONFIRM] items and flips
// the switch in src/data/new-pages.ts.
export const metadata = buildMetadata({
  title: DUCTING.metaTitle,
  description: DUCTING.metaDescription,
  path: DUCTING.path,
  noindex: !isPublished("ducting"),
});

export default function Page() {
  return (
    <LongServicePage
      service={DUCTING}
      path={DUCTING.path}
      published={isPublished("ducting")}
      related={DUCTING.related}
    />
  );
}
