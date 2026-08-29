import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck, IconAlert } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Garage Door Spring Repair & Replacement in Richmond BC",
  description:
    "Broken garage door spring in Richmond? DoorChamp provides same-day torsion and extension spring repair. Licensed, insured, and WCB compliant. Call (778) 800-0769.",
  alternates: { canonical: "/garage-door-spring-repair/" },
};

const symptoms = [
  "Door suddenly refuses to open",
  "Loud bang from the garage (spring snapped)",
  "Door feels extremely heavy to lift manually",
  "Visible gap in the torsion spring coil",
  "Door opens 6 inches then stops",
  "Cables hanging loose or off their drums",
  "One side of door higher than the other",
  "Opener straining and making grinding sounds",
];

const springTypes = [
  {
    title: "Torsion Springs",
    body: "Mounted above the door on a metal rod. Most modern residential doors use one or two torsion springs. They store rotational energy to counterbalance the door's weight.",
  },
  {
    title: "Extension Springs",
    body: "Run parallel to the horizontal tracks on each side. Common on older and lighter doors. They stretch and contract as the door moves.",
  },
  {
    title: "High-Cycle Springs",
    body: "Premium torsion springs rated for 50,000+ cycles instead of the standard 10,000. Ideal for busy households or commercial applications.",
  },
];

export default function SpringRepairPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-dark text-white overflow-hidden">
        <img src="/images/spring-hero-bg.jpg" alt="" aria-hidden="true" className="page-hero-bg-img" />
        <div aria-hidden="true" className="page-hero-overlay" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Same-Day Service · Richmond BC</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Garage Door Spring Repair &amp; Replacement
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
            A broken spring is the #1 reason garage doors stop working. DoorChamp provides same-day
            torsion and extension spring service throughout Richmond and Metro Vancouver.
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
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Warning */}
      <section className="bg-amber-50 border-b border-amber-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-start gap-3">
            <IconAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 font-medium">
              <strong>Safety first:</strong> Garage door springs are under extreme tension — up to 300 lbs of stored force.
              Attempting DIY spring repair risks serious injury or death. Always call a licensed technician.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            Signs You Have a Broken Spring
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {symptoms.map((s) => (
              <div key={s} className="flex items-start gap-3 rounded-card bg-white p-4 border border-steel/10">
                <IconCheck className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-navy-dark">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spring Types */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            Types of Garage Door Springs We Service
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {springTypes.map((t) => (
              <div key={t.title} className="rounded-card bg-surface border border-steel/10 p-7">
                <h3 className="font-heading font-bold text-lg text-navy-dark mb-3">{t.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-5">
              Why Spring Repair Must Be Done by a Professional
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              Garage door torsion springs are wound to hold hundreds of pounds of force. When one
              snaps, the energy releases instantaneously — that&apos;s the bang you hear.
              Attempting to wind, adjust, or replace springs without the correct tools and training
              is one of the most dangerous DIY tasks around the home.
            </p>
            <p className="text-white/75 leading-relaxed">
              Our licensed technicians use proper winding bars and safety cables to replace springs
              correctly, set the right tension for your door weight, and inspect the full system
              so the same failure doesn&apos;t happen again.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Correct spring selection for your door weight",
              "Proper tension calibration — not just replaced, but tuned",
              "Safety cable installation to contain a future break",
              "Full system inspection: cables, drums, bearings",
              "Two-year labour warranty on all spring work",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Broken Spring in Richmond? We Can Fix It Today."
        body="Call now for same-day spring replacement. Torsion, extension, and high-cycle springs — all makes and models."
      />
    </>
  );
}
