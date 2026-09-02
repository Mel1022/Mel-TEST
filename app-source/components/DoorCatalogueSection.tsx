"use client";

import { useState, useRef, useEffect } from "react";
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
    tag: "Real Wood · Carriage",
    name: "Builder Carriage Wood",
    description: "Authentic carriage-house design in real wood — the look you can't fake. Customizable hardware, window patterns, and stains. A true character piece.",
    r: "R-6.5",
    colors: "Stains: oak, walnut, rosewood",
    image: "/images/door-carriage-wood.webp",
  },
  {
    tag: "Full-View · Aluminum + Glass",
    name: "Classic Safe",
    description: "Full-view aluminum frame with anodized 1¾\" glazing. Floods the garage with natural light. A statement piece for modern garages and showroom spaces.",
    r: "R-3 (glass dependent)",
    colors: "Frosted, clear, tinted glass",
    image: "/images/door-classic-safe.webp",
  },
  {
    tag: "Best Value · 9 Colors",
    name: "Gemini Collection",
    description: "The ultimate bang for your buck. Boxed end-and-center stiles for structural rigidity. Available in 9 colors and your choice of 24 or 25 gauge steel.",
    r: "R-6.9 optional",
    colors: "9 standard colors",
    image: "/images/door-gemini.webp",
  },
  {
    tag: "Contemporary · Flush",
    name: "Modern Tech 3550",
    description: "Bold, contemporary flush design. 24-gauge steel face with a 2-inch EPS core. Available in Black Satin, Dark Bronze, Brushed Nickel, or Bright White.",
    r: "R-10.4",
    colors: "4 architectural finishes",
    image: "/images/door-modern-tech.webp",
  },
];

const CARD_WIDTH = 288;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;

export default function DoorCatalogueSection() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const total = DOORS.length;
  const maxIndex = total - visibleCount;

  useEffect(() => {
    function update() {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      setVisibleCount(Math.max(1, Math.floor((w + GAP) / STEP)));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  function goTo(index: number) {
    setCurrent(Math.max(0, Math.min(maxIndex, index)));
  }

  const offset = current * STEP;

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

        {/* Carousel viewport */}
        <div ref={containerRef} className="overflow-hidden">
          <div
            className="flex gap-4"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
              width: `${total * STEP - GAP}px`,
            }}
          >
            {DOORS.map((door, i) => {
              const isActive = i >= current && i < current + visibleCount;
              return (
                <div
                  key={door.name}
                  style={{
                    width: `${CARD_WIDTH}px`,
                    flexShrink: 0,
                    opacity: isActive ? 1 : 0.4,
                    transform: isActive ? "scale(1)" : "scale(0.96)",
                    transition: "opacity 0.45s ease, transform 0.45s ease",
                  }}
                  className="rounded-2xl bg-white border border-steel/10 overflow-hidden shadow-card"
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-steel/60">
                      {door.r} · {door.colors}
                    </p>
                    <Link
                      href="/request-a-quote/"
                      className="mt-4 inline-flex items-center text-sm font-bold text-navy-dark hover:text-gold-dark transition-colors"
                    >
                      Get a quote →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 mt-6">
          <div className="flex gap-2">
            <button
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              className="w-9 h-9 rounded-full border border-steel/30 flex items-center justify-center text-navy-dark hover:border-navy-dark disabled:opacity-30 transition-colors text-lg leading-none"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => goTo(current + 1)}
              disabled={current >= maxIndex}
              className="w-9 h-9 rounded-full border border-steel/30 flex items-center justify-center text-navy-dark hover:border-navy-dark disabled:opacity-30 transition-colors text-lg leading-none"
              aria-label="Next"
            >
              ›
            </button>
          </div>

          <div className="flex-1 h-0.5 bg-steel/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gold rounded-full"
              style={{
                width: `${((current + visibleCount) / total) * 100}%`,
                transition: "width 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>

          <span className="text-sm text-steel font-medium flex-shrink-0">
            {current + 1} / {total}
          </span>
        </div>

      </div>
    </section>
  );
}
