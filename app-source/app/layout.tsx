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
    default: "Richmond Garage Door Repair & Service | DoorChamp",
    template: `%s | DoorChamp Garage Doors`,
  },
  description:
    "Richmond BC's trusted garage door experts. Same-day repair, spring replacement, opener service, and installation. Family-owned since 2007. Licensed, insured & WCB compliant.",
  openGraph: {
    title: "Richmond Garage Door Repair & Service | DoorChamp",
    description:
      "Richmond BC's trusted garage door experts. Same-day repair, spring replacement, opener service, and installation. Family-owned since 2007.",
    siteName: "DoorChamp Garage Door Service & Repair",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
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
