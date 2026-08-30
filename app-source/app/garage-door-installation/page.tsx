import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { IconCheck, IconPhone } from "@/components/Icons";

const service = getServiceBySlug("garage-door-installation")!;

export const metadata: Metadata = {
  title: "Garage Door Installation",
  description:
    "Ready for a new garage door? DoorChamp helps you choose the right door for your home and installs it correctly, from opening to opener.",
  alternates: { canonical: "/garage-door-installation/" },
};

const INCLUDED = [
  "Removal & disposal of old door",
  "Spring & track installation",
  "Weather-stripping",
  "Finish details & hardware",
  "Two-year labour warranty",
];

const TIERS = [
  {
    tag: "Single Door",
    title: "Single Insulated Steel",
    subtitle: "Most Richmond homes",
    detail: "8’×7’ or 9’×7’",
    price: "$3,621",
    featured: false,
  },
  {
    tag: "Double Door",
    title: "Double-Wide Insulated Steel",
    subtitle: "Most attached garages",
    detail: "16’×7’",
    price: "$4,532",
    featured: true,
  },
  {
    tag: "Premium",
    title: "Carriage-House / Composite",
    subtitle: "Heritage homes & custom looks",
    detail: "Custom sizing available",
    price: "$7,241",
    featured: false,
  },
];

const PricingSection = (
  <section className="relative bg-navy-dark overflow-hidden">
    <img src="/images/installation-hero-bg.jpg" alt="" aria-hidden="true" className="page-hero-bg-img" />
    <div aria-hidden="true" className="absolute inset-0 bg-navy-dark/80" />
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">

      {/* Heading */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
          Honest Pricing. Three Tiers&nbsp;&mdash;&nbsp;Installed.
        </h2>
        <p className="text-white/70 text-sm leading-relaxed">
          Every price below is the all-in installed cost — no hidden labour fees, no disposal charges,
          no service-call markup. We confirm the price before any work begins.
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-3 gap-6 items-stretch">
        {TIERS.map((tier) => (
          <div
            key={tier.title}
            className={`flex flex-col rounded-card p-7 relative ${
              tier.featured
                ? "bg-navy-dark border border-navy-dark"
                : "bg-white border border-steel/10"
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy-dark text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </span>
            )}

            <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${tier.featured ? "text-white/50" : "text-steel"}`}>
              {tier.tag}
            </p>
            <h3 className={`font-heading font-extrabold text-xl mb-1 ${tier.featured ? "text-white" : "text-navy-dark"}`}>
              {tier.title}
            </h3>
            <p className={`text-sm font-semibold mb-1 ${tier.featured ? "text-gold" : "text-gold-dark"}`}>
              {tier.subtitle}
            </p>
            <p className={`text-xs mb-5 ${tier.featured ? "text-white/50" : "text-steel/70"}`}>
              {tier.detail}
            </p>

            <div className={`text-3xl font-heading font-extrabold mb-1 ${tier.featured ? "text-white" : "text-navy-dark"}`}>
              From {tier.price}
            </div>
            <p className={`text-xs mb-6 ${tier.featured ? "text-white/50" : "text-steel/70"}`}>installed</p>

            <ul className="space-y-3 flex-1">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <IconCheck className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.featured ? "text-gold" : "text-navy"}`} />
                  <span className={`text-sm leading-snug ${tier.featured ? "text-white/80" : "text-steel"}`}>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={siteConfig.phone.href}
              className={`mt-6 inline-flex items-center justify-center gap-2 rounded-card px-5 py-3 text-sm font-bold transition-colors ${
                tier.featured
                  ? "bg-gold text-navy-dark hover:bg-gold-dark hover:text-white"
                  : "border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white"
              }`}
            >
              <IconPhone className="w-4 h-4" />
              {siteConfig.phone.display}
            </a>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-white/45 max-w-xl mx-auto">
        Prices shown are starting-from estimates for standard residential openings.
        Structural work, non-standard sizes, or additional opener upgrades may affect the final price — confirmed in writing before work begins.
      </p>
    </div>
  </section>
);

export default function Page() {
  return (
    <ServiceDetailPage
      service={service}
      bgImage="/images/installation-hero-bg.jpg"
      pricingSection={PricingSection}
    />
  );
}
