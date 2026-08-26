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
    <section ref={sectionRef} className="bg-surface overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">

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
                src="/images/doorchamp-team.jpg"
                alt="DoorChamp garage door service team in front of the shop and branded van"
                width={1448}
                height={1086}
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
