import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";
import { Accordion } from "./Accordion";

export const metadata: Metadata = {
  title: "Commercial Garage Door Service in Richmond BC | DoorChamp",
  description:
    "Commercial garage door repair, installation, and maintenance in Richmond BC. Sectional doors, high-speed doors, fire doors, loading docks, sliding gates. Call (778) 800-0769.",
  alternates: { canonical: "/commercial/" },
};

const equipmentCategories = [
  { title: "Commercial Sectional Doors", body: "Heavy-duty steel sectional · full-view glass · insulated · hurricane-rated · non-insulated" },
  { title: "High-Speed Roll-Up Doors", body: "Fabric high-speed · steel roll-up · clean-room rated · food-grade PVC" },
  { title: "Fire-Rated Doors", body: "UL-listed fusible link · drop-close · annual testing & BC fire-code certification" },
  { title: "Commercial Overhead Door Operators", body: "Heavy-duty 3/4 HP–3 HP operators · multi-car access systems · loop detectors" },
  { title: "Loading Dock Equipment", body: "Dock levelers · dock seals · vehicle restraints · dock bumpers", href: "/loading-docks/" },
  { title: "Sliding Security Gates", body: "Motorized slide gates · access control · strata parkade · perimeter fencing", href: "/sliding-gates/" },
];

const pricingItems = [
  { label: "Emergency callout (business hrs)", price: "from $285 service call", note: "Most repairs completed first visit · parts on truck", img: "/images/icon-commercial-emergency.webp" },
  { label: "Commercial torsion spring (per spring)", price: "$380–$680 installed", note: "Heavy-duty springs rated 100,000+ cycles · 2-yr warranty", img: "/images/icon-commercial-spring.webp" },
  { label: "New commercial sectional door", price: "$3,200–$12,000 installed", note: "Standard steel 10×10 to 14×14 · insulated or non-insulated", img: "/images/icon-commercial-door.webp" },
  { label: "High-speed door service call", price: "from $385 labour + parts", note: "Bottom bar · fabric · controller · photoeye repairs", img: "/images/icon-commercial-highspeed.webp" },
  { label: "Fire door annual inspection", price: "$185–$320 per door", note: "BC Fire Code compliant · written report · tag & cert", img: "/images/icon-commercial-firedoor.webp" },
  { label: "Preventive maintenance program", price: "Custom per facility", note: "Monthly · quarterly · annual visit programs available", img: "/images/icon-commercial-pm.webp" },
];

const sectionalDoors = [
  {
    tag: "Most Common Commercial",
    brand: "Clopay (USA-leader)",
    model: "Clopay 4300 / 5200 Series",
    body: "Industry-standard steel sectional for Richmond warehouse and retail. Available non-insulated and R-12 to R-18 insulated.",
    specs: ["24–26 gauge galvanized steel", "R-12 to R-18 insulated options", "Hot-dip galvanized tracks", "Heavy-duty torsion hardware", "Wind-load reinforcement available", "Factory-painted or primed"],
    url: "https://www.clopay.com/",
    img: "/images/commercial-door-sectional-clopay.webp",
  },
  {
    tag: "Canadian-Made",
    brand: "DBCI (Carrollton, TX / Canadian dist.)",
    model: "DBCI 26-Gauge Commercial",
    body: "Budget-friendly commercial sectional common in Richmond strata warehouse units and small industrial facilities.",
    specs: ["26-gauge embossed steel", "Non-insulated & insulated options", "R-6 to R-10 insulated", "Flush or ribbed panel profiles", "Standard commercial track gauges", "Competitive pricing on volume"],
    img: "/images/commercial-door-sectional-dbci.webp",
  },
  {
    tag: "Full-View Glass",
    brand: "Clopay / Wayne Dalton",
    model: "Full-view aluminum glass door",
    body: "Aluminum-frame full-view doors for showrooms, car dealerships, and retail fronts. Available in various anodized finishes.",
    specs: ["Aluminum frame sections", "Single or double-pane glass", "Clear, frosted, or tinted glass", "Dark bronze / mill finish / black", "Interior natural light", "Custom widths up to 18'"],
    img: "/images/commercial-door-full-view.webp",
  },
  {
    tag: "Hurricane / High Wind",
    brand: "Clopay / Wayne Dalton",
    model: "Wind-load rated sectional",
    body: "Required for facilities in storm-prone Metro Vancouver locations or where code requires wind-load certification.",
    specs: ["90–120+ mph wind rating", "Wind-load bars standard", "Reinforced end stiles", "Heavy-duty strut packages", "Anchorage-engineered hardware", "Available with insulation"],
    img: "/images/commercial-door-hurricane.webp",
  },
  {
    tag: "Rolling Steel",
    brand: "Cornell / Cookson / Wayne Dalton",
    model: "Rolling steel service door",
    body: "Counter-wound steel roll-up for service openings, interior partitions, and smaller commercial openings where headroom is limited.",
    specs: ["22-gauge galvanized slats", "Interior or exterior service", "Manual push-up or operator driven", "Lock bar standard", "Compact coil, minimal headroom", "Powder-coat finish options"],
    img: "/images/commercial-door-rolling-steel.webp",
  },
  {
    tag: "High-Lift / Vertical Lift",
    brand: "All major brands",
    model: "High-lift & vertical-lift tracks",
    body: "Custom track configurations for facilities with high ceilings and low header clearance. We design and install for any ceiling height.",
    specs: ["High-lift from 12\" to 24\"", "Vertical-lift (door travels straight up)", "Custom torsion shaft sizing", "Cable drum engineering per size", "Works with any sectional panel", "Best for racking-full warehouses"],
    img: "/images/commercial-door-vertical-lift.webp",
  },
];

