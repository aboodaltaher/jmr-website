import { buildMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { publishedProjects, type Project } from "@/data/projects";
import { PROJECTS_DELIVERED, EMIRATES_WITH_PROJECTS_LABEL } from "@/lib/company";

const gallery = [
  {
    src: "/projects/agec-private-villa-hvac-dubai.jpg",
    alt: "Luxury private villa in the UAE with HVAC installation by AGEC",
    caption: "Private villa — full HVAC installation & commissioning",
    wide: true,
  },
  {
    src: "/projects/agec-villa-interior-concealed-cooling-dubai.jpg",
    alt: "Villa living room with concealed ducted cooling and linear diffusers installed by AGEC",
    caption: "Villa interior — concealed ducted cooling",
    wide: true,
  },
  {
    src: "/projects/agec-stone-villa-hvac-dubai-entrance.jpg",
    alt: "Stone-clad classical villa entrance with HVAC works by AGEC",
    caption: "Stone-clad villa — multi-zone cooling",
    wide: false,
  },
  {
    src: "/projects/agec-stone-villa-hvac-dubai-elevation.jpg",
    alt: "Side elevation of a stone-clad classical villa with HVAC installation by AGEC",
    caption: "Classical villa — HVAC installation & commissioning",
    wide: false,
  },
];

export const metadata = buildMetadata({
  title: "HVAC Projects in Dubai & the UAE | AGEC",
  description:
    "HVAC projects across Dubai, Sharjah, Ajman and Abu Dhabi — residential villas, commercial buildings, data centres and cultural facilities.",
  path: "/projects",
});

// Listing groups, derived from the existing data (category + published client type).
const GROUPS: { id: string; title: string; match: (p: Project) => boolean }[] = [
  { id: "villas", title: "Villas and residential buildings", match: (p) => p.category === "Residential" },
  { id: "retail-fb", title: "Retail and food & beverage", match: (p) => p.category === "Commercial" && /retail|restaurant/i.test(p.facts.clientType ?? "") },
  { id: "commercial", title: "Commercial and public buildings", match: (p) => p.category === "Commercial" && !/retail|restaurant/i.test(p.facts.clientType ?? "") },
  { id: "data-rooms", title: "Data centres and server rooms", match: (p) => p.category === "Data Center" },
];

function ProjectCard({ project }: { project: Project }) {
  const service = project.relatedServices[0];
  return (
    <li className="flex flex-col rounded-lg border border-border bg-white p-6">
      <h3 className="font-heading text-lg font-bold">
        <Link href={`/projects/${project.slug}`} className="hover:text-primary">
          {project.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-text-muted">{project.systemSummary}</p>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
        {project.location.label}
      </p>
      <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-4 text-sm font-medium">
        <Link href={`/projects/${project.slug}`} className="text-primary hover:underline">
          Read the case study &rarr;
        </Link>
        {service && (
          <Link href={service.href} className="text-text-muted hover:text-primary hover:underline">
            {service.name}
          </Link>
        )}
      </div>
    </li>
  );
}

export default function Projects() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs items={[{ name: "Projects", href: "/projects" }]} className="mb-6" />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Work
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-bold md:text-6xl">
            Projects across Dubai and the UAE
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">
            A selection of recent HVAC installations and design projects across
            the UAE. Select a project to read its case study.
          </p>
        </div>
      </section>

      {/* Intro: built only from what the service pages already state */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-4 px-6 text-lg leading-relaxed text-text-muted">
          <p>
            AGEC is an engineer-led HVAC contractor, and this page collects the projects we can
            show in detail: villas and residential buildings, commercial and public buildings,
            retail and food-and-beverage spaces, and data centres and server rooms. Together with
            work not listed here, they are part of the {PROJECTS_DELIVERED} projects we have
            completed since 2022.
          </p>
          <p>
            Most of our residential work is in large villas, where we install VRF/VRV systems or
            ducted DX split systems sized from a room-by-room heat load, with concealed ductwork
            and zoned controls. In commercial buildings the cooling has to follow changing
            occupancy, so gyms, malls, restaurants and public spaces get cooling and fresh-air
            ventilation designed together, including kitchen exhaust and make-up air where food is
            cooked. Server rooms and data centres need precision, close-control cooling that runs
            around the clock.
          </p>
          <p>
            On these projects our team handles the design, the installation, and the testing and
            commissioning, and we can keep the system running afterwards under an{" "}
            <Link href="/ac-amc-dubai" className="font-medium text-primary hover:underline">
              annual maintenance contract
            </Link>
            . The projects below are in {EMIRATES_WITH_PROJECTS_LABEL}; we work across all 7
            emirates. Open a project to read its case study, or the service it used.
          </p>
        </div>
      </section>

      {/* Projects grouped by type; every card links to its case study and its service page */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl space-y-12 px-6">
          {GROUPS.map((g) => {
            const items = publishedProjects.filter(g.match);
            if (items.length === 0) return null;
            return (
              <div key={g.id} id={g.id}>
                <h2 className="font-heading text-2xl font-bold md:text-3xl">{g.title}</h2>
                <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Real project photo gallery */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            Recent work
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {gallery.map((g) => (
              <figure
                key={g.src}
                className={`overflow-hidden rounded-xl border border-border ${g.wide ? "sm:col-span-2" : ""}`}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm text-text-muted">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Dubai areas — real project neighbourhoods only (no thin per-area pages) */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            Dubai areas we&apos;ve worked in
          </h2>
          <p className="mt-3 max-w-2xl text-text-muted">
            A sample of Dubai neighbourhoods where we&apos;ve delivered projects.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-6">
              <h3 className="font-heading text-lg font-semibold">Al Barsha</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/projects/villa-al-barsha-dubai" className="text-primary hover:underline">
                    B+G+1+R Villa, Al Barsha — 140-ton DX
                  </Link>
                </li>
                <li>
                  <Link href="/projects/pure-gym-al-barsha" className="text-primary hover:underline">
                    Pure Gym, Al Barsha — HVAC & ventilation
                  </Link>
                </li>
                <li>
                  <Link href="/projects/cultural-center-al-barsha" className="text-primary hover:underline">
                    Cultural Center, Al Barsha — HVAC works
                  </Link>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h3 className="font-heading text-lg font-semibold">Business Bay</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/projects/ave-restaurant-business-bay" className="text-primary hover:underline">
                    AVE Restaurant, Business Bay — kitchen ventilation & cooling
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white">
            Tell us about your requirements and get a quotation from our
            engineering team.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-white/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
