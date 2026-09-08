import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconAlert } from "@/components/Icons";

const service = getServiceBySlug("garage-door-repair")!;

export const metadata: Metadata = {
  title: "Garage Door Repair",
  description:
    "Professional garage door repair for doors that won't open, won't close, or are off track. DoorChamp diagnoses the real problem before recommending a fix.",
  alternates: { canonical: "/garage-door-repair/" },
};

const heroSection = (
  <section className="relative bg-navy-dark overflow-hidden">
    <img src="/images/repair-hero-bg.webp" alt="" aria-hidden="true" className="page-hero-bg-img" />
    <div aria-hidden="true" className="page-hero-overlay" />
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Same-Day Repair · Richmond BC</p>
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
        {service.heroHeadline}
      </h1>
      <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
        {service.heroSupport}
      </p>
      <style>{`
        @keyframes emergency-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(220,38,38,0.9), 0 0 12px 2px rgba(220,38,38,0.5); }
          50%  { box-shadow: 0 0 0 20px rgba(220,38,38,0.15), 0 0 24px 6px rgba(220,38,38,0.3); }
          100% { box-shadow: 0 0 0 28px rgba(220,38,38,0), 0 0 0 0 rgba(220,38,38,0); }
        }
        @keyframes emergency-shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-3px); }
          40%       { transform: translateX(3px); }
          60%       { transform: translateX(-2px); }
          80%       { transform: translateX(2px); }
        }
        .emergency-btn {
          animation: emergency-pulse 1.5s ease-out infinite;
        }
        .emergency-btn:hover {
          animation: emergency-shake 0.4s ease-in-out, emergency-pulse 1.5s ease-out infinite 0.4s;
        }
      `}</style>
      <div className="mt-8 flex flex-col items-start gap-4">
        <a href={siteConfig.phone.href} className="emergency-btn inline-flex items-center justify-center gap-2 rounded-card bg-red-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-red-700 transition-colors duration-200">
          <IconPhone className="w-4 h-4" /> Emergency: {siteConfig.phone.display}
        </a>
        <a href="sms:+17788000769" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
          💬 Or text the on-call tech
        </a>
      </div>
      {service.safetyWarning && (
        <div className="mt-6 max-w-xl flex items-start gap-3 rounded-card bg-gold/10 border border-gold/30 px-5 py-4">
          <IconAlert className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <p className="text-sm text-white/85">{service.safetyWarning}</p>
        </div>
      )}
    </div>
  </section>
);

export default function Page() {
  return <ServiceDetailPage service={service} bgImage="/images/repair-hero-bg.webp" heroSection={heroSection} />;
}
