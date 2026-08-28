"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

/* ── Section icons (inline SVGs) ── */

function IconMapPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2a6 6 0 0 1 6 6c0 4-6 12-6 12S5 12 5 8a6 6 0 0 1 6-6Z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="11" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 2L4 5v6c0 4.4 3 8.3 7 9.3 4-1 7-4.9 7-9.3V5L11 2Z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M12 2L4 13h7l-1 7 9-11h-7l1-7Z" stroke="currentColor" strokeWidth="1.6"
        strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7l-4 4V4Z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 8h8M7 11h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 2v2M11 18v2M4.2 4.2l1.4 1.4M16.4 16.4l1.4 1.4M2 11h2M18 11h2M4.2 17.8l1.4-1.4M16.4 5.6l1.4-1.4"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconBadge() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="10" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 10l2 2 3-3" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 15l-1.5 4.5L11 18l5.5 1.5L15 15" stroke="currentColor"
        strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Benefit data ── */

const PRIMARY = [
  {
    icon: <IconMapPin />,
    title: "LOCAL & EXPERIENCED",
    body: "Local garage-door professionals serving Richmond and the surrounding Metro Vancouver area.",
  },
  {
    icon: <IconShieldCheck />,
    title: "PROTECTED & INSURED",
    body: "Professional service backed by the appropriate insurance, credentials, and safety standards.",
  },
  {
    icon: <IconBolt />,
    title: "READY WHEN YOU NEED US",
    body: "Fast, responsive garage-door service when you need help getting your door back in working order.",
  },
];

const SECONDARY = [
  {
    icon: <IconChat />,
    title: "HONEST RECOMMENDATIONS",
    body: "We explain what's wrong and help you understand the right solution for your garage door.",
  },
  {
    icon: <IconGear />,
    title: "QUALITY PARTS",
    body: "We use quality components suited to your garage door and opener.",
  },
  {
    icon: <IconBadge />,
    title: "BACKED BY OUR WORK",
    body: "Professional workmanship with applicable warranty coverage where provided.",
  },
];

/* ── Decorative garage-part silhouettes ── */

