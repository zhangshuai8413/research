import { appendEvent, isAllowedAppId } from "@/lib/analytics/store";
import type { AnalyticsEvent, AnalyticsEventType } from "@/lib/analytics/types";
import { analyticsCorsOrigins } from "@/lib/env";
import { clientKey, rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

const TYPES: AnalyticsEventType[] = ["pageview", "heartbeat", "leave"];

function corsHeaders(request: Request): HeadersInit | null {
  const origin = request.headers.get("origin");
  if (!origin) return {};
  const allowed = analyticsCorsOrigins();
  if (!allowed.includes(origin.replace(/\/$/, ""))) return null;
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

export async function OPTIONS(request: Request) {
  const headers = corsHeaders(request);
  if (!headers) return new Response(null, { status: 403 });
  return new Response(null, { status: 204, headers });
}

export async function POST(request: Request) {
  const headers = corsHeaders(request);
  if (headers === null) {
    return Response.json({ error: "forbidden" }, { status: 403 });
  }

  if (!rateLimit(clientKey(request, "track"), 120, 60_000)) {
    return Response.json({ error: "rate_limited" }, { status: 429, headers });
  }

  const payload = await request.json().catch(() => null);
  if (!payload || typeof payload !== "object") {
    return Response.json({ error: "invalid" }, { status: 400, headers });
  }

  const appId = String((payload as AnalyticsEvent).appId ?? "").trim();
  const type = String((payload as AnalyticsEvent).type ?? "") as AnalyticsEventType;
  const sessionId = String((payload as AnalyticsEvent).sessionId ?? "").trim();
  const pathName = String((payload as AnalyticsEvent).path ?? "").trim().slice(0, 500);
  const title = String((payload as AnalyticsEvent).title ?? "").trim().slice(0, 200);
  const referrer = String((payload as AnalyticsEvent).referrer ?? "").trim().slice(0, 500);
  const msRaw = (payload as AnalyticsEvent).ms;
  const ms = typeof msRaw === "number" && Number.isFinite(msRaw) ? Math.max(0, Math.min(msRaw, 1000 * 60 * 60 * 6)) : undefined;
  const tsRaw = (payload as AnalyticsEvent).ts;
  const ts = typeof tsRaw === "number" && Number.isFinite(tsRaw) ? tsRaw : Date.now();

  if (!isAllowedAppId(appId) || !TYPES.includes(type) || !sessionId || sessionId.length > 80 || !pathName) {
    return Response.json({ error: "invalid" }, { status: 400, headers });
  }

  const event: AnalyticsEvent = {
    appId,
    type,
    sessionId,
    path: pathName,
    title: title || undefined,
    referrer: referrer || undefined,
    ms,
    ts,
    ua: (request.headers.get("user-agent") ?? "").slice(0, 240) || undefined,
  };

  await appendEvent(event);
  return Response.json({ ok: true }, { headers });
}
