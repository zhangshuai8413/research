import { Chart } from "@/components/Chart";
import { chartOf, layoutOf } from "@/lib/chapter";
import type { Chapter, ChapterCopy, Locale } from "@/lib/types";

export function ChapterBody({
  chapter,
  copy,
  locale,
}: {
  chapter: Chapter;
  copy: ChapterCopy;
  locale: Locale;
}) {
  const layout = layoutOf(chapter);

  if (layout === "thesis" && copy.points) {
    return (
      <ol className="thesis">
        {copy.points.map((point, index) => (
          <li key={point.judge}>
            <div className="thesis-head">
              <span className="thesis-index" aria-hidden="true">
                {index + 1}
              </span>
              <p className="thesis-judge">{point.judge}</p>
            </div>
            {point.contrast ? (
              <div className="thesis-contrast" aria-hidden="true">
                <div className="contrast-side">
                  <div className="contrast-num">{point.contrast.left}</div>
                  <div className="contrast-label">{point.contrast.leftLabel}</div>
                </div>
                <div className="contrast-vs">vs</div>
                <div className="contrast-side is-heavy">
                  <div className="contrast-num">{point.contrast.right}</div>
                  <div className="contrast-label">{point.contrast.rightLabel}</div>
                </div>
              </div>
            ) : null}
            <p className="thesis-anchor">{point.anchor}</p>
            <p className="thesis-so">{point.so}</p>
          </li>
        ))}
      </ol>
    );
  }

  if (layout === "timeline" && copy.timeline) {
    return (
      <ol className="timeline">
        {copy.timeline.map((event) => (
          <li key={`${event.when}-${event.what}`}>
            <div className="when">{event.when}</div>
            <div className="what">{event.what}</div>
          </li>
        ))}
      </ol>
    );
  }

  if (layout === "compare" && copy.compare) {
    const { left, right } = copy.compare;
    return (
      <div className="compare">
        <div className="compare-side">
          <h2>{left.name}</h2>
          <ul>
            {left.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
        <div className="compare-side">
          <h2>{right.name}</h2>
          <ul>
            {right.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (layout === "matrix" && copy.matrix) {
    return (
      <div className="matrix-wrap">
        <table className="matrix">
          <thead>
            <tr>
              <th scope="col">{locale === "zh" ? "维度" : "Dimension"}</th>
              {copy.matrix.headers.map((header) => (
                <th key={header} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {copy.matrix.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {row.cells.map((cell, index) => (
                  <td key={`${row.label}-${index}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <Chart
      kind={chartOf(chapter)}
      categories={copy.categories ?? []}
      values={chapter.values ?? []}
      seriesName={copy.seriesName ?? copy.title}
      suffix={copy.suffix ?? ""}
    />
  );
}
