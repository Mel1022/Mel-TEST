import type { Metadata } from "next";
import Link from "next/link";
import { Check, AlertCircle, ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import ServiceArt from "@/components/ServiceArt";
import CTABand from "@/components/CTABand";
import { PageHero, L } from "@/components/Section";
import Button from "@/components/Magnetic";

export const metadata: Metadata = {
  title: "Commercial Garage Door, Gate & Loading Dock Services",
  description: "Commercial overhead door repair and installation, gate service, loading dock levelers, seals and restraints, plus preventive maintenance and safety inspections.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title={<><L>Every door. Every dock.</L><L>One team.</L></>} text="Service, repair, installation and maintenance for the doors, gates and dock equipment that keep commercial buildings working.">
        <Button href="/contact/">Request service</Button>
      </PageHero>
      <nav aria-label="Service quick links" className="sticky top-[72px] z-30 bg-ink/85 backdrop-blur border-b border-white/10 overflow-x-auto">
        <ul className="container-x flex gap-6 py-3 text-sm whitespace-nowrap">
          {services.map((s) => <li key={s.slug}><a className="nav-link text-white/70 hover:text-white" href={`#${s.slug}`}>{s.name}</a></li>)}
        </ul>
      </nav>
      {services.map((s, i) => {
        const flip = i % 2 === 1; const commercial = s.group === "Loading Docks";
        return (
          <section key={s.slug} id={s.slug} className={`scroll-mt-32 py-20 sm:py-28 border-b border-white/10 ${commercial ? "bg-graphite" : i % 2 ? "bg-ink" : "bg-[#04141f]"} relative overflow-hidden`}>
            {commercial && <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-30" />}
            <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={flip ? "lg:order-2" : ""} data-reveal>
                <div className="relative aspect-[4/3] glass grid place-items-center overflow-hidden">
                  <div aria-hidden="true" className="absolute inset-0 panel-lines opacity-50" />
                  <span aria-hidden="true" className="absolute top-4 left-5 font-display text-7xl font-bold text-white/[0.06]">{String(i + 1).padStart(2, "0")}</span>
                  <ServiceArt kind={s.art} className="relative w-3/5 text-accent" />
                  <span className="absolute bottom-4 left-5 eyebrow !text-[10px]">{s.group}</span>
                </div>
              </div>
              <div>
                <p className="eyebrow mb-3" data-reveal>{s.group}</p>
                <h2 className="h-xl uppercase" data-lines><L>{s.name}</L></h2>
                <p className="mt-5 text-silver text-lg leading-relaxed" data-reveal>{s.blurb}</p>
                <div className="mt-8 grid sm:grid-cols-2 gap-8" data-reveal>
                  <div><h3 className="eyebrow !text-silver mb-3 flex gap-2 items-center"><AlertCircle size={14} /> Common problems</h3><ul className="space-y-2 text-sm text-white/80">{s.problems.map((p) => <li key={p} className="flex gap-2"><span className="text-silver-dim">—</span>{p}</li>)}</ul></div>
                  <div><h3 className="eyebrow mb-3 flex gap-2 items-center"><Check size={14} /> Benefits</h3><ul className="space-y-2 text-sm text-white/80">{s.benefits.map((p) => <li key={p} className="flex gap-2"><Check size={14} className="text-accent mt-0.5 shrink-0" />{p}</li>)}</ul></div>
                </div>
                <Link href={`/contact/?service=${encodeURIComponent(s.name)}`} className="btn btn-primary mt-9" data-reveal>Request this service <ArrowRight size={16} /></Link>
              </div>
            </div>
          </section>
        );
      })}
      <CTABand />
    </>
  );
}
