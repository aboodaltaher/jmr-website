"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const projects = [
  {
    name: "B+G+1+R Basil Mall",
    category: "Commercial",
    description: "HVAC Installation & Commissioning, 224 Ton VRF System",
    location: "Ajman, UAE",
  },
  {
    name: "Private G+4 Building",
    category: "Residential",
    description: "HVAC Full Installation, 148 Ton DX System",
    location: "Dubai, UAE",
  },
  {
    name: "Double Twin Villa G+1",
    category: "Residential",
    description: "HVAC Installation & Commissioning, 60 Ton DX System",
    location: "Sharjah, UAE",
  },
  {
    name: "G+1+R Villa",
    category: "Residential",
    description: "HVAC Installation & Commissioning, 45 Ton DX System",
    location: "Dubai, UAE",
  },
  {
    name: "B+G+1+R Villa, Al Barsha",
    category: "Residential",
    description: "HVAC Installation, 140 Ton DX System",
    location: "Dubai, UAE",
  },
  {
    name: "18 Villas Community Project",
    category: "Residential",
    description: "Full HVAC works across 18 G+1 villas",
    location: "Al Rgebah / Al Seyouh",
  },
  {
    name: "B+G+1 Private Villa",
    category: "Residential",
    description: "Premium HVAC system, flagship residential project",
    location: "Sharjah, UAE",
  },
  {
    name: "MBZ-AI Server Room",
    category: "Data Center",
    description: "Precision cooling for AI server infrastructure",
    location: "Masdar City, Abu Dhabi",
  },
  {
    name: "Pure Gym",
    category: "Commercial",
    description: "HVAC installation and ventilation system",
    location: "Al Barsha, Dubai",
  },
  {
    name: "AVE Restaurant",
    category: "Commercial",
    description: "Kitchen ventilation and dining area cooling",
    location: "Business Bay, Dubai",
  },
  {
    name: "Zain Solution Data Center",
    category: "Data Center",
    description: "Precision cooling and ventilation",
    location: "Musaffah, Abu Dhabi",
  },
  {
    name: "Cultural Center",
    category: "Commercial",
    description: "HVAC works for public cultural facility",
    location: "Al Barsha, Dubai",
  },
];

const categories = ["All", "Residential", "Commercial", "Data Center", "Industrial"];

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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <div
                key={project.name}
                className="overflow-hidden rounded-lg border border-border bg-white"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-border/30">
                  <p className="text-sm text-text-muted">Project photo</p>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {project.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-text-muted">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
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
