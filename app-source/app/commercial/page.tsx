import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";
import { Accordion } from "./Accordion";

export const metadata: Metadata = {
  title: "Mandoor Service Richmond BC — Closer, Hinge, Fire Label | DoorChamp",
  description:
    "Commercial mandoor repair and installation in Richmond BC. Closers, hinges, seals, panic devices, fire-rated mandoors. ANSI A250.8 compliant. Same-day service. Call (778) 800-0769.",
  alternates: { canonical: "/commercial/" },
};

const pricingItems = [
  { label: "Single-door repair (callout)", price: "$189 callout + parts", note: "Closer · hinge · latch · seal · panic device", img: "/images/icon-mandoor-callout-wrench.jpg" },
  { label: "Whole-building inspection", price: "$489 flat (up to 10 doors)", note: "Every mandoor on the property · written report · code-violation log", img: "/images/icon-mandoor-building-inspection.jpg" },
  { label: "3–9 doors · Annual contract", price: "from $79/door/year", note: "One scheduled visit · 21-pt inspection · 10% off parts", img: "/images/icon-mandoor-annual-calendar.jpg" },
  { label: "10–20 doors · Bi-annual contract", price: "from $69/door/visit", note: "2 visits/year · code-compliance audit · 15% off parts", img: "/images/icon-mandoor-biannual.jpg" },
  { label: "21+ doors · Enterprise contract", price: "from $59/door/visit", note: "Quarterly visits · asset register · 25% off parts", img: "/images/icon-mandoor-enterprise.jpg" },
  { label: "New 36\"×80\" non-rated mandoor", price: "from $1,489 installed", note: "Standard frame · closer · weather seal · basic lever lock", img: "/images/icon-mandoor-new-standard.jpg" },
  { label: "New 90-min fire-rated mandoor", price: "from $2,189 installed", note: "Fire frame · fire-rated closer · panic device · label inspection", img: "/images/icon-mandoor-firerated.jpg" },
];

const whatWeFix = [
  { title: "Door closers", body: "LCN · Norton · Dorma · Sargent · Yale. Hydraulic adjustment, arm replacement, full closer swap. Speed and latch action set to ANSI A156.4." },
  { title: "Hinges & pivot sets", body: "Continuous hinges, standard butt hinges, pivot sets. Worn pin replacement, full hinge replacement, frame repair after hinge pull-out." },
  { title: "Latches & locksets", body: "Cylindrical, mortise, and exit-device latch bolts. Sticking latch, misaligned strike, broken cylinder or thumb-turn." },
  { title: "Door seals & sweeps", body: "Bottom sweeps, perimeter seals, astragals, intumescent strips. Air infiltration, smoke sealing, and draft control on all door types." },
  { title: "Panic devices & exit hardware", body: "Von Duprin · Detex · Yale · Sargent. Push-bar adjustment, dogging, latch retraction, full device replacement. ANSI A250.8 hardware on every truck." },
  { title: "Fire labels & compliance", body: "Peeling, missing, or painted-over fire labels are a code violation. We replace them with UL-listed labels and document the repair in a written report." },
  { title: "Door frames & closers", body: "Bent, twisted, or pulled-out frames repaired or replaced. We use steel frames with the correct fire rating for the assembly — no wood substitutions in rated openings." },
  { title: "Access control & electric strikes", body: "Electric strikes, magnetic locks, door position switches, and REX sensors. Coordination with your access control system or simple standalone keyed hardware." },
];

