import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck, IconWrench, IconAlert, IconMaintenance, IconParts, IconInstall } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Warehouse & Loading Dock Service Richmond BC | DoorChamp",
  description:
    "Dock levelers, restraints, seals, overhead doors — complete warehouse door service in Richmond BC. Same-day dock emergency response. All brands. Call (778) 800-0769.",
  alternates: { canonical: "/warehouses/" },
};

function ProductCard({ badge, title, desc, features, img, cta }: {
  badge?: string; title: string; desc: string; features?: string[]; img?: string; cta?: string;
}) {
  return (
    <div className="rounded-card border border-steel/10 bg-white overflow-hidden flex flex-col shadow-card">
      <div className="relative h-44 flex items-center justify-center overflow-hidden">
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-contain p-4" />
        ) : (
          <span className="text-steel/30 text-sm text-center px-4">{title}</span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        {badge && <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-1">{badge}</span>}
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
        <a
          href={siteConfig.phone.href}
          className="mt-auto w-full text-center rounded-card bg-gold text-navy-dark text-xs font-bold py-2.5 px-4 hover:bg-gold-dark transition-colors"
        >
          {cta ?? "Get a Quote"}
        </a>
      </div>
    </div>
  );
}

const levelers = [
  {
    badge: "HYDRAULIC LEVELER",
    title: "Rite-Hite Hydraulic Dock Leveler",
    desc: "Push-button operation. The standard for Richmond high-cycle warehouse docks. Smooth lip extension, auto-return, full maintenance access from the dock floor.",
    features: ["Push-button hydraulic operation", "Full-range lip extension", "Aluminum construction option", "Rated to 50,000 lb capacity", "Low-maintenance hydraulic cylinder", "Rite-Hite parts on truck"],
    img: "/images/loading-dock-leveler-rite-hite-hydraulic.webp",
  },
  {
    badge: "HYDRAULIC LEVELER",
    title: "Blue Giant Hydraulic Leveler",
    desc: "Heavy-duty hydraulic leveler for Richmond industrial docks with high truck volume. Proven in strata warehouse complexes and busy distribution yards.",
    features: ["12,000–20,000 lb capacity", "Powered lip extension", "Recessed pit design", "Auto-return to stored position", "Blue Giant service parts stocked", "High-cycle industrial rating"],
    img: "/images/loading-dock-leveler-blue-giant.webp",
  },
  {
    badge: "MECHANICAL LEVELER",
    title: "Mechanical Dock Leveler",
    desc: "Pull-chain walk-on operation. The most common leveler in Richmond strata warehouse units — simple, durable, and low-cost to maintain.",
    features: ["Manual pull-chain operation", "Walk-on lip activation", "No power required", "Lower installed cost", "Easy field adjustment", "All brands serviced"],
    img: "/images/loading-dock-leveler-mechanical.webp",
  },
  {
    badge: "EDGE-OF-DOCK LEVELER",
    title: "Edge-of-Dock Leveler",
    desc: "Bolt-on leveler for docks without a pit. Handles grade differences up to 5\". The fast, affordable fix for Richmond warehouse units not originally built with a pit leveler.",
    features: ["No pit required", "Installs on existing dock face", "Spring-return lip", "Up to 5\" grade compensation", "Suitable for medium-cycle use", "Same-day installation available"],
    img: "/images/loading-dock-leveler-edge-of-dock.webp",
  },
  {
    badge: "AIR-POWERED LEVELER",
    title: "Air-Powered Dock Leveler",
    desc: "Inflatable bag lifts the platform — no hydraulic fluid, no cylinder failure, no oil leak into the pit. Preferred for food-grade Richmond warehouse environments.",
    features: ["No hydraulic fluid or cylinders", "Single push-button control", "Clean room / food-grade suitable", "Lower maintenance cost", "Safe under-leveler work access", "Blue Giant and Pentalift options"],
    img: "/images/loading-dock-leveler-air-powered.webp",
  },
  {
    badge: "PORTABLE / PENTALIFT",
    title: "Pentalift Portable Dock Leveler",
    desc: "Free-standing portable platform for Richmond dock positions without a permanent leveler. Also used for temporary dock setups and cross-dock operations.",
    features: ["No pit or permanent installation", "Hydraulic or manual options", "Relocatable between positions", "Grade range up to 12\"", "Pentalift parts available", "Fast lead time from stock"],
    img: "/images/loading-dock-leveler-pentalift.webp",
  },
];

const restraints = [
  {
    badge: "WHEEL RESTRAINT · POWERED",
    title: "Rite-Hite DOK-LOK Restraint",
    desc: "The best-selling powered vehicle restraint in North America. Automatically locks onto the truck's rear impact guard the moment the driver backs in. Interlock with the dock leveler — leveler will not operate until the truck is secured.",
    features: ["Automatic RIG hook engagement", "Interlock with leveler and door", "Traffic light signals inside and outside", "Rated to 400,000 lb restraint force", "Works in wet and icy conditions", "Most common Richmond warehouse spec"],
    img: "/images/loading-dock-restraint-rite-hite-doklok.webp",
  },
  {
    badge: "WHEEL RESTRAINT · POWERED",
    title: "Blue Giant StrongArm Restraint",
    desc: "Heavy-duty RIG-engaging restraint for high-cycle Richmond distribution docks. Color-coded traffic light communication keeps drivers and dock workers in sync.",
    features: ["Powered RIG engagement", "LED traffic light system", "High-cycle duty rating", "Stainless steel option for wash-down", "Blue Giant parts stocked", "Interlock with Blue Giant levelers"],
    img: "/images/loading-dock-restraint-blue-giant-strongarm.webp",
  },
  {
    badge: "WHEEL RESTRAINT · POWERED",
    title: "Kelley TrueCheck Restraint",
    desc: "Wheel-engaging restraint for trailers without a standard RIG. Kelley's approach locks the trailer tire directly — works on trailers the hook-style restraints miss.",
    features: ["Wheel-chocking mechanism", "Works on non-RIG trailers", "Electric or hydraulic drive", "Traffic signal communication", "Low-profile housing", "Kelley parts on truck"],
    img: "/images/loading-dock-restraint-kelley-truecheck.webp",
  },
  {
    badge: "MANUAL RESTRAINT",
    title: "Wheel Chock Restraint System",
    desc: "Manual wheel chock with ICC bar for Richmond docks that need a low-cost compliance solution. Chain-and-chock systems with storage bracket meet WorkSafeBC requirements at every dock position.",
    features: ["Manual chock and chain", "ICC bar compatibility", "WorkSafeBC compliant setup", "Low installed cost", "No electrical required", "Suitable for low-cycle docks"],
    img: "/images/loading-dock-restraint-wheel-chock.webp",
  },
];

const seals = [
  {
    badge: "DOCK SEAL · FOAM",
    title: "Rite-Hite Eclipse Dock Seal",
    desc: "Compression foam seal for tight, energy-efficient closure against most trailer bodies. The most common dock seal on Richmond strata warehouse units — simple, low-maintenance, and long-lasting.",
    features: ["Foam compression design", "Tight trailer contact", "High energy efficiency rating", "Vinyl-laminated wear surface", "Compatible with all trailer heights", "Easy field replacement"],
    img: "/images/loading-dock-seal-rite-hite-eclipse.webp",
  },
  {
    badge: "DOCK SEAL · INFLATABLE",
    title: "Rite-Hite Phantom Inflatable Seal",
    desc: "Inflatable bladder seals around the trailer regardless of trailer width, height, or body irregularities. Best performance for Richmond cold-storage and food-grade docks.",
    features: ["Inflatable bladder design", "Works on any trailer size", "Superior energy efficiency", "No wear from trailer contact", "Cold storage rated", "Powered inflation system"],
    img: "/images/loading-dock-seal-rite-hite-phantom.webp",
  },
  {
    badge: "DOCK SHELTER",
    title: "Blue Giant Dock Shelter",
    desc: "Brush-curtain shelter for Richmond docks that receive multiple trailer sizes. The shelter accommodates more variation than a seal — preferred where trailer heights vary widely.",
    features: ["Adjustable brush-curtain sides", "Works across trailer height range", "Maintains seal without compression", "Head curtain included", "Heavy-duty frame construction", "Blue Giant parts stocked"],
    img: "/images/loading-dock-shelter-blue-giant.webp",
  },
  {
    badge: "HEAD CURTAIN",
    title: "Dock Head Curtain",
    desc: "Overhead curtain that seals the gap above the trailer roof at the dock face. Used standalone on low-clearance Richmond docks or paired with side seals for full perimeter closure.",
    features: ["Fills gap above trailer roof", "Compatible with any seal type", "Vinyl or brush material options", "Low-clearance dock solution", "Easy installation", "Full perimeter seal when combined"],
    img: "/images/loading-dock-head-curtain.webp",
  },
];

const bumpers = [
  {
    badge: "LAMINATED BUMPER",
    title: "6\" Laminated Rubber Bumper",
    desc: "The standard dock bumper for Richmond warehouse units. Absorbs trailer impact and protects the dock face. Bolts directly to the concrete dock face.",
    features: ["6\" projection from dock face", "Laminated rubber construction", "High-impact resistance", "Direct bolt-on installation", "Available in 10\", 12\" heights", "Most common Richmond spec"],
    img: "/images/loading-dock-bumper-laminated-6in.webp",
  },
  {
    badge: "POLYETHYLENE BUMPER",
    title: "Polyethylene Dock Bumper",
    desc: "UHMW polyethylene face resists oils, solvents, and chemicals — preferred for Richmond food-processing and chemical warehouse docks where rubber contamination is a concern.",
    features: ["UHMW polyethylene face", "Chemical and oil resistant", "No rubber transfer to trailers", "Food-grade compatible", "Easy clean surface", "Longer service life than rubber"],
    img: "/images/loading-dock-bumper-polyethylene.webp",
  },
  {
    badge: "SPRING-MOUNT BUMPER",
    title: "Spring-Mount Dock Bumper",
    desc: "Spring-mounted bumper absorbs impact and returns to position — protects both the dock face and the trailer. Used at Richmond docks with high daily truck cycles.",
    features: ["Spring return mechanism", "Reduced impact force on structure", "High-cycle rated", "Steel spring assembly", "Bolt-on installation", "Available in multiple projections"],
    img: "/images/loading-dock-bumper-spring-mount.webp",
  },
  {
    badge: "STEEL-FACED BUMPER",
    title: "10\" Steel-Faced Bumper",
    desc: "Heavy-duty steel-faced bumper for Richmond industrial docks with large trucks and high-impact use. The 10\" projection handles significant grade differences between dock and trailer floor.",
    features: ["10\" projection from dock face", "Steel face plate", "High-load rated", "Welded construction", "Suitable for semi-trailer use", "Long service life"],
    img: "/images/loading-dock-bumper-steel-faced-10in.webp",
  },
];

const failures = [
  { n: "1", title: "Hydraulic Leveler Won't Rise or Extend Lip", body: "Oil leak from the cylinder or pump, solenoid failure, or a stuck check valve. The leveler platform rises but the lip won't extend, or the whole unit won't come up. Most hydraulic leveler failures are a single component — pump, valve, or seal kit. Parts are on the truck for Rite-Hite, Blue Giant, and Kelley levelers. Most repairs are same visit." },
  { n: "2", title: "Mechanical Leveler Lip Won't Latch or Drops", body: "Lip hinge wear, keeper rod failure, or pull-chain mechanism binding. The lip comes out but won't hold position, or falls mid-loading. This stops the dock completely. Mechanical leveler components are simple — keeper, lip, hinge, walk-on leg. We carry rebuild kits for the most common Richmond brands." },
  { n: "3", title: "Vehicle Restraint Won't Engage or Release", body: "Powered restraints fail at the motor, the limit switch, or the RIG hook itself — bent from a truck strike, worn, or jammed with debris. The dock is locked: WorkSafeBC requires a secured restraint before leveler operation. We clear, repair, or replace the hook assembly and interlock wiring same visit for Rite-Hite DOK-LOK and Blue Giant StrongArm." },
  { n: "4", title: "Dock Seal Torn or Missing — Heat and Rain Into the Dock", body: "Compression seals fail at the corners first — foam compresses permanently, vinyl tears, and the dock header pulls away from the building. Result: rain, wind, and cold into the building. Torn or collapsed seals are a replacement job, not a repair. We stock Eclipse and similar foam seal assemblies for same-visit installation on standard Richmond dock openings." },
];

const pmItems = [
  "Leveler platform lift force and hold test",
  "Hydraulic fluid level and leak check",
  "Lip latch and keeper condition",
  "Walk-on leg and hinge wear",
  "Pump motor and solenoid function",
  "Vehicle restraint hook travel and limit switch",
  "Restraint–leveler interlock test",
  "Traffic light signal function — inside and outside",
  "Dock seal compression and tear inspection",
  "Seal corner bracket and fastener check",
  "Bumper anchor bolt torque check",
  "Overhead door balance and spring tension",
  "Door track alignment and roller wear",
  "Weather seal condition — bottom and sides",
  "Dock light function if present",
  "Pit drain clear — no debris or standing water",
  "Control panel label legibility",
  "WorkSafeBC signage present and legible",
  "Written report per dock position",
  "Code-violation log with photos",
  "Parts estimate for any deferred repair",
];

const contracts = [
  { doors: "1–4 dock positions", freq: "Annual", rate: "from $249/position/year", note: "One PM visit · written report · 10% off parts" },
  { doors: "5–9 dock positions", freq: "Annual", rate: "from $199/position/year", note: "One PM visit · code-violation log · 12% off parts" },
  { doors: "10–19 dock positions", freq: "Bi-annual", rate: "from $179/position/visit", note: "2 visits/year · asset register · 15% off parts" },
  { doors: "20+ dock positions", freq: "Quarterly", rate: "from $149/position/visit", note: "4 visits/year · priority dispatch · 20% off parts" },
];

const brands = [
  "Rite-Hite", "Blue Giant", "Pentalift", "Kelley", "Serco", "Assa Abloy", "Nordock", "McGuire",
  "Poweramp", "Dok-Mor", "Frommelt", "Entrematic", "Amarr", "Clopay", "Wayne Dalton", "Raynor",
];

const faqs = [
  { q: "How fast can you respond to a dock emergency in Richmond?", a: "We dispatch from our Richmond yard — typical response is 12–20 minutes in the Richmond industrial and warehouse area. For strata warehouse complexes on No. 5 Road, Bridgeport, and the Crestwood/Riverside corridors, we are almost always the first call and the first truck on site." },
  { q: "Can you service our dock levelers if you didn't install them?", a: "Yes. We service and repair any brand of dock leveler, restraint, seal, or shelter regardless of who installed it. We carry parts for Rite-Hite, Blue Giant, Kelley, Pentalift, Nordock, and McGuire. If we need a specialty part, we can usually source it within 24 hours from our Richmond supplier network." },
  { q: "Do you handle the overhead doors at the dock positions too?", a: "Yes — both on the same truck. Overhead door spring replacement, cable and drum, track alignment, and commercial operator service are all in scope. One callout fee covers the dock leveler and the overhead door at the same position. We don't hand off between trades." },
  { q: "What does a dock leveler PM actually cost?", a: "A single-position annual PM is $249 including the 21-point inspection and written report. At 5+ positions the rate drops to $199/position/year. At 10+ positions, bi-annual PM at $179/position/visit is typically less than one emergency callout per year — it prevents the callouts." },
  { q: "Is a dock vehicle restraint required in BC?", a: "WorkSafeBC OHS Regulation 4.112 requires that trailers be immobilized before dock leveler operation. A powered restraint is the most reliable compliance method. Wheel chocks are acceptable at lower-cycle docks but require a written procedure and consistent employee practice. We can advise on the right compliance approach for your dock volume and trailer mix." },
  { q: "Can you quote all the docks at our facility at once?", a: "Yes — send us your building address and dock count and we'll do a no-cost walk-through. We return a written proposal covering all dock positions: current condition, any code or WorkSafeBC issues, and a PM contract rate. Most Richmond warehouse walk-throughs take 30–45 minutes for a 10-position facility." },
  { q: "What's the warranty on dock leveler repair work?", a: "One year on parts and labour for repair work. New leveler and restraint installations carry manufacturer warranty plus our 1-year installation guarantee. If a repaired component fails within the warranty period, we return same-day at no charge." },
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
            Dock Emergency · Richmond, BC
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Dock door down?<br />
            <span className="text-gold">Trucks waiting, money bleeding.</span>
          </h1>
          <p className="mt-5 text-white/75 text-base max-w-2xl leading-relaxed">
            A dock position that's down stops inbound and outbound. We respond same-day from our Richmond yard — dock levelers, vehicle restraints, overhead doors, seals. Every brand. Parts on the truck. Most dock repairs are completed same visit.
          </p>
          <div className="mt-8 flex flex-col gap-3 max-w-lg">
            <a href={siteConfig.phone.href} className="flex items-center gap-4 rounded-card bg-red-600 px-7 py-4 hover:bg-red-700 transition-colors">
              <IconPhone className="w-5 h-5 text-white flex-shrink-0" />
              <div>
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest leading-none mb-1">Call now · Same-day Richmond</p>
                <p className="text-white font-heading font-extrabold text-2xl leading-none">{siteConfig.phone.display}</p>
              </div>
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
            {["12–20 min dock emergency response", "All brands serviced", "Levelers + restraints + overhead doors on one truck", "WCB + $5M insured"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs text-steel font-semibold">
                <IconCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" /> {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* VALUE PROP */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-steel text-xs uppercase tracking-widest mb-3">Why it matters</p>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
              A dock position that's down for two hours doesn't cost $500. It costs the shift.
            </h2>
            <p className="text-steel text-sm leading-relaxed mb-5">
              Every Richmond warehouse manager knows the math: one dock position down means inbound freight queued in the yard, outbound trucks waiting, and a ripple into the next shift. The emergency callout fee is not the cost — the lost dock time is.
            </p>
            <p className="text-steel text-sm leading-relaxed mb-6">
              We price the repair, not the crisis. Flat callout rate, parts billed at cost-plus, labour billed by the job — not the hour. Most dock leveler and restraint repairs are completed in one visit. If we can't finish same visit, we leave the dock position safely operational and return with the part.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Callout + diagnosis", price: "$189", note: "Flat rate, no hourly" },
                { label: "Hydraulic leveler repair", price: "from $289", note: "Seal kit, valve, or pump — most common repairs" },
                { label: "Vehicle restraint repair", price: "from $349", note: "Hook, motor, limit switch, or interlock" },
              ].map((p) => (
                <div key={p.label} className="rounded-card bg-surface border border-steel/10 p-5 text-center">
                  <p className="font-heading font-extrabold text-navy-dark text-xl mb-0.5">{p.price}</p>
                  <p className="font-bold text-navy-dark text-sm mb-1">{p.label}</p>
                  <p className="text-xs text-steel">{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOCK LEVELERS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Levelers we service &amp; install</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Hydraulic · Mechanical · Air-powered · Edge-of-dock. All types. All brands.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            Richmond warehouses run every leveler type depending on build year, dock volume, and tenant mix. We service and install all of them — and carry parts for the most common brands on every truck.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {levelers.map((l) => <ProductCard key={l.title} {...l} />)}
          </div>
        </div>
      </section>

      {/* VEHICLE RESTRAINTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Vehicle restraints</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Rite-Hite · Blue Giant · Kelley · Manual. WorkSafeBC compliant.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            WorkSafeBC OHS Regulation 4.112 requires trailer immobilization before dock leveler operation. A failed restraint locks the dock. We repair and replace all powered and manual restraint systems — hook, motor, limit switch, interlock wiring, and traffic light signals.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {restraints.map((r) => <ProductCard key={r.title} {...r} />)}
          </div>
        </div>
      </section>

      {/* SEALS & SHELTERS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Dock seals &amp; shelters</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Foam · Inflatable · Shelter · Head curtain. Energy and weather protection.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            A torn dock seal lets rain, wind, and cold into the building on every open-position shift. We stock Eclipse-style foam seals for same-day replacement on standard Richmond dock openings.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {seals.map((s) => <ProductCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* BUMPERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Dock bumpers</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Laminated rubber · Polyethylene · Spring-mount · Steel-faced.
          </h2>
          <p className="text-steel text-sm mb-10 max-w-3xl leading-relaxed">
            Missing or damaged bumpers let trucks impact the dock face directly — cracking concrete and damaging trailer bodies. We supply and install all bumper types and anchor configurations for Richmond warehouse docks.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bumpers.map((b) => <ProductCard key={b.title} {...b} />)}
          </div>
        </div>
      </section>

      {/* FAILURES */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Most common dock failures</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-10">
            Four failures we drive to every week in Richmond.
          </h2>
          <div className="space-y-4 max-w-3xl">
            {failures.map((f) => (
              <div key={f.n} className="flex gap-5 rounded-card bg-white border border-steel/10 p-5">
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

      {/* PM CONTRACTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Preventive maintenance</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
            Three commitments. Same 21-point checklist. Different visit frequency.
          </h2>
          <p className="text-steel text-sm mb-8 max-w-2xl leading-relaxed">
            Every PM visit covers the full 21-point checklist below — leveler, restraint, seal, bumper, overhead door, and WorkSafeBC signage — at every dock position. The only difference between tiers is how often we visit and the parts discount.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {contracts.map((c) => (
              <div key={c.doors} className="rounded-card bg-surface border border-steel/10 p-5">
                <p className="text-xs font-bold text-gold uppercase tracking-widest mb-1">{c.freq}</p>
                <p className="font-heading font-bold text-navy-dark text-sm mb-2">{c.doors}</p>
                <p className="font-heading font-extrabold text-navy-dark text-lg mb-1">{c.rate}</p>
                <p className="text-xs text-steel leading-relaxed">{c.note}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <p className="font-heading font-bold text-navy-dark mb-4">What the 21-point checklist covers at every dock position:</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {pmItems.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs text-steel">
                  <IconCheck className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTRACT vs INVOICE */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Contract vs. invoice</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
            What an 8-position facility actually pays — contract vs. call-in.
          </h2>
          <div className="max-w-3xl">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-navy-dark text-white">
                    <th className="text-left px-4 py-3 font-heading font-bold rounded-tl-card"></th>
                    <th className="text-center px-4 py-3 font-heading font-bold">Call-in (no contract)</th>
                    <th className="text-center px-4 py-3 font-heading font-bold text-gold rounded-tr-card">PM Contract (8 positions)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-steel/10">
                  {[
                    ["Annual PM visits", "0", "2 × full 21-point inspection"],
                    ["Emergency callouts (typical)", "3–5 per year", "0–1 per year"],
                    ["Average callout cost", "$189 + parts", "$189 + parts (if needed)"],
                    ["Parts cost", "List price", "15% below list"],
                    ["Written inspection report", "No", "Yes — every visit"],
                    ["Code-violation log", "No", "Yes — every visit"],
                    ["Priority dispatch", "Standard queue", "Priority response"],
                    ["Estimated annual spend", "$1,800–$3,200", "from $1,432"],
                  ].map(([label, col1, col2], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                      <td className="px-4 py-3 font-semibold text-navy-dark text-xs">{label}</td>
                      <td className="px-4 py-3 text-center text-steel text-xs">{col1}</td>
                      <td className="px-4 py-3 text-center text-navy-dark font-bold text-xs bg-gold/5">{col2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-steel mt-4 leading-relaxed">Based on an 8-position Richmond warehouse with a mix of hydraulic and mechanical levelers. Actual spend varies by dock age and cycle volume.</p>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">Brand coverage</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-5">
            Every brand of commercial dock equipment in Richmond — all on the stock.
          </h2>
          <div className="flex flex-wrap gap-2 max-w-3xl mb-8">
            {brands.map((b) => (
              <span key={b} className="bg-surface border border-steel/10 text-steel text-xs font-semibold px-3 py-1.5 rounded-full">{b}</span>
            ))}
          </div>
          <div className="max-w-3xl p-5 rounded-card bg-surface border border-steel/10">
            <p className="font-heading font-bold text-navy-dark mb-3 text-sm">Parts we stock on every truck:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Hydraulic leveler seal kits", "Pump motors and solenoid valves", "Lip hinge and keeper assemblies",
                "Walk-on legs and pull-chain hardware", "DOK-LOK hook assemblies", "Limit switches and interlock relays",
                "Traffic light signal boards", "Compression foam seal panels", "Bumper anchor hardware",
                "Dock leveler control panels", "Spring return assemblies", "Cylinder repair kits",
              ].map((p) => (
                <span key={p} className="bg-white border border-steel/10 text-steel text-xs px-3 py-1 rounded-full">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-steel text-xs uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            Frequently asked questions on warehouse docks.
          </h2>
          <div className="max-w-3xl space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-card bg-white border border-steel/10 p-5">
                <p className="font-heading font-bold text-navy-dark mb-2 text-sm">{f.q}</p>
                <p className="text-sm text-steel leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">
            Free site walk. Written proposal in 48 hours.
          </h2>
          <p className="text-white/70 text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            Send us your building address and dock count — levelers, restraints, overhead doors, mandoors. We walk the property, document every position, and return a written proposal under a single facility contract or by-the-call for one-off repairs.
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
              Request a facility quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
