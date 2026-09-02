import Link from "next/link";
import Logo from "./Logo";
import { siteConfig, residentialNav } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80 pb-24 sm:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm text-gold font-semibold">{siteConfig.tagline}</p>
            <p className="mt-2 text-sm text-white/60">{siteConfig.subTagline}</p>
            <div className="mt-5 flex items-center gap-3">
              {(["facebook", "instagram", "google"] as const).map((key) => (
                <a
                  key={key}
                  href={siteConfig.social[key]}
                  aria-label={`DoorChamp on ${key}`}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs uppercase text-white/60 hover:text-gold hover:border-gold transition-colors"
                >
                  {key.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wide mb-4">
              Residential
            </h3>
            <ul className="space-y-2 text-sm">
              {residentialNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-gold transition-colors">
                    {item.fullLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wide mb-4">
              Commercial &amp; More
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/commercial/" className="hover:text-gold transition-colors">Commercial Doors</Link></li>
              <li><Link href="/loading-docks/" className="hover:text-gold transition-colors">Loading Docks</Link></li>
              <li><Link href="/sliding-gates/" className="hover:text-gold transition-colors">Sliding Gates</Link></li>
              <li><Link href="/strata/" className="hover:text-gold transition-colors">Strata & Multi-Family</Link></li>
              <li><Link href="/service-areas/" className="hover:text-gold transition-colors">Service Areas</Link></li>
              <li><Link href="/about/" className="hover:text-gold transition-colors">About DoorChamp</Link></li>
              <li><Link href="/faq/" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link href="/request-a-quote/" className="hover:text-gold transition-colors">Request a Quote</Link></li>
              <li><Link href="/partners/" className="hover:text-gold transition-colors">Become a Partner</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wide mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={siteConfig.phone.href} className="hover:text-gold transition-colors font-semibold">
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-white/50">{siteConfig.address.line}</li>
              <li className="text-white/50">Hours: {siteConfig.hours}</li>
            </ul>
            <div className="mt-5 flex flex-col gap-2">
              <Link
                href="/request-a-quote/"
                className="inline-flex items-center justify-center rounded-card bg-gold px-5 py-2.5 text-sm font-bold text-navy-dark hover:bg-gold-dark transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/partners/"
                className="inline-flex items-center justify-center rounded-card border border-white/30 px-5 py-2.5 text-sm font-bold text-white hover:border-gold hover:text-gold transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} DoorChamp Garage Door Service &amp; Repair. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy/" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service/" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
