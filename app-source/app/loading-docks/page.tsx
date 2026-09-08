import type { Metadata } from "next";
import Link from "next/link";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";
import { Accordion } from "./Accordion";

export const metadata: Metadata = {
  title: "Loading Dock Service & Repair in Richmond BC | DoorChamp",
  description:
    "Loading dock repair & maintenance in Richmond, Surrey, Delta, Burnaby, Coquitlam & Metro Vancouver. Dock levelers, seals, restraints, bumpers. 24/7 emergency response. Call (778) 800-0769.",
  alternates: { canonical: "/loading-docks/" },
};

const equipmentCategories = [
  { title: "Overhead doors", body: "Sectional · rolling steel · high-speed roll-up · fire-rated" },
  { title: "Dock levelers", body: "Hydraulic · mechanical pull-chain · air-powered · edge-of-dock · vertical-storing" },
  { title: "Dock seals & shelters", body: "Compression foam · inflatable · soft-sided shelters · head curtains" },
  { title: "Vehicle restraints", body: "Hook restraints · wheel chocks · vertical-pivot · PLC-integrated signals" },
  { title: "Dock bumpers", body: "Standard 6\" · heavy 10\" steel-faced · polyethylene wash-down · spring-mount" },
  { title: "Plus everything else on the dock", body: "Dock lights · signal systems · strip curtains · edge guards · weatherstripping" },
];

const pricingItems = [
  { label: "Bumper replacement (each)", price: "$80–$180 installed", note: "Saves $4k–$12k in dock-face concrete repair", img: "/images/icon-dock-bumper.webp" },
  { label: "Edge-of-dock leveler (new)", price: "$2,400–$4,800 installed", note: "Low-cost retrofit · no pit construction needed · 20–30k lb cap", img: "/images/icon-dock-edge.webp" },
  { label: "Dock leveler repair", price: "from $385 labour + parts", note: "First 90 min on-site · most repairs first-visit · parts on truck", img: "/images/icon-dock-leveler-repair.webp" },
  { label: "New hydraulic pit leveler", price: "$9,500–$15,500 installed", note: "35,000 lb cap · standard 6\'×8\' deck · in existing pit", img: "/images/icon-dock-leveler-new.webp" },
  { label: "Vehicle restraint (hook) install", price: "$5,800–$8,400 installed", note: "Hook-style w/ traffic-signal interlock", img: "/images/icon-dock-restraint-hook.webp" },
  { label: "Dock seal re-skin / replace", price: "$650–$3,800 per bay", note: "Pad covers · head curtain · full seal", img: "/images/icon-dock-seal.webp" },
  { label: "Full dock walk & audit", price: "Free in Richmond", note: "Equipment inventory + written proposal in 48 hrs", img: "/images/icon-dock-audit.webp" },
];

