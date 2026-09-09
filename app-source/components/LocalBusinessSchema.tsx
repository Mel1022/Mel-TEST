import { siteConfig } from "@/lib/site-config";

export default function LocalBusinessSchema() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: "DoorChamp Garage Services",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/DCLogo-v2.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone.display,
      contactType: "customer service",
      areaServed: "CA-BC",
      availableLanguage: "English",
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.google],
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "GarageDoorRepair",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: "DoorChamp Garage Services",
    alternateName: "DoorChamp",
    description:
      "Professional garage door repair, installation, opener service and maintenance in Richmond, BC. Fast, reliable service from DoorChamp.",
    url: siteConfig.url,
    telephone: siteConfig.phone.href.replace("tel:", ""),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postal,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.1374,
      longitude: -123.0638,
    },
    areaServed: [
      "Richmond", "Vancouver", "Burnaby", "Delta", "Surrey",
      "New Westminster", "Coquitlam", "Port Coquitlam", "Ladner", "Tsawwassen", "North Vancouver",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    priceRange: "$$",
    foundingDate: "2007",
    slogan: "When Your Door Needs a Champ.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Garage Door Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garage Door Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spring Repair & Replacement" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Opener Service & Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "New Door Installation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Garage Doors" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loading Dock Service" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sliding Gate Service" } },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