const S = "#146B4D";
const DOOR_PANEL = <><rect x="4" y="6" width="40" height="36" rx="2" stroke={S} strokeWidth="2"/><line x1="4" y1="18" x2="44" y2="18" stroke={S} strokeWidth="1.5"/><line x1="4" y1="30" x2="44" y2="30" stroke={S} strokeWidth="1.5"/><line x1="24" y1="6" x2="24" y2="42" stroke={S} strokeWidth="1.5"/></>;
const SPRING     = <><path d="M12 8h24M10 14h28M12 20h24M10 26h28M12 32h24M10 38h28" stroke={S} strokeWidth="2" strokeLinecap="round"/><rect x="8" y="6" width="32" height="36" rx="2" stroke={S} strokeWidth="1.5" fill="none"/></>;
const REMOTE     = <><rect x="14" y="4" width="20" height="40" rx="5" stroke={S} strokeWidth="2"/><rect x="18" y="10" width="12" height="7" rx="1.5" stroke={S} strokeWidth="1.5"/><circle cx="22" cy="24" r="2.5" stroke={S} strokeWidth="1.5"/><circle cx="30" cy="24" r="2.5" stroke={S} strokeWidth="1.5"/><circle cx="22" cy="32" r="2.5" stroke={S} strokeWidth="1.5"/><circle cx="30" cy="32" r="2.5" stroke={S} strokeWidth="1.5"/></>;
const TRACK      = <><line x1="6" y1="36" x2="42" y2="36" stroke={S} strokeWidth="2.5" strokeLinecap="round"/><line x1="6" y1="36" x2="6" y2="10" stroke={S} strokeWidth="2.5" strokeLinecap="round"/><path d="M6 10 Q6 6 10 6" stroke={S} strokeWidth="2" fill="none" strokeLinecap="round"/><circle cx="12" cy="30" r="3" stroke={S} strokeWidth="1.5"/><circle cx="20" cy="30" r="3" stroke={S} strokeWidth="1.5"/></>;
const ROLLER     = <><circle cx="24" cy="24" r="16" stroke={S} strokeWidth="2"/><circle cx="24" cy="24" r="5" stroke={S} strokeWidth="2"/><line x1="24" y1="8" x2="24" y2="19" stroke={S} strokeWidth="1.5"/><line x1="24" y1="29" x2="24" y2="40" stroke={S} strokeWidth="1.5"/><line x1="8" y1="24" x2="19" y2="24" stroke={S} strokeWidth="1.5"/><line x1="29" y1="24" x2="40" y2="24" stroke={S} strokeWidth="1.5"/><line x1="13" y1="13" x2="20" y2="20" stroke={S} strokeWidth="1.5"/><line x1="28" y1="28" x2="35" y2="35" stroke={S} strokeWidth="1.5"/></>;
const HINGE      = <><rect x="6" y="4" width="14" height="40" rx="2" stroke={S} strokeWidth="2"/><rect x="20" y="4" width="22" height="18" rx="2" stroke={S} strokeWidth="2"/><circle cx="13" cy="14" r="3" stroke={S} strokeWidth="1.5"/><circle cx="13" cy="34" r="3" stroke={S} strokeWidth="1.5"/><circle cx="31" cy="13" r="2.5" stroke={S} strokeWidth="1.5"/></>;
const SENSOR     = <><rect x="10" y="14" width="28" height="20" rx="3" stroke={S} strokeWidth="2"/><circle cx="22" cy="24" r="5" stroke={S} strokeWidth="2"/><circle cx="22" cy="24" r="2" stroke={S} strokeWidth="1.5"/><line x1="24" y1="44" x2="38" y2="44" stroke={S} strokeWidth="2" strokeLinecap="round"/><line x1="38" y1="34" x2="38" y2="44" stroke={S} strokeWidth="2" strokeLinecap="round"/></>;
const CABLE      = <><path d="M8 24 Q8 8 24 8 Q40 8 40 24 Q40 36 30 40" stroke={S} strokeWidth="2" fill="none" strokeLinecap="round"/><circle cx="30" cy="41" r="3" stroke={S} strokeWidth="1.5"/><line x1="30" y1="44" x2="30" y2="48" stroke={S} strokeWidth="2" strokeLinecap="round"/></>;
const BRACKET    = <><path d="M8 4 L8 40 L44 40" stroke={S} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="8" cy="12" r="2.5" stroke={S} strokeWidth="1.5"/><circle cx="8" cy="24" r="2.5" stroke={S} strokeWidth="1.5"/><circle cx="20" cy="40" r="2.5" stroke={S} strokeWidth="1.5"/><circle cx="34" cy="40" r="2.5" stroke={S} strokeWidth="1.5"/></>;
const STRUT      = <><rect x="2" y="20" width="44" height="8" rx="1.5" stroke={S} strokeWidth="2"/><line x1="10" y1="20" x2="6" y2="28" stroke={S} strokeWidth="1.5"/><line x1="20" y1="20" x2="16" y2="28" stroke={S} strokeWidth="1.5"/><line x1="30" y1="20" x2="26" y2="28" stroke={S} strokeWidth="1.5"/><line x1="40" y1="20" x2="36" y2="28" stroke={S} strokeWidth="1.5"/></>;
const DRUM       = <><circle cx="24" cy="24" r="14" stroke={S} strokeWidth="2"/><circle cx="24" cy="24" r="5" stroke={S} strokeWidth="2"/><path d="M24 10 Q34 10 36 20" stroke={S} strokeWidth="1.5" fill="none" strokeLinecap="round"/></>;

const DECO_PARTS = [
  { path: DOOR_PANEL, size: 100, x: "1%",  y: "5%",  r: -6,  op: 0.06  },
  { path: SPRING,     size: 68,  x: "16%", y: "68%", r: 12,  op: 0.065 },
  { path: REMOTE,     size: 56,  x: "36%", y: "4%",  r: 10,  op: 0.06  },
  { path: TRACK,      size: 82,  x: "52%", y: "74%", r: -4,  op: 0.055 },
  { path: DRUM,       size: 74,  x: "70%", y: "2%",  r: 18,  op: 0.065 },
  { path: ROLLER,     size: 70,  x: "86%", y: "50%", r: -10, op: 0.06  },
  { path: HINGE,      size: 54,  x: "78%", y: "14%", r: -18, op: 0.055 },
  { path: DOOR_PANEL, size: 66,  x: "4%",  y: "50%", r: 9,   op: 0.05  },
  { path: SENSOR,     size: 52,  x: "44%", y: "56%", r: -9,  op: 0.055 },
  { path: CABLE,      size: 60,  x: "26%", y: "26%", r: 30,  op: 0.06  },
  { path: BRACKET,    size: 62,  x: "62%", y: "34%", r: 7,   op: 0.055 },
  { path: STRUT,      size: 74,  x: "30%", y: "86%", r: -3,  op: 0.05  },
  { path: ROLLER,     size: 46,  x: "7%",  y: "30%", r: 16,  op: 0.045 },
  { path: SPRING,     size: 48,  x: "56%", y: "12%", r: -22, op: 0.05  },
  { path: HINGE,      size: 42,  x: "74%", y: "66%", r: 11,  op: 0.045 },
  { path: CABLE,      size: 50,  x: "20%", y: "44%", r: -28, op: 0.045 },
  { path: DRUM,       size: 58,  x: "48%", y: "36%", r: 14,  op: 0.04  },
  { path: BRACKET,    size: 44,  x: "82%", y: "32%", r: -16, op: 0.045 },
  { path: STRUT,      size: 58,  x: "1%",  y: "76%", r: 4,   op: 0.045 },
  { path: SENSOR,     size: 48,  x: "40%", y: "80%", r: 20,  op: 0.05  },
];

