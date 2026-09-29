import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "访问监控",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrap admin-wrap">
      {children}
    </div>
  );
}
