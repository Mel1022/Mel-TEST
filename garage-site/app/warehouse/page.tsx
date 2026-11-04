import type { Metadata } from "next";
import { Timer, ClipboardCheck, Siren, Settings } from "lucide-react";
import { PageHero, Heading, L } from "@/components/Section";
import CTABand from "@/components/CTABand";
import ServiceArt from "@/components/ServiceArt";
import Button from "@/components/Magnetic";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Warehouse & Industrial Overhead Door and Loading Dock Service",
  description: `Overhead door repair, loading dock levelers, seals and preventive maintenance for warehouses and industrial sites in ${site.region}. Request a site assessment.`,
  alternates: { canonical: "/warehouse/" },
};

const equip = ["overhead-door-repair", "door-installation", "dock-levelers", "dock-seals", "vehicle-restraints", "operators"].map((s) => services.find((x) => x.slug === s)!);

export default function Warehouse() {
  return (
    <>
      <PageHero eyebrow="Warehouse & industrial" title={<><L>Uptime is</L><L>the product.</L></>} text="Every bay that's down is freight that's late. We keep doors, docks and operators running, and we plan the maintenance so failures happen on your schedule, not mid-shift.">
        <Button href="/contact/?service=Safety%20Inspections%20%26%20Reports">Request a site assessment</Button><Button href={site.phone.href} variant="ghost">Call {site.phone.display}</Button>
      </PageHero>
      <section className="container-x py-24 grid lg:grid-cols-3 gap-5" data-stagger>
        {[{ i: Timer, t: "Reduced downtime", d: "Fast diagnosis and common parts on the truck get doors back in service sooner." },
          { i: ClipboardCheck, t: "Safety inspections", d: "Documented checks of doors, dock equipment and safety devices." },
          { i: Siren, t: "Emergency repairs", d: "Door down mid-shift? Call for priority response. [EMERGENCY HOURS]" }].map((x) => (
          <div key={x.t} className="border border-white/10 bg-graphite p-8 relative overflow-hidden"><div aria-hidden="true" className="absolute inset-0 grid-bg opacity-20" /><x.i className="relative text-accent" size={30} /><h3 className="relative font-display text-2xl font-bold mt-8 uppercase">{x.t}</h3><p className="relative mt-2 text-silver">{x.d}</p></div>
        ))}
      </section>
      <section className="py-24 bg-graphite border-y border-white/10 relative">
        <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-x relative">
          <Heading eyebrow="Equipment we service" className="mb-14"><L>Doors, docks</L><L>and operators.</L></Heading>
          <div className="space-y-px bg-white/10 border border-white/10" data-stagger>
            {equip.map((s, i) => (
              <div key={s.slug} className="bg-ink grid md:grid-cols-[90px_200px_1fr] gap-6 items-center p-6 sm:p-8">
                <span className="font-display text-3xl font-bold text-white/20">0{i + 1}</span>
                <ServiceArt kind={s.art} className="w-36 text-accent" />
                <div><h3 className="font-display text-2xl font-bold uppercase">{s.name}</h3><p className="mt-2 text-silver">{s.blurb}</p>
                  <p className="mt-3 text-xs uppercase tracking-widest text-silver-dim">{s.problems.join(" · ")}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container-x py-24 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <Heading eyebrow="Preventive maintenance"><L>Planned, not</L><L>mid-shift.</L></Heading>
        <div className="text-silver leading-relaxed text-lg space-y-4" data-reveal><p>Door-by-door inspection, lubrication, adjustment and testing on a schedule that matches your door cycles. Written findings after every visit and a running service history per door and per dock. [CONFIRM SCHEDULE OPTIONS]</p>
          <p className="flex gap-3 text-base"><Settings size={20} className="text-accent shrink-0 mt-1" /><span>What a site assessment includes: [CONFIRM: walk-through of all doors and docks, condition rating, recommended priorities, budget estimate]</span></p></div>
      </section>
      <CTABand title="Keep your operation moving." />
    </>
  );
}
