import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconWrench, IconInstall, IconMaintenance, IconParts, IconCheck, IconAlert } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Warehouse Door Service Richmond BC — Overhead, Dock, Gates | DoorChamp",
  description:
    "Complete warehouse door services in Richmond BC. Overhead sectional doors, loading docks, sliding gates, mandoors. Same-day emergency response. Call (778) 800-0769.",
  alternates: { canonical: "/warehouses/" },
};

const services = [
  {
    icon: <IconWrench className="w-6 h-6" />,
    title: "Overhead Sectional Doors",
    desc: "Industrial-grade sectional doors for warehouse loading bays. Spring replacement, panel repair, operator service — all major brands.",
    href: "/garage-door-repair/",
    cta: "Overhead door service →",
  },
  {
    icon: <IconInstall className="w-6 h-6" />,
    title: "Loading Dock Equipment",
    desc: "Dock levelers, vehicle restraints, dock seals and shelters. Hydraulic, mechanical, and edge-of-dock leveler service and installation.",
    href: "/loading-docks/",
    cta: "Loading dock service →",
  },
  {
    icon: <IconAlert className="w-6 h-6" />,
    title: "Sliding Gate Systems",
    desc: "Perimeter access control for warehouse yards. LiftMaster, FAAC, HySecurity operators — same-day emergency response. UL 325-2018 compliant.",
    href: "/sliding-gates/",
    cta: "Sliding gate service →",
  },
  {
    icon: <IconParts className="w-6 h-6" />,
    title: "Mandoors & Fire Exits",
    desc: "Hollow metal mandoors, fire-rated assemblies, closers, panic devices, hinges. ANSI A250.8 compliant. Fire label inspection and replacement.",
    href: "/mandoors/",
    cta: "Mandoor service →",
  },
  {
    icon: <IconMaintenance className="w-6 h-6" />,
    title: "Commercial Openers",
    desc: "Three-phase and single-phase commercial operators for high-cycle warehouse applications. Jackshaft, trolley, and hoist-type installations.",
    href: "/commercial-openers/",
    cta: "Commercial openers →",
  },
  {
    icon: <IconInstall className="w-6 h-6" />,
    title: "New Door Installation",
    desc: "Supply and install insulated steel sectional doors, fire-rated doors, and full dock packages. Single-source contract, single invoice.",
    href: "/commercial-new-doors/",
    cta: "New door installation →",
  },
];

const reasons = [
  { n: "1", title: "One truck, every door on the property", body: "Overhead doors, dock levelers, sliding gates, and mandoors — all on the same vehicle. One callout fee, one invoice, one scheduling window. No handoffs between trades." },
  { n: "2", title: "Parts stocked for Richmond's most common warehouse brands", body: "Amarr, Clopay, Wayne Dalton, and Raynor doors. LiftMaster, Genie, and Chamberlain operators. Rite-Hite and Blue Giant dock equipment. Most repairs are completed same visit." },
  { n: "3", title: "Same-day emergency response from our Richmond yard", body: "A stuck overhead door or non-functioning dock leveler stops production. We dispatch from Richmond the moment you call — typical response 12–20 minutes in the Richmond industrial area." },
  { n: "4", title: "Facility contracts with per-door PM rates", body: "Scheduled preventive maintenance with written inspection reports, code-violation logs, and discounted parts. Rates drop sharply when overhead doors, dock equipment, and mandoors are bundled under one contract." },
];

const pmItems = [
  "Overhead door spring tension and balance check",
  "Cable and drum inspection — fraying and anchor condition",
  "Roller, hinge, and track lubrication",
  "Operator force and reversal test",
  "Dock leveler hydraulic fluid level and cylinder seals",
  "Dock seal and shelter condition",
  "Mandoor closer and latch adjustment",
  "Fire label legibility check on all rated assemblies",
  "Gate operator force and entrapment device test",
  "Written report with code-violation log",
];

