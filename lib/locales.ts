import type { Locale } from "./types";

/**
 * 多语言计划清单。
 *
 * 开发期只启用 ACTIVE_LOCALES（zh / en）。
 * 全书功能与内容定稿后，再把 PLANNED_LOCALES 并入 ACTIVE，
 * 并把顶栏改成下拉菜单。详见 README「开发约定：多语言」。
 */
export const ACTIVE_LOCALES = ["zh", "en"] as const;

export const PLANNED_LOCALES = ["ja", "fr", "de", "es", "ko", "ar"] as const;

export const ALL_LOCALES = [...ACTIVE_LOCALES, ...PLANNED_LOCALES] as const;

export type PlannedLocale = (typeof PLANNED_LOCALES)[number];

export type LocaleMeta = {
  code: string;
  /** Label in the language itself */
  native: string;
  /** Short English name for accessibility */
  english: string;
  dir: "ltr" | "rtl";
  /** Accept-Language prefixes, strongest first */
  accept: string[];
};

export const LOCALE_META: Record<(typeof ALL_LOCALES)[number], LocaleMeta> = {
  zh: { code: "zh", native: "中文", english: "Chinese", dir: "ltr", accept: ["zh"] },
  en: { code: "en", native: "English", english: "English", dir: "ltr", accept: ["en"] },
  ja: { code: "ja", native: "日本語", english: "Japanese", dir: "ltr", accept: ["ja"] },
  fr: { code: "fr", native: "Français", english: "French", dir: "ltr", accept: ["fr"] },
  de: { code: "de", native: "Deutsch", english: "German", dir: "ltr", accept: ["de"] },
  es: { code: "es", native: "Español", english: "Spanish", dir: "ltr", accept: ["es"] },
  ko: { code: "ko", native: "한국어", english: "Korean", dir: "ltr", accept: ["ko"] },
  ar: { code: "ar", native: "العربية", english: "Arabic", dir: "rtl", accept: ["ar"] },
};

export function isActiveLocale(value: string): value is Locale {
  return (ACTIVE_LOCALES as readonly string[]).includes(value);
}

export function localeMeta(code: (typeof ALL_LOCALES)[number]): LocaleMeta {
  return LOCALE_META[code];
}
