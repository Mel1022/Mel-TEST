"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { IconPhone, IconWrench, IconCheck } from "@/components/Icons";

const STEPS = [
  {
    n: "01",
    label: "CALL THE CHAMP",
    title: "Call or Request a Quote",
    body: "Tell us what's happening with your garage door. Call (778) 800-0769 or request a quote online.",
    icon: <IconPhone className="w-6 h-6" />,
  },
  {
    n: "02",
    label: "WE SHOW UP",
    title: "Same-Day Technician Visit",
    body: "We inspect the problem, explain what's wrong, and recommend the right solution.",
    icon: <IconWrench className="w-6 h-6" />,
  },
  {
    n: "03",
    label: "BACK IN ACTION",
    title: "Repair Done Right",
    body: "We get your garage door working properly so you can get on with your day.",
    icon: <IconCheck className="w-6 h-6" />,
  },
];

/* Delay (ms) for each animated element when section is revealed */
const STEP_DELAY   = [0,   350, 700];
const LINE_DELAY   = [200, 550];
const CTA_DELAY    = 950;

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced.current) {
      setRevealed(true);
      return;
    }

    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const r = revealed;
  const rd = reduced.current;

  /* Inline reveal style for a given delay */
  function rev(delay: number): React.CSSProperties {
    if (r) return { opacity: 1, transform: "translateY(0) scale(1)", transitionDelay: rd ? "0ms" : `${delay}ms` };
    return { opacity: 0, transform: "translateY(22px) scale(0.97)" };
  }

  /* Step-number entrance (scale in) */
  function numRev(delay: number): React.CSSProperties {
    if (r) return { opacity: 1, transform: "scale(1)", transitionDelay: rd ? "0ms" : `${delay}ms` };
    return { opacity: 0, transform: "scale(0.75)" };
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background image */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: "url(/images/hiw-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
      }} />
      {/* Dark overlay */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "rgba(11,61,46,0.78)",
      }} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* ── Heading ── */}
        <div
          className="text-center max-w-2xl mx-auto mb-14 hiw-reveal"
          style={rev(0)}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mb-3">
            How It Works
          </p>
          <h2 className="font-heading font-extrabold leading-tight text-white"
            style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)" }}>
            From Broken Door<br />
            <span className="text-white/80">to Back in Action.</span>
          </h2>
          <div className="flex justify-center mt-3 mb-4">
            <span
              className="block h-[3px] rounded-full bg-white/50 hiw-accent-line"
              style={r ? { width: 56, transitionDelay: rd ? "0ms" : "180ms" } : { width: 0 }}
            />
          </div>
          <p className="text-white/65 text-base">
            Getting garage-door service shouldn&apos;t be complicated.
          </p>
        </div>

        {/* ── Steps + connectors ── */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-0">
          {STEPS.map((step, i) => (
            <div key={step.n} className="flex flex-col sm:flex-row sm:flex-1 sm:items-start">

              {/* Card */}
              <div
                className="hiw-card hiw-reveal group rounded-card bg-white/10 border border-white/15 p-7 sm:flex-1 cursor-default backdrop-blur-sm"
                style={rev(STEP_DELAY[i])}
              >
                {/* Step number */}
                <span
                  className="hiw-number inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-navy font-heading font-extrabold text-lg mb-5 hiw-reveal"
                  style={numRev(STEP_DELAY[i])}
                >
                  {step.n}
                </span>

                {/* Icon */}
                <div className="mb-4 text-white/70 group-hover:text-white hiw-icon transition-all duration-300">
                  {step.icon}
                </div>

                {/* Label */}
                <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/55 mb-2 group-hover:text-white/80 transition-colors duration-200">
                  {step.label}
                </p>

                {/* Title */}
                <h3 className="font-heading font-bold text-base text-white mb-2 group-hover:text-white/90 transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Body */}
                <p className="text-sm text-white/70 leading-relaxed">
                  {step.body}
                </p>
              </div>

              {/* Connector — only between steps (not after last) */}
              {i < STEPS.length - 1 && (
                <div className="hiw-connector-wrap flex-shrink-0">
                  {/* Desktop: horizontal line with arrowhead */}
                  <div className="hidden sm:flex items-center justify-center h-full px-2 pt-6">
                    <div className="relative flex items-center">
                      <div
                        className="hiw-line-h"
                        style={
                          r
                            ? { width: 40, transitionDelay: rd ? "0ms" : `${LINE_DELAY[i]}ms`, background: "rgba(255,255,255,0.3)" }
                            : { width: 0, background: "rgba(255,255,255,0.3)" }
                        }
                      />
                      <span
                        className="hiw-arrow-h"
                        style={
                          r
                            ? { opacity: 1, transitionDelay: rd ? "0ms" : `${LINE_DELAY[i] + 350}ms`, color: "rgba(255,255,255,0.4)" }
                            : { opacity: 0, color: "rgba(255,255,255,0.4)" }
                        }
                      >
                        →
                      </span>
                    </div>
                  </div>

                  {/* Mobile: vertical line */}
                  <div className="sm:hidden flex justify-center py-1">
                    <div className="relative flex flex-col items-center">
                      <div
                        className="hiw-line-v"
                        style={
                          r
                            ? { height: 36, transitionDelay: rd ? "0ms" : `${LINE_DELAY[i]}ms`, background: "rgba(255,255,255,0.3)" }
                            : { height: 0, background: "rgba(255,255,255,0.3)" }
                        }
                      />
                      <span
                        className="hiw-arrow-v"
                        style={
                          r
                            ? { opacity: 1, transitionDelay: rd ? "0ms" : `${LINE_DELAY[i] + 350}ms`, color: "rgba(255,255,255,0.4)" }
                            : { opacity: 0, color: "rgba(255,255,255,0.4)" }
                        }
                      >
                        ↓
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12 hiw-reveal"
          style={rev(CTA_DELAY)}
        >
          <Link
            href="/request-a-quote/"
            className="inline-flex items-center justify-center gap-2 rounded-card bg-white px-8 py-4 text-sm font-bold text-navy hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-cardHover transition-all duration-200 uppercase tracking-wide"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:+17788000769"
            className="inline-flex items-center justify-center gap-2 rounded-card border-2 border-white/60 text-white px-8 py-4 text-sm font-bold hover:bg-white hover:text-navy hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wide"
          >
            <IconPhone className="w-4 h-4" />
            Call the Champ
          </a>
        </div>

      </div>{/* end relative z-10 */}
    </section>
  );
}