const highSpeedDoors = [
  {
    tag: "Most Common · High-Speed Fabric",
    brand: "Rytec (USA-leader)",
    model: "Rytec Spiral / Powerhouse",
    body: "The dominant high-speed door brand in Richmond distribution and logistics. Auto-reset after impact on most models.",
    specs: ["Up to 100\" per second open/close", "Auto-reset after impact (Spiral)", "Stainless or painted frame", "Photo-eye, loop, or radar activation", "30,000–1,000,000+ cycle rated", "Transparent window insert"],
    url: "https://www.rytecdoors.com/",
    img: "/images/commercial-door-high-speed-rytec.webp",
  },
  {
    tag: "High-Speed Fabric",
    brand: "Rite-Hite",
    model: "Rite-Hite APEX High Speed",
    body: "Common in Richmond cold-storage and food-grade facilities. High insulation value with fast cycle speed.",
    specs: ["Up to 80\" per second", "R-17 insulated panel options", "Integrated dock sealing", "Auto-reset bottom bar", "Low-maintenance drive", "Top choice for cold storage"],
    url: "https://www.ritehite.com/",
    img: "/images/commercial-door-high-speed-ritehite.webp",
  },
  {
    tag: "High-Speed PVC / Wash-Down",
    brand: "Albany / TNR",
    model: "Albany RR2000 / TNR wash-down",
    body: "PVC fabric high-speed doors rated for food-grade and wash-down environments. Stainless frame, no contamination risk.",
    specs: ["Stainless steel frame", "PVC or fibreglass fabric", "IP65 rated motor", "Wash-down compatible guides", "Food-grade sealing", "NSF-approved versions"],
    img: "/images/commercial-door-high-speed-pvc.webp",
  },
  {
    tag: "High-Speed Steel",
    brand: "Cookson / Cornell",
    model: "High-speed steel roll-up",
    body: "Steel-slat high-speed door for security-critical openings where fabric is not suitable. Slower than fabric but fully steel construction.",
    specs: ["Steel slat construction", "30–40 inches/sec cycle", "No fabric to tear or replace", "Highest security rating", "Heavy-duty motor required", "Standard for secure access points"],
    img: "/images/commercial-door-high-speed-steel.webp",
  },
];

const fireDoors = [
  {
    tag: "UL-Listed · 3-Hour",
    brand: "Cookson / McKeon",
    model: "Cookson FSD / McKeon fire door",
    body: "UL-listed fire doors required at rated wall penetrations in Richmond commercial and industrial buildings. Annual inspection is BC code.",
    specs: ["UL 10B/10C listed", "3-hr, 1.5-hr, 45-min ratings", "Fusible link auto-drop", "Automatic closing device", "Annual BC Fire Code inspection", "Written compliance report"],
    img: "/images/commercial-door-fire-cookson.webp",
  },
  {
    tag: "Fire-Rated Rolling Steel",
    brand: "Cornell / Wayne Dalton",
    model: "Fire-rated service door",
    body: "Fire-rated rolling steel for service openings in fire-wall assemblies. Motor-operated with smoke detector interlock.",
    specs: ["UL-listed steel slats", "Smoke detector interlock", "Motor drops on power loss", "1.5-hr to 3-hr ratings", "Annual fusible link test", "Insurance-required in most facilities"],
    img: "/images/commercial-door-fire-rated-steel.webp",
  },
];

