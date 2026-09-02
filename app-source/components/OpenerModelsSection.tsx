"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck, IconDownload, IconChevron } from "@/components/Icons";

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
    tag: "Entry Belt-Drive",
    name: "LiftMaster 8165W",
    subtitle: "Belt-drive · ½ HP · Wi-Fi · Quiet attached garages",
    price: "$1,349",
    features: ["Belt drive — quiet", "Built-in Wi-Fi", "myQ compatible"],
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
    tag: "Best for Power Outages",
    name: "LiftMaster 85503",
    subtitle: "Belt-drive · DC · Battery backup built-in",
    price: "$1,549",
    features: ["Belt drive", "Battery backup", "Built-in Wi-Fi", "myQ compatible"],
    image: "/images/opener.png",
    brochure: "#",
  },
  {
    tag: "Camera + Backup",
    name: "LiftMaster 8587W",
    subtitle: "Belt-drive · DC · HD camera · battery backup",
    price: "$1,674",
    features: ["Belt drive", "HD built-in camera", "Battery backup", "Built-in Wi-Fi"],
    image: "/images/opener.png",
    brochure: "#",
  },
  {
    tag: "Wall Mount · Smart",
    name: "LiftMaster 8500W",
    subtitle: "Jackshaft · DC · Frees ceiling space · Wi-Fi + battery backup",
    price: "$1,789",
    features: ["Wall-mount — no ceiling rail", "Built-in Wi-Fi", "Battery backup", "myQ compatible"],
    image: "/images/opener.png",
    brochure: "#",
  },
  {
    tag: "Premium · Ultra Quiet",
    name: "LiftMaster 98032",
    subtitle: "Jackshaft · DC · High-ceiling & storage-rack garages",
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

const VISIBLE_COUNT = 3;
const HIDDEN_COUNT = MODELS.length - VISIBLE_COUNT;

function ModelCard({ model }: { model: typeof MODELS[0] }) {
  return (
    <div className="flex gap-5 rounded-card bg-white border border-steel/15 p-5 shadow-card">
      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-surface flex items-center justify-center">
        <img src={model.image} alt={model.name} className="w-full h-full object-contain p-1" />
      </div>
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
          <a href={model.brochure} className="inline-flex items-center gap-1.5 text-steel hover:text-navy-dark transition-colors">
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
  );
}

export default function OpenerModelsSection() {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? MODELS : MODELS.slice(0, VISIBLE_COUNT);

  return (
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
          {visible.map((model) => (
            <ModelCard key={model.name} model={model} />
          ))}
        </div>

        {/* Expand toggle */}
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-card border border-dashed border-gold px-5 py-4 bg-white text-sm font-bold text-navy-dark hover:border-gold-dark hover:text-gold-dark transition-colors"
          >
            Show {HIDDEN_COUNT} more LiftMaster openers
            <IconChevron className="w-4 h-4" />
          </button>
        )}

        {/* Helper text */}
        <p className="mt-6 text-sm text-steel leading-relaxed">
          Not sure which fits your garage?{" "}
          <a href={siteConfig.phone.href} className="text-navy-dark underline hover:text-gold-dark transition-colors">
            Send us
          </a>{" "}
          a photo of your existing opener and ceiling — we&apos;ll recommend the right model.{" "}
          <Link href="/request-a-quote/" className="font-semibold text-navy-dark hover:text-gold-dark transition-colors">
            Get a quote →
          </Link>
        </p>

        {/* What's included + Brands */}
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
            <a
              href={siteConfig.phone.href}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy-dark hover:text-gold-dark transition-colors"
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
}