const levelers = [
  {
    tag: "Hydraulic · Most Common",
    brand: "Rite-Hite (USA-leader)",
    model: "Rite-Hite Series 7000 / 8000",
    body: "Push-button hydraulic levelers. The industry standard for Richmond high-cycle distribution.",
    specs: ["35,000–80,000 lb cap", "Velocity fuses (anti-free-fall)", "Auto-return to stored position", "Dialogue safety system", "Optional weather-seal package", "Best lifetime value"],
    url: "https://www.ritehite.com/",
    img: "/images/loading-dock-leveler-rite-hite-hydraulic.webp",
  },
  {
    tag: "Canadian-made Hydraulic",
    brand: "Blue Giant (Brampton, ON)",
    model: "Blue Giant HD Hydraulic",
    body: "Canadian-made hydraulic leveler. Common across Richmond facilities that prefer domestic supply chain.",
    specs: ["Made in Brampton, Ontario", "35,000–60,000 lb cap", "Velocity fuse safety", "Service-friendly modular design", "Standard 6\'×8\' deck", "Optional pit-bracket retrofit"],
    url: "https://www.bluegiant.com/",
    img: "/images/loading-dock-leveler-blue-giant.webp",
  },
  {
    tag: "Air-Powered Leveler",
    brand: "Rite-Hite Hydra-Lite / Poweramp",
    model: "Rite-Hite Hydra-Lite · Poweramp APP",
    body: "Air-bag-actuated leveler. No hydraulic fluid means no contamination risk — preferred for food-grade Richmond facilities.",
    specs: ["35,000–45,000 lb cap", "Push-button activation", "Maintenance-free air bag", "Wash-down compatible", "Lower upfront vs hydraulic", "Watch for stump-out on light trailers"],
    url: "https://www.poweramp.com/",
    img: "/images/loading-dock-leveler-air-powered.webp",
  },
  {
    tag: "Mechanical Pull-Chain",
    brand: "Kelley / McGuire",
    model: "Kelley HK / McGuire DLM-PC",
    body: "Spring-counterbalanced mechanical levelers. Lowest upfront cost; highest 10-year service cost. We service legacy units across Richmond.",
    specs: ["35,000–45,000 lb cap", "Pull-chain activation", "Operator walks deck down", "Standard 6\'×8\' deck", "Best for low-cycle docks", "Often converted to hydraulic in renos"],
    url: "https://www.kelleyusa.com/",
    img: "/images/loading-dock-leveler-mechanical.webp",
  },
  {
    tag: "Canadian Engineered",
    brand: "Pentalift (Guelph, ON)",
    model: "Pentalift PSEP / PSER",
    body: "Canadian-made hydraulic and edge-of-dock levelers. Engineered in Guelph, Ontario.",
    specs: ["Made in Guelph, Canada", "35,000–60,000 lb cap", "Standard and edge-of-dock", "Cold-storage variants", "10-yr structural warranty", "Service support in BC"],
    url: "https://www.pentalift.com/",
    img: "/images/loading-dock-leveler-pentalift.webp",
  },
  {
    tag: "Edge-of-Dock",
    brand: "McGuire EOD / Serco RHJ",
    model: "McGuire EOD / Serco RHJ",
    body: "Edge-mount levelers for facilities without recessed pits. Lowest-cost option for Richmond retrofits.",
    specs: ["20,000–30,000 lb cap", "Working range ±3\" (max ±5\")", "Bolt-on dock-face install", "No pit construction needed", "Manual or hydraulic", "Best for low-volume bays"],
    url: "https://www.mcguirecorporation.com/",
    img: "/images/loading-dock-leveler-edge-of-dock.webp",
  },
];

const seals = [
  {
    tag: "Compression Seal",
    brand: "Rite-Hite Eclipse",
    model: "Rite-Hite Eclipse Foam Seal",
    body: "Tightest compression seal for Richmond cold-storage and temperature-sensitive product. Reduces air infiltration to near-zero.",
    specs: ["Three-pad construction", "Best for cold storage", "High-density EPDM foam", "Custom-cut per trailer height", "5–7 year service life", "Lowest energy loss"],
    img: "/images/loading-dock-seal-rite-hite-eclipse.webp",
  },
  {
    tag: "Inflatable Seal",
    brand: "Rite-Hite Phantom",
    model: "Rite-Hite Phantom Inflatable",
    body: "Inflates after trailer is in position for the tightest possible seal. Best for energy-sensitive Richmond facilities.",
    specs: ["Fixed pad + inflating bladder", "Best-in-class air-tightness", "Auto-inflation on dock signal", "Highest energy-recovery payback", "Higher maintenance than foam", "Best for cold + pharma"],
    img: "/images/loading-dock-seal-rite-hite-phantom.webp",
  },
  {
    tag: "Soft-Sided Shelter",
    brand: "Kelley Frommelt / Blue Giant SilverStar",
    model: "Kelley Frommelt · Blue Giant SilverStar",
    body: "Side and head curtains that flex against the trailer. Full trailer-width access — best for mixed-fleet Richmond ops.",
    specs: ["Side + head curtain construction", "Full trailer access preserved", "Multi-trailer-height compatible", "Cordura or vinyl skin", "Lower air-tightness than foam", "Standard 3PL choice"],
    img: "/images/loading-dock-shelter-blue-giant.webp",
  },
  {
    tag: "Head-Curtain Add-on",
    brand: "Universal head curtain",
    model: "Universal head & corner pads",
    body: "Closes the residual air gap at the top of the trailer. Often retrofitted onto existing seals.",
    specs: ["Solves top-corner air leak", "Spring-loaded canopy options", "Retrofits to any seal", "Cordura or hypalon construction", "Sizes 8\'–10\' trailer roof", "Most cost-effective seal upgrade"],
    img: "/images/loading-dock-head-curtain.webp",
  },
];

