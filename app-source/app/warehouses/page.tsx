import type { Metadata } from "next";
import Link from "next/link";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck, IconWrench, IconAlert, IconInstall, IconParts } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Warehouse & Loading Dock Service Richmond BC | DoorChamp",
  description:
    "Warehouse door & loading dock service in Richmond, Surrey, Delta, Burnaby, Coquitlam & Metro Vancouver. Dock levelers, overhead doors, springs, vehicle restraints. Same-day. Call (778) 800-0769.",
  alternates: { canonical: "/warehouses/" },
};

function ProductCard({ badge, brandModel, title, desc, features, img, viewUrl, viewLabel, cta }: {
  badge?: string; brandModel?: string; title: string; desc: string;
  features?: string[]; img?: string; viewUrl?: string; viewLabel?: string; cta?: string;
}) {
  return (
    <div className="rounded-card border border-steel/10 bg-white overflow-hidden flex flex-col shadow-card">
      <div className="relative h-44 flex items-center justify-center overflow-hidden bg-white">
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-contain p-4" />
        ) : (
          <span className="text-steel/30 text-sm text-center px-4">{title}</span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        {badge && <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-0.5">{badge}</span>}
        {brandModel && <span className="text-[10px] text-steel uppercase tracking-widest mb-1">{brandModel}</span>}
        <h3 className="font-heading font-bold text-navy-dark text-sm mb-2">{title}</h3>
        <p className="text-xs text-steel leading-relaxed mb-3 flex-1">{desc}</p>
        {features && (
          <ul className="space-y-1 mb-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs text-steel">
                <IconCheck className="w-3 h-3 text-gold flex-shrink-0 mt-0.5" /> {f}
              </li>
            ))}
          </ul>
        )}
        {viewUrl && (
          <a href={viewUrl} target="_blank" rel="noopener noreferrer"
            className="text-xs text-steel underline mb-2 hover:text-navy-dark transition-colors">
            {viewLabel}
          </a>
        )}
        <a href={siteConfig.phone.href}
          className="mt-auto w-full text-center rounded-card bg-gold text-navy-dark text-xs font-bold py-2.5 px-4 hover:bg-gold-dark transition-colors">
          {cta ?? "Get a Quote"}
        </a>
      </div>
    </div>
  );
}

