import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SpringSymptoms from "@/components/SpringSymptoms";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck, IconAlert } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Garage Door Spring Repair & Replacement in Richmond BC",
  description:
    "Broken garage door spring in Richmond? DoorChamp provides same-day torsion and extension spring repair. Licensed, insured, and WCB compliant. Call (778) 800-0769.",
  alternates: { canonical: "/garage-door-spring-repair/" },
};


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
      <SpringSymptoms />

      {/* Flat-Rate Pricing */}
      <section className="relative bg-navy-dark overflow-hidden">
        <img src="/images/spring-pricing-bg.png" alt="" aria-hidden="true" className="page-hero-bg-img" />
        <div aria-hidden="true" className="absolute inset-0 bg-navy-dark/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-4">
              Flat-Rate Spring Repair. Pick the Option That Fits.
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              No service-call fee. No after-hours surcharge. No weekend or statutory holiday markup.
              No upselling on the truck — we confirm your flat-rate price before we start, never after.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 items-stretch">
            {/* Quick Fix */}
            <div className="flex flex-col rounded-card bg-white border border-steel/10 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-steel mb-1">The Quick Fix</p>
              <h3 className="font-heading font-extrabold text-xl text-navy-dark mb-1">Single Spring</h3>
              <p className="font-bold text-navy-dark text-2xl mt-1">$714 <span className="text-sm font-normal text-steel">for 1 · Oil-tempered</span></p>
              <p className="text-sm text-gold font-semibold mb-5 mt-1">Quick &amp; targeted</p>
              <ul className="space-y-3 flex-1">
                {[
                  "One oil-tempered torsion spring replaced",
                  "Standard 10,000-cycle spring",
                  "Tested & safety-checked before we leave",
                  "Two-year labour warranty",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <IconCheck className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-steel leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-steel/70 leading-relaxed">
                Best when only one spring is broken and the other is recent. If both are the same age, ask us — the second is usually months away from going.
              </p>
              <a
                href={siteConfig.phone.href}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-card border-2 border-navy-dark text-navy-dark px-5 py-3 text-sm font-bold hover:bg-navy-dark hover:text-white transition-colors"
              >
                <IconPhone className="w-4 h-4" />
                {siteConfig.phone.display}
              </a>
            </div>

            {/* Honest Pair — featured */}
            <div className="flex flex-col rounded-card bg-navy-dark border border-navy-dark p-7 relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy-dark text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">
                Most Homeowners Choose This
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">The Honest Pair</p>
              <h3 className="font-heading font-extrabold text-xl text-white mb-1">Both Springs</h3>
              <p className="font-bold text-white text-2xl mt-1">$827 <span className="text-sm font-normal text-white/70">for 2 · Oil-tempered · Same day</span></p>
              <p className="text-sm text-gold font-semibold mb-5 mt-1">Best value</p>
              <ul className="space-y-3 flex-1">
                {[
                  "Both oil-tempered torsion springs replaced as a matched pair",
                  "Standard 10,000-cycle springs",
                  "Free cable replacement",
                  "Free hinge & track lubrication",
                  "Free door balancing & tune-up",
                  "Tested & safety-checked before we leave",
                  "Two-year labour warranty",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-white/50 leading-relaxed">
                If one spring snapped, the other is the same age. Doing both now is cheaper than a second service call in 4–6 months.
              </p>
              <a
                href={siteConfig.phone.href}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-card bg-gold px-5 py-3 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors"
              >
                <IconPhone className="w-4 h-4" />
                {siteConfig.phone.display}
              </a>
            </div>

            {/* Forever Pair */}
            <div className="flex flex-col rounded-card bg-white border border-steel/10 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-steel mb-1">The Forever Pair</p>
              <h3 className="font-heading font-extrabold text-xl text-navy-dark mb-1">High-Cycle Pair</h3>
              <p className="text-sm text-gold font-semibold mb-5">Longest life</p>
              <ul className="space-y-3 flex-1">
                {[
                  "Both commercial-grade oil-tempered 25,000+ cycle springs",
                  "Free cable replacement",
                  "Free full preventive-maintenance service on the entire door",
                  "Free silicone quiet rollers (10-pack)",
                  "Free wireless keypad installed",
                  "Two-year labour warranty",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <IconCheck className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-steel leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-steel/70 leading-relaxed">
                For families who use the door 5–10+ times a day. Springs last 2–3× longer; quiet rollers stop the morning racket.
              </p>
              <a
                href={siteConfig.phone.href}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-card border-2 border-navy-dark text-navy-dark px-5 py-3 text-sm font-bold hover:bg-navy-dark hover:text-white transition-colors"
              >
                <IconPhone className="w-4 h-4" />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Professional */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
              Why Spring Repair Must Be Done by a Professional
            </h2>
            <p className="text-steel leading-relaxed mb-4">
              Garage door torsion springs are wound to hold hundreds of pounds of force. When one
              snaps, the energy releases instantaneously — that&apos;s the bang you hear.
              Attempting to wind, adjust, or replace springs without the correct tools and training
              is one of the most dangerous DIY tasks around the home.
            </p>
            <p className="text-steel leading-relaxed">
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
                <IconCheck className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                <span className="text-navy-dark">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Broken Spring in Richmond? We Can Fix It Today."
        body="Call now for same-day spring replacement. Torsion, extension, and high-cycle springs — all makes and models."
        tone="light"
      />
    </>
  );
}
