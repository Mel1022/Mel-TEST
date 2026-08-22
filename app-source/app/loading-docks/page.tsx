import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Loading Dock Service & Repair in Richmond BC | DoorChamp",
  description:
    "Loading dock leveler, seal, and door repair in Richmond BC. DoorChamp provides commercial loading dock maintenance and emergency repair. Call (778) 800-0769.",
  alternates: { canonical: "/loading-docks/" },
};

const services = [
  { title: "Dock Levelers", body: "Hydraulic and mechanical dock leveler repair, rebuild, and replacement. We service all major brands." },
  { title: "Dock Seals & Shelters", body: "Foam and inflatable dock seals and shelters keep your facility weather-tight and energy-efficient." },
  { title: "Dock Bumpers", body: "Replacement dock bumpers protect your building and vehicles from impact damage." },
  { title: "Pit Covers & Guards", body: "Safety covers for dock pits when levelers are retracted — required by WorkSafeBC in many applications." },
  { title: "Loading Dock Doors", body: "Sectional, rolling steel, and high-speed dock doors. Repair, maintenance, and installation." },
  { title: "Preventive Maintenance", body: "Scheduled dock equipment inspection and lubrication. Prevents costly emergency failures." },
];

export default function LoadingDocksPage() {
  return (
    <>
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Commercial Service · Richmond BC</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Loading Dock Service &amp; Repair
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
            Keep your loading docks operating safely and efficiently. DoorChamp services all dock equipment —
            levelers, seals, bumpers, and doors — with fast response and minimal disruption.
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
            Loading Dock Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-card bg-white border border-steel/10 p-7 shadow-card">
                <h3 className="font-heading font-bold text-lg text-navy-dark mb-2">{s.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-6">
            WorkSafeBC Compliance for Loading Docks
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-white/75 leading-relaxed mb-4">
                WorkSafeBC regulations require that dock equipment — especially levelers and pit covers —
                be maintained in safe operating condition. Failure to maintain equipment can result in
                worker injuries and significant liability for employers.
              </p>
              <p className="text-white/75 leading-relaxed">
                DoorChamp provides documented service records, inspection reports, and compliance-ready
                maintenance programs that give property managers and facility operators the paperwork
                they need.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "WCB compliant technicians on every job",
                "Documented service records provided",
                "Compliance inspection programs available",
                "$5M liability insurance",
                "Service available Mon–Sat 7am–8pm",
                "Emergency response for dock failures",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                  <span className="text-white/85 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        heading="Loading Dock Problem? We Respond Fast."
        body="Call now for same-day dock service in Richmond and Metro Vancouver."
      />
    </>
  );
}
