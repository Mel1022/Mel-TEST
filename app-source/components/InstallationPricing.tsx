import Link from "next/link";

const TIERS = [
  {
    title: "Single insulated steel door",
    subtitle: "Most Richmond homes · 8'×7' or 9'×7'",
    price: "From $3,621",
  },
  {
    title: "Double-wide insulated steel",
    subtitle: "16'×7' · most attached garages",
    price: "From $4,532",
  },
  {
    title: "Carriage-house / composite premium",
    subtitle: "Heritage homes · custom looks",
    price: "From $7,241",
  },
];

const INCLUDED =
  "Removal & disposal of old door · spring & track · weather-stripping · finish details · two-year labour warranty.";

export default function InstallationPricing() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-gold-dark mb-3">Honest Pricing</p>
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-dark mb-8">
          Three tiers&nbsp;&mdash;&nbsp;installed.
        </h2>

        <div className="rounded-card border border-steel/15 overflow-hidden">
          {TIERS.map((tier, i) => (
            <div
              key={tier.title}
              className={`flex items-center justify-between gap-6 px-6 py-5 ${
                i < TIERS.length - 1 ? "border-b border-steel/10" : ""
              }`}
            >
              <div>
                <p className="font-semibold text-navy-dark">{tier.title}</p>
                <p className="text-sm text-steel mt-0.5">{tier.subtitle}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-heading font-extrabold text-navy-dark text-lg">{tier.price}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-steel/60 mt-0.5">Installed</p>
              </div>
            </div>
          ))}

          {/* Included footer row */}
          <div className="bg-surface px-6 py-4 border-t border-steel/10">
            <p className="text-sm text-steel leading-relaxed">{INCLUDED}</p>
          </div>
        </div>

        <p className="mt-5 text-xs text-steel/60 leading-relaxed">
          Prices are starting-from estimates for standard residential openings. Structural work,
          non-standard sizes, or opener upgrades may affect the final price — confirmed in writing before work begins.
        </p>

        <div className="mt-6 flex gap-4">
          <Link
            href="/request-a-quote/"
            className="inline-flex items-center justify-center rounded-card bg-gold px-7 py-3 text-sm font-bold text-navy-dark hover:bg-gold-dark hover:text-white transition-colors"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