const restraints = [
  {
    tag: "Hook Restraint",
    brand: "Rite-Hite Dok-Lok",
    model: "Rite-Hite Dok-Lok",
    body: "The most common vehicle restraint on Richmond commercial docks. Engages the trailer\'s ICC bar automatically.",
    specs: ["Auto-engages on trailer arrival", "Red/green signal light system", "Manual override w/ key", "Standard option in new builds", "ANSI MH30.3 listed", "5-yr structural warranty"],
    img: "/images/loading-dock-restraint-rite-hite-doklok.webp",
  },
  {
    tag: "Hook Restraint (Canadian)",
    brand: "Blue Giant StrongArm",
    model: "Blue Giant StrongArm",
    body: "Canadian-made hook restraint. Common retrofit option on Bridgeport and Mitchell Island warehouses.",
    specs: ["Made in Brampton, Ontario", "Auto-engagement", "Driver-side traffic signal", "Optional inside dock lights", "Lower-priced alternative to Dok-Lok", "Service support in BC"],
    img: "/images/loading-dock-restraint-blue-giant-strongarm.webp",
  },
  {
    tag: "Hook + Light + Communication",
    brand: "Kelley TrueCheck",
    model: "Kelley TrueCheck Restraint System",
    body: "Integrated restraint + light + intercom system. The standard for high-volume Richmond 3PL facilities.",
    specs: ["Integrated communication system", "Inside + outside light coordination", "PLC controller", "Trailer creep detection", "ANSI MH30.3 compliant", "5-yr warranty"],
    img: "/images/loading-dock-restraint-kelley-truecheck.webp",
  },
  {
    tag: "Wheel Chock",
    brand: "RoadWedge / SlowSure",
    model: "Engineered wheel chocks",
    body: "Manual wheel chocks. Used as a backup to a primary restraint. Required on every dock without an automated restraint.",
    specs: ["Heavy-duty rubber or polyethylene", "Reflective high-vis colour", "Steel-reinforced models", "OSHA / WCB minimum", "Cheapest restraint option", "Operator-dependent"],
    img: "/images/loading-dock-restraint-wheel-chock.webp",
  },
];

const bumpers = [
  {
    tag: "Standard 6\" Projection",
    model: "Laminated rubber bumper",
    body: "The most common bumper across Richmond commercial docks. Replace when compressed to less than 4\".",
    specs: ["6\" original projection", "10\" × 20\" face standard", "Laminated rubber construction", "Bolt or weld mount", "3–7 year service life", "$80–$140 each installed"],
    img: "/images/loading-dock-bumper-laminated-6in.webp",
  },
  {
    tag: "Heavy Industrial 10\"",
    model: "Steel-faced laminated",
    body: "For Richmond facilities with constant heavy impact — cold storage, container terminals, heavy 3PL.",
    specs: ["10\" original projection", "Steel face plate over rubber laminations", "Best impact absorption", "5–10 year service life", "Higher upfront, longest life", "$140–$220 each installed"],
    img: "/images/loading-dock-bumper-steel-faced-10in.webp",
  },
  {
    tag: "Molded Polyethylene",
    model: "Solid-core polyurethane",
    body: "Chemical-resistant solid bumpers for food-grade and wash-down environments. Won\'t absorb water or oils.",
    specs: ["Solid polyurethane construction", "Wash-down compatible", "Chemical / oil resistant", "FDA-compatible variants", "6–10 year service life", "Higher cost, easy cleaning"],
    img: "/images/loading-dock-bumper-polyethylene.webp",
  },
  {
    tag: "Steel Spring-Mount",
    model: "Spring-mounted impact bumper",
    body: "Spring-mounted bumpers that absorb impact across the mounting bracket. Common on heavy-strike Richmond container facilities.",
    specs: ["Spring-bracket absorbs impact", "Replaceable bumper face", "Heavy-duty bracket mount", "Higher impact than fixed bumpers", "Replaceable wear elements", "For high-traffic + heavy trucks"],
    img: "/images/loading-dock-bumper-spring-mount.webp",
  },
];

