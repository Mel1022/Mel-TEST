import type { Metadata } from "next";
import { Check, FileText, ClipboardList, PhoneCall, CalendarClock, Users } from "lucide-react";
import { PageHero, Heading, L } from "@/components/Section";
import CTABand from "@/components/CTABand";
import Button from "@/components/Magnetic";
import Faq from "@/components/Faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Strata & Multi-Family Garage Door, Gate & Parkade Service",
  description: `Parkade door and gate repair, maintenance programs and council-ready quotes for stratas and property managers in ${site.region}. Request service.`,
  alternates: { canonical: "/strata/" },
};

const handle = ["Parkade overhead and roll-up doors", "Sliding and swing gates", "Operators, remotes, keypads and access control [CONFIRM SYSTEMS]", "Photo-eyes, edge sensors and safety devices", "Springs, cables, rollers and tracks", "Impact damage and off-track repairs", "Door and gate replacement and upgrades"];
const help = [
  { i: FileText, t: "Council-ready quotes", d: "Itemised, clear and easy to forward." },
  { i: ClipboardList, t: "Written reports", d: "Findings, work done and recommended next steps for your records." },
  { i: PhoneCall, t: "Single point of contact", d: "One team for doors, gates and operators." },
  { i: CalendarClock, t: "Predictable budgets", d: "Annual maintenance plans quoted as one line, so you can plan and avoid surprise special levies." },
  { i: Users, t: "Resident-aware service", d: "We communicate access needs and expected downtime so you can notify residents." },
];
const faqs = [
  { q: "Can you provide quotes our council can approve?", a: "Yes. Itemised written quotes with scope, parts, labour and timing. [CONFIRM: council attendance / written responses]" },
  { q: "Do you provide reports for our records?", a: "Yes. After each visit you receive a written report covering what we found, what we did and what we recommend next. [CONFIRM: depreciation report support]" },
  { q: "How do you handle resident access and notices?", a: "We tell you what access we need and how long a door or gate will be out of service, so you can notify residents." },
  { q: "Can you work across multiple buildings?", a: "[CONFIRM: portfolio service for property management companies]" },
  { q: "Are your technicians insured and WCB-compliant?", a: "[INSURANCE / WCB DETAILS]. Certificates and clearance letters are available on request." },
];

export default function Strata() {
  return (
    <>
      <PageHero eyebrow="Strata & multi-family" title={<><L>Parkade doors that</L><L>residents never have</L><L>to think about.</L></>} text="When a parkade door or gate fails, it's your phone that rings. We fix the problem fast, document what we did, and set up a plan so it doesn't keep happening.">
        <Button href="/contact/">Request service</Button><Button href={site.phone.href} variant="ghost">Call {site.phone.display}</Button>
      </PageHero>
      <section className="container-x py-24 grid lg:grid-cols-2 gap-14">
        <div><Heading eyebrow="What we handle" className="mb-8"><L>Everything between</L><L>street and stall.</L></Heading></div>
        <ul className="space-y-3" data-stagger>{handle.map((h) => <li key={h} className="flex gap-3 border-b border-white/10 pb-3 text-white/85"><Check size={18} className="text-accent mt-0.5 shrink-0" />{h}</li>)}</ul>
      </section>
      <section className="py-24 bg-graphite border-y border-white/10"><div className="container-x">
        <Heading eyebrow="How we make your job easier" className="mb-12"><L>Less chasing.</L><L>More documented.</L></Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-stagger>{help.map((x) => <div key={x.t} className="glass p-8 hover:border-accent/50 transition-colors"><x.i className="text-accent" size={30} /><h3 className="font-display text-2xl font-bold mt-8">{x.t}</h3><p className="mt-2 text-silver">{x.d}</p></div>)}</div>
      </div></section>
      <section className="container-x py-24 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <Heading eyebrow="Preventive maintenance for stratas"><L>Catch it before</L><L>residents do.</L></Heading>
        <p className="text-silver leading-relaxed text-lg" data-reveal>Most parkade failures give warning signs: slow travel, noise, sensor faults. A scheduled inspection catches them first. Each visit includes inspection, lubrication, tension and balance checks, safety-device testing and a written report. [CONFIRM VISIT CHECKLIST]</p>
      </section>
      <section className="container-x pb-24 grid lg:grid-cols-[1fr_1.6fr] gap-12"><Heading eyebrow="Strata FAQ"><L>Common</L><L>questions.</L></Heading><Faq items={faqs} /></section>
      <CTABand title="Managing more than one building? Ask about portfolio service." />
    </>
  );
}