const mandoorTech = [
  {
    title: "What's a mandoor and why does it need service?",
    summary: "Any walk-through door in a commercial building — back doors, stairwells, mechanical rooms, fire exits.",
    body: "Every commercial building in Richmond has mandoors. Unlike an overhead door, a mandoor closes itself (via the door closer), latches automatically, and in rated assemblies must maintain a fire separation. That makes three things fail: the closer loses hydraulic fluid and stops pulling the door fully shut, the latch wears and stops engaging, and the door frame shifts so the door drags or won't seat.\n\nA mandoor wedged open with a block is a code violation, a fire hazard, and a security gap. We fix the root cause — not just the symptom.",
  },
  {
    title: "ANSI A250.8 — what it means and why it matters",
    summary: "The North American standard for steel door and frame construction. Non-compliant hardware can void your fire-rating.",
    body: "ANSI A250.8 specifies the construction grade of steel doors and frames:\n• Level 1: light commercial (interior, low-cycle)\n• Level 2: heavy commercial (standard warehouses, offices)\n• Level 3: extra heavy duty (high-traffic stairwells, industrial)\n• Level 4: maximum duty (extreme impact environments)\n\nA non-ANSI-rated replacement door installed in a fire-rated opening voids the fire assembly. We carry ANSI A250.8 compliant hardware on every truck and specify the correct grade for the opening.",
  },
  {
    title: "Fire-rated mandoors — what BC Fire Code requires",
    summary: "Rated assemblies (door + frame + closer + hardware) must be UL-listed and maintained. Annual inspection is required.",
    body: "A fire-rated mandoor is a complete assembly — the door leaf, frame, hinges, closer, latch, and seals all carry the rating together. Changing one component to a non-rated substitute can void the entire assembly's fire rating.\n\nBC Fire Code requires:\n• Annual inspection of all fire-rated door assemblies\n• Written documentation of inspection results\n• Repair of any deficiency before the next occupancy\n\nCommon violations we find on inspection: painted-over fire labels, non-rated replacement hardware, missing intumescent seals, wedged-open doors, and closers adjusted to hold the door open.",
  },
  {
    title: "Why one visit covers all your mandoors",
    summary: "Same crew, same truck, same invoice — bundled with your overhead door or dock PM visit.",
    body: "Most Richmond facilities pay two separate service companies to look after their overhead doors and their mandoors. We handle both on the same visit.\n\nOne technician walks the property, inspects every mandoor and overhead door, documents all deficiencies, and returns a written proposal. Work is invoiced on a single ticket. Parts carried for both overhead doors and mandoors — closers, hinges, latches, panic devices, bottom seals, and fire-rated hardware.\n\nFor facilities with 4+ mandoors, per-door rates drop sharply on volume — see the pricing section above.",
  },
  {
    title: "What's included in the 21-point mandoor inspection?",
    summary: "A full written inspection of every mandoor on the property — suitable for fire marshal and insurance documentation.",
    body: "Our 21-point mandoor inspection covers:\n1. Door alignment and frame plumb/square check\n2. Closer speed (sweep, latch, and backcheck)\n3. Closer arm and bracket condition\n4. Latch bolt engagement and strike alignment\n5. Hinge pin wear and hinge plate condition\n6. Bottom sweep condition and seal contact\n7. Perimeter seal condition\n8. Intumescent strip integrity (rated doors)\n9. Fire label condition and legibility\n10. Door leaf face and edge condition\n11. Vision panel glazing and glazing bead (if present)\n12. Threshold condition\n13. Panic device latch retraction and dogging (if applicable)\n14. Electric strike or magnetic lock function (if present)\n15. Door position switch function (if present)\n16. Self-closing function (must close and latch from 5°)\n17. Frame anchor condition at head and jamb\n18. Smoke seal condition (where required)\n19. Undercut clearance check\n20. Key function test\n21. Written report with deficiency log and photo documentation",
  },
];

