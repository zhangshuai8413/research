import type { Metadata } from "next";
import { headers } from "next/headers";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { isPublicSite } from "@/lib/env";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host");
  return {
    title: "行业笔记",
    description: "把行业研究收成一章一图。",
    robots: isPublicSite(host) ? undefined : { index: false, follow: false },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>
        {children}
        <AnalyticsTracker />
      </body>
    </html>
  );
}
