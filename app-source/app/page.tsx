import type { Metadata } from "next";
import Link from "next/link";
import TrustBadges from "@/components/TrustBadges";
import CTASection from "@/components/CTASection";
import ServiceCarousel from "@/components/ServiceCarousel";
import ProblemsSection from "@/components/ProblemsSection";
import FAQAccordion from "@/components/FAQAccordion";
import { IconPhone, IconCheck, IconWrench, IconSpring, IconOpener, IconInstall, IconMaintenance } from "@/components/Icons";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Richmond Garage Door Repair & Service | DoorChamp",
  description:
    "Same-day garage door repair, spring replacement, and opener service in Richmond BC. Family-owned since 2007. Licensed, insured & WCB compliant. Call (778) 800-0769.",
  alternates: { canonical: "/" },
};

const services = [
  {
    icon: <IconWrench className="w-7 h-7" />,
    title: "Garage Door Repair",
    body: "Same-day repair for broken panels, cables, rollers, tracks, and more. We fix it fast, we fix it right.",
    href: "/garage-door-repair/",
  },
  {
    icon: <IconSpring className="w-7 h-7" />,
    title: "Spring Repair & Replacement",
    body: "Torsion and extension spring service done safely by a licensed technician. Never attempt springs DIY.",
    href: "/garage-door-spring-repair/",
  },
  {
    icon: <IconOpener className="w-7 h-7" />,
    title: "Opener Service & Install",
    body: "LiftMaster, Chamberlain, Genie, and all major brands. Repair, reprogram, or upgrade your opener.",
    href: "/garage-door-openers/",
  },
  {
    icon: <IconInstall className="w-7 h-7" />,
    title: "New Door Installation",
    body: "Steel, aluminum, wood composite — we supply and install quality doors with full warranty.",
    href: "/garage-door-installation/",
  },
  {
    icon: <IconMaintenance className="w-7 h-7" />,
    title: "Maintenance & Tune-Up",
    body: "Annual servicing extends door life by years. We lubricate, adjust, balance, and inspect every component.",
    href: "/garage-door-maintenance/",
  },
  {
    icon: <IconWrench className="w-7 h-7" />,
    title: "Commercial & Strata",
    body: "Industrial doors, loading docks, sliding gates, and full strata management programs.",
    href: "/commercial/",
  },
];

const problems = [
  { title: "Door Won't Open or Close", body: "Could be a broken spring, dead opener, or sensor misalignment — we diagnose it on-site." },
  { title: "Loud Grinding or Banging", body: "Worn rollers, loose hardware, or a spring under stress. Don't ignore loud noises." },
  { title: "Door Off Its Track", body: "A derailed door is a safety hazard. Call immediately — don't try to force it back." },
  { title: "Broken or Bent Spring", body: "Spring failure is the #1 reason doors stop working. Requires professional service." },
  { title: "Opener Not Responding", body: "Dead batteries, lost programming, or a failed logic board. We handle all brands." },
  { title: "Slow or Uneven Movement", body: "Could be worn cables, a balance issue, or aging rollers. Early service prevents failure." },
  { title: "Door Reverses Before Closing", body: "Safety sensor misalignment or logic board issue. A quick fix that stops a frustrating cycle." },
  { title: "Sagging or Damaged Panel", body: "Cosmetic damage or structural compromise — we assess whether repair or replacement is best." },
];

const whyDoorChamp = [
  { title: "Same-Day Service", body: "We keep Richmond and Metro Vancouver covered 7 days a week with fast response times." },
  { title: "Family-Owned Since 2007", body: "Nearly two decades serving the same community. Our reputation is everything to us." },
  { title: "Licensed & Insured", body: "Fully licensed, $5M liability coverage, and WCB compliant for your complete protection." },
  { title: "Two-Year Labour Warranty", body: "We stand behind our work. Every repair includes a full two-year labour warranty." },
  { title: "Honest Recommendations", body: "We tell you what you need — not what costs the most. Transparent pricing, no surprises." },
  { title: "Quality Parts Only", body: "We use manufacturer-grade parts suited to your specific door and opener model." },
];

const steps = [
  { n: "1", title: "Call or Request a Quote", body: "Reach us at (778) 800-0769 or submit the online form. Tell us what's happening with your door." },
  { n: "2", title: "Same-Day Technician Visit", body: "A licensed technician arrives at your Richmond property, inspects the full system, and explains what's wrong." },
  { n: "3", title: "Repair Done Right", body: "We fix it with quality parts and back it with our two-year labour warranty. Job done." },
];

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

      {/* HOW IT WORKS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark">
              Getting Your Garage Door Fixed Is Simple.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.n} className="rounded-card bg-surface border border-steel/10 p-7">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-white font-heading font-extrabold text-lg">
                  {step.n}
                </span>
                <h3 className="mt-5 font-heading font-bold text-lg text-navy-dark">{step.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DOORCHAMP */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark">
              Why Richmond Homeowners Choose DoorChamp
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyDoorChamp.map((item) => (
              <div key={item.title} className="rounded-card bg-white p-6 shadow-card">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy/10 text-navy mb-4">
                  <IconCheck className="w-4 h-4" />
                </span>
                <h3 className="font-heading font-bold text-navy-dark text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
