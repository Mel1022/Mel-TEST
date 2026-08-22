import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Strata Garage Door Service in Richmond BC | DoorChamp",
  description:
    "Garage door service for strata complexes and multi-family properties in Richmond BC. Parkade doors, unit repairs, preventive maintenance programs. DoorChamp: (778) 800-0769.",
  alternates: { canonical: "/strata/" },
};

const services = [
  {
    title: "Parkade Sectional Doors",
    body: "Main parkade door repair, maintenance, and replacement. We handle high-cycle commercial doors in multi-family settings.",
  },
  {
    title: "Individual Unit Repairs",
    body: "Coordinating access for individual strata unit owners — springs, openers, panels, cables — with minimal disruption to neighbours.",
  },
  {
    title: "Preventive Maintenance Programs",
    body: "Scheduled annual or semi-annual servicing of all parkade and common-area doors. Reduces emergency callouts and extends equipment life.",
  },
  {
    title: "Sliding & Swing Gate Service",
    body: "Parkade entrance gate repair, operator replacement, and access control integration.",
  },
  {
    title: "Emergency Response",
    body: "A stuck parkade door affects every resident. We prioritize strata emergency calls for fast resolution.",
  },
  {
    title: "Documentation & Reporting",
    body: "Service records, maintenance logs, and annual inspection reports for strata council and property management records.",
  },
];

const benefits = [
  "Preferred rates for strata service agreements",
  "Single point of contact for all door-related issues",
  "Documented maintenance records for strata council",
  "WCB compliant technicians on every visit",
  "$5M liability insurance",
  "Service scheduling to minimise resident disruption",
  "Emergency response for parkade door failures",
  "Experience with all common strata door brands",
];

export default function StrataPage() {
  return (
    <>
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Multi-Family & Strata · Richmond BC</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Strata &amp; Multi-Family Garage Door Service
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
            DoorChamp provides dedicated garage door service for strata corporations and property
            managers in Richmond and Metro Vancouver — from individual unit repairs to full parkade
            preventive maintenance programs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href={siteConfig.phone.href} className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            Strata Door Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-card bg-white border border-steel/10 p-7 shadow-card">
                <h3 className="font-heading font-bold text-lg text-navy-dark mb-2">{s.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-5">
              Why Strata Councils &amp; Property Managers Choose DoorChamp
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              Managing a strata complex means juggling the needs of individual owners, council
              requirements, and common area maintenance — all while keeping costs predictable.
            </p>
            <p className="text-white/75 leading-relaxed">
              Our strata service program gives property managers a single, reliable contact for
              all garage door issues, with transparent pricing, documented records, and a
              maintenance schedule that prevents emergency failures before they happen.
            </p>
          </div>
          <ul className="space-y-3">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-white/85 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Managing a Strata in Richmond? Let&apos;s Talk."
        body="Request a quote for a strata service agreement or call to discuss your property's needs."
      />
    </>
  );
}
