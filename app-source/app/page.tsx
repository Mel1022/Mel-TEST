import type { Metadata } from "next";
import Link from "next/link";
import TrustBadges from "@/components/TrustBadges";
import ProblemCard from "@/components/ProblemCard";
import ServiceCard from "@/components/ServiceCard";
import ChampCheck from "@/components/ChampCheck";
import CTASection from "@/components/CTASection";
import TestimonialCard from "@/components/TestimonialCard";
import FAQAccordion from "@/components/FAQAccordion";
import HeroIllustration from "@/components/HeroIllustration";
import { IconPhone, IconCheck } from "@/components/Icons";
import { commonProblems, services, generalFaqs } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Garage Door Service & Repair | DoorChamp",
  description:
    "Professional garage door repair, spring replacement, opener service, installation and maintenance. When your door needs a champ, call DoorChamp.",
  alternates: { canonical: "/" },
};

const whyChoose = [
  {
    title: "Professional Service",
    body: "From the first call to the final check, we treat your garage door system like the mechanical asset it is.",
  },
  {
    title: "Straightforward Recommendations",
    body: "We explain what we find and why we recommend it — so you can make an informed decision.",
  },
  {
    title: "Quality Parts",
    body: "We use parts suited to your specific door and opener, not a one-size-fits-all fix.",
  },
  {
    title: "Respect for Your Home",
    body: "Technicians who show up prepared and treat your property the way they'd want theirs treated.",
  },
  {
    title: "Reliable Communication",
    body: "Clear updates on what's wrong, what it takes to fix it, and what to expect next.",
  },
];

const steps = [
  {
    number: "1",
    title: "Tell Us What's Wrong",
    body: "Reach out by phone or request a quote online. Give us a quick rundown of what your door is doing.",
  },
  {
    number: "2",
    title: "We Diagnose the Problem",
    body: "A technician inspects the full system — not just the symptom — to find the actual cause.",
  },
  {
    number: "3",
    title: "We Get Your Door Working Again",
    body: "You get a clear recommendation and a repair done right, so the problem doesn't come right back.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold font-bold uppercase tracking-wide text-sm mb-4">
              Residential Garage Door Service
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-white leading-[1.08]">
              Garage Door Problems?
              <br />
              Call the Champ.
            </h1>
            <p className="mt-6 text-white/75 text-lg leading-relaxed max-w-lg">
              Fast, professional garage door repair and service from a team that knows how to get
              your door working right.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center justify-center rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-card hover:bg-gold-dark hover:text-white transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors"
              >
                <IconPhone className="w-4 h-4" />
                Call the Champ
              </a>
            </div>
            <p className="mt-5 text-sm text-white/50">{siteConfig.subTagline}</p>
          </div>

          <HeroIllustration className="w-full max-w-lg mx-auto rounded-card shadow-cardHover" />
        </div>
      </section>

      <TrustBadges />

      {/* PROBLEM SECTION */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
              Is Your Garage Door Giving You Trouble?
            </h2>
            <p className="mt-3 text-steel">
              Whatever it's doing, there's a reason. Here are the issues we see most often.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {commonProblems.map((problem) => (
              <ProblemCard key={problem.title} problem={problem} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
              Garage Door Services That Get the Job Done.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Not sure what's wrong? That's exactly what we're here for."
        body="Tell us what your door is doing and we'll help you figure out the next step."
        tone="light"
      />

      {/* BRAND STORY */}
      <section className="bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">
              Meet DoorChamp
            </p>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white leading-tight">
              Your Door. Our Expertise.
            </h2>
            <p className="mt-5 text-white/75 leading-relaxed">
              Your garage door is one of the largest moving systems in your home. When something
              goes wrong, you need someone who understands the problem — not someone who simply
              guesses.
            </p>
            <p className="mt-4 text-white/75 leading-relaxed">
              DoorChamp provides professional garage door repair, opener service, spring
              replacement, maintenance, and installation with straightforward recommendations and
              dependable service.
            </p>
            <Link
              href="/about/"
              className="mt-7 inline-flex items-center justify-center rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-card hover:bg-gold-dark hover:text-white transition-colors"
            >
              Meet DoorChamp
            </Link>
          </div>
          <div className="rounded-card bg-white/5 border border-white/10 p-8">
            <p className="font-heading font-bold text-gold text-sm uppercase tracking-wide mb-4">
              Diagnose. Explain. Fix.
            </p>
            <ul className="space-y-4">
              {["We inspect the full system, not just the symptom.", "We explain what we find in plain language.", "We recommend the repair that actually solves it."].map(
                (line) => (
                  <li key={line} className="flex items-start gap-3 text-white/85">
                    <IconCheck className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>{line}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
              Getting Your Door Fixed Is Simple.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="rounded-card bg-white border border-steel/15 p-7">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-gold font-heading font-extrabold">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading font-bold text-lg text-navy">{step.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DOORCHAMP */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
              Why Homeowners Choose DoorChamp
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyChoose.map((item) => (
              <div key={item.title} className="rounded-card bg-surface p-6">
                <h3 className="font-heading font-bold text-navy text-base">{item.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ChampCheck />

      {/* TESTIMONIALS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
              What Homeowners Are Saying
            </h2>
            <p className="mt-3 text-steel text-sm">
              Reviews below are placeholders and will be replaced with real customer feedback.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <TestimonialCard key={i} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-10">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
              Common Questions
            </h2>
          </div>
          <FAQAccordion faqs={generalFaqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        heading="Your Garage Door Should Work. Let's Make Sure It Does."
        body="Tell us what's going on and we'll help you figure out the next step."
      />
    </>
  );
}
