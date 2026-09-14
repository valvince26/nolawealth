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

    // Was `hostname: "**"`, which permitted image loading from any host on the
    // internet. Narrowed to the two hosts actually referenced. Note the site's CSP
    // sets `img-src 'self' data:`, so remote images would be blocked anyway — if
    // nothing here is used, this block can be deleted entirely.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
