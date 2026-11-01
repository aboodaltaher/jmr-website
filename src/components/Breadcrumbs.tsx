import Link from "next/link";

export interface Crumb {
  name: string;
  /** Path after the domain, e.g. "/about". Omit for the current page. */
  href?: string;
}

/**
 * Visible breadcrumb trail (audit item 6). Pair with <BreadcrumbSchema /> for
 * the JSON-LD equivalent. "Home" is prepended automatically.
 */
export function Breadcrumbs({
  items,
  className = "",
}: {
  items: Crumb[];
  className?: string;
}) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-text-muted ${className}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.name} className="flex items-center gap-x-2">
              {c.href && !last ? (
                <Link href={c.href} className="inline-flex min-h-[24px] items-center hover:text-primary transition-colors">
                  {c.name}
                </Link>
              ) : (
                <span className="text-text" aria-current={last ? "page" : undefined}>
                  {c.name}
                </span>
              )}
              {!last && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
