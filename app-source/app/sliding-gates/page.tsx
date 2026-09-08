import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck, IconWrench, IconInstall, IconMaintenance, IconAlert, IconOpener, IconParts } from "@/components/Icons";
import { Accordion } from "./Accordion";

export const metadata: Metadata = {
  title: "Sliding Gate Repair & Installation Richmond BC | DoorChamp",
  description:
    "Sliding gate repair & installation in Richmond, Vancouver, Burnaby, Surrey, Coquitlam & Metro Vancouver. LiftMaster, FAAC, HySecurity. UL 325-2018 compliant. Call (778) 800-0769.",
  alternates: { canonical: "/sliding-gates/" },
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const pricingItems = [
  {
    icon: <IconInstall className="w-6 h-6" />,
    label: "UL 325 + ASTM F2200 AUDIT",
    price: "$289 flat per gate",
    note: "Written report, photos, remediation list. Credited 100% against any retrofit signed within 30 days.",
  },
  {
    icon: <IconWrench className="w-6 h-6" />,
    label: "GATE STUCK / WON'T MOVE (CALLOUT)",
    price: "$285 + parts",
    note: "Most repairs first-visit, parts on truck.",
  },
  {
    icon: <IconParts className="w-6 h-6" />,
    label: "FULL UL 325-2018 RETROFIT",
    price: "$1,200–$2,800 per gate",
    note: "Photo eye + edge sensor + monitored wiring + signage.",
  },
  {
    icon: <IconOpener className="w-6 h-6" />,
    label: "NEW COMMERCIAL GATE OPERATOR INSTALL",
    price: "$3,800–$7,400 installed",
    note: "LiftMaster CSL / FAAC / HySecurity · ASTM F2200 compliant gate panel.",
  },
  {
    icon: <IconMaintenance className="w-6 h-6" />,
    label: "ANNUAL MAINTENANCE CONTRACT",
    price: "from $389/gate/year",
    note: "Lubrication, limit re-cal, sensor test, written compliance summary.",
  },
  {
    icon: <IconAlert className="w-6 h-6" />,
    label: "EMERGENCY RESPONSE",
    price: "60–90 min business hrs",
    note: "After-hours available · perimeter gate failures always priority.",
  },
];

const gateTypes = [
  {
    title: "Cantilever Sliding Gates",
    summary: "The dominant industrial choice.",
    body: "A cantilever gate is supported by rollers mounted on a post behind the fence — the gate hangs in mid-air across the opening with no ground track. Nothing crosses the drive aisle. The gate counterbalances on the post side: roughly 50% of the gate length extends behind the post when open.\n\nWhy Richmond properties prefer cantilever: no ground track to ice up in winter, no rail to trip vehicles, no concrete channel to crack and trap debris. Most Richmond warehouse yards, strata parkades, and industrial gates are cantilever.",
  },
  {
    title: "V-Track (Ground-Track) Sliding Gates",
    summary: "The gate rolls on V-shaped wheels along a ground track.",
    body: "A V-track gate rolls on a steel rail set into (or surface-mounted on) concrete. The gate's V-groove wheels ride the rail. Simpler to build and less counterbalance hardware than cantilever — but the ground rail is a maintenance point: debris, ice, concrete heave, and vehicle tires all affect it.\n\nV-track is common on older Richmond installations, ornamental iron gates, and sites where the post setback for cantilever isn't available. We maintain and repair both types equally.",
  },
  {
    title: "Vertical-Pivot Gates",
    summary: "Gate pivots around a vertical axis rather than sliding — for portals.",
    body: "A vertical-pivot gate rotates on a vertical axis, swinging in an arc rather than sliding linearly. Common at controlled portals where the clear-width requirement is narrow and a sliding panel isn't practical. Less common in Richmond's industrial corridor but found at some guarded facility entries and military-style checkpoints.",
  },
  {
    title: "Barrier Arms (Pivot Arms)",
    summary: "Single horizontal arm rotating around a vertical axis — not technically a sliding gate.",
    body: "A barrier arm is a single horizontal boom that lifts or swings to allow vehicle passage. Standard at parkade entries and toll-style applications. Governed by the same UL 325 standard (Class II or III depending on application) but ASTM F2200 requirements differ because there's no panel to pass through. We install and service HySecurity StrongArm and FAAC barrier arms alongside sliding gate operators.",
  },
];

const ulClasses = [
  {
    cls: "Class I",
    label: "Residential",
    desc: "Vehicular gate operators for one- to four-family residences — driveway gates at houses, duplexes, fourplexes. Lowest force requirements. Simple residential driveways fall here.",
  },
  {
    cls: "Class II",
    label: "Commercial / General Access",
    desc: "Vehicular gate operators for buildings accessible by the general public — multi-family housing of five+ units, hotels, retail, garages with public access, most Richmond strata parkades and apartment buildings. Highest scrutiny because untrained public uses the gate.",
  },
  {
    cls: "Class III",
    label: "Industrial / Limited Access",
    desc: "Vehicular gate operators for industrial sites where users are trained employees, not the general public. Warehouses, distribution centres, fleet yards. Most Richmond industrial corridor gates (Bridgeport, Mitchell Island, East Cambie) fall here.",
  },
  {
    cls: "Class IV",
    label: "Restricted Access",
    desc: "Vehicular gate operators for guarded restricted-access sites — airport security, secure government, required industrial. Always paired with on-site security supervision.",
  },
];

const failureReasons = [
  {
    n: "1",
    title: "Gate Drags or Won't Move",
    body: "V-wheels worn out, track full of debris, gate frame sagging. Internal rollers seized on a cantilever. Most common Richmond failure mode — consider humidity, freeze-thaw, and salt air from gate hardware hardening.",
  },
  {
    n: "2",
    title: "Photo Eye Drift / Edge Sensor Failure",
    body: "Gate refuses to close, lights blink, or it reverses into a trailer. Sensors out of alignment, lens dirty, wiring broken at the gate frame from years of cycling. Second most common service call.",
  },
  {
    n: "3",
    title: "Operator Logic Board Failure",
    body: "Power surge, lightning strike (more common than expected near the Fraser River), or general age. Gate refuses to respond to remotes, fobs, or wall controls. Board replacements are field-serviceable on most LiftMaster, FAAC, and HySecurity models.",
  },
  {
    n: "4",
    title: "Trailer / Vehicle Strike Damage",
    body: "A misguided turn into a Richmond industrial yard puts a corner of a delivery truck through the gate panel. We re-section, re-channel, and re-balance — or source a replacement panel when the damage is structural.",
  },
  {
    n: "5",
    title: "UL 325 Non-Compliance Discovery",
    body: "Often found at strata AGM after a near-miss, or by a new facility manager during first-time due diligence. We audit, document, and bring the system into current UL 325-2018 spec on a single visit when parts are in stock.",
  },
];

const auditItems = [
  "Operator class identification (I, II, III, IV) and nameplate verification",
  "Entrapment device count per direction of travel (open and close)",
  "Device type validation (inherent vs. external, verify valid device types per class)",
  "Monitored connection test — disconnect each device, verify operator shuts down",
  "ASTM F2200 gate structure check: 2¼\" sphere test for gate openings and adjacent fence",
  "Roller cover and pinch-point guarding inspection",
  "Fall-over and anti-rise bracket inspection",
  "Physical stop check (both directions)",
  "Warning signage verification — both sides of gate, UL 325 compliant text",
  "Battery backup test (where installed)",
  "Manual disconnect function verification",
  "Written report with photographs of every non-compliant item",
];

const operators = [
  {
    badge: "NORTH AMERICAN STANDARD",
    brandModel: "LIFTMASTER · CSL SERIES",
    title: "LiftMaster CSL24UL Commercial Slide",
    desc: "The dominant choice for Richmond strata parkades and Class II commercial gates. Quiet belt drive, built-in inherent sensor, solar and MyQ ready.",
    features: ["Up to 800 lb gate", "DC motor, soft start/stop", "Built-in inherent (Type A) sensor", "Solar ready", "MyQ remote monitoring", "UL 325-2018 2-device compliant"],
    img: "/images/gate-operator-liftmaster-csl24ul.webp",
    viewUrl: "https://www.liftmaster.com",
    viewLabel: "View on LiftMaster.com",
  },
  {
    badge: "HEAVY COMMERCIAL",
    brandModel: "LIFTMASTER · SL3000 SERIES",
    title: "LiftMaster SL3000UL",
    desc: "Heavy-duty chain-drive operator for large-panel Richmond industrial gates up to 3,000 lb. UL 325-2018 3-device monitoring built in.",
    features: ["Up to 1,000 / 3,000 lb gate", "Built-in monitored inherent sensor", "MyQ ready", "Battery backup option", "Full 3-device UL 325-2018 compliance", "Industrial duty cycle"],
    img: "/images/gate-operator-liftmaster-sl3000.webp",
    viewUrl: "https://www.liftmaster.com",
    viewLabel: "View on LiftMaster.com",
  },
  {
    badge: "FAAC ENGINEERED",
    brandModel: "FAAC · C720 / C724 SERIES",
    title: "FAAC C720 / C724",
    desc: "Italian-engineered electromechanical slide operator. Common on older Richmond installations. Hydraulic smoothness without hydraulic complexity.",
    features: ["Medium-to-high drive capacity", "FAAC dedicated protection module", "Solar engineering option", "Battery backup on C724", "Parts stocked locally", "2-year manufacturer warranty"],
    img: "/images/gate-operator-faac-c721.webp",
    viewUrl: "https://www.faac.ca",
    viewLabel: "View on FAAC.ca",
  },
  {
    badge: "HIGH SECURITY RATED",
    brandModel: "HYSECURITY · SLIDESMART DC SERIES",
    title: "HySecurity SlideSmart DC15 / DC30",
    desc: "The premium choice for Class III Richmond gated facilities. Resists the elements, smart diagnostics, heavy-cycle duty for high-traffic access points.",
    features: ["Up to 1,500 / 3,000 lb gate", "DC motor, adjustable speed", "Smart Gate technology", "Built-in edge sensor interface", "400 cycles/day rated", "On-board diagnostics"],
    img: "/images/gate-operator-hysecurity-slidesmart.webp",
    viewUrl: "https://www.hysecurity.com",
    viewLabel: "View on HySecurity.com",
  },
  {
    badge: "BARRIER ARM",
    brandModel: "HYSECURITY · STRONGARM SERIES",
    title: "HySecurity StrongArm M30 / M50",
    desc: "Class III–IV hardened barrier arm for Richmond restricted-access facilities. ASTM F2200 certified. Built to resist forced entry and high-cycle abuse.",
    features: ["M30: 14 ft / M50: 20 ft arm", "500–1,000 lb impact rating", "Anti-tailgate sensor built in", "Factory security-shielded", "3-year warranty", "Pairs with any access panel"],
    img: "/images/gate-operator-hysecurity-strongarm.webp",
    viewUrl: "https://www.hysecurity.com",
    viewLabel: "View on HySecurity.com",
  },
  {
    badge: "DOORKING STANDARD",
    brandModel: "DOORKING · 9000 SERIES",
    title: "DoorKing 9000",
    desc: "Standard distributed-drive slide operator with integrated telephone entry option. Richmond's most common parkade operator platform for telephone access.",
    features: ["½ or ¾ HP AC motor", "12 or 24V DC closure", "Telephone entry integration", "DoorKing panel compatible", "UL 325 assessed", "2-year warranty"],
    img: "/images/gate-operator-doorking-9000.webp",
    viewUrl: "https://www.doorking.com",
    viewLabel: "View on DoorKing.com",
  },
];

const safetyDevices = [
  {
    badge: "PHOTO EYE · TYPE III",
    brandModel: "LIFTMASTER · MONITORED PHOTO EYE",
    title: "LiftMaster Monitored Photo Eye",
    desc: "Monitored infrared beam per direction of travel. Satisfies one of the two required external entrapment devices for UL 325-2018 Class II–IV compliance.",
    features: ["Monitored (active monitoring)", "Range to 60 ft", "Tamper-resistant lens design", "Pairs with any major operator", "Weather-rated housing", "UL 325 Type III device"],
    img: "/images/gate-photo-eye-monitored.webp",
    viewUrl: "https://www.liftmaster.com",
    viewLabel: "View on LiftMaster.com",
  },
  {
    badge: "MONITORED EDGE · TYPE B2",
    brandModel: "MILLER EDGE · FMX M30 / M50",
    title: "Miller Edge / FMX Monitored Edge",
    desc: "Pressure-sensitive rubber strip along the leading or trailing edge of the gate. Stops gate travel on contact. Required on all Class II–IV gates.",
    features: ["Pressure-sensitive (Type B2)", "Soft or rigid mounting", "Adjustable sensitivity", "Wireless versions available", "Resistor-terminated for monitoring", "Required for full UL 325-2018"],
    img: "/images/gate-edge-sensor.webp",
    viewUrl: "https://www.milleredge.com",
    viewLabel: "View on MillerEdge.com",
  },
  {
    badge: "LOOP DETECTOR",
    brandModel: "FMX D-TEK / DIABLO DSP-7 SERIES",
    title: "FMX D-TEK / Diablo DSP-7",
    desc: "In-ground vehicle detection loop controller. Prevents the gate from closing on a stopped vehicle. Required for exit lanes and busy Richmond industrial yards.",
    features: ["Stay-open vehicle detection", "100 Hz frequency range", "End-of-line loop operation", "Sag detection operation", "Adjustable loop sensitivity", "Required for exit operation"],
    img: "/images/gate-loop-detector.webp",
    viewUrl: "https://www.fmx.ca",
    viewLabel: "View on FMX.ca",
  },
  {
    badge: "ACCESS CONTROL",
    brandModel: "MYQ SMART · DKS TELEPHONE BOARD",
    title: "MyQ Smart · DKS Telephone Board",
    desc: "Cloud-connected access panel with phone directory and app integration. Replaces legacy keypads across Richmond strata parkades and commercial entries.",
    features: ["Cellular or IP access", "Manage key fobs remotely", "Activity log / audit trail", "Multi-unit and strata ready", "Integrated UL 325 interlock", "Replaces DK 1802, 1812 series"],
    img: "/images/gate-access-control-myq.webp",
    viewUrl: "https://www.doorking.com",
    viewLabel: "View on DoorKing.com",
  },
];

const faqs = [
  {
    title: "My gate was installed in 2014. Is it grandfathered under the old UL 325 standard?",
    body: "No — it's \"grandfathered\" only in the sense that no agency will force you to retrofit immediately. But the moment it fails to reverse and injures someone, every insurer and court will measure the incident against UL 325-2018, not the 2008 edition under which it was installed. The legal exposure stays current regardless of when the gate was built.",
  },
  {
    title: "How fast do you respond to a stuck gate in Richmond?",
    body: "Same-day during business hours, and we keep a technician available for urgent after-hours situations where the perimeter is unsecured. Most Richmond calls are on-site within 60–90 minutes from when we dispatch.",
  },
  {
    title: "Can you service a gate operator another company installed?",
    body: "Yes. We carry LiftMaster, FAAC, HySecurity, DoorKing, Nice, DEA, and Linear parts on the truck. If another company locked the control board with a proprietary code, we'll tell you upfront — some operators allow override, others require replacement.",
  },
  {
    title: "How much does a full UL 325 retrofit cost?",
    body: "$1,200–$2,800 per gate, installed. Scope depends on how many devices are missing and whether new wiring is required. We credit the $289 audit fee 100% against any retrofit signed within 30 days of the audit.",
  },
  {
    title: "What's the difference between a cantilever and a V-track sliding gate?",
    body: "A cantilever gate is supported by rollers on a counterbalanced track post — no ground track crosses the drive aisle. A V-track gate rolls on a ground rail. Cantilever is preferred for Richmond snow and uneven pavement because there's nothing to ice up or trip a vehicle.",
  },
  {
    title: "Does a strata corporation need to maintain UL 325 compliance on parkade gates?",
    body: "Yes. BC Strata Property Act requires strata corporations to maintain common property in a state of good repair. A gate that injures a resident or visitor triggers strata liability. UL 325-2018 is the minimum safety standard most insurers and courts reference in BC.",
  },
  {
    title: "Can a sliding gate be operated with solar power?",
    body: "Yes, for Class I–II sites with duty cycles under roughly 100 cycles/day. Most LiftMaster CSL and FAAC C-series operators have a factory solar kit. We size the panel and battery for Richmond's cloud cover — not desert assumptions.",
  },
  {
    title: "What about access control — fobs, keypads, license plate recognition?",
    body: "We install and service DoorKing telephone entry, MyQ cloud panels, Schlage and HID fob readers, keypad entry systems, and vehicle loop detectors. License plate recognition is available through third-party camera systems we can integrate.",
  },
  {
    title: "How long does a commercial slide gate operator last?",
    body: "A well-maintained LiftMaster or HySecurity operator on a typical Richmond strata parkade runs 10–15 years before a board replacement is warranted. Hydraulic operators (FAAC) can run longer with fluid changes. The most common failure is the logic board or motor capacitor — both field-replaceable.",
  },
  {
    title: "Do you install new gates from scratch?",
    body: "Yes. We supply and install cantilever and V-track panels, hardware, operator, and all entrapment devices as a single contract. We handle the concrete work for roller posts and provide a UL 325-2018 compliance letter on completion.",
  },
  {
    title: "What's the warranty on gate work?",
    body: "1-year labour warranty on all installations. Parts carry the manufacturer warranty (LiftMaster: 1–3 years depending on component; HySecurity: 3 years). Compliance audits: we'll return once at no charge if a device fails within 90 days of inspection.",
  },
];

// ─── Components ────────────────────────────────────────────────────────────────

function ProductCard({
  badge,
  brandModel,
  title,
  desc,
  features,
  img,
  viewUrl,
  viewLabel,
}: {
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
      <div className="relative h-44 flex items-center justify-center overflow-hidden">
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

// ─── Page ───────────────────────────────────────────────────────────────────────

export default function SlidingGatesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/sliding-gate-hero.png')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy-dark/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Gate Emergency · Richmond, BC
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Gate stuck or won't move?<br />
            <span className="text-gold">Fast Service. Within 1 Hour.</span>
          </h1>
          <p className="mt-5 text-white/75 text-base max-w-2xl leading-relaxed">
            Perimeter open means the property is wide open and you can't lock up at end of day.
            We respond same-day, every brand — LiftMaster, FAAC, HySecurity, DoorKing, Nice, DEA, Linear, Came. Parts on the truck.
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
            .emergency-btn {
              animation: emergency-pulse 1.5s ease-out infinite;
            }
            .emergency-btn:hover {
              animation: emergency-shake 0.4s ease-in-out, emergency-pulse 1.5s ease-out infinite 0.4s;
            }
          `}</style>
          <div className="mt-8 flex flex-col items-start gap-4">
            <a href={siteConfig.phone.href} className="emergency-btn inline-flex items-center justify-center gap-2 rounded-card bg-red-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-red-700 transition-colors duration-200">
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <a href="sms:+17788000769" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
              💬 Text us · same response
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {["Within 1 hour business hrs", "Every brand serviced", "UL 325-2018 compliant", "WCB + $5M insured"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-white/70 text-xs">
                <IconCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DISPATCH STRIP */}
      <div className="bg-navy-dark/5 border-y border-steel/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-steel text-sm leading-relaxed">
            <span className="font-bold text-navy-dark">Call now</span> — we dispatch from our Richmond yard the moment you hang up. Gate operators, photo eyes, edge sensors, loop detectors — we'll get the gate moving and the perimeter secured.
          </p>
        </div>
      </div>

      {/* PRICING */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark">
                Pricing at a glance — Richmond sliding gate service
              </h2>
              <p className="text-steel text-sm mt-2 max-w-2xl leading-relaxed">
                The single biggest legal exposure on a Richmond commercial property is a gate that isn't UL 325-2018 compliant.
                The audit fee tells you exactly where you stand.
              </p>
            </div>
            <Link href="/request-a-quote/" className="text-gold font-bold text-sm whitespace-nowrap hover:underline">
              Get a written quote →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pricingItems.map((item) => (
              <div key={item.label} className="rounded-card border border-steel/10 bg-surface p-6 shadow-card">
                <div className="text-gold mb-3">{item.icon}</div>
                <p className="text-gold font-bold uppercase tracking-wide text-[10px] mb-1">{item.label}</p>
                <p className="font-heading font-extrabold text-navy-dark text-xl mb-2 leading-tight"><span className="price-val">{item.price}</span></p>
                <p className="text-steel text-xs leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-steel/60 text-xs mt-6">
            All work documented for council, insurer, or AHJ on request. 1-year labour warranty. WCB + $5M liability insured.
            We retrofit older installations to current UL 325-2018 standard.
          </p>
        </div>
      </section>

      {/* SAFETY LAW PROSE */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-6">
              Sliding gates live under different safety law than garage doors
            </h2>
            <p className="text-steel text-sm mb-5 leading-relaxed">
              Two regulatory frameworks govern automated sliding gates in BC:
            </p>
            <div className="space-y-5 text-sm text-steel leading-relaxed">
              <p>
                <strong className="text-navy-dark">UL 325</strong> — Underwriters Laboratories' standard for safety of "Door, Drapery, Gate, Louver, and Window Operators and Systems." Governs the <em>operator</em> (the motor that drives the gate). The 7th Edition (UL 325-2018, effective August 1, 2018) is the current version. It requires that every gate operator be classified (Class I residential, Class II commercial general-access, Class III industrial limited-access, Class IV restricted-access guarded facility), and that every potential entrapment zone be protected by <strong className="text-navy-dark">two independent monitored devices</strong> per direction of travel — one inherent (built into the operator) and one external (photo eye or edge sensor).
              </p>
              <p>
                <strong className="text-navy-dark">ASTM F2200</strong> — American Society for Testing and Materials standard for the <em>gate structure itself</em>. Governs how the gate is built and installed. Requires that openings in slide-gate panels (and the adjacent fence the gate covers when open) not allow a 2¼" sphere to pass through, from the bottom of the gate to 48" above ground. Requires guarding of exposed rollers, pinch points, and fall-over protection:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Won't crush a person against a fence or wall during gate travel</li>
                <li>Won't catch a child or pet through an opening in the gate or adjacent fence</li>
                <li>Won't fall over if a roller fails</li>
                <li>Won't allow reach-through entrapment hazards</li>
              </ul>
              <p>
                <strong className="text-navy-dark">Most pre-2018 gates in Richmond are out of compliance with at least one of these requirements.</strong> The most common gap is <strong className="text-navy-dark">single-device entrapment protection</strong> — an inherent sensor in the operator with no external photo eyes or edge sensors. After August 1, 2018, LiftMaster, FAAC, HySecurity, and DoorKing operators won't even run without dual monitored devices — but plenty of older installations are still operating on grandfathered single-device setups.
              </p>
              <p>
                <strong className="text-navy-dark">The legal exposure for the facility owner is real.</strong> A gate strike injury is one of the highest-payout incident categories in commercial insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GATE TYPES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
              Cantilever, V-track, vertical-pivot.<br className="hidden sm:block" />
              Different gates, different physics.
            </h2>
            <p className="text-steel text-sm mb-8 leading-relaxed">
              The gate type determines the operator, the hardware, and the entrapment-protection layout.
              We document the type on every audit.
            </p>
            <Accordion items={gateTypes} />
          </div>
        </div>
      </section>

      {/* UL 325 CLASSES */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Class I, II, III, or IV. The class determines what protection you need.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            UL 325 classifies gate operators by intended use. The class determines the entrapment-protection requirements, allowable operator force, and acceptable installation conditions. We document the class on every audit.
          </p>
          <div className="space-y-4 max-w-3xl">
            {ulClasses.map((c) => (
              <div key={c.cls} className="flex gap-5 p-5 rounded-card bg-white border border-steel/10">
                <div className="flex-shrink-0">
                  <span className="inline-block bg-navy-dark text-gold font-bold text-sm px-3 py-1.5 rounded whitespace-nowrap">{c.cls}</span>
                </div>
                <div>
                  <p className="font-bold text-navy-dark text-sm mb-1">{c.label}</p>
                  <p className="text-steel text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-card bg-white border border-steel/10 max-w-3xl">
            <p className="text-sm text-steel leading-relaxed">
              <strong className="text-navy-dark">Why class matters in practice:</strong> The class is stamped on the operator nameplate. If it's missing, the operator is non-compliant. The class determines acceptable entrapment protection, sensor placement, and signage. It also determines which entrapment-protection device types can be used — some Type C devices are only allowed on swing gates and barrier arms, not slide gates. We document the class on every audit.
            </p>
          </div>
        </div>
      </section>

      {/* TWO INDEPENDENT MONITORED DEVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
              Two independent monitored devices.<br className="hidden sm:block" />
              Per direction of travel.
            </h2>
            <p className="text-steel text-sm mb-6 leading-relaxed">
              The single biggest UL 325 change in the 2018 revision: every gate operator must support, and every commercial gate installation must have, two independent monitored entrapment protection devices in each direction of travel — open and close.
            </p>
            <p className="text-steel text-sm mb-6 leading-relaxed">
              <strong className="text-navy-dark">Independent</strong> — two different sensing mechanisms, not two of the same kind. <strong className="text-navy-dark">Monitored</strong> — the operator electronically watches the device for failure; if a device falls or is disconnected, the operator stops working. <strong className="text-navy-dark">Per direction</strong> — open direction needs two, close direction needs two.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { type: "Type A", label: "Inherent entrapment sensor", desc: "Built into the operator itself. Detects current spike when the gate hits an obstruction. Counts as one device." },
                { type: "Type III", label: "Photoelectric eye / photo beam", desc: "Infrared beam across the gate path. Stopping or reversing gate travel. Counts as one device." },
                { type: "Type B2", label: "Pressure sensor", desc: "Pressure-sensitive rubber strip along the waiting or trailing edge of the gate. Touching it stops or reverses gate travel." },
              ].map((d) => (
                <div key={d.type} className="flex gap-4 p-4 rounded-card bg-surface border border-steel/10">
                  <span className="inline-block bg-navy-dark text-gold font-bold text-xs px-2 py-1 rounded h-fit flex-shrink-0">{d.type}</span>
                  <div>
                    <p className="font-bold text-navy-dark text-sm">{d.label}</p>
                    <p className="text-steel text-sm leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-card bg-surface border border-steel/10 text-sm text-steel leading-relaxed">
              <p className="mb-2">
                A 2014 gate operator with a single inherent sensor and one photo eye in only one direction isn't compliant to 2018 standards. <strong className="text-navy-dark">It's still legal to operate</strong> (the law isn't retroactive), but if it fails to reverse and injures someone, the standard the insurer and the court will measure it against is the current one. We retrofit installations to current spec.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATOR BRANDS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Every operator brand installed in Richmond
          </h2>
          <p className="text-steel text-sm mb-8 max-w-2xl leading-relaxed">
            We service and supply parts for every major sliding gate operator brand. All operators we install are UL 325-2018 two-monitored-device compliant. We retrofit older installations to current standard.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {[
              { brand: "LiftMaster Commercial", detail: "SL3000, CSL24UL series. The North American volume leader. Most common operator in Richmond." },
              { brand: "FAAC", detail: "Italian engineered, common in older Richmond installations. Hydraulic and electromechanical operators." },
              { brand: "HySecurity", detail: "Shield-man LC, StrongArm. The high-security industry choice, used in Class III applications." },
              { brand: "DoorKing", detail: "DKG 1500 and 6500 series, common at strata parkade entries." },
              { brand: "Nice", detail: "Robus, Run, Apollo series. Common on European-influenced strata." },
              { brand: "DEA System", detail: "Italian-made operators." },
              { brand: "Linear", detail: "Standard residential and light commercial." },
              { brand: "Came", detail: "Older commercial installations across Lower Mainland." },
            ].map((b) => (
              <div key={b.brand} className="flex gap-3 p-4 rounded-card bg-white border border-steel/10">
                <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-navy-dark text-sm">{b.brand}</p>
                  <p className="text-steel text-xs leading-relaxed">{b.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-card bg-white border border-steel/10 max-w-3xl">
            <p className="text-sm text-navy-dark font-bold mb-2">Parts we also carry:</p>
            <div className="flex flex-wrap gap-2">
              {["Photo eyes and control boards", "Loop detectors and reset modules", "Chain, V-wheels, interval rollers, and stops", "Magnetic limit switches", "Battery backup units 12V AGM"].map((p) => (
                <span key={p} className="bg-surface border border-steel/10 text-steel text-xs px-3 py-1 rounded-full">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIVE REASONS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-10">
            Five reasons we get called
          </h2>
          <div className="space-y-6 max-w-3xl">
            {failureReasons.map((r) => (
              <div key={r.n} className="flex gap-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-navy-dark flex items-center justify-center">
                  <span className="text-gold font-bold text-sm">{r.n}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy-dark text-base mb-1">{r.title}</h3>
                  <p className="text-steel text-sm leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT / COMPLIANCE */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
              Documented compliance, photographed, signed.
            </h2>
            <p className="text-steel text-sm mb-6 leading-relaxed">
              A full DoorChamp gate compliance audit covers:
            </p>
            <ul className="space-y-2 mb-8">
              {auditItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-steel">
                  <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-5 rounded-card bg-navy-dark text-white">
              <p className="font-heading font-bold text-lg mb-1">$289 flat for a single-gate audit anywhere in Richmond.</p>
              <p className="text-white/70 text-sm mb-4">
                Remediation quotes are itemized, line-by-line. The audit fee is credited 100% against any retrofit signed within 30 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={siteConfig.phone.href} className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-6 py-3 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
                  <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
                </a>
                <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-6 py-3 text-sm font-bold hover:border-white transition-colors">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GATE OPERATORS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Sliding gate operators we service &amp; install</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            LiftMaster · FAAC · HySecurity · DoorKing · Nice · DEA · Linear · Came.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            All operators we install are UL 325-2018 compliant with two monitored entrapment protection devices per direction. The most compliant configuration continuos customer service on each.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {operators.map((o) => <ProductCard key={o.title} {...o} />)}
          </div>
        </div>
      </section>

      {/* SAFETY DEVICES */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Entrapment protection &amp; access control</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Monitored photo eyes · Edge sensors · Loop detectors · Access control. UL 325-2018 compliant.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            Every UL 325-2018 compliant commercial slide gate needs two monitored entrapment protection devices per direction. The most common compliant setup: inherent sensor (built into the operator) + photo eye + edge sensor. We install and service the devices below.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {safetyDevices.map((d) => <ProductCard key={d.title} {...d} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            Frequently asked questions
          </h2>
          <div className="max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <ServiceAreaSection service="Sliding Gate Repair & Installation" />

      <CTASection
        heading="Audit your gate. Know exactly where you stand."
        body="For $289 flat, we'll audit your Richmond sliding gate against UL 325 and ASTM F2200, document every non-compliant item with photographs, and hand you a written report. No sales pitch — the audit fee is the audit fee."
      />
    </>
  );
}
