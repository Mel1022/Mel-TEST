import type { Metadata } from "next";
import { PageHero, Heading, L } from "@/components/Section";
import CTABand from "@/components/CTABand";
import Button from "@/components/Magnetic";
import DoorArt from "@/components/DoorArt";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the professional technicians behind our garage door service — experience, craftsmanship and a customer-first approach.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title={<><L>Craftsmen.</L><L>Not salespeople.</L></>} text="We believe garage door service should be straightforward: diagnose it right, explain it clearly, fix it properly.">
        <Button href="/contact/">Talk to a technician</Button>
      </PageHero>
      <section className="grid lg:grid-cols-2 min-h-[70vh]">
        <div className="relative bg-graphite overflow-hidden min-h-[360px]" data-mask>
          <div className="absolute inset-0 opacity-90"><DoorArt style="flush" color="#2b3238" open={0.5} handles wall="#0c1115" className="w-full h-full object-cover" title="Charcoal garage door half open" /></div>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <p className="absolute bottom-6 left-6 text-xs text-silver-dim">[REPLACE WITH TEAM / SHOP PHOTO]</p>
        </div>
        <div className="p-8 sm:p-16 lg:p-24 flex flex-col justify-center">
          <Heading eyebrow="Our story" className="mb-8"><L>Built on</L><L>trust.</L></Heading>
          <div className="space-y-4 text-silver leading-relaxed max-w-lg" data-reveal>
            <p>[COMPANY STORY — founding year, who you are, what drives the team.]</p>
            <p>Our technicians are trained, equipped and committed to doing the job safely and properly the first time. [CERTIFICATIONS / LICENSES]</p>
          </div>
        </div>
      </section>
      <section className="container-x py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {[["[00]", "Years of experience"], ["[0,000]", "Doors serviced"], ["[0.0]", "Average customer rating"], ["12", "Specialist services"]].map(([n, l]) => (
            <div key={l} className="bg-ink p-8"><p className="font-display font-bold text-5xl sm:text-6xl text-lime">{n}</p><p className="mt-3 text-sm text-silver">{l}</p></div>
          ))}
        </div>
        <p className="mt-3 text-xs text-silver-dim">Replace bracketed values with real figures — count-up animation is built in via data-count.</p>
      </section>
      <section className="container-x pb-24 grid md:grid-cols-3 gap-5" data-stagger>
        {[["Professional technicians", "Trained, background-checked and equipped for safe, efficient work."], ["Commitment to quality", "Quality parts and procedures — no shortcuts that come back to bite you."], ["Customer-first service", "Clear communication, respect for your property and honest advice."]].map(([t, d]) => (
          <div key={t} className="glass p-8"><h3 className="font-display text-2xl font-bold">{t}</h3><p className="mt-3 text-silver">{d}</p></div>
        ))}
      </section>
      <CTABand />
    </>
  );
}
