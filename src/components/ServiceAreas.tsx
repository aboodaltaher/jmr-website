import Link from "next/link";
import { MapPin } from "lucide-react";

// Real emirates served, with real projects from the projects list. No invented
// locations — only areas where AGEC has delivered or actively serves.
const AREAS = [
  {
    emirate: "Dubai",
    note: "Villas, offices, restaurants and gyms — Al Barsha, Business Bay, Al Quoz and across the city.",
  },
  {
    emirate: "Sharjah",
    note: "Residential villa HVAC installation and commissioning, including twin-villa and private-villa projects.",
  },
  {
    emirate: "Ajman",
    note: "Commercial HVAC — including a 224-ton VRF installation at a mixed-use mall.",
  },
  {
    emirate: "Abu Dhabi",
    note: "Precision cooling for data centres and server rooms — Masdar City and Musaffah.",
  },
];

/**
 * "Service areas" section — real emirates served with real project context.
 * Links to /projects and /contact so those pages gain contextual inbound links.
 */
export function ServiceAreas() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Service areas
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
          HVAC services across the UAE
        </h2>
        <p className="mt-4 max-w-2xl text-text-muted">
          We work across all seven emirates. These are the areas where we have
          delivered or actively serve — see the full list on our{" "}
          <Link href="/projects" className="font-medium text-primary hover:underline">
            projects page
          </Link>
          .
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a) => (
            <div key={a.emirate} className="rounded-xl border border-border bg-white p-5">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="font-heading text-lg font-semibold">{a.emirate}</h3>
              </div>
              <p className="mt-2 text-sm text-text-muted">{a.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-text-muted">
          Not sure if we cover your area?{" "}
          <Link href="/contact" className="font-medium text-primary hover:underline">
            Contact us
          </Link>{" "}
          — we serve Umm Al Quwain, Ras Al Khaimah and Fujairah too.
        </p>
      </div>
    </section>
  );
}
