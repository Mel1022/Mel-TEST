import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import InstallationPricing from "@/components/InstallationPricing";
import DoorCatalogueSection from "@/components/DoorCatalogueSection";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("garage-door-installation")!;

export const metadata: Metadata = {
  title: "Garage Door Installation",
  description:
    "Ready for a new garage door? DoorChamp helps you choose the right door for your home and installs it correctly, from opening to opener.",
  alternates: { canonical: "/garage-door-installation/" },
};

export default function Page() {
  return (
    <ServiceDetailPage
      service={service}
      bgImage="/images/installation-hero-bg.jpg"
      hideWhyPro
      pricingSection={
        <>
          <DoorCatalogueSection />
          <InstallationPricing />
        </>
      }
    />
  );
}
