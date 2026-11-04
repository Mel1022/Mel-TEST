import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Loader from "@/components/Loader";
import ScrollFX from "@/components/ScrollFX";
import Schema from "@/components/Schema";

export const viewport: Viewport = { themeColor: "#06080a", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `Garage Door Repair, Installation & Service | ${site.name}`, template: `%s | ${site.name}` },
  description: "Professional garage door installation, repair and maintenance for homes and businesses. Expert technicians, reliable service, solutions built to last.",
  openGraph: { type: "website", siteName: site.name, title: `Engineered for performance. Built on reliability. | ${site.name}`, description: "Professional garage door installation, repair and maintenance. Get a free quote today.", images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Garage door service" }] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg" },
};

const bootScript = `(function(){var d=document.documentElement;if(!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('js');setTimeout(function(){if(!window.__fx)d.classList.remove('js')},4000)}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        <Schema />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-lime focus:text-black focus:px-4 focus:py-2">Skip to content</a>
        <Loader />
        <ScrollFX />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
