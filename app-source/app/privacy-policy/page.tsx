import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | DoorChamp",
  description: "How DoorChamp collects, uses, and protects your information. We follow PIPEDA and BC PIPA.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-dark text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-gold font-bold uppercase tracking-wide text-xs mb-3">Legal</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-2">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: June 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10 text-steel leading-relaxed">

          {/* Intro */}
          <p>
            DoorChamp Garage Door Service &amp; Repair (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a family-owned business based in Richmond, British Columbia.
            We respect your privacy and operate in compliance with Canada&apos;s{" "}
            <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) and British Columbia&apos;s{" "}
            <em>Personal Information Protection Act</em> (PIPA).
          </p>

          {/* 1 */}
          <div>
            <h2 className="font-heading font-extrabold text-xl text-navy-dark mb-4">What we collect</h2>
            <ul className="space-y-3">
              <li>
                <strong className="text-navy-dark">When you submit our quote form:</strong>{" "}
                your name, phone number, service address, how you found us, and the description you write about your issue.
              </li>
              <li>
                <strong className="text-navy-dark">When you call or text:</strong>{" "}
                your phone number and what you tell us during the conversation.
              </li>
              <li>
                <strong className="text-navy-dark">Automatically when you visit:</strong>{" "}
                standard server log information (IP address, browser type, page visited, timestamp). Used only for security and to identify abuse — not for profiling.
              </li>
              <li>
                <strong className="text-navy-dark">Through analytics &amp; advertising tools:</strong>{" "}
                If you reach our site from a Google ad, or browse the site, Google Analytics and Google Ads may collect anonymous usage data — pages viewed, time on page, device type, approximate geographic region, and whether you submitted a quote or called us. We use this only to measure which ads and pages bring real customers, so we can stop spending money on ones that don&apos;t.
              </li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-heading font-extrabold text-xl text-navy-dark mb-4">How we use it</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>To call you back and quote your job.</li>
              <li>To dispatch a technician and collect payment.</li>
              <li>To honour warranty claims on installed parts and labour.</li>
              <li>To improve the website and measure which advertising channels actually bring in customers (so we can spend less on ones that don&apos;t).</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-heading font-extrabold text-xl text-navy-dark mb-4">What we never do</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>We never sell your information.</li>
              <li>
                We never share your information with marketers, lead-resellers, or third parties — except service providers strictly necessary to run the business
                (our hosting provider, email provider, payment processors, and Google for the advertising and analytics tools described below).
              </li>
              <li>We never use your information to build a profile about you for any purpose other than serving you better the next time you contact us.</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-heading font-extrabold text-xl text-navy-dark mb-4">Advertising &amp; analytics</h2>
            <p className="mb-4">
              We run paid advertising on Google to reach Richmond-area homeowners and businesses searching for garage door services.
              To make sure we&apos;re spending our budget on ads that actually work — and not paying for clicks that go nowhere — we use two Google tools on this site:
            </p>
            <ul className="space-y-3 mb-4">
              <li>
                <strong className="text-navy-dark">Google Analytics 4 (GA4)</strong> — anonymous, aggregated traffic statistics.
                IP addresses are truncated before storage. Data is retained for 14 months and then automatically deleted.
              </li>
              <li>
                <strong className="text-navy-dark">Google Ads conversion tracking</strong> — a small piece of code that tells Google when somebody
                who clicked one of our ads later submitted a quote or tapped to call. Google does not share who you are with us; we only see counts
                (e.g. &ldquo;12 calls from the spring-repair ad last week&rdquo;).
              </li>
            </ul>
            <p className="mb-3">Both of these tools may set cookies in your browser. If you don&apos;t want them to, you can:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Install the official Google Analytics opt-out browser add-on.</li>
              <li>Manage Google&apos;s advertising cookies at adssettings.google.com.</li>
              <li>Use your browser&apos;s &ldquo;Do Not Track&rdquo; or private-browsing mode — we honour DNT signals where technically possible.</li>
              <li>Block third-party cookies in your browser settings — the site will still work fine.</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-heading font-extrabold text-xl text-navy-dark mb-4">Cookies</h2>
            <p className="mb-3">This site uses two categories of cookies:</p>
            <ul className="space-y-3">
              <li>
                <strong className="text-navy-dark">Strictly necessary</strong> — first-party functional cookies for things like remembering you&apos;ve
                dismissed a privacy notice. No personal data.
              </li>
              <li>
                <strong className="text-navy-dark">Analytics &amp; advertising</strong> — set by Google Analytics 4 and Google Ads as described above.
                You can block these in your browser without breaking the site.
              </li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-heading font-extrabold text-xl text-navy-dark mb-4">How long we keep it</h2>
            <p>
              Quote requests are kept for 24 months. Customer records (invoices, warranty information) are kept for 7 years for tax and warranty
              purposes, then securely deleted. Google Analytics data is retained for 14 months. Google Ads conversion data is retained according
              to Google&apos;s defaults.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-heading font-extrabold text-xl text-navy-dark mb-4">Your rights</h2>
            <p>
              Under PIPEDA / BC PIPA you can request a copy of the information we hold about you, ask us to correct it, or ask us to delete it
              (subject to our legal record-keeping obligations). Email{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-navy font-semibold hover:text-gold transition-colors">
                {siteConfig.email}
              </a>{" "}
              with the subject &ldquo;Privacy Request&rdquo; and we&apos;ll respond within 30 days.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-heading font-extrabold text-xl text-navy-dark mb-4">Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The current version will always be available at{" "}
              <span className="text-navy font-semibold">doorchamp.ca/privacy-policy/</span>.
            </p>
          </div>

          {/* Contact */}
          <div className="rounded-card bg-surface border border-steel/15 p-6">
            <h2 className="font-heading font-extrabold text-xl text-navy-dark mb-4">Contact</h2>
            <p className="font-semibold text-navy-dark">DoorChamp Garage Door Service &amp; Repair</p>
            <p>{siteConfig.address.line}</p>
            <p>
              Email:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-navy font-semibold hover:text-gold transition-colors">
                {siteConfig.email}
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href={siteConfig.phone.href} className="text-navy font-semibold hover:text-gold transition-colors">
                {siteConfig.phone.display}
              </a>
            </p>
          </div>

          <Link href="/" className="inline-flex items-center gap-1 text-gold font-semibold hover:underline text-sm">
            ← Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
