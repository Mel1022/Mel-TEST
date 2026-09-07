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

const hardwareFailures = [
  {
    num: "1",
    title: "Door Closer Failure",
    body: "The door is still fine — the closer above it isn't. Hydraulic fluid leaks internally, the valve seat wears, or the adjusting screws vibrate loose. The door stops pulling itself shut, the fire separation is broken, and you have a code violation the moment a fire marshal walks through.\n\nCommon brands we service: LCN · Norton · Dorma · Sargent · Stanley · Yale. Parts on every truck — most closer repairs are completed same visit.",
  },
  {
    num: "2",
    title: "Hinge Sag and Stripped Screws",
    body: "A heavy steel mandoor on worn hinges drops at the latch end. The door drags on the frame, the latch won't engage, and the closer fights the misalignment until it fails too. Stripped screw holes in hollow metal frames are a separate but related problem — the screws spin but don't hold.\n\nWe replace worn hinge pins, fill stripped holes with anchoring epoxy, and reinstall with full-length hinge screws. Continuous hinge replacements and full hinge sets done on-site.",
  },
  {
    num: "3",
    title: "Panic Hardware (Exit Device) Failure",
    body: "Push-bar panic devices take thousands of cycles a year. The latch retraction mechanism wears, the push bar sags, or the dogging cam fails. In a fire, a panic device that doesn't retract cleanly is a life-safety failure — and in a code inspection, a non-functioning exit device is an immediate deficiency.\n\nBrands we carry: Von Duprin · Detex · Yale · Sargent. Push-bar adjustment, dogging, latch retraction repair, and full device replacement — all done first visit.",
  },
  {
    num: "4",
    title: "Weather Seal Degradation",
    body: "The bottom sweep wears through. The perimeter seal compresses and loses contact. On fire-rated doors, the intumescent strip that expands to seal smoke and flame becomes brittle and cracks. The result: draft, water infiltration, and a fire assembly that no longer works as rated.\n\nWe replace bottom sweeps, perimeter seals, door shoes, astragals, and intumescent strips. Only UL-listed intumescent seals on rated assemblies — no substitutions.",
  },
  {
    num: "5",
    title: "Frame Damage",
    body: "A forklift clip, a door kicked open too hard, or years of settling can bend or pull a frame out of plumb. A twisted frame means the door can't close squarely — the closer fights the misalignment and fails early, the latch won't seat, and the fire separation is compromised.\n\nWe straighten bent frames, re-anchor pulled-out frames, and replace frames when damage is too severe. Steel replacement frames with the correct fire rating — no wood substitutions in rated openings.",
  },
];

