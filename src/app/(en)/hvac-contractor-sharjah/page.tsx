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
      sections={[
              {
                      "h2": "Buildings we are typically asked about in Sharjah",
                      "paragraphs": [
                              "Sharjah has a varied building stock, and the right cooling system depends on which kind of building you have. This is guidance on what usually suits each type, not a list of clients.",
                              "Typical systems in Sharjah are split and ducted DX, package units, chilled-water FCUs in towers, and ventilation for warehouses."
                      ],
                      "bullets": [
                              "Private villas and townhouses: usually a ducted or concealed split or DX system, sized room by room, so the ceiling stays clean and each zone has its own control. This is the kind of work in our two Sharjah villa projects above.",
                              "Apartment towers: older and mid-rise towers in areas such as Al Nahda, Al Majaz, Al Khan and Al Taawun usually run split or ducted DX, and the larger towers often use chilled-water fan coil units (FCUs). Systems are sized per apartment or per floor, with drainage and condensate routes planned before the ceilings are closed.",
                              "New master-planned communities: villas and townhouses where the developer sets the rules, so the outdoor unit position and the NOC are settled before any equipment is ordered.",
                              "Shops, offices and showrooms: cassette or ducted units chosen around the ceiling void and the opening hours, with fresh air treated so the space does not feel stuffy.",
                              "Warehouses and workshops in the industrial areas: packaged or ducted units with ventilation matched to the heat from equipment and stored goods. This is a different design from a home, and we size it from the actual load."
                      ]
              },
              {
                      "h2": "Utility, approvals and NOCs in Sharjah",
                      "paragraphs": [
                              "Which approvals apply depends on the building and the work. For new connections and load increases, the utility is SEWA (Sharjah Electricity, Water and Gas Authority). We prepare the drawings and submit and follow up on approvals for you. Authority and NOC fees are paid by the client at cost and listed separately on the quote, with no mark-up. Approval requirements change from time to time. We confirm the current requirements for your specific building at the survey stage."
                      ],
                      "bullets": [
                              "Sharjah Municipality: building permits and modifications.",
                              "Sharjah Civil Defence: fire, smoke and kitchen exhaust systems.",
                              "Building management or developer NOC: apartments and gated communities, for example Aljada and Tilal City."
                      ]
              },
              {
                      "h2": "Cooling load in Sharjah: heat, humidity and dust",
                      "paragraphs": [
                              "Summer in Sharjah brings outdoor temperatures above 40°C for long stretches, with high humidity, especially near the coast. A cooling system has to remove heat and moisture at the same time. An undersized unit runs flat out and still leaves rooms sticky. An oversized one cools quickly, switches off and leaves humid air behind. That is why we size from a room-by-room heat load, not from a rule of thumb.",
                              "Dust is the second factor. Fine dust from the desert and from building work clogs filters and outdoor coils faster than most owners expect. A blocked coil raises running cost and shortens compressor life, so regular cleaning matters as much as the original design. Our [AC maintenance](/ac-maintenance-dubai) and [duct cleaning](/ac-duct-cleaning-dubai) work covers exactly this."
                      ]
              },
              {
                      "h2": "From enquiry to site visit in Sharjah",
                      "paragraphs": [
                              "AGEC works from Dubai, so you deal with one engineering team for Sharjah and Dubai alike. When you call or WhatsApp, tell us your area in Sharjah and the kind of property. We confirm when an engineer can attend and what to prepare; photos of the indoor units and the outdoor equipment help us arrive with the right parts.",
                              "If a unit has failed, see [AC repair](/ac-repair-dubai). If you want visits scheduled so nothing is missed, an [annual maintenance contract](/ac-amc-dubai) fixes the visit dates for the year and gives you a service report each time."
                      ]
              }
      ]}
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
          q: "Do I need an approval or NOC for AC work in Sharjah?",
          a: "It depends on the building and the work. Apartments and gated communities usually need a building management or developer NOC, and larger modifications can need a Sharjah Municipality permit. New connections or load increases go through SEWA, and fire, smoke or kitchen exhaust systems involve Sharjah Civil Defence. We prepare the drawings and submit and follow up on approvals for you. Authority and NOC fees are paid by the client at cost and listed separately on the quote, with no mark-up. Approval requirements change from time to time. We confirm the current requirements for your specific building at the survey stage.",
        },
        {
          q: "How do I get a quote for a Sharjah project?",
          a: `Call or WhatsApp ${PHONE_DISPLAY}, or send your details through our quote form. Tell us the property and what you need and our engineers will respond — we reply on call and WhatsApp 24/7.`,
        },
        {"q": "What type of AC suits a Sharjah villa?", "a": "It depends on the layout. For most villas we recommend a ducted or concealed split or DX system sized room by room, because it keeps the ceilings clean and lets each zone be controlled separately. Smaller villas or extensions may suit individual split units. Send us the plans or photos and an engineer will recommend one."},
        {"q": "Can you cool a warehouse or workshop in Sharjah?", "a": "Our published Sharjah projects are villas. For warehouses and workshops we design cooling and ventilation from the actual heat load of the space, equipment and stock. Send us the size, use and location of the unit and we will advise on the options and quote in writing."},
      ]}
    />
  );
}
