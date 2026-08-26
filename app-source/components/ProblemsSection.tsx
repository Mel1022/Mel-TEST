"use client";
import { useRef, useEffect, useState } from "react";
import { IconPhone } from "@/components/Icons";

/* ── Problem data ── */
const PROBLEMS = [
  {
    title: "Door Won't Open or Close",
    body: "Could be a broken spring, dead opener, or sensor misalignment — we diagnose it on-site.",
    formValue: "Garage Door Repair",
    icon: <DoorIcon />,
  },
  {
    title: "Loud Grinding or Banging",
    body: "Worn rollers, loose hardware, or a spring under stress. Don't ignore loud noises.",
    formValue: "Garage Door Repair",
    icon: <NoiseIcon />,
  },
  {
    title: "Door Off Its Track",
    body: "A derailed door is a safety hazard. Call immediately — don't try to force it back.",
    formValue: "Door Off Track",
    icon: <TrackIcon />,
  },
  {
    title: "Broken or Bent Spring",
    body: "Spring failure is the #1 reason doors stop working. Requires professional service.",
    formValue: "Broken Spring",
    icon: <SpringIcon />,
  },
  {
    title: "Opener Not Responding",
    body: "Dead batteries, lost programming, or a failed logic board. We handle all brands.",
    formValue: "Garage Door Opener",
    icon: <RemoteIcon />,
  },
  {
    title: "Slow or Uneven Movement",
    body: "Could be worn cables, a balance issue, or aging rollers. Early service prevents failure.",
    formValue: "Cable/Roller Problem",
    icon: <UnbalancedIcon />,
  },
  {
    title: "Door Reverses Before Closing",
    body: "Safety sensor misalignment or logic board issue. A quick fix that stops a frustrating cycle.",
    formValue: "Garage Door Opener",
    icon: <ReverseIcon />,
  },
  {
    title: "Sagging or Damaged Panel",
    body: "Cosmetic damage or structural compromise — we assess whether repair or replacement is best.",
    formValue: "Garage Door Repair",
    icon: <PanelIcon />,
  },
];

/* ── Stack geometry ── */
const CARD_H   = 370; // px – height of each card
const PEEK_PAD = 52;  // px – extra container height so layers 1 & 2 peek below
const WRAP_H   = CARD_H + PEEK_PAD;

/* ── Per-layer transform/opacity ── */
function stackStyle(offset: number): React.CSSProperties {
  const base: React.CSSProperties = {
    position: "absolute",
    top: 0, left: 0, right: 0,
    height: CARD_H,
    willChange: "transform, opacity",
    transition: "opacity 0.42s ease-out, transform 0.42s ease-out",
  };
  if (offset === 0)  return { ...base, opacity: 1,    transform: "translateY(0px) scale(1)",     zIndex: 30, pointerEvents: "auto" };
  if (offset === 1)  return { ...base, opacity: 0.72, transform: "translateY(19px) scale(0.965)", zIndex: 20, pointerEvents: "none" };
  if (offset === 2)  return { ...base, opacity: 0.42, transform: "translateY(38px) scale(0.93)",  zIndex: 10, pointerEvents: "none" };
  if (offset === -1) return { ...base, opacity: 0,    transform: "translateY(-30px) scale(0.97)", zIndex: 5,  pointerEvents: "none" };
  const dir = offset < 0 ? -55 : 55;
  return { ...base, opacity: 0, transform: `translateY(${dir}px) scale(0.88)`, zIndex: 0, pointerEvents: "none" };
}

