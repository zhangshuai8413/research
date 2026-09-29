import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const saved = request.cookies.get("locale")?.value;
    const header = request.headers.get("accept-language") ?? "";
    const locale = saved === "zh" || saved === "en" ? saved : header.toLowerCase().includes("zh") ? "zh" : "en";
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  const locale = pathname.startsWith("/en") ? "en" : pathname.startsWith("/zh") ? "zh" : null;
  if (!locale) return NextResponse.next();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/", "/zh", "/zh/:path*", "/en", "/en/:path*"],
};
