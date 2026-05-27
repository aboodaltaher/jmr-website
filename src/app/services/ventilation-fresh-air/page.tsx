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
  title: "Ventilation & Fresh Air Systems | JMR Technical Services",
  description:
    "Mechanical ventilation, fresh air handling units, and exhaust systems in Dubai. Designed and balanced to meet indoor air quality standards and municipality codes.",
};

export default function VentilationFreshAir() {
  return (
    <ServiceDetailLayout
      title="Ventilation & Fresh Air"
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
            JMR designs and installs complete ventilation systems: fresh air
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
      whyJmr={[
        "Ventilation designs based on calculated outdoor air requirements, not arbitrary air change rates",
        "30+ HVAC projects across the UAE — restaurants, gyms, data centers, and commercial buildings",
        "ASHRAE 111 and SMACNA compliant ductwork installation and air balancing practices",
        "Full compliance documentation for Dubai Municipality, civil defence, and consultant sign-off",
      ]}
    />
  );
}
