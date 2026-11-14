import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { LocationPageLayout } from "@/components/LocationPageLayout";

import { ADDRESS_LINE, PHONE_DISPLAY } from "@/lib/company";
export const metadata = buildMetadata({
  title: "HVAC Contractor in Sharjah | AC Install & Service | AGEC",
  description:
    "Engineer-led HVAC contractor for Sharjah — installation, maintenance, repair and AMC for villas and buildings. Dubai-based, serving across Sharjah.",
  path: "/hvac-contractor-sharjah",
});

export default function HvacContractorSharjah() {
  return (
    <LocationPageLayout
      emirate="Sharjah"
      slug="hvac-contractor-sharjah"
      title="HVAC Contractor in Sharjah"
      intro="Engineer-led air-conditioning installation, maintenance and servicing for villas and buildings across Sharjah — delivered by AGEC's Dubai engineering team."
      body={
        <>
          <p>
            AGEC is an engineer-led HVAC contractor working across Sharjah, from
            large private villas to multi-floor residential buildings. Our approach
            is the same everywhere we work: cooling that is sized to the building&apos;s
            real heat load, installed cleanly, and commissioned so it actually holds
            temperature — not just switched on and left.
          </p>
          <p>
            We have delivered residential HVAC projects in Sharjah that reflect this.
            On the{" "}
            <Link href="/projects/double-twin-villa-sharjah" className="font-semibold text-primary hover:underline">
              Double Twin Villa G+1
            </Link>{" "}
            we carried out the installation and commissioning of a 60-ton DX system,
            delivering zoned comfort cooling across the villas. And one of our flagship
            residential projects, a{" "}
            <Link href="/projects/private-villa-sharjah-flagship" className="font-semibold text-primary hover:underline">
              B+G+1 private villa in Sharjah
            </Link>
            , was engineered for quiet, even, zoned comfort throughout the home with
            concealed ductwork and discreet air distribution.
          </p>
          <p>
            For Sharjah villas and homes, that typically means a ducted or concealed
            split or DX system, sized room by room, with the pipework, drainage and
            controls installed to a standard that keeps the system efficient for years.
            We also service and maintain existing systems — coil and duct cleaning, gas
            top-ups, repairs and annual maintenance contracts — so cooling stays reliable
            through Sharjah&apos;s long summer.
          </p>
          <p>
            Whether you are building a new villa, fitting out a building, or need an
            existing system serviced or rescued, you work with qualified engineers who
            design, install and sign off the work — and who are available on call and
            WhatsApp around the clock for breakdowns.
          </p>
        </>
      }
      projects={[
        {
          slug: "double-twin-villa-sharjah",
          name: "Double Twin Villa G+1",
          note: "HVAC installation & commissioning of a 60-ton DX system, zoned comfort cooling across the villas.",
        },
        {
          slug: "private-villa-sharjah-flagship",
          name: "B+G+1 Private Villa",
          note: "A flagship premium residential HVAC installation engineered for quiet, even, zoned comfort.",
        },
      ]}
      services={[
        { href: "/services/hvac-installation-dubai", name: "HVAC Installation" },
        { href: "/ac-maintenance-dubai", name: "AC Maintenance" },
        { href: "/ac-repair-dubai", name: "AC Repair" },
        { href: "/ac-amc-dubai", name: "Annual Maintenance Contracts (AMC)" },
        { href: "/ac-duct-cleaning-dubai", name: "AC Duct Cleaning" },
        { href: "/services/hvac-design", name: "HVAC Design & Heat Load" },
      ]}
      faq={[
        {
          q: "Do you work on villas in Sharjah?",
          a: "Yes. Our delivered Sharjah projects are residential villas, including a 60-ton DX installation at a Double Twin Villa G+1 and a flagship B+G+1 private villa. We handle installation, servicing, repair and AMCs for Sharjah homes.",
        },
        {
          q: "Are you based in Sharjah?",
          a: `No — AGEC is based in Dubai (${ADDRESS_LINE}) and delivers projects in Sharjah from there. You deal with the same Dubai engineering team; we do not run a separate Sharjah branch or local number.`,
        },
        {
          q: "What HVAC services do you offer in Sharjah?",
          a: "New installation and commissioning, AC maintenance and repair, coil and duct cleaning, annual maintenance contracts, and HVAC design and heat-load calculations — for villas and residential buildings.",
        },
        {
          q: "How do I get a quote for a Sharjah project?",
          a: `Call or WhatsApp ${PHONE_DISPLAY}, or send your details through our quote form. Tell us the property and what you need and our engineers will respond — we reply on call and WhatsApp 24/7.`,
        },
      ]}
    />
  );
}
