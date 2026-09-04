import { IconPhone } from "@/components/Icons";

const PROBLEMS = [
  {
    title: "Door Won't Open or Close",
    body: "Could be a broken spring, dead opener, or sensor misalignment — we diagnose it on-site.",
    formValue: "Garage Door Repair",
    img: "/images/garage-door-wont-open.webp",
    icon: <DoorIcon />,
  },
  {
    title: "Loud Grinding or Banging",
    body: "Worn rollers, loose hardware, or a spring under stress. Don't ignore loud noises.",
    formValue: "Garage Door Repair",
    img: "/images/garage-door-grinding.jpg",
    icon: <NoiseIcon />,
  },
  {
    title: "Door Off Its Track",
    body: "A derailed door is a safety hazard. Call immediately — don't try to force it back.",
    formValue: "Door Off Track",
    img: "/images/garage-door-off-track.jpg",
    icon: <TrackIcon />,
  },
  {
    title: "Broken or Bent Spring",
    body: "Spring failure is the #1 reason doors stop working. Requires professional service.",
    formValue: "Broken Spring",
    img: "/images/garage-door-spring.jpg",
    icon: <SpringIcon />,
  },
  {
    title: "Opener Not Responding",
    body: "Dead batteries, lost programming, or a failed logic board. We handle all brands.",
    formValue: "Garage Door Opener",
    img: "/images/garage-door-opener.jpg",
    icon: <RemoteIcon />,
  },
  {
    title: "Slow or Uneven Movement",
    body: "Could be worn cables, a balance issue, or aging rollers. Early service prevents failure.",
    formValue: "Cable/Roller Problem",
    img: "/images/garage-door-slow.webp",
    icon: <UnbalancedIcon />,
  },
  {
    title: "Door Reverses Before Closing",
    body: "Safety sensor misalignment or logic board issue. A quick fix that stops a frustrating cycle.",
    formValue: "Garage Door Opener",
    img: "/images/garage-door-reverses.jpg",
    icon: <ReverseIcon />,
  },
  {
    title: "Sagging or Damaged Panel",
    body: "Cosmetic damage or structural compromise — we assess whether repair or replacement is best.",
    formValue: "Garage Door Repair",
    img: "/images/garage-door-panel.jpg",
    icon: <PanelIcon />,
  },
];

export default function ProblemsSection() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-navy mb-3">
            Common Garage Door Problems
          </p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark">
            Is Your Garage Door Giving You Trouble?
          </h2>
          <p className="mt-3 text-steel">
            Whatever it&apos;s doing, there&apos;s a reason — and we can fix it today.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROBLEMS.map((p, i) => (
            <a
              key={p.title}
              href={`/request-a-quote/?problem=${encodeURIComponent(p.formValue)}`}
              className="group relative rounded-card overflow-hidden shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
              style={{ minHeight: 260 }}
            >
              {/* Photo background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${p.img})` }}
                aria-hidden="true"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-navy-dark/60 group-hover:bg-navy-dark/50 transition-colors duration-300" aria-hidden="true" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-6" style={{ minHeight: 260 }}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white mb-4 flex-shrink-0">
                  {p.icon}
                </span>
                <h3 className="font-heading font-extrabold text-white text-base leading-snug mb-2">
                  {p.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed flex-1">
                  {p.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-white/70 group-hover:text-white transition-colors duration-200">
                  Get Help
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="tel:+17788000769"
            className="inline-flex items-center gap-2 rounded-card bg-navy px-7 py-3.5 text-sm font-bold text-white hover:bg-navy-dark hover:-translate-y-0.5 transition-all duration-200"
          >
            <IconPhone className="w-4 h-4" />
            Call for Same-Day Service
          </a>
        </div>
      </div>
    </section>
  );
}

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
