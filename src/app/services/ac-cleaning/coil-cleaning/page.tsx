import type { Metadata } from "next";
import { AcCleaningLayout } from "@/components/AcCleaningLayout";

export const metadata: Metadata = {
  title: "AC Coil Cleaning | AGEC",
  description:
    "Precision AC coil cleaning in Dubai — evaporator and condenser coils, fin straightening, disinfection, and pre/post-clean temperature measurements.",
  alternates: { canonical: "/services/ac-cleaning/coil-cleaning" },
  openGraph: {
    title: "AC Coil Cleaning | AGEC",
    description:
      "Precision AC coil cleaning in Dubai — evaporator and condenser coils, fin straightening, disinfection, and pre/post-clean temperature measurements.",
    url: "https://agec.ae/services/ac-cleaning/coil-cleaning",
    siteName: "AGEC",
    type: "website",
  },
};

export default function CoilCleaning() {
  return (
    <AcCleaningLayout
      title="AC Coil Cleaning"
      heroImage="https://images.unsplash.com/photo-1700124113583-81aa99ea2aa2?auto=format&fit=crop&w=1600&q=80"
      intro="Precision coil cleaning to restore heat transfer efficiency. Specifically targets the coils that do the cooling — the most impactful single-component service for system performance."
      included={[
        "Evaporator coil cleaning and treatment",
        "Condenser coil cleaning",
        "Fin straightening (where required)",
        "Coil disinfection",
        "Drain line flush",
        "Pre and post-clean temperature measurements",
        "Performance verification report",
        "Recommendations for system optimization",
      ]}
      whoItsFor={[
        "Systems with reduced cooling capacity",
        "Properties with high energy bills",
        "Routine performance maintenance",
        "Pre-summer system preparation",
      ]}
    />
  );
}
