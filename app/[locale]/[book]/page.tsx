import { BookCover } from "@/components/BookCover";
import { LayoutGlyph } from "@/components/ChapterSketch";
import { chartOf, layoutOf } from "@/lib/chapter";
import { chapterCopy, getBook, visibleChapters } from "@/lib/content";
import { copyOf, isLocale, presentationLabel } from "@/lib/ui";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; book: string }> }): Promise<Metadata> {
  const { locale, book: bookId } = await params;
  if (!isLocale(locale)) return {};
  const book = getBook(bookId);
  return { title: book ? `${book[locale].title} · ${copyOf(locale).site}` : copyOf(locale).site };
}

export default async function BookPage({ params }: { params: Promise<{ locale: string; book: string }> }) {
  const { locale, book: bookId } = await params;
  if (!isLocale(locale)) notFound();
  const book = getBook(bookId);
  if (!book) notFound();
  const copy = copyOf(locale);
  const text = book[locale];
  const frame = book.frame?.[locale];
  const chapters = visibleChapters(book, locale);

  return (
    <main>
      <p className="crumb"><a href={`/${locale}`}>{copy.backLibrary}</a></p>
      <div className="book-head">
        <BookCover id={book.id} />
        <div>
          <h1>{text.title}</h1>
          <p className="stance">{text.stance}</p>
        </div>
      </div>
      <p className="lead">{text.blurb}</p>
      {frame ? (
        <section className="frame">
          <h2>{frame.title}</h2>
          <ol>
            {frame.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ol>
        </section>
      ) : null}
      <p className="muted">{copy.updated} {book.updated} · {copy.disclaimer}</p>
      <ol className="toc">
        {chapters.map((chapter, index) => {
          const chapterText = chapterCopy(chapter, locale);
          if (!chapterText) return null;
          const title = `${index + 1}. ${chapterText.title}`;
          if (chapter.released) {
            return (
              <li key={chapter.id}>
                <a className="toc-link" href={`/${locale}/${book.id}/${chapter.id}`}>
                  <span className="toc-title">{title}</span>
                  <span className="layout-tag">
                    <LayoutGlyph layout={layoutOf(chapter)} chart={chartOf(chapter)} />
                    {presentationLabel(locale, chapter)}
                  </span>
                </a>
              </li>
            );
          }
          return (
            <li key={chapter.id}>
              <div className="toc-link is-draft">
                <span className="toc-title">{title}</span>
                <span className="muted">{copy.unreleased}</span>
              </div>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
