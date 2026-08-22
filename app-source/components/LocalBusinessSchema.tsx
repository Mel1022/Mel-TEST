import { siteConfig } from "@/lib/site-config";

// All values below are placeholders pulled from siteConfig and must be
// confirmed with real business details before this schema goes live.
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GarageDoorRepair",
    name: siteConfig.name,
    alternateName: `${siteConfig.name} ${siteConfig.descriptor}`,
    description:
      "Professional garage door repair, spring replacement, opener service, installation and maintenance.",
    url: siteConfig.url,
    telephone: "[PHONE NUMBER]",
    email: "[EMAIL ADDRESS]",
    address: {
      "@type": "PostalAddress",
      streetAddress: "[BUSINESS ADDRESS]",
    },
    areaServed: "[CONFIRMED SERVICE AREAS]",
    openingHours: "[BUSINESS HOURS]",
    slogan: siteConfig.tagline,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