const operators = [
  {
    badge: "HEAVY-DUTY JACKSHAFT",
    brandModel: "LIFTMASTER H SERIES",
    title: "LiftMaster H500UL / H800UL",
    desc: "Heavy-duty industrial jackshaft. The workhorse on Richmond distribution docks. Mounts beside the door — maximizes ceiling clearance for dock operations.",
    features: ["1 HP / 1-½ HP motors", "Continuous duty industrial cycles", "Up to 50 cycles/hr", "Built-in monitored entrapment", "UL 325 commercial compliant", "Battery backup option"],
    img: "/images/warehouse-opener-liftmaster-h-series.webp",
    viewUrl: "https://www.liftmaster.com",
    viewLabel: "View on LiftMaster.com",
  },
  {
    badge: "MEDIUM-DUTY TROLLEY",
    brandModel: "LIFTMASTER T SERIES",
    title: "LiftMaster T500UL / T750UL",
    desc: "Medium-duty commercial trolley operator. Standard for Richmond warehouses with sectional doors and rail-mount geometry. The most common retrofit on strata warehouse units.",
    features: ["½ HP and ¾ HP options", "Rail-driven trolley", "Up to 25 cycles/hr", "Wall console + 3-button + radio receiver", "UL 325 compliant", "Standard for retrofit installs"],
    img: "/images/warehouse-opener-liftmaster-t-series.webp",
    viewUrl: "https://www.liftmaster.com",
    viewLabel: "View on LiftMaster.com",
  },
  {
    badge: "INDUSTRIAL HOIST",
    brandModel: "LIFTMASTER MH SERIES",
    title: "LiftMaster MH500UL",
    desc: "Medium-duty hoist. Common on Richmond warehouse high-cycle doors where ceiling clearance is tight. Three-phase available for industrial service panels.",
    features: ["½ HP, 3-phase available", "Hoist-style mounting", "Up to 25 cycles/hr", "Monitored entrapment ready", "Auxiliary brake assembly", "Three-phase 208/230/460/575V"],
    img: "/images/warehouse-opener-liftmaster-mh-series.webp",
    viewUrl: "https://www.liftmaster.com",
    viewLabel: "View on LiftMaster.com",
  },
  {
    badge: "CANADIAN HEAVY INDUSTRIAL",
    brandModel: "MANARAS OPERA-H SERIES",
    title: "Manaras Opera-H Series",
    desc: "Quebec-built jackshaft operator. Common on Richmond cold-storage and food-grade docks where reliability comes first. Direct retrofit for LiftMaster jackshaft positions.",
    features: ["Made in Beauceville, Quebec", "Continuous-duty industrial spec", "Compact footprint", "Easy chain conversion for Hoist-n-Matic", "Service-friendly modular design", "Canadian climate rated"],
    img: "/images/warehouse-opener-manaras-opera-h.webp",
    viewUrl: "https://www.manaras.com",
    viewLabel: "View on Manaras.com",
  },
  {
    badge: "CANADIAN MEDIUM JACKSHAFT",
    brandModel: "MANARAS OPERA-MJ SERIES",
    title: "Manaras Opera-MJ Series",
    desc: "Medium-jackshaft Canadian-made operator. Direct retrofit for many LiftMaster installations across Richmond. Soft start, soft stop, standard wall control compatible.",
    features: ["Up to 25 cycles/hr", "Compact design", "Standard wall control compatible", "Auxiliary brake", "Soft start, soft stop", "Manaras parts stocked on truck"],
    img: "/images/warehouse-opener-manaras-opera-mj.webp",
    viewUrl: "https://www.manaras.com",
    viewLabel: "View on Manaras.com",
  },
  {
    badge: "HIGH-SPEED / ROLL-UP",
    brandModel: "RYTEC SPIRAL · ALBANY RAPIDROLL",
    title: "Rytec Spiral · Albany RapidRoll",
    desc: "High-speed rolling doors for Richmond cross-docking and 3PL facilities. We service, supply parts, and recommission — opening speeds up to 90 in/sec for high-cycle dock operations.",
    features: ["Opening speeds 40–90 in/sec", "Up to 600+ cycles/day capacity", "Self-repairing soft edge", "Mounted pulleys available", "Door-in-door available", "Wash-down and cold-storage variants"],
    img: "/images/warehouse-door-rytec-highspeed.webp",
    viewUrl: "https://www.rytecdoors.com",
    viewLabel: "View on Rytec.com",
  },
];

