import type { MetadataRoute } from "next";

// Required by `output: "export"` — the sitemap must be statically emitted at build
// time rather than resolved per-request.
export const dynamic = "force-static";

const BASE = "https://nolawealthfinancial.com";

/**
 * IMPORTANT: this file overwrites an existing, already-live sitemap.xml in the
 * docroot that listed 16 URLs.
 *
 * nolawealthfinancial.com is not only this marketing site — the same docroot serves
 * several other live surfaces (the dossiers, growth-services, terms, and the previous
 * advisory page). Generating a sitemap from this app's routes alone would have
 * silently dropped 11 live URLs out of the index. So the preserved pages are listed
 * here explicitly alongside the Next routes.
 *
 * If any PRESERVED entry below is ever deleted from the docroot, delete it here too.
 */

// Routes owned by this Next app.
const APP_ROUTES = [
  { path: "/", priority: 1.0 },
  { path: "/services/", priority: 0.9 },
  { path: "/insurance/", priority: 0.9 },
  { path: "/how-we-work/", priority: 0.8 },
  { path: "/why-nola/", priority: 0.8 },
  { path: "/about/", priority: 0.7 },
  { path: "/contact/", priority: 0.7 },
  { path: "/life-insurance-quote/", priority: 0.9 },
  { path: "/life-insurance-calculator/", priority: 0.9 },
];

// Static pages already on disk in the docroot. Not built by this app, still live.
const PRESERVED = [
  { path: "/advisory/", priority: 0.6 },
  { path: "/growth-services/", priority: 0.6 },
  { path: "/growth-services/remote-staffing/", priority: 0.5 },
  { path: "/growth-services/creative-services/", priority: 0.5 },
  { path: "/growth-services/digital-services/", priority: 0.5 },
  { path: "/growth-services/verified-research/", priority: 0.5 },
  { path: "/estate-dossier/", priority: 0.5 },
  { path: "/talent-dossier/", priority: 0.5 },
  { path: "/sourcing-dossier/", priority: 0.5 },
  { path: "/sourcing-dossier/channels/", priority: 0.4 },
  { path: "/sourcing-dossier/market-note/", priority: 0.4 },
  { path: "/terms/", priority: 0.3 },
  { path: "/privacy/", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...APP_ROUTES, ...PRESERVED].map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
