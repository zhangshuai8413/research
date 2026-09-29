export type AnalyticsEventType = "pageview" | "heartbeat" | "leave";

export type AnalyticsEvent = {
  appId: string;
  type: AnalyticsEventType;
  sessionId: string;
  path: string;
  title?: string;
  referrer?: string;
  /** Visible time on this page, in milliseconds. */
  ms?: number;
  ts: number;
  ua?: string;
};

export type PathStat = {
  path: string;
  views: number;
  avgStaySec: number;
};

export type BookStat = {
  bookId: string;
  views: number;
  sessions: number;
  avgStaySec: number;
  chapterViews: number;
  tocViews: number;
};

export type WorkStat = {
  workId: string;
  path: string;
  views: number;
  sessions: number;
  avgStaySec: number;
};

export type DaySummary = {
  date: string;
  appId: string;
  pageviews: number;
  sessions: number;
  avgStaySec: number;
  totalStaySec: number;
  topPaths: PathStat[];
};

export type RangeSummary = {
  appId: string;
  profile: "research" | "logoDesign" | "generic";
  from: string;
  to: string;
  pageviews: number;
  sessions: number;
  avgStaySec: number;
  /** Share of page stays shorter than 5 seconds. */
  bounceRate: number;
  locales: Array<{ locale: string; views: number; sessions: number }>;
  funnel: {
    hall: number;
    book: number;
    chapter: number;
  };
  /** logoDesign: home / about / work detail */
  siteFunnel: {
    home: number;
    about: number;
    work: number;
    other: number;
  };
  books: BookStat[];
  topChapters: Array<{
    bookId: string;
    chapterId: string;
    path: string;
    views: number;
    avgStaySec: number;
  }>;
  works: WorkStat[];
  days: DaySummary[];
  topPaths: PathStat[];
};