const operators = [
  {
    tag: "Heavy-Duty Commercial · Most Common",
    brand: "LiftMaster (USA-leader)",
    model: "LiftMaster MH and CSW Series",
    body: "The most common commercial operator in Richmond. 3/4 HP to 2 HP, designed for high-cycle commercial use.",
    specs: ["3/4 HP to 2 HP models", "myQ commercial connectivity", "Loop detector compatible", "Battery backup available", "Up to 100,000-cycle rated", "Multi-door controller options"],
    url: "https://www.liftmaster.com/",
    img: "/images/commercial-operator-liftmaster.webp",
  },
  {
    tag: "Heavy-Duty Industrial",
    brand: "Genie / Linear",
    model: "Genie Commercial Pro / Linear MGD",
    body: "Heavy-duty commercial operators for larger commercial doors 14'+ wide. Commonly specified on new Richmond industrial builds.",
    specs: ["1–3 HP motor", "Jackshaft or trolley drive", "Soft-start/stop standard", "Coded access system ready", "Timer-to-close available", "Full-featured logic board"],
    img: "/images/commercial-operator-genie.webp",
  },
  {
    tag: "Jackshaft · Ceiling Space Saver",
    brand: "LiftMaster / Chamberlain",
    model: "LiftMaster 3800 / 8500W",
    body: "Wall-mounted jackshaft operators for facilities with high-lift tracks or limited ceiling space above the door.",
    specs: ["Wall-mounted beside door", "No overhead rail needed", "Works with high-lift tracks", "Ideal for warehouse racking", "DC motor, quiet operation", "Battery backup standard"],
    img: "/images/commercial-operator-jackshaft.webp",
  },
];

const doorTech = [
  {
    title: "Commercial Sectional Doors",
    summary: "The standard commercial door in Richmond. Sections travel up tracks and stack horizontally under the ceiling.",
    body: "Available in steel (most common), full-view aluminum/glass, and insulated versions. Track configurations include standard-lift, high-lift, and vertical-lift for ceiling constraints.\n\nPanel thickness: 1-3/8\" to 2\" standard\nInsulation: R-6 to R-18 (thicker panel = higher R-value)\nBest for: warehouses, retail bays, distribution centres, fleet garages\nBrands we service: Clopay, Wayne Dalton, DBCI, Raynor, Amarr, Overhead Door",
  },
  {
    title: "High-Speed Roll-Up Doors",
    summary: "Fabric or steel roll-up doors that open and close in 2–8 seconds. Required for high-cycle applications.",
    body: "High-speed doors dramatically reduce energy loss on docks and cold-storage openings — a standard sectional door open for 10 seconds loses more energy than a high-speed door open for 2 seconds.\n\nCycle life: 500,000 to 1,000,000+ cycles\nOpen speed: 60–100 inches per second\nBest for: food-grade, cold storage, distribution, logistics hubs\nBrands we service: Rytec, Rite-Hite, Albany, TNR, Efaflex, ASI",
  },
  {
    title: "Fire-Rated Doors",
    summary: "UL-listed rolling steel doors required at fire wall penetrations. Drops automatically on fusible link failure or smoke detector signal.",
    body: "BC Fire Code requires annual inspection and certification of all fire-rated doors. Our written inspection report satisfies insurance and fire marshal requirements.\n\nRatings: 3-hour, 1.5-hour, 45-minute\nActivation: fusible link (fails at 165°F) + smoke detector interlock\nBest for: fire walls, compartmentalization, insurance compliance\nBrands we service: Cookson, McKeon, Cornell, Wayne Dalton, Overhead Door",
  },
  {
    title: "Commercial Door Operators",
    summary: "Heavy-duty operators rated for 100,000+ cycles and designed for integration with access control, loop detectors, and building management systems.",
    body: "Commercial operators are different from residential — higher torque, higher cycle rating, and built for integration with third-party access control. Jackshaft operators mount to the wall beside the door, freeing ceiling space in facilities with high-lift tracks or full racking.\n\nHP range: 3/4 HP to 3 HP standard; higher available\nBest for: all commercial applications — select HP and drive type based on door weight and cycle count\nBrands we service: LiftMaster, Genie, Linear, Chamberlain, Marantec, FAAC",
  },
  {
    title: "Rolling Steel Service Doors",
    summary: "Counter-wound steel slat doors for service openings, interior partitions, and counter shutters.",
    body: "Different from sectional doors — slats coil above the opening rather than tracking back under the ceiling. Minimal headroom requirement. Available in motor-operated or manual push-up versions.\n\nBest for: service openings, interior partitions, security shutters, counter applications\nBrands we service: Cookson, Cornell, Wayne Dalton, Richards-Wilcox, Overhead Door",
  },
];

