import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "about", "service-areas", "contact", "request-a-quote"];

  const routes = [
    ...staticRoutes.map((route) => `${siteConfig.url}/${route ? `${route}/` : ""}`),
    ...services.map((s) => `${siteConfig.url}${s.href}`),
  ];

  return routes.map((url) => ({
    url,
    lastModified: new Date().toISOString(),
  }));
}