const faqs = [
  { q: "What's a mandoor?", a: "A mandoor (man door) is any walk-through door in a commercial building — back doors, stairwell doors, mechanical room doors, fire exits, and interior corridor doors. Unlike a garage door, it closes itself via a door closer and latches automatically." },
  { q: "Can you fix a mandoor on the same visit as my overhead door?", a: "Yes — that's the point. Same technician, same truck, same invoice. We carry mandoor parts (closers, hinges, latches, panic devices, seals, fire-rated hardware) alongside overhead door parts on every commercial truck." },
  { q: "My door closer keeps losing adjustment. Why?", a: "Three causes: the valve seat is worn and leaking hydraulic fluid internally (replace the closer), the adjusting screws are vibrating loose (thread-lock and re-adjust), or the door is out of alignment causing the closer to work harder than it's designed for (fix the frame first, then adjust the closer)." },
  { q: "What does ANSI A250.8 compliant mean?", a: "ANSI A250.8 is the North American standard for steel door and frame construction. It defines four grades by duty level (light, heavy, extra heavy, maximum duty). We specify and install the correct ANSI grade for the opening — important because a non-compliant door installed in a fire-rated assembly voids the fire rating." },
  { q: "Is a fire-rated mandoor just a heavier door, or is it a complete assembly?", a: "It's a complete assembly — door leaf, frame, hinges, closer, latch, and seals all carry the rating together. Swapping one component (e.g. installing a non-rated closer) voids the entire assembly's fire rating. We replace fire-rated mandoor components with UL-listed equivalents only." },
  { q: "What's the BC Fire Code requirement for fire-rated mandoor inspections?", a: "BC Fire Code requires annual inspection and documentation of all fire-rated door assemblies. The inspection must be documented with a written report. Missing records can result in fire marshal deficiency notices and insurance issues. We produce the written report on-site." },
  { q: "Can you replace a fire label on a mandoor?", a: "Yes. A peeling, missing, or painted-over fire label is a code violation. We replace them with UL-listed labels and document the replacement in the inspection report." },
  { q: "How long does a whole-building mandoor inspection take?", a: "Roughly 20–30 minutes per door for a thorough inspection plus report. A building with 10 mandoors typically takes 3–4 hours including documentation. We book it as a half-day or full-day visit depending on door count." },
  { q: "Can you service mandoors in strata warehouse units?", a: "Yes. We work with strata councils, property managers, and individual unit owners. Mandoor maintenance in a strata warehouse is typically the unit owner's responsibility, but we can coordinate directly with the strata manager if needed." },
  { q: "Do you carry panic device hardware on the truck?", a: "Yes. We carry Von Duprin, Detex, Yale, and Sargent panic devices and repair parts. Most panic device repairs — push-bar adjustment, dogging, latch retraction — are completed first visit." },
];

const inspection21 = [
  "Door closer speed (sweep, latch, backcheck) and arm condition",
  "Latch bolt engagement, strike alignment, and bolt throw",
  "Hinge pin wear and hinge plate condition",
  "Bottom sweep seal contact and condition",
  "Perimeter seal and intumescent strip integrity",
  "Fire label condition and legibility",
  "Self-closing function — must close and latch from 5°",
  "Door alignment and frame plumb/square check",
  "Panic device latch retraction and dogging (if present)",
  "Electric strike / magnetic lock function (if present)",
  "Written deficiency report with photo documentation",
];

