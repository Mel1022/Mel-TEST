import { site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Schema() {
  const data = {
    "@context": "https://schema.org", "@type": "GarageDoorRepair", // LocalBusiness subtype
    name: site.name, url: site.url, telephone: site.phone.href.replace("tel:", ""), email: site.email,
    address: { "@type": "PostalAddress", streetAddress: site.address },
    areaServed: site.serviceAreas,
    openingHours: site.hours.map((h) => `${h.days} ${h.time}`),
    hasOfferCatalog: { "@type": "OfferCatalog", name: "Garage door services",
      itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, description: s.blurb, provider: { "@type": "LocalBusiness", name: site.name }, areaServed: site.serviceAreas } })) },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
