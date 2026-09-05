import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Commercial Garage Door Openers Richmond BC | DoorChamp",
  description:
    "LiftMaster and Manaras-Opera commercial operators for warehouses, loading docks, and parkades. Sized to your duty cycle. Same-day service in Richmond BC.",
  alternates: { canonical: "/commercial-openers/" },
};

const liftmasterModels = [
  {
    tag: "LIGHT-DUTY SECTIONAL",
    model: "MODEL LJ8900W",
    name: "LiftMaster LJ8900W",
    desc: "Light-duty jackshaft for sectional commercial doors. Smart facility access built in.",
    features: [
      "Up to 10 cycles/hour · 25 cycles/day",
      "For light-duty sectional doors",
      "Built-in Wi-Fi + myQ Smart Facility Access",
      "Soft start/stop reduces wear",
      "UL 325 safety compliant",
      "Real-time alerts to your phone",
    ],
    link: "https://www.liftmaster.com",
  },
  {
    tag: "LIGHT-DUTY ROLLING",
    model: "MODEL LJ8950W",
    name: "LiftMaster LJ8950W",
    desc: "Light-duty wallmount for rolling steel doors and grilles. Self-storage and small warehouse standard.",
    features: [
      "Up to 10 cycles/hour · 25 cycles/day",
      "For light-duty rolling steel doors",
      "Self-storage, dock doors, counter shutters",
      "24V DC ultra-quiet motor",
      "Built-in Wi-Fi + myQ",
      "Mount left or right of door",
    ],
    link: "https://www.liftmaster.com",
  },
  {
    tag: "MEDIUM-DUTY",
    model: "MODEL MJ5011U",
    name: "LiftMaster MJ5011U",
    desc: "Medium-duty jackshaft. The bread-and-butter of warehouse and retail commercial doors.",
    features: [
      "Up to 12 cycles/hour · 50 cycles/day",
      "1/2 HP motor — doors up to 14’ high · 22’ wide",
      "For sectional & rolling doors",
      "Security+ technology",
      "Built-in Wi-Fi + myQ Smart Facility Access",
      "UL 325 compliant",
    ],
    link: "https://www.liftmaster.com",
  },
];

const manarasModels = [
  {
    tag: "MODERATE-LOAD",
    model: "MODEL OPERA-MJ",
    name: "Manaras Opera-MJ",
    desc: "Moderate-load jackshaft for standard, high, and vertical-lift sectional doors. Floor-mounted manual disconnect.",
    features: [
      "14 cycles/hour · 50 cycles/day",
      "Sectional, high-lift, vertical-lift, small roll-ups",
      "Floor-mounted manual disconnect",
      "Mount on wall, hood, or shelf — left or right",
      "Single-phase or three-phase",
      "UL 325 compliant",
    ],
    link: "https://www.manaras.com",
  },
  {
    tag: "HEAVY-DUTY",
    model: "MODEL OPERA-H",
    name: "Manaras Opera-H",
    desc: "Heavy-duty jackshaft with patented Hoist-a-Matic® self-engaging chain hoist. Workhorse of industrial bays.",
    features: [
      "25 cycles/hour · 100 cycles/day",
      "Patented Hoist-a-Matic® self-engaging chain hoist",
      "Single or three-phase, high starting torque",
      "Mount wall / hood / shelf, left or right",
      "Standard for warehouse loading bays",
      "Accu-Cam® precision limits",
    ],
    link: "https://www.manaras.com",
  },
  {
    tag: "INDUSTRIAL",
    model: "MODEL OPERA-SH",
    name: "Manaras Opera-SH",
    desc: "Robust industrial belt-drive reduction operator. Bridges the gap between standard jackshaft and gear-head models.",
    features: [
      "25 cycles/hour · 100+ cycles/day",
      "Heavy-duty industrial belt-drive reduction",
      "For industrial sectional & rolling doors/grilles",
      "Single or three-phase, high starting torque",
      "Mount wall / hood / shelf, left or right",
      "Logistics & manufacturing standard",
    ],
    link: "https://www.manaras.com",
  },
];

