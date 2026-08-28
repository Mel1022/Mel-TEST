import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("garage-door-repair")!;

export const metadata: Metadata = {
  title: "Garage Door Repair",
  description:
    "Professional garage door repair for doors that won't open, won't close, or are off track. DoorChamp diagnoses the real problem before recommending a fix.",
  alternates: { canonical: "/garage-door-repair/" },
};

export default function Page() {
  return <ServiceDetailPage service={service} bgImage="/images/repair-hero-bg.webp" />;
}
