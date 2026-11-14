import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { LocationPageLayout } from "@/components/LocationPageLayout";

import { ADDRESS_LINE, PHONE_DISPLAY } from "@/lib/company";
export const metadata = buildMetadata({
  title: "HVAC Contractor in Abu Dhabi | Data Centre Cooling | AGEC",
  description:
    "Engineer-led HVAC contractor for Abu Dhabi — precision data-centre cooling, ventilation, commissioning and maintenance. Dubai-based, serving Abu Dhabi.",
  path: "/hvac-contractor-abu-dhabi",
});

export default function HvacContractorAbuDhabi() {
  return (
    <LocationPageLayout
      emirate="Abu Dhabi"
      slug="hvac-contractor-abu-dhabi"
      title="HVAC Contractor in Abu Dhabi"
      intro="Engineer-led HVAC for Abu Dhabi — precision data-centre cooling, ventilation, commissioning and maintenance, delivered by AGEC's Dubai engineering team."
      body={
        <>
          <p>
            AGEC is an engineer-led HVAC contractor working in Abu Dhabi, with delivered
            projects in the emirate&apos;s most demanding environment for cooling: data
            centres and server rooms, where temperature and airflow have to stay stable
            around the clock and downtime is not an option.
          </p>
          <p>
            In Masdar City we delivered precision cooling for the{" "}
            <Link href="/projects/mbz-ai-server-room-abu-dhabi" className="font-semibold text-primary hover:underline">
              MBZ-AI server room
            </Link>
            . Close-control cooling is engineered for the continuous, high-density heat
            load of server infrastructure, where stable temperature and airflow matter
            every hour of every day. In Musaffah we delivered precision cooling and
            ventilation for the{" "}
            <Link href="/projects/zain-solution-data-center-abu-dhabi" className="font-semibold text-primary hover:underline">
              Zain Solution data centre
            </Link>
            , engineered for the reliable, continuous operation that critical IT
            equipment depends on.
          </p>
          <p>
            That work calls for close-control cooling units, airflow management and
            containment for equipment, resilient design for continuous running, and
            commissioning for a 24/7 load. The same engineering discipline applies to
            any Abu Dhabi building: cooling sized to the real load, ventilation and fresh
            air to standard, and documented testing and commissioning before handover.
            Once a system is live, we keep it running with planned maintenance and
            annual contracts.
          </p>
          <p>
            Whether you run a data centre, a commercial building or a critical facility
            in Abu Dhabi, you work with qualified engineers who design, install and sign
            off the work — and who are available on call and WhatsApp around the clock
            for breakdowns.
          </p>
        </>
      }
      projects={[
        {
          slug: "mbz-ai-server-room-abu-dhabi",
          name: "MBZ-AI Server Room, Masdar City",
          note: "Precision (close-control) cooling engineered for the continuous, high-density heat load of AI server infrastructure.",
        },
        {
          slug: "zain-solution-data-center-abu-dhabi",
          name: "Zain Solution Data Center, Musaffah",
          note: "Precision cooling and ventilation engineered for continuous, reliable data-centre operation.",
        },
      ]}
      services={[
        { href: "/services/chiller-maintenance-dubai", name: "Chillers" },
        { href: "/services/chiller-maintenance-dubai", name: "Chiller Maintenance" },
        { href: "/services/ventilation-fresh-air", name: "Ventilation & Fresh Air" },
        { href: "/services/tab-testing-adjusting-balancing-dubai", name: "Testing & Commissioning" },
        { href: "/services/tab-testing-adjusting-balancing-dubai", name: "Testing, Adjusting & Balancing" },
        { href: "/ac-amc-dubai", name: "Commercial Maintenance & AMC" },
      ]}
      faq={[
        {
          q: "What HVAC projects have you delivered in Abu Dhabi?",
          a: "Both of our delivered Abu Dhabi projects are data-centre cooling: precision cooling for the MBZ-AI server room in Masdar City, and precision cooling and ventilation for the Zain Solution data centre in Musaffah.",
        },
        {
          q: "Do you do data-centre and server-room cooling?",
          a: "Yes — it is core work for us in Abu Dhabi. We deliver close-control (precision) cooling, airflow management, resilient design for continuous running, and commissioning for 24/7 loads.",
        },
        {
          q: "Are you based in Abu Dhabi?",
          a: `No — AGEC is based in Dubai (${ADDRESS_LINE}) and delivers projects in Abu Dhabi from there. You deal with the same Dubai engineering team; we do not run a separate Abu Dhabi branch or local number.`,
        },
        {
          q: "How do I get a quote for an Abu Dhabi project?",
          a: `Call or WhatsApp ${PHONE_DISPLAY}, or send your details through our quote form. Tell us the facility and what you need and our engineers will respond — we reply on call and WhatsApp 24/7.`,
        },
      ]}
    />
  );
}