const sealTech = [
  {
    title: "What does a preventive maintenance program include?",
    summary: "Annual, bi-annual, or quarterly scheduled service visits with a written inspection report.",
    body: "Our commercial PM program covers: spring tension check and adjustment, cable condition and drum inspection, roller and hinge inspection and lubrication, bottom seal replacement, track alignment and clearance check, operator force adjustment, safety reversal test, limit switch calibration, and a written inspection report.\n\nPM visit intervals:\n• Annual — light-cycle commercial facilities\n• Bi-annual — standard distribution (most Richmond warehouses)\n• Quarterly — 24/7 operations, high-speed doors, dock equipment",
  },
  {
    title: "How often do commercial door springs need replacement?",
    summary: "Commercial torsion springs are rated for 25,000–100,000+ cycles. A Richmond single-shift operation typically replaces springs every 3–7 years.",
    body: "Cycle count is the biggest driver:\n• Standard commercial (25k-cycle spring): 3–5 years at 20 openings/day\n• High-cycle spring (50k–100k): 5–12 years depending on use\n• Oil-tempered vs. galvanized: galvanized last longer in BC's wet climate\n\nWe stock high-cycle springs and always recommend the next-grade spring on replacement to reduce future downtime.",
  },
  {
    title: "Do you service commercial doors installed by another company?",
    summary: "Yes. We service all major brands regardless of installer.",
    body: "We service Clopay, Wayne Dalton, DBCI, Raynor, Amarr, Overhead Door, Rytec, Rite-Hite, Albany, TNR, and all other major brands. If you can give us a brand name and model number, we can almost always have common parts on the truck for the first visit.\n\nSpecialty parts for older or unusual doors: 3–7 business days.",
  },
  {
    title: "What's included in a BC fire door inspection and certification?",
    summary: "Annual inspection is required by BC Fire Code for all UL-listed fire doors.",
    body: "Our fire door inspection includes:\n• Visual inspection of slats, bottom bar, guides, and seals\n• Fusible link function test and replacement if required\n• Automatic closing device operation test\n• Smoke detector interlock function (if connected)\n• Full travel test (drop test)\n• Written report and door tag\n• We provide the written report required for fire marshal and insurance compliance.",
  },
  {
    title: "What's the typical response time for a commercial emergency?",
    summary: "During business hours: 12–20 minutes from Richmond. After hours: within 60–90 minutes.",
    body: "Our dispatch and truck is in Richmond. Business hours same-day response is standard. After-hours emergency calls are answered by an on-call technician — not a call centre. Most commercial emergency repairs are completed in the first visit because we stock the most common commercial parts on every truck:\n• Springs (commercial torsion)\n• Cables\n• Rollers (all gauge)\n• Bottom seals\n• Operator trolleys and drive components\n• Control boards for LiftMaster, Genie, Linear",
  },
];

