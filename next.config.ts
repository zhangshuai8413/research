import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;

// Enable Cloudflare bindings locally when running `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