const closers = [
  {
    badge: "HEAVY-DUTY SURFACE",
    brandModel: "LCN 4040XP",
    title: "LCN 4040XP / 4030 Series",
    desc: "The North American workhorse. The single most common closer on Richmond commercial mandoors.",
    features: ["Cast iron body", "Adjustable spring sizes 1–6", "ANSI A156.4 Grade 1", "Hold-open arm option", "Backcheck + delayed action", "10-yr warranty"],
    img: "/images/mandoor-closer-lcn-4040xp.webp",
    viewUrl: "https://www.lcnclosers.com",
    viewLabel: "View on LCN (Allegion)",
  },
  {
    badge: "HEAVY-DUTY SURFACE",
    brandModel: "NORTON 8501/8500",
    title: "Norton 8501 / 8500 Series",
    desc: "Premium grade-1 closer. Common in Richmond institutional and high-cycle commercial.",
    features: ["Tri-style: regular/parallel/top-jamb", "Sizes 1–6 spring", "Adjustable hydraulic backcheck", "ANSI A156.4 Grade 1", "Stainless arm available", "Fire-rated compatible"],
    img: "/images/mandoor-closer-norton-8501.webp",
    viewUrl: "https://www.nortondoorcontrols.com",
    viewLabel: "View on Norton (ASSA ABLOY)",
  },
  {
    badge: "INDUSTRIAL CONCEALED",
    brandModel: "DORMA TS83",
    title: "DormaKaba TS83",
    desc: "German-engineered. Common on Richmond European-influenced commercial buildings and high-end strata.",
    features: ["Adjustable EN 2–6 force", "Built-in hold-open option", "Slim transom design", "Fire-rated UL 10C", "10-yr warranty", "Surface or transom mount"],
    img: "/images/mandoor-closer-dorma-ts83.webp",
    viewUrl: "https://www.dormakaba.com",
    viewLabel: "View on DormaKaba.com",
  },
  {
    badge: "GRADE-1 SURFACE",
    brandModel: "SARGENT 281 / 351",
    title: "Sargent 281 / 351 Series",
    desc: "Robust commercial closer. Common on Richmond warehouse personnel entries — built to take abuse.",
    features: ["ANSI A156.4 Grade 1", "Sizes 1–6", "Adjustable backcheck + delayed action", "Hold-open optional", "Stainless arm available", "10-yr warranty"],
    img: "/images/mandoor-closer-sargent-281.webp",
    viewUrl: "https://www.sargentlock.com",
    viewLabel: "View on SargentLock.com",
  },
  {
    badge: "ELECTROMAGNETIC HOLD-OPEN",
    brandModel: "LCN SEM 7800",
    title: "LCN SEM Smoke-Activated Hold-Open",
    desc: "The right way to legally prop a fire-rated door open — auto-releases on alarm. Replaces the wedge.",
    features: ["Magnetic hold-open arm", "Releases on fire alarm signal", "Code-compliant prop-open", "Wired to fire panel", "UL listed", "Required for legal hold-open"],
    img: "/images/mandoor-closer-lcn-sem-magnetic.webp",
    viewUrl: "https://www.lcnclosers.com",
    viewLabel: "View on LCN (Allegion)",
  },
  {
    badge: "PNEUMATIC INDUSTRIAL",
    brandModel: "SARGENT 1330",
    title: "Sargent 1330 Pneumatic Closer",
    desc: "Specialty closer for high-cycle warehouse use. Pneumatic operation, longer life under heavy use.",
    features: ["Pneumatic operation", "Heaviest-duty available", "Cold-weather compatible", "10-yr warranty", "For >500 cycles/day", "Often replaces failed hydraulic units"],
    img: "/images/mandoor-closer-sargent-1330-pneumatic.webp",
    viewUrl: "https://www.sargentlock.com",
    viewLabel: "View on SargentLock.com",
  },
];

const panicDevices = [
  {
    badge: "INDUSTRY STANDARD RIM",
    brandModel: "VON DUPRIN 99",
    title: "Von Duprin 99 Rim Exit Device",
    desc: "The standard panic bar across North American commercial — used where the building owner wants 50-year hardware.",
    features: ["ANSI A156.3 Grade 1", "Fire-rated UL 10C", "Rim, mortise, surface vertical rod, concealed vertical rod options", "ADA push-pad design", "Stainless or anodized finish"],
    img: "/images/mandoor-panic-von-duprin-99.webp",
    viewUrl: "https://www.vonduprin.com",
    viewLabel: "View on Von Duprin (Allegion)",
  },
  {
    badge: "HEAVY COMMERCIAL RIM",
    brandModel: "SARGENT 80 SERIES",
    title: "Sargent 80 Series Exit Device",
    desc: "Grade-1 panic device with electrified options. Common in Richmond high-security and access-controlled commercial.",
    features: ["ANSI A156.3 Grade 1", "Fire-rated variants", "Electrified rim / mortise options", "Request-to-exit signalling", "10-yr warranty", "Direct retrofit for Von Duprin 99"],
    img: "/images/mandoor-panic-sargent-80.webp",
    viewUrl: "https://www.sargentlock.com",
    viewLabel: "View on SargentLock.com",
  },
  {
    badge: "CONCEALED VERTICAL ROD",
    brandModel: "YALE 7000 / FALCON 25",
    title: "Yale 7000 / Falcon 25 CVR",
    desc: "Concealed vertical-rod variant — used where aesthetics matter on Richmond commercial entries.",
    features: ["Rods hidden inside door", "Top + bottom latching", "Fire-rated 3-hr", "Wider door applications", "Higher cost, cleaner look", "Pairs available"],
    img: "/images/mandoor-panic-yale-7000-cvr.webp",
    viewUrl: "https://www.assaabloydss.com",
    viewLabel: "View on Yale (ASSA ABLOY)",
  },
  {
    badge: "INDUSTRIAL TOUCH-BAR",
    brandModel: "DETEX ADVANTEX / V40 SERIES",
    title: "Detex V40 / Advantex",
    desc: "Industrial-grade alarm and night-latch exit devices. Common at Richmond warehouse delayed-egress and back-of-house.",
    features: ["Audible/visual alarm options", "Delayed-egress models", "Cellular-tested rugged build", "Battery backup variants", "Tamper-resistant", "Ideal for night-security applications"],
    img: "/images/mandoor-panic-detex-v40.webp",
    viewUrl: "https://www.detex.com",
    viewLabel: "View on Detex.com",
  },
];

