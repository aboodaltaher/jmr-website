import type { Metadata } from "next";

// Single shared metadata helper so every page emits consistent, page-specific
// Open Graph + Twitter tags. og/twitter title and description default to the
// page's own title and meta description; everything else (site name, locale,
// type, card, 1200x630 og:image) is filled in once here. (Social-tags issue.)

const SITE_URL = "https://agec.ae";
const SITE_NAME = "AGEC";
// Default share image — 1200x630. TODO(owner): supply a branded social image
// (logo + tagline on navy) if you want something richer than the current card.
const DEFAULT_OG_IMAGE = "/og-image.png";

export interface PageMetadata {
  /** Page <title> and the default og/twitter title. */
  title: string;
  /** Meta description and the default og/twitter description. */
  description: string;
  /** Path after the domain, e.g. "/about". Use "" for the homepage. */
  path: string;
  /** Override the og/twitter title (defaults to `title`). */
  ogTitle?: string;
  /** Override the og/twitter description (defaults to `description`). */
  ogDescription?: string;
  /** Override the share image (defaults to /og-image.png). */
  image?: string;
  /** og:locale — defaults to en_AE; pass "ar_AE" for Arabic pages. */
  locale?: string;
  /** hreflang alternates, absolute URLs keyed by lang (e.g. { en, ar, "x-default" }). */
  languages?: Record<string, string>;
}

export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  image = DEFAULT_OG_IMAGE,
  locale = "en_AE",
  languages,
}: PageMetadata): Metadata {
  const url = path ? `${SITE_URL}${path}` : SITE_URL;
  const shareTitle = ogTitle ?? title;
  const shareDescription = ogDescription ?? description;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title: shareTitle,
      description: shareDescription,
      url,
      siteName: SITE_NAME,
      locale,
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description: shareDescription,
      images: [image],
    },
  };
}
