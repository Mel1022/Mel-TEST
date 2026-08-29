import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/services";

const service = getServiceBySlug("garage-door-opener-repair-installation")!;

export const metadata: Metadata = {
  title: "Garage Door Opener Repair & Installation",
  description:
    "Garage door opener not responding or straining? DoorChamp repairs and installs garage door openers, remotes, keypads, and safety sensors.",
  alternates: { canonical: "/garage-door-opener-repair-installation/" },
};

export default function Page() {
  return <ServiceDetailPage service={service} bgImage="/images/hero-champ-v4.jpg" />;
}
