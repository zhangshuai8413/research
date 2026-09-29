import type { Metadata } from "next";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { isPublicSite } from "@/lib/env";
import "./globals.css";

export const metadata: Metadata = {
  title: "行业笔记",
  description: "把行业研究收成一章一图。",
  robots: isPublicSite() ? undefined : { index: false, follow: false },
};

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