export default function CommercialPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/commercial-hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy-dark/78" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-block bg-green-800/30 border border-green-700/60 text-green-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Mandoor Service · Richmond, BC
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Closer leaking, fire label peeling, door wedged open?{" "}
            <span className="text-green-600">We fix it before the inspector finds it.</span>
          </h1>
          <p className="mt-5 text-white/75 text-base max-w-2xl leading-relaxed">
            Every commercial building in Richmond has mandoors — back doors, fire exits, mechanical rooms.
            We service them on the same visit as your overhead doors. Same crew, same warranty, same invoice.
            ANSI A250.8 compliant hardware on every truck.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={siteConfig.phone.href} className="inline-flex items-center gap-3 rounded-card bg-gold px-6 py-3.5 font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
              <IconPhone className="w-4 h-4 flex-shrink-0" />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-xs font-bold uppercase tracking-wide opacity-70">Call · Same-day Richmond</span>
                <span className="text-base">{siteConfig.phone.display}</span>
              </span>
            </a>
            <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card bg-green-600 text-white px-7 py-3.5 text-sm font-bold hover:bg-green-700 transition-colors">
              Request a quote →
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/65">
            <span>✓ Same-day Richmond</span>
            <span>✓ Fire-rated work</span>
            <span>✓ ANSI A250.8 compliant</span>
            <span>✓ WCB + $5M insured</span>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark">Pricing at a glance — Building-level mandoor service</h2>
            <Link href="/request-a-quote/" className="hidden sm:inline-flex items-center text-sm font-bold text-gold hover:underline whitespace-nowrap">Get a written quote →</Link>
          </div>
          <p className="text-gold text-sm mb-8 max-w-3xl leading-relaxed">
            The smart structure for any Richmond building with multiple mandoors: a single visit covers every door on the property, with per-door rates that drop sharply with volume.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingItems.map((item) => (
              <div key={item.label} className="rounded-card border border-steel/15 bg-white p-5 flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <img src={item.img} alt={item.label} className="w-16 h-16 object-cover rounded flex-shrink-0" />
                  <span className="text-gold font-bold uppercase tracking-wide text-xs leading-snug mt-1">{item.label}</span>
                </div>
                <p className="font-heading font-extrabold text-navy-dark text-xl leading-tight mb-2">{item.price}</p>
                <p className="text-xs text-steel leading-relaxed mt-auto">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gold mt-6 leading-relaxed">
            Bundled with overhead door / dock equipment / sliding gate maintenance under a single facility contract. Volume rates apply at 4+ doors on a coordinated visit. 2-year labour warranty on every job.
          </p>
          <div className="mt-4 sm:hidden">
            <Link href="/request-a-quote/" className="inline-flex items-center text-sm font-bold text-gold hover:underline">Get a written quote →</Link>
          </div>
        </div>
      </section>

      {/* WHAT WE FIX */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Whatever's wrong with it — we fix it</h2>
          <p className="text-steel text-sm mb-8">
            Parts on every truck — closers, hinges, latches, seals, panic devices, fire-rated hardware.<br />
            All major hardware brands — LCN · Norton · Dorma · Von Duprin · Detex · Yale · Sargent · Schlage.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatWeFix.map((s) => (
              <div key={s.title} className="rounded-card bg-white border border-steel/10 p-6 shadow-card">
                <h3 className="font-heading font-bold text-base text-navy-dark mb-2">{s.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANDOOR TECH EXPLAINER */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Everything you need to know about mandoor service</h2>
          <p className="text-steel text-sm mb-8 max-w-3xl">
            ANSI grades, fire ratings, inspection requirements, and why one visit should cover every door in your facility.
          </p>
          <Accordion items={mandoorTech} />
        </div>
      </section>

      {/* 21-POINT INSPECTION */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">What gets checked on every mandoor visit</h2>
          <p className="text-white/70 text-sm mb-8 max-w-3xl">
            Our 21-point mandoor inspection covers all mechanical, fire-rating, and operational items. Every visit produces a written report with a deficiency log and photos — suitable for fire marshal and insurance documentation.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {inspection21.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-white/70 text-sm font-bold mb-3">Inspection intervals</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {[
                { freq: "Annual", desc: "once a year (light-traffic buildings)" },
                { freq: "Bi-annual", desc: "every 6 months (standard commercial)" },
                { freq: "Quarterly", desc: "every 3 months (high-traffic / fire-rated buildings)" },
              ].map(t => (
                <div key={t.freq} className="rounded-card bg-white/10 px-4 py-3">
                  <span className="text-gold font-bold">{t.freq}</span>
                  <span className="text-white/60 ml-2">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY DOORCHAMP */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
              Why Richmond buildings choose DoorChamp for mandoor service
            </h2>
            <p className="text-steel leading-relaxed mb-4">
              A mandoor wedged open or failing to latch isn't just an inconvenience — it's a fire code violation, a security gap, and a liability. We fix the root cause on the first visit, document everything, and bundle it with your overhead door service so you deal with one company and one invoice.
            </p>
            <p className="text-steel leading-relaxed">
              Every technician carries ANSI A250.8 compliant hardware, fire-rated components, and the full range of closer, hinge, latch, and panic device parts — so most repairs are done first visit.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "Same-day Richmond response (business hours)",
              "24/7 emergency line — on-call technician, not a call centre",
              "ANSI A250.8 compliant hardware on every truck",
              "UL-listed fire-rated components — no substitutions",
              "Written inspection report for fire marshal and insurance",
              "WCB-compliant technicians · $5M liability coverage",
              "Bundled with overhead door PM — one invoice, one visit",
              "Service agreements for property managers and strata councils",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-steel text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">Frequently asked questions</h2>
          <Accordion items={faqs.map(f => ({ title: f.q, summary: "", body: f.a }))} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">Mandoor problem in Richmond? We fix it before the inspector finds it.</h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Same-day service for businesses. ANSI A250.8 compliant hardware on every truck. Call for emergency response or request a written quote — firm price before any work starts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={siteConfig.phone.href} className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card bg-green-600 text-white px-7 py-3.5 text-sm font-bold hover:bg-green-700 transition-colors">
              Request a Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
