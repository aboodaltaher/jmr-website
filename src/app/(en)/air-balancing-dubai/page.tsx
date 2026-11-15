import { notFound } from "next/navigation";
import { isProductionSite } from "@/lib/draft";
import { buildMetadata } from "@/lib/metadata";
import { LongServicePage } from "@/components/LongServicePage";
import { AIR_BALANCING } from "@/data/long-services";
import { isPublished } from "@/data/new-pages";

// Unpublished → noindex until the owner has reviewed it and flips the switch in
// src/data/new-pages.ts.
export const metadata = buildMetadata({
  title: AIR_BALANCING.metaTitle,
  description: AIR_BALANCING.metaDescription,
  path: AIR_BALANCING.path,
  noindex: !isPublished("airBalancing"),
});

export default function Page() {
  // 404 on the live site until published; local and Vercel preview builds still render it for review.
  if (isProductionSite() && !isPublished("airBalancing")) notFound();
  return (
    <LongServicePage
      service={AIR_BALANCING}
      path={AIR_BALANCING.path}
      published={isPublished("airBalancing")}
      related={AIR_BALANCING.related}
    />
  );
}
