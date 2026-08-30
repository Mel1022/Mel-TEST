import Link from "next/link";
import PageHero from "./PageHero";
import CTASection from "./CTASection";
import FAQAccordion from "./FAQAccordion";
import TechnicianChecks from "./TechnicianChecks";
import { IconCheck } from "./Icons";
import type { Service } from "@/lib/services";

export default function ServiceDetailPage({ service, bgImage }: { service: Service; bgImage?: string }) {
  return (
    <>
      <PageHero
        eyebrow={service.shortName}
        headline={service.heroHeadline}
        support={service.heroSupport}
        ctaLabel={service.ctaLabel}
        safetyWarning={service.safetyWarning}
        bgImage={bgImage}
      />

      {/* Problem explanation */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy leading-tight">
            {service.problemHeading}
          </h2>
          <div className="mt-5 space-y-4">
            {service.problemBody.map((p, i) => (
              <p key={i} className="text-steel leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Service overview */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-heading font-bold text-xl text-navy">Service Overview</h3>
              <p className="mt-3 text-steel leading-relaxed">{service.summary}</p>
              <p className="mt-3 text-steel leading-relaxed">
                Every visit starts with a diagnosis, followed by a clear explanation of what we
                found and the recommended fix — before any work begins.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-navy">Common Symptoms</h3>
              <ul className="mt-3 space-y-2.5">
                {service.symptoms.map((symptom) => (
                  <li key={symptom} className="flex items-start gap-2.5 text-steel">
                    <IconCheck className="w-4 h-4 text-gold-dark flex-shrink-0 mt-1" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What the technician checks */}
      <TechnicianChecks checks={service.checks} />

      {/* Why professional service matters */}
      <section className="relative overflow-hidden bg-navy-dark">
        <img src="/images/why-pro-bg.png" alt="" aria-hidden="true" className="page-hero-bg-img" />
        <div aria-hidden="true" className="page-hero-overlay" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h3 className="font-heading font-bold text-xl text-white">
            Why Professional Service Matters
          </h3>
          <ul className="mt-6 space-y-3 text-left inline-block">
            {service.whyItMatters.map((line) => (
              <li key={line} className="flex items-start gap-3 text-white/80">
                <IconCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="font-heading font-bold text-xl text-navy text-center mb-8">
            {service.name} FAQ
          </h3>
          <FAQAccordion faqs={service.faqs} />
          <p className="mt-8 text-center text-sm text-steel">
            More questions? Visit our{" "}
            <Link href="/#faq" className="font-semibold text-navy underline hover:text-gold-dark">
              full FAQ
            </Link>{" "}
            or{" "}
            <Link href="/contact/" className="font-semibold text-navy underline hover:text-gold-dark">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>

      <CTASection
        heading={`Ready to Get Your Door ${service.slug === "garage-door-installation" ? "Installed" : "Fixed"}?`}
        body="Tell us what's going on and we'll help you figure out the next step."
        primaryLabel={service.ctaLabel}
      />
    </>
  );
}
