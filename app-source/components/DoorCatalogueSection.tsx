"use client";

import { useRef, useState } from "react";
import Link from "next/link";

const DOORS = [
  {
    tag: "Recessed Panel · Classic",
    name: "Tucana Collection",
    description: "Timeless recessed-panel design with two layers of steel and a pinch-resistant joint. Classic curb appeal that fits almost any home.",
    r: "R-6.9",
    colors: "9 standard colors",
    image: "/images/door-tucana.webp",
  },
  {
    tag: "Insulated · Best Value",
    name: "Orion Collection",
    description: "Affordable insulated workhorse. 3-layer sandwich construction with polystyrene core. The smart choice when you want quality without overspending.",
    r: "R-7.4",
    colors: "White + 8 colors",
    image: "/images/door-orion.webp",
  },
  {
    tag: "Carriage House · Steel",
    name: "Phoenix 5200",
    description: "Carriage-house styling with the durability of steel. Decorative hardware, optional arched windows, and a classical look that elevates curb appeal.",
    r: "R-6.9",
    colors: "Galaxy paint match",
    image: "/images/door-phoenix.webp",
  },
  {
    tag: "Premium · Maximum Insulation",
    name: "Taurus 4250",
    description: "Top-tier insulation with 100% CFC-free polyurethane core — outstanding R-16.1 rating. Commercial-grade hardware. The quietest, warmest residential door we sell.",
    r: "R-16.1",
    colors: "9 colors + custom paint",
    image: "/images/door-taurus.webp",
  },
  {
    tag: "Practical · Wood-Look",
    name: "Pegasus Collection",
    description: "Clean, practical design in 25-gauge hot-dipped galvanized steel with a baked-on polyester finish. Optional wood-grain texture for a warmer look.",
    r: "R-6.5",
    colors: "6 standard colors",
    image: "/images/door-pegasus.webp",
  },
  {
    tag: "Wood-Raised · HDPE",
    name: "Sirius Collection",
    description: "High-density polyethylene raised paneling that mimics real wood — but won't rot, warp, or repaint every five years. Vinyl weather seals included.",
    r: "R-9.0",
    colors: "4 wood-grain finishes",
    image: "/images/door-sirius.webp",
  },
  {
    tag: "Carriage House · Wood Overlay",
    name: "Carriage Wood",
    description: "Authentic carriage-house styling with a real wood overlay. Warm, traditional character with the strength of a steel-backed door.",
    r: "",
    colors: "Natural wood finishes",
    image: "/images/door-carriage-wood.webp",
  },
  {
    tag: "Classic · Safe-T-Steel",
    name: "Classic Safe",
    description: "Classic raised-panel design with pinch-resistant Safe-T-Steel construction. Durable, family-friendly, and available in a wide range of colours.",
    r: "",
    colors: "Standard colours",
    image: "/images/door-classic-safe.webp",
  },
  {
    tag: "Versatile · Modern",
    name: "Gemini",
    description: "A versatile design that bridges traditional and contemporary. Clean lines with subtle detailing for a timeless, adaptable look.",
    r: "",
    colors: "Multiple finishes",
    image: "/images/door-gemini.webp",
  },
  {
    tag: "Contemporary · Flush",
    name: "Modern Tech",
    description: "Sleek flush-panel design for contemporary homes. Minimal profile with maximum insulation and a sharp, architectural finish.",
    r: "",
    colors: "8 modern finishes",
    image: "/images/door-modern-tech.webp",
  },
];

export default function DoorCatalogueSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = DOORS.length;

  function scrollToIndex(index: number) {
    if (!scrollRef.current) return;
    const card = scrollRef.current.children[index] as HTMLElement;
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
    setCurrent(index);
  }

  function handleScroll() {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth + 16;
    const index = Math.round(container.scrollLeft / cardWidth);
    setCurrent(Math.min(index, total - 1));
  }

  return (
    <section className="bg-surface py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <p className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">Browse the Catalogue</p>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-3">
          Find the door for your home.
        </h2>
        <p className="text-steel text-sm leading-relaxed mb-8 max-w-2xl">
          Scroll through ten curated styles — from carriage-house to ultra-modern flush.
          Every door we install is hand-measured and matched to your home.
        </p>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {DOORS.map((door) => (
            <div
              key={door.name}
              className="flex-shrink-0 w-64 sm:w-72 snap-start rounded-2xl bg-white border border-steel/10 overflow-hidden shadow-card"
            >
              <div className="bg-[#eaecf2] h-52 flex items-center justify-center p-4">
                <img
                  src={door.image}
                  alt={door.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-1">{door.tag}</p>
                <h3 className="font-heading font-bold text-lg text-navy-dark leading-tight mb-2">{door.name}</h3>
                <p className="text-sm text-steel leading-snug mb-4">{door.description}</p>
                {door.r && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-steel/60">
                    {door.r} · {door.colors}
                  </p>
                )}
                <Link
                  href="/request-a-quote/"
                  className="mt-4 inline-flex items-center text-sm font-bold text-navy-dark hover:text-gold-dark transition-colors"
                >
                  Get a quote →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 mt-6">
          <div className="flex gap-2">
            <button
              onClick={() => scrollToIndex(Math.max(0, current - 1))}
              disabled={current === 0}
              className="w-9 h-9 rounded-full border border-steel/30 flex items-center justify-center text-navy-dark hover:border-navy-dark disabled:opacity-30 transition-colors text-lg leading-none"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => scrollToIndex(Math.min(total - 1, current + 1))}
              disabled={current === total - 1}
              className="w-9 h-9 rounded-full border border-steel/30 flex items-center justify-center text-navy-dark hover:border-navy-dark disabled:opacity-30 transition-colors text-lg leading-none"
              aria-label="Next"
            >
              ›
            </button>
          </div>

          <div className="flex-1 h-0.5 bg-steel/20 rounded-full">
            <div
              className="h-full bg-gold rounded-full transition-all duration-300"
              style={{ width: `${((current + 1) / total) * 100}%` }}
            />
          </div>

          <span className="text-sm text-steel font-medium flex-shrink-0">{current + 1} / {total}</span>
        </div>

      </div>
    </section>
  );
}