const locks = [
  {
    badge: "GRADE-1 MORTISE",
    brandModel: "SCHLAGE L9000",
    title: "Schlage L9000 Mortise Lock",
    desc: "The premium mortise lockset for Richmond commercial — used where the building owner wants 50-year hardware.",
    features: ["ANSI A156.13 Grade 1", "Replaceable stainless faceplate", "Cylinder-controlled trim", "Modular function changes", "Lifetime mechanical warranty", "Best-in-class corrosion resistance"],
    img: "/images/mandoor-lock-schlage-l9000.webp",
    viewUrl: "https://www.schlage.com",
    viewLabel: "View on Schlage (Allegion)",
  },
  {
    badge: "GRADE-1 CYLINDRICAL",
    brandModel: "SCHLAGE AL SERIES",
    title: "Schlage AL Series Cylindrical Lock",
    desc: "Grade-1 cylindrical lock for commercial mandoors that don't need mortise. Standard Richmond commercial spec.",
    features: ["ANSI A156.2 Grade 1", "2-3/4\" backset standard", "Anti-tamper trim", "Stainless construction", "ADA-compliant levers", "Easy retrofit"],
    img: "/images/mandoor-lock-schlage-al.webp",
    viewUrl: "https://www.schlage.com",
    viewLabel: "View on Schlage (Allegion)",
  },
  {
    badge: "HEAVY-DUTY MORTISE",
    brandModel: "SARGENT 8200",
    title: "Sargent 8200 Mortise Lockset",
    desc: "Commercial mortise alternative to Schlage L9000. Common on Richmond institutional and government buildings.",
    features: ["ANSI A156.13 Grade 1", "Construction master keying", "Anti-friction latch bolt", "Architectural finishes", "Lifetime warranty", "Cross-references to Yale 8800"],
    img: "/images/mandoor-lock-sargent-8200.webp",
    viewUrl: "https://www.sargentlock.com",
    viewLabel: "View on SargentLock.com",
  },
  {
    badge: "ELECTRIFIED MORTISE",
    brandModel: "SCHLAGE L9000 EL/EU",
    title: "Schlage L9000 Electrified Mortise",
    desc: "Electric-strike or electrified-trim mortise for access-controlled Richmond commercial doors.",
    features: ["Fail-safe (EL) or fail-secure (EU)", "12V or 24V DC", "Request-to-exit signal", "Door position switch optional", "Integrates with card-reader access", "ADA compliant"],
    img: "/images/mandoor-lock-schlage-l9000-electrified.webp",
    viewUrl: "https://www.schlage.com",
    viewLabel: "View on Schlage (Allegion)",
  },
];

