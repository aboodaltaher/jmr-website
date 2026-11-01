import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { ProjectGrid } from "@/components/ProjectGrid";

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

export const metadata: Metadata = {
  title: "HVAC Projects in Dubai & the UAE | AGEC",
  description:
    "HVAC projects across Dubai, Sharjah, Ajman and Abu Dhabi — residential villas, commercial buildings, data centres and cultural facilities.",
  alternates: { canonical: "/projects" },
  openGraph: {
    images: ["/og-image.png"],
    title: "HVAC Projects in Dubai & the UAE | AGEC",
    description:
      "HVAC projects across Dubai, Sharjah, Ajman and Abu Dhabi — residential villas, commercial buildings, data centres and cultural facilities.",
    url: "https://agec.ae/projects",
    siteName: "AGEC",
    type: "website",
  },
};

export default function Projects() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "" },
          { name: "Projects", path: "/projects" },
        ]}
      />
      {/* Page Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs items={[{ name: "Projects" }]} className="mb-6" />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Work
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-bold md:text-6xl">
            Projects across Dubai and the UAE
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">
            A selection of recent HVAC installations and design projects across
            the UAE. Detailed case studies coming soon.
          </p>
        </div>
      </section>

      <ProjectGrid />

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
