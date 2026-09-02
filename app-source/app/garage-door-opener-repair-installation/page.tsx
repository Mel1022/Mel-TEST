import type { Metadata } from "next";
import Link from "next/link";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import OpenerModelsSection from "@/components/OpenerModelsSection";
import { getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { IconPhone } from "@/components/Icons";

const service = getServiceBySlug("garage-door-opener-repair-installation")!;

export const metadata: Metadata = {
  title: "Garage Door Opener Repair & Installation",
  description:
    "Garage door opener not responding or straining? DoorChamp repairs and installs garage door openers, remotes, keypads, and safety sensors.",
  alternates: { canonical: "/garage-door-opener-repair-installation/" },
};

const OpenerHero = (
  <section style={{ position: "relative", overflow: "hidden", backgroundImage: "url('/images/opener-hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }} className="bg-navy-dark text-white">
    <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, background: "rgba(11,61,46,0.75)" }} />
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Same-Day Service · Richmond BC</p>
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
        Garage Door Opener Repair &amp; Installation
      </h1>
      <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
        An opener that hums, stalls, or won&apos;t respond to the remote usually points to a specific,
        findable cause. DoorChamp can diagnose and repair it — or install a new one.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href={siteConfig.phone.href}
          className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors"
        >
          <IconPhone className="w-4 h-4" />
          {siteConfig.phone.display}
        </a>
        <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
          Request Opener Service
        </Link>
      </div>
    </div>
  </section>
);

export default function Page() {
  return (
    <ServiceDetailPage
      service={service}
      heroSection={OpenerHero}
      pricingSection={<OpenerModelsSection />}
    />
  );
}
