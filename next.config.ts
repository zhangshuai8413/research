import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/:locale/metals/iron", destination: "/:locale/mining/rebar", permanent: false },
      { source: "/:locale/metals", destination: "/:locale/mining", permanent: false },
      { source: "/:locale/metals/:chapter", destination: "/:locale/mining/:chapter", permanent: false },
    ];
  },
};

export default nextConfig;

// Enable Cloudflare bindings locally when running `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
