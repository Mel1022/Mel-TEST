import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "New Commercial Doors Richmond BC | DoorChamp",
  description:
    "Insulated sectional, full-view aluminum, and roll-up steel doors for warehouses, loading docks, and commercial facilities. Free Richmond site visit. Licensed, insured, WCB compliant.",
  alternates: { canonical: "/commercial-new-doors/" },
};

const doorPickTypes = [
  {
    title: "Insulated sectional",
    body: "9' to 16' wide. Heated warehouses, food production, climate-sensitive bays.",
  },
  {
    title: "Full-view aluminum",
    body: "Floor-to-ceiling dominant sectional. Showrooms, auto bays, breweries.",
  },
  {
    title: "Sheet roll-up",
    body: "Self-storage, low-clearance bays, light industrial. High cycle, low maintenance.",
  },
  {
    title: "High-lift & vertical-lift",
    body: "For bays with higher ceilings and rack systems. Custom mast engineering.",
  },
];

const doorTypes = [
  {
    title: "Sectional commercial doors",
    body: "Heavy-gauge insulated steel panels. 1.25\" to 3\" thickness, R7 to R20. Suitable for warehouses, automotive bays, loading docks, and most commercial overhead applications. Matched with a UL 325-approved operator, sized and engineered to your door's requirements.",
  },
  {
    title: "Sliding steel doors (roll-up)",
    body: "Coiled overhead strategy — smaller header requirement, common for retail service bays, security doors, and auto storage. Welded galvanized steel, perforated for ventilation, or insulated. Used in auto shops, showrooms, and commercial service bays throughout Richmond.",
  },
  {
    title: "High-speed doors",
    body: "For operations where door cycle time directly affects throughput — cold storage, logistics hubs, food processing, manufacturing. Open at 60+ inches per second, close automatically after vehicle passes through. More expensive than alternatives; lower lifetime energy and HVAC costs.",
  },
  {
    title: "Insulated & thermal-rated doors",
    body: "For warehouses with heated or refrigerated spaces, insulation is often a code-level requirement. R-12 to R-30, thermal break frames, high-performance weather seals. Particularly relevant for food and beverage facilities along the East Richmond corridor.",
  },
  {
    title: "Fire-rated doors",
    body: "Required by code in many commercial applications — between separate fire areas, at certain warehouse partitions, and in multi-tenant buildings. We install UL-listed fire-rated rolling doors with proper glazing, load lines, and inspection-ready documentation.",
  },
];

const included = [
  "On-site assessment and detailed written specifications",
  "Engineering coordination where required (wind load calculations, structural review)",
  "Permit pulling on your behalf with the City of Richmond",
  "Removal and disposal of the existing door (we handle the whole thing)",
  "Full installation: door, tracks, springs, operator, safety hardware, weather seals",
  "Operator sized to the door weight and cycle count of your operation",
  "Photo-eye sensors, edge sensors, and loop detectors as required by code",
  "Final commissioning and operational testing across full cycle range",
  "Operator and access control programming",
  "Documentation package: warranty, engineering certs, manufacturer specs, inspection-ready paperwork",
  "5-year written warranty on installation (in addition to any manufacturer/product warranty)",
];

const processSteps = [
  {
    num: "01",
    title: "Site visit & specifications",
    body: "We meet on site, measure, review your operational requirements, discuss insulation and cycle-count needs, and document everything required for engineering and permitting.",
  },
  {
    num: "02",
    title: "Proposal & permits",
    body: "Detailed written proposal with itemized pricing, lead time, and installation schedule. Once approved, we order the door and pull permits with the City of Richmond.",
  },
  {
    num: "03",
    title: "Installation & commissioning",
    body: "Installation scheduled around your operations — typically after-hours or on weekends for active sites. Full commissioning, programming, and documentation before you sign off.",
  },
];

const faqs = [
  {
    q: "Why does a new commercial door cost what it does? It only took like 2 seconds.",
    a: "Commercial doors are engineered to spec — the price reflects wind load calculations, engineering documents, permit coordination, UL-rated hardware, and an operator sized to your actual cycle count. A mis-specified door fails early, fails inspection, or voids your warranty. You're paying for the right install, not clock time.",
  },
  {
    q: "How long is the lead time on a commercial door?",
    a: "It depends on the door type and whether it's a stock size or custom. Standard sectional steel doors typically run 2–4 weeks from order. Custom sizes, specialty glazing, and fire-rated doors can run 6–10 weeks. We'll give you a realistic lead time on the first call — not a number to win the quote.",
  },
  {
    q: "Do you carry manufacturer-grade insulated doors?",
    a: "Yes. We install insulated sectional doors from Door Craft, CHI, Garaga, and Richards-Wilcox — all in commercial grades with R-values up to R-30. We'll match the insulation spec to your application and climate control requirements.",
  },
  {
    q: "Can you replace a door without shutting our operation down?",
    a: "Usually yes. We schedule commercial installations after-hours, on weekends, or during low-cycle windows wherever possible. For multi-bay operations, we typically replace one bay at a time so your operation stays running throughout. We'll plan the schedule around your production requirements from the start.",
  },
  {
    q: "Do you handle disposal of the old door?",
    a: "Yes. Removal and disposal of the existing door is included in every full installation. We remove the door, tracks, springs, and any old hardware — you don't need to arrange a bin or a separate crew.",
  },
];

