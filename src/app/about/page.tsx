import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  PhoneCall,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | AGEC",
  description:
    "Founded in Dubai in 2022, Altaher Ghabboun Engineering Contracting (AGEC) is an HVAC, MEP & maintenance contractor delivering installation, commissioning, and maintenance across the UAE. 30+ projects delivered.",
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
      "Emergency breakdown support across Dubai, Sharjah, and Abu Dhabi.",
  },
  {
    icon: TrendingUp,
    name: "Proven Record",
    description:
      "30+ HVAC projects delivered, from villas to data centers and cultural facilities.",
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
      {/* Header */}
      <section className="bg-bg-soft py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            About AGEC
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-bold md:text-6xl">
            Solutions at Your Fingertips
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-text-muted">
            Founded in Dubai in 2022 by Mr. Mohannad Ghaboun, Altaher Ghabboun
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
                  Today we operate across three Emirates — Dubai, Sharjah, and
                  Abu Dhabi — with a portfolio of 30+ completed projects ranging
                  from residential villas to data centers, commercial buildings,
                  and cultural facilities. Our largest single project has handled
                  a 240-ton cooling capacity, and our largest contract value to
                  date is 8.75 million AED.
                </p>
                <p>
                  We are an authorized HVAC contractor compliant with Dubai
                  Municipality, DEWA, ASHRAE 111, SMACNA, and CIBSE standards.
                  Whether the project is a single villa or a multi-site rollout,
                  our commitment is the same: precision, timeliness, and systems
                  that work for the long term.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg lg:min-h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1745750434535-5943ef2fd31a?auto=format&fit=crop&w=1200&q=80"
                alt="Dubai skyline with modern architecture"
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
    </>
  );
}
