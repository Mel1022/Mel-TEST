import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { siteConfig } from "@/lib/site-config";
import { IconPhone, IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Commercial Spring Repair Richmond BC | DoorChamp",
  description:
    "High-cycle torsion springs for warehouse, roll-up, and sectional doors. Same-day commercial spring repair in Richmond BC. Licensed, insured, WCB compliant.",
  alternates: { canonical: "/commercial-spring-repair/" },
};

const stockItems = [
  "High-cycle torsion springs (50,000–100,000 cycles)",
  "Steel-door roll-up springs (Mini Storage / warehouse standard)",
  "Sectional commercial doors with vertical track",
  "Cable, drum, and shaft replacement parts",
  "Marantec Opera operators reset and tuned post-repair",
];

const applications = [
  {
    title: "Loading-dock sectional doors",
    body: "East Richmond, Bridgeport, and the YVR-corridor warehouses. High-cycle, often heavy-gauge insulated doors.",
  },
  {
    title: "Automotive bay doors",
    body: "Mechanical shops, body shops, dealerships. Infrequent cycling, often with air-tool hose nearby.",
  },
  {
    title: "Retail roll-up service doors",
    body: "Lansdowne, Aberdeen, and Richmond Centre. Rolling steel curtains and security shutters.",
  },
  {
    title: "Strata parkade gates",
    body: "Often the highest-cycle doors in any portfolio, with multiple residents using them every day.",
  },
  {
    title: "Restaurant & food-service back-of-house",
    body: "High-frequency delivery cycles on overhead doors that can't afford downtime.",
  },
];

const differences = [
  {
    bold: "Heavier-duty hardware.",
    rest: " Commercial springs use thicker wire, larger inner diameters, and harder steel than residential.",
  },
  {
    bold: "Multiple springs are common.",
    rest: " Most commercial doors run 2 or 4 springs to handle the door weight; some heavy industrial doors use 6 or more.",
  },
  {
    bold: "Cycle-count specification matters.",
    rest: " We don't just replace what was there — we'll often recommend a higher cycle rating if the original springs were under-spec'd.",
  },
  {
    bold: "Downtime is the real cost.",
    rest: " The cost of the spring itself is a small fraction of what an unplanned shutdown costs your business. We prioritize commercial calls accordingly.",
  },
  {
    bold: "Documentation is part of the job.",
    rest: " Itemized invoices, labour breakdowns, and photo documentation provided as standard for commercial claims.",
  },
];

const faqs = [
  {
    q: "Why does commercial spring repair cost what it does? It only took like 2 seconds.",
    a: "Commercial springs are larger diameter, thicker wire, and require precise specification matching — not just swapping parts. The labor includes measuring the door weight, calculating the correct cycle rating, and verifying wind-up torque after installation. A mis-specified spring fails early and damages the opener. You're paying for the right job, not clock time.",
  },
  {
    q: "How fast can you respond if our loading-dock door is down?",
    a: "Same-day response throughout Richmond and Metro Vancouver. For commercial clients on a maintenance contract, you get priority dispatch ahead of standard residential calls. Call (778) 800-0769 — we'll give you an honest ETA on the first call.",
  },
  {
    q: "Do you handle high-cycle springs?",
    a: "Yes. We stock 25,000, 50,000, and 100,000+ cycle commercial springs. We'll match the spring to your door's actual duty cycle — not just the minimum that fits — so you're not calling us again in six months.",
  },
  {
    q: "Can you provide a Certificate of Insurance for our property manager?",
    a: "Yes. DoorChamp carries $5M liability insurance and is WCB compliant. We can email a COI same-day in whatever format your property manager requires.",
  },
  {
    q: "Do you bill on account?",
    a: "We offer NET-30 invoicing for established commercial accounts. Call to discuss your volume and billing requirements and we'll set it up before your first job.",
  },
];

