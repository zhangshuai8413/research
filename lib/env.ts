export type AppEnv = "development" | "test" | "production";

export function appEnv(): AppEnv {
  const value = process.env.APP_ENV;
  if (value === "test" || value === "production") return value;
  return "development";
}

export function isPublicSite() {
  return appEnv() === "production";
}

export function analyticsCorsOrigins(): string[] {
  const raw = process.env.ANALYTICS_CORS_ORIGINS ?? process.env.NEXT_PUBLIC_SITE_URL ?? "";
  return raw
    .split(",")
    .map((item) => item.trim().replace(/\/$/, ""))
    .filter(Boolean);
}
