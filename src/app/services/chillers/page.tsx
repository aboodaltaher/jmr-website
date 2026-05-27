import type { Metadata } from "next";
import {
  PenLine,
  Droplets,
  Fan,
  Settings,
  Gauge,
  Calendar,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Chiller Systems | JMR Technical Services",
  description:
    "Air-cooled and water-cooled chiller installation, piping design, and commissioning in Dubai. Complete chiller plant engineering for commercial and industrial buildings.",
};

export default function Chillers() {
  return (
    <ServiceDetailLayout
      title="Chiller Systems"
      heroImage="https://images.unsplash.com/photo-1615309662243-70f6df917b59?auto=format&fit=crop&w=1600&q=80"
      intro="Air-cooled and water-cooled chiller plants for commercial and industrial cooling — designed, installed, and commissioned to specification."
      overview={
        <>
          <p>
            Chiller systems form the backbone of large-scale cooling in
            Dubai&apos;s commercial and industrial buildings. Whether air-cooled
            or water-cooled, a properly engineered chiller plant delivers
            centralized cooling through a chilled water distribution network —
            serving air handling units, fan coil units, and process cooling loads
            across the facility.
          </p>
          <p>
            In Dubai, air-cooled chillers must perform reliably at ambient
            temperatures exceeding 50°C. JMR factors in altitude, humidity,
            fouling allowances, and part-load performance when selecting
            equipment. For water-cooled systems, we coordinate cooling tower
            sizing, condenser water treatment, and pump head calculations to
            ensure the entire loop operates as designed under peak conditions.
          </p>
          <p>
            We provide end-to-end chiller system services: equipment selection
            and sizing, chilled water piping design, primary/secondary pumping
            schemes, cooling tower integration, and complete system
            commissioning. We work with Carrier, Trane, York, and Daikin to
            specify equipment matched to the building&apos;s actual load profile
            — not oversized based on rough estimates. Every chiller plant we
            install is documented with as-built drawings, operating procedures,
            and maintenance schedules.
          </p>
        </>
      }
      whenYouNeedIt={[
        "Commercial office buildings and business parks requiring centralized cooling",
        "Hotels and hospitality developments with high cooling diversity",
        "Shopping malls and retail centers with large common areas",
        "Industrial facilities and data centers with process cooling requirements",
        "Hospitals and healthcare facilities requiring precise temperature and humidity control",
        "Chiller replacement or upgrade projects in existing buildings",
      ]}
      whatWeDo={[
        {
          icon: PenLine,
          name: "Chiller Plant Design",
          description:
            "Load calculations, equipment selection, and piping layout for air-cooled and water-cooled configurations. Primary/secondary and variable primary pumping schemes.",
        },
        {
          icon: Droplets,
          name: "Piping & Pump Systems",
          description:
            "Chilled and condenser water piping, pump selection and sizing, hydraulic balancing, and expansion tank calculations.",
        },
        {
          icon: Fan,
          name: "Cooling Tower Integration",
          description:
            "Tower sizing, basin piping, water treatment systems, and condenser water loop commissioning for water-cooled plants.",
        },
        {
          icon: Settings,
          name: "BMS & Controls",
          description:
            "Chiller sequencing, lead/lag control, setpoint optimization, and building management system integration with trend logging.",
        },
        {
          icon: Gauge,
          name: "Commissioning",
          description:
            "Flow rate verification, temperature differential measurement, compressor performance testing, and full commissioning reports against design specifications.",
        },
        {
          icon: Calendar,
          name: "Maintenance & AMC",
          description:
            "Scheduled maintenance programs including refrigerant analysis, oil sampling, condenser and evaporator tube cleaning, and filter replacement.",
        },
      ]}
      whyJmr={[
        "Chiller selection based on actual Dubai operating conditions — peak ambient, altitude correction, and realistic part-load profiles",
        "30+ HVAC projects across the UAE including commercial buildings and data centers",
        "ASHRAE 111 and SMACNA compliant commissioning with calibrated instruments and documented results",
        "Ongoing AMC programs with quarterly inspections, performance trending, and 24/7 emergency response",
      ]}
    />
  );
}
