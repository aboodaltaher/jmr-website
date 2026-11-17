import { Star } from "lucide-react";
import { JobPhoto } from "@/components/JobPhoto";
import type { AreaJob } from "@/data/area-jobs";

const filled = (s: string | undefined): s is string => typeof s === "string" && s.trim().length > 0;

/** "2026-10-12" -> "October 2026". */
function monthYear(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
}

/**
 * "Recent job in [area]". Renders ONLY when the area has real data (see src/data/area-jobs.ts).
 * With no entry, or an incomplete one, it renders nothing: no heading, no placeholder.
 */
export function RecentJob({ job, areaName }: { job: AreaJob | undefined; areaName: string }) {
  if (!job) return null;
  if (![job.title, job.systemType, job.units, job.workDone, job.date].every(filled)) return null;

  const photos = job.photos.filter((p) => filled(p.src) && filled(p.alt)).slice(0, 3);
  const r = job.review;
  const review =
    r && filled(r.name) && filled(r.text) && r.rating >= 1 && r.rating <= 5 ? r : undefined;

  return (
    <section className="py-14 md:py-16" aria-labelledby="recent-job-heading">
      <div className="mx-auto max-w-4xl px-6">
        <h2 id="recent-job-heading" className="font-heading text-3xl font-bold md:text-4xl">
          Recent job in {areaName}
        </h2>
        <h3 className="mt-5 font-heading text-xl font-semibold">{job.title}</h3>
        <dl className="mt-4 grid gap-x-8 gap-y-2 text-text-muted sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-primary">System</dt>
            <dd>{job.systemType}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-primary">Units</dt>
            <dd>{job.units}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-primary">Date</dt>
            <dd>
              <time dateTime={job.date}>{monthYear(job.date)}</time>
            </dd>
          </div>
        </dl>
        <p className="mt-4 leading-relaxed text-text-muted">{job.workDone}</p>
        {photos.length > 0 && (
          <div className="mt-6 flex flex-wrap items-start gap-4">
            {photos.map((p) => (
              <JobPhoto key={p.src} src={p.src} alt={p.alt} width={p.width} height={p.height} />
            ))}
          </div>
        )}
        {review && (
          <figure className="mt-8 rounded-lg border border-border bg-bg-soft p-6">
            <div className="flex gap-1" role="img" aria-label={`${review.rating} out of 5 stars`}>
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className={`h-5 w-5 ${n <= review.rating ? "fill-primary text-primary" : "text-border"}`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <blockquote className="mt-3 leading-relaxed text-text">&ldquo;{review.text}&rdquo;</blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-text-muted">{review.name}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
