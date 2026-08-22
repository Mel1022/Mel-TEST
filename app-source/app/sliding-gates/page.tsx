import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Sliding Gate Repair & Installation in Richmond BC | DoorChamp",
  description:
    "Motorized sliding gate repair and installation in Richmond BC. Commercial and strata access control. DoorChamp — call (778) 800-0769.",
  alternates: { canonical: "/sliding-gates/" },
};

const services = [
  { title: "Motorized Slide Gate Repair", body: "Motor failures, operator issues, track problems, and access control faults — we diagnose and repair all sliding gate systems." },
  { title: "New Gate Installation", body: "Custom-sized sliding gates for commercial properties, strata complexes, and industrial facilities." },
  { title: "Gate Operator Service", body: "We service all major operators: LiftMaster, Viking, DoorKing, Ramset, and more." },
  { title: "Access Control Integration", body: "Keypads, intercoms, fob systems, and remote access. Integration with building management systems." },
  { title: "Safety Loop Installation", body: "Vehicle detection loops prevent gates from closing on vehicles. Required for safe automated gate operation." },
  { title: "Maintenance Programs", body: "Scheduled inspection and lubrication programs for strata properties and commercial facilities." },
];

export default function SlidingGatesPage() {
  return (
    <>
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Commercial & Strata · Richmond BC</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Sliding Gate Repair &amp; Installation
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
            Motorized sliding gates for commercial properties, strata complexes, and industrial facilities.
            Repair, installation, and preventive maintenance throughout Richmond and Metro Vancouver.
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
            Sliding Gate Services
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-white mb-6">What We Work On</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Strata parkade entrances",
              "Commercial loading yard gates",
              "Industrial facility perimeter",
              "Multi-family residential access",
              "LiftMaster & Viking operators",
              "DoorKing & Ramset systems",
              "Cantilever slide gates",
              "V-track and bottom-roll gates",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <IconCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Sliding Gate Needs Attention? We've Got You."
        body="Call for same-day sliding gate repair or request a quote for new installation."
      />
    </>
  );
}
