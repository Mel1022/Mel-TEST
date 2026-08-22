import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service | DoorChamp",
  description: "DoorChamp terms of service for garage door repair and installation.",
  alternates: { canonical: "/terms-of-service/" },
};

export default function TermsOfServicePage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <h1 className="font-heading font-extrabold text-3xl text-navy-dark mb-2">Terms of Service</h1>
        <p className="text-sm text-steel mb-10">Last updated: August 2025</p>

        <div className="space-y-8 text-steel leading-relaxed">
          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">1. Services</h2>
            <p>DoorChamp Garage Door Service &amp; Repair (&quot;DoorChamp&quot;, &quot;we&quot;, &quot;us&quot;) provides garage door
            repair, installation, maintenance, and related services to residential and commercial customers
            in Richmond, BC and surrounding Metro Vancouver areas.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">2. Quotes and Pricing</h2>
            <p>All quotes are provided before work begins. Final pricing may vary from initial estimates if
            additional issues are discovered during the repair that were not visible at the time of quoting.
            We will always inform you before proceeding with any work beyond the original quote.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">3. Labour Warranty</h2>
            <p>DoorChamp provides a two-year labour warranty on all repair work. This warranty covers defects
            in workmanship. It does not cover damage caused by misuse, accident, force, or normal wear and
            tear beyond the repaired components. Parts carry the manufacturer&apos;s warranty.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">4. Cancellations and Scheduling</h2>
            <p>If you need to cancel or reschedule an appointment, please call us at{" "}
              <a href={siteConfig.phone.href} className="text-navy hover:underline">{siteConfig.phone.display}</a>{" "}
              as soon as possible. We ask for at least 2 hours&apos; notice where possible.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">5. Access and Safety</h2>
            <p>You agree to ensure safe access to your garage door and related equipment for our technicians.
            Please ensure the area is clear of vehicles and obstructions before the technician&apos;s arrival.
            Our technicians may decline to perform work if safety conditions are not met.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">6. Limitation of Liability</h2>
            <p>DoorChamp&apos;s liability for any claim arising from our services is limited to the amount paid for the
            specific service giving rise to the claim. We are not liable for indirect, incidental, or consequential
            damages. DoorChamp carries $5M in general liability insurance.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">7. Contact</h2>
            <p>Questions about these terms? Contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-navy hover:underline">{siteConfig.email}</a>{" "}
              or call <a href={siteConfig.phone.href} className="text-navy hover:underline">{siteConfig.phone.display}</a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
