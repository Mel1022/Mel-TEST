import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero, Heading, L } from "@/components/Section";
import CTABand from "@/components/CTABand";
import Button from "@/components/Magnetic";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Door & Dock Maintenance Programs",
  description: "Scheduled preventive maintenance for strata parkade doors, warehouse overhead doors and loading docks, with written reports and predictable annual cost.",
  alternates: { canonical: "/maintenance/" },
};

const included = ["Inspection of every door, gate and dock", "Lubrication and adjustment", "Spring tension and balance check", "Cable, roller and track check", "Operator and safety-device testing", "Written report after every visit", "Running service history per door"];

export default function Maintenance() {
  return (
    <>
      <PageHero eyebrow="Maintenance programs" title={<><L>Scheduled,</L><L>not surprised.</L></>} text="A maintenance program swaps emergency calls for planned visits, so doors keep working and costs stay predictable.">
        <Button href="/contact/?service=Preventive%20Maintenance%20Programs">Request a maintenance quote</Button>
      </PageHero>
      <section className="container-x py-24 grid lg:grid-cols-2 gap-14">
        <div><Heading eyebrow="What's included" className="mb-6"><L>Every visit,</L><L>on the record.</L></Heading><p className="text-xs text-silver-dim" data-reveal>[CONFIRM each item before launch]</p></div>
        <ul className="space-y-3" data-stagger>{included.map((h) => <li key={h} className="flex gap-3 border-b border-white/10 pb-3 text-white/85"><Check size={18} className="text-accent mt-0.5 shrink-0" />{h}</li>)}</ul>
      </section>
      <section className="py-24 bg-graphite border-y border-white/10"><div className="container-x grid md:grid-cols-2 gap-5" data-stagger>
        {[{ t: "Strata program", d: "Annual or semi-annual visits timed to your fiscal year, with council-ready summaries." }, { t: "Warehouse program", d: "Visit frequency matched to door cycles, with priority response for plan customers. [CONFIRM]" }].map((x) => <div key={x.t} className="glass p-10"><h3 className="font-display text-3xl font-bold uppercase">{x.t}</h3><p className="mt-3 text-silver">{x.d}</p></div>)}
      </div></section>
      <section className="container-x py-24"><Heading eyebrow="How pricing works" className="mb-6"><L>Quoted per site.</L></Heading><p className="text-silver max-w-2xl text-lg" data-reveal>Quoted per site after a walk-through. No obligation. [CONFIRM] Questions? Call <a className="text-accent underline underline-offset-4" href={site.phone.href}>{site.phone.display}</a>.</p></section>
      <CTABand title="Stop paying for surprises." />
    </>
  );
}
