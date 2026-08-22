import { siteConfig } from "@/lib/site-config";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GarageDoorRepair",
    name: "DoorChamp Garage Door Service & Repair",
    alternateName: "DoorChamp",
    description:
      "Richmond BC's trusted garage door experts. Same-day repair, spring replacement, opener service, new door installation, commercial doors, loading docks, and sliding gates. Family-owned since 2007.",
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
      "New Westminster", "Coquitlam", "Port Coquitlam", "Ladner", "Tsawwassen",
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
    slogan: "Richmond's Trusted Garage Door Experts.",
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
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