/* ── Component ── */
export default function ProblemsSection() {
  const wrapRef    = useRef<HTMLDivElement>(null);
  const [active,   setActive]   = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { setIsReduced(true); setRevealed(true); return; }

    const el = wrapRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setRevealed(true); },
      { threshold: 0.04 }
    );
    obs.observe(el);

    const elRef = el;
    function onScroll() {
      const rect  = elRef.getBoundingClientRect();
      const wrapH = elRef.offsetHeight;
      const vh    = window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const total    = Math.max(1, wrapH - vh);
      const progress = Math.min(0.9999, scrolled / total); // never reach exactly 1
      const idx = Math.min(PROBLEMS.length - 1, Math.floor(progress * PROBLEMS.length));
      setActive(idx);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  function handleGetHelp(formValue: string) {
    window.location.href = `/request-a-quote/?problem=${encodeURIComponent(formValue)}`;
  }

  /* ── Reduced-motion fallback: original accessible grid ── */
  if (isReduced) {
    return (
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark">
              Is Your Garage Door Giving You Trouble?
            </h2>
            <p className="mt-3 text-steel">
              Whatever it&apos;s doing, there&apos;s a reason — and we can fix it today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROBLEMS.map((p) => (
              <button
                key={p.title}
                type="button"
                onClick={() => handleGetHelp(p.formValue)}
                aria-label={`${p.title} — click to request service`}
                className="prob-card group text-left rounded-card bg-white border border-steel/10 p-6 shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
              >
                <span className="prob-accent-bar" aria-hidden="true" />
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy/8 text-navy mb-4">
                  {p.icon}
                </span>
                <h3 className="font-heading font-bold text-navy-dark text-base mb-2">{p.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{p.body}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-navy/60 group-hover:text-navy transition-colors">
                  Get help
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </button>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="tel:+17788000769"
              className="inline-flex items-center gap-2 rounded-card bg-navy px-7 py-3.5 text-sm font-bold text-white hover:bg-navy-dark hover:-translate-y-0.5 transition-all duration-200">
              <IconPhone className="w-4 h-4" />
              Call for Same-Day Service
            </a>
          </div>
        </div>
      </section>
    );
  }

  /* ── Stack experience ── */
  /* Wrapper is taller than viewport so sticky inner plays through scroll */
  const WRAP_VH = 100 + PROBLEMS.length * 14; // e.g. 212vh → ~112vh of scrollable range

  return (
    <div
      ref={wrapRef}
      style={{ height: `${WRAP_VH}vh` }}
      className="relative"
    >
      {/* Sticky panel */}
      <div
        className="sticky top-0 overflow-hidden bg-surface"
        style={{ minHeight: "100vh" }}
        role="region"
        aria-label="Common garage door problems"
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault();
            setActive((a) => Math.min(PROBLEMS.length - 1, a + 1));
          }
          if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault();
            setActive((a) => Math.max(0, a - 1));
          }
        }}
        tabIndex={-1}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center py-12 sm:py-16 lg:py-20"
             style={{ minHeight: "100vh" }}>

          {/* ── LEFT: heading + dots + CTA ── */}
          <div
            className="w-full lg:w-[42%] flex-shrink-0 pstack-reveal"
            style={revealed
              ? { opacity: 1, transform: "translateY(0)", transition: "opacity 0.55s ease-out, transform 0.55s ease-out" }
              : { opacity: 0, transform: "translateY(20px)" }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-navy mb-3">
              Common Garage Door Problems
            </p>
            <h2
              className="font-heading font-extrabold text-navy-dark"
              style={{ fontSize: "clamp(1.75rem, 2.6vw, 2.7rem)", lineHeight: 1.1 }}
            >
              Is Your Garage Door Giving You Trouble?
            </h2>
            <div className="h-[3px] rounded-full bg-navy mt-3 mb-5"
                 style={revealed
                   ? { width: 56, transition: "width 0.45s ease-out 0.2s" }
                   : { width: 0 }} />
            <p className="text-steel text-base leading-relaxed mb-8">
              Whatever it&apos;s doing, there&apos;s a reason — and we can fix it today.
            </p>

            {/* Progress pill dots */}
            <div className="flex items-center gap-2 mb-8" role="navigation" aria-label="Problem steps">
              {PROBLEMS.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setActive(i)}
                  aria-label={`Problem ${i + 1}: ${p.title}${i === active ? " (current)" : ""}`}
                  aria-current={i === active ? "step" : undefined}
                  className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy transition-all duration-300 ease-out"
                  style={{
                    width:  i === active ? 24 : 10,
                    height: i === active ? 10 : 10,
                    background: i === active ? "#146B4D" : i < active ? "rgba(20,107,77,0.45)" : "rgba(20,107,77,0.18)",
                  }}
                />
              ))}
            </div>

            {/* Active card label (mobile preview) */}
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy/60 mb-6 lg:hidden">
              {String(active + 1).padStart(2, "0")} / {String(PROBLEMS.length).padStart(2, "0")} &nbsp;·&nbsp; {PROBLEMS[active].title}
            </p>

            <a
              href="tel:+17788000769"
              className="inline-flex items-center gap-2 rounded-card bg-navy px-6 py-3.5 text-sm font-bold text-white hover:bg-navy-dark hover:-translate-y-0.5 hover:shadow-cardHover transition-all duration-200"
            >
              <IconPhone className="w-4 h-4" />
              Call for Same-Day Service
            </a>
          </div>

          {/* ── RIGHT: card stack ── */}
          <div
            className="w-full lg:flex-1 relative pstack-reveal"
            style={{
              height: WRAP_H,
              ...(revealed
                ? { opacity: 1, transform: "translateY(0)", transition: "opacity 0.55s ease-out 0.12s, transform 0.55s ease-out 0.12s" }
                : { opacity: 0, transform: "translateY(28px)" }),
            }}
          >
            {/* Subtle background circle */}
            <div
              className="absolute pointer-events-none rounded-full"
              style={{
                width: 340, height: 340,
                background: "radial-gradient(circle, rgba(20,107,77,0.07) 0%, transparent 70%)",
                top: "50%", left: "50%",
                transform: "translate(-50%, -55%)",
              }}
              aria-hidden="true"
            />

            {/* Cards */}
            {PROBLEMS.map((p, i) => (
              <div
                key={p.title}
                style={stackStyle(i - active)}
                aria-hidden={i !== active}
              >
                <div className={`rounded-card border shadow-card h-full flex flex-col p-7 pstack-card-inner relative overflow-hidden ${i === 0 ? "border-steel/10 bg-white" : "border-steel/10 bg-white"}`}>

                  {/* Background image (first card only) */}
                  {i === 0 && (
                    <>
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute", inset: 0,
                          backgroundImage: "url(/images/garage-door-wont-open.webp)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div
                        aria-hidden="true"
                        style={{
                          position: "absolute", inset: 0,
                          background: "rgba(11,61,46,0.62)",
                        }}
                      />
                    </>
                  )}

                  {/* Card content (above background layers) */}
                  <div className="relative z-10 flex flex-col h-full">

                  {/* Counter row */}
                  <div className="flex items-center gap-3 mb-5" aria-hidden="true">
                    <span className={`text-[10px] font-extrabold uppercase tracking-[0.2em] ${i === 0 ? "text-white/60" : "text-navy/45"}`}>
                      {String(i + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(PROBLEMS.length).padStart(2, "0")}
                    </span>
                    <span className={`flex-1 h-px ${i === 0 ? "bg-white/20" : "bg-navy/8"}`} />
                  </div>

                  {/* Icon */}
                  <span className={`inline-flex items-center justify-center w-11 h-11 rounded-full mb-4 flex-shrink-0 ${i === 0 ? "bg-white/15 text-white" : "bg-navy/8 text-navy"}`}>
                    {p.icon}
                  </span>

                  {/* Title */}
                  <h3
                    className={`font-heading font-extrabold mb-3 ${i === 0 ? "text-white" : "text-navy-dark"}`}
                    style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", lineHeight: 1.2 }}
                  >
                    {p.title}
                  </h3>

                  {/* Body */}
                  <p className={`text-sm leading-relaxed flex-1 ${i === 0 ? "text-white/80" : "text-steel"}`}>
                    {p.body}
                  </p>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => handleGetHelp(p.formValue)}
                    tabIndex={i === active ? 0 : -1}
                    className={`mt-5 self-start inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded ${i === 0 ? "text-white hover:text-white/80 focus-visible:ring-white" : "text-navy hover:text-navy-dark focus-visible:ring-navy"}`}
                  >
                    Get Help
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </button>
                  </div>{/* end relative z-10 content wrapper */}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Scroll hint — visible until midway */}
        {active < PROBLEMS.length - 1 && (
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none"
            aria-hidden="true"
          >
            <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-navy/40">Scroll</p>
            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="text-navy/30">
              <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="7" cy="6" r="2" fill="currentColor" className="animate-bounce" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Hover lift on active card inner (CSS class handles it) ── */

/* ── Inline SVG icons ── */

function DoorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="14" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="13.5" cy="10" r="1" fill="currentColor"/>
      <line x1="3" y1="18" x2="1" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="17" y1="18" x2="19" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4"/>
    </svg>
  );
}

function NoiseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 10h3l2-4 2 8 2-6 2 4h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="17" cy="4" r="1" fill="currentColor" opacity="0.5"/>
      <circle cx="16" cy="2" r="0.75" fill="currentColor" opacity="0.3"/>
    </svg>
  );
}

function TrackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="2" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="6" y="7" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M14 5l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M15 3h2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SpringIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2v2M7 4h6M6 6h8M7 8h6M6 10h8M7 12h6M6 14h8M10 16v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="7" y1="4" x2="6" y2="6" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="13" y1="4" x2="14" y2="6" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="6" y1="6" x2="7" y2="8" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="14" y1="6" x2="13" y2="8" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="7" y1="8" x2="6" y2="10" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="13" y1="8" x2="14" y2="10" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="6" y1="10" x2="7" y2="12" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="14" y1="10" x2="13" y2="12" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="7" y1="12" x2="6" y2="14" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="13" y1="12" x2="14" y2="14" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
}

function RemoteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="6" y="3" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="8.5" y="6" width="3" height="2" rx="0.5" fill="currentColor" opacity="0.6"/>
      <circle cx="10" cy="12" r="1" fill="currentColor"/>
      <circle cx="10" cy="15" r="0.75" fill="currentColor" opacity="0.4"/>
    </svg>
  );
}

function UnbalancedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 7l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
      <path d="M16 13l-3-3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
    </svg>
  );
}

function ReverseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M14 6H7a3 3 0 000 6h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M12 9l3-3-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 14H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

function PanelIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      <path d="M7 7l2 3-2 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
      <path d="M9 6l1.5 2.5L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
