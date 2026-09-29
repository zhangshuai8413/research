"use client";

import { usePathname } from "next/navigation";

export function LanguageSwitch({ locale }: { locale: "zh" | "en" }) {
  const pathname = usePathname() || `/${locale}`;
  const other = locale === "zh" ? "en" : "zh";
  const href = pathname.replace(/^\/(zh|en)/, `/${other}`);

  function choose(nextLocale: "zh" | "en", target: string) {
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`;
    window.location.href = target;
  }

  return (
    <nav className="langs" aria-label="Language">
      <a aria-current={locale === "zh" ? "page" : undefined} href={pathname} onClick={(event) => { event.preventDefault(); choose("zh", pathname.replace(/^\/(zh|en)/, "/zh")); }}>
        中文
      </a>
      <a aria-current={locale === "en" ? "page" : undefined} href={href} onClick={(event) => { event.preventDefault(); choose("en", pathname.replace(/^\/(zh|en)/, "/en")); }}>
        English
      </a>
    </nav>
  );
}
