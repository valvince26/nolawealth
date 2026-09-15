import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the whole site prerenders to flat HTML, so it is served by the
  // existing Caddy file_server on nolawealthfinancial.com. No long-lived Node process
  // is added to the box, and there is nothing to watchdog or respawn.
  output: "export",

  // Matches the live site's existing behavior, which 308-redirects /about -> /about/.
  // Keeping this identical means existing links and indexed URLs keep resolving.
  trailingSlash: true,

  images: {
    // Static export cannot run the Next image optimizer at request time.
    unoptimized: true,

    // `remotePatterns` is gone as of 2026-09-15 and must not come back. The site's
    // enforced CSP is `img-src 'self' data:`, so every remote image was blocked in the
    // browser regardless of what this allowed — the live homepage was shipping 30
    // unsplash.com URLs that no visitor ever saw. All 21 are now checked in under
    // public/img/ and referenced locally. One of them (photo-1542744094-…, Creative
    // Services) had also 404'd upstream, so it was doubly dead; replaced.
    //
    // If a remote host ever genuinely needs allowing, the CSP in
    // still-os-consciousness/core/nolawealth_csp_sync.cjs has to change in the same
    // commit, or the image will silently not render.
  },
};

export default nextConfig;
