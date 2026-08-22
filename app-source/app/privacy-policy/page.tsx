import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | DoorChamp",
  description: "DoorChamp privacy policy — how we collect, use, and protect your information.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <h1 className="font-heading font-extrabold text-3xl text-navy-dark mb-2">Privacy Policy</h1>
        <p className="text-sm text-steel mb-10">Last updated: August 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-steel leading-relaxed">
          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">1. Who We Are</h2>
            <p>DoorChamp Garage Door Service &amp; Repair operates at {siteConfig.address.line}. We can be reached at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-navy hover:underline">{siteConfig.email}</a> or{" "}
              <a href={siteConfig.phone.href} className="text-navy hover:underline">{siteConfig.phone.display}</a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">2. Information We Collect</h2>
            <p>When you use our website or contact us, we may collect:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Name, phone number, and email address (when you submit a contact or quote form)</li>
              <li>Service address (to schedule a technician visit)</li>
              <li>Details about your garage door issue (to prepare a quote)</li>
              <li>Basic analytics data (page visits, browser type) through standard web logging</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">3. How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Respond to your service request or quote inquiry</li>
              <li>Schedule and coordinate technician visits</li>
              <li>Send appointment confirmations or service follow-ups</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">4. Data Retention</h2>
            <p>We retain contact and service information for as long as necessary to provide our services and meet legal obligations. You may request deletion of your information by contacting us.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">5. Security</h2>
            <p>We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. Our website uses HTTPS encryption.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">6. Your Rights (PIPEDA)</h2>
            <p>Under Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request corrections to inaccurate information</li>
              <li>Withdraw consent for collection or use of your information</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href={`mailto:${siteConfig.email}`} className="text-navy hover:underline">{siteConfig.email}</a>.</p>
          </section>

          <section>
            <h2 className="font-heading font-bold text-xl text-navy-dark mb-3">7. Changes to This Policy</h2>
            <p>We may update this policy from time to time. The current version will always be available at doorchamp.ca/privacy-policy/.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
