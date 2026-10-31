import type { Metadata } from "next";
import {
  PenLine,
  Fan,
  Ruler,
  Gauge,
  FileText,
  Zap,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Fresh Air Ventilation & CO2 Testing Dubai | AGEC",
  description:
    "High CO2, stuffy rooms or failed fresh-air checks? We measure airflow and outdoor-air quantity, find the cause and fix it. Request an assessment.",
  alternates: { canonical: "/services/ventilation-fresh-air" },
  openGraph: {
    title: "Fresh Air Ventilation & CO2 Testing Dubai | AGEC",
    description:
      "High CO2, stuffy rooms or failed fresh-air checks? We measure airflow and outdoor-air quantity, find the cause and fix it. Request an assessment.",
    url: "https://agec.ae/services/ventilation-fresh-air",
    siteName: "AGEC",
    type: "website",
  },
};

export default function VentilationFreshAir() {
  return (
    <ServiceDetailLayout
      slug="services/ventilation-fresh-air"
      title="Fresh Air Ventilation & CO₂ Testing"
      heroImage="/projects/fresh-air-handling-unit-fahu-dubai-agec.jpg"
      heroImageAlt="Fresh Air Handling Unit (FAHU) installation by AGEC in Dubai commercial project"
      intro="Mechanical ventilation, fresh air handling, and exhaust systems engineered for Dubai's climate and indoor air quality requirements."
      overview={
        <>
          <p>
            Dubai&apos;s sealed, air-conditioned buildings create a specific
            ventilation challenge: without engineered fresh air supply, indoor
            air quality deteriorates rapidly. CO₂ levels rise, humidity becomes
            difficult to control, and occupants experience discomfort and reduced
            productivity. Mechanical ventilation systems solve this by
            introducing controlled quantities of filtered, treated outdoor air
            while exhausting stale air.
          </p>
          <p>
            The engineering challenge in Dubai is that outdoor air arrives at
            45°C+ and high humidity for much of the year. Introducing untreated
            fresh air directly into a space would overload the cooling system and
            create condensation problems. Fresh Air Handling Units (FAHUs) with
            proper cooling coils, filtration, and humidity control are essential
            for delivering ventilation air at acceptable conditions.
          </p>
          <p>
            AGEC designs and installs complete ventilation systems: fresh air
            supply, general exhaust, kitchen exhaust, toilet exhaust, parking
            garage ventilation, and smoke management systems. We size ductwork
            for proper velocity and pressure drop, select fans for the calculated
            system resistance, and balance every branch to deliver the specified
            airflow. All systems are designed to comply with ASHRAE 62.1, Dubai
            Municipality requirements, and Dubai Civil Defence codes.
          </p>
        </>
      }
      whenYouNeedIt={[
        "New building construction requiring complete fresh air and exhaust design",
        "Commercial kitchens needing make-up air systems and grease exhaust",
        "Basement parking garages requiring CO monitoring and ventilation",
        "Office fit-outs where fresh air supply is insufficient or poorly distributed",
        "Spaces with indoor air quality complaints — high CO₂, odor, or humidity issues",
        "Buildings requiring smoke ventilation or pressurization systems for civil defence approval",
      ]}
      whatWeDo={[
        {
          icon: PenLine,
          name: "Ventilation Design",
          description:
            "Fresh air quantity calculations per ASHRAE 62.1, exhaust system sizing, and ductwork layout with proper velocity and pressure drop analysis.",
        },
        {
          icon: Fan,
          name: "FAHU Installation",
          description:
            "Fresh Air Handling Unit selection, installation, and piping — including cooling coils, filters, and condensate drainage for Dubai's high-humidity outdoor air.",
        },
        {
          icon: Ruler,
          name: "Ductwork & Distribution",
          description:
            "Galvanized steel and pre-insulated duct fabrication and installation, diffuser and grille selection, and proper insulation to prevent condensation.",
        },
        {
          icon: Gauge,
          name: "Air Balancing",
          description:
            "Systematic measurement and adjustment of airflow at every branch, diffuser, and grille to match design specifications using calibrated instruments.",
        },
        {
          icon: FileText,
          name: "Code Compliance",
          description:
            "Design documentation meeting Dubai Municipality, ASHRAE, and Dubai Civil Defence requirements for ventilation, exhaust, and smoke management systems.",
        },
        {
          icon: Zap,
          name: "Energy Recovery",
          description:
            "Heat recovery wheel and plate heat exchanger systems that pre-cool incoming fresh air using exhaust air — reducing cooling energy by up to 40%.",
        },
      ]}
      whyAgec={[
        "Ventilation designs based on calculated outdoor air requirements, not arbitrary air change rates",
        "30+ HVAC projects across the UAE — restaurants, gyms, data centers, and commercial buildings",
        "ASHRAE 111 and SMACNA compliant ductwork installation and air balancing practices",
        "Full compliance documentation for Dubai Municipality, civil defence, and consultant sign-off",
      ]}
      faq={[
        {
          q: "Why are CO₂ levels rising in my office?",
          a: "CO₂ builds up when the fresh-air supply can't keep pace with the number of people in the space. Common reasons are an undersized or unbalanced fresh-air system, a fresh air handling unit not delivering its design airflow, closed or obstructed intake dampers, or air that is recirculated without enough outdoor air added. We measure CO₂ and the actual outdoor-air quantity to identify which applies.",
        },
        {
          q: "What causes poor fresh-air circulation?",
          a: "Usually ductwork that was never balanced to its design figures, a fresh-air fan or FAHU that wasn't commissioned, clogged filters, blocked diffusers or grilles, or simply no dedicated fresh-air provision for the occupancy. We trace the air path from intake to each room to find the restriction.",
        },
        {
          q: "How do you measure fresh air and CO₂?",
          a: "With calibrated instruments — CO₂ meters for the space, and an anemometer or flow hood to measure airflow at intakes, diffusers and grilles. We compare the delivered outdoor air against the ASHRAE 62.1 requirement for the room's use and occupancy.",
        },
        {
          q: "What does the fresh-air assessment report contain?",
          a: "Measured airflow by area, CO₂ readings, a comparison against the design and the applicable standard, the likely cause of any shortfall, and the recommended corrective actions — so you have a documented basis for the fix and for consultant or landlord sign-off.",
        },
      ]}
    />
  );
}
