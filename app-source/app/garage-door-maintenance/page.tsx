import type { Metadata } from "next";
import Link from "next/link";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { IconPhone } from "@/components/Icons";

const service = getServiceBySlug("garage-door-maintenance")!;

export const metadata: Metadata = {
  title: "Garage Door Maintenance",
  description:
    "Routine garage door maintenance from DoorChamp catches worn parts early, keeping your door quieter, smoother, and more reliable.",
  alternates: { canonical: "/garage-door-maintenance/" },
};

const MaintenanceHero = (
  <section style={{ position: "relative", overflow: "hidden" }} className="bg-navy-dark text-white">
    <img
      src="/images/maintenance-hero-bg.png"
      alt=""
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
    />
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(11,61,46,0.78)" }} />
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Same-Day Service · Richmond BC</p>
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
        Keep Your Garage Door Working the Way It Should.
      </h1>
      <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
        Garage doors are mechanical systems with parts that wear over time. Regular
        maintenance helps catch issues early, while they&apos;re still small.
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
          Request Maintenance Service
        </Link>
      </div>
    </div>
  </section>
);

export default function Page() {
  return (
    <ServiceDetailPage
      service={service}
      heroSection={MaintenanceHero}
    />
  );
}
