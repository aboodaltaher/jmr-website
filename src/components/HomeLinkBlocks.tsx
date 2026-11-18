import Link from "next/link";
import { communityPath, publishedCommunities } from "@/data/community-index";

// Plain, descriptive text links to the service and area pages, so each is reachable in one click from
// the homepage. Anchor text says what the page is about.
const SERVICES = [
  { href: "/ac-amc-dubai", label: "AC maintenance contract in Dubai" },
  { href: "/ac-maintenance-dubai", label: "AC maintenance and servicing in Dubai" },
  { href: "/ac-repair-dubai", label: "AC repair in Dubai" },
  { href: "/ac-installation-dubai", label: "AC installation in Dubai" },
  { href: "/ac-duct-cleaning-dubai", label: "AC duct cleaning in Dubai" },
  { href: "/kitchen-exhaust-cleaning-dubai", label: "Kitchen exhaust and hood cleaning in Dubai" },
  { href: "/vrf-maintenance-dubai", label: "VRF and VRV maintenance in Dubai" },
  { href: "/air-balancing-dubai", label: "Air balancing and airflow testing in Dubai" },
  { href: "/services/chiller-maintenance-dubai", label: "Chiller installation and maintenance" },
  { href: "/smart-thermostat-installation-dubai", label: "Smart thermostat installation in Dubai" },
];

const EMIRATES = [
  { href: "/hvac-contractor-sharjah", label: "HVAC contractor in Sharjah" },
  { href: "/hvac-contractor-ajman", label: "HVAC contractor in Ajman" },
  { href: "/hvac-contractor-abu-dhabi", label: "HVAC contractor in Abu Dhabi" },
];

const linkClass = "font-semibold text-primary hover:underline";

export function HomeLinkBlocks() {
  const communities = publishedCommunities();
  return (
    <section className="border-t border-border bg-bg-soft py-16 md:py-20" aria-label="Services and areas">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-bold">Services</h2>
          <ul className="mt-6 space-y-2">
            {SERVICES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className={linkClass}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-3xl font-bold">Areas we serve</h2>
          <ul className="mt-6 space-y-2">
            {EMIRATES.map((a) => (
              <li key={a.href}>
                <Link href={a.href} className={linkClass}>
                  {a.label}
                </Link>
              </li>
            ))}
            {communities.map((c) => (
              <li key={c.slug}>
                <Link href={communityPath(c.slug)} className={linkClass}>
                  {c.name}: {c.job ?? "AC maintenance"}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-text-muted">
            See every{" "}
            <Link href="/areas" className={linkClass}>
              area we serve
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
