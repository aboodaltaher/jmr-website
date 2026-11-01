const SITE_URL = "https://agec.ae";

export interface Crumb {
  name: string;
  /** Path after the domain, no trailing slash. Home is "". */
  path: string;
}

/**
 * Emits BreadcrumbList JSON-LD. `item` URLs are slash-less to match the
 * site's self-referencing canonicals.
 */
export function BreadcrumbSchema({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
