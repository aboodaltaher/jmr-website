import { buildMetadata } from "@/lib/metadata";
import Link from "next/link";
import { LocationPageLayout } from "@/components/LocationPageLayout";

import { ADDRESS_LINE, PHONE_DISPLAY } from "@/lib/company";
export const metadata = buildMetadata({
  title: "HVAC Contractor in Ajman | Commercial & Villas | AGEC",
  description:
    "Engineer-led HVAC contractor for Ajman — VRF installation, commissioning, maintenance and AMC for commercial buildings. Dubai-based, serving Ajman.",
  path: "/hvac-contractor-ajman",
});

export default function HvacContractorAjman() {
  return (
    <LocationPageLayout
      emirate="Ajman"
      slug="hvac-contractor-ajman"
      title="HVAC Contractor in Ajman"
      intro="Engineer-led HVAC installation, commissioning and maintenance for commercial and residential buildings across Ajman — delivered by AGEC's Dubai engineering team."
      body={
        <>
          <p>
            AGEC is an engineer-led HVAC contractor working across Ajman. We design,
            install, commission and maintain air-conditioning systems for commercial and
            residential buildings, with equipment sized to the building&apos;s real
            cooling load and commissioned against its design before handover.
          </p>
          <p>
            Our delivered work in Ajman includes the{" "}
            <Link href="/projects/basil-mall-ajman" className="font-semibold text-primary hover:underline">
              Basil Mall
            </Link>
            , where we handled the HVAC installation and commissioning of a 224-ton VRF
            system. A VRF system suits a multi-zone retail building like a mall, where
            shops, common areas and back-of-house all need independent, efficient
            temperature control from a shared system — and where commissioning matters,
            because the system has to balance across many zones at once.
          </p>
          <p>
            For Ajman&apos;s commercial buildings, malls and mixed-use developments, that
            kind of project is our core work: VRF/VRV and ducted systems, ductwork and
            air distribution, controls and zoning, and documented testing and
            commissioning so the building performs to specification. We also provide
            planned maintenance and annual maintenance contracts so the plant keeps
            running efficiently once it is handed over.
          </p>
          <p>
            Whether you are a developer, main contractor or building owner in Ajman, you
            work with qualified engineers who design, install and sign off the work —
            and who are available on call and WhatsApp around the clock for breakdowns.
          </p>
        </>
      }
      sections={[
              {
                      "h2": "Commercial and residential buildings in Ajman",
                      "paragraphs": [
                              "Ajman's buildings range from malls and mixed-use developments to residential towers and smaller commercial units. What suits each one:",
                              "For homes and smaller buildings in Ajman, typical systems are split and ducted DX and package units, with ventilation for warehouses and workshops."
                      ],
                      "bullets": [
                              "Malls and retail buildings: VRF or VRV, where shops, corridors and back-of-house each need independent temperature control from shared outdoor units, as on our Basil Mall project above.",
                              "Apartment towers: towers in areas such as Al Nuaimiya, Al Rashidiya and Emirates City usually run split or ducted DX, or VRF per apartment or floor, with outdoor units placed so they get enough airflow and can be reached for service.",
                              "Villas: in communities such as Al Zorah, Al Yasmeen and Al Helio, usually ducted or concealed split or DX systems sized room by room.",
                              "Offices and clinics: ducted or cassette units, with fresh air provided so occupants are not breathing recirculated air all day.",
                              "Industrial units: packaged or ducted units with warehouse and workshop ventilation sized for the heat the work produces."
                      ]
              },
              {
                      "h2": "Utility, approvals and NOCs in Ajman",
                      "paragraphs": [
                              "Which approvals apply depends on the building and the work. The utility is Etihad Water & Electricity (EtihadWE, formerly FEWA). Authority approvals are submitted by the project consultant, and AGEC supplies the HVAC drawings, calculations and documents they need. Authority and NOC fees are paid by the client at cost and listed separately on the quote, with no mark-up. Approval requirements change from time to time. We confirm the current requirements for your specific building at the survey stage."
                      ],
                      "bullets": [
                              "Ajman Municipality and Planning Department: building permits and modifications.",
                              "Ajman Civil Defence: fire and smoke systems and kitchen exhaust.",
                              "Building management NOC: apartments, for any change to AC units or outdoor unit location."
                      ]
              },
              {
                      "h2": "Why VRF suits multi-zone buildings, and what it asks of the installer",
                      "paragraphs": [
                              "A VRF system connects many indoor units to a shared outdoor system and varies the refrigerant flow to each, so every zone can run at its own temperature. For a building with many tenants or rooms that is efficient, but it is also more demanding to install: the refrigerant pipework has to be designed and sized carefully, the controls set up zone by zone, and the whole system commissioned and balanced before handover.",
                              "That is the work on the 224-ton Basil Mall system. Once the system is live, it needs maintenance that understands VRF: error-code history, filter and coil cleaning, and refrigerant checks. See [VRF and VRV systems](/services/vrf-vrv-systems) for installation and [VRF maintenance](/vrf-maintenance-dubai) for service."
                      ]
              },
              {
                      "h2": "Cooling load in Ajman: heat, humidity and exposed plant",
                      "paragraphs": [
                              "Ajman is hot and humid through the long summer, and in a coastal location the humidity is a large part of the load. Rooftop and balcony plant sits in direct sun and dust, so outdoor coils foul quickly and need regular cleaning. Sealed commercial buildings also need engineered [ventilation and fresh air](/services/ventilation-fresh-air), not just cooling, to keep carbon dioxide and humidity under control.",
                              "For plant you cannot afford to lose in summer, a planned [maintenance contract](/ac-amc-dubai#commercial-amc) is cheaper than a breakdown. Tell us the building and the systems it has, and we will propose a visit plan."
                      ]
              }
      ]}
      projects={[
        {
          slug: "basil-mall-ajman",
          name: "Basil Mall, Ajman",
          note: "HVAC installation & commissioning of a 224-ton VRF system for a multi-zone commercial mall.",
        },
      ]}
      services={[
        { href: "/services/vrf-vrv-systems", name: "VRF / VRV Systems" },
        { href: "/services/hvac-installation-dubai", name: "HVAC Installation" },
        { href: "/services/tab-testing-adjusting-balancing-dubai", name: "Testing & Commissioning" },
        { href: "/ac-amc-dubai", name: "Commercial Maintenance & AMC" },
        { href: "/services/chiller-maintenance-dubai", name: "Chiller Maintenance" },
        { href: "/services/tab-testing-adjusting-balancing-dubai", name: "Testing, Adjusting & Balancing" },
      ]}
      faq={[
        {
          q: "What kind of HVAC projects do you do in Ajman?",
          a: "Our delivered Ajman work is commercial: Basil Mall, where we installed and commissioned a 224-ton VRF system. We handle VRF/ducted installation, commissioning and maintenance for commercial and residential buildings in Ajman.",
        },
        {
          q: "Are you based in Ajman?",
          a: `No — AGEC is based in Dubai (${ADDRESS_LINE}) and delivers projects in Ajman from there. You deal with the same Dubai engineering team; we do not run a separate Ajman branch or local number.`,
        },
        {
          q: "Do you handle VRF systems for malls and commercial buildings?",
          a: "Yes. VRF/VRV is well suited to multi-zone commercial buildings, and we design, install and commission it — as on the 224-ton VRF system at Basil Mall in Ajman — then maintain it under a contract.",
        },
        {
          q: "Do I need an approval or NOC for AC work in Ajman?",
          a: "It depends on the building and the work. Apartments usually need a building management NOC, and larger modifications can need Ajman Municipality and Planning Department approval. Fire and smoke systems involve Ajman Civil Defence, and electrical load increases go through Etihad Water & Electricity (EtihadWE, formerly FEWA). Authority approvals are submitted by the project consultant, and AGEC supplies the HVAC drawings, calculations and documents they need. Authority and NOC fees are paid by the client at cost and listed separately on the quote, with no mark-up. Approval requirements change from time to time. We confirm the current requirements for your specific building at the survey stage.",
        },
        {
          q: "How do I get a quote for an Ajman project?",
          a: `Call or WhatsApp ${PHONE_DISPLAY}, or send your details through our quote form. Tell us the building and what you need and our engineers will respond — we reply on call and WhatsApp 24/7.`,
        },
        {"q": "Do you maintain VRF systems in Ajman?", "a": "Yes. We maintain VRF and VRV systems, including checking the error-code history, cleaning filters and coils, and testing refrigerant performance, with a service report after each visit. See our VRF maintenance page for what a visit covers."},
        {"q": "How is a VRF system commissioned?", "a": "After installation we pressure-test and evacuate the pipework, charge the system, set up the controls zone by zone, and measure the system running against its design. We document the results so the building owner has a record at handover."},
      ]}
    />
  );
}
