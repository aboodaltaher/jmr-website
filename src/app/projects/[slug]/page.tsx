import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  publishedProjects,
  getProjectBySlug,
  type Project,
} from "@/data/projects";

const SITE_URL = "https://agec.ae";

// Only non-draft projects get a page; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

function locationText(p: Project): string {
  return p.location.area && p.location.emirate
    ? `${p.location.area}, ${p.location.emirate}`
    : p.location.emirate || p.location.label;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || project.draft) return {};
  return buildMetadata({
    title: `${project.name} — HVAC Case Study | AGEC`,
    description: `${project.name} in ${locationText(project)}: ${project.systemSummary}. HVAC case study by AGEC.`,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || project.draft) notFound();

  const location = locationText(project);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: project.name,
    description: project.systemSummary,
    url: `${SITE_URL}/projects/${project.slug}`,
    ...(project.location.emirate
      ? {
          location: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              ...(project.location.area
                ? { addressLocality: project.location.area }
                : {}),
              addressRegion: project.location.emirate,
              addressCountry: "AE",
            },
          },
        }
      : {}),
    provider: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "" },
          { name: "Projects", path: "/projects" },
          { name: project.name, path: `/projects/${project.slug}` },
        ]}
      />

      {/* Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs
            items={[{ name: "Projects", href: "/projects" }, { name: project.name }]}
            className="mb-6"
          />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {project.category} · Case Study
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold md:text-5xl">
            {project.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {location}
            </span>
            <span>·</span>
            <span>{project.systemSummary}</span>
          </div>
        </div>
      </section>

      {/* Facts + narrative */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <dl className="grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                Project type
              </dt>
              <dd className="mt-1 text-text-muted">
                {project.projectType ?? project.category}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                System
              </dt>
              <dd className="mt-1 text-text-muted">
                {project.systemType ?? project.systemSummary}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                Location
              </dt>
              <dd className="mt-1 text-text-muted">{location}</dd>
            </div>
          </dl>

          {project.scope && project.scope.length > 0 && (
            <div className="mt-10">
              <h2 className="font-heading text-2xl font-bold">Scope of work</h2>
              <ul className="mt-4 space-y-3">
                {project.scope.map((item) => (
                  <li key={item} className="flex gap-3 text-text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.challenge && (
            <div className="mt-10">
              <h2 className="font-heading text-2xl font-bold">The challenge</h2>
              <p className="mt-4 leading-relaxed text-text-muted">{project.challenge}</p>
            </div>
          )}
          {project.solution && (
            <div className="mt-10">
              <h2 className="font-heading text-2xl font-bold">Our solution</h2>
              <p className="mt-4 leading-relaxed text-text-muted">{project.solution}</p>
            </div>
          )}
          {project.result && (
            <div className="mt-10">
              <h2 className="font-heading text-2xl font-bold">The result</h2>
              <p className="mt-4 leading-relaxed text-text-muted">{project.result}</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-heading text-2xl font-bold md:text-3xl">Gallery</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((img) => (
                <figure
                  key={img.src}
                  className="overflow-hidden rounded-xl border border-border"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 1200px"
                      className="object-cover"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="px-4 py-3 text-sm text-text-muted">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            Planning a similar project?
          </h2>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-white/90 transition-colors"
          >
            Get a Quote
          </Link>
          <div className="mt-4">
            <Link
              href="/projects"
              className="text-sm font-medium text-white hover:underline transition-colors"
            >
              &larr; Back to all projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
