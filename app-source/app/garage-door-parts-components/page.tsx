import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("garage-door-parts-components")!;

export const metadata: Metadata = {
  title: "Garage Door Parts & Components",
  description:
    "Garage door parts & component replacement in Richmond, Burnaby, Delta, Surrey & Metro Vancouver. Rollers, cables, hinges, tracks, and hardware replaced with quality parts. Same-day service.",
  alternates: { canonical: "/garage-door-parts-components/" },
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
