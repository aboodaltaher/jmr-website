import Image from "next/image";
import { Camera } from "lucide-react";
import type { Project } from "@/data/projects";
import { getProjectPhotos } from "@/lib/project-photos";

/**
 * Photo gallery for a case study. Reads public/projects/{slug}/ (max 10 images).
 * With no photos it shows a tidy "photos coming soon" panel instead of an empty gap.
 */
export function CaseStudyGallery({ project }: { project: Project }) {
  const photos = getProjectPhotos(project.slug);
  const area = project.location.area ?? project.location.emirate ?? project.location.label;

  return (
    <section className="pb-16 md:pb-20" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl px-6">
        <h2 id="gallery-heading" className="font-heading text-2xl font-bold md:text-3xl">
          Project photos
        </h2>
        {photos.length === 0 ? (
          <div className="mt-6 flex items-center gap-4 rounded-xl border border-dashed border-border bg-bg-soft px-6 py-10 text-text-muted">
            <Camera className="h-8 w-8 shrink-0 text-primary" aria-hidden="true" />
            <p>Site photos for this project are coming soon.</p>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((src, i) => (
              <figure key={src} className="overflow-hidden rounded-xl border border-border">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={src}
                    alt={`${project.name} — ${project.systemType ?? project.systemSummary} installation, ${area} (photo ${i + 1} of ${photos.length})`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
