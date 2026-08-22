import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About DoorChamp",
  description:
    "DoorChamp provides professional garage door repair, opener service, spring replacement, maintenance, and installation with straightforward recommendations.",
  alternates: { canonical: "/about/" },
};

const principles = [
  {
    title: "Diagnose",
    body: "We start by understanding what's actually happening with your door — not guessing based on the most common cause.",
  },
  {
    title: "Explain",
    body: "You'll know what we found, why it matters, and what your options are, in plain language.",
  },
  {
    title: "Fix",
    body: "Once you've decided how to move forward, we complete the work with parts suited to your door.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About DoorChamp"
        headline="When Your Door Needs a Champ."
        support="DoorChamp is a garage door service company built around one idea: understand the problem before recommending a fix."
        ctaLabel="Get a Free Quote"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
            Your Door. Our Expertise.
          </h2>
          <p className="mt-5 text-steel leading-relaxed">
            Your garage door is one of the largest moving systems in your home. It's made up of
            springs, cables, rollers, tracks, and an opener, all working together. When something
            goes wrong, it's rarely just one part — and treating it that way can leave the real
            problem unresolved.
          </p>
          <p className="mt-4 text-steel leading-relaxed">
            DoorChamp approaches every job the same way: inspect the full system, explain what's
            going on, and recommend the repair, replacement, or maintenance that actually fits the
            situation — not the most expensive option, and not a guess.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-gold-dark font-bold uppercase tracking-wide text-sm mb-2">
              How We Work
            </p>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy">
              Diagnose. Explain. Fix.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="rounded-card bg-white border border-steel/15 p-7 text-center">
                <h3 className="font-heading font-bold text-lg text-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading font-extrabold text-2xl text-navy text-center">
            Credentials &amp; Coverage
          </h2>
          <p className="mt-4 text-steel leading-relaxed text-center">
            Licensing, insurance, and warranty details specific to DoorChamp will be listed here
            once confirmed. We won&apos;t make claims about credentials, years in business, or
            guarantees that haven&apos;t been verified.
          </p>
          <ul className="mt-8 space-y-3 max-w-md mx-auto">
            {[
              "[LICENSE / CERTIFICATION INFORMATION]",
              "[INSURANCE INFORMATION]",
              "[WARRANTY DETAILS]",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-card bg-surface border border-dashed border-steel/40 px-4 py-3 text-sm text-steel"
              >
                <IconCheck className="w-4 h-4 text-steel flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Ready to Talk to the Champ?"
        body="Tell us what's going on with your door and we'll help you figure out the next step."
      />
    </>
  );
}
