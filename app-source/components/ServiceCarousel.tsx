"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import {
  IconWrench,
  IconSpring,
  IconOpener,
  IconInstall,
  IconMaintenance,
} from "@/components/Icons";

const SERVICES = [
  {
    icon: <IconWrench className="w-7 h-7" />,
    title: "Garage Door Repair",
    body: "Same-day repair for broken panels, cables, rollers, tracks, and more. We fix it fast, we fix it right.",
    href: "/garage-door-repair/",
  },
  {
    icon: <IconSpring className="w-7 h-7" />,
    title: "Spring Repair & Replacement",
    body: "Torsion and extension spring service done safely by a licensed technician. Never attempt springs DIY.",
    href: "/garage-door-spring-repair/",
  },
  {
    icon: <IconOpener className="w-7 h-7" />,
    title: "Opener Service & Install",
    body: "LiftMaster, Chamberlain, Genie, and all major brands. Repair, reprogram, or upgrade your opener.",
    href: "/garage-door-openers/",
  },
  {
    icon: <IconInstall className="w-7 h-7" />,
    title: "New Door Installation",
    body: "Steel, aluminum, wood composite — we supply and install quality doors with full warranty.",
    href: "/garage-door-installation/",
  },
  {
    icon: <IconMaintenance className="w-7 h-7" />,
    title: "Maintenance & Tune-Up",
    body: "Annual servicing extends door life by years. We lubricate, adjust, balance, and inspect every component.",
    href: "/garage-door-maintenance/",
  },
  {
    icon: <IconWrench className="w-7 h-7" />,
    title: "Commercial & Strata",
    body: "Industrial doors, loading docks, sliding gates, and full strata management programs.",
    href: "/commercial/",
  },
];

// Duplicate cards for seamless infinite loop
const DOUBLED = [...SERVICES, ...SERVICES];

export default function ServiceCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const scrollXRef = useRef(0);
  const lastTsRef = useRef(0);
  const singleWidthRef = useRef(0);
  const touchStartXRef = useRef(0);
  const rafRef = useRef(0);

  // Recalculate the width of one full set (6 cards)
  function recalc() {
    const track = trackRef.current;
    if (!track) return;
    let w = 0;
    for (let i = 0; i < SERVICES.length; i++) {
      w += (track.children[i] as HTMLElement).offsetWidth;
    }
    singleWidthRef.current = w;
  }

  function applyTransform(px: number) {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-px}px)`;
    }
  }

  function manualScroll(dir: 1 | -1) {
    recalc();
    const track = trackRef.current;
    if (!track || !track.children[0]) return;
    const cw = (track.children[0] as HTMLElement).offsetWidth;
    const sw = singleWidthRef.current;
    let next = scrollXRef.current + dir * cw;
    // Wrap within [0, singleWidth)
    next = ((next % sw) + sw) % sw;
    scrollXRef.current = next;
    track.style.transition = "transform 0.5s cubic-bezier(0.4,0,0.2,1)";
    applyTransform(next);
    setTimeout(() => {
      if (track) track.style.transition = "";
    }, 500);
  }

  useEffect(() => {
    recalc();

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // ~55 px/s → 30s for a 1650px single-set width
    const SPEED = 55;

    function tick(ts: number) {
      if (!pausedRef.current) {
        const dt = lastTsRef.current ? (ts - lastTsRef.current) / 1000 : 0;
        lastTsRef.current = ts;

        scrollXRef.current += SPEED * dt;
        const sw = singleWidthRef.current;
        if (sw > 0 && scrollXRef.current >= sw) {
          scrollXRef.current -= sw;
        }
        applyTransform(scrollXRef.current);
      } else {
        lastTsRef.current = 0;
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    const ro = new ResizeObserver(recalc);
    if (trackRef.current) ro.observe(trackRef.current);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      {/* Arrow controls */}
      <div className="flex justify-end gap-2 mb-5 px-1">
        <button
          onClick={() => manualScroll(-1)}
          aria-label="Previous services"
          className="w-9 h-9 rounded-full border-2 border-navy text-navy flex items-center justify-center text-sm font-bold hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy transition-colors"
        >
          ←
        </button>
        <button
          onClick={() => manualScroll(1)}
          aria-label="Next services"
          className="w-9 h-9 rounded-full border-2 border-navy text-navy flex items-center justify-center text-sm font-bold hover:bg-navy hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy transition-colors"
        >
          →
        </button>
      </div>

      {/* Overflow mask */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
        onTouchStart={(e) => {
          touchStartXRef.current = e.touches[0].clientX;
          pausedRef.current = true;
        }}
        onTouchEnd={(e) => {
          const delta = touchStartXRef.current - e.changedTouches[0].clientX;
          if (Math.abs(delta) > 40) manualScroll(delta > 0 ? 1 : -1);
          pausedRef.current = false;
        }}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ transform: "translateX(0)" }}
        >
          {DOUBLED.map((s, i) => (
            <div
              key={i}
              className="carousel-item"
              aria-hidden={i >= SERVICES.length ? true : undefined}
            >
              <Link
                href={s.href}
                tabIndex={i >= SERVICES.length ? -1 : undefined}
                className="group flex flex-col h-full rounded-card border border-steel/15 bg-white p-6 shadow-card hover:shadow-cardHover hover:border-navy/30 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white transition-colors flex-shrink-0">
                  {s.icon}
                </span>
                <h3 className="mt-4 font-heading font-bold text-lg text-navy-dark">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-steel leading-relaxed flex-1">
                  {s.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-navy-dark transition-colors">
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
