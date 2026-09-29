import { LanguageSwitch } from "@/components/LanguageSwitch";
import { isPublicSite } from "@/lib/env";
import { copyOf, isLocale } from "@/lib/ui";
import { notFound } from "next/navigation";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = copyOf(locale);

  return (
    <>
      {isPublicSite() ? null : <div className="banner">{copy.testBanner}</div>}
      <div className="wrap">
        <header className="top">
          <a className="brand" href={`/${locale}`}>{copy.site}</a>
          <LanguageSwitch locale={locale} />
        </header>
        {children}
      </div>
    </>
  );
}
