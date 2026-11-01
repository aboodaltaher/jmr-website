import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ALL_SERVICES = [
  { href: "/ac-maintenance-dubai", label: "AC Maintenance", desc: "Servicing, repair & AMC for homes" },
  { href: "/ac-repair-dubai", label: "AC Repair", desc: "Root-cause diagnosis, fixed in writing" },
  { href: "/ac-amc-dubai", label: "AC AMC", desc: "Annual maintenance contracts" },
  { href: "/ac-duct-cleaning-dubai", label: "AC Duct Cleaning", desc: "Ducts, coils & drains with disinfection" },
  { href: "/air-balancing-airflow-testing-dubai", label: "Air Balancing", desc: "Measured airflow testing & reports" },
  { href: "/smart-thermostat-installation-dubai", label: "Smart Thermostats", desc: "Nest & ecobee installation" },
  { href: "/services/vrf-vrv-systems", label: "VRF / VRV Systems", desc: "Multi-zone design & commissioning" },
  { href: "/services/maintenance", label: "Commercial Maintenance", desc: "Chillers, AHUs & FCUs under one AMC" },
  { href: "/services/ventilation-fresh-air", label: "Ventilation & Fresh Air", desc: "Airflow & CO₂ testing" },
  { href: "/services/hvac-design", label: "HVAC Design", desc: "Heat loads, duct sizing & MEP" },
  { href: "/services/testing-commissioning", label: "Testing & Commissioning", desc: "TAB to design values" },
  { href: "/services/chillers", label: "Chiller Systems", desc: "Air & water-cooled plant" },
  { href: "/services/dx-units", label: "DX Units & Splits", desc: "Sized & installed from heat loads" },
];

/**
 * "Related services" block for contextual internal links. Excludes the current
 * page, shows up to `limit` sibling services, and links to the services hub,
 * our projects and about pages so those pages gain contextual inbound links.
 */
export function RelatedServices({
  currentPath,
  limit = 6,
  heading = "Related services",
}: {
  currentPath?: string;
  limit?: number;
  heading?: string;
}) {
  const items = ALL_SERVICES.filter((s) => s.href !== currentPath).slice(0, limit);

  return (
    <section className="border-t border-border bg-bg-soft py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-2xl font-bold md:text-3xl">{heading}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-xl border border-border bg-white p-5 transition-colors hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-base font-semibold text-text">
                  {s.label}
                </h3>
                <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
              </div>
              <p className="mt-1 text-sm text-text-muted">{s.desc}</p>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-text-muted">
          See{" "}
          <Link href="/services" className="font-medium text-primary hover:underline">
            all HVAC services
          </Link>
          , browse{" "}
          <Link href="/projects" className="font-medium text-primary hover:underline">
            our recent projects
          </Link>{" "}
          read{" "}
          <Link href="/about" className="font-medium text-primary hover:underline">
            about AGEC&apos;s engineers
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-medium text-primary hover:underline">
            contact us
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