const operatorTypes = [
  {
    title: "Jackshaft (side-mount) operators",
    body: "Mounted on the wall beside the door rather than overhead. Ideal for high-bay warehouses, automotive shops with cathedral-ceiling bays, and any commercial space where overhead clearance is at a premium. LiftMaster's commercial Jackshaft line is our most-installed commercial operator across Richmond.",
  },
  {
    title: "Hoist operators",
    body: "Heavy-duty operators designed for very large or very heavy doors, including industrial sectional and roll-up doors. Available in 1/2 to 5 HP, 1- and 3-phase power, with cycle ratings into the hundreds of thousands.",
  },
  {
    title: "Trolley operators",
    body: "The commercial-grade equivalent of residential ceiling-mount openers, but with heavier-duty motors, gears, and cycle ratings. Used for sectional doors where a Jackshaft isn't feasible.",
  },
  {
    title: "Gate operators (parkade & perimeter)",
    body: "Slide gate, swing gate, and barrier-arm operators for strata parkades and commercial access points. We install BEA, LiftMaster, and HySecurity operators with key-fob, transponder, and integrated access-control systems.",
  },
];

const smartAccess = [
  {
    bold: "Key-fob and transponder access.",
    rest: " Resident or staff entry without keypads or remotes.",
  },
  {
    bold: "Cellular monitoring.",
    rest: " Operators that text or email facility managers when there's a fault, an open-too-long event, or a forced-entry attempt.",
  },
  {
    bold: "Integration with building management systems.",
    rest: " Where existing BMS, alarm, or access-control infrastructure is in place, we integrate operators rather than installing parallel systems.",
  },
  {
    bold: "Photo-eye safety, edge sensors, and loop detectors.",
    rest: " Required commercial safety hardware, properly installed and tested.",
  },
];

const repairs = [
  "Operator won't run, hums but doesn't move",
  "Door reverses, partial-cycle issues",
  "Photo-eye and safety sensor failures",
  "Logic-board diagnostics and replacement",
  "Drive belt, chain, and gear replacement",
  "Wiring and access-control troubleshooting",
  "Limit switch and travel calibration",
  "Manual disconnect and emergency egress hardware",
];

const faqs = [
  {
    q: "Why does a commercial opener install cost what it does? It only took like 2 seconds.",
    a: "Commercial opener installation involves more than connecting wires — we're sizing the operator to your door weight and duty cycle, wiring in safety devices, setting force and travel limits, integrating access control, and verifying everything to UL 325. The price reflects correct installation, not clock time. A mis-installed commercial opener fails early, voids the warranty, and can create a safety hazard.",
  },
  {
    q: "Which LiftMaster commercial operators do you install?",
    a: "We stock and install the LJ8900W (light-duty sectional), LJ8950W (light-duty rolling), and MJ5011U (medium-duty). For higher duty cycles we also work with our Manaras-Opera line. Call us with your door specs and we'll match the right model.",
  },
  {
    q: "Can you retrofit a smart controller onto our existing operator?",
    a: "In many cases, yes. LiftMaster's myQ Smart Facility Access module can be added to compatible existing operators. We'll assess your current unit — if it's compatible and structurally sound, a retrofit is often significantly less expensive than a full replacement.",
  },
  {
    q: "What about photo eyes and safety edges?",
    a: "Required on all commercial doors under UL 325. We install monitored photo-eyes, pneumatic safety edges, and loop detectors as part of every commercial opener install. We also service and replace existing safety devices independently.",
  },
  {
    q: "Do you service operators we didn't install?",
    a: "Yes. We service LiftMaster, Manaras-Opera, Chamberlain, Genie, Linear, BEA, and most commercial operators regardless of who installed them. Bring us the make and model and we can usually diagnose over the phone.",
  },
];