const hinges = [
  {
    badge: "HEAVY-DUTY BALL-BEARING",
    brandModel: "HAGER BB1199 / BB1191",
    title: "Hager BB1199 / BB1191",
    desc: "The most common ball-bearing hinge on Richmond hollow-metal mandoors. 4½\"×4½\" standard.",
    features: ["4½\"×4½\" standard · 5\"×4½\" heavy", "Ball-bearing for high cycle", "Stainless-clad option", "NRP (non-removable pin) available", "Stainless steel option", "Lifetime warranty"],
    img: "/images/mandoor-hinge-hager-bb1199.webp",
    viewUrl: "https://www.hagerco.com",
    viewLabel: "View on Hager.com",
  },
  {
    badge: "CONTINUOUS & BARREL",
    brandModel: "STANLEY BBRC / ASSA ABLOY CHK",
    title: "Continuous hinge — gear or pin-and-barrel",
    desc: "Continuous hinges for high-cycle Richmond warehouse and facility entries. Eliminates hinge point-load failures.",
    features: ["Full door-edge support", "Ideal for high-cycle doors", "Aluminum or steel frame-friendly", "Aluminum or steel, multiple finishes", "NRP (non-removable pin) options", "Single hinge — simpler alignment"],
    img: "/images/mandoor-hinge-continuous.webp",
    viewUrl: "https://www.stanleysecurity.com",
    viewLabel: "View on Stanley (ASSA ABLOY CHK)",
  },
  {
    badge: "SPRING HINGE",
    brandModel: "BOMMER SPRING HINGE",
    title: "Bommer Spring Hinge",
    desc: "Self-closing spring hinge for Richmond mandoors that must self-close but don't justify a door closer.",
    features: ["Built-in spring release", "No surface closer needed", "Fire-code suitable", "Tension adjustable", "Lower cost than closer equipment", "Stainless 4\"×4\" · 4½\"×4½\""],
    img: "/images/mandoor-hinge-bommer-spring.webp",
    viewUrl: "https://www.bommer.com",
    viewLabel: "View on Bommer.com",
  },
  {
    badge: "STAINLESS HEAVY-CYCLE",
    brandModel: "STANLEY HEAVY-CYCLE SERIES",
    title: "Stanley heavy-cycle hinges",
    desc: "Stainless steel hinges for Richmond food-grade, wash-down, and coastal environments.",
    features: ["304 or 316 stainless construction", "Continuous-service", "Ball-bearing pin", "Coastal environment approved", "Greater thickness standard", "Specify stainless for food/wash-down"],
    img: "/images/mandoor-hinge-stainless-ball-bearing.webp",
    viewUrl: "https://www.hagerco.com",
    viewLabel: "View on Hager.com",
  },
];

const hollowMetalDoors = [
  {
    badge: "STANDARD HOLLOW METAL",
    brandModel: "CURRIES 707 / STEELCRAFT 1. SERIES",
    title: "Curries 707 / Steelcraft 1. Series",
    desc: "The broad and wide Richmond door. Most available Richmond door — where the building owner wants 30-70 sizes.",
    features: ["20 to 70 sizes", "ANSI A250.8 Level 2 standard", "Embossment for stile options", "A variety of core options", "5–10 business-day lead", "Available from ASSA ABLOY"],
    img: "/images/mandoor-door-curries-707.webp",
    viewUrl: "https://www.assaabloydss.com",
    viewLabel: "View on ASSA ABLOY (catalogue)",
  },
  {
    badge: "FIRE-RATED HOLLOW METAL",
    brandModel: "STEELCRAFT L-SERIES FIRE-RATED",
    title: "Steelcraft L-Series Fire-Rated",
    desc: "UL-listed fire-rated hollow metal. Multiple fire ratings from LCN Allegion rated frames. Richmond standard.",
    features: ["20, 45, 60, 90-min fire ratings", "17 or 18 closers top and sides", "Pin-replaceable, lockable steel", "Embossment to lower size tolerance", "Various core options", "For fire-rated openings only"],
    img: "/images/mandoor-door-steelcraft-firerated.webp",
    viewUrl: "https://www.assaabloydss.com",
    viewLabel: "View on Steelcraft (catalogue)",
  },
  {
    badge: "HEAVY-DUTY INDUSTRIAL",
    brandModel: "DCI / PEMKO 16-GAUGE INDUSTRIAL",
    title: "DCI / Pemko 16-gauge industrial",
    desc: "Heavy-gauge hollow metal for Richmond warehouse/commercial entries that take forklift and cart abuse.",
    features: ["16-ga steel minimum", "Max-cycle option", "Flush/raised panel options", "Dimensional frame drop", "Maximum-grade reinforcement", "Available to maximum gauge dimension"],
    img: "/images/mandoor-door-dci-18ga-industrial.webp",
    viewUrl: "https://www.assaabloydss.com",
    viewLabel: "View on Steelcraft (catalogue)",
  },
  {
    badge: "ARCHITECTURAL FINISHES",
    brandModel: "ARCHITECTURAL-FINISH MANDOORS",
    title: "Architectural-finish mandoors",
    desc: "Factory-finished stainless or rough-coat mandoor for Richmond commercial strata that have the tools.",
    features: ["Factory-finish stain", "Texture options available", "Custom sizes standard", "Standard A250.8 base", "Field + paint available", "ASA + ANSI colours available (SPEC)"],
    img: "/images/mandoor-door-architectural.webp",
    viewUrl: "https://www.assaabloydss.com",
    viewLabel: "View on ASSA ABLOY (catalogue)",
  },
];

