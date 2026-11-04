import type { Metadata } from "next";
import { Timer, ClipboardCheck, Siren, Warehouse, Container, Settings } from "lucide-react";
import { PageHero, Heading, L } from "@/components/Section";
import CTABand from "@/components/CTABand";
import ServiceArt from "@/components/ServiceArt";
import Button from "@/components/Magnetic";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Commercial & Industrial Overhead Doors, Loading Docks",
  description: "Commercial overhead doors, industrial roll-up doors and loading dock equipment — preventive maintenance, safety inspections and emergency repairs that protect uptime.",
  alternates: { canonical: "/commercial/" },
};

export default function Commercial() {
  return (
    <>
      <PageHero eyebrow="Commercial & industrial" title={<><L>Uptime is</L><L>the product.</L></>} text="When a door or dock fails, operations stop. We keep warehouses, facilities and loading bays moving with preventive maintenance and fast repairs.">
        <Button href="/contact/?service=Industrial%20Door%20Maintenance">Request a site assessment</Button>
      </PageHero>
      <section className="container-x py-24 grid lg:grid-cols-3 gap-5" data-stagger>
        {[{ i: Timer, t: "Reduced downtime", d: "Fast diagnosis and the right parts on the truck get doors back in service sooner." },
          { i: ClipboardCheck, t: "Safety inspections", d: "Documented inspections of doors, dock equipment and safety devices." },
          { i: Siren, t: "Emergency repairs", d: "Door down mid-shift? Call for priority response. [EMERGENCY HOURS]" }].map((x) => (
          <div key={x.t} className="border border-white/10 bg-graphite p-8 relative overflow-hidden"><div aria-hidden="true" className="absolute inset-0 grid-bg opacity-20" /><x.i className="relative text-lime" size={30} /><h3 className="relative font-display text-2xl font-bold mt-8 uppercase">{x.t}</h3><p className="relative mt-2 text-silver">{x.d}</p></div>
        ))}
      </section>
      <section className="py-24 bg-graphite border-y border-white/10 relative">
        <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-x relative">
          <Heading eyebrow="Technical capability" className="mb-14"><L>Equipment we</L><L>keep running.</L></Heading>
          <div className="space-y-px bg-white/10 border border-white/10" data-stagger>
            {services.filter((s) => s.group === "Commercial").map((s, i) => (
              <div key={s.slug} id={s.slug} className="bg-ink grid md:grid-cols-[120px_220px_1fr] gap-6 items-center p-6 sm:p-8">
                <span className="font-display text-3xl font-bold text-white/20">0{i + 1}</span>
                <ServiceArt kind={s.art} className="w-40 text-lime" />
                <div><h3 className="font-display text-2xl font-bold uppercase">{s.name}</h3><p className="mt-2 text-silver">{s.blurb}</p>
                  <p className="mt-3 text-xs uppercase tracking-widest text-silver-dim">{s.problems.join(" · ")}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-5 text-sm text-silver">
            {[{ i: Warehouse, t: "Warehouses & industrial units" }, { i: Container, t: "Loading docks & levelers" }, { i: Settings, t: "Preventive maintenance plans" }].map((x) => <div key={x.t} className="flex items-center gap-3 border border-white/10 p-4"><x.i size={20} className="text-lime" />{x.t}</div>)}
          </div>
        </div>
      </section>
      <CTABand title="Keep your operation moving." />
    </>
  );
}
