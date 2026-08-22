import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("garage-door-spring-replacement")!;

export const metadata: Metadata = {
  title: "Garage Door Spring Replacement",
  description:
    "Broken garage door spring? DoorChamp safely diagnoses and replaces torsion and extension springs with the correct type and tension for your door.",
  alternates: { canonical: "/garage-door-spring-replacement/" },
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
