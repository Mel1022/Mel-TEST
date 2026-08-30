"use client";
import { useEffect, useRef } from "react";
import { IconCheck } from "@/components/Icons";

type Check = { label: string; detail: string };

export default function TechnicianChecks({ checks }: { checks: Check[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".tc-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card, i) => {
      card.style.transitionDelay = `${i * 60}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h3 className="font-heading font-bold text-xl text-navy text-center mb-8">
          What the Technician Checks
        </h3>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {checks.map((check) => (
            <div
              key={check.label}
              className="tc-card group flex flex-col gap-3 rounded-card bg-surface border border-steel/15 px-5 py-5
                         shadow-sm hover:shadow-card hover:-translate-y-1 hover:border-navy/20 hover:bg-white transition-[box-shadow,border-color,background-color,transform] duration-250 cursor-default"
              style={{
                opacity: 0,
                transform: "translateY(18px)",
                transition:
                  "opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.25s ease, border-color 0.25s ease, background-color 0.2s ease",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-navy group-hover:bg-navy-light text-gold flex items-center justify-center transition-colors duration-200">
                  <IconCheck className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm font-semibold text-navy">{check.label}</span>
              </div>
              <p
                className="text-sm text-steel leading-relaxed pl-10"
                style={{
                  maxHeight: 0,
                  overflow: "hidden",
                  opacity: 0,
                  transition: "max-height 0.35s ease, opacity 0.3s ease",
                }}
                ref={(el) => {
                  if (!el) return;
                  const card = el.closest(".tc-card") as HTMLElement | null;
                  if (!card) return;
                  const show = () => {
                    el.style.maxHeight = el.scrollHeight + "px";
                    el.style.opacity = "1";
                  };
                  const hide = () => {
                    el.style.maxHeight = "0";
                    el.style.opacity = "0";
                  };
                  card.addEventListener("mouseenter", show);
                  card.addEventListener("mouseleave", hide);
                  card.addEventListener("focusin", show);
                  card.addEventListener("focusout", hide);
                }}
              >
                {check.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
