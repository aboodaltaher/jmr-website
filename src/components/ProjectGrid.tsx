"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { projects } from "@/data/projects";

// Some entries are described by scope rather than a TR/ton figure, which is
// fine. "Industrial" was removed — no project currently falls in that category.
const categories = ["All", "Residential", "Commercial", "Data Center"];

export function ProjectGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter Strip */}
      <section className="py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-white"
                    : "border border-border text-text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="sr-only">Project list</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => {
              // Published projects link to their case study; draft entries
              // (awaiting owner detail) render as a non-linked card.
              const body = (
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {project.systemSummary}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location.label}
                  </div>
                  {!project.draft && (
                    <span className="mt-4 inline-block text-sm font-medium text-primary">
                      View case study &rarr;
                    </span>
                  )}
                </div>
              );
              return project.draft ? (
                <div
                  key={project.slug}
                  className="overflow-hidden rounded-lg border border-border bg-white"
                >
                  {body}
                </div>
              ) : (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group overflow-hidden rounded-lg border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {body}
                </Link>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-text-muted">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