const levelerTech = [
  {
    title: "Mechanical (Pull-Chain) Levelers",
    summary: "Spring-counterbalanced. Operator pulls a release chain, walks the deck down to the trailer bed, and walks back up to stow.",
    body: "Lowest upfront cost. Highest 10-year ownership cost — research from multiple manufacturers shows mechanical levelers cost roughly 6× more to maintain over a decade than hydraulic.\n\nCapacity: 35,000–45,000 lb standard\nBest for: low-cycle docks, smaller facilities, budget-constrained\nCommon brands we service: Kelley, Blue Giant, McGuire, Poweramp, Serco",
  },
  {
    title: "Hydraulic Levelers",
    summary: "Push-button activated, hydraulic cylinders raise the deck and extend the lip automatically.",
    body: "Highest capacity available. Smoothest transition. Velocity fuses prevent free-fall if a line ruptures. Best lifetime value in high-cycle operations.\n\nCapacity: 35,000–150,000 lb (custom higher)\nBest for: high-cycle operations, 24/7 distribution, cold storage, food-grade\nCommon brands we service: Rite-Hite, Kelley, Blue Giant, McGuire, Poweramp, Pentalift, DLM",
  },
  {
    title: "Air-Powered Levelers",
    summary: "Air bag inflates to lift the deck; lip extends mechanically.",
    body: "Sits between mechanical and hydraulic on cost and maintenance. No hydraulic fluid means no contamination risk — preferred in food and pharma applications. Susceptible to airbag puncture and \"stump-out\" if mechanical safety legs catch on a low trailer.\n\nCapacity: 35,000–45,000 lb standard\nBest for: food-grade, wash-down environments, mid-cycle docks\nCommon brands we service: Rite-Hite, McGuire, Poweramp, Nova",
  },
  {
    title: "Edge-of-Dock Levelers",
    summary: "Mounted to the dock face rather than recessed in a pit.",
    body: "Working range ±3\", maximum ±5\". Lowest cost option, best for facilities where pit construction isn\'t practical. Available in mechanical or hydraulic operation.\n\nBest for: retrofits, small facilities, budget retrofits in older Richmond warehouses",
  },
  {
    title: "Vertical Storing Levelers",
    summary: "Hydraulic only. Stores vertically against the building so the overhead door can seal directly to the pit floor.",
    body: "Standard in food-grade and cold-storage operations where temperature control is the priority.",
  },
];

const sealTech = [
  {
    title: "Compression (Foam) Seals",
    summary: "Three foam pads — two side, one head — that the trailer compresses against when it backs in.",
    body: "Tightest possible seal, lowest air infiltration. Best for cold storage and temperature-sensitive product. Limitation: encroaches into the trailer opening, can restrict end-loading and can be damaged by forklifts.",
  },
  {
    title: "Inflatable Seals",
    summary: "Standard fixed seal that inflates further once the trailer is in position.",
    body: "Tighter seal than standard foam, best for the tightest energy-loss specifications. Higher maintenance — the inflation bladder is wear-prone.",
  },
  {
    title: "Dock Shelters (Rigid & Soft-Sided)",
    summary: "Side curtains and a header curtain that flex against the trailer when it backs in.",
    body: "Doesn\'t encroach into the opening, full trailer width remains usable. Best for facilities with varied trailer dimensions or frequent end-loading. Standard in mixed-fleet operations.",
  },
  {
    title: "Head Curtains & Corner Pads",
    summary: "Add-ons that close residual air gaps at the top corner of the trailer where the dock seal meets the trailer roof line.",
    body: "We service all major brands — Rite-Hite (Eclipse, Phantom), Kelley (Performer, Frommelt), Blue Giant (SilverStar), and other brand-equivalents. Re-cover, pad replacement, full seal swap-outs, frame repair after forklift damage.",
  },
];

