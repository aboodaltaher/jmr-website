import { business, sameAs, openingHoursSpecification } from "@/data/business";
import { AREA_SERVED_SCHEMA } from "@/lib/company";

const SITE_URL = business.url;

/**
 * Site-wide Organization + LocalBusiness (HVACBusiness / GeneralContractor)
 * JSON-LD, rendered once in the root layout so it appears on every page.
 * Everything here is read from src/data/business.ts so the markup always
 * matches the visible footer/contact details and the Google Business Profile.
 *
 * No review-rating markup on purpose: Google does not show stars for
 * self-served LocalBusiness reviews, and a stale count hurts trust. The rating
 * and count are shown on the page from business.reviews instead.
 */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: business.name,
      legalName: business.legalName,
      alternateName: business.alternateName,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/agec-logo.png` },
      email: business.email,
      telephone: business.phone.e164,
      sameAs: sameAs(),
    },
    {
      "@type": ["HVACBusiness", "GeneralContractor"],
      "@id": `${SITE_URL}/#business`,
      name: business.name,
      legalName: business.legalName,
      alternateName: business.alternateName,
      description:
        "Dubai-based HVAC contractor providing design, installation, testing & commissioning, and maintenance for VRF, VRV, chillers, ducted splits, DX units, and ventilation systems across the UAE.",
      url: SITE_URL,
      logo: `${SITE_URL}/agec-logo.png`,
      image: `${SITE_URL}/agec-logo.png`,
      telephone: business.phone.e164,
      email: business.email,
      priceRange: "$$",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.line,
        addressLocality: business.address.locality,
        addressRegion: business.address.region,
        addressCountry: business.address.countryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.lat,
        longitude: business.geo.lng,
      },
      hasMap: business.links.mapsView,
      areaServed: AREA_SERVED_SCHEMA,
      openingHoursSpecification: openingHoursSpecification(),
      sameAs: sameAs(),
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
