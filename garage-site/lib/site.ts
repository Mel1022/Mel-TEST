/**
 * ALL BUSINESS DETAILS LIVE HERE.
 * Everything in [BRACKETS] is a placeholder — replace before launch.
 */
export const site = {
  name: "[Company Name]",
  short: "Company",
  url: "https://example.com", // [WEBSITE URL]
  phone: { display: "(000) 000-0000", href: "tel:+10000000000" }, // [PHONE NUMBER]
  email: "hello@example.com", // [EMAIL ADDRESS]
  address: "[Business Address], [City], [Province/State]",
  hours: [
    { days: "Mon – Fri", time: "[Opening] – [Closing]" },
    { days: "Saturday", time: "[Opening] – [Closing]" },
    { days: "Sunday", time: "[Closed / Emergency only]" },
  ],
  // Optional: set NEXT_PUBLIC_QUOTE_ENDPOINT (e.g. a Formspree URL) to receive form submissions.
  quoteEndpoint: process.env.NEXT_PUBLIC_QUOTE_ENDPOINT || "",
  serviceAreas: ["[City / Area 1]", "[City / Area 2]", "[City / Area 3]", "[City / Area 4]", "[City / Area 5]", "[City / Area 6]", "[City / Area 7]", "[City / Area 8]"],
};

export const nav = [
  { label: "Services", href: "/services/" },
  { label: "Residential", href: "/residential/" },
  { label: "Commercial", href: "/commercial/" },
  { label: "Projects", href: "/projects/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];
