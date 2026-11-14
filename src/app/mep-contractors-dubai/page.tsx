import { buildMetadata } from "@/lib/metadata";
import { LongServicePage } from "@/components/LongServicePage";
import { MEP } from "@/data/long-services";
import { isPublished } from "@/data/new-pages";

// Unpublished → noindex until the owner resolves the [TO CONFIRM] items and flips
// the switch in src/data/new-pages.ts.
export const metadata = buildMetadata({
  title: MEP.metaTitle,
  description: MEP.metaDescription,
  path: MEP.path,
  noindex: !isPublished("mep"),
});

export default function Page() {
  return (
    <LongServicePage
      service={MEP}
      path={MEP.path}
      published={isPublished("mep")}
      related={MEP.related}
    />
  );
}
