import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PartnerForm from "@/components/PartnerForm";
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

        </div>
      </section>

      <section id="apply" className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wide text-steel mb-2">Partner application</p>
            <h2 className="font-heading font-extrabold text-2xl text-navy">Apply to join our network.</h2>
            <p className="mt-3 text-steel leading-relaxed max-w-2xl">
              Tell us about your business and what you can do. We review every application and reach out personally — most within 2–3 business days. There&apos;s no cost to apply, and the more detail you give us, the faster we can match you with work.
            </p>
          </div>
          <PartnerForm />
        </div>
      </section>
    </>
  );
}
