"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const APP_ID = process.env.NEXT_PUBLIC_ANALYTICS_APP_ID || "";
const ENDPOINT = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT || "/api/track";

function sessionId() {
  const key = "an_sid";
  try {
    const existing = localStorage.getItem(key);
    if (existing) return existing;
    const created = crypto.randomUUID();
    localStorage.setItem(key, created);
    return created;
  } catch {
    return `tmp_${Math.random().toString(36).slice(2)}`;
  }
}

function send(body: Record<string, unknown>) {
  if (!APP_ID) return;
  const payload = JSON.stringify(body);
  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      if (navigator.sendBeacon(ENDPOINT, blob)) return;
    }
  } catch {
    // fall through
  }
  void fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
    mode: "cors",
  }).catch(() => undefined);
}

export function AnalyticsTracker() {
  const pathname = usePathname();
  const visibleMs = useRef(0);
  const tickAt = useRef<number | null>(null);
  const pathRef = useRef(pathname);

  useEffect(() => {
    if (!APP_ID || !pathname) return;

    // flush previous path stay
    if (pathRef.current && pathRef.current !== pathname && tickAt.current != null) {
      visibleMs.current += Date.now() - tickAt.current;
      tickAt.current = Date.now();
      send({
        appId: APP_ID,
        type: "leave",
        sessionId: sessionId(),
        path: pathRef.current,
        ms: visibleMs.current,
        ts: Date.now(),
      });
      visibleMs.current = 0;
    }

    pathRef.current = pathname;
    tickAt.current = document.visibilityState === "visible" ? Date.now() : null;

    send({
      appId: APP_ID,
      type: "pageview",
      sessionId: sessionId(),
      path: pathname,
      title: document.title,
      referrer: document.referrer || undefined,
      ts: Date.now(),
    });

    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        if (tickAt.current != null) {
          visibleMs.current += Date.now() - tickAt.current;
          tickAt.current = null;
        }
        send({
          appId: APP_ID,
          type: "leave",
          sessionId: sessionId(),
          path: pathRef.current,
          ms: visibleMs.current,
          ts: Date.now(),
        });
      } else if (tickAt.current == null) {
        tickAt.current = Date.now();
      }
    };

    const heartbeat = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      const now = Date.now();
      if (tickAt.current != null) {
        visibleMs.current += now - tickAt.current;
        tickAt.current = now;
      }
      send({
        appId: APP_ID,
        type: "heartbeat",
        sessionId: sessionId(),
        path: pathRef.current,
        ms: visibleMs.current,
        ts: now,
      });
    }, 15000);

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", onVisibility);

    return () => {
      window.clearInterval(heartbeat);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onVisibility);
    };
  }, [pathname]);

  return null;
}