const faqs = [
  { q: "Can you service commercial doors installed by another company?", a: "Yes. We service all major brands regardless of who installed them — Clopay, Wayne Dalton, DBCI, Raynor, Amarr, Overhead Door, Rytec, Rite-Hite, Albany, TNR, and others. Bring us whatever you have." },
  { q: "How do I know if my commercial door needs replacement vs. repair?", a: "Repair is viable when the frame, tracks, and panel sections are structurally intact. Replacement is the right call when sections are cracked or crushed beyond straightening, the frame is bent, or the door is undersized for current operation. On-site assessment required — we give you a written cost comparison before any work begins." },
  { q: "Are your technicians WCB-covered for commercial sites?", a: "Yes. All DoorChamp technicians are WCB-compliant. We carry $5M liability insurance and can provide a Certificate of Insurance before any job. We've worked with most major property managers in Richmond." },
  { q: "What's the BC code requirement for fire door inspections?", a: "BC Fire Code requires annual inspection of all fire-rated doors and closures. The inspection must be documented with a written report. Missing annual inspection records can void your insurance and result in fire marshal deficiency notices. We provide a written report and door tag that satisfies BC Fire Code documentation requirements." },
  { q: "How fast can a new commercial sectional door be installed?", a: "Most standard commercial sectional doors are 3–5 business days from order confirmation. Non-standard sizes, glass doors, or custom colours add 2–4 weeks depending on the manufacturer. Emergency replacement on a damaged door can often be quoted and started within 24–48 hours for standard sizes." },
  { q: "Can you service high-speed doors you didn't install?", a: "Yes. We service Rytec, Rite-Hite, Albany, TNR, Efaflex, ASI, and other major high-speed door brands. Common parts (bottom bars, photo-eyes, control boards, fabric panels) are stocked on the truck. Specialty parts: 3–7 business days." },
  { q: "Do you offer maintenance programs for property managers?", a: "Yes. We provide scheduled PM programs for property managers and strata councils with multiple commercial units. Service records, digital reports, and dedicated contact for each property. Ask about our multi-door PM pricing." },
  { q: "What happens if our commercial door is damaged by a vehicle impact?", a: "Call us for an emergency response. We'll straighten or replace damaged sections, reset tracks, and restore the door to operation as fast as possible. We can also provide the written report and photos required for insurance claims. If the frame is bent, we'll assess whether a full replacement is needed." },
  { q: "Do you work with construction GCs on new commercial builds?", a: "Yes. We're available as a subcontractor for commercial and industrial door packages on new construction and major renovation projects in Richmond and Metro Vancouver. Contact us early — commercial doors need to be specified before rough framing so the opening size is correct." },
  { q: "What commercial door operator brands do you install and service?", a: "We install and service LiftMaster (most common in Richmond), Genie, Linear, Chamberlain, Marantec, FAAC, and others. For access control integration, we work with Salto, HID, Kantech, and most major systems used in Metro Vancouver commercial facilities." },
];

const inspection = [
  "Spring tension and winding check, cable condition and drum inspection",
  "Roller wear, hinge pin condition, side seal contact",
  "Bottom seal condition and contact profile",
  "Track alignment, clearance, and level check",
  "Panel section integrity and weatherstripping condition",
  "Operator force adjustment and limit switch calibration",
  "Safety reversal test and photo-eye alignment",
  "Auto-close timer function (if equipped)",
  "Manual release and emergency operation test",
  "Full-travel run test (open + close, timed)",
  "Written inspection report — suitable for insurance and fire marshal",
];

