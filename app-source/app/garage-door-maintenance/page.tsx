import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("garage-door-maintenance")!;

export const metadata: Metadata = {
  title: "Garage Door Maintenance",
  description:
    "Routine garage door maintenance from DoorChamp catches worn parts early, keeping your door quieter, smoother, and more reliable.",
  alternates: { canonical: "/garage-door-maintenance/" },
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
