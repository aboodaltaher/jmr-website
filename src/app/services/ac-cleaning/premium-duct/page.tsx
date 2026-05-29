import type { Metadata } from "next";
import { AcCleaningLayout } from "@/components/AcCleaningLayout";

export const metadata: Metadata = {
  title: "Premium AC Duct Cleaning | AGEC",
  description:
    "Complete duct system cleaning in Dubai — supply and return grills, drain pipe flushing, deep coil cleaning, and full disinfection. Service report included.",
};

export default function PremiumDuctCleaning() {
  return (
    <AcCleaningLayout
      title="Premium AC Duct Cleaning"
      heroImage="https://images.unsplash.com/photo-1574334292321-4844f63aefef?auto=format&fit=crop&w=1600&q=80"
      intro="The most thorough cleaning package available. Complete duct system service for villas, offices, and commercial spaces where indoor air quality matters."
      included={[
        "Complete plastic covering and area protection",
        "Dismantle and deep clean of return and supply grills",
        "Detailed cleaning and disinfection of ducts",
        "Cleaning and flushing of drain tray and pipe",
        "Deep cleaning of coils, fan motor, and blower",
        "Cavity area cleaning",
        "Professional disinfection treatment",
        "Detailed service completion report",
      ]}
      whoItsFor={[
        "Villas with central AC or ducted systems",
        "Offices and commercial spaces requiring high air quality",
        "Clients preparing for tenant handover or sale",
        "Properties where occupants have allergies or respiratory concerns",
      ]}
    />
  );
}
