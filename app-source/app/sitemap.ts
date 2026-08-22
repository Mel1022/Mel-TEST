import { MetadataRoute } from "next";

const BASE = "https://doorchamp.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/garage-door-repair/", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/garage-door-spring-repair/", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/garage-door-openers/", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/garage-door-installation/", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/garage-door-maintenance/", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/commercial/", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/loading-docks/", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/sliding-gates/", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/strata/", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/service-areas/", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about/", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/faq/", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact/", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/request-a-quote/", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy-policy/", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/terms-of-service/", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