function ModelCard({
  tag,
  model,
  name,
  desc,
  features,
  link,
}: (typeof liftmasterModels)[0]) {
  return (
    <div className="flex flex-col rounded-card border border-steel/15 bg-white overflow-hidden">
      <div className="bg-surface flex items-center justify-end px-4 py-3">
        <span className="rounded text-[10px] font-bold uppercase tracking-widest bg-navy-dark text-white px-3 py-1">
          {tag}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">{model}</p>
        <h3 className="font-heading font-extrabold text-xl text-navy-dark mb-2">{name}</h3>
        <p className="text-sm text-steel italic leading-relaxed mb-5">{desc}</p>
        <ul className="space-y-2 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <IconCheck className="w-4 h-4 text-navy flex-shrink-0 mt-0.5" />
              <span className="text-sm text-steel leading-snug">{f}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-card border border-steel/30 text-steel px-5 py-2.5 text-sm hover:border-navy hover:text-navy transition-colors"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h5M4 4v5M4 4l7 7M16 10v6H4" />
            </svg>
            View on manufacturer site
          </a>
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center justify-center gap-2 rounded-card bg-gold text-navy-dark px-5 py-2.5 text-sm font-bold hover:bg-gold-dark hover:text-white transition-colors"
          >
            <IconPhone className="w-4 h-4" /> Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CommercialOpenersPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/commercial-openers-hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy-dark/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Commercial · Richmond BC</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Commercial openers.
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
            Trolley, jackshaft, hoist. Sized to your duty cycle.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors"
            >
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* LiftMaster Commercial */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark">
              LiftMaster Commercial
            </h2>
            <p className="text-sm text-steel">Light-duty &amp; medium-duty · Smart facility access · Built-in Wi-Fi</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {liftmasterModels.map((m) => (
              <ModelCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Manaras-Opera Commercial */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark">
              Manaras-Opera Commercial
            </h2>
            <p className="text-sm text-steel">Heavy-duty &amp; Industrial · Patented Hoist-a-Matic® · 30+ years</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {manarasModels.map((m) => (
              <ModelCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Duty-cycle spec */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Commercial Openers</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark max-w-3xl leading-tight mb-6">
            Commercial-grade isn&apos;t a marketing claim. It&apos;s a duty-cycle specification.
          </h2>
          <div className="max-w-3xl space-y-4 text-steel leading-relaxed">
            <p>
              Most commercial garage door problems come back to the same root cause: an opener that was sized correctly for a residential door but not for the cycle count of a working commercial operation. A residential opener might be rated for <strong className="text-navy-dark">25 cycles a day</strong>. A commercial loading dock might run <strong className="text-navy-dark">200</strong>. The opener doesn&apos;t fail dramatically — it just wears out years before it should, and takes the gear, the chain, and sometimes the door itself with it.
            </p>
            <p>
              We size operators to your actual operation. We ask the questions most installers don&apos;t: how many cycles a day, what&apos;s the door weight, what are the wind loads, what are your access integration requirements. Then we recommend an operator that&apos;s right — not just whatever&apos;s cheapest in the catalogue.
            </p>
          </div>
        </div>
      </section>

      {/* Operator Types */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Operator Types</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-10">
            Operator types we install.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {operatorTypes.map((op, i) => (
              <div
                key={op.title}
                className={`rounded-card border border-steel/15 bg-surface p-6${i === operatorTypes.length - 1 && operatorTypes.length % 3 === 1 ? " sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
              >
                <h3 className="font-heading font-bold text-navy-dark text-base mb-3">{op.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{op.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Access */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Smart Access</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-8">
            Smart access &amp; integration.
          </h2>
          <div className="max-w-3xl space-y-5">
            {smartAccess.map((item) => (
              <div key={item.bold} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold flex items-center justify-center mt-0.5">
                  <IconCheck className="w-3.5 h-3.5 text-navy-dark" />
                </span>
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-white">{item.bold}</strong>{item.rest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repairs */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Service &amp; Repair</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            Repairs we handle.
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-3 max-w-3xl">
            {repairs.map((item) => (
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

      {/* FAQ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Common Questions</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            About a commercial opener install.
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