const commercialDoors = [
  {
    badge: "INSULATED SECTIONAL",
    brandModel: "RICHARDS-WILCOX · STEEL-CRAFT",
    title: "Richards-Wilcox Thermomax · Steel-Craft TherMax",
    desc: "Insulated commercial sectional doors. Steel-Craft is built in Alberta, Richards-Wilcox in Ontario — Canadian-made for Canadian climate. R-12 to R-18 polyurethane core.",
    features: ["R-12 to R-18 polyurethane core", "24 or 25 ga steel skin", "Sizes to 24'×24'+", "Wind-load rated for coastal BC", "Galvanized hardware throughout", "Available with vision lights"],
    img: "/images/warehouse-door-richards-wilcox-sectional.webp",
    viewUrl: "https://www.richardswilcox.com",
    viewLabel: "View on RichardsWilcox.com",
  },
  {
    badge: "CANADIAN HEAVY COMMERCIAL",
    brandModel: "GARAGA GR-SERIES",
    title: "Garaga GR-Series Commercial",
    desc: "Quebec-made commercial sectional doors. Premium thermal break, factory-finished, and the most warranty-friendly install across BC. Lifetime delamination warranty.",
    features: ["Made in Quebec, Canada", "Up to R-16.4 effective", "Thermal-break construction", "Industrial-grade hardware", "Custom colours from factory", "Lifetime delamination warranty"],
    img: "/images/warehouse-door-garaga-commercial.webp",
    viewUrl: "https://www.garaga.com",
    viewLabel: "View on Garaga.com",
  },
  {
    badge: "HEAVY-DUTY INDUSTRIAL",
    brandModel: "HÖRMANN INDUSTRIAL",
    title: "Hörmann SPU F42",
    desc: "German-engineered heavy industrial sectional. Used in Richmond's high-end cold-storage and food-grade facilities. 42 mm thick insulated panels, U-value 0.51 W/m²K.",
    features: ["42 mm thick insulated panels", "U-value 0.51 W/m²K", "Up to 8000 mm × 7000 mm", "ThermoFrame thermal break", "Optional all-glass sections", "Engineered for high-cycle"],
    img: "/images/warehouse-door-hormann-spu-f42.webp",
    viewUrl: "https://www.hormann.ca",
    viewLabel: "View on Hormann.ca",
  },
  {
    badge: "ROLLING STEEL",
    brandModel: "COOKSON · CORNELLCOOKSON",
    title: "CornellCookson SD Series",
    desc: "Rolling steel service doors. The go-to for Richmond self-storage, parkades, and tight-headroom warehouse openings. Coiling steel slat construction to 30'×30'+.",
    features: ["Coiling steel slat construction", "Sizes to 30'×30'+", "Fire-rated variants", "Wind-load options to 80+ mph", "Insulated coiling available", "Powder-coat finish"],
    img: "/images/warehouse-door-cookson-rolling-steel.webp",
    viewUrl: "https://www.cornellcookson.com",
    viewLabel: "View on CornellCookson.com",
  },
  {
    badge: "FIRE-RATED ROLLING",
    brandModel: "CORNELLCOOKSON FIREGARD",
    title: "CornellCookson FireGard 600",
    desc: "Fire-rated coiling doors. Required between specific occupancies in Richmond warehouses — food/industrial separation, fire-wall openings. UL listed, 3-hour and 4-hour assemblies.",
    features: ["UL listed fire ratings", "3-hour and 4-hour assemblies", "Auto-close on alarm", "Smoke-rated variants", "Time-delay close 30s/60s/90s", "Fail-safe gravity close"],
    img: "/images/warehouse-door-firegard.webp",
    viewUrl: "https://www.cornellcookson.com",
    viewLabel: "View on CornellCookson.com",
  },
  {
    badge: "DRIFT / BREAK-AWAY",
    brandModel: "WAYNE DALTON THERMOMARK",
    title: "Wayne Dalton ThermoMark 575",
    desc: "Break-away bottom section. Designed for Richmond facilities where forklift strikes are part of the operating reality. Replace the bottom panel — not the whole door.",
    features: ["Replaceable bottom panel only", "Reduces full-door damage cost", "R-17.5 insulated", "Aluminum frame option", "Standard 24-gauge skin", "Sizes to 30'"],
    img: "/images/warehouse-door-wayne-dalton-thermomark.webp",
    viewUrl: "https://www.wayndalton.com",
    viewLabel: "View on WayneDalton.com",
  },
];

const springs = [
  {
    badge: "STANDARD COMMERCIAL · 25,000-CYCLE TORSION",
    title: "25K-cycle commercial torsion springs",
    desc: "The workhorse spring for Richmond warehouse docks cycling 50–150 times/day. A standard 10,000-cycle residential spring fails inside one year on a busy dock. The 25K is the minimum we install.",
    features: ["Oil-tempered steel", "2\", 2-1/4\", 2-5/8\" ID", "IPPC-90 corrosion coating available", "Engineered to door weight", "Pairs typically 5–7 year service life", "On every truck"],
    img: "/images/warehouse-spring-25k-cycle.webp",
  },
  {
    badge: "HIGH-CYCLE INDUSTRIAL · 50,000-CYCLE TORSION",
    title: "50K-cycle high-cycle torsion springs",
    desc: "For Richmond distribution centres cycling 200–600 times/day. The standard upgrade on contract clients. Heavier wire gauge, larger IDs, marine-grade coating.",
    features: ["Oil-tempered, heavier wire gauge", "Larger ID options 2-5/8\", 3-3/4\"", "Marine-grade coating", "Engineered with safety factor", "Typically 8–10 year life", "Custom-built per door spec"],
    img: "/images/warehouse-spring-50k-cycle.webp",
  },
  {
    badge: "PREMIUM HIGH-CYCLE · 100,000-CYCLE TORSION",
    title: "100K-cycle premium torsion springs",
    desc: "Highest-cycle spring on the BC market. Used on 24/7 Richmond cross-docking and cold-storage operations. Marine + IPPC-90 dual coating. Largest wire gauge available.",
    features: ["Largest wire gauge available", "3-3/4\" ID typical", "Marine + IPPC-90 dual coating", "Engineered with 20% safety margin", "10–15 year service life realistic", "Per-door custom build"],
    img: "/images/warehouse-spring-100k-cycle.webp",
  },
];

