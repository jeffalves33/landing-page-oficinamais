import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return ["", "/termos", "/privacidade"].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path ? "yearly" : "weekly", priority: path ? 0.4 : 1 }));
}
