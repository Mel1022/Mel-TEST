import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Partner with DoorChamp",
  description:
    "Partner with DoorChamp for reliable garage door service. Property managers, contractors, and business owners — let's work together.",
  alternates: { canonical: "/partners/" },
};

const benefits = [
  {
    title: "Priority Scheduling",
    desc: "Partners get priority booking so your clients are never left waiting.",
  },
  {
    title: "Dedicated Account Support",
    desc: "One point of contact for all your service requests and follow-ups.",
  },
  {
    title: "Transparent Reporting",
    desc: "Clear job summaries and invoicing you can pass straight to your clients.",
  },
  {
    title: "Volume Pricing",
    desc: "Preferred rates for partners with ongoing or high-volume service needs.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Work With Us"
        headline="Become a DoorChamp Partner."
        support="Property managers, contractors, and businesses — partner with us for dependable garage door service your clients can count on."
        ctaLabel="Contact Us to Get Started"
        ctaHref="/contact/"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wide text-steel mb-3">Why Partner With Us</p>
            <h2 className="font-heading font-extrabold text-3xl text-navy">
              Built for professionals who need it done right.
            </h2>
            <p className="mt-4 text-steel leading-relaxed">
              Whether you manage a strata, run a construction company, or oversee a commercial property portfolio,
              DoorChamp provides the fast, reliable service your reputation depends on.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-card bg-surface border border-steel/15 p-6">
                <h3 className="font-heading font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-card bg-navy p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="font-heading font-bold text-white text-xl">Ready to get started?</h2>
              <p className="mt-2 text-white/70 text-sm">
                Reach out and we'll set up your partner account — usually within one business day.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-card hover:bg-gold-dark hover:text-white transition-colors whitespace-nowrap"
              >
                Contact Us
              </Link>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors whitespace-nowrap"
              >
                {siteConfig.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
