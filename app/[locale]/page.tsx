import { BookCover, ReadingSketch } from "@/components/BookCover";
import { books } from "@/lib/content";
import { copyOf, isLocale } from "@/lib/ui";
import type { Shelf } from "@/lib/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return { title: copyOf(locale).site };
}

export default async function HallPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = copyOf(locale);
  const groups: Shelf[] = ["industry", "allocation"];

  return (
    <main>
      <section className="intro">
        <h1>{copy.site}</h1>
        <p className="lead">{copy.introTitle}</p>
        <div className="intro-body">
          <ul>
            {copy.introPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <ReadingSketch />
        </div>
      </section>
      <p className="library-lead">{copy.libraryLead}</p>
      {groups.map((shelf) => (
        <section key={shelf}>
          <h2>{shelf === "industry" ? copy.industry : copy.allocation}</h2>
          <ul className="book-list">
            {books.filter((book) => book.shelf === shelf).map((book) => {
              const text = book[locale];
              return (
                <li key={book.id}>
                  <a className="block" href={`/${locale}/${book.id}`}>
                    <BookCover id={book.id} />
                    <div>
                      <div className="kicker">{copy.updated} {book.updated}</div>
                      <h3 className="stance">{text.title}</h3>
                      <p>{text.stance}</p>
                      <p className="muted">{text.blurb}</p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </main>
  );
}
