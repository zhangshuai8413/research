import { ChapterBody } from "@/components/ChapterBody";
import { ChapterSketch, LayoutGlyph } from "@/components/ChapterSketch";
import { QuestionBox } from "@/components/QuestionBox";
import { chartOf, layoutOf } from "@/lib/chapter";
import { chapterCopy, getReleasedChapter, visibleChapters } from "@/lib/content";
import { copyOf, isLocale, presentationLabel } from "@/lib/ui";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; book: string; chapter: string }>;
}): Promise<Metadata> {
  const { locale, book, chapter } = await params;
  if (!isLocale(locale)) return {};
  const found = getReleasedChapter(book, chapter, locale);
  return { title: found ? `${found.copy.title} · ${copyOf(locale).site}` : copyOf(locale).site };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ locale: string; book: string; chapter: string }>;
}) {
  const { locale, book: bookId, chapter: chapterId } = await params;
  if (!isLocale(locale)) notFound();
  const found = getReleasedChapter(bookId, chapterId, locale);
  if (!found) notFound();
  const { book, chapter, copy } = found;
  const ui = copyOf(locale);
  const chapters = visibleChapters(book, locale).filter((item) => item.released && chapterCopy(item, locale));
  const index = chapters.findIndex((item) => item.id === chapter.id);
  const previous = chapters[index - 1];
  const next = chapters[index + 1];
  const layout = layoutOf(chapter);

  return (
    <main>
      <p className="crumb">
        <a href={`/${locale}`}>{ui.site}</a>
        {" / "}
        <a href={`/${locale}/${book.id}`}>{book[locale].title}</a>
        {" / "}
        {ui.chapterOf(index + 1, chapters.length)}
        {" · "}
        <span className="layout-tag">
          <LayoutGlyph layout={layout} chart={chartOf(chapter)} />
          {presentationLabel(locale, chapter)}
        </span>
      </p>
      <h1>{copy.title}</h1>
      <p className="stance">{copy.stance}</p>
      <ChapterSketch bookId={book.id} chapterId={chapter.id} layout={layout} chart={chapter.chart} locale={locale} />
      <QuestionBox
        locale={locale}
        bookId={book.id}
        chapterId={chapter.id}
        title={ui.questionTitle}
        hint={ui.questionHint}
        placeholder={ui.questionPlaceholder}
        submitLabel={ui.questionSubmit}
        doneLabel={ui.questionDone}
        errorLabel={ui.questionError}
      />
      <ChapterBody chapter={chapter} copy={copy} locale={locale} />
      <p>{copy.summary}</p>
      <p className="muted">{ui.source}：{chapter.source}</p>
      <p className="muted">{ui.disclaimer}</p>
      <nav className="nav">
        {previous ? <a href={`/${locale}/${book.id}/${previous.id}`}>{ui.prev}</a> : null}
        {next ? <a href={`/${locale}/${book.id}/${next.id}`}>{ui.next}</a> : null}
        <a href={`/${locale}/${book.id}`}>{ui.backBook}</a>
      </nav>
    </main>
  );
}
