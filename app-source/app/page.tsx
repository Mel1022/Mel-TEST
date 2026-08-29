import type { Metadata } from "next";
import Link from "next/link";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import ServiceCarousel from "@/components/ServiceCarousel";
import ProblemsSection from "@/components/ProblemsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyCallTheChamp from "@/components/WhyCallTheChamp";
import FAQAccordion from "@/components/FAQAccordion";
import { IconPhone } from "@/components/Icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Richmond Garage Door Repair & Service | DoorChamp",
  description:
    "Same-day garage door repair, spring replacement, and opener service in Richmond BC. Family-owned since 2007. Licensed, insured & WCB compliant. Call (778) 800-0769.",
  alternates: { canonical: "/" },
};


const faqs = [
  { q: "How quickly can you get to me in Richmond?", a: "We offer same-day service throughout Richmond and Metro Vancouver. In most cases we can reach you within a few hours of your call." },
  { q: "Are you licensed and insured?", a: "Yes. DoorChamp is fully licensed, carries $5M in liability insurance, and is WCB compliant. We're happy to provide documentation on request." },
  { q: "How much does a garage door repair cost?", a: "Costs vary by what's needed — a spring replacement is different from a panel repair. We provide a clear quote before any work begins, with no surprises." },
  { q: "Do you service commercial garage doors?", a: "Absolutely. We handle commercial sectional doors, high-speed doors, loading docks, sliding gates, and full strata maintenance programs." },
  { q: "What brands of openers do you service?", a: "We work on all major brands including LiftMaster, Chamberlain, Genie, Craftsman, Marantec, and more." },
  { q: "Do you offer a warranty?", a: "Yes — every repair includes a two-year labour warranty. Parts are also covered by manufacturer warranty." },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO: single pre-composed image, text in left green area ─── */}
      <section className="hero-section" aria-label="Hero">

        {/* Pre-composed image: green on left baked in, sharp photo on right */}
        <img
          src="/images/hero-champ-v2.jpg"
          alt="DoorChamp technician servicing a garage door — DoorChamp logo on uniform, branded truck and ladder visible"
          className="hero-bg-img"
        />

        {/* Text overlay — sits inside the green left area of the image */}
        <div className="hero-inner">
          <div className="hero-text animate-fade-up">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <p className="text-[#4CAF80] font-bold uppercase tracking-[0.18em] text-xs sm:text-sm">
                Garage Door Service &amp; Repair
              </p>
              <span className="flex-1 max-w-[60px] h-px bg-[#4CAF80]/60" aria-hidden="true" />
            </div>

            {/* Headline — two-line hierarchy */}
            <h1 className="font-heading font-extrabold leading-[1.05]">
              <span className="block text-white" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2.4rem)" }}>
                When Your Garage Door Stops—
              </span>
              <span className="block text-white" style={{ fontSize: "clamp(2.8rem, 4.6vw, 4.6rem)", lineHeight: "1.0" }}>
                We Show Up.
              </span>
            </h1>

            {/* Supporting copy */}
            <p className="mt-5 text-white/80 text-base leading-relaxed animate-fade-up-delay-1">
              Fast, professional garage door service for Richmond homeowners and businesses.
            </p>

            {/* Brand statement */}
            <p className="mt-4 text-[#4CAF80] font-bold uppercase tracking-[0.2em] text-sm animate-fade-up-delay-1">
              Call the Champ.
            </p>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 animate-fade-up-delay-2">
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center justify-center gap-2 rounded-card bg-[#2E8B62] px-7 py-4 text-sm font-bold text-white hover:bg-[#1a7a58] transition-colors uppercase tracking-wide"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+17788000769"
                className="inline-flex items-center justify-center gap-2 rounded-card border-2 border-white/40 text-white px-7 py-4 text-sm font-bold hover:border-white hover:bg-white/10 transition-colors uppercase tracking-wide"
              >
                <IconPhone className="w-4 h-4" />
                Call Now
              </a>
            </div>

          </div>
        </div>

      </section>

      <TrustBadges />

      <ProblemsSection />

      {/* SERVICES CAROUSEL */}
      <section className="bg-white overflow-hidden">
        <div className="py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark">
              Garage Door Services in Richmond &amp; Metro Vancouver
            </h2>
            <p className="mt-3 text-steel">Residential, commercial, and strata — we do it all.</p>
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <ServiceCarousel />
          </div>
        </div>
      </section>

      {/* ABOUT / BRAND STORY */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">
              Family-Owned Since 2007
            </p>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
              Richmond&apos;s Garage Door Experts — For Nearly Two Decades.
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed">
              DoorChamp was built on the belief that homeowners and businesses in Richmond deserve
              straightforward, honest garage door service — not overselling, not guessing, not cutting corners.
            </p>
            <p className="mt-4 text-white/75 leading-relaxed">
              Since 2007, we&apos;ve served thousands of Richmond, Vancouver, and Metro Vancouver customers
              with the same commitment: diagnose it right, explain it clearly, fix it properly.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/about/"
                className="inline-flex items-center justify-center rounded-card bg-gold px-6 py-3 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors"
              >
                About DoorChamp
              </Link>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-card border-2 border-white/30 px-6 py-3 text-sm font-bold text-white hover:border-white transition-colors"
              >
                <IconPhone className="w-4 h-4" />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "2007", label: "Founded in Richmond" },
              { stat: "$5M", label: "Liability Coverage" },
              { stat: "2 Year", label: "Labour Warranty" },
              { stat: "WCB", label: "Compliant & Insured" },
            ].map((item) => (
              <div key={item.label} className="rounded-card bg-white/8 border border-white/10 p-6 text-center">
                <p className="font-heading font-extrabold text-3xl text-gold">{item.stat}</p>
                <p className="mt-1 text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksSection />

      <WhyCallTheChamp />

      {/* SERVICE AREAS CALLOUT */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Serving Richmond &amp; All Metro Vancouver
              </h2>
              <p className="mt-2 text-white/70 text-sm">
                Richmond · Vancouver · Burnaby · Delta · Surrey · New Westminster · Coquitlam · Ladner · Tsawwassen
              </p>
            </div>
            <Link
              href="/service-areas/"
              className="flex-shrink-0 inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-6 py-3 text-sm font-bold hover:border-white hover:bg-white/10 transition-colors"
            >
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark">
              Common Questions
            </h2>
          </div>
          <FAQAccordion faqs={faqs} />
          <p className="mt-8 text-center text-sm text-steel">
            More questions?{" "}
            <Link href="/faq/" className="text-navy font-semibold hover:underline">See our full FAQ</Link>
            {" "}or{" "}
            <a href={siteConfig.phone.href} className="text-navy font-semibold hover:underline">call us directly</a>.
          </p>
        </div>
      </section>

      <CTASection
        heading="Need Garage Door Help in Richmond? We're Ready."
        body="Same-day service available. Call now or request a quote online — we'll get back to you fast."
      />
    </>
  );
}
