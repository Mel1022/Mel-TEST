import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Garage Door Service Areas | Richmond BC & Metro Vancouver | DoorChamp",
  description:
    "DoorChamp serves Richmond, Vancouver, Burnaby, Delta, Surrey, New Westminster, Coquitlam, Ladner, Tsawwassen, and all Metro Vancouver. Same-day service.",
  alternates: { canonical: "/service-areas/" },
};

const areas = [
  {
    city: "Richmond",
    description: "Our home base. We offer same-day service throughout all Richmond neighbourhoods — Steveston, Brighouse, McLennan, Hamilton, East Richmond, and more.",
    primary: true,
  },
  { city: "Vancouver", description: "Vancouver proper including East Van, South Van, Marpole, and the west side." },
  { city: "Burnaby", description: "All of Burnaby including Burnaby Heights, Metrotown area, South Burnaby, and East Burnaby." },
  { city: "Delta", description: "North Delta, Ladner, and Tsawwassen." },
  { city: "Surrey", description: "North Surrey, Cloverdale, Newton, Fleetwood, and South Surrey." },
  { city: "New Westminster", description: "All of New Westminster." },
  { city: "Coquitlam", description: "Coquitlam and Port Coquitlam." },
  { city: "Ladner", description: "Ladner village and surrounding Delta agricultural areas." },
  { city: "Tsawwassen", description: "Tsawwassen, Boundary Bay, and Beach Grove." },
  { city: "North Vancouver", description: "North Vancouver City and District." },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative bg-navy-dark overflow-hidden text-white">
        <img src="/images/service-areas-hero-bg.png" alt="" aria-hidden="true" className="page-hero-bg-img" />
        <div aria-hidden="true" className="page-hero-overlay" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Metro Vancouver · Same-Day Service</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Garage Door Service Areas
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
            DoorChamp is based in Richmond, BC and provides same-day garage door service throughout
            Metro Vancouver. If you&apos;re unsure whether we cover your area, just call — we&apos;ll let you know right away.
          </p>
          <div className="mt-8">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors"
            >
              <IconPhone className="w-4 h-4" />
              {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            Where We Serve
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {areas.map((area) => (
              <div
                key={area.city}
                className={`rounded-card p-6 border shadow-card ${
                  area.primary
                    ? "bg-navy-dark text-white border-navy"
                    : "bg-white border-steel/10"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <IconCheck className={`w-4 h-4 flex-shrink-0 ${area.primary ? "text-gold" : "text-navy"}`} />
                  <h3 className={`font-heading font-bold text-lg ${area.primary ? "text-white" : "text-navy-dark"}`}>
                    {area.city}
                    {area.primary && <span className="ml-2 text-xs font-normal text-gold">(Home Base)</span>}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ${area.primary ? "text-white/75" : "text-steel"}`}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-card bg-surface border border-steel/15 p-8 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-navy-dark mb-3">
                Not Sure If We Cover Your Area?
              </h2>
              <p className="text-steel text-sm leading-relaxed">
                If your city or neighbourhood isn&apos;t listed, give us a call. We frequently travel
                beyond our primary service area for the right job, especially for commercial and
                strata projects.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center justify-center gap-2 rounded-card bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy-dark transition-colors"
              >
                <IconPhone className="w-4 h-4" />
                {siteConfig.phone.display}
              </a>
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center justify-center rounded-card border-2 border-navy px-6 py-3 text-sm font-bold text-navy hover:bg-navy hover:text-white transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Same-Day Garage Door Service in Richmond & Metro Vancouver"
        body="Call now — we can often be there today."
      />
    </>
  );
}