export default function CommercialNewDoorsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/commercial-hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy-dark/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Commercial · Richmond BC</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            New commercial doors.
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
            Insulated sectional. Full-view aluminum. Roll-up steel. Free Richmond site visit.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href={siteConfig.phone.href} className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Pick the right door */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Door Types We Install</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-10">
            Pick the right door for the bay.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {doorPickTypes.map((d) => (
              <div key={d.title} className="rounded-card border border-steel/15 bg-white p-6">
                <h3 className="font-heading font-bold text-navy-dark text-base mb-2">{d.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineered not selected */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">New Commercial Doors</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark max-w-3xl leading-tight mb-6">
            A commercial door is engineered, not just selected.
          </h2>
          <div className="max-w-3xl space-y-4 text-steel leading-relaxed">
            <p>
              The right commercial door for your building depends on more than the size of the opening. Wind loads, fire ratings, insulation requirements, cycle counts, opening speed, security needs, and integrity all matter — and getting any one of them wrong shows up later as premature wear, failed inspections, or compliance issues.
            </p>
            <p>
              We work through the full specification with you before quoting. Where engineering documentation is required for permitting — often the case for new construction or major renovations — we coordinate with structural engineers and the City of Richmond on your behalf so you&apos;re not chasing paperwork.
            </p>
          </div>
        </div>
      </section>

      {/* Door types detail */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: "url('/images/commercial-door-types-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy-dark/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Door Types</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-10">
            Commercial door types we install.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {doorTypes.map((d, i) => (
              <div
                key={d.title}
                className={`rounded-card border border-white/10 bg-white/10 backdrop-blur-sm p-6${i === doorTypes.length - 1 && doorTypes.length % 3 === 2 ? " sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
              >
                <h3 className="font-heading font-bold text-white text-base mb-2">{d.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">What&apos;s Included</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            What&apos;s included in a commercial installation.
          </h2>
          <ul className="space-y-3 max-w-3xl">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold flex items-center justify-center mt-0.5">
                  <IconCheck className="w-3 h-3 text-navy-dark" />
                </span>
                <span className="text-sm text-steel leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Scheduling */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Scheduling</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark max-w-3xl leading-tight mb-6">
            Scheduled around your operations.
          </h2>
          <div className="max-w-3xl space-y-4 text-steel leading-relaxed">
            <p>
              We understand that taking a commercial door out of service for replacement means slowing or stopping a part of your operation. Wherever possible, we schedule commercial installations <strong className="text-navy-dark">after-hours, on weekends, or during low-cycle windows</strong> so you aren&apos;t forced to choose between getting the work done and getting the day&apos;s work done.
            </p>
            <p>
              For phased installations across multiple bays, we&apos;ll typically replace one bay at a time so you keep operational capacity throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Manufacturers</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-10">
            Brands we install commercially.
          </h2>

          <div className="space-y-8">
            {/* Sectional doors */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-steel mb-4">Sectional Doors</p>
              <div className="flex flex-wrap gap-3">
                {["Door Craft", "Garaga", "Richards-Wilcox", "CHI"].map((b) => (
                  <div key={b} className="flex items-center justify-center rounded-card border-2 border-navy-dark/15 bg-surface px-6 py-4 min-w-[140px]">
                    <span className="font-heading font-extrabold text-navy-dark text-sm tracking-tight">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialty doors */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-steel mb-4">Specialty & High-Speed Doors</p>
              <div className="flex flex-wrap gap-3">
                {["Rytec", "Hörmann"].map((b) => (
                  <div key={b} className="flex items-center justify-center rounded-card border-2 border-navy-dark/15 bg-surface px-6 py-4 min-w-[140px]">
                    <span className="font-heading font-extrabold text-navy-dark text-sm tracking-tight">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operators */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-steel mb-4">Commercial Operators & Gate</p>
              <div className="flex flex-wrap gap-3">
                {["LiftMaster Commercial", "MySecurity"].map((b) => (
                  <div key={b} className="flex items-center justify-center rounded-card border-2 border-navy-dark/15 bg-surface px-6 py-4 min-w-[140px]">
                    <span className="font-heading font-extrabold text-navy-dark text-sm tracking-tight">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Process</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-10">
            How a commercial door project works.
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            {processSteps.map((step) => (
              <div key={step.num}>
                <p className="text-gold font-heading font-extrabold text-3xl mb-3">{step.num}</p>
                <h3 className="font-heading font-bold text-white text-base mb-3">{step.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors"
            >
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors"
            >
              Request a Site Visit
            </Link>
          </div>
          <p className="mt-6 text-white/50 text-xs max-w-2xl leading-relaxed">
            Commercial-door pricing varies dramatically based on door type, size, insulation, operator specifications, and access integration. Every commercial project starts with an on-site assessment and written proposal — no ballpark over the phone.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Common Questions</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            About new commercial doors.
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-gold font-bold uppercase tracking-widest text-xs mb-4">Call the Champ</p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-3">
            Same family. Same number.<br />Same Richmond crew.
          </h2>
          <p className="text-white/70 text-base mb-8">
            Whether it&apos;s an emergency this morning or a project for next month.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors"
            >
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
