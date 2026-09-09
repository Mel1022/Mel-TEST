import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Commercial Garage Door Service in Richmond BC | DoorChamp",
  description:
    "Commercial garage door repair & installation in Richmond, Burnaby, Surrey, Delta, Vancouver & Metro Vancouver. Sectional, high-speed, fire doors, loading docks. Call (778) 732-0588.",
  alternates: { canonical: "/commercial/" },
};

const commercialServices = [
  {
    title: "Commercial Sectional Doors",
    body: "Heavy-duty steel sectional doors for warehouses, retail loading areas, and industrial facilities. Repair, maintenance, and new installation.",
  },
  {
    title: "High-Speed Roll-Up Doors",
    body: "Fabric and steel high-speed doors for facilities requiring rapid cycling — food processing, cold storage, logistics hubs.",
  },
  {
    title: "Fire-Rated Doors",
    body: "UL-listed fire doors with automatic drop-close mechanisms. Annual testing, certification, and repair.",
  },
  {
    title: "Loading Dock Equipment",
    body: "Dock levelers, dock seals, bumpers, and pit covers. Maintenance programs and emergency repair.",
    href: "/loading-docks/",
  },
  {
    title: "Sliding Security Gates",
    body: "Motorized sliding gates for vehicle access control, perimeter security, and strata/parkade entrances.",
    href: "/sliding-gates/",
  },
  {
    title: "Preventive Maintenance Programs",
    body: "Scheduled service agreements for businesses and property managers. Reduce downtime, extend equipment life, meet compliance requirements.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Richmond BC & Metro Vancouver</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Commercial Garage Door Service
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
            From single-unit commercial spaces to large industrial facilities and strata complexes,
            DoorChamp provides dependable commercial door service with minimal disruption to your operations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href={siteConfig.phone.href} className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            Commercial Door Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialServices.map((s) => (
              <div key={s.title} className="rounded-card bg-white border border-steel/10 p-7 shadow-card">
                <h3 className="font-heading font-bold text-lg text-navy-dark mb-2">{s.title}</h3>
                <p className="text-sm text-steel leading-relaxed mb-4">{s.body}</p>
                {s.href && (
                  <Link href={s.href} className="text-sm font-semibold text-navy hover:underline">
                    Learn more →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manufacturer brand scroll ── */}
      <section className="bg-white overflow-hidden py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold mb-2">Manufacturers</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark">
            Brands we install commercially.
          </h2>
        </div>
        <style>{`
          @keyframes brand-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .brand-track {
            display: flex;
            width: max-content;
            animation: brand-scroll 28s linear infinite;
          }
          .brand-track:hover { animation-play-state: paused; }
        `}</style>
        <div className="relative" aria-label="Commercial door brand partners">
          <div className="brand-track">
            {[
              { name: "Hormann",        bg: "#F5A800", color: "#003366", style: { fontWeight: 900, letterSpacing: "0.04em" } },
              { name: "Steelcraft",     bg: "#CC1A1A", color: "#ffffff", style: { fontWeight: 700 } },
              { name: "Garaga",         bg: "#C8102E", color: "#ffffff", style: { fontWeight: 800, letterSpacing: "0.06em" } },
              { name: "Clopay",         bg: "#1A1A2E", color: "#ffffff", style: { fontWeight: 700 } },
              { name: "Amarr",          bg: "#003087", color: "#ffffff", style: { fontWeight: 800, letterSpacing: "0.05em" } },
              { name: "Richards Wilcox",bg: "#f5f5f5", color: "#222",   style: { fontWeight: 600, fontSize: "0.8rem" } },
              { name: "C.H.I.",         bg: "#222",    color: "#ffffff", style: { fontWeight: 900, letterSpacing: "0.08em" } },
              { name: "Rytec",          bg: "#003366", color: "#ffffff", style: { fontWeight: 800, letterSpacing: "0.04em" } },
              { name: "LiftMaster",     bg: "#C8102E", color: "#ffffff", style: { fontWeight: 700 } },
              { name: "Doorcraft",      bg: "#111",    color: "#ffffff", style: { fontWeight: 700 } },
              // duplicate set for seamless loop
              { name: "Hormann",        bg: "#F5A800", color: "#003366", style: { fontWeight: 900, letterSpacing: "0.04em" } },
              { name: "Steelcraft",     bg: "#CC1A1A", color: "#ffffff", style: { fontWeight: 700 } },
              { name: "Garaga",         bg: "#C8102E", color: "#ffffff", style: { fontWeight: 800, letterSpacing: "0.06em" } },
              { name: "Clopay",         bg: "#1A1A2E", color: "#ffffff", style: { fontWeight: 700 } },
              { name: "Amarr",          bg: "#003087", color: "#ffffff", style: { fontWeight: 800, letterSpacing: "0.05em" } },
              { name: "Richards Wilcox",bg: "#f5f5f5", color: "#222",   style: { fontWeight: 600, fontSize: "0.8rem" } },
              { name: "C.H.I.",         bg: "#222",    color: "#ffffff", style: { fontWeight: 900, letterSpacing: "0.08em" } },
              { name: "Rytec",          bg: "#003366", color: "#ffffff", style: { fontWeight: 800, letterSpacing: "0.04em" } },
              { name: "LiftMaster",     bg: "#C8102E", color: "#ffffff", style: { fontWeight: 700 } },
              { name: "Doorcraft",      bg: "#111",    color: "#ffffff", style: { fontWeight: 700 } },
            ].map((brand, i) => (
              <div
                key={i}
                className="mx-3 flex-shrink-0 flex items-center justify-center rounded-xl border border-steel/10 shadow-sm px-6 py-4"
                style={{ minWidth: 140, height: 72, background: brand.bg }}
              >
                <span
                  className="text-sm uppercase tracking-wide"
                  style={{ color: brand.color, ...brand.style }}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-5">
              Why Commercial Properties Choose DoorChamp
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              A failed commercial door doesn&apos;t just create inconvenience — it stops operations,
              creates security gaps, and may violate safety compliance requirements.
              We offer rapid response, scheduled maintenance programs, and documentation for
              compliance and insurance purposes.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "Rapid commercial response — minimize operational downtime",
              "Maintenance programs with service records",
              "WCB compliant technicians on every job",
              "$5M liability coverage",
              "Fire door testing and certification",
              "Licensed & insured for commercial work",
              "Service agreements available for property managers",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-white/85 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceAreaSection service="Commercial Garage Door Service" />

      <CTASection
        heading="Commercial Door Problem in Richmond? Call DoorChamp."
        body="Same-day service for businesses. Request a quote or call for emergency response."
      />
    </>
  );
}