const fireRatings = [
  { min: "20 min", use: "Interior non-rated corridor openings. NFPA 80 minimum for doors that aren't part of a fire-rated wall assembly. Common in offices and retail." },
  { min: "45 min", use: "1¾-hour assemblies at interior partitions, mechanical rooms, and low-risk service corridors. Often specified by architects in mixed-use buildings." },
  { min: "60 min", use: "Standard warehouse and light-industrial fire separations. Required at occupancy boundaries in most BC industrial buildings." },
  { min: "90 min", use: "The most common rating in Richmond commercial buildings. Required at 2-hour-rated separations — between floors, between tenants, and at exit corridor walls." },
  { min: "180 min", use: "Stairwell enclosures and high-rise buildings. 3-hour-rated assemblies at exit stairs and vertical shafts. Full panic hardware required by BC Fire Code." },
];

const specLanguage = [
  "ANSI A250.8 Level 2 (heavy commercial) minimum — 16-gauge cold-rolled steel door face",
  "Steel frame, 16-gauge welded construction with full-height anchors at head and jambs",
  "Door thickness: 1¾\" (45mm) standard commercial — 1⅜\" for interior non-rated applications only",
  "Fire rating: 20 / 45 / 60 / 90-min UL-listed assembly (door + frame + closer + hardware must all carry the rating)",
  "Door closer: ANSI A156.4 Grade 1 — surface-mounted or concealed overhead",
  "Lockset: ANSI A156.13 mortise, or ANSI A156.2 cylindrical — Grade 1 commercial minimum",
  "Panic device: UL listed · ANSI A156.3 · must be listed for the fire rating of the opening",
  "Hinges: NRP (non-removable pin) security hinges on outswing exterior and stairwell doors",
  "Brands: Allegion (LCN, Schlage, Von Duprin) · ASSA ABLOY (Yale, Norton, Sargent) · Stanley Security",
];

const faqs = [
  { q: "What's the difference between a mandoor and a regular pedestrian door?", a: "A mandoor (man door) is a commercial-grade walk-through door in a steel frame with a commercial door closer, commercial latch, and — in rated openings — fire-rated hardware throughout. A residential door uses lighter construction, residential-grade hardware, and is not suitable for commercial occupancy under BC Building Code." },
  { q: "Can a fire-rated door be propped open?", a: "Only with a code-compliant electromagnetic hold-open device (like the LCN SEM) that automatically releases when the fire alarm activates. A wedge, brick, or tied-open door closer violates BC Fire Code and voids the fire assembly. We install and wire code-compliant hold-opens." },
  { q: "What's the typical lifespan of a commercial mandoor closer?", a: "10–15 years under normal commercial use. High-cycle doors (>200 opens/day) may need replacement at 5–8 years. Pneumatic closers typically outlast hydraulic units under heavy use. We stock the most common units on every truck — closer replacement is a 30-minute job." },
  { q: "Can you fix my building's mandoors to match?", a: "Yes. We can source matching hardware finishes (satin stainless, dark bronze, black) across closer, latch, hinge, and panic device for a consistent look. Finish matching is common in strata buildings and high-end commercial renovations." },
  { q: "What's the difference between hollow metal and aluminium entrance doors?", a: "Hollow metal doors (steel) are used for fire-rated, security, and service applications — warehouses, stairwells, mechanical rooms. Aluminium entrance doors are used for storefront and lobby entries where aesthetics matter more than fire rating. We service hollow metal; aluminium entrance doors are a different trade." },
  { q: "Can you supply doors in custom sizes?", a: "Yes. Standard sizes (32\"×80\", 36\"×80\", 36\"×84\") are typically 5–10 business days. Custom widths and heights are 3–6 weeks from Curries, Steelcraft, or DCI. We'll quote firm lead times and price before you commit." },
  { q: "How do I know if my building's mandoors are fire-rated?", a: "Look for a fire label stamped or riveted to the top rail or hinge edge of the door. It shows the UL listing, the fire rating in minutes, and the manufacturer. If the label is missing, painted over, or illegible, that's a code violation — call us for a replacement." },
  { q: "Do you handle electrified hardware — magnetic locks, electric strikes, access control?", a: "Yes. We supply and install electric strikes, magnetic locks, request-to-exit sensors, and door position switches. For complex access control systems (multi-reader, software-managed), we coordinate with your IT or access control integrator — we handle the door hardware side." },
  { q: "How quickly can a new fire-rated mandoor be installed?", a: "Standard fire-rated sizes (36\"×80\", 90-min rated) from stock: 1–3 business days from order to installation. Custom sizes: 3–6 weeks lead time. We'll remove the old door and frame, install the new assembly, set and test all hardware, and produce the written fire-label inspection report same day." },
  { q: "Can a strata corporation contract mandoor service alongside garage door service?", a: "Yes — that's the most common arrangement for Richmond strata warehouse complexes. One facility contract covers overhead doors, dock equipment, and mandoors for the entire property. Single invoice, single visit schedule, single point of contact. Contact us for a property walk-through and quote." },
];

