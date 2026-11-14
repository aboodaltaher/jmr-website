import Link from "next/link";

const SITE_URL = "https://agec.ae";

export interface Crumb {
  name: string;
  /** Path after the domain, e.g. "/services". Required on every crumb, including the current page. */
  href: string;
}

const HOME: Record<"en" | "ar", Crumb> = {
  en: { name: "Home", href: "/" },
  ar: { name: "الرئيسية", href: "/ar" },
};

const NAV_LABEL = { en: "Breadcrumb", ar: "مسار التنقل" } as const;

/**
 * The ONE breadcrumb for a page. It renders the visible trail and the
 * BreadcrumbList JSON-LD from the same list, so the two can never drift apart.
 * "Home" (or "الرئيسية" for lang="ar") is prepended automatically; pass the
 * remaining crumbs in order, ending with the current page.
 *
 * The homepages (/ and /ar) deliberately render no breadcrumb.
 */
export function Breadcrumbs({
  items,
  lang = "en",
  className = "",
}: {
  items: Crumb[];
  lang?: "en" | "ar";
  className?: string;
}) {
  const trail: Crumb[] = [HOME[lang], ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      // Slash-less, to match the site's self-referencing canonicals.
      item: c.href === "/" ? SITE_URL : `${SITE_URL}${c.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label={NAV_LABEL[lang]}
        data-breadcrumbs=""
        className={`text-sm text-text-muted ${className}`}
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-x-2">
                {last ? (
                  <span className="text-text" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <Link
                    href={c.href}
                    className="inline-flex min-h-[24px] items-center hover:text-primary transition-colors"
                  >
                    {c.name}
                  </Link>
                )}
                {!last && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

/** Wrapper for the full-width soft band used above hero sections. */
export function BreadcrumbBand({
  items,
  lang = "en",
}: {
  items: Crumb[];
  lang?: "en" | "ar";
}) {
  return (
    <div className="border-b border-border bg-bg-soft">
      <div className="mx-auto max-w-7xl px-6 py-3">
        <Breadcrumbs items={items} lang={lang} />
      </div>
    </div>
  );
}