const faqs = [
  { q: "Can you service dock equipment installed by another company?", a: "Yes. We service all major brands regardless of who installed them — Rite-Hite, Blue Giant, Kelley, McGuire, Poweramp, Pentalift, Serco, Nova, DLM, and others. Bring us whatever you have." },
  { q: "How do I know if my dock leveler needs replacement vs. repair?", a: "A repair is viable when the structural frame is intact and the issue is a worn component — cylinder, lip hinge, spring, control board, or pull chain. Replacement is the right call when the frame is cracked or bent, the pit has significant corrosion, or the unit has been repeatedly repaired on the same failure. We\'ll give you an honest assessment on-site." },
  { q: "What\'s the safety standard for a vehicle restraint in BC?", a: "WorkSafeBC requires that trailers be secured before any forklift enters the trailer or dock plate. A powered hook restraint with a traffic-signal interlock is the current industry standard. Wheel chocks satisfy the minimum requirement but are operator-dependent. We recommend powered restraints for any dock handling 10+ trailers per day." },
  { q: "How often should dock bumpers be replaced?", a: "Inspect monthly. Replace when compressed to less than 4\" of original projection, visibly cracked, split, or showing internal lamination layers. For most Richmond commercial docks, that\'s every 3–7 years depending on traffic volume." },
  { q: "Can dock seals be repaired or do they always need full replacement?", a: "Most seal damage is repairable. Individual foam pads, pad covers, head curtains, and corner pads can all be replaced as discrete items. Full replacement is reserved for frame damage or complete fabric failure. We\'ll tell you which applies." },
  { q: "What\'s the difference between a dock seal and a dock shelter?", a: "A dock seal has foam pads that the trailer compresses against — tightest seal, some restriction to the trailer opening. A dock shelter uses curtains that flex against the trailer without encroaching on the opening — full access preserved, slightly less air-tight. Cold storage usually wants a seal; mixed-fleet operations usually want a shelter." },
  { q: "Do you handle pit work for vertical-storing levelers and new dock construction?", a: "Yes. We work with GCs and facility managers on new dock construction and full pit retrofits. We coordinate the concrete work and install the leveler, seal, restraint, and bumpers as a complete dock package." },
  { q: "What\'s a \"stump-out\" failure and how do you prevent it?", a: "Stump-out happens on air-powered levelers when the mechanical safety legs catch on a low trailer bed and the deck can\'t lower completely. It leaves the leveler partially deployed and blocks the dock. Prevention: correct air pressure, regular safety-leg adjustment, and training operators to recognize low-bed trailers. We include stump-out checks in every air-leveler service visit." },
  { q: "How much does a complete dock leveler replacement cost installed?", a: "Edge-of-dock (no pit): $2,400–$4,800 installed. Standard hydraulic pit leveler (existing pit): $9,500–$15,500 installed. Mechanical leveler replacement: $4,500–$8,000 installed. Every project gets a written firm quote before any work begins." },
  { q: "Can you service docks at strata warehouse units?", a: "Yes. We work with strata councils, property managers, and individual unit owners. Dock equipment in a strata warehouse is typically the unit owner\'s responsibility to maintain. We can coordinate directly with the strata manager if needed." },
  { q: "Do you work with construction GCs on new dock installations?", a: "Yes. We\'re an approved subcontractor for loading dock packages on new construction and major renovation projects in Richmond and Metro Vancouver. Contact us early in the design phase — dock equipment needs to be specified before the pit is formed." },
];

