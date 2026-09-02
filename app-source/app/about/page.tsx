import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { IconCheck, IconPhone } from "@/components/Icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About DoorChamp | Richmond's Trusted Garage Door Experts",
  description:
    "Family-owned since 2007, DoorChamp has served Richmond BC and Metro Vancouver for nearly two decades. Licensed, insured, WCB compliant. Learn our story.",
  alternates: { canonical: "/about/" },
};

const values = [
  { title: "Honest Assessment", body: "We tell you what you need — not what costs the most. Repairs that make sense for your situation." },
  { title: "Skilled Technicians", body: "Our team is trained, licensed, and WCB compliant. We take the craft seriously." },
  { title: "Quality Parts", body: "We use parts suited to your specific door and opener model — not the cheapest option." },
  { title: "Real Warranty", body: "Two-year labour warranty, backed by people who answer the phone in Richmond." },
  { title: "Transparent Pricing", body: "Clear quotes before any work starts. No surprise charges, no bait-and-switch." },
  { title: "Community Roots", body: "We've served the same Richmond community since 2007. Our reputation is everything." },
];

const credentials = [
  "Licensed & fully insured",
  "$5M general liability coverage",
  "WCB compliant on every job",
  "Family-owned since 2007",
  "Two-year labour warranty on all work",
  "Residential & commercial certified",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-dark text-white overflow-hidden">
        <img src="/images/about-hero-bg.png" alt="" aria-hidden="true" className="page-hero-bg-img" />
        <div aria-hidden="true" className="absolute inset-0" style={{ background: "rgba(11,61,46,0.78)" }} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Richmond BC · Since 2007</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            About DoorChamp
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
            We&apos;re Richmond&apos;s garage door specialists — family-owned, community-rooted,
            and committed to doing the job right the first time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
              Our Story
            </h2>
            <p className="text-steel leading-relaxed mb-4">
              DoorChamp was founded in Richmond, BC in 2007 with a simple premise: garage door
              service in Metro Vancouver deserved to be better. Homeowners were being oversold,
              given vague explanations, and charged for work they didn&apos;t need.
            </p>
            <p className="text-steel leading-relaxed mb-4">
              We built DoorChamp around three commitments that still guide every service call:
              diagnose the real problem, explain it clearly, and fix it with the right parts.
            </p>
            <p className="text-steel leading-relaxed mb-4">
              Nearly two decades later, we&apos;ve served thousands of Richmond homeowners and
              businesses — from emergency spring replacements to full commercial door programs
              for strata complexes and industrial facilities.
            </p>
            <p className="text-steel leading-relaxed">
              We&apos;re based at {siteConfig.address.line}. Every job we take on is backed by
              our two-year labour warranty, $5M liability coverage, and the knowledge that
              our customers can call us back if anything isn&apos;t right.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
              Our Credentials
            </h2>
            <ul className="space-y-3 mb-8">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <span className="text-steel">{c}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-card bg-surface border border-steel/10 p-6">
              <p className="text-sm font-semibold text-navy-dark mb-1">Questions or to schedule a visit:</p>
              <a href={siteConfig.phone.href} className="inline-flex items-center gap-2 text-navy font-bold hover:text-navy-light transition-colors">
                <IconPhone className="w-4 h-4" />
                {siteConfig.phone.display}
              </a>
              <p className="mt-1 text-sm text-steel">{siteConfig.hours} · {siteConfig.address.city}, BC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-10 text-center">
            How We Work
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-card bg-white border border-steel/10 p-7 shadow-card">
                <h3 className="font-heading font-bold text-navy-dark text-base mb-2">{v.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Work With Richmond's Garage Door Experts?"
        body="Call or request a quote. We'll get your door working right."
      />
    </>
  );
}
