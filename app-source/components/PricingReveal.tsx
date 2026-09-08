"use client";

import { useState } from "react";

const categories = [
  {
    label: "Spring Repair",
    color: "#2E8B62",
    items: [
      { service: "Single spring replacement", price: "$714", note: "Oil-tempered · same day" },
      { service: "Double spring replacement", price: "$827", note: "Oil-tempered · same day · recommended" },
    ],
  },
  {
    label: "Strata & Commercial Maintenance",
    color: "#146B4D",
    items: [
      { service: "Annual program", price: "$345/door/visit", note: "1 visit/year · 21-pt inspection · same-day priority" },
      { service: "Bi-annual program", price: "$310/door/visit", note: "2 visits/year · 15% off parts" },
      { service: "Quarterly enterprise", price: "$290/door/visit", note: "4 visits/yr · 30-min SLA · 24/7 emergency" },
      { service: "Emergency callout (non-contract)", price: "from $585 + parts", note: "12–20 min response from Richmond yard" },
    ],
  },
  {
    label: "Loading Docks",
    color: "#B45309",
    items: [
      { service: "Full dock walk & audit", price: "Free", note: "Richmond locations · written proposal in 48 hrs" },
      { service: "Bumper replacement", price: "$80–$180", note: "Installed per unit" },
      { service: "Dock leveler repair", price: "from $385 + parts", note: "First 90 min on-site · most repairs first-visit" },
      { service: "Edge-of-dock leveler (new)", price: "$2,400–$4,800", note: "Installed · no pit needed" },
      { service: "Dock seal re-skin / replace", price: "$650–$3,800", note: "Per bay" },
      { service: "Vehicle restraint install", price: "$5,800–$8,400", note: "Installed with traffic-signal interlock" },
      { service: "New hydraulic pit leveler", price: "$9,500–$15,500", note: "Installed · 35,000 lb cap · existing pit" },
    ],
  },
  {
    label: "Sliding Gates",
    color: "#1D4ED8",
    items: [
      { service: "Gate stuck / won't move (callout)", price: "$285 + parts", note: "Most repairs first-visit" },
      { service: "UL 325 + ASTM F2200 audit", price: "$289 flat", note: "Per gate · credited 100% against any retrofit" },
      { service: "Annual maintenance contract", price: "from $389/gate/year", note: "Lubrication · limit re-cal · sensor test" },
      { service: "Full UL 325-2018 retrofit", price: "$1,200–$2,800", note: "Per gate installed" },
      { service: "New commercial gate operator", price: "$3,800–$7,400", note: "Installed · UL 325-2018 compliant" },
    ],
  },
  {
    label: "Man Doors",
    color: "#7C3AED",
    items: [
      { service: "Single-door repair (callout)", price: "$189 + parts", note: "Closer · hinge · latch · seal · panic device" },
      { service: "Whole-building inspection", price: "$489 flat", note: "Up to 10 doors · written report + code-violation log" },
      { service: "Annual contract (3–9 doors)", price: "from $79/door/year", note: "21-pt inspection · 10% off parts" },
      { service: "Bi-annual contract (10–20 doors)", price: "from $69/door/visit", note: "2 visits/year · 15% off parts" },
      { service: "Enterprise contract (21+ doors)", price: "from $59/door/visit", note: "Quarterly · asset register · 25% off parts" },
      { service: "New 36\"×80\" non-rated mandoor", price: "from $1,489", note: "Installed · frame · closer · seal · lever lock" },
      { service: "New 90-min fire-rated mandoor", price: "from $2,189", note: "Installed · fire frame · panic device · label inspection" },
    ],
  },
];

export default function PricingReveal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-up pricing sheet */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out"
        style={{ transform: open ? "translateY(0)" : "translateY(100%)" }}
      >
        <div className="bg-[#0B1F17] text-white rounded-t-2xl shadow-2xl max-h-[80vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 flex-shrink-0">
            <div>
              <p className="font-heading font-bold text-lg text-white leading-none">Pricing at a Glance</p>
              <p className="text-white/50 text-xs mt-0.5">Richmond, BC · All prices include labour</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white text-sm font-bold"
              aria-label="Close pricing"
            >
              ✕
            </button>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1 px-5 py-5 space-y-6">
            {categories.map((cat) => (
              <div key={cat.label}>
                <p
                  className="text-[10px] font-bold uppercase tracking-widest mb-3"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </p>
                <div className="space-y-2">
                  {cat.items.map((item) => (
                    <div
                      key={item.service}
                      className="flex items-start justify-between gap-4 py-2 border-b border-white/5"
                    >
                      <div className="min-w-0">
                        <p className="text-white text-sm font-medium leading-snug">{item.service}</p>
                        <p className="text-white/40 text-xs mt-0.5">{item.note}</p>
                      </div>
                      <p className="text-white font-bold text-sm whitespace-nowrap flex-shrink-0" style={{ color: cat.color }}>
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-white/30 text-xs pb-2">
              Prices are estimates. Every project gets a written firm quote before any work begins. 2-year labour warranty. WCB + $5M insured.
            </p>
          </div>
        </div>
      </div>

      {/* Trigger button — fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none" style={{ transform: open ? "translateY(100%)" : "translateY(0)", transition: "transform 0.3s ease-out" }}>
        <div className="flex justify-center pb-4 pointer-events-auto">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 bg-[#0B1F17] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg hover:bg-[#146B4D] transition-colors border border-white/10"
          >
            <span className="text-[#2E8B62]">$</span> Pricing
          </button>
        </div>
      </div>
    </>
  );
}
