import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("garage-door-spring-replacement")!;

export const metadata: Metadata = {
  title: "Garage Door Spring Replacement",
  description:
    "Garage door spring replacement in Richmond, Vancouver, Burnaby, New Westminster & Metro Vancouver. DoorChamp safely replaces torsion and extension springs. Same-day. Licensed & insured.",
  alternates: { canonical: "/garage-door-spring-replacement/" },
};

export default function Page() {
  return <ServiceDetailPage service={service} />;
}
