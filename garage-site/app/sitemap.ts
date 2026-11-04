import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "strata/", "warehouse/", "services/", "maintenance/", "projects/", "about/", "contact/"].map((p) => ({ url: `${site.url}/${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.8 }));
}