export default function WarehousesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/warehouse-hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy-dark/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-block bg-white/15 border border-white/40 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Warehouse Services · Richmond, BC
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Every door in your warehouse.<br />
            <span className="text-gold">One call. One truck.</span>
          </h1>
          <p className="mt-5 text-white/75 text-base max-w-2xl leading-relaxed">
            Overhead sectional doors, loading dock levelers, sliding perimeter gates, and mandoors — all serviced and installed by DoorChamp from our Richmond yard. Same-day response, all major brands, parts on the truck.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-4 rounded-card bg-gold px-7 py-4 hover:bg-gold-dark transition-colors w-fit"
            >
              <IconPhone className="w-5 h-5 text-navy-dark flex-shrink-0" />
              <div>
                <p className="text-navy-dark text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Call now · Same-day Richmond</p>
                <p className="text-navy-dark font-heading font-extrabold text-2xl leading-none">{siteConfig.phone.display}</p>
              </div>
            </a>
            <Link
              href="/request-a-quote/"
              className="flex items-center justify-center rounded-card border border-white/30 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors"
            >
              Get a facility quote
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-navy-dark/5 border-y border-steel/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["12–20 min emergency response", "All door types on one truck", "Parts stocked for all major brands", "WCB + $5M insured"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs text-steel font-semibold">
                <IconCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" /> {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">What we service</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-10">
            Complete warehouse door coverage — every type, every brand.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group flex flex-col rounded-card border border-steel/10 p-6 hover:border-gold/40 hover:shadow-card transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-gold mb-4">
                  {s.icon}
                </div>
                <h3 className="font-heading font-bold text-navy-dark mb-2">{s.title}</h3>
                <p className="text-sm text-steel leading-relaxed flex-1 mb-4">{s.desc}</p>
                <span className="text-sm font-bold text-gold group-hover:underline">{s.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ONE CALL */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Why DoorChamp for warehouses</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-10">
            Stop managing two service companies for one building.
          </h2>
          <div className="space-y-5 max-w-3xl">
            {reasons.map((r) => (
              <div key={r.n} className="flex gap-5 rounded-card bg-white border border-steel/10 p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 text-gold font-heading font-extrabold text-sm flex items-center justify-center">
                  {r.n}
                </span>
                <div>
                  <p className="font-heading font-bold text-navy-dark mb-1">{r.title}</p>
                  <p className="text-sm text-steel leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PM CHECKLIST */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Preventive maintenance</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            What a facility PM visit covers.
          </h2>
          <p className="text-steel text-sm mb-8 max-w-2xl leading-relaxed">
            One scheduled visit covers every door type on the property. You get a written report with a code-violation log and a parts estimate for any deferred repairs.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl">
            {pmItems.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-card bg-surface border border-steel/10">
                <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-steel leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-card bg-navy-dark text-white max-w-2xl">
            <p className="font-heading font-bold text-lg mb-2">Facility contract rates</p>
            <div className="space-y-2 text-sm text-white/80">
              <p>3–9 doors · Annual — <strong className="text-white">from $79/door/year</strong></p>
              <p>10–20 doors · Bi-annual — <strong className="text-white">from $69/door/visit</strong></p>
              <p>21+ doors · Quarterly — <strong className="text-white">from $59/door/visit</strong></p>
            </div>
            <p className="text-xs text-white/50 mt-3">Rates drop sharply when overhead doors, dock equipment, and mandoors are bundled under one contract.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-4">
            Send us your building address and door count.
          </h2>
          <p className="text-white/70 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            We'll quote overhead doors, dock equipment, sliding gates, and mandoors under a single facility contract — or by-the-call for one-off repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center gap-2 rounded-card bg-gold text-navy-dark px-8 py-4 font-bold hover:bg-gold-light transition-colors"
            >
              <IconPhone className="w-4 h-4" />
              {siteConfig.phone.display}
            </a>
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center justify-center rounded-card border border-white/30 text-white px-8 py-4 font-bold hover:border-white transition-colors"
            >
              Get a facility quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
