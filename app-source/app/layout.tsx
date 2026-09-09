import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";
import StickyCallBar from "@/components/StickyCallBar";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "DoorChamp Garage Services | Richmond BC",
    template: `%s | DoorChamp`,
  },
  description:
    "Professional garage door repair, installation, opener service and maintenance in Richmond, BC. Fast, reliable service from DoorChamp.",
  openGraph: {
    title: "DoorChamp Garage Services | Richmond BC",
    description:
      "Fast, reliable garage door repair, installation and maintenance services in Richmond, BC and surrounding areas.",
    siteName: "DoorChamp Garage Services",
    type: "website",
    images: [{ url: "/images/og-doorchamp.png", width: 1200, height: 630, alt: "DoorChamp Garage Services" }],
  },
  icons: {
    icon: "/favicon-v2.svg",
    shortcut: "/favicon-v2.svg",
    apple: "/favicon-v2.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@1,700;1,800&family=Manrope:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <LocalBusinessSchema />
      </head>
      <body>
        <EmergencyBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