const inspection21 = [
  "Leveler operation across full range, hydraulic pressure test, walk-down/return cycle test",
  "Lip extension, stowage, and hold-down function",
  "Mechanical safety leg deployment and clearance check",
  "Velocity fuse function (hydraulic units)",
  "Seal fabric condition, foam compression, head curtain wear",
  "Restraint engagement, signal light operation, manual override function",
  "Bumper compression depth, face plate integrity, mounting hardware",
  "Dock light operation, intercom and signal function",
  "Strip curtain wear and PVC clarity",
  "Door condition (cross-referenced to overhead door inspection)",
  "Full WorkSafeBC-compliant written report",
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

export default function LoadingDocksPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative text-white overflow-hidden" style={{ backgroundImage: "url('/images/loading-dock-hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-navy-dark/75" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Commercial · Richmond BC</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Dock down?<br />Fast Service. Within 1 Hour.
          </h1>
          <p className="mt-4 text-white/75 text-lg max-w-2xl leading-relaxed">
            DoorChamp dispatch · 24/7 emergency line · Every major brand of dock equipment serviced.
          </p>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="flex items-center gap-1.5"><span className="text-gold">✓</span> Within 1 hour business hrs</span>
            <span className="flex items-center gap-1.5"><span className="text-gold">✓</span> 24/7 after-hours</span>
            <span className="flex items-center gap-1.5"><span className="text-gold">✓</span> Parts on every truck</span>
          </div>
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
              <IconPhone className="w-4 h-4" /> Emergency: {siteConfig.phone.display}
            </a>
            <a href="sms:+17788000769" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
              💬 Or text the on-call tech
            </a>
          </div>
        </div>
      </section>

      {/* WHATEVER JUST BROKE */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Whatever just broke — we fix it</h2>
          <p className="text-steel text-sm mb-8">
            Parts on every truck — cylinders, springs, lip-hinges, control boards.<br />
            Every major brand — Rite-Hite · Blue Giant · Pentalift · Kelley · McGuire · Poweramp · Serco · Nova · DLM.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {equipmentCategories.map((s) => (
              <div key={s.title} className="rounded-card bg-white border border-steel/10 p-6 shadow-card">
                <h3 className="font-heading font-bold text-base text-navy-dark mb-1">{s.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Pricing at a glance — Richmond dock equipment</h2>
          <p className="text-steel text-sm mb-8">
            Dock equipment work is bundled into your warehouse maintenance contract — same crew, same visit, same warranty. Standalone callouts also available.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingItems.map((item) => (
              <div key={item.label} className="rounded-card border border-steel/15 bg-white p-5 flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <img src={item.img} alt={item.label} className="w-16 h-16 object-cover rounded flex-shrink-0" />
                  <span className="text-gold font-bold uppercase tracking-wide text-xs leading-snug mt-1">{item.label}</span>
                </div>
                <p className="font-heading font-extrabold text-navy-dark text-xl leading-tight mb-2"><span className="price-val">{item.price}</span></p>
                <p className="text-xs text-steel leading-relaxed mt-auto">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-steel mt-6">
            Prices for Richmond locations. Every project gets a written firm quote on-site before any work begins. 1-year labour warranty on all installs.
          </p>
          <div className="mt-6">
            <Link href="/request-a-quote/" className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-6 py-3 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
              Get a written quote →
            </Link>
          </div>
        </div>
      </section>

      {/* DOCK LEVELERS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-2">Dock levelers we service & install</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Rite-Hite · Blue Giant · Pentalift · Kelley · McGuire · Poweramp · Serco · Nova · DLM</h2>
          <p className="text-steel text-sm mb-8">
            We carry common wear-item parts on the truck for every major brand: cylinders, springs, lip-hinges, pull-chains, control boards. Specialty parts ordered 3–7 business days.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {levelers.map((l) => (
              <ProductCard key={l.model} {...l} />
            ))}
          </div>
        </div>
      </section>

      {/* LEVELER TECH EXPLAINER */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Mechanical · Hydraulic · Air-Powered. We service all three</h2>
          <p className="text-steel text-sm mb-8 max-w-3xl">
            A dock leveler is the steel platform that lowers from the dock face onto the trailer bed, bridging the height gap. There are three core technologies, and the right choice depends on cycle count, load, environment, and budget.
          </p>
          <Accordion items={levelerTech} />
        </div>
      </section>

      {/* DOCK SEALS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-2">Dock seals & shelters</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Compression seals · Inflatable seals · Soft-sided shelters · Head curtains</h2>
          <p className="text-steel text-sm mb-8">
            Most seal damage in Richmond is repairable — pad covers, head curtains, and individual foam pads can be replaced as discrete items. Full replacement reserved for frame damage or complete fabric failure.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {seals.map((s) => (
              <ProductCard key={s.model} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* SEALS VS SHELTERS EXPLAINER */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Compression seals vs. shelters. Which goes on your bay</h2>
          <p className="text-steel text-sm mb-8 max-w-3xl">
            The job of a dock seal or shelter is to close the gap between the building wall and the trailer body when a truck is backed in — keeping heat in, dust and rodents out, and product protected.
          </p>
          <Accordion items={sealTech} />
        </div>
      </section>

      {/* VEHICLE RESTRAINTS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-2">Vehicle restraints — the single highest-severity dock safety device</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Hook restraints · Wheel chocks · Integrated PLC systems</h2>
          <p className="text-steel text-sm mb-8 max-w-3xl">
            A trailer that pulls away from the dock while a forklift is mid-cycle is the highest-severity injury risk in the warehouse industry. The modern Richmond dock standard is a powered hook restraint with traffic signals.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {restraints.map((r) => (
              <ProductCard key={r.model} {...r} />
            ))}
          </div>

          {/* Safety callout */}
          <div className="mt-10 rounded-card bg-navy-dark text-white p-8">
            <h3 className="font-heading font-bold text-lg mb-3">The single most important safety device on a loading dock</h3>
            <p className="text-white/75 text-sm leading-relaxed max-w-3xl mb-4">
              &ldquo;Trailer creep&rdquo; — the slow forward walk of a trailer as forklifts repeatedly hit and brake on the dock plate — is the most common cause of dock falls. The OSHA and WCB-equivalent standard is to physically restrain the trailer with a mechanical or hydraulic restraint system.
            </p>
            <p className="text-white/75 text-sm leading-relaxed max-w-3xl">
              The wheel chock vs. restraint question: a wheel chock relies on the driver remembering to deploy it correctly every cycle. A hook restraint engages automatically when the trailer touches the dock and locks until released. The industry has shifted decisively to powered restraints — they&apos;re not optional on a modern Richmond dock that handles 30+ trailers a day.
            </p>
          </div>
        </div>
      </section>

      {/* DOCK BUMPERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-2">Dock bumpers — cheapest piece, prevents the most expensive damage</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">Standard 6&quot; · Heavy 10&quot; steel-faced · Polyethylene wash-down · Spring-mount industrial</h2>
          <p className="text-steel text-sm mb-8">
            A bumper costs $80–$220 installed. A dock-face concrete repair from a missing bumper costs $4,000–$12,000. Inspect monthly. Replace when compressed below 4&quot; projection or visibly cracked.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {bumpers.map((b) => (
              <ProductCard key={b.model} {...b} />
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            <div className="rounded-card bg-surface p-6">
              <h3 className="font-heading font-bold text-navy-dark mb-3">Size guide</h3>
              <ul className="space-y-2 text-sm text-steel">
                {["4\" projection (entry-level facilities, low-impact)", "6\" projection (most common Richmond commercial)", "10\" projection (heavy industrial, frequent impacts)", "Steel-faced laminated rubber bumpers for high-cycle docks", "Molded polyethylene bumpers for chemical and wash-down environments"].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="text-gold flex-shrink-0">·</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-card bg-surface p-6">
              <h3 className="font-heading font-bold text-navy-dark mb-3">Replace when you see</h3>
              <ul className="space-y-2 text-sm text-steel">
                {["Compressed to less than 4\" of original projection", "Visibly cracked, split, or showing internal layers", "Steel face plate is loose or torn", "Side-rolling rather than compressing cleanly under impact"].map(i => (
                  <li key={i} className="flex items-start gap-2"><span className="text-gold flex-shrink-0">·</span>{i}</li>
                ))}
              </ul>
              <p className="text-sm text-steel mt-4">
                A bumper costs $80–$180 per unit installed. A dock face concrete repair caused by a missing bumper costs $4,000–$12,000. The math is simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING ELSE */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-6">Everything else that lives on the dock</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-steel">
            {[
              "Dock lights & high-bay lighting — LED retrofit kits, traffic-control bar lights, dock-arm lights",
              "Communication systems — driver-to-dock-operator signal lights, intercoms, traffic control (red/amber/green)",
              "Strip curtains — clear PVC strip doors between dock and warehouse interior",
              "Edge guards & toe guards — pinch-point protection on leveler edges",
              "Door tracks, jamb seals, weatherstripping — peripheral hardware",
            ].map(i => (
              <li key={i} className="flex items-start gap-2 rounded-card bg-white border border-steel/10 p-4">
                <span className="text-gold flex-shrink-0 mt-0.5">✓</span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 21-POINT INSPECTION */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">What gets caught on a preventive visit</h2>
          <p className="text-white/70 text-sm mb-8 max-w-3xl">
            Every DoorChamp warehouse maintenance contract can include the full dock package — door plus leveler plus seal plus restraint plus bumpers — on the same scheduled visit. Our 21-point inspection covers all five systems:
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
                { freq: "Annual", desc: "once a year (light-cycle facilities)" },
                { freq: "Bi-annual", desc: "every 6 months (standard distribution)" },
                { freq: "Quarterly", desc: "every 3 months (24/7 high-cycle operations)" },
              ].map(t => (
                <div key={t.freq} className="rounded-card bg-white/10 px-4 py-3">
                  <span className="text-gold font-bold">{t.freq}</span>
                  <span className="text-white/60 ml-2">{t.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-xs mt-4">Pricing rolls into the warehouse maintenance program — see the Warehouse page for tier rates.</p>
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

      <ServiceAreaSection service="Loading Dock Service & Repair" />

      {/* FREE DOCK WALK CTA */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 text-center">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">Free dock walk. We&apos;ll inventory every piece of equipment.</h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Send us your facility address and a rough dock count. We&apos;ll do a free walk-through, inventory every leveler, seal, restraint, and bumper, document brands and condition, and return a written proposal — either for a maintenance contract or for any equipment that needs immediate attention. No on-site sales pitch.
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
