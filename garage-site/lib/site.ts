/**
 * ALL BUSINESS DETAILS LIVE HERE. Everything in [BRACKETS] is a placeholder — replace before launch.
 * Website copy is tracked in /COPY.md.
 */
export const site = {
  // Real hero photo: put a file in /public (e.g. "/hero.jpg"), set the path + alt text. Empty = illustrated fallback.
  // Hero VIDEO (preferred over image): put an mp4 in /public (e.g. "/hero.mp4", ~1080p, <8MB, no audio needed).
  // heroPoster is the still shown while it loads and for reduced-motion users. Only use footage you own or are licensed to use.
  heroVideo: "",
  heroPoster: "",
  heroImage: "",
  heroAlt: "Commercial building with an overhead door and loading dock",
  name: "Northline Commercial",
  short: "Northline",
  tagline: "Garage Door Solutions",
  region: "Vancouver and surrounding areas",
  url: "https://example.com", // [WEBSITE URL]
  phone: { display: "(000) 000-0000", href: "tel:+10000000000" }, // [PHONE NUMBER]
  email: "hello@example.com", // [EMAIL ADDRESS]
  address: "[Business Address], Vancouver, BC",
  hours: [
    { days: "Mon – Fri", time: "[Opening] – [Closing]" },
    { days: "Saturday", time: "[Opening] – [Closing]" },
    { days: "Emergency calls", time: "[EMERGENCY HOURS]" },
  ],
  // Optional: set NEXT_PUBLIC_QUOTE_ENDPOINT (e.g. a Formspree URL) to receive form submissions.
  quoteEndpoint: process.env.NEXT_PUBLIC_QUOTE_ENDPOINT || "",
  responseTime: "[RESPONSE TIME]",
  serviceAreas: ["Vancouver", "[Surrounding area 1]", "[Surrounding area 2]", "[Surrounding area 3]", "[Surrounding area 4]", "[Surrounding area 5]", "[Surrounding area 6]"],
};

export const nav = [
  { label: "Strata", href: "/strata/" },
  { label: "Warehouse", href: "/warehouse/" },
  { label: "Services", href: "/services/" },
  { label: "Maintenance", href: "/maintenance/" },
  { label: "Projects", href: "/projects/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
