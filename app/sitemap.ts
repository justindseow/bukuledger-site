// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://macrobyte.my";
  const now = new Date();

  const routes = [
    "/",

    // language root pages
    "/en",
    "/bm",
    "/zh",

    // services
    "/en/services",
    "/bm/services",
    "/zh/services",

    // pricing
    "/en/pricing",
    "/bm/pricing",
    "/zh/pricing",

    // contact
    "/en/contact",
    "/bm/contact",
    "/zh/contact",

    // faq
    "/en/faq",
    "/bm/faq",
    "/zh/faq",
    // thank-you pages are excluded (noindex, should not be crawled)
  ];

  // Priority tiers:
  //  1.0 – root (redirect to /en)
  //  0.9 – language home pages (highest-traffic entry points)
  //  0.8 – conversion pages (services, pricing)
  //  0.7 – support / discovery pages (faq, contact)
  const priority = (path: string) => {
    if (path === "/") return 1.0;
    if (["/en", "/bm", "/zh"].includes(path)) return 0.9;
    if (path.endsWith("/services") || path.endsWith("/pricing")) return 0.8;
    return 0.7;
  };

  const changeFrequency = (path: string): "weekly" | "monthly" => {
    if (path === "/" || ["/en", "/bm", "/zh"].includes(path)) return "weekly";
    return "monthly";
  };

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: changeFrequency(path),
    priority: priority(path),
  }));
}