function ProductCard({ badge, brandModel, title, desc, features, img, viewUrl, viewLabel }: {
  badge: string;
  brandModel: string;
  title: string;
  desc: string;
  features: string[];
  img?: string;
  viewUrl?: string;
  viewLabel?: string;
}) {
  return (
    <div className="rounded-card border border-steel/15 bg-white flex flex-col overflow-hidden shadow-card">
      <div className="relative bg-steel/5 h-44 flex items-center justify-center">
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-contain p-4" />
        ) : (
          <span className="text-steel/30 text-sm text-center px-4">{title}</span>
        )}
        <span className="absolute top-3 right-3 bg-navy-dark text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
          {badge}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-gold font-bold uppercase tracking-wide text-xs mb-1">{brandModel}</p>
        <h3 className="font-heading font-bold text-navy-dark text-base mb-2 leading-snug">{title}</h3>
        <p className="text-xs text-steel italic mb-3 leading-relaxed">{desc}</p>
        <ul className="space-y-1 mb-4 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-steel">
              <IconCheck className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        {viewUrl && (
          <a href={viewUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-steel/60 hover:text-steel mb-3 flex items-center gap-1">
            <span>↗</span> {viewLabel}
          </a>
        )}
        <Link href="/request-a-quote/" className="block text-center bg-gold text-navy-dark font-bold text-sm py-2.5 rounded-card hover:bg-gold-dark hover:text-white transition-colors">
          Get a Quote
        </Link>
      </div>
    </div>
  );
}

