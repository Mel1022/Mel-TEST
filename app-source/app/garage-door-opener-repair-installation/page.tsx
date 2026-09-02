import type { Metadata } from "next";
import Link from "next/link";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck, IconDownload } from "@/components/Icons";

const service = getServiceBySlug("garage-door-opener-repair-installation")!;

export const metadata: Metadata = {
  title: "Garage Door Opener Repair & Installation",
  description:
    "Garage door opener not responding or straining? DoorChamp repairs and installs garage door openers, remotes, keypads, and safety sensors.",
  alternates: { canonical: "/garage-door-opener-repair-installation/" },
};

const OpenerHero = (
  <section style={{ position: "relative", overflow: "hidden", backgroundImage: "url('/images/opener-hero-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }} className="bg-navy-dark text-white">
    <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, background: "rgba(11,61,46,0.75)" }} />
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Same-Day Service · Richmond BC</p>
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
        Garage Door Opener Repair &amp; Installation
      </h1>
      <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
        An opener that hums, stalls, or won&apos;t respond to the remote usually points to a specific,
        findable cause. DoorChamp can diagnose and repair it — or install a new one.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href={siteConfig.phone.href}
          className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors"
        >
          <IconPhone className="w-4 h-4" />
          {siteConfig.phone.display}
        </a>
        <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
          Request Opener Service
        </Link>
      </div>
    </div>
  </section>
);

const INCLUDED = [
  "Old opener removed and disposed",
  "New opener, rails, and motor installed",
  "Two remotes + keypad + smart Wi-Fi setup",
  "Safety sensors aligned and tested",
  "Door balance checked — opener won't fight a bad spring",
  "Two-year labour warranty",
];

const MODELS = [
  {
    tag: "Best Value",
    name: "LiftMaster 2220L",
    subtitle: "Chain-drive · ½ HP · Detached & uninsulated garages",
    price: "$1,287",
    features: ["Chain drive", "Wi-Fi add-on available", "Lifetime motor warranty"],
    image: "/images/opener.png",
    brochure: "#",
  },
  {
    tag: "Most Popular",
    name: "LiftMaster 6580L",
    subtitle: "Belt-drive · DC · Bedroom-above garages — quiet, smart, secure",
    price: "From $1,424",
    features: ["Belt drive — ultra quiet", "Built-in Wi-Fi", "Battery backup", "HD camera"],
    image: "/images/opener.png",
    brochure: "#",
  },
  {
    tag: "Premium · Ultra Quiet",
    name: "LiftMaster 98032",
    subtitle: "Wall-mount jackshaft · High-ceiling & storage-rack garages",
    price: "$1,914",
    features: ["Wall-mount — no ceiling unit", "Built-in Wi-Fi", "Battery backup", "Auto-deadbolt"],
    image: "/images/opener.png",
    brochure: "#",
  },
];

const BRANDS = [
  "LiftMaster", "Chamberlain", "Genie", "Hörmann",
  "Clopay", "Amarr", "Wayne Dalton", "C.H.I.",
  "Raynor", "Garaga", "Haas", "Northwest Door",
  "Martin", "Steel-Craft",
];

const OpenerModelsSection = (
  <section className="bg-surface">
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">
          Pick the Right Opener. Installed.
        </h2>
        <p className="text-steel text-sm leading-relaxed">
          All prices are all-in installed costs — no hidden labour fees, no disposal charges.
          We confirm the price before work begins.
        </p>
      </div>

      {/* Model cards */}
      <div className="space-y-4">
        {MODELS.map((model) => (
          <div key={model.name} className="flex gap-5 rounded-card bg-white border border-steel/15 p-5 shadow-card">
            {/* Product image */}
            <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-surface flex items-center justify-center">
              <img src={model.image} alt={model.name} className="w-full h-full object-contain p-1" />
            </div>
            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-dark">{model.tag}</p>
              <h3 className="font-heading font-bold text-xl text-navy-dark mt-0.5">{model.name}</h3>
              <p className="text-sm text-steel mt-0.5">{model.subtitle}</p>
              <p className="font-bold text-navy-dark mt-2">
                {model.price} <span className="font-normal text-steel text-sm">installed</span>
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {model.features.map((f) => (
                  <span key={f} className="text-xs font-semibold text-steel bg-surface border border-steel/20 rounded-full px-3 py-1">
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 mt-4 text-sm">
                <a
                  href={model.brochure}
                  className="inline-flex items-center gap-1.5 text-steel hover:text-navy-dark transition-colors"
                >
                  <IconDownload className="w-3.5 h-3.5" />
                  Brochure (PDF)
                </a>
                <span className="text-steel/40 mx-1">·</span>
                <Link href="/request-a-quote/" className="font-semibold text-navy-dark hover:text-gold-dark transition-colors">
                  Get a quote →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* What's included */}
      <div className="mt-10 grid sm:grid-cols-2 gap-8 pt-10 border-t border-steel/10">
        <div>
          <h3 className="font-heading font-bold text-base text-navy-dark mb-4">What&apos;s Included — Every Install</h3>
          <ul className="space-y-2.5">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <IconCheck className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" />
                <span className="text-sm text-steel leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-bold text-base text-navy-dark mb-4">Brands We Install &amp; Service</h3>
          <div className="flex flex-wrap gap-1.5">
            {BRANDS.map((brand) => (
              <span key={brand} className="text-xs font-semibold text-steel bg-surface border border-steel/20 rounded-full px-3 py-1">
                {brand}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-steel/70 leading-relaxed">
            Not sure which model fits your garage? Send us a photo — we&apos;ll recommend the right unit.
          </p>
          <a
            href={siteConfig.phone.href}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-navy-dark hover:text-gold-dark transition-colors"
          >
            <IconPhone className="w-4 h-4" />
            {siteConfig.phone.display}
          </a>
        </div>
      </div>

      <p className="mt-8 text-xs text-steel/50 leading-relaxed">
        Prices shown are for standard residential installations. Custom sizing, structural work, or additional accessories may affect the final price — confirmed in writing before work begins.
      </p>
    </div>
  </section>
);

export default function Page() {
  return (
    <ServiceDetailPage
      service={service}
      heroSection={OpenerHero}
      pricingSection={OpenerModelsSection}
    />
  );
}
