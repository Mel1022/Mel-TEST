import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Garage Door Opener Repair & Installation in Richmond BC",
  description:
    "Garage door opener repair and installation in Richmond BC. All brands including LiftMaster, Chamberlain, Genie. Same-day service. Call DoorChamp: (778) 800-0769.",
  alternates: { canonical: "/garage-door-openers/" },
};

const brands = ["LiftMaster", "Chamberlain", "Genie", "Craftsman", "Marantec", "Linear", "Overhead Door", "Sommer"];

const services = [
  { title: "Opener Repair", body: "Logic board failures, motor issues, drive system problems — we diagnose and repair all opener components." },
  { title: "Remote & Keypad Programming", body: "Lost your remote? Need to add a new vehicle? We program all makes and models including HomeLink and smart apps." },
  { title: "New Opener Installation", body: "Upgrade to a belt-drive, chain-drive, or direct-drive opener with smart home compatibility." },
  { title: "MyQ & Smart Integration", body: "Connect your opener to your phone, smart home hub, or security system. We install and configure MyQ and similar platforms." },
  { title: "Safety Sensor Alignment", body: "Misaligned sensors stop the door mid-close. Quick to fix, important for safety." },
  { title: "Battery Backup Systems", body: "BC power outages happen. We install battery backup openers so you're never locked in your garage." },
];

export default function OpenersPage() {
  return (
    <>
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Same-Day Service · Richmond BC</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Garage Door Opener Repair &amp; Installation
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
            Whether your opener is dead, grinding, or just unresponsive, we repair and service all major brands —
            and install smart, quiet new systems when it&apos;s time to upgrade.
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

      {/* Brands */}
      <section className="bg-white border-b border-steel/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm font-semibold text-steel uppercase tracking-wide mb-5">Brands We Service</p>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((b) => (
              <span key={b} className="rounded-card border border-steel/20 px-4 py-1.5 text-sm font-semibold text-navy bg-surface">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">What We Do</h2>
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

      {/* Why upgrade */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-5">
              When to Repair vs. Replace Your Opener
            </h2>
            <p className="text-white/75 leading-relaxed mb-4">
              If your opener is under 10 years old and the problem is isolated — a dead remote, a failed sensor, a worn gear — repair is almost always the right choice.
            </p>
            <p className="text-white/75 leading-relaxed">
              If it&apos;s over 15 years old, making grinding sounds, or can&apos;t reliably hold modern safety or smart home standards, a new belt-drive unit is a better investment.
              We&apos;ll give you an honest assessment — no upselling.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "Free diagnosis — we tell you repair vs. replace before any work",
              "Belt-drive openers for quiet operation",
              "Battery backup for power outages",
              "Smart home & MyQ compatible installs",
              "Rolling code security for all remotes",
              "Two-year labour warranty on all work",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconCheck className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                <span className="text-white/85 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Opener Issues? We Fix All Brands — Same Day in Richmond."
        body="Call now or request a quote. We carry most common parts on the truck."
      />
    </>
  );
}