export default function CommercialPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/commercial-hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-green-900/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-block bg-white/15 border border-white/40 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Mandoor Service · Richmond, BC
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Closer leaking, fire label peeling, door wedged open?{" "}
            <span className="text-gold">We fix it before the inspector finds it.</span>
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
          <p className="text-steel text-sm mb-8 max-w-3xl leading-relaxed">
            The smart structure for any Richmond building with multiple mandoors: a single visit covers every door on the property, with per-door rates that drop sharply with volume.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingItems.map((item) => (
              <div key={item.label} className="rounded-card border border-steel/15 bg-white p-5 flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <img src={item.img} alt={item.label} className="w-16 h-16 object-cover rounded flex-shrink-0" />
                  <span className="text-navy-dark font-bold uppercase tracking-wide text-xs leading-snug mt-1">{item.label}</span>
                </div>
                <p className="font-heading font-extrabold text-navy-dark text-xl leading-tight mb-2">{item.price}</p>
                <p className="text-xs text-steel leading-relaxed mt-auto">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-steel mt-6 leading-relaxed">
            Bundled with overhead door / dock equipment / sliding gate maintenance under a single facility contract. Volume rates apply at 4+ doors on a coordinated visit. 2-year labour warranty on every job.
          </p>
          <div className="mt-4 sm:hidden">
            <Link href="/request-a-quote/" className="inline-flex items-center text-sm font-bold text-gold hover:underline">Get a written quote →</Link>
          </div>
        </div>
      </section>

      {/* TERMINOLOGY */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
              Mandoor, man door, personnel door, pedestrian door — same door, different names
            </h2>
            <p className="text-steel leading-relaxed mb-4">
              Whatever your building manager calls it, it's the same thing: a walk-through steel door in a commercial building. Back doors, stairwell doors, mechanical room doors, fire exits, interior corridor doors — every one of them is a mandoor. The name changes by industry and region; the hardware problems are identical.
            </p>
            <p className="text-steel leading-relaxed mb-4">
              In Richmond warehouses and industrial buildings, "mandoor" is the most common term. Property managers often say "personnel door." Architects specify "hollow metal door" or "HM door." General contractors write "steel door assembly." Fire marshals inspect "fire-rated door assemblies." We service them all.
            </p>
            <p className="text-steel leading-relaxed">
              A mandoor in a commercial building is not a residential door. It's a 16-gauge or heavier steel leaf in a welded steel frame, with a commercial-grade door closer, a multi-point latch, and — in rated applications — fire-rated hardware throughout. Residential hardware is not compliant and will fail inspection.
            </p>
          </div>
        </div>
      </section>

      {/* HARDWARE FAILURES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">
            It's almost never the door itself — it's the hardware
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl">
            A steel mandoor lasts 30–50 years. The hardware on it — closer, hinges, latch, seals — lasts 5–15 years under commercial use. These are the five failures we fix most often in Richmond buildings.
          </p>
          <div className="space-y-8">
            {hardwareFailures.map((item) => (
              <div key={item.num} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-dark flex items-center justify-center">
                  <span className="text-gold font-bold text-sm">{item.num}</span>
                </div>
                <div className="flex-1 pb-8 border-b border-steel/10 last:border-0 last:pb-0">
                  <h3 className="font-heading font-bold text-lg text-navy-dark mb-3">{item.title}</h3>
                  <p className="text-steel text-sm leading-relaxed whitespace-pre-line">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOOR CLOSERS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Door closers — the single most-replaced mandoor part</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            LCN · Norton · Dorma · Sargent · Yale · Falcon.<br className="hidden sm:block" />
            Hydraulic, pneumatic, electromagnetic hold-open.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            A failed closer on a fire-rated mandoor is an instant code violation — the door is no longer self-closing. Closer replacement is a 30-minute job. We stock the most common units on every truck.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {closers.map((c) => <ProductCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* PANIC / EXIT HARDWARE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Panic / exit hardware</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Von Duprin · Sargent · Yale · Detex · Falcon.<br className="hidden sm:block" />
            Rim, mortise, vertical-rod, electrified.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            A panic bar that won't retract from the inside is a code violation that gets buildings shut down on inspection. We service every major brand and stock the most common rim devices on the truck.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {panicDevices.map((p) => <ProductCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* LOCKS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Locks, mortise &amp; cylindrical</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Schlage · Sargent · Yale · Corbin Russwin.<br className="hidden sm:block" />
            Mechanical and electrified options.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            We supply and re-key every major brand. For high-security applications (restricted keyways, master-key schedules) we partner with a Richmond commercial locksmith for cylinder work.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locks.map((l) => <ProductCard key={l.title} {...l} />)}
          </div>
        </div>
      </section>

      {/* HINGES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Hinges</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Standard ball-bearing · Continuous · Spring · Stainless.<br className="hidden sm:block" />
            Pin types: standard, non-removable, hospital tip.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            Hinge sag and stripped frame screws are the second most common mandoor failure in Richmond. We fit hinges and install anchor epoxy the same visit.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hinges.map((h) => <ProductCard key={h.title} {...h} />)}
          </div>
        </div>
      </section>

      {/* NEW DOORS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Follow ANSI doors &amp; frames on supply</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Curries · Steelcraft · DCI · Pemko · Republic · Mesker.<br className="hidden sm:block" />
            ANSI A250.8 SDI Level 2 standard.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            All doors supplied with matching hollow metal frames, 16-gauge minimum. Fire-rated doors include label inspection and fire-label compliance installation.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hollowMetalDoors.map((d) => <ProductCard key={d.title} {...d} />)}
          </div>
        </div>
      </section>

      {/* FIRE RATINGS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">
            30, 45, 60, 90, or 180 minutes — your building tells you which
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            Fire-rated mandoors are assemblies, not just doors. The rating (stamped on the fire label) tells you how long the assembly must contain fire and smoke. BC Building Code and BC Fire Code specify which rating is required at each type of opening.
          </p>
          <div className="space-y-4 max-w-3xl">
            {fireRatings.map((r) => (
              <div key={r.min} className="flex gap-5 p-5 rounded-card bg-surface border border-steel/10">
                <div className="flex-shrink-0">
                  <span className="inline-block bg-navy-dark text-gold font-bold text-sm px-3 py-1.5 rounded">{r.min}</span>
                </div>
                <p className="text-steel text-sm leading-relaxed">{r.use}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-card bg-surface border border-steel/10 max-w-3xl">
            <p className="text-sm text-steel leading-relaxed">
              <span className="font-bold text-navy-dark">BC Fire Code requirement:</span>{" "}
              Annual inspection and written documentation of all fire-rated door assemblies. A peeling, missing, or painted-over fire label is an immediate deficiency. A closer adjusted to hold the door open voids the assembly's fire rating. We produce the written inspection report on-site.
            </p>
          </div>
        </div>
      </section>

      {/* SPEC LANGUAGE */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-4">
                Spec language facility managers and GCs use
              </h2>
              <p className="text-steel text-sm leading-relaxed mb-6">
                When you're specifying a mandoor replacement or writing a maintenance scope, here's the language that ensures you get commercial-grade hardware — not residential product installed in a commercial opening.
              </p>
              <p className="text-steel text-sm leading-relaxed">
                We supply and install to these specs on every new door and replacement job. If your RFP or lease agreement specifies a standard, we'll match it and document compliance in writing.
              </p>
            </div>
            <ul className="space-y-3">
              {specLanguage.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-steel text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ECONOMICS OF ONE TRUCK */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
              The economics of one truck for both doors
            </h2>
            <p className="text-steel leading-relaxed mb-5">
              Most Richmond commercial buildings pay two separate service companies — one for overhead doors and dock equipment, one for mandoors. The overhead door company won't touch the mandoor closer. The locksmith won't touch the overhead door spring. You get two callout fees, two invoices, two scheduling windows, and two sets of markup on parts.
            </p>
            <p className="text-steel leading-relaxed mb-6">
              We handle both on the same truck. One technician walks the property, inspects every door, and returns a single written proposal. Parts for overhead doors, dock equipment, and mandoors are on the same vehicle. Work is invoiced on a single ticket.
            </p>
            <p className="font-bold text-navy-dark text-sm mb-4">When we use the same truck for both:</p>
            <ul className="space-y-2 mb-6">
              {[
                "One callout fee covers the entire property — overhead and mandoors",
                "Per-door PM rates drop sharply when mandoors are bundled with the overhead door visit",
                "Parts markup is consistent across all door types on the same job",
                "One point of contact for scheduling, invoicing, and warranty claims",
                "Written report covers all door types — one document for your records",
                "Facility contract covers overhead doors + dock equipment + mandoors under one agreement",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-steel text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-steel text-sm leading-relaxed">
              For a facility with 4 overhead doors and 8 mandoors, bundling the PM visit typically saves $300–$600 per year versus two separate service companies — before parts discounts.
            </p>
          </div>
        </div>
      </section>

      {/* SAME CONTRACT */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
                Same contract as your overhead doors
              </h2>
              <p className="text-steel leading-relaxed mb-4">
                If you already have a DoorChamp service agreement for your overhead doors or dock equipment, mandoors are added to the same contract — same visit schedule, same rate structure, same invoice.
              </p>
              <p className="text-steel leading-relaxed mb-4">
                For property managers and strata councils managing multiple buildings, we set up a master agreement that covers all units and all door types. One renewal, one point of contact, one annual report for your records.
              </p>
              <p className="text-steel leading-relaxed">
                A 20-point inspection is required on every mandoor at sign-up — so we know the condition of every door before we set the contract rate. No surprises on deferred maintenance.
              </p>
            </div>
            <div className="space-y-4">
              <p className="font-bold text-navy-dark text-sm">What's in every facility contract:</p>
              <ul className="space-y-3">
                {[
                  "Scheduled PM visits — annual, bi-annual, or quarterly depending on door count and traffic",
                  "21-point mandoor inspection on every door at every visit",
                  "Written deficiency report after each visit — suitable for fire marshal documentation",
                  "10–25% parts discount on all hardware installed under the contract",
                  "Priority scheduling — contract customers jump the queue on same-day calls",
                  "Single invoice covering all door types — overhead, dock, mandoor, sliding gate",
                  "2-year labour warranty on all work performed under the agreement",
                  "Renewal reminder 60 days before contract end — no auto-renewals without confirmation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-steel text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">Mandoor service + overhead door service. One truck, one warranty.</h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Send us your building address and a rough door count — overhead doors, mandoors, gates, dock equipment. We'll quote everything under a single facility contract — or by-the-call for one-off repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={siteConfig.phone.href} className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card bg-green-600 text-white px-7 py-3.5 text-sm font-bold hover:bg-green-700 transition-colors">
              Request a Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
