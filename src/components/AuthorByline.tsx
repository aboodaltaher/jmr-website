import { FOUNDER } from "@/lib/company";
import { formatDate } from "@/lib/blog";

// Visible author byline for blog posts and the blog index (audit task 10).
// The author name comes from the company SSOT (FOUNDER); the title matches
// the engineer profile on /about and the AuthorBox shown under each post.
const AUTHOR_TITLE = "Founder & Lead HVAC Engineer";

export function AuthorByline({
  date,
  readingTime,
  updated,
  showTitle = false,
  className = "",
}: {
  date: string;
  readingTime?: string;
  updated?: string;
  showTitle?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2 text-text-muted ${className}`}>
      <span>
        By {FOUNDER}
        {showTitle && ` · ${AUTHOR_TITLE}`}
      </span>
      <span aria-hidden="true">·</span>
      <span>{formatDate(date)}</span>
      {readingTime && (
        <>
          <span aria-hidden="true">·</span>
          <span>{readingTime}</span>
        </>
      )}
      {updated && (
        <>
          <span aria-hidden="true">·</span>
          <span>Last updated {formatDate(updated)}</span>
        </>
      )}
    </div>
  );
}
