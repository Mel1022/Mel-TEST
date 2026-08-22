import Link from "next/link";
import Logo from "./Logo";
import { siteConfig, primaryNav } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80 pb-24 sm:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
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
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {primaryNav.slice(0, 6).map((item) => (
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
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/service-areas/" className="hover:text-gold transition-colors">Service Areas</Link></li>
              <li><Link href="/about/" className="hover:text-gold transition-colors">About</Link></li>
              <li><Link href="/contact/" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link href="/request-a-quote/" className="hover:text-gold transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wide mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Phone: {siteConfig.phone.display}</li>
              <li>Email: {siteConfig.email}</li>
              <li>{siteConfig.address.line}</li>
              <li>Hours: {siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} DoorChamp. All rights reserved.</p>
          <p>Garage Door Service &amp; Repair</p>
        </div>
      </div>
    </footer>
  );
}
