import { notFound } from "next/navigation";
import { isProductionSite } from "@/lib/draft";
import { buildMetadata } from "@/lib/metadata";
import { LongServicePage } from "@/components/LongServicePage";
import { DUCTING_AR } from "@/data/long-services-ar";
import { isPublished } from "@/data/new-pages";

// Arabic twin of /ac-ducting-installation-dubai. Follows the English page's publish switch
// (src/data/new-pages.ts): unpublished → noindex, out of the sitemap, no hreflang.
export const metadata = buildMetadata({
  title: DUCTING_AR.metaTitle,
  description: DUCTING_AR.metaDescription,
  path: DUCTING_AR.path,
  locale: "ar_AE",
  noindex: !isPublished("ducting"),
});

export default function Page() {
  // 404 on the live site until published; local and Vercel preview builds still render it for review.
  if (isProductionSite() && !isPublished("ducting")) notFound();
  return (
    <LongServicePage
      lang="ar"
      service={{ ...DUCTING_AR, path: DUCTING_AR.enPath }}
      path={DUCTING_AR.path}
      published={isPublished("ducting")}
      related={DUCTING_AR.related}
    />
  );
}