const failures = [
  { n: "1", title: "High-Cycle Torsion Spring Failure", body: "The number one dock door failure — they cycle 50, 100, sometimes 400 times on a busy Richmond dock. A standard 10,000-cycle spring on a dock fails inside one year. We carry 25,000-, 50,000-, and 100,000-cycle springs in 2\", 2-5/8\" and 3-3/4\" diameters on the commercial service truck. Single-coil replacement or the full pair — first-visit fix is the norm." },
  { n: "2", title: "Forklift Strike Damage", body: "A 5,000-lb counterbalance forklift at 8 km/h delivers about 5,000 N of energy into the bottom panel. The result is a cracked bottom rail, bent vertical track, and a damaged curtain that crumples faster every subsequent cycle. Most forklift strikes on Richmond docks are repairable — we re-section, straighten the track, and replace the bottom panel in a single service visit. Wayne Dalton ThermoMark break-away bottom sections are the long-term fix." },
  { n: "3", title: "Cable & Drum Failure from Coastal Air", body: "Richmond's salt-air environment generates 7–9 times more cable corrosion than inland locations. The cable corrodes from the inside out — facility managers first notice when the cable jumps the drum and the door closes non-level, jamming the track. We carry stainless-grade and marine-coated cable on the trucks for any door that's had this failure once." },
  { n: "4", title: "Commercial Opener Failure", body: "LiftMaster and Manaras commercial jackshaft and trolley operators eventually reach end of lifespan — or lose a logic board, limit switch, or gear assembly before that. We carry LiftMaster H-series and T-series boards and Manaras Opera replacement assemblies on the trucks. Most warehouse opener swaps are first-visit fixes." },
];

