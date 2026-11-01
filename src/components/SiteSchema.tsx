import { GOOGLE_REVIEWS_URL } from "@/lib/reviews";

const SITE_URL = "https://agec.ae";

/**
 * Site-wide Organization + LocalBusiness (HVACBusiness / GeneralContractor)
 * JSON-LD, rendered once in the root layout so it appears on every page.
 * NAP uses the confirmed public details; geo coordinates are left as a
 * TODO(owner) until the exact licensed location is supplied.
 */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Altaher Ghabboun Engineering Contracting (AGEC)",
      alternateName: "AGEC Technical Services",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/agec-logo.png` },
      email: "a.altaher@agec.ae",
      telephone: "+971585575987",
      // sameAs: Google Business Profile. TODO(owner): add Instagram/LinkedIn if any.
      sameAs: [GOOGLE_REVIEWS_URL],
    },
    {
      "@type": ["HVACBusiness", "GeneralContractor"],
      "@id": `${SITE_URL}/#business`,
      name: "AGEC",
      alternateName: "AGEC Technical Services",
      description:
        "Dubai-based HVAC contractor providing design, installation, testing & commissioning, and maintenance for VRF, VRV, chillers, ducted splits, DX units, and ventilation systems across all seven emirates of the UAE.",
      url: SITE_URL,
      logo: `${SITE_URL}/agec-logo.png`,
      image: `${SITE_URL}/agec-logo.png`,
      telephone: "+971585575987",
      email: "a.altaher@agec.ae",
      priceRange: "$$",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        // TODO(owner): add the exact building/unit from the trade licence.
        streetAddress: "Al Quoz Industrial Area 1",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      // TODO(owner): add geo { latitude, longitude } once the exact location is confirmed.
      hasMap: GOOGLE_REVIEWS_URL,
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "City", name: "Abu Dhabi" },
        { "@type": "City", name: "Sharjah" },
        { "@type": "City", name: "Ajman" },
        { "@type": "City", name: "Umm Al Quwain" },
        { "@type": "City", name: "Ras Al Khaimah" },
        { "@type": "City", name: "Fujairah" },
      ],
      // Reflects the site's advertised 24/7 call & WhatsApp availability.
      // TODO(owner): confirm physical office hours if different from phone availability.
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      sameAs: [GOOGLE_REVIEWS_URL],
    },
  ],
};

export function SiteSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
