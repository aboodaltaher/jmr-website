import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudyGallery } from "@/components/CaseStudyGallery";
import { DraftText } from "@/components/DraftText";
import { resolveDraft, visibleItems } from "@/lib/draft";
import { getProjectPhotos } from "@/lib/project-photos";
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

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-sm font-semibold uppercase tracking-wider text-primary">{label}</dt>
      <dd className="mt-1 text-text-muted">{children}</dd>
    </div>
  );
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
    title: project.metaTitle,
    description: project.metaDescription,
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

  const photos = getProjectPhotos(project.slug);

  // Each section renders only if something real is left once "[TO CONFIRM]"
  // placeholders are resolved (all placeholders are hidden on the live site).
  const decisions = visibleItems(project.decisions);
  const results = project.results.filter((r) => resolveDraft(r.value));
  const timeline = project.timeline.filter((t) => resolveDraft(t.value));
  const hasQuote = Boolean(resolveDraft(project.quote.text) && resolveDraft(project.quote.attribution));
  const clientType = resolveDraft(project.clientType);
  const tonnage = resolveDraft(project.tonnage);

  // CreativeWork. datePublished is when THIS PAGE was first published — not when
  // the project happened. dateCreated is deliberately omitted until real project
  // dates are supplied, so we never misstate them.
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    headline: project.metaTitle,
    description: project.systemSummary,
    url: `${SITE_URL}/projects/${project.slug}`,
    datePublished: project.publishedAt,
    dateModified: project.updatedAt,
    inLanguage: "en-AE",
    ...(photos.length ? { image: photos.map((src) => `${SITE_URL}${src}`) } : {}),
    ...(project.location.emirate
      ? {
          locationCreated: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              ...(project.location.area ? { addressLocality: project.location.area } : {}),
              addressRegion: project.location.emirate,
              addressCountry: "AE",
            },
          },
        }
      : {}),
    author: { "@id": `${SITE_URL}/#business` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const heading = "font-heading text-2xl font-bold";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      {/* Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs
            className="mb-6"
            items={[
              { name: "Projects", href: "/projects" },
              { name: project.name, href: `/projects/${project.slug}` },
            ]}
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
            {clientType && <Fact label="Client type"><DraftText>{project.clientType}</DraftText></Fact>}
            <Fact label="Location">{location}</Fact>
            <Fact label="System type">{project.systemType ?? project.systemSummary}</Fact>
            {tonnage && <Fact label="Capacity"><DraftText>{project.tonnage}</DraftText></Fact>}
          </dl>

          {project.overview && (
            <div className="mt-10">
              <h2 className={heading}>Overview</h2>
              <p className="mt-4 leading-relaxed text-text-muted">{project.overview}</p>
            </div>
          )}

          {resolveDraft(project.challenge) && (
            <div className="mt-10">
              <h2 className={heading}>The challenge</h2>
              <p className="mt-4 leading-relaxed text-text-muted">
                <DraftText>{project.challenge}</DraftText>
              </p>
            </div>
          )}

          {project.scope && project.scope.length > 0 && (
            <div className="mt-10">
              <h2 className={heading}>Scope of work</h2>
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

          {decisions.length > 0 && (
            <div className="mt-10">
              <h2 className={heading}>Key design and installation decisions</h2>
              <ul className="mt-4 space-y-3">
                {project.decisions.map((d) =>
                  resolveDraft(d) ? (
                    <li key={d} className="flex gap-3 text-text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span><DraftText>{d}</DraftText></span>
                    </li>
                  ) : null,
                )}
              </ul>
            </div>
          )}

          {results.length > 0 && (
            <div className="mt-10">
              <h2 className={heading}>Commissioning results</h2>
              <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                {results.map((r) => (
                  <div key={r.label} className="rounded-xl border border-border p-4">
                    <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                      {r.label}
                    </dt>
                    <dd className="mt-1 text-text-muted"><DraftText>{r.value}</DraftText></dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {timeline.length > 0 && (
            <div className="mt-10">
              <h2 className={heading}>Timeline</h2>
              <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                {timeline.map((t) => (
                  <div key={t.label}>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                      {t.label}
                    </dt>
                    <dd className="mt-1 text-text-muted"><DraftText>{t.value}</DraftText></dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {hasQuote && (
            <figure className="mt-10 rounded-xl border-l-4 border-primary bg-bg-soft p-6">
              <blockquote className="text-lg leading-relaxed">
                <DraftText>{project.quote.text}</DraftText>
              </blockquote>
              <figcaption className="mt-3 text-sm text-text-muted">
                — <DraftText>{project.quote.attribution}</DraftText>
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      <CaseStudyGallery project={project} />

      {/* Related services */}
      {project.relatedServices.length > 0 && (
        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className={heading}>Related services</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {project.relatedServices.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="inline-block rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
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
