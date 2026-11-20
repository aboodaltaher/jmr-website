import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudyGallery } from "@/components/CaseStudyGallery";
import { getProjectPhotos } from "@/lib/project-photos";
import { whatsappUrl } from "@/lib/contact";
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

  const f = project.facts;
  // Every owner fact is optional and renders only when filled (src/data/projects.ts).
  const photos = [...(f.photos ?? []).map((p) => p.src), ...getProjectPhotos(project.slug)];

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
    ...(photos.length ? { image: [...new Set(photos)].map((src) => `${SITE_URL}${src}`) } : {}),
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

  const hasWide = Boolean(f.highlights?.length || f.comparison || f.challenges?.length);

  // Facts, then the overview (the owner's intro paragraphs when given, else the general overview).
  const lead = (
    <>
      <dl className="grid gap-6 sm:grid-cols-2">
        {f.clientType && <Fact label="Client type">{f.clientType}</Fact>}
        <Fact label="Location">{location}</Fact>
        <Fact label="System type">{f.systemType ?? project.systemType ?? project.systemSummary}</Fact>
        {f.capacity && <Fact label="Capacity">{f.capacity}</Fact>}
        {f.unitsInstalled && <Fact label="Units installed">{f.unitsInstalled}</Fact>}
        {f.year && <Fact label="Year completed">{f.year}</Fact>}
      </dl>

      {f.intro && f.intro.length > 0 ? (
        <div className="mt-10">
          <h2 className={heading}>Project overview</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-text-muted">
            {f.intro.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
      ) : (
        project.overview && (
          <div className="mt-10">
            <h2 className={heading}>Overview</h2>
            <p className="mt-4 leading-relaxed text-text-muted">{project.overview}</p>
          </div>
        )
      )}
    </>
  );

  // Challenge (single paragraph), scope, solution(s) and result.
  const rest = (
    <>
      {!hasWide && f.challenge && (
        <div className="mt-10">
          <h2 className={heading}>The challenge</h2>
          <p className="mt-4 leading-relaxed text-text-muted">{f.challenge}</p>
        </div>
      )}
      {hasWide && f.challenge && (
        <div>
          <h2 className={heading}>The challenge</h2>
          <p className="mt-4 leading-relaxed text-text-muted">{f.challenge}</p>
        </div>
      )}

      {project.scope && project.scope.length > 0 && (
        <div className={hasWide && !f.challenge ? "" : "mt-10"}>
          <h2 className={heading}>Scope of work</h2>
          {f.scope && <p className="mt-4 leading-relaxed text-text-muted">{f.scope}</p>}
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

      {f.solutions && f.solutions.length > 0 ? (
        <div className="mt-10">
          <h2 className={heading}>How we solved it</h2>
          <ul className="mt-4 space-y-3">
            {f.solutions.map((item) => (
              <li key={item} className="flex gap-3 text-text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        f.solution && (
          <div className="mt-10">
            <h2 className={heading}>Our solution</h2>
            <p className="mt-4 leading-relaxed text-text-muted">{f.solution}</p>
          </div>
        )
      )}

      {f.outcome && (
        <div className="mt-10">
          <h2 className={heading}>Result</h2>
          <p className="mt-4 leading-relaxed text-text-muted">{f.outcome}</p>
        </div>
      )}

      {f.measuredResult && (
        <div className="mt-10">
          <h2 className={heading}>Measured result</h2>
          <p className="mt-4 leading-relaxed text-text-muted">{f.measuredResult}</p>
        </div>
      )}
    </>
  );

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
            {project.h1 ?? project.name}
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

      {/* Facts + narrative. Wide blocks (stat cards, comparison, challenge cards) render only when the project has them. */}
      {hasWide ? (
        <>
          <section className="pt-16 md:pt-20">
            <div className="mx-auto max-w-3xl px-6">{lead}</div>
          </section>

          {f.highlights && f.highlights.length > 0 && (
            <section className="py-12 md:py-16" aria-labelledby="at-a-glance">
              <div className="mx-auto max-w-5xl px-6">
                <h2 id="at-a-glance" className={heading}>Project at a glance</h2>
                <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
                  {f.highlights.map((h) => (
                    <li key={h.label} className="rounded-xl border border-border bg-white p-4 sm:p-5">
                      <p className="font-heading text-2xl font-bold leading-tight text-primary sm:text-3xl">{h.value}</p>
                      <p className="mt-2 text-sm leading-snug text-text-muted">{h.label}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {f.comparison && (
            <section className="bg-bg-soft py-12 md:py-16" aria-labelledby="comparison">
              <div className="mx-auto max-w-5xl px-6">
                <h2 id="comparison" className={heading}>{f.comparison.title}</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
                  {f.comparison.items.map((i) => (
                    <div key={i.label} className="rounded-xl border border-border bg-white p-5">
                      <p className="font-heading text-3xl font-bold">{i.value}</p>
                      <p className="mt-2 text-sm text-text-muted">{i.label}</p>
                    </div>
                  ))}
                  <div className="rounded-xl border border-primary bg-white p-5">
                    <p className="font-heading text-3xl font-bold text-primary">{f.comparison.difference.value}</p>
                    <p className="mt-2 text-sm text-text-muted">{f.comparison.difference.label}</p>
                  </div>
                </div>
                {f.comparison.note && <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-muted">{f.comparison.note}</p>}
              </div>
            </section>
          )}

          {f.challenges && f.challenges.length > 0 && (
            <section className="py-12 md:py-16" aria-labelledby="challenges">
              <div className="mx-auto max-w-5xl px-6">
                <h2 id="challenges" className={heading}>Project challenges</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {f.challenges.map((c) => (
                    <div key={c.title} className="rounded-xl border border-border bg-white p-5">
                      <h3 className="font-heading text-lg font-bold">{c.title}</h3>
                      <ul className="mt-3 space-y-2">
                        {c.points.map((pt) => (
                          <li key={pt} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="pb-16 md:pb-20">
            <div className="mx-auto max-w-3xl px-6">{rest}</div>
          </section>
        </>
      ) : (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            {lead}
            {rest}
          </div>
        </section>
      )}

      <CaseStudyGallery project={project} />

      {/* Related services */}
      {project.relatedServices.length > 0 && (
        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className={heading}>Related services</h2>
            {f.cta && (
              <p className="mt-3 text-text-muted">
                AGEC installs and commissions VRF systems for commercial buildings in Ajman and across the UAE.
              </p>
            )}
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
            {f.cta ? f.cta.heading : "Planning a similar project?"}
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={f.cta ? f.cta.href : "/quote"}
              className="inline-block rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-white/90 transition-colors"
            >
              {f.cta ? f.cta.label : "Get a Quote"}
            </Link>
            {f.cta && (
              <a
                href={whatsappUrl(`/projects/${project.slug}`)}
                data-track-location="case_study_cta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-[#25D366] px-8 py-4 font-medium text-[#062e14] hover:bg-[#1fad52] transition-colors"
              >
                WhatsApp Us
              </a>
            )}
          </div>
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
