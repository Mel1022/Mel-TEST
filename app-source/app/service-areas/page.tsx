import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { IconAlert } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "DoorChamp garage door service area coverage — confirmed locations will be listed here.",
  alternates: { canonical: "/service-areas/" },
};

// Example candidate cities only. None are confirmed service areas yet —
// replace or remove before launch based on actual coverage.
const candidateCities = [
  "Vancouver",
  "Burnaby",
  "Richmond",
  "Surrey",
  "Coquitlam",
  "New Westminster",
  "North Vancouver",
  "West Vancouver",
  "Delta",
  "Langley",
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Work"
        headline="Garage Door Service Across [CONFIRMED SERVICE AREAS]"
        support="DoorChamp provides residential garage door repair and service in the areas below, once confirmed."
        ctaLabel="Get a Free Quote"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start gap-3 rounded-card bg-gold/10 border border-gold/30 px-5 py-4">
            <IconAlert className="w-5 h-5 text-gold-dark flex-shrink-0 mt-0.5" />
            <p className="text-sm text-navy/80">
              The cities below are shown as examples of the kind of service-area list this page
              will use. They are <strong>not yet confirmed</strong> service areas. Update this
              list with actual coverage before publishing live.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {candidateCities.map((city) => (
              <div
                key={city}
                className="relative rounded-card bg-white border border-dashed border-steel/40 p-5 text-center"
              >
                <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wide text-steel bg-surface rounded-full px-2 py-0.5">
                  Pending
                </span>
                <h3 className="font-heading font-bold text-navy mt-3">{city}</h3>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-steel max-w-xl mx-auto">
            Don&apos;t see your area listed, or not sure if you&apos;re covered? Reach out and
            we&apos;ll let you know.
          </p>
        </div>
      </section>

      <CTASection
        heading="Ask If We Cover Your Area"
        body="Send us your address and we'll confirm whether DoorChamp services your location."
        primaryLabel="Ask About My Area"
      />
    </>
  );
}
