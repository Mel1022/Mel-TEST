import type { Metadata } from "next";
import Link from "next/link";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";

const service = getServiceBySlug("garage-door-opener-repair-installation")!;

export const metadata: Metadata = {
  title: "Garage Door Opener Repair & Installation",
  description:
    "Garage door opener not responding or straining? DoorChamp repairs and installs garage door openers, remotes, keypads, and safety sensors.",
  alternates: { canonical: "/garage-door-opener-repair-installation/" },
};

const OpenerHero = (
  <section style={{ position: "relative", overflow: "hidden" }} className="bg-navy-dark text-white">
    <img
      src="/images/opener-hero-bg.png"
      alt=""
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
    />
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(11,61,46,0.75)" }} />
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
    subtitle: "Chain-drive · ½ HP",
    detail: "Detached & uninsulated garages",
    price: "$1,287",
    features: ["Chain drive", "Wi-Fi add-on available", "Lifetime motor warranty"],
    featured: false,
  },
  {
    tag: "Most Popular",
    name: "LiftMaster 6580L",
    subtitle: "Belt-drive · DC",
    detail: "Bedroom-above garages — quiet, smart, secure",
    price: "From $1,424",
    features: ["Belt drive — ultra quiet", "Built-in Wi-Fi", "Battery backup", "HD camera"],
    featured: true,
  },
  {
    tag: "Premium · Ultra Quiet",
    name: "LiftMaster 98032",
    subtitle: "Wall-mount jackshaft",
    detail: "High-ceiling & storage-rack garages",
    price: "$1,914",
    features: ["Wall-mount — no ceiling unit", "Built-in Wi-Fi", "Battery backup", "Auto-deadbolt"],
    featured: false,
  },
];

const BRANDS = [
  "LiftMaster", "Chamberlain", "Genie", "Hörmann",
  "Clopay", "Amarr", "Wayne Dalton", "C.H.I.",
  "Raynor", "Garaga", "Haas", "Northwest Door",
  "Martin", "Steel-Craft",
];

const OpenerModelsSection = (
  <section className="relative bg-navy-dark overflow-hidden">
    <img src="/images/opener-hero-bg.png" alt="" aria-hidden="true" className="page-hero-bg-img" />
    <div aria-hidden="true" className="absolute inset-0 bg-navy-dark/88" />
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">

      {/* Heading */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-3">
          Pick the Right Opener. Installed.
        </h2>
        <p className="text-white/70 text-sm leading-relaxed">
          Three picks for most Richmond homes — all prices are all-in installed costs.
          No hidden labour fees, no disposal charges. We confirm the price before work begins.
        </p>
      </div>

      {/* Model cards */}
      <div className="grid sm:grid-cols-3 gap-6 items-stretch">
        {MODELS.map((model) => (
          <div
            key={model.name}
            className={`flex flex-col rounded-card p-7 relative ${
              model.featured
                ? "bg-navy-dark border border-navy-dark"
                : "bg-white border border-steel/10"
            }`}
          >
            {model.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy-dark text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </span>
            )}
            <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${model.featured ? "text-white/50" : "text-steel"}`}>
              {model.tag}
            </p>
            <h3 className={`font-heading font-extrabold text-xl mb-1 ${model.featured ? "text-white" : "text-navy-dark"}`}>
              {model.name}
            </h3>
            <p className={`text-sm font-semibold mb-1 ${model.featured ? "text-gold" : "text-gold-dark"}`}>
              {model.subtitle}
            </p>
            <p className={`text-xs mb-5 ${model.featured ? "text-white/50" : "text-steel/70"}`}>
              {model.detail}
            </p>
            <div className={`text-3xl font-heading font-extrabold mb-6 ${model.featured ? "text-white" : "text-navy-dark"}`}>
              {model.price} <span className={`text-xs font-normal ${model.featured ? "text-white/50" : "text-steel/70"}`}>installed</span>
            </div>
            <ul className="space-y-3 flex-1">
              {model.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <IconCheck className={`w-4 h-4 flex-shrink-0 mt-0.5 ${model.featured ? "text-gold" : "text-navy"}`} />
                  <span className={`text-sm leading-snug ${model.featured ? "text-white/80" : "text-steel"}`}>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.phone.href}
              className={`mt-6 inline-flex items-center justify-center gap-2 rounded-card px-5 py-3 text-sm font-bold transition-colors ${
                model.featured
                  ? "bg-gold text-navy-dark hover:bg-gold-dark hover:text-white"
                  : "border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white"
              }`}
            >
              <IconPhone className="w-4 h-4" />
              {siteConfig.phone.display}
            </a>
          </div>
        ))}
      </div>

      {/* What's included */}
      <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="font-heading font-bold text-lg text-white mb-5">What&apos;s Included — Every Install</h3>
          <ul className="space-y-3">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/80 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-bold text-lg text-white mb-5">Brands We Install &amp; Service</h3>
          <div className="flex flex-wrap gap-2">
            {BRANDS.map((brand) => (
              <span key={brand} className="text-xs font-semibold text-white/80 bg-white/10 border border-white/20 rounded-full px-3 py-1">
                {brand}
              </span>
            ))}
          </div>
          <p className="mt-5 text-xs text-white/50 leading-relaxed">
            Not sure which model fits your garage? Send us a photo of your existing opener and ceiling — we&apos;ll recommend the right unit.
          </p>
          <a
            href={siteConfig.phone.href}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-gold-dark transition-colors"
          >
            <IconPhone className="w-4 h-4" />
            {siteConfig.phone.display}
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-white/40 max-w-xl mx-auto">
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
