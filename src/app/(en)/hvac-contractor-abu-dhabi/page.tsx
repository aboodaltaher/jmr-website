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
      sections={[
              {
                      "h2": "Critical and commercial facilities in Abu Dhabi",
                      "paragraphs": [
                              "Abu Dhabi's demanding cooling work is often in buildings where stable temperature is a business requirement. The main types, and how we approach each:",
                              "Typical systems in Abu Dhabi are VRF and ducted DX in villas, FCUs on district cooling in towers, and fresh air units."
                      ],
                      "bullets": [
                              "Data centres and server rooms: close-control (precision) cooling, airflow management and containment, designed for continuous running. This is our delivered work in Masdar City and Musaffah, shown above.",
                              "Commercial offices and towers: chilled-water or VRF systems with treated fresh air, commissioned to the design before handover.",
                              "Industrial and logistics buildings: ventilation and packaged cooling sized for the heat load of the activity and the building.",
                              "Apartment towers: in areas such as Al Reem and Al Raha, many towers run on district cooling, so the in-flat equipment is usually fan coil units (FCUs) fed from the district cooling supply.",
                              "Villas: in areas such as Khalifa City, Al Reef, Yas and Saadiyat, usually VRF or ducted DX systems sized room by room."
                      ]
              },
              {
                      "h2": "Utility, approvals and NOCs in Abu Dhabi",
                      "paragraphs": [
                              "Which approvals apply depends on the building and the work. The utility is TAQA Distribution (formerly ADDC), which merged with AADC in January 2025. Authority approvals are submitted by the project consultant, and AGEC supplies the HVAC drawings, calculations and documents they need. Authority and NOC fees are paid by the client at cost and listed separately on the quote, with no mark-up. Approval requirements change from time to time. We confirm the current requirements for your specific building at the survey stage."
                      ],
                      "bullets": [
                              "Department of Municipalities and Transport and the municipality: building permits.",
                              "Abu Dhabi Civil Defence: fire and smoke systems.",
                              "Estidama requirements: apply to new builds.",
                              "Master developer NOC: for communities from developers such as Aldar."
                      ]
              },
              {
                      "h2": "What precision cooling asks for",
                      "paragraphs": [
                              "A server room is not cooled like an office. The heat is concentrated in racks, it runs all day and all night, and a temperature drift or an airflow short-circuit shows up as equipment risk, not as discomfort. The design therefore starts from the equipment heat load, separates cold supply air from hot return air, and plans for resilience so that one failed unit does not take the room down.",
                              "Commissioning is the other half: the system is tested under load and the airflow checked at the equipment, not just at the cooling unit. Our [testing, adjusting and balancing](/services/tab-testing-adjusting-balancing-dubai) work and [air balancing](/air-balancing-dubai) service describe how we measure and document that."
                      ]
              },
              {
                      "h2": "Climate in Abu Dhabi, and keeping plant running",
                      "paragraphs": [
                              "Abu Dhabi combines high summer temperatures with coastal humidity, so cooling coils do a lot of dehumidification as well as cooling, and condensate drainage has to be designed with care. Fresh-air and ventilation systems bring in outdoor air at high temperature and humidity, so they need properly sized cooling coils; see [ventilation and fresh air](/services/ventilation-fresh-air).",
                              "Plant that cannot stop needs planned maintenance, not repair after the fact. We offer [chiller maintenance](/services/chiller-maintenance-dubai) and [commercial AMC](/ac-amc-dubai#commercial-amc), with service reports so you can see what was measured on every visit."
                      ]
              }
      ]}
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
          q: "Do I need an approval or NOC for AC work in Abu Dhabi?",
          a: "It depends on the building and the work. Building permits go through the Department of Municipalities and Transport or the municipality, fire and smoke systems involve Abu Dhabi Civil Defence, and new builds must meet Estidama requirements. Communities from master developers such as Aldar need a developer NOC, and electrical connections go through TAQA Distribution (formerly ADDC). Authority approvals are submitted by the project consultant, and AGEC supplies the HVAC drawings, calculations and documents they need. Authority and NOC fees are paid by the client at cost and listed separately on the quote, with no mark-up. Approval requirements change from time to time. We confirm the current requirements for your specific building at the survey stage.",
        },
        {
          q: "How do I get a quote for an Abu Dhabi project?",
          a: `Call or WhatsApp ${PHONE_DISPLAY}, or send your details through our quote form. Tell us the facility and what you need and our engineers will respond — we reply on call and WhatsApp 24/7.`,
        },
        {"q": "Do you maintain chillers in Abu Dhabi?", "a": "We install and maintain chillers; see our chiller maintenance page for what a service covers. Tell us the plant type, capacity and location and we will propose a visit plan and quote in writing."},
        {"q": "Can you cool a small server room?", "a": "Yes. A small server room still needs cooling designed for its equipment load, run continuously, and with a plan for what happens if the unit fails. Send us the room size, the equipment list or its power draw, and the building details, and an engineer will advise."},
      ]}
    />
  );
}
