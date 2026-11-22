import Image from "next/image";
import type { Project } from "@/data/projects";
import { getProjectPhotos } from "@/lib/project-photos";

/**
 * Photo gallery for a case study: the owner's facts.photos (with their own alt text) first,
 * then any images in public/projects/{slug}/ (max 10 in total). Renders NOTHING when there are
 * no photos, so an unfilled field never shows as an empty section.
 */
export function CaseStudyGallery({ project }: { project: Project }) {
  const area = project.location.area ?? project.location.emirate ?? project.location.label;
  const listed = project.facts.photos ?? [];
  const folder = getProjectPhotos(project.slug).filter((src) => !listed.some((p) => p.src === src));
  const all: NonNullable<Project["facts"]["photos"]> = [...listed, ...folder.map((src) => ({ src, alt: "" }))].slice(0, 10);
  if (all.length === 0) return null;
  const photos = all.map((p, i) => ({
    src: p.src,
    caption: p.caption,
    contain: p.fit === "contain",
    alt:
      p.alt ||
      `${project.name} — ${project.systemType ?? project.systemSummary} installation, ${area} (photo ${i + 1} of ${all.length})`,
  }));

  return (
    <section className="pb-16 md:pb-20" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="gallery-heading" className="font-heading text-2xl font-bold md:text-3xl">
          Project photos
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map(({ src, alt, caption, contain }) => (
            <figure key={src} className="overflow-hidden rounded-xl border border-border">
              <div className={contain ? "relative aspect-[3/4] bg-bg-soft" : "relative aspect-[16/10]"}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className={contain ? "object-contain" : "object-cover"}
                />
              </div>
              {caption && <figcaption className="px-4 py-3 text-sm text-text-muted">{caption}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
