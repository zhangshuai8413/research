export type AppEnv = "development" | "test" | "production";

export function appEnv(): AppEnv {
  const value = process.env.APP_ENV;
  if (value === "test" || value === "production") return value;
  return "development";
}

/** True for the public production hostname / APP_ENV. */
export function isPublicHost(host?: string | null) {
  const normalized = (host ?? "").split(":")[0].toLowerCase();
  if (normalized === "research.alan-design.win") return true;
  return appEnv() === "production";
}

export function isPublicSite(host?: string | null) {
  return isPublicHost(host);
}

export function analyticsCorsOrigins(): string[] {
  const raw = process.env.ANALYTICS_CORS_ORIGINS ?? process.env.NEXT_PUBLIC_SITE_URL ?? "";
  return raw
    .split(",")
    .map((item) => item.trim().replace(/\/$/, ""))
    .filter(Boolean);
}
