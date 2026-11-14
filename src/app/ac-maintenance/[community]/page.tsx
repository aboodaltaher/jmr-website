import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { communities, getCommunity } from "@/data/communities";
import { COMMUNITY_INDEX, communityPath } from "@/data/community-index";
import { CommunityPage } from "@/components/CommunityPage";

// Only the communities in the index exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return communities.map((c) => ({ community: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ community: string }>;
}): Promise<Metadata> {
  const { community } = await params;
  const c = getCommunity(community);
  if (!c) return {};
  const published = COMMUNITY_INDEX.find((x) => x.slug === c.slug)?.published ?? false;
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: communityPath(c.slug),
    // Unpublished pages are reachable by URL for review but kept out of search.
    noindex: !published,
  });
}

export default async function CommunityRoute({
  params,
}: {
  params: Promise<{ community: string }>;
}) {
  const { community } = await params;
  const c = getCommunity(community);
  if (!c) notFound();
  return <CommunityPage community={c} />;
}