export default function CommercialSpringRepairPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white overflow-hidden"
        style={{ backgroundImage: "url('/images/spring-hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy-dark/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-gold font-bold uppercase tracking-wide text-sm mb-3">Commercial · Richmond BC</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white max-w-3xl leading-tight">
            Commercial spring repair.
          </h1>
          <p className="mt-5 text-white/75 text-lg max-w-2xl leading-relaxed">
            High-cycle torsion springs for warehouse, roll-up, and sectional doors. Same day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href={siteConfig.phone.href} className="inline-flex items-center justify-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors">
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link href="/request-a-quote/" className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* What We Stock */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">What We Stock for Commercial</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark max-w-2xl leading-tight mb-6">
            Richmond commercial doors we know.
          </h2>
          <ul className="space-y-3 mb-8">
            {stockItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold flex items-center justify-center mt-0.5">
                  <IconCheck className="w-3 h-3 text-navy-dark" />
                </span>
                <span className="text-sm text-steel leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-steel text-sm leading-relaxed max-w-2xl">
            Pricing on commercial work depends on door weight, spring cycle rating, and site access. We quote on the phone where we can, otherwise on arrival before any work starts.
          </p>
        </div>
      </section>

      {/* Why Specification Matters */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Why Specification Matters</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark max-w-3xl leading-tight mb-6">
            Commercial springs work harder than residential. They need to be specified properly.
          </h2>
          <div className="max-w-3xl space-y-4 text-steel leading-relaxed">
            <p>
              The torsion spring on a residential garage door is rated for around <strong className="text-navy-dark">10,000 cycles</strong>. A commercial loading-dock door at a busy warehouse might cycle 50–100 times a day — meaning a residential-grade spring would fail in well under a year. Commercial springs are heavier-duty, rated for <strong className="text-navy-dark">25,000 to 100,000+ cycles</strong> depending on application, and need to be matched to the actual duty cycle your operation runs.
            </p>
            <p>
              When commercial springs are sized incorrectly — too light for the cycle count, or wrong for the door weight — they fail prematurely, the opener strains, and the whole system wears faster than it should. DoorChamp sizes them properly the first time.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Where We Work</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-10">
            Commercial spring applications we work on daily.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {applications.map((app, i) => (
              <div
                key={app.title}
                className={`rounded-card border border-steel/15 bg-surface p-6${i === applications.length - 1 && applications.length % 3 === 2 ? " sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
              >
                <h3 className="font-heading font-bold text-navy-dark text-base mb-2">{app.title}</h3>
                <p className="text-sm text-steel leading-relaxed">{app.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Commercial Differs */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">How Commercial Differs</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-8">
            What&apos;s different about commercial spring repair.
          </h2>
          <div className="space-y-5 max-w-3xl">
            {differences.map((item) => (
              <div key={item.bold} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold flex items-center justify-center mt-0.5">
                  <IconCheck className="w-3.5 h-3.5 text-navy-dark" />
                </span>
                <p className="text-white/85 text-sm leading-relaxed">
                  <strong className="text-white">{item.bold}</strong>{item.rest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Contracts */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Maintenance Contracts</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark max-w-3xl leading-tight mb-5">
            If your operation depends on a door working, scheduled maintenance pays for itself.
          </h2>
          <p className="text-steel leading-relaxed max-w-2xl mb-8">
            We offer <strong className="text-navy-dark">quarterly or semi-annual maintenance contracts</strong> for commercial clients across Richmond, with locked-in service rates, priority response, and a dedicated point of contact. Most of our commercial clients on contracts run three or fewer reactive calls per year — because we catch wear before it becomes failure.
          </p>
          <a
            href={siteConfig.phone.href}
            className="inline-flex items-center justify-center gap-2 rounded-card border-2 border-navy text-navy px-7 py-3.5 text-sm font-bold hover:bg-navy hover:text-white transition-colors"
          >
            <IconPhone className="w-4 h-4" /> Ask about a maintenance contract
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-4">Common Questions</p>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
            About commercial spring repair.
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-gold font-bold uppercase tracking-widest text-xs mb-4">Call the Champ</p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-3">
            Same family. Same number.<br />Same Richmond crew.
          </h2>
          <p className="text-white/70 text-base mb-8">
            Whether it&apos;s an emergency this morning or a project for next month.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center gap-2 rounded-card bg-gold px-7 py-3.5 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors"
            >
              <IconPhone className="w-4 h-4" /> {siteConfig.phone.display}
            </a>
            <Link
              href="/request-a-quote/"
              className="inline-flex items-center justify-center rounded-card border-2 border-white/40 text-white px-7 py-3.5 text-sm font-bold hover:border-white transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