/* ── Component ── */

export default function WhyCallTheChamp() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) { setRevealed(true); return; }
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const rd = reduced.current;

  function rev(delay: number): React.CSSProperties {
    if (revealed) return { opacity: 1, transform: "translateY(0)", transitionDelay: rd ? "0ms" : `${delay}ms` };
    return { opacity: 0, transform: "translateY(18px)" };
  }

  function revRight(delay: number): React.CSSProperties {
    if (revealed) return { opacity: 1, transform: "translateX(0)", transitionDelay: rd ? "0ms" : `${delay}ms` };
    return { opacity: 0, transform: "translateX(22px)" };
  }

  return (
    <section ref={sectionRef} className="relative bg-surface overflow-hidden">
      {/* ── Decorative garage-part silhouettes ── */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {DECO_PARTS.map((d, idx) => (
          <svg key={idx} width={d.size} height={d.size} viewBox="0 0 48 48" fill="none"
            style={{ position: "absolute", left: d.x, top: d.y, opacity: d.op, transform: `rotate(${d.r}deg)` }}>
            {d.path}
          </svg>
        ))}
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">

        {/* ── Top heading (full-width) ── */}
        <div className="text-center max-w-2xl mx-auto mb-12 wtc-reveal" style={rev(0)}>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-navy mb-3">
            Richmond&apos;s Garage Door Team
          </p>
          <h2
            className="font-heading font-extrabold leading-tight text-navy-dark"
            style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
          >
            Why Call the Champ?
          </h2>
          <div className="flex justify-center mt-3 mb-4">
            <span
              className="block h-[3px] rounded-full bg-navy wtc-accent-line"
              style={revealed
                ? { width: 56, transitionDelay: rd ? "0ms" : "180ms" }
                : { width: 0 }}
            />
          </div>
          <p className="text-steel text-base leading-relaxed">
            Because when your garage door matters, who you call matters.
          </p>
        </div>

        {/* ── Two-column body ── */}
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">

          {/* LEFT: trust content (~60%) */}
          <div className="w-full lg:w-3/5 flex flex-col gap-4">

            {/* Primary cards — 3-col compact grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {PRIMARY.map((item, i) => (
                <div
                  key={item.title}
                  className="wtc-card-primary wtc-reveal rounded-card bg-white border border-steel/10 p-5 shadow-card"
                  style={rev(250 + i * 100)}
                >
                  <span className="wtc-icon-lg inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy/8 text-navy mb-4">
                    {item.icon}
                  </span>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-navy mb-2 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs text-steel leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Secondary cards — 3-col compact grid */}
            <div className="grid sm:grid-cols-3 gap-3">
              {SECONDARY.map((item, i) => (
                <div
                  key={item.title}
                  className="wtc-card-secondary wtc-reveal rounded-card bg-white/70 border border-navy/8 p-4"
                  style={rev(550 + i * 80)}
                >
                  <span className="wtc-icon-sm inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy/8 text-navy mb-3">
                    {item.icon}
                  </span>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-navy mb-1.5 leading-snug">
                    {item.title}
                  </p>
                  <p className="text-xs text-steel leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: team photo (~40%) */}
          <div
            className="w-full lg:w-2/5 wtc-reveal-right"
            style={
              revealed
                ? { opacity: 1, transform: "translateX(0)", transitionDelay: rd ? "0ms" : "150ms" }
                : { opacity: 0, transform: "translateX(22px)" }
            }
          >
            <div className="wtc-photo-wrap relative rounded-[20px] overflow-hidden shadow-cardHover">
              <Image
                src="/images/wtc-photo.jpg"
                alt="DoorChamp garage door service team in front of the shop and branded van"
                width={1983}
                height={793}
                className="wtc-photo block w-full h-auto object-cover"
                priority={false}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 wtc-photo-caption">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-white/90">
                  The People Behind the Champ
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