function ProductCard({ tag, brand, model, body, specs, url, img }: {
  tag: string; brand?: string; model: string; body: string; specs: string[]; url?: string; img?: string;
}) {
  return (
    <div className="rounded-card bg-white border border-steel/10 shadow-card flex flex-col overflow-hidden">
      {img && (
        <div className="relative">
          <img src={img} alt={model} className="w-full h-48 object-cover" />
          <span className="absolute top-3 right-3 bg-navy-dark/90 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded">{tag}</span>
        </div>
      )}
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          {!img && <span className="text-xs font-bold uppercase tracking-wide text-gold">{tag}</span>}
          {brand && <p className="text-xs text-gold font-bold uppercase tracking-wide mt-0.5">{brand}</p>}
          <h3 className="font-heading font-bold text-base text-navy-dark mt-1">{model}</h3>
          <p className="text-sm text-steel leading-relaxed mt-2 italic">{body}</p>
        </div>
        <ul className="space-y-1.5">
          {specs.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-steel">
              <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-2 pt-2">
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-steel border border-steel/20 rounded px-3 py-2 hover:border-steel/50 transition-colors">
              <span>⊞</span> View on {new URL(url).hostname.replace("www.", "")}
            </a>
          )}
          <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded bg-gold px-4 py-2.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
            Get a Quote
          </Link>
        </div>
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
        <div className="absolute inset-0 bg-navy-dark/78" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-block bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Commercial Door Service · Richmond, BC
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Door jammed, spring snapped,<br className="hidden sm:block" /> panel crushed?{" "}
            <span className="text-gold">We fix it before your next shift starts.</span>
          </h1>
          <p className="mt-5 text-white/75 text-base max-w-2xl leading-relaxed">
            Every Richmond warehouse, distribution centre, and commercial building has overhead doors that have to work.
            DoorChamp is 12–20 minutes from your bay — parts on the truck, all major brands, same-day on business hours calls.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
            <a href={siteConfig.phone.href} className="flex-1 inline-flex items-center justify-center gap-3 rounded-card bg-gold px-6 py-4 font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
              <IconPhone className="w-5 h-5 flex-shrink-0" />
              <span className="flex flex-col items-start leading-tight">
                <span className="text-xs font-bold uppercase tracking-wide opacity-70">Call · Same-day Richmond</span>
                <span className="text-lg">{siteConfig.phone.display}</span>
              </span>
            </a>
            <Link href="/request-a-quote/" className="flex-1 inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-6 py-4 text-sm font-bold hover:border-white transition-colors">
              Request a quote →
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/65">
            <span>✓ Same-day Richmond</span>
            <span>✓ Fire-rated door work</span>
            <span>✓ All major brands serviced</span>
            <span>✓ WCB + $5M insured</span>
          </div>
        </div>
      </section>

      {/* WHAT WE SERVICE */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Whatever you have — we service it</h2>
          <p className="text-steel text-sm mb-8">
            All major brands · Clopay · Wayne Dalton · DBCI · Raynor · Rytec · Rite-Hite · Albany · LiftMaster · Genie · Cookson · McKeon
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {equipmentCategories.map((s) => (
              <div key={s.title} className="rounded-card bg-white border border-steel/10 p-6 shadow-card">
                <h3 className="font-heading font-bold text-base text-navy-dark mb-1">{s.title}</h3>
                <p className="text-sm text-steel leading-relaxed mb-3">{s.body}</p>
                {s.href && (
                  <Link href={s.href} className="text-xs font-bold text-gold hover:underline">Learn more →</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Pricing at a glance — Richmond commercial doors</h2>
          <p className="text-steel text-sm mb-8">
            Commercial door work can be bundled into your PM contract — same crew, same visit, same warranty. Standalone callouts also available.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <p className="text-xs text-steel mt-6">
            Prices for Richmond locations. Every project gets a written firm quote on-site before any work begins. 2-year labour warranty on all installs.
          </p>
          <div className="mt-6">
            <Link href="/request-a-quote/" className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-6 py-3 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
              Get a written quote →
            </Link>
          </div>
        </div>
      </section>

      {/* COMMERCIAL SECTIONAL DOORS */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: "url('/images/commercial-door-types-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-white/93" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-2">Commercial sectional doors we service & install</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Clopay · Wayne Dalton · DBCI · Raynor · Amarr · Overhead Door</h2>
          <p className="text-steel text-sm mb-8">
            We carry common wear-item parts on the truck for every major brand: torsion springs, cables, rollers, bottom seals, hinges. Specialty parts ordered 3–7 business days.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectionalDoors.map((d) => (
              <ProductCard key={d.model} {...d} />
            ))}
          </div>
        </div>
      </section>

      {/* DOOR TYPES EXPLAINER */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Sectional · High-Speed · Fire-Rated · Rolling Steel. We service all of them</h2>
          <p className="text-steel text-sm mb-8 max-w-3xl">
            Richmond commercial facilities use four main door types, each suited to a different application. Here's how they compare and when each is the right call.
          </p>
          <Accordion items={doorTech} />
        </div>
      </section>

      {/* HIGH-SPEED DOORS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-2">High-speed roll-up doors</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Rytec · Rite-Hite · Albany · TNR · Efaflex · ASI</h2>
          <p className="text-steel text-sm mb-8">
            High-speed doors open 60–100 inches per second — dramatically reducing energy loss versus a sectional door left open. We service all major brands and stock common parts on every truck.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {highSpeedDoors.map((d) => (
              <ProductCard key={d.model} {...d} />
            ))}
          </div>
        </div>
      </section>

      {/* FIRE-RATED DOORS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-2">Fire-rated doors — BC Fire Code annual inspection required</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">UL-listed fire doors · Cookson · McKeon · Cornell · Wayne Dalton</h2>
          <p className="text-steel text-sm mb-8 max-w-3xl">
            BC Fire Code requires annual inspection and documentation of all fire-rated rolling steel doors. Our written report and door tag satisfy fire marshal and insurance requirements. We handle inspections, fusible link replacement, and any repairs required to bring a fire door back to compliance.
          </p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
            {fireDoors.map((d) => (
              <ProductCard key={d.model} {...d} />
            ))}
          </div>

          <div className="mt-10 rounded-card bg-navy-dark text-white p-8 max-w-3xl">
            <h3 className="font-heading font-bold text-lg mb-3">What happens if you miss a fire door inspection?</h3>
            <p className="text-white/75 text-sm leading-relaxed mb-3">
              BC Fire Code Section 6.4.3 requires annual inspection and testing of all fire doors. Missing inspections can result in deficiency notices from the fire marshal, insurance voidance in the event of a fire, and potential liability exposure for the building owner.
            </p>
            <p className="text-white/75 text-sm leading-relaxed">
              We carry the documentation forms and produce the written report on-site. Most fire door inspections take under an hour per door. Contact us to book annual inspections for your entire facility in one scheduled visit.
            </p>
          </div>
        </div>
      </section>

      {/* COMMERCIAL OPERATORS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-2">Commercial door operators & automation</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">LiftMaster · Genie · Linear · Chamberlain · Marantec · FAAC</h2>
          <p className="text-steel text-sm mb-8">
            Commercial operators run at 100,000-cycle ratings and integrate with loop detectors, access control, and building management systems. We install, service, and replace all major brands.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {operators.map((o) => (
              <ProductCard key={o.model} {...o} />
            ))}
          </div>
        </div>
      </section>

      {/* PREVENTIVE MAINTENANCE EXPLAINER */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Service programs · maintenance contracts · 24/7 emergency response</h2>
          <p className="text-steel text-sm mb-8 max-w-3xl">
            A failed commercial door doesn't just create inconvenience — it stops operations, creates security gaps, and may violate safety compliance. A PM program dramatically reduces emergency callouts and documents everything for insurance.
          </p>
          <Accordion items={sealTech} />
        </div>
      </section>

      {/* WHY DOORCHAMP */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-5">
              Why commercial properties choose DoorChamp
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              Richmond's warehouse and industrial district operates around the clock. We service commercial doors the same way — rapid response, written documentation, and service agreements that keep your facility running.
            </p>
            <p className="text-white/75 leading-relaxed">
              Every technician carries common commercial parts — springs, cables, rollers, bottom seals, and control boards — so most repairs are done first visit.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "12–20 min response within Richmond (business hours)",
              "24/7 emergency line — on-call technician, not a call centre",
              "WCB-compliant technicians on every commercial job",
              "$5M liability coverage — COI available on request",
              "Fire door inspection, testing & BC Fire Code documentation",
              "Licensed & insured for all commercial and industrial work",
              "Service agreements for property managers and strata councils",
              "All major brands serviced — no proprietary lock-in",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-white/85 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11-POINT INSPECTION */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">What gets checked on a commercial PM visit</h2>
          <p className="text-steel text-sm mb-8 max-w-3xl">
            Our commercial PM inspection covers all mechanical, safety, and operational systems. Every visit produces a written inspection report — suitable for insurance and fire marshal documentation.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {inspection.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-steel text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div>
            <p className="text-steel text-sm font-bold mb-3">Inspection intervals</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {[
                { freq: "Annual", desc: "once a year (light-cycle commercial)" },
                { freq: "Bi-annual", desc: "every 6 months (standard distribution)" },
                { freq: "Quarterly", desc: "every 3 months (24/7 high-cycle operations)" },
              ].map(t => (
                <div key={t.freq} className="rounded-card bg-white border border-steel/10 shadow-card px-4 py-3">
                  <span className="text-gold font-bold">{t.freq}</span>
                  <span className="text-steel ml-2 text-sm">{t.desc}</span>
                </div>
              ))}
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
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">Commercial door problem in Richmond? Call DoorChamp.</h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Same-day response for businesses. Emergency line answered by a technician. Request a quote or call for emergency response — we'll give you a written firm price on-site before any work starts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={siteConfig.phone.href} className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
              Request a Free Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
