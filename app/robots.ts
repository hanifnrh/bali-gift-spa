// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // if you have an API route you don't want crawled
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}