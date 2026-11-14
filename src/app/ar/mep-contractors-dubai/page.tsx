import { notFound } from "next/navigation";
import { isProductionSite } from "@/lib/draft";
import { buildMetadata } from "@/lib/metadata";
import { LongServicePage } from "@/components/LongServicePage";
import { MEP_AR } from "@/data/long-services-ar";
import { isPublished } from "@/data/new-pages";

// Arabic twin of /mep-contractors-dubai. Follows the English page's publish switch
// (src/data/new-pages.ts): unpublished → noindex, out of the sitemap, no hreflang.
export const metadata = buildMetadata({
  title: MEP_AR.metaTitle,
  description: MEP_AR.metaDescription,
  path: MEP_AR.path,
  locale: "ar_AE",
  noindex: !isPublished("mep"),
});

export default function Page() {
  // 404 on the live site until published; local and Vercel preview builds still render it for review.
  if (isProductionSite() && !isPublished("mep")) notFound();
  return (
    <LongServicePage
      lang="ar"
      service={{ ...MEP_AR, path: MEP_AR.enPath }}
      path={MEP_AR.path}
      published={isPublished("mep")}
      related={MEP_AR.related}
    />
  );
}
