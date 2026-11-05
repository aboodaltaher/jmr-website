import {
  COMPANY_FULL,
  COMPANY_LEGAL,
  EMAIL,
  PHONE,
  ADDRESS_LINE,
  ADDRESS_CITY,
  AREA_SERVED_SCHEMA,
} from "@/lib/company";

const SITE_URL = "https://agec.ae";

// Owner-provided public profiles for sameAs / hasMap.
const GBP_URL = "https://maps.app.goo.gl/NymgUk6cDcj8PRSL6";
const INSTAGRAM_URL = "https://www.instagram.com/agec_contracting";

/**
 * Site-wide Organization + LocalBusiness (HVACBusiness / GeneralContractor)
 * JSON-LD, rendered once in the root layout so it appears on every page.
 * NAP (name, address, phone) and geo coordinates are the confirmed public
 * details from the Google Business Profile.
 */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_FULL,
      legalName: COMPANY_LEGAL,
      alternateName: "AGEC Technical Services",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/agec-logo.png` },
      email: EMAIL,
      telephone: PHONE,
      // Google Business Profile + Instagram. TODO(owner): add LinkedIn if any.
      sameAs: [GBP_URL, INSTAGRAM_URL],
    },
    {
      "@type": ["HVACBusiness", "GeneralContractor"],
      "@id": `${SITE_URL}/#business`,
      name: "AGEC",
      legalName: COMPANY_LEGAL,
      alternateName: "AGEC Technical Services",
      description:
        "Dubai-based HVAC contractor providing design, installation, testing & commissioning, and maintenance for VRF, VRV, chillers, ducted splits, DX units, and ventilation systems across the UAE.",
      url: SITE_URL,
      logo: `${SITE_URL}/agec-logo.png`,
      image: `${SITE_URL}/agec-logo.png`,
      telephone: PHONE,
      email: EMAIL,
      priceRange: "$$",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS_LINE,
        addressLocality: ADDRESS_CITY,
        addressRegion: "Dubai",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.1431543,
        longitude: 55.2210657,
      },
      hasMap: GBP_URL,
      areaServed: AREA_SERVED_SCHEMA,
      // 24/7 availability (owner-confirmed): call & WhatsApp any time.
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
      sameAs: [GBP_URL, INSTAGRAM_URL],
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
