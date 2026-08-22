import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Commercial Garage Door Service in Richmond BC | DoorChamp",
  description:
    "Commercial garage door repair, installation, and maintenance in Richmond BC. Sectional doors, high-speed doors, fire doors, loading docks, sliding gates. Call (778) 800-0769.",
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

      <CTASection
        heading="Commercial Door Problem in Richmond? Call DoorChamp."
        body="Same-day service for businesses. Request a quote or call for emergency response."
      />
    </>
  );
}
