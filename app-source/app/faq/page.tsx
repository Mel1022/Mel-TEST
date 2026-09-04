import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Garage Door FAQ | DoorChamp Richmond BC",
  description:
    "Answers to common garage door questions — repair costs, spring safety, opener brands, warranties, and more. DoorChamp serves Richmond BC and Metro Vancouver.",
  alternates: { canonical: "/faq/" },
};

const faqSections = [
  {
    title: "About DoorChamp",
    faqs: [
      { q: "Where is DoorChamp based?", a: "We're based at 12740 Trites Rd Unit 24B in Richmond, BC. We serve Richmond and all of Metro Vancouver." },
      { q: "How long have you been in business?", a: "DoorChamp has been serving Richmond and Metro Vancouver since 2007 — nearly two decades of family-owned, local service." },
      { q: "Are you licensed and insured?", a: "Yes. DoorChamp is fully licensed, carries $5M in liability insurance, and is WCB compliant. We're happy to provide documentation on request." },
      { q: "What are your hours?", a: "We operate Monday through Saturday, 7am to 8pm." },
    ],
  },
  {
    title: "Service & Repair",
    faqs: [
      { q: "How quickly can you come out?", a: "We offer same-day service throughout Richmond and Metro Vancouver. In most cases we can reach you within a few hours of your call." },
      { q: "Do you charge for a service call or estimate?", a: "Please call us at (778) 800-0769 to discuss your specific situation and current pricing." },
      { q: "Can you fix my door the same day you come out?", a: "In most cases, yes. Our technicians carry the most common parts — springs, cables, rollers, hardware — on the truck. We'll quote you before starting any work." },
      { q: "My door makes a loud noise but still works. Should I call?", a: "Yes. Grinding, scraping, or banging noises are early warning signs of failing components. Addressing them now is always less expensive than an emergency call after a failure." },
      { q: "Do you work on both single and double garage doors?", a: "Yes — all residential door sizes and configurations, including single, double, and oversized doors." },
    ],
  },
  {
    title: "Springs",
    faqs: [
      { q: "My spring broke. Is this dangerous?", a: "A broken spring itself is not dangerous, but attempting to operate the door is. The door will be extremely heavy without spring counterbalance. Call us for same-day service." },
      { q: "Can I replace my own spring?", a: "We strongly advise against it. Garage door springs are under extreme tension — up to 300 lbs of stored force. Improper handling causes serious injuries. Always use a licensed technician." },
      { q: "How long do springs last?", a: "Standard springs are rated for approximately 10,000 cycles (one cycle = door up + door down). For a door used 4 times daily, that's roughly 7 years. High-cycle springs rated for 50,000+ cycles are available." },
    ],
  },
  {
    title: "Openers",
    faqs: [
      { q: "What opener brands do you service?", a: "We service all major brands: LiftMaster, Chamberlain, Genie, Craftsman, Marantec, Linear, Overhead Door, Sommer, and more." },
      { q: "My opener remote stopped working. What should I try first?", a: "First, replace the battery. If that doesn't help, try reprogramming the remote (check your manual for instructions). If neither works, call us — it may be a logic board issue or antenna problem." },
      { q: "Can you add a smart phone app to my existing opener?", a: "In many cases, yes. Some older openers can be upgraded with a MyQ or similar smart hub. We'll assess your existing unit and recommend the best path." },
    ],
  },
  {
    title: "Costs & Warranty",
    faqs: [
      { q: "How much does a spring replacement cost?", a: "Spring replacement cost depends on the number and type of springs, and door size. We provide a clear quote before any work begins. Call (778) 800-0769 for current pricing." },
      { q: "Do you offer a warranty?", a: "Yes — every repair includes a two-year labour warranty. Parts are also covered by the manufacturer's warranty." },
      { q: "Do you take credit cards?", a: "Please call us to confirm current accepted payment methods." },
    ],
  },
  {
    title: "Commercial & Strata",
    faqs: [
      { q: "Do you service commercial garage doors?", a: "Yes. We handle commercial sectional doors, high-speed doors, fire-rated doors, loading docks, sliding gates, and strata parkade doors." },
      { q: "Do you offer maintenance programs for strata properties?", a: "Yes. We offer scheduled maintenance agreements for strata corporations and property managers — with service records, inspection reports, and preferred pricing." },
      { q: "Are you WCB compliant for commercial work?", a: "Yes, all DoorChamp technicians are WCB compliant, and we carry $5M in liability insurance for commercial projects." },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section
        className="relative text-white"
        style={{
          backgroundImage: "url('/images/faq-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy-dark/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white max-w-2xl leading-tight">
            Garage Door FAQ
          </h1>
          <p className="mt-4 text-white/75 text-lg max-w-2xl">
            Answers to the most common questions we get about garage door repair, springs, openers,
            commercial service, and more.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-12">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-navy-dark mb-6 pb-3 border-b border-steel/15">
                {section.title}
              </h2>
              <FAQAccordion faqs={section.faqs} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="text-steel">
            Didn&apos;t find your answer?{" "}
            <a href={siteConfig.phone.href} className="font-semibold text-navy hover:underline">
              Call us at {siteConfig.phone.display}
            </a>
            {" "}or{" "}
            <Link href="/contact/" className="font-semibold text-navy hover:underline">
              send us a message
            </Link>.
          </p>
        </div>
      </section>

      <CTASection
        heading="Ready to Get Your Door Fixed?"
        body="Same-day service in Richmond. Call now or request a free quote online."
        tone="navy"
      />
    </>
  );
}
