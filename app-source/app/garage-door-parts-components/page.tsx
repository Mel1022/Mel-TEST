import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("garage-door-parts-components")!;

export const metadata: Metadata = {
  title: "Garage Door Parts & Components",
  description:
    "Rollers, cables, hinges, tracks, and hardware replaced with quality parts suited to your garage door and opener.",
  alternates: { canonical: "/garage-door-parts-components/" },
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
