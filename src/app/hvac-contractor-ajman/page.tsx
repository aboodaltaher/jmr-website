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
              B+G+1+R Basil Mall
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
      projects={[
        {
          slug: "basil-mall-ajman",
          name: "B+G+1+R Basil Mall",
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
          a: "Our delivered Ajman work is commercial: the B+G+1+R Basil Mall, where we installed and commissioned a 224-ton VRF system. We handle VRF/ducted installation, commissioning and maintenance for commercial and residential buildings in Ajman.",
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
          q: "How do I get a quote for an Ajman project?",
          a: `Call or WhatsApp ${PHONE_DISPLAY}, or send your details through our quote form. Tell us the building and what you need and our engineers will respond — we reply on call and WhatsApp 24/7.`,
        },
      ]}
    />
  );
}
