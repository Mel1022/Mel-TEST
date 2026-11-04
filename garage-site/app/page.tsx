import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, ShieldCheck, Gauge, FileText, ClipboardList, Scale, PhoneCall, Siren, Building2, Warehouse, Check } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ServiceSelector from "@/components/ServiceSelector";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import Faq from "@/components/Faq";
import DoorReveal from "@/components/DoorReveal";
import ServiceArt from "@/components/ServiceArt";
import Button from "@/components/Magnetic";
import { Heading, L } from "@/components/Section";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `Commercial Garage Door & Loading Dock Service for Stratas & Warehouses | ${site.name}` },
  description: `Repair, maintenance, installation and emergency service for strata parkade doors and gates, warehouse overhead doors and loading docks in ${site.region}. Written quotes and service reports.`,
  alternates: { canonical: "/" },
};

const trust = ["Licensed & insured [DETAILS]", "WCB [CLEARANCE ON REQUEST]", "Written inspection reports", "Strata-ready quotes", "Emergency repairs", "New door installation", "[WARRANTY]"];
const featured = ["overhead-door-repair", "gates", "dock-levelers", "spring-replacement", "operators", "maintenance-programs"].map((s) => services.find((x) => x.slug === s)!);

export default function Home() {
  return (
    <>
      <Hero />
      <div id="trust"><Marquee items={trust} /></div>

      {/* Who we serve */}
      <section className="grid lg:grid-cols-2 border-b border-white/10" aria-label="Who we serve">
        {[{ href: "/strata/", i: Building2, t: "Strata & multi-family", d: "Parkade overhead doors, gates, entry systems and the complaints that come with them. We keep residents moving and give your council paperwork it can approve.", cta: "See strata service", bg: "bg-ink" },
          { href: "/warehouse/", i: Warehouse, t: "Warehouses & industrial", d: "Dock doors, levelers, seals and high-cycle overhead doors. We keep trucks loading and give you a maintenance plan that cuts surprise downtime.", cta: "See warehouse service", bg: "bg-graphite lg:border-l border-white/10" }].map((x, k) => (
          <Link key={x.t} href={x.href} className={`group relative p-10 sm:p-16 min-h-[420px] flex flex-col overflow-hidden ${x.bg}`}>
            <div aria-hidden="true" className={`absolute inset-0 ${k ? "grid-bg" : "panel-lines"} opacity-40 group-hover:opacity-70 transition-opacity duration-700`} />
            <x.i className="relative text-accent" size={36} />
            <p className="relative eyebrow mt-8">Who we serve</p>
            <h2 className="relative font-display text-4xl sm:text-5xl font-bold uppercase mt-3">{x.t}</h2>
            <p className="relative mt-4 text-silver max-w-md">{x.d}</p>
            <span className="relative mt-auto pt-10 inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase text-accent group-hover:gap-5 transition-all">{x.cta} <ArrowUpRight size={18} /></span>
          </Link>
        ))}
      </section>

      {/* Stats (replace placeholders with real figures) */}
      <section className="container-x py-20 sm:py-28" aria-label="Company highlights">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10" data-stagger>
          {[["[00]", "Years in business"], ["[0,000]", "Doors serviced"], ["[00]", "Stratas & sites under maintenance"], [site.responseTime, "Typical emergency response"]].map(([n, l]) => (
            <div key={l} className="bg-ink p-6 sm:p-10"><p className="font-display font-bold text-4xl sm:text-6xl text-white">{n}</p><p className="mt-3 text-sm text-silver">{l}</p></div>
          ))}
        </div>
        <p className="mt-3 text-xs text-silver-dim">Replace bracketed values with real figures. Whole numbers can use the built-in count-up (data-count).</p>
      </section>

      {/* Finder */}
      <section className="container-x pb-24 sm:pb-32">
        <Heading eyebrow="Service finder" className="mb-4 max-w-3xl"><L>What&apos;s going on</L><L>at your site?</L></Heading>
        <p className="mb-12 text-silver max-w-xl" data-reveal>Pick the closest match. We&apos;ll point you to the right service.</p>
        <ServiceSelector />
      </section>

      {/* Services overview */}
      <section className="py-24 sm:py-32 bg-graphite border-y border-white/10 relative overflow-hidden">
        <div aria-hidden="true" data-drift="-220" className="absolute top-10 left-0 font-display font-bold uppercase text-[16vw] leading-none text-white/[0.025] whitespace-nowrap select-none">Doors Gates Docks Doors Gates Docks</div>
        <div className="container-x relative">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div><Heading eyebrow="What we do"><L>What we keep</L><L>running.</L></Heading><p className="mt-5 text-silver max-w-lg" data-reveal>Overhead doors, gates, loading docks and the operators that drive them.</p></div>
            <Button href="/services/" variant="ghost">All services <ArrowUpRight size={16} /></Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-stagger>
            {featured.map((s, i) => (
              <Link key={s.slug} href={`/services/#${s.slug}`} className="group relative p-7 min-h-[300px] flex flex-col bg-ink border border-white/10 hover:border-accent/60 transition-colors duration-500 overflow-hidden">
                <span aria-hidden="true" className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-accent/0 group-hover:bg-accent/15 blur-3xl transition-colors duration-700" />
                <span className="font-display text-xs tracking-widest text-silver-dim">0{i + 1}</span>
                <ServiceArt kind={s.art} className="w-36 text-accent mt-4 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
                <h3 className="font-display text-2xl font-bold mt-auto">{s.name}</h3>
                <p className="mt-2 text-sm text-silver">{s.blurb}</p>
                <ArrowUpRight className="absolute top-6 right-6 text-white/30 group-hover:text-accent group-hover:rotate-45 transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-x py-24 sm:py-32">
        <Heading eyebrow="Why choose us" className="mb-14 max-w-3xl"><L>Built for people who</L><L>answer for the building.</L></Heading>
        <div className="grid md:grid-cols-6 gap-5" data-stagger>
          {[{ i: Gauge, t: "Diagnose first", d: "We find the root cause before recommending a fix, so you're not paying for parts that weren't the problem.", c: "md:col-span-3" },
            { i: FileText, t: "Written, every time", d: "Quotes you can put in front of a council or finance team, and a service report after every visit.", c: "md:col-span-3" },
            { i: ShieldCheck, t: "Safety is the job", d: "High-tension springs and heavy doors in busy buildings. Our technicians are trained for it. [CERTIFICATIONS]", c: "md:col-span-2" },
            { i: ClipboardList, t: "A record for every door", d: "Door-by-door service history: what's been done, what's due and what's coming.", c: "md:col-span-2" },
            { i: Scale, t: "Straight answers", d: "If repair is the smarter spend, we'll say so. If it isn't, we'll show you why.", c: "md:col-span-2" },
            { i: PhoneCall, t: "One number to call", d: `Doors, gates and docks, handled by one team. ${site.phone.display}`, c: "md:col-span-6" }].map((x) => (
            <div key={x.t} className={`${x.c} glass p-8 group hover:border-accent/50 transition-colors`}>
              <x.i className="text-accent mb-8 group-hover:scale-110 transition-transform origin-left" size={32} />
              <h3 className="font-display text-2xl font-bold">{x.t}</h3><p className="mt-2 text-silver max-w-2xl">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strata + Warehouse bands */}
      <section className="border-y border-white/10 bg-graphite">
        <div className="container-x py-24 sm:py-32 grid lg:grid-cols-2 gap-16">
          {[{ e: "For stratas & property managers", h: "Fewer resident complaints. Cleaner council packages.", b: "Parkade doors and gates are the first thing residents notice when they fail. We respond quickly, fix the cause, and send you a written summary you can drop straight into council minutes. Annual maintenance can be quoted as a single budget line, so there are fewer surprise special levies.",
              l: ["Quotes formatted for council approval", "Written service reports for your records and depreciation reports", "Emergency response for gate and door failures", "Maintenance schedules that fit your fiscal year"], cta: "Talk to us about your building", href: "/strata/" },
            { e: "For warehouses & industrial sites", h: "Keep the bays moving.", b: "When a dock door or leveler goes down, freight waits and overtime climbs. We prioritise commercial calls, carry common parts, and set up preventive programs so the next failure is scheduled, not surprising.",
              l: ["Dock levelers, seals, shelters, bumpers and vehicle restraints", "High-cycle overhead and rolling steel doors", "Safety inspections with written findings", "Priority response for maintenance-plan customers [CONFIRM]"], cta: "Request a site assessment", href: "/warehouse/" }].map((x) => (
            <div key={x.h} data-reveal>
              <p className="eyebrow mb-4">{x.e}</p><h2 className="font-display text-3xl sm:text-4xl font-bold uppercase leading-tight">{x.h}</h2>
              <p className="mt-5 text-silver leading-relaxed">{x.b}</p>
              <ul className="mt-6 space-y-3 text-sm text-white/85">{x.l.map((i) => <li key={i} className="flex gap-3"><Check size={16} className="text-accent mt-0.5 shrink-0" />{i}</li>)}</ul>
              <div className="mt-8"><Button href={x.href} variant="ghost">{x.cta} <ArrowUpRight size={16} /></Button></div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency */}
      <section className="relative overflow-hidden bg-accent text-ink">
        <div aria-hidden="true" className="absolute inset-0 panel-lines opacity-20 invert" />
        <div className="container-x relative py-20 sm:py-28 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.24em] uppercase font-bold flex items-center gap-2"><Siren size={16} /> Emergency repair</p>
            <h2 className="h-xl uppercase mt-4" data-lines><L>Door stuck open?</L><L>Gate stuck shut?</L></h2>
            <p className="mt-5 max-w-lg text-ink/80 font-medium">Don&apos;t force it. Call now and we&apos;ll help secure the building and get operations moving. [EMERGENCY HOURS &amp; RESPONSE TIME]</p>
          </div>
          <div className="lg:text-right">
            <a href={site.phone.href} className="inline-flex items-center gap-4 font-display font-bold text-4xl sm:text-5xl hover:underline decoration-4 underline-offset-8"><span className="relative grid place-items-center w-14 h-14 bg-ink text-accent rounded-full"><span className="absolute inset-0 rounded-full border-2 border-ink pulse-ring" /><Phone /></span>{site.phone.display}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-24 sm:py-32">
        <Heading eyebrow="Our process" className="mb-16 max-w-3xl"><L>From call</L><L>to done.</L></Heading>
        <Process />
      </section>

      {/* Maintenance teaser */}
      <section className="py-24 sm:py-32 bg-graphite border-y border-white/10 relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-x relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <Heading eyebrow="Maintenance programs"><L>Stop paying</L><L>for surprises.</L></Heading>
            <p className="mt-6 text-silver max-w-xl leading-relaxed" data-reveal>A preventive maintenance program replaces emergency calls with scheduled visits. We inspect, lubricate, adjust and test every door and dock on a schedule that suits your building. You get written reports and a predictable annual cost.</p>
          </div>
          <div className="lg:text-right" data-reveal><Button href="/maintenance/">See maintenance programs <ArrowUpRight size={16} /></Button></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-24 sm:py-32">
        <Heading eyebrow="Reviews" className="mb-12"><L>What property and facility</L><L>managers say.</L></Heading><Testimonials />
      </section>

      {/* Service area */}
      <section className="py-24 sm:py-32 bg-graphite border-y border-white/10">
        <div className="container-x"><Heading eyebrow="Service area" className="mb-4"><L>Where we work.</L></Heading>
          <p className="mb-12 text-silver max-w-xl" data-reveal>We serve commercial properties across {site.region}. Not sure we cover your site? Call and we&apos;ll tell you straight.</p>
          <ServiceAreaMap /></div>
      </section>

      {/* FAQ */}
      <section className="container-x py-24 sm:py-32 grid lg:grid-cols-[1fr_1.6fr] gap-12">
        <Heading eyebrow="FAQ"><L>Quick</L><L>answers.</L></Heading>
        <Faq />
      </section>

      {/* Final CTA — door lifts to reveal */}
      <DoorReveal>
        <section className="relative py-32 sm:py-44 text-center overflow-hidden bg-ink">
          <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-40" />
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] bg-accent/15 blur-[120px] rounded-full" />
          <div className="container-x relative">
            <p className="eyebrow mb-6">Ready when you are</p>
            <h2 className="h-mega !text-[clamp(2.2rem,7vw,6.2rem)]">Let&apos;s get your<br /><span className="text-accent">doors under control.</span></h2>
            <p className="mt-6 text-silver max-w-xl mx-auto">Send us the details, or call. We&apos;ll tell you what&apos;s wrong, what it costs and what to do next.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact/">Request service</Button>
              <Button href={site.phone.href} variant="ghost"><Phone size={16} /> Call now</Button>
              <Button href="/contact/?service=Preventive%20Maintenance%20Programs" variant="ghost">Book a service visit</Button>
            </div>
          </div>
        </section>
      </DoorReveal>
    </>
  );
}
