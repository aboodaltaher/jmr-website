import type { Metadata } from "next";
import Link from "next/link";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects | JMR Technical Services",
  description:
    "30+ HVAC projects across Dubai, Sharjah, and Abu Dhabi — residential villas, commercial buildings, data centers, and cultural facilities.",
};

export default function Projects() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Work
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-bold md:text-6xl">
            Projects across Dubai and the UAE
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">
            A selection of recent HVAC installations and design projects.
            Detailed case studies coming soon.
          </p>
        </div>
      </section>

      <ProjectGrid />

      {/* CTA Band */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
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
