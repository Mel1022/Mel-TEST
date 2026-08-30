"use client";
import { useEffect, useRef } from "react";
import { IconCheck } from "@/components/Icons";

export default function TechnicianChecks({ checks }: { checks: string[] }) {
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
              key={check}
              className="tc-card group flex items-center gap-3 rounded-card bg-surface border border-steel/15 px-5 py-5 text-sm font-semibold text-navy
                         shadow-sm hover:shadow-card hover:-translate-y-1 hover:border-navy/20 hover:bg-white transition-[box-shadow,border-color,background-color,transform] duration-250"
              style={{
                opacity: 0,
                transform: "translateY(18px)",
                transition: "opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.25s ease, border-color 0.25s ease, background-color 0.2s ease",
              }}
            >
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-navy group-hover:bg-navy-light text-gold flex items-center justify-center transition-colors duration-200">
                <IconCheck className="w-3.5 h-3.5" />
              </span>
              {check}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
