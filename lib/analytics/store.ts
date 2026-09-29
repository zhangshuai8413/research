import { promises as fs } from "fs";
import path from "path";
import type { AnalyticsEvent, BookStat, DaySummary, PathStat, RangeSummary } from "./types";

const ROOT = path.join(process.cwd(), "data", "analytics");

function dayKey(ts: number) {
  return new Date(ts).toISOString().slice(0, 10);
}

function fileFor(appId: string, date: string) {
  return path.join(ROOT, appId, `${date}.jsonl`);
}

export function allowedAppIds(): string[] {
  const raw = process.env.ANALYTICS_APP_IDS ?? "research,logoDesign";
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function isAllowedAppId(appId: string) {
  return allowedAppIds().includes(appId);
}

export async function appendEvent(event: AnalyticsEvent) {
  const date = dayKey(event.ts);
  const file = fileFor(event.appId, date);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.appendFile(file, `${JSON.stringify(event)}\n`, "utf8");
}

async function readDayEvents(appId: string, date: string): Promise<AnalyticsEvent[]> {
  try {
    const text = await fs.readFile(fileFor(appId, date), "utf8");
    const events: AnalyticsEvent[] = [];
    for (const raw of text.split("\n")) {
      const line = raw.trim();
      if (!line) continue;
      try {
        events.push(JSON.parse(line) as AnalyticsEvent);
      } catch {
        // skip corrupt lines
      }
    }
    return events;
  } catch {
    return [];
  }
}

type RouteInfo = {
  locale?: string;
  kind: "hall" | "book" | "chapter" | "other";
  bookId?: string;
  chapterId?: string;
};

type SiteRoute = {
  kind: "home" | "about" | "work" | "other";
  workId?: string;
};

function profileOf(appId: string): RangeSummary["profile"] {
  if (appId === "research") return "research";
  if (appId === "logoDesign") return "logoDesign";
  return "generic";
}

function parseRoute(pathname: string): RouteInfo {
  const parts = pathname.split("?")[0].split("/").filter(Boolean);
  if (parts.length === 0) return { kind: "other" };
  const locale = parts[0] === "zh" || parts[0] === "en" ? parts[0] : undefined;
  if (!locale) return { kind: "other" };
  if (parts.length === 1) return { locale, kind: "hall" };
  if (parts.length === 2) return { locale, kind: "book", bookId: parts[1] };
  if (parts.length >= 3) {
    return { locale, kind: "chapter", bookId: parts[1], chapterId: parts[2] };
  }
  return { locale, kind: "other" };
}

function parseSiteRoute(fullPath: string): SiteRoute {
  const pathname = fullPath.split("?")[0] || "/";
  if (pathname === "/" || pathname === "") return { kind: "home" };
  if (pathname === "/about" || pathname === "/about/") return { kind: "about" };
  const work = pathname.match(/^\/works\/([a-zA-Z0-9_-]+)\/?$/);
  if (work) return { kind: "work", workId: work[1] };
  return { kind: "other" };
}

function stayMap(events: AnalyticsEvent[]) {
  const stayByKey = new Map<string, number>();
  for (const event of events) {
    if ((event.type === "leave" || event.type === "heartbeat") && typeof event.ms === "number" && event.ms >= 0) {
      const key = `${event.sessionId}::${event.path}`;
      stayByKey.set(key, Math.max(stayByKey.get(key) ?? 0, event.ms));
    }
  }
  return stayByKey;
}

function avg(list: number[]) {
  if (!list.length) return 0;
  return Math.round(list.reduce((a, b) => a + b, 0) / list.length);
}

function summarizeDay(appId: string, date: string, events: AnalyticsEvent[]): DaySummary {
  const pageviews = events.filter((event) => event.type === "pageview").length;
  const sessions = new Set(events.map((event) => event.sessionId)).size;
  const stayByKey = stayMap(events);
  const stays = [...stayByKey.values()];
  const totalStaySec = Math.round(stays.reduce((sum, ms) => sum + ms, 0) / 1000);
  const avgStaySec = stays.length ? Math.round(totalStaySec / stays.length) : 0;

  const pathViews = new Map<string, number>();
  const pathStay = new Map<string, number[]>();
  for (const event of events) {
    if (event.type === "pageview") pathViews.set(event.path, (pathViews.get(event.path) ?? 0) + 1);
  }
  for (const [key, ms] of stayByKey) {
    const pathName = key.split("::").slice(1).join("::");
    const list = pathStay.get(pathName) ?? [];
    list.push(ms);
    pathStay.set(pathName, list);
  }

  const topPaths: PathStat[] = [...pathViews.entries()]
    .map(([pathName, views]) => ({
      path: pathName,
      views,
      avgStaySec: Math.round(avg(pathStay.get(pathName) ?? []) / 1000),
    }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 20);

  return { date, appId, pageviews, sessions, avgStaySec, totalStaySec, topPaths };
}

function eachDate(from: string, to: string) {
  const out: string[] = [];
  const cursor = new Date(`${from}T00:00:00.000Z`);
  const end = new Date(`${to}T00:00:00.000Z`);
  while (cursor <= end) {
    out.push(cursor.toISOString().slice(0, 10));
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return out;
}

export async function summarizeRange(appId: string, from: string, to: string): Promise<RangeSummary> {
  const days: DaySummary[] = [];
  const allEvents: AnalyticsEvent[] = [];

  for (const date of eachDate(from, to)) {
    const events = await readDayEvents(appId, date);
    allEvents.push(...events);
    if (!events.length) {
      days.push({
        date,
        appId,
        pageviews: 0,
        sessions: 0,
        avgStaySec: 0,
        totalStaySec: 0,
        topPaths: [],
      });
      continue;
    }
    days.push(summarizeDay(appId, date, events));
  }

  const pageviews = allEvents.filter((event) => event.type === "pageview").length;
  const sessions = new Set(allEvents.map((event) => event.sessionId)).size;
  const stayByKey = stayMap(allEvents);
  const stays = [...stayByKey.values()];
  const avgStaySec = stays.length ? Math.round(avg(stays) / 1000) : 0;
  const bounceRate = stays.length
    ? Math.round((stays.filter((ms) => ms < 5000).length / stays.length) * 100)
    : 0;

  const localeMap = new Map<string, { views: number; sessions: Set<string> }>();
  const funnel = { hall: 0, book: 0, chapter: 0 };
  const siteFunnel = { home: 0, about: 0, work: 0, other: 0 };
  const bookMap = new Map<string, { views: number; sessions: Set<string>; stays: number[]; chapterViews: number; tocViews: number }>();
  const chapterMap = new Map<string, { bookId: string; chapterId: string; path: string; views: number; stays: number[] }>();
  const workMap = new Map<string, { path: string; views: number; sessions: Set<string>; stays: number[] }>();
  const pathViews = new Map<string, number>();
  const pathStay = new Map<string, number[]>();

  for (const event of allEvents) {
    if (event.type !== "pageview") continue;
    pathViews.set(event.path, (pathViews.get(event.path) ?? 0) + 1);

    const site = parseSiteRoute(event.path);
    siteFunnel[site.kind] += 1;
    if (site.kind === "work" && site.workId) {
      const work = workMap.get(site.workId) ?? {
        path: event.path.split("?")[0],
        views: 0,
        sessions: new Set<string>(),
        stays: [],
      };
      work.views += 1;
      work.sessions.add(event.sessionId);
      workMap.set(site.workId, work);
    }

    const route = parseRoute(event.path);
    const locale = route.locale ?? "other";
    const localeRow = localeMap.get(locale) ?? { views: 0, sessions: new Set<string>() };
    localeRow.views += 1;
    localeRow.sessions.add(event.sessionId);
    localeMap.set(locale, localeRow);

    if (route.kind === "hall") funnel.hall += 1;
    if (route.kind === "book") funnel.book += 1;
    if (route.kind === "chapter") funnel.chapter += 1;

    if (route.bookId) {
      const book = bookMap.get(route.bookId) ?? {
        views: 0,
        sessions: new Set<string>(),
        stays: [],
        chapterViews: 0,
        tocViews: 0,
      };
      book.views += 1;
      book.sessions.add(event.sessionId);
      if (route.kind === "book") book.tocViews += 1;
      if (route.kind === "chapter") book.chapterViews += 1;
      bookMap.set(route.bookId, book);
    }

    if (route.kind === "chapter" && route.bookId && route.chapterId) {
      const key = `${route.bookId}/${route.chapterId}`;
      const chapter = chapterMap.get(key) ?? {
        bookId: route.bookId,
        chapterId: route.chapterId,
        path: event.path,
        views: 0,
        stays: [],
      };
      chapter.views += 1;
      chapterMap.set(key, chapter);
    }
  }

  for (const [key, ms] of stayByKey) {
    const pathName = key.split("::").slice(1).join("::");
    const list = pathStay.get(pathName) ?? [];
    list.push(ms);
    pathStay.set(pathName, list);
    const route = parseRoute(pathName);
    if (route.bookId) {
      const book = bookMap.get(route.bookId);
      if (book) book.stays.push(ms);
    }
    if (route.kind === "chapter" && route.bookId && route.chapterId) {
      const chapter = chapterMap.get(`${route.bookId}/${route.chapterId}`);
      if (chapter) chapter.stays.push(ms);
    }
    const site = parseSiteRoute(pathName);
    if (site.kind === "work" && site.workId) {
      const work = workMap.get(site.workId);
      if (work) work.stays.push(ms);
    }
  }

  const topPaths: PathStat[] = [...pathViews.entries()]
    .map(([pathName, views]) => ({
      path: pathName,
      views,
      avgStaySec: Math.round(avg(pathStay.get(pathName) ?? []) / 1000),
    }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 20);

  const books: BookStat[] = [...bookMap.entries()]
    .map(([bookId, value]) => ({
      bookId,
      views: value.views,
      sessions: value.sessions.size,
      avgStaySec: Math.round(avg(value.stays) / 1000),
      chapterViews: value.chapterViews,
      tocViews: value.tocViews,
    }))
    .sort((a, b) => b.views - a.views);

  const topChapters = [...chapterMap.values()]
    .map((row) => ({
      bookId: row.bookId,
      chapterId: row.chapterId,
      path: row.path,
      views: row.views,
      avgStaySec: Math.round(avg(row.stays) / 1000),
    }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 15);

  const works = [...workMap.entries()]
    .map(([workId, value]) => ({
      workId,
      path: value.path,
      views: value.views,
      sessions: value.sessions.size,
      avgStaySec: Math.round(avg(value.stays) / 1000),
    }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 20);

  const locales = [...localeMap.entries()]
    .map(([locale, value]) => ({
      locale,
      views: value.views,
      sessions: value.sessions.size,
    }))
    .sort((a, b) => b.views - a.views);

  return {
    appId,
    profile: profileOf(appId),
    from,
    to,
    pageviews,
    sessions,
    avgStaySec,
    bounceRate,
    locales,
    funnel,
    siteFunnel,
    books,
    topChapters,
    works,
    days,
    topPaths,
  };
}
