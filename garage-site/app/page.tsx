import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, ShieldCheck, Gauge, Wrench, BadgeCheck, Home as HomeIcon, Building2, Siren } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ServiceSelector from "@/components/ServiceSelector";
import DoorVisualizer from "@/components/DoorVisualizer";
import BeforeAfter from "@/components/BeforeAfter";
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
  title: { absolute: `Garage Door Repair, Installation & Maintenance | ${site.name}` },
  description: "Premium garage door installation, repair and maintenance for homes and businesses. Expert technicians, reliable service and a free quote.",
  alternates: { canonical: "/" },
};

const trust = ["Licensed & insured", "Expert technicians", "Upfront quotes", "Residential & commercial", "Emergency repairs", "Quality parts", "[WARRANTY DETAILS]"];
const featured = services.filter((s) => ["repair", "spring-replacement", "installation", "opener-repair", "commercial-overhead", "loading-dock"].includes(s.slug));

export default function Home() {
  return (
    <>
      <Hero />
      <div id="trust"><Marquee items={trust} /></div>

      {/* Stats */}
      <section className="container-x py-20 sm:py-28" aria-label="Company highlights">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10" data-stagger>
          {[{ n: 12, s: "", l: "Specialist service lines" }, { n: 2, s: "", l: "Markets: home & business" }, { n: 5, s: "", l: "Step diagnose-to-done process" }, { n: 1, s: " call", l: "Away from a fix" }].map((x) => (
            <div key={x.l} className="bg-ink p-6 sm:p-10">
              <p className="font-display font-bold text-5xl sm:text-7xl text-white"><span data-count={x.n} data-suffix={x.s}>{x.n}{x.s}</span></p>
              <p className="mt-3 text-sm text-silver">{x.l}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-silver-dim">[REPLACE WITH REAL STATS: years in business, doors serviced, rating]</p>
      </section>

      {/* Service selector */}
      <section className="container-x pb-24 sm:pb-32">
        <Heading eyebrow="Interactive service finder" className="mb-12 max-w-3xl"><L>What is your</L><L>door doing?</L></Heading>
        <ServiceSelector />
      </section>

      {/* Services overview */}
      <section className="py-24 sm:py-32 bg-graphite border-y border-white/10 relative overflow-hidden">
        <div aria-hidden="true" data-drift="-220" className="absolute top-10 left-0 font-display font-bold uppercase text-[16vw] leading-none text-white/[0.025] whitespace-nowrap select-none">Services Services Services</div>
        <div className="container-x relative">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <Heading eyebrow="What we do"><L>Built around</L><L>your door.</L></Heading>
            <Button href="/services/" variant="ghost">All 12 services <ArrowUpRight size={16} /></Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-stagger>
            {featured.map((s, i) => (
              <Link key={s.slug} href={`/services/#${s.slug}`} className="group relative p-7 min-h-[300px] flex flex-col bg-ink border border-white/10 hover:border-lime/60 transition-colors duration-500 overflow-hidden">
                <span aria-hidden="true" className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-lime/0 group-hover:bg-lime/15 blur-3xl transition-colors duration-700" />
                <span className="font-display text-xs tracking-widest text-silver-dim">0{i + 1}</span>
                <ServiceArt kind={s.art} className="w-36 text-lime mt-4 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105" />
                <h3 className="font-display text-2xl font-bold mt-auto">{s.name}</h3>
                <p className="mt-2 text-sm text-silver">{s.blurb}</p>
                <ArrowUpRight className="absolute top-6 right-6 text-white/30 group-hover:text-lime group-hover:rotate-45 transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-x py-24 sm:py-32">
        <Heading eyebrow="Why choose us" className="mb-14 max-w-3xl"><L>Precision.</L><L>Not guesswork.</L></Heading>
        <div className="grid md:grid-cols-6 gap-5" data-stagger>
          {[{ i: Gauge, t: "Diagnosis first", d: "We find the root cause before recommending a fix — no unnecessary parts.", c: "md:col-span-3" },
            { i: ShieldCheck, t: "Safety obsessed", d: "High-tension springs and heavy doors demand trained hands and proper procedures.", c: "md:col-span-3" },
            { i: Wrench, t: "Quality components", d: "Cycle-rated springs, sealed rollers and reliable openers built to last.", c: "md:col-span-2" },
            { i: BadgeCheck, t: "Clear quotes", d: "You'll know the price and the plan before work begins.", c: "md:col-span-2" },
            { i: Siren, t: "Urgent repairs", d: "Stuck door? Call and we'll prioritise getting you secured.", c: "md:col-span-2" }].map((x) => (
            <div key={x.t} className={`${x.c} glass p-8 group hover:border-lime/50 transition-colors`}>
              <x.i className="text-lime mb-8 group-hover:scale-110 transition-transform origin-left" size={32} />
              <h3 className="font-display text-2xl font-bold">{x.t}</h3><p className="mt-2 text-silver">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Door visualizer */}
      <section className="py-24 sm:py-32 bg-graphite border-y border-white/10">
        <div className="container-x">
          <Heading eyebrow="Door style visualizer" className="mb-12 max-w-3xl"><L>Design your</L><L>perfect door.</L></Heading>
          <DoorVisualizer />
        </div>
      </section>

      {/* Before / after */}
      <section className="container-x py-24 sm:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Heading eyebrow="Featured transformation"><L>Tired door.</L><L>Fresh start.</L></Heading>
          <p className="mt-6 text-silver max-w-md leading-relaxed" data-reveal>Drag the slider to compare a damaged, off-track door with a freshly installed, balanced and tested replacement.</p>
          <div className="mt-8" data-reveal><Button href="/projects/">See more projects <ArrowUpRight size={16} /></Button></div>
        </div>
        <div data-reveal><BeforeAfter /></div>
      </section>

      {/* Residential / Commercial split */}
      <section className="grid lg:grid-cols-2 border-y border-white/10" aria-label="Residential and commercial">
        {[{ href: "/residential/", i: HomeIcon, t: "Residential", d: "Quiet operation, home security and curb appeal — installed and serviced by professionals.", list: ["Repair & springs", "Openers & smart control", "New door installation"] },
          { href: "/commercial/", i: Building2, t: "Commercial & industrial", d: "Reduced downtime and dependable equipment for warehouses, docks and facilities.", list: ["Overhead & roll-up doors", "Loading dock equipment", "Preventive maintenance"] }].map((x, k) => (
          <Link key={x.t} href={x.href} className={`group relative p-10 sm:p-16 min-h-[460px] flex flex-col overflow-hidden ${k ? "bg-graphite lg:border-l border-white/10" : "bg-ink"}`}>
            <div aria-hidden="true" className={`absolute inset-0 ${k ? "grid-bg" : "panel-lines"} opacity-40 group-hover:opacity-70 transition-opacity duration-700`} />
            <x.i className="relative text-lime" size={36} />
            <h3 className="relative font-display text-4xl sm:text-5xl font-bold uppercase mt-6">{x.t}</h3>
            <p className="relative mt-4 text-silver max-w-md">{x.d}</p>
            <ul className="relative mt-6 space-y-2 text-sm text-white/80">{x.list.map((l) => <li key={l} className="flex gap-3"><span className="text-lime">→</span>{l}</li>)}</ul>
            <span className="relative mt-auto pt-10 inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase text-lime group-hover:gap-5 transition-all">Explore <ArrowUpRight size={18} /></span>
          </Link>
        ))}
      </section>

      {/* Emergency */}
      <section className="relative overflow-hidden bg-lime text-black">
        <div aria-hidden="true" className="absolute inset-0 panel-lines opacity-20 invert" />
        <div className="container-x relative py-20 sm:py-28 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <p className="font-display text-xs tracking-[0.24em] uppercase font-bold flex items-center gap-2"><Siren size={16} /> Emergency repair</p>
            <h2 className="h-xl uppercase mt-4" data-lines><L>Door stuck?</L><L>Spring snapped?</L></h2>
            <p className="mt-5 max-w-lg text-black/75 font-medium">Don&apos;t force it. Call now and we&apos;ll help secure your home or business. [EMERGENCY HOURS &amp; RESPONSE TIME]</p>
          </div>
          <div className="lg:text-right">
            <a href={site.phone.href} className="inline-flex items-center gap-4 font-display font-bold text-4xl sm:text-5xl hover:underline decoration-4 underline-offset-8"><span className="relative grid place-items-center w-14 h-14 bg-black text-lime rounded-full"><span className="absolute inset-0 rounded-full border-2 border-black pulse-ring" /><Phone /></span>{site.phone.display}</a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-24 sm:py-32">
        <Heading eyebrow="Our process" className="mb-16 max-w-3xl"><L>From call</L><L>to done.</L></Heading>
        <Process />
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32 bg-graphite border-y border-white/10">
        <div className="container-x"><Heading eyebrow="Customer reviews" className="mb-12"><L>Trusted by</L><L>our neighbours.</L></Heading><Testimonials /></div>
      </section>

      {/* Service area */}
      <section className="container-x py-24 sm:py-32">
        <Heading eyebrow="Service areas" className="mb-12"><L>Where we</L><L>show up.</L></Heading>
        <ServiceAreaMap />
      </section>

      {/* FAQ */}
      <section className="container-x pb-24 sm:pb-32 grid lg:grid-cols-[1fr_1.6fr] gap-12">
        <Heading eyebrow="FAQ"><L>Quick</L><L>answers.</L></Heading>
        <Faq />
      </section>

      {/* Final CTA — garage door lifts to reveal */}
      <DoorReveal>
        <section className="relative py-32 sm:py-44 text-center overflow-hidden bg-ink">
          <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-40" />
          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vw] bg-lime/15 blur-[120px] rounded-full" />
          <div className="container-x relative">
            <p className="eyebrow mb-6">Ready when you are</p>
            <h2 className="h-mega !text-[clamp(2.4rem,8vw,7rem)]">Let&apos;s get your<br /><span className="text-lime">door moving.</span></h2>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button href="/contact/">Get a free quote</Button>
              <Button href={site.phone.href} variant="ghost"><Phone size={16} /> Call now</Button>
              <Button href="/contact/?service=Garage%20Door%20Maintenance" variant="ghost">Book a service</Button>
            </div>
          </div>
        </section>
      </DoorReveal>
    </>
  );
}
