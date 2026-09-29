import type { ChartKind, Chapter, ChapterCopy, ChapterLayout } from "@/lib/types";

export function layoutOf(chapter: Chapter): ChapterLayout {
  return chapter.layout ?? "chart";
}

export function chartOf(chapter: Chapter): ChartKind {
  return chapter.chart ?? "bar";
}

export function chapterReady(chapter: Chapter, copy: ChapterCopy | undefined): boolean {
  if (!copy?.summary) return false;
  const layout = layoutOf(chapter);
  if (layout === "chart") {
    return Boolean(chapter.values?.length && copy.categories?.length);
  }
  if (layout === "thesis") return Boolean(copy.points?.length);
  if (layout === "timeline") return Boolean(copy.timeline?.length);
  if (layout === "compare") return Boolean(copy.compare);
  if (layout === "matrix") {
    return Boolean(copy.matrix?.headers?.length && copy.matrix.rows?.length);
  }
  return false;
}
