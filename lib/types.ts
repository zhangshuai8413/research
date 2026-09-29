export type Locale = "zh" | "en";
export type Shelf = "industry" | "allocation";

/** Page composition for a chapter. */
export type ChapterLayout = "chart" | "thesis" | "timeline" | "compare" | "matrix";

/** Visual for chart layout — pick what fits the numbers. */
export type ChartKind = "bar" | "pie" | "line";

export type ThesisPoint = {
  judge: string;
  anchor: string;
  so: string;
  /** Optional vivid A-vs-B contrast shown above the anchor. */
  contrast?: {
    left: string;
    leftLabel: string;
    right: string;
    rightLabel: string;
  };
};

export type TimelineEvent = {
  when: string;
  what: string;
};

export type CompareSide = {
  name: string;
  lines: string[];
};

export type MatrixRow = {
  label: string;
  cells: string[];
};

export type ChapterCopy = {
  title: string;
  stance?: string;
  summary?: string;
  categories?: string[];
  seriesName?: string;
  suffix?: string;
  points?: ThesisPoint[];
  timeline?: TimelineEvent[];
  compare?: { left: CompareSide; right: CompareSide };
  matrix?: { headers: string[]; rows: MatrixRow[] };
};

export type Chapter = {
  id: string;
  released: boolean;
  layout?: ChapterLayout;
  chart?: ChartKind;
  values?: number[];
  source?: string;
  zh: ChapterCopy;
  en?: ChapterCopy;
};

export type BookFrame = {
  title: string;
  points: string[];
};

export type Book = {
  id: string;
  shelf: Shelf;
  updated: string;
  /** Industry-specific reading frame shown above the TOC. */
  frame?: { zh: BookFrame; en: BookFrame };
  zh: { title: string; stance: string; blurb: string };
  en: { title: string; stance: string; blurb: string };
  chapters: Chapter[];
};

export type QuestionStatus = "new" | "accepted" | "ignored" | "shipped";

export type Question = {
  id: string;
  createdAt: string;
  locale: Locale;
  bookId: string;
  chapterId: string;
  body: string;
  status: QuestionStatus;
  env: "development" | "test" | "production";
};
