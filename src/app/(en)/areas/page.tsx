import Link from "next/link";
import { BreadcrumbBand } from "@/components/Breadcrumbs";
import { MessageCircle, Phone } from "lucide-react";
import { publishedCommunities, communityPath } from "@/data/community-index";
import { PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/contact";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Areas We Serve | AC Services in Dubai & UAE | AGEC",
  description:
    "AGEC's AC and HVAC services by area: local pages for Dubai communities, plus Sharjah, Ajman and Abu Dhabi. Find your area and call or WhatsApp an engineer.",
  path: "/areas",
});

const eyebrow = "text-sm font-semibold uppercase tracking-widest text-primary";
const link = "font-semibold text-primary hover:underline";

const EMIRATE_PAGES = [
  { href: "/hvac-contractor-sharjah", label: "HVAC contractor in Sharjah" },
  { href: "/hvac-contractor-ajman", label: "HVAC contractor in Ajman" },
  { href: "/hvac-contractor-abu-dhabi", label: "HVAC contractor in Abu Dhabi" },
];

export default function AreasPage() {
  const dubai = publishedCommunities();
  const wa = whatsappUrl("/areas");
  return (
    <>
      <BreadcrumbBand items={[{ name: "Areas", href: "/areas" }]} />

      <section className="bg-bg-soft py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className={eyebrow}>Service Areas</p>
          <h1 className="mt-3 font-heading text-4xl font-bold md:text-6xl">
            AC and HVAC services by area
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            AGEC is based in Dubai and works across the UAE. These are the areas where we have a local
            page, and the emirates we cover. If your area is not listed, call or WhatsApp us and we will
            tell you whether we can reach you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-4 font-semibold text-[#062e14] transition-colors hover:bg-[#1fad52]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp an engineer
            </a>
          </div>
        </div>
      </section>

      {dubai.length > 0 && (
        <section className="py-14 md:py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Dubai areas</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {dubai.map((a) => (
                <li key={a.slug}>
                  <Link href={communityPath(a.slug)} className={link}>
                    {a.name}: {a.job ?? "AC maintenance"} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-bg-soft py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Other emirates</h2>
          <ul className="mt-6 space-y-3">
            {EMIRATE_PAGES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className={link}>
                  {p.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Our services</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/ac-installation-dubai", label: "AC installation in Dubai" },
              { href: "/ac-maintenance-dubai", label: "AC maintenance in Dubai" },
              { href: "/ac-repair-dubai", label: "AC repair in Dubai" },
              { href: "/ac-amc-dubai", label: "AC annual maintenance contracts (AMC)" },
              { href: "/ac-duct-cleaning-dubai", label: "AC duct cleaning" },
              { href: "/services", label: "All HVAC services" },
            ].map((s) => (
              <li key={s.href}>
                <Link href={s.href} className={link}>
                  {s.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
