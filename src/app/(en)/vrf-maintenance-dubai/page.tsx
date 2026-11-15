import { notFound } from "next/navigation";
import { isProductionSite } from "@/lib/draft";
import { buildMetadata } from "@/lib/metadata";
import { LongServicePage } from "@/components/LongServicePage";
import { VRF_MAINTENANCE } from "@/data/long-services";
import { isPublished } from "@/data/new-pages";

// Unpublished → noindex until the owner has reviewed it and flips the switch in
// src/data/new-pages.ts.
export const metadata = buildMetadata({
  title: VRF_MAINTENANCE.metaTitle,
  description: VRF_MAINTENANCE.metaDescription,
  path: VRF_MAINTENANCE.path,
  noindex: !isPublished("vrfMaintenance"),
});

export default function Page() {
  // 404 on the live site until published; local and Vercel preview builds still render it for review.
  if (isProductionSite() && !isPublished("vrfMaintenance")) notFound();
  return (
    <LongServicePage
      service={VRF_MAINTENANCE}
      path={VRF_MAINTENANCE.path}
      published={isPublished("vrfMaintenance")}
      related={VRF_MAINTENANCE.related}
    />
  );
}
