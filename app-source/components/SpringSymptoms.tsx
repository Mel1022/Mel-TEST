"use client";
import { useEffect, useRef } from "react";
import { IconCheck } from "@/components/Icons";

const symptoms = [
  { label: "Door suddenly refuses to open",             detail: "Usually means a spring snapped overnight — the opener runs but the door won't budge." },
  { label: "Loud bang from the garage (spring snapped)", detail: "A broken torsion spring releases stored energy instantly. That bang is the spring letting go." },
  { label: "Door feels extremely heavy to lift manually", detail: "Springs counterbalance the door's weight. Without them a single panel can weigh 100+ lbs." },
  { label: "Visible gap in the torsion spring coil",    detail: "A gap of an inch or more in the coil above the door means the spring has failed." },
  { label: "Door opens 6 inches then stops",            detail: "The opener's auto-reverse senses the excess load and stops — a safety feature triggered by spring failure." },
  { label: "Cables hanging loose or off their drums",   detail: "When a spring breaks the cables go slack. Never operate the door with loose cables." },
  { label: "One side of door higher than the other",    detail: "Uneven lift usually means one spring is broken or a cable has jumped its drum." },
  { label: "Opener straining and making grinding sounds", detail: "Forcing the motor to lift a door without spring assistance strains the unit and shortens its life." },
];

export default function SpringSymptoms() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll<HTMLElement>(".sym-card");
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
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-2">
          Signs You Have a Broken Spring
        </h2>
        <p className="text-steel text-sm mb-8 max-w-xl">
          Recognise any of these? Don&apos;t force the door — call us for a same-day diagnosis.
        </p>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {symptoms.map((s) => (
            <div
              key={s.label}
              className="sym-card group flex flex-col gap-3 rounded-card bg-white border border-steel/10 p-5 cursor-default
                         shadow-sm hover:shadow-card hover:-translate-y-1 hover:border-navy/20 transition-[box-shadow,border-color,transform] duration-250"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.25s ease, border-color 0.25s ease" }}
            >
              <div className="flex items-center gap-2.5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-navy/10 group-hover:bg-navy/20 flex items-center justify-center transition-colors duration-200">
                  <IconCheck className="w-3.5 h-3.5 text-navy" />
                </span>
                <p className="text-sm font-semibold text-navy-dark leading-snug">{s.label}</p>
              </div>
              <p className="text-xs text-steel leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
