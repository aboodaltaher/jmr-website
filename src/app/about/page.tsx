import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FOUNDER } from "@/lib/company";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  PhoneCall,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About AGEC | HVAC Contractor in Dubai",
  description:
    "AGEC (Altaher Ghabboun Engineering Contracting) is a Dubai HVAC, MEP and maintenance contractor — 32 projects delivered across the UAE since 2022.",
  alternates: { canonical: "/about" },
  openGraph: {
    images: ["/og-image.png"],
    title: "About AGEC | HVAC Contractor in Dubai",
    description:
      "AGEC (Altaher Ghabboun Engineering Contracting) is a Dubai HVAC, MEP and maintenance contractor — 32 projects delivered across the UAE since 2022.",
    url: "https://agec.ae/about",
    siteName: "AGEC",
    type: "website",
  },
};

const values = [
  {
    icon: Award,
    name: "Engineering Rigor",
    description:
      "Heat load calculations, system design, and commissioning by qualified engineers with UAE field experience.",
  },
  {
    icon: ShieldCheck,
    name: "OEM Compliance",
    description:
      "Genuine spare parts and approved maintenance procedures. AHRI-certified equipment with proper warranties.",
  },
  {
    icon: PhoneCall,
    name: "24/7 Support",
    description:
      "Emergency breakdown support across all seven emirates of the UAE.",
  },
  {
    icon: TrendingUp,
    name: "Proven Record",
    description:
      "32 HVAC projects delivered, from villas to data centers and cultural facilities.",
  },
];

const capabilities = [
  "HVAC Installation & Execution",
  "Preventive & Corrective Maintenance",
  "Testing, Adjusting & Balancing (TAB)",
  "Commissioning & Re-commissioning",
  "Retrofit & System Upgrades",
  "24/7 Emergency Breakdown Support",
  "HVAC Design & Heat Load Calculations",
  "AMC (Annual Maintenance Contracts)",
];

export default function About() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "" },
          { name: "About", path: "/about" },
        ]}
      />
      {/* Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs items={[{ name: "About" }]} className="mb-6" />
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            About AGEC
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-bold md:text-6xl">
            Engineering-led HVAC contracting in Dubai
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">
            Founded in Dubai in 2022 by {FOUNDER}, Altaher Ghabboun
            Engineering Contracting (AGEC) is an HVAC contracting company
            delivering expert installation, maintenance, and testing &amp;
            commissioning across the UAE.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Built on engineering, not shortcuts
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-text-muted">
                <p>
                  AGEC was founded in 2022 with a focused mission: deliver HVAC
                  solutions that perform exactly as designed. From day one, our
                  approach has been engineering-first — heat load calculations,
                  system design, and commissioning handled by qualified
                  engineers, not just installers.
                </p>
                <p>
                  Today we operate across all seven Emirates of the UAE — with a
                  portfolio of 32 completed projects ranging
                  from residential villas to data centers, commercial buildings,
                  and cultural facilities. Our largest single project has handled
                  a 240-ton cooling capacity, and our largest contract value to
                  date is 8.75 million AED.
                </p>
                <p>
                  We work to recognised HVAC engineering standards, including
                  ASHRAE 111, SMACNA and CIBSE.
                  Whether the project is a single villa or a multi-site rollout,
                  our commitment is the same: precision, timeliness, and systems
                  that work for the long term.
                </p>
                <p>
                  AGEC Technical Services L.L.C. holds Dubai Commercial Licence
                  No. 1221573, issued by the Dubai Department of Economy and
                  Tourism, covering air-conditioning, ventilation and air
                  filtration systems installation and maintenance.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg lg:min-h-[400px]">
              <Image
                src="/photos/agec-ac-vent-cleaning-villa-dubai.jpg"
                alt="AGEC technician cleaning air conditioning ventilation in a Dubai villa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            What drives us
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.name}>
                <value.icon
                  className="h-8 w-8 text-primary"
                  strokeWidth={1.5}
                />
                <h3 className="mt-3 font-heading text-lg font-semibold">
                  {value.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            What we deliver
          </h2>
          <ul className="mt-6 max-w-2xl columns-1 gap-x-12 space-y-3 sm:columns-2">
            {capabilities.map((cap) => (
              <li key={cap} className="flex gap-3 text-text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {cap}
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-8 inline-block text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            View all services &rarr;
          </Link>
        </div>
      </section>

      {/* Engineer / team profile */}
      {/* TODO(owner): supply the lead engineer's name, qualifications (e.g. BEng,
          years of UAE HVAC experience, professional memberships) and a real
          headshot, then replace this placeholder with the real profile. */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            The engineers behind the work
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">
            AGEC is led by {FOUNDER}, who founded the company in 2022. Our design
            and commissioning work is carried out by qualified HVAC engineers with
            UAE field experience across villas, commercial buildings and data
            centres. Detailed engineer profiles are being prepared.
          </p>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-4xl font-bold text-white">
            Looking for an HVAC contractor that gets the details right?
          </h2>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-md bg-white px-8 py-4 font-medium text-primary hover:bg-white/90 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>
      {/* TODO: add trade licence number */}
    </>
  );
}
