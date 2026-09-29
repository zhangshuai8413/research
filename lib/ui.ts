import type { Chapter, ChapterLayout, ChartKind, Locale } from "./types";
import { chartOf, layoutOf } from "./chapter";

export const ui = {
  zh: {
    site: "行业笔记",
    introTitle: "一份行业研究，收成能读完的章节。",
    introPoints: [
      "每个行业用最合适的展示：柱状、饼图、折线、结论卡、时间线。",
      "数字写出来源。这是研究整理，不是投资建议。",
      "没看懂可以留一句，下一版按这个问题改。",
    ],
    libraryLead: "选一本书。每本只给出态度，点进去再看目录。",
    industry: "行业",
    allocation: "配置",
    open: "打开",
    updated: "更新于",
    read: "阅读",
    unreleased: "尚未放出",
    backLibrary: "回大厅",
    backBook: "回目录",
    prev: "上一章",
    next: "下一章",
    questionTitle: "还想看懂什么",
    questionHint: "写下没看懂的点。问题只交给作者，用来修订这一章，不会公开显示。",
    questionPlaceholder: "例如：政府拿走的四成是怎么算的？",
    questionSubmit: "提交",
    questionDone: "已收到。这一章之后的修订会参考它。",
    questionError: "没有发送成功，请再试一次。",
    disclaimer: "研究整理，不是投资建议。",
    source: "来源",
    layouts: {
      chart: "对照图",
      thesis: "结论卡",
      timeline: "时间线",
      compare: "双栏对照",
      matrix: "对照表",
    } satisfies Record<ChapterLayout, string>,
    charts: {
      bar: "柱状图",
      pie: "饼图",
      line: "折线图",
    } satisfies Record<ChartKind, string>,
    chapterOf: (index: number, total: number) => `第 ${index} 章 / 共 ${total} 章`,
    testBanner: "测试环境。对外分享请使用 research.alan-design.win。",
    notFound: "没有这一页",
  },
  en: {
    site: "Industry Notes",
    introTitle: "An industry memo, cut into chapters you can finish.",
    introPoints: [
      "Each industry picks its best form: bars, pie, line, thesis cards, or timeline.",
      "Figures name their source. These are research notes, not advice.",
      "If something is still unclear, leave a note. The next revision can use it.",
    ],
    libraryLead: "Pick a book. Each one shows only its stance. The contents come after you open it.",
    industry: "Industries",
    allocation: "Allocation",
    open: "Open",
    updated: "Updated",
    read: "Read",
    unreleased: "Not published yet",
    backLibrary: "Library",
    backBook: "Contents",
    prev: "Previous",
    next: "Next",
    questionTitle: "What is still unclear?",
    questionHint: "Write what you still want explained. Questions go to the author and are not shown publicly.",
    questionPlaceholder: "For example: how is the government share calculated?",
    questionSubmit: "Send",
    questionDone: "Received. Later revisions of this chapter can use it.",
    questionError: "Could not send. Try again.",
    disclaimer: "Research notes, not investment advice.",
    source: "Source",
    layouts: {
      chart: "Chart",
      thesis: "Thesis cards",
      timeline: "Timeline",
      compare: "Side-by-side",
      matrix: "Table",
    } satisfies Record<ChapterLayout, string>,
    charts: {
      bar: "Bar",
      pie: "Pie",
      line: "Line",
    } satisfies Record<ChartKind, string>,
    chapterOf: (index: number, total: number) => `Chapter ${index} of ${total}`,
    testBanner: "Test environment. Public links use research.alan-design.win.",
    notFound: "This page is not here",
  },
} as const;

export function isLocale(value: string): value is Locale {
  return value === "zh" || value === "en";
}

export function copyOf(locale: Locale) {
  return ui[locale];
}

export function presentationLabel(locale: Locale, chapter: Chapter) {
  const layout = layoutOf(chapter);
  if (layout === "chart") return copyOf(locale).charts[chartOf(chapter)];
  return copyOf(locale).layouts[layout];
}