const faqs = [
  { q: "How fast do you respond to an emergency dock door failure in Richmond?", a: "We dispatch from our Richmond yard — typical response is 12–20 minutes to any Richmond warehouse address. The Bridgeport, Crestwood, Mitchell Island, and No. 5 Road industrial corridors are all within 12 minutes from our yard in normal traffic. We don't route through a call centre." },
  { q: "Do you stock high-cycle commercial torsion springs?", a: "Yes. We carry 25,000-, 50,000-, and 100,000-cycle commercial torsion springs in 2\", 2-1/4\", 2-5/8\", and 3-3/4\" ID on every commercial truck. A 10,000-cycle residential spring on a busy Richmond dock fails inside one year — we never install residential springs on commercial doors." },
  { q: "Can you rebuild a door after a forklift strike, or does it have to be replaced?", a: "Most forklift strikes on Richmond docks are repairable — we re-section the bottom rail, straighten the vertical track, and replace the damaged panel in a single visit. Full door replacement is only necessary when the top section or spring tube is compromised. We'll tell you honestly which it is before we start." },
  { q: "What WorkSafeBC documentation do you provide?", a: "Every PM visit produces a written per-door condition report in PDF format, emailed to the facility manager. The report documents spring condition, cable and drum wear, opener force test results, and any code or WorkSafeBC issues found. Reports are held on file and can be produced for your insurer if an incident occurs." },
  { q: "Can you service a warehouse door that another company installed?", a: "Yes. We service every commercial overhead door brand in BC regardless of who installed it. We carry parts for LiftMaster, Manaras, Richards-Wilcox, Steel-Craft, Hörmann, Wayne Dalton, Garaga, and CornellCookson. If we need a specialty part, we source it within 24 hours from our Richmond supplier network." },
  { q: "Do you carry parts on the truck or order them in?", a: "Parts on the truck. Commercial torsion springs in every major ID and cycle rating, cable and drum assemblies, LiftMaster and Manaras logic boards and limit switches, dock leveler seal kits and solenoid valves, vehicle restraint hook assemblies — all on the commercial service truck. First-visit fix is the norm." },
  { q: "Do you also service the dock equipment — levelers, seals, restraints?", a: "Yes — everything on the same truck and the same callout fee. Dock leveler hydraulic repair, vehicle restraint replacement, dock seal installation, bumper replacement — the same technician who fixes the overhead door also handles the dock equipment. One invoice, one visit." },
  { q: "Why should we hire a Richmond-only vendor when Surrey and Burnaby companies bid lower?", a: "A vendor based in Surrey or Burnaby is 45–60 minutes from your door in normal Bridgeport or Knight Street traffic. We're 12 minutes from any Richmond industrial address. On an emergency callout, the variance that matters is time-to-repair, not hourly rate. On a PM contract, we combine overhead doors and dock equipment on one visit — you pay one callout, not two." },
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
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Dock Door Emergency · Richmond, BC
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Dock door down?<br />
            <span className="text-gold">Trucks waiting, money bleeding.</span>
          </h1>
          <p className="mt-5 text-white/75 text-base max-w-2xl leading-relaxed">
            We dispatch from our Richmond yard in 12–20 minutes during business hours. Every brand — LiftMaster, Manaras, Richards-Wilcox, Steel-Craft, Hörmann, Wayne Dalton, CornellCookson. Springs, cables, openers — first-visit fix is the norm.
          </p>
          <style>{`
            @keyframes emergency-pulse {
              0%   { box-shadow: 0 0 0 0 rgba(220,38,38,0.9), 0 0 12px 2px rgba(220,38,38,0.5); }
              50%  { box-shadow: 0 0 0 20px rgba(220,38,38,0.15), 0 0 24px 6px rgba(220,38,38,0.3); }
              100% { box-shadow: 0 0 0 28px rgba(220,38,38,0), 0 0 0 0 rgba(220,38,38,0); }
            }
            @keyframes emergency-shake {
              0%, 100% { transform: translateX(0); }
              20%       { transform: translateX(-3px); }
              40%       { transform: translateX(3px); }
              60%       { transform: translateX(-2px); }
              80%       { transform: translateX(2px); }
            }
            .emergency-btn { animation: emergency-pulse 1.5s ease-out infinite; }
            .emergency-btn:hover { animation: emergency-shake 0.4s ease-in-out, emergency-pulse 1.5s ease-out infinite 0.4s; }
          `}</style>
          <div className="mt-8 flex flex-col items-start gap-4">
            <a href={siteConfig.phone.href} className="emergency-btn inline-flex items-center justify-center gap-2 rounded-card bg-red-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-red-700 transition-colors duration-200">
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <a href={siteConfig.phone.href} className="flex items-center justify-center gap-2 rounded-card border border-white/30 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
              <span className="text-base">💬</span> Text us · same response
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="bg-navy-dark/5 border-y border-steel/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {["Within 1 hour business hrs", "Every brand serviced", "Parts on every truck", "30-min contract SLA"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs text-steel font-semibold">
                <IconCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" /> {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* DISPATCH STRIP */}
      <div className="bg-white border-b border-steel/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-steel text-sm leading-relaxed">
            <span className="font-bold text-navy-dark">Call now</span> — we dispatch the moment you hang up. Forklift strike, snapped spring, fried board — we have the parts on the truck and the technicians on call.
          </p>
        </div>
      </div>

      {/* PRICING AT A GLANCE */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="flex items-baseline justify-between mb-2 flex-wrap gap-3">
            <div>
              <p className="text-steel text-xs uppercase tracking-widest mb-1">Pricing at a glance</p>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark">
                Richmond warehouse contracts.
              </h2>
            </div>
            <Link href="/request-a-quote/" className="text-gold text-sm font-bold hover:underline whitespace-nowrap">
              Get a written quote →
            </Link>
          </div>
          <p className="text-steel text-sm mb-8 max-w-2xl leading-relaxed">
            Maintenance contracts are how Richmond facility managers cut emergency callouts by ~75%. All rates are for Richmond locations, on coordinated visits.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "ANNUAL PROGRAM", price: "$345/door/visit", note: "1 visit/year · 21-pt inspection · same-day priority · during business hours", highlight: false },
              { label: "BI-ANNUAL PROGRAM", price: "$310/door/visit", note: "2 visits/year ($155/door) · 15% off parts · same-day priority response", highlight: false },
              { label: "QUARTERLY ENTERPRISE", price: "$290/door/visit", note: "4 visits/year · $1,160/door/year · 30-min SLA · 24/7 emergency response", highlight: true },
              { label: "EMERGENCY CALLOUT (NON-CONTRACT)", price: "from $585 + parts", note: "12–20 min response from our Richmond yard · contract clients pay $0 on emergency calls", highlight: false },
            ].map((p) => (
              <div key={p.label} className={`rounded-card p-5 border ${p.highlight ? "bg-navy-dark text-white border-navy-dark" : "bg-white border-steel/10"}`}>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${p.highlight ? "text-gold" : "text-gold"}`}>{p.label}</p>
                <p className={`font-heading font-extrabold text-xl mb-2 ${p.highlight ? "text-white" : "text-navy-dark"}`}><span className="price-val">{p.price}</span></p>
                <p className={`text-xs leading-relaxed ${p.highlight ? "text-white/70" : "text-steel"}`}>{p.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-steel mt-4">All pricing assumes Richmond locations. Multi-site portfolios get fleet pricing. 1-year labour warranty standard on every contract. WCB-compliant documentation every visit.</p>
        </div>
      </section>

      {/* BUILT FOR FACILITY MANAGERS */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Built for facility &amp; operations managers</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3 max-w-3xl">
            A dock door offline for two hours doesn't cost $300. It cascades through pick, pack, dispatch, and OT.{" "}
            <span className="text-gold">We price the cascade out.</span>
          </h2>
          <p className="text-white/70 text-sm mb-6 max-w-2xl leading-relaxed">
            If your KPIs are uptime, MTBF, and preventive-vs-reactive ratio, your vendor list should be short and your asset register should be clean. We integrate with the way modern facility managers actually run — CMMS work-order import, multi-site asset tagging, MTBF reporting per door, and a 30-minute SLA on contract clients in any Richmond industrial corridor.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["CMMS-compatible asset register", "Per-door MTBF tracking", "WCS Part 14 documentation", "Multi-site fleet pricing", "30-min priority SLA"].map((b) => (
              <span key={b} className="text-[10px] font-bold uppercase tracking-widest border border-white/20 text-white/80 px-3 py-1.5 rounded-full">{b}</span>
            ))}
          </div>
          <div className="space-y-4 max-w-3xl mb-8">
            {[
              { icon: "📋", title: "Asset register on first PM visit", body: "Every door tagged with brand, model, serial, install year, spring cycle count, opener type — in CSV / Maximo / Limble / MaintainX / Hippo / FMX-compatible format." },
              { icon: "📊", title: "MTBF and PM-vs-reactive reporting", body: "Per door, per quarter — defensible numbers for budget reviews and SLA conversations with leadership." },
              { icon: "📄", title: "Work-order integration", body: "We accept your WO numbering, reference it on invoices, return signed completion docs in your AP format." },
              { icon: "⚡", title: "30-min on-site SLA", body: "For Quarterly Enterprise contract clients, 24/7 including statutory holidays — 12–20 min typical from our Richmond yard to any Richmond industrial address." },
              { icon: "🔒", title: "WorkSafeBC-compliant per-door condition reports", body: "Emailed as PDFs after every visit — held on file for your insurer if an incident occurs." },
              { icon: "🏢", title: "Multi-site portfolios", body: "Fleet pricing, consolidated monthly invoicing, one phone number for any door at any site." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="font-bold text-white text-sm mb-0.5">{item.title}</p>
                  <p className="text-white/60 text-xs leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/request-a-quote/" className="inline-flex items-center gap-1 text-gold text-sm font-bold hover:underline">
            Request a site walk + custom savings projection →
          </Link>
        </div>
      </section>

      {/* WAREHOUSE OPENERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Warehouse openers we service &amp; install</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            LiftMaster commercial, Manaras (Canadian-made), and high-speed roll-up specialists.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            Every commercial operator we deploy is UL 325 compliant with monitored entrapment protection. We service every model below — and most we don't list. Parts on the truck. First-visit fixes are the norm.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {operators.map((o) => <ProductCard key={o.title} {...o} />)}
          </div>
        </div>
      </section>

      {/* COMMERCIAL DOORS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Commercial doors we supply &amp; install</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Richards-Wilcox, Garaga, Steel-Craft (Canadian) · Hörmann, Wayne Dalton, CornellCookson · every brand on Richmond's industrial corridors.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            We service every commercial overhead door brand on Richmond docks regardless of who installed it. Below are the brands we most often supply for new installs and full panel rebuilds.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {commercialDoors.map((d) => <ProductCard key={d.title} {...d} />)}
          </div>
        </div>
      </section>

      {/* HIGH-CYCLE SPRINGS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">High-cycle springs on every truck</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            25,000 · 50,000 · 100,000-cycle torsion springs in 2&quot;, 2-1/4&quot;, 2-5/8&quot;, and 3-3/4&quot; ID.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            A standard 10,000-cycle residential spring on a busy Richmond dock fails inside one year. We carry the right cycle rating on the truck — first-visit fix is the norm.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {springs.map((s) => <ProductCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* RICHMOND LOCAL ADVANTAGE */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Richmond drives. We run on Richmond.</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5 max-w-3xl">
            We run on Richmond.
          </h2>
          <div className="max-w-3xl space-y-4 text-sm text-steel leading-relaxed">
            <p>
              Richmond's industrial corridors — Bridgeport, Crestwood, Mitchell Island, No. 5 Road, and the Sea Island business parks — have one of the highest concentrations of third-party logistics, food processing, and distribution warehousing in the Lower Mainland. We have been running these corridors for years.
            </p>
            <p>
              A vendor based in Surrey, Coquitlam, or Burnaby is 45–60 minutes from your door in normal traffic. In the worst cases — a Bridgeport or Knight Street crossing — it's longer. Our yard is inside Richmond. <strong className="text-navy-dark">12–20 minutes from any Richmond industrial address.</strong> That's not a marketing number — it's a drive time.
            </p>
            <p>
              On an emergency callout, the variance that matters is <strong className="text-navy-dark">time-to-repair</strong>, not hourly rate. See: address the only variable that matters.
            </p>
          </div>
        </div>
      </section>

      {/* FOUR FAILURES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Most common warehouse door failures</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-10">
            Four failures we drive to every week in Richmond.
          </h2>
          <div className="space-y-4 max-w-3xl">
            {failures.map((f) => (
              <div key={f.n} className="flex gap-5 rounded-card bg-surface border border-steel/10 p-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 text-gold font-heading font-extrabold text-sm flex items-center justify-center">
                  {f.n}
                </span>
                <div>
                  <p className="font-heading font-bold text-navy-dark mb-1">{f.title}</p>
                  <p className="text-sm text-steel leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE CONTRACT TIERS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Preventive maintenance</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
            Three contract tiers. Same 21-point checklist. Different visit frequency.
          </h2>
          <p className="text-steel text-sm mb-8 max-w-2xl leading-relaxed">
            A reactive relationship with a warehouse facility manager fails both parties when the same failure damages door number three. Emergency calls are a signal, not a service model. Below are the three tiers we offer Richmond facilities — one PM visit to quarterly enterprise.
          </p>
          <div className="space-y-5 max-w-3xl">
            {[
              {
                tier: "Tier 1 – Annual", price: "from $345/door/year",
                body: "One visit per door · 21-pt inspection per door · lubrication, balance tracking, opener origin test · written condition report · 10% discount on parts & repairs · same-day priority response during business hours.",
              },
              {
                tier: "Tier 2 – Bi-Annual", price: "from $310/door/visit",
                body: "Two scheduled visits per year (every 6 months) · same 21-point inspection per door · spring & opener measurement · dock & leveler inspection · 15% discount on parts & repairs · 45-min priority SLA during business hours.",
              },
              {
                tier: "Tier 3 – Quarterly Enterprise", price: "from $290/door/visit",
                body: "Four scheduled visits per year · same 21-point inspection per door · annual failure projection on every door · MTBF/condition reporting · 20% discount on parts & repairs · 30-min emergency SLA 24/7 · quarterly review meeting with operations. Multi-site portfolios get fleet pricing across the combined contract.",
              },
            ].map((t) => (
              <div key={t.tier} className="rounded-card bg-white border border-steel/10 p-6">
                <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
                  <p className="font-heading font-extrabold text-navy-dark">{t.tier}</p>
                  <p className="font-heading font-bold text-gold text-sm"><span className="price-val">{t.price}</span></p>
                </div>
                <p className="text-sm text-steel leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18-DOOR COST COMPARISON */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Contract vs. break-fix</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
            What an 18-door facility actually pays under contract vs. break-fix.
          </h2>
          <div className="max-w-3xl overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy-dark text-white">
                  <th className="text-left px-4 py-3 font-heading font-bold rounded-tl-card">Cost Driver</th>
                  <th className="text-center px-4 py-3 font-heading font-bold">Break-Fix Only</th>
                  <th className="text-center px-4 py-3 font-heading font-bold text-gold rounded-tr-card">Bi-Annual Contract</th>
                  <th className="text-center px-4 py-3 font-heading font-bold text-gold">Annual Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-steel/10">
                {[
                  ["Emergency call-outs (avg)", "$3,600", "$0 (priority year)", "$3,600"],
                  ["Spring & cable replacements", "$5,580", "$4,900 (15% off)", "$670"],
                  ["Downtime (1-hr, 5 hrs)", "$21,250", "$3,040 (1-2 hrs insured)", "$18,400"],
                  ["Maintenance contract fee", "$0", "$3,552 (18 × 2 visits × $310)", "—"],
                  ["Total annual cost", "$30,430", "$11,492", "$18,938 saved"],
                ].map(([label, col1, col2, col3], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className={`px-4 py-3 text-xs ${i === 4 ? "font-extrabold text-navy-dark" : "font-semibold text-navy-dark"}`}>{label}</td>
                    <td className={`px-4 py-3 text-center text-xs ${i === 4 ? "font-bold text-navy-dark" : "text-steel"}`}>{col1}</td>
                    <td className={`px-4 py-3 text-center text-xs bg-gold/5 ${i === 4 ? "font-bold text-navy-dark" : "text-steel"}`}>{col2}</td>
                    <td className={`px-4 py-3 text-center text-xs ${i === 4 ? "font-extrabold text-gold" : "text-steel"}`}>{col3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-steel mt-4 max-w-2xl leading-relaxed">Sample figures for a typical 18-door Richmond facility. Your numbers will vary — ask for a custom savings projection based on your facility's door count, age, and shipping volume.</p>
        </div>
      </section>

      {/* EVERY BRAND */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Brand coverage</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
            Every brand of commercial overhead door installed in Richmond — all on the stock.
          </h2>
          <p className="text-steel text-sm mb-6 max-w-3xl leading-relaxed">
            We service every commercial overhead door brand in BC regardless of who installed it — Richards-Wilcox, Steel-Craft, Hörmann, Wayne Dalton, Garaga, CornellCookson, Clopay Commercial, Northwest Door, Dominion, Entrematic. LiftMaster commercial. Manaras Optio. Rytec and Albany high-speed.
          </p>
          <div className="max-w-3xl grid sm:grid-cols-2 gap-2 mb-8">
            {[
              "Commercial and industrial overhead door repair (insulated and non-insulated)",
              "Rolling steel doors and coiling grilles",
              "High-cycle commercial torsion springs for 2\", 2-1/4\", 2-5/8\", 3-3/4\" ID",
              "Jackshaft cables, commercial springs, cable carriers",
              "Dock doors with break-away bottom section",
              "LiftMaster commercial logic boards and limit switches",
              "Manaras Opera gear assemblies",
              "Bottom storage seals, pan seals, weather stripping",
              "Track and slat replacement before warranty 60-day commercial",
              "Fire-rated assembly inspection and label replacement",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-xs text-steel">
                <IconCheck className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" /> {item}
              </div>
            ))}
          </div>

          <p className="text-steel text-xs uppercase tracking-widest mb-3 mt-8">Every kind of Richmond warehouse — we&apos;ve been on the dock</p>
          <div className="flex flex-wrap gap-2 max-w-3xl">
            {[
              "3PL & cross-docking — Mitchell Island, Bridgeport corridor",
              "Distribution centres — East Cambie, Crestwood, Marine Drive",
              "Cold storage & food grade — Bridgeport food district",
              "Self-storage & lite service — Bridgeport Road, Sea Island",
              "Manufacturing & light industrial — Crestwood, Riverside Business Park",
              "Marine & seafood processing — Steveston channel, Mitchell Island Fraser frontage",
              "Aviation-related industrial — Sea Island, YVR adjacent",
            ].map((item) => (
              <span key={item} className="bg-white border border-steel/10 text-steel text-xs px-3 py-1.5 rounded-full">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            Frequently asked questions.
          </h2>
          <div className="max-w-3xl space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-card bg-surface border border-steel/10 p-5">
                <p className="font-heading font-bold text-navy-dark mb-2 text-sm">{f.q}</p>
                <p className="text-sm text-steel leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaSection service="Warehouse & Loading Dock Service" />

      {/* CTA */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">
            Free site walk. We write your proposal in 48 hours.
          </h2>
          <p className="text-white/70 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            Give us your address, and we'll do a free on-site walk, inventory every door, identify the high-risk units, and return a written maintenance proposal sized to your facility. No obligation, no-sale pitch.
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
              Request Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
