const palette = ["#1e4d3a", "#8a4b32", "#1c1917", "#5f584e", "#3f6f5a", "#a66b4a"];

function formatValue(value: number, suffix: string) {
  const sign = value < 0 ? "−" : "";
  return `${sign}${Math.abs(value)}${suffix}`;
}

export function Chart({
  kind = "bar",
  categories,
  values,
  seriesName,
  suffix,
}: {
  kind?: "bar" | "pie" | "line";
  categories: string[];
  values: number[];
  seriesName: string;
  suffix: string;
}) {
  if (kind === "pie") return <PieChart categories={categories} values={values} seriesName={seriesName} suffix={suffix} />;
  if (kind === "line") return <LineChart categories={categories} values={values} seriesName={seriesName} suffix={suffix} />;
  return <BarChart categories={categories} values={values} seriesName={seriesName} suffix={suffix} />;
}

function BarChart({
  categories,
  values,
  seriesName,
  suffix,
}: {
  categories: string[];
  values: number[];
  seriesName: string;
  suffix: string;
}) {
  const max = Math.max(...values.map((value) => Math.abs(value)), 1);
  return (
    <figure className="chart" aria-label={seriesName}>
      <figcaption className="chart-caption">{seriesName}</figcaption>
      {categories.map((name, index) => {
        const value = values[index] ?? 0;
        const width = `${(Math.abs(value) / max) * 100}%`;
        return (
          <div className="chart-row" key={name}>
            <div className="chart-name">{name}</div>
            <div className="track" aria-hidden="true">
              <div className={value < 0 ? "bar neg" : "bar"} style={{ width }} />
            </div>
            <div className="chart-value">{formatValue(value, suffix)}</div>
          </div>
        );
      })}
    </figure>
  );
}

function PieChart({
  categories,
  values,
  seriesName,
  suffix,
}: {
  categories: string[];
  values: number[];
  seriesName: string;
  suffix: string;
}) {
  const total = values.reduce((sum, value) => sum + Math.abs(value), 0) || 1;
  const cx = 110;
  const cy = 110;
  const r = 78;
  let angle = -Math.PI / 2;
  const slices = values.map((value, index) => {
    const portion = Math.abs(value) / total;
    const sweep = portion * Math.PI * 2;
    const start = angle;
    const end = angle + sweep;
    angle = end;
    const large = sweep > Math.PI ? 1 : 0;
    const x1 = cx + r * Math.cos(start);
    const y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end);
    const y2 = cy + r * Math.sin(end);
    const path =
      portion >= 0.999
        ? `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r} Z`
        : `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
    return {
      path,
      color: palette[index % palette.length],
      name: categories[index] ?? String(index),
      value,
      portion,
    };
  });

  return (
    <figure className="chart pie-chart" aria-label={seriesName}>
      <figcaption className="chart-caption">{seriesName}</figcaption>
      <div className="pie-body">
        <svg viewBox="0 0 220 220" className="pie-svg" aria-hidden="true">
          {slices.map((slice) => (
            <path key={slice.name} d={slice.path} fill={slice.color} />
          ))}
          <circle cx={cx} cy={cy} r="42" fill="#fbf9f5" />
        </svg>
        <ul className="pie-legend">
          {slices.map((slice) => (
            <li key={slice.name}>
              <span className="swatch" style={{ background: slice.color }} />
              <span className="chart-name">{slice.name}</span>
              <span className="chart-value">
                {formatValue(slice.value, suffix)}
                <span className="muted-inline"> · {Math.round(slice.portion * 100)}%</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

function LineChart({
  categories,
  values,
  seriesName,
  suffix,
}: {
  categories: string[];
  values: number[];
  seriesName: string;
  suffix: string;
}) {
  const width = 320;
  const height = 160;
  const padX = 18;
  const padTop = 16;
  const padBottom = 28;
  const min = Math.min(...values, 0);
  const max = Math.max(...values, 1);
  const span = max - min || 1;
  const points = values.map((value, index) => {
    const x =
      categories.length <= 1
        ? width / 2
        : padX + (index / (categories.length - 1)) * (width - padX * 2);
    const y = padTop + (1 - (value - min) / span) * (height - padTop - padBottom);
    return { x, y, value, name: categories[index] ?? String(index) };
  });
  const polyline = points.map((point) => `${point.x},${point.y}`).join(" ");

  return (
    <figure className="chart line-chart" aria-label={seriesName}>
      <figcaption className="chart-caption">{seriesName}</figcaption>
      <svg viewBox={`0 0 ${width} ${height}`} className="line-svg" role="img">
        <line
          x1={padX}
          y1={height - padBottom}
          x2={width - padX}
          y2={height - padBottom}
          stroke="#d9d0c2"
          strokeWidth="1"
        />
        <polyline fill="none" stroke="#1e4d3a" strokeWidth="3" points={polyline} />
        {points.map((point) => (
          <g key={point.name}>
            <circle cx={point.x} cy={point.y} r="4.5" fill="#8a4b32" />
            <text x={point.x} y={height - 8} textAnchor="middle" className="line-label">
              {point.name}
            </text>
          </g>
        ))}
      </svg>
      <ul className="line-legend">
        {points.map((point) => (
          <li key={point.name}>
            <span className="chart-name">{point.name}</span>
            <span className="chart-value">{formatValue(point.value, suffix)}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
