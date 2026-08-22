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
    default: "Garage Door Service & Repair | DoorChamp",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Professional garage door repair, spring replacement, opener service, installation and maintenance. When your door needs a champ, call DoorChamp.",
  openGraph: {
    title: "Garage Door Service & Repair | DoorChamp",
    description:
      "Professional garage door repair, spring replacement, opener service, installation and maintenance. When your door needs a champ, call DoorChamp.",
    siteName: siteConfig.name,
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
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600;700&display=swap"
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
