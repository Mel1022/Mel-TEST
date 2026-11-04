import type { Metadata } from "next";
import { Volume2, Lock, Sparkles, Zap, Hammer, Home } from "lucide-react";
import { PageHero, Heading, L } from "@/components/Section";
import DoorVisualizer from "@/components/DoorVisualizer";
import CTABand from "@/components/CTABand";
import Button from "@/components/Magnetic";
import { services } from "@/lib/services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Residential Garage Door Services",
  description: "Garage door installation, repair, springs and openers for homeowners — quiet operation, better security, great looks and reliable performance.",
  alternates: { canonical: "/residential/" },
};

const pillars = [
  { i: Zap, t: "Convenience", d: "Smooth, dependable operation with smart-ready openers and remotes that always work." },
  { i: Lock, t: "Home security", d: "Solid doors, tuned openers and modern rolling-code security protect your home." },
  { i: Sparkles, t: "Aesthetics", d: "Styles, colours and glazing that lift curb appeal — preview yours below." },
  { i: Volume2, t: "Quiet operation", d: "Belt-drive openers and sealed rollers keep things whisper-quiet, even under bedrooms." },
  { i: Home, t: "Reliable performance", d: "Cycle-rated springs and proper balancing for years of trouble-free use." },
  { i: Hammer, t: "Professional install", d: "Every door leveled, balanced, safety-tested and demonstrated before we leave." },
];

export default function Residential() {
  return (
    <>
      <PageHero eyebrow="For homeowners" title={<><L>A garage door</L><L>you forget about.</L></>} text="Because the best garage door is the one that simply works — quietly, safely and looking great every single day.">
        <Button href="/contact/">Get a free quote</Button><Button href="/services/" variant="ghost">All services</Button>
      </PageHero>
      <section className="container-x py-24"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-stagger>
        {pillars.map((p) => <div key={p.t} className="glass p-8 hover:border-lime/50 transition-colors"><p.i className="text-lime" size={30} /><h3 className="font-display text-2xl font-bold mt-8">{p.t}</h3><p className="mt-2 text-silver">{p.d}</p></div>)}
      </div></section>
      <section className="py-24 bg-graphite border-y border-white/10"><div className="container-x"><Heading eyebrow="Style visualizer" className="mb-12"><L>Pick your look.</L></Heading><DoorVisualizer /></div></section>
      <section className="container-x py-24">
        <Heading eyebrow="Home services" className="mb-10"><L>What we do</L><L>for your home.</L></Heading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10" data-stagger>
          {services.filter((s) => s.group === "Residential").map((s) => (
            <Link key={s.slug} href={`/services/#${s.slug}`} className="bg-ink p-6 hover:bg-graphite transition-colors group"><h3 className="font-display text-xl font-semibold group-hover:text-lime transition-colors">{s.name}</h3><p className="mt-2 text-sm text-silver">{s.blurb}</p></Link>
          ))}
        </div>
      </section>
      <CTABand title="Give your home a better entrance." />
    </>
  );
}
