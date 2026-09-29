const ink = "#1c1917";
const green = "#1e4d3a";
const copper = "#8a4b32";
const paper = "#f7f3eb";
const line = "#d9d0c2";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg className="chapter-sketch" viewBox="0 0 320 88" aria-hidden="true">
      <rect x="1" y="1" width="318" height="86" rx="12" fill={paper} stroke={line} />
      {children}
    </svg>
  );
}

/** Compact layout glyph for TOC / crumbs. */
export function LayoutGlyph({
  layout,
  chart,
}: {
  layout: string;
  chart?: string;
}) {
  const kind = layout === "chart" ? chart ?? "bar" : layout;
  return (
    <svg className="layout-glyph" viewBox="0 0 20 20" aria-hidden="true">
      {kind === "bar" ? (
        <>
          <rect x="3" y="11" width="3.5" height="6" rx="0.8" fill={green} />
          <rect x="8.5" y="7" width="3.5" height="10" rx="0.8" fill={copper} />
          <rect x="14" y="4" width="3.5" height="13" rx="0.8" fill={ink} />
        </>
      ) : null}
      {kind === "line" ? (
        <path d="M3 14 L7 10 L11 12 L17 5" fill="none" stroke={green} strokeWidth="2" strokeLinecap="round" />
      ) : null}
      {kind === "pie" ? (
        <>
          <circle cx="10" cy="10" r="7" fill="none" stroke={line} strokeWidth="2" />
          <path d="M10 10 L10 3 A7 7 0 0 1 16.5 13 Z" fill={copper} />
        </>
      ) : null}
      {kind === "thesis" ? (
        <>
          <rect x="3" y="4" width="14" height="4" rx="1" fill={green} />
          <rect x="3" y="10" width="10" height="2.5" rx="1" fill={line} />
          <rect x="3" y="14.5" width="12" height="2.5" rx="1" fill={line} />
        </>
      ) : null}
      {kind === "compare" ? (
        <>
          <rect x="2" y="4" width="7" height="12" rx="1.5" fill="none" stroke={green} strokeWidth="1.5" />
          <rect x="11" y="4" width="7" height="12" rx="1.5" fill="none" stroke={copper} strokeWidth="1.5" />
        </>
      ) : null}
      {kind === "timeline" ? (
        <>
          <line x1="4" y1="10" x2="16" y2="10" stroke={line} strokeWidth="2" />
          <circle cx="5" cy="10" r="2" fill={green} />
          <circle cx="10" cy="10" r="2" fill={copper} />
          <circle cx="15" cy="10" r="2" fill={ink} />
        </>
      ) : null}
      {kind === "matrix" ? (
        <>
          <rect x="3" y="4" width="14" height="12" rx="1.5" fill="none" stroke={green} strokeWidth="1.5" />
          <line x1="3" y1="8" x2="17" y2="8" stroke={line} strokeWidth="1.2" />
          <line x1="8" y1="4" x2="8" y2="16" stroke={line} strokeWidth="1.2" />
        </>
      ) : null}
    </svg>
  );
}

function sketchFor(bookId: string, chapterId: string) {
  if (bookId === "midea") {
    if (chapterId === "heatwave") {
      return (
        <Frame>
          <circle cx="56" cy="28" r="14" fill="none" stroke={copper} strokeWidth="2.5" />
          {[0, 45, 90, 135].map((deg) => {
            const rad = (deg * Math.PI) / 180;
            return (
              <line
                key={deg}
                x1={56 + Math.cos(rad) * 18}
                y1={28 + Math.sin(rad) * 18}
                x2={56 + Math.cos(rad) * 24}
                y2={28 + Math.sin(rad) * 24}
                stroke={copper}
                strokeWidth="2"
              />
            );
          })}
          <rect x="120" y="22" width="18" height="48" rx="3" fill={green} opacity="0.35" />
          <rect x="148" y="34" width="18" height="36" rx="3" fill={green} opacity="0.55" />
          <rect x="176" y="42" width="18" height="28" rx="3" fill={green} />
          <rect x="204" y="50" width="18" height="20" rx="3" fill={copper} />
          <rect x="232" y="18" width="18" height="52" rx="3" fill={ink} />
          <text x="120" y="82" fill={ink} fontSize="10" fontFamily="ui-sans-serif, system-ui">
            EU 20% → US/JP 90%
          </text>
        </Frame>
      );
    }
    if (chapterId === "portasplit") {
      return (
        <Frame>
          <rect x="40" y="18" width="70" height="52" rx="8" fill="none" stroke={green} strokeWidth="2.5" />
          <path d="M52 44 Q75 24 98 44" fill="none" stroke={copper} strokeWidth="3" />
          <circle cx="75" cy="44" r="4" fill={ink} />
          <path d="M130 30 h90" stroke={line} strokeWidth="2" strokeDasharray="4 3" />
          <rect x="130" y="40" width="40" height="28" rx="4" fill={paper} stroke={copper} strokeWidth="2" />
          <text x="138" y="58" fill={copper} fontSize="11" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
            10m
          </text>
          <text x="180" y="58" fill={ink} fontSize="12" fontFamily="ui-sans-serif, system-ui">
            DIY vs &gt;€1k install
          </text>
        </Frame>
      );
    }
    if (chapterId === "pulse") {
      return (
        <Frame>
          <rect x="36" y="50" width="28" height="22" rx="3" fill={green} />
          <rect x="76" y="36" width="28" height="36" rx="3" fill={copper} />
          <rect x="116" y="28" width="28" height="44" rx="3" fill={green} />
          <rect x="156" y="20" width="28" height="52" rx="3" fill={ink} />
          <path d="M200 58 L230 30 L258 42 L290 18" fill="none" stroke={copper} strokeWidth="3" strokeLinecap="round" />
          <circle cx="290" cy="18" r="4" fill={green} />
        </Frame>
      );
    }
    if (chapterId === "europe") {
      return (
        <Frame>
          <path d="M40 60 L100 48 L160 40 L220 28 L280 22" fill="none" stroke={green} strokeWidth="3" strokeLinecap="round" />
          <circle cx="100" cy="48" r="5" fill={paper} stroke={copper} strokeWidth="2" />
          <circle cx="280" cy="22" r="6" fill={copper} />
          <text x="90" y="72" fill={ink} fontSize="11" fontFamily="ui-sans-serif, system-ui">
            27%
          </text>
          <text x="262" y="48" fill={ink} fontSize="11" fontFamily="ui-sans-serif, system-ui">
            41%
          </text>
        </Frame>
      );
    }
    if (chapterId === "magnitude") {
      return (
        <Frame>
          <rect x="28" y="18" width="120" height="52" rx="8" fill="none" stroke={green} strokeWidth="2" />
          <text x="48" y="48" fill={green} fontSize="13" fontFamily="ui-sans-serif, system-ui" fontWeight="650">
            Pulse ✓
          </text>
          <text x="160" y="48" fill={copper} fontSize="16" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
            vs
          </text>
          <rect x="188" y="18" width="110" height="52" rx="8" fill="none" stroke={copper} strokeWidth="2" />
          <text x="206" y="48" fill={copper} fontSize="13" fontFamily="ui-sans-serif, system-ui" fontWeight="650">
            Group mid-SD
          </text>
        </Frame>
      );
    }
    if (chapterId === "overseas") {
      return (
        <Frame>
          <circle cx="70" cy="44" r="28" fill="none" stroke={green} strokeWidth="2.5" />
          <path d="M70 16 A28 28 0 0 1 98 44 L70 44 Z" fill={copper} opacity="0.85" />
          <text x="120" y="36" fill={ink} fontSize="12" fontFamily="ui-sans-serif, system-ui">
            Overseas ~43% of group
          </text>
          <text x="120" y="56" fill={green} fontSize="12" fontFamily="ui-sans-serif, system-ui">
            OBM &gt;45% of OH smart home
          </text>
        </Frame>
      );
    }
    if (chapterId === "outlook") {
      return (
        <Frame>
          <path d="M36 62 Q100 58 150 44 T290 20" fill="none" stroke={green} strokeWidth="3" />
          <circle cx="36" cy="62" r="4" fill={copper} />
          <circle cx="290" cy="20" r="5" fill={ink} />
          <text x="40" y="80" fill={ink} fontSize="11" fontFamily="ui-sans-serif, system-ui">
            2025 $265bn → 2034 $464bn · CAGR ~6.4%
          </text>
        </Frame>
      );
    }
    if (chapterId === "ranking") {
      return (
        <Frame>
          {[
            { y: 22, w: 220, label: "Midea" },
            { y: 40, w: 170, label: "Haier" },
            { y: 58, w: 120, label: "TCL/Hisense" },
            { y: 76, w: 70, label: "Gree" },
          ].map((row, i) => (
            <g key={row.label}>
              <rect x="70" y={row.y - 8} width={row.w} height="12" rx="3" fill={i === 0 ? green : copper} opacity={1 - i * 0.18} />
              <text x="16" y={row.y + 2} fill={ink} fontSize="10" fontFamily="ui-sans-serif, system-ui">
                {row.label}
              </text>
            </g>
          ))}
        </Frame>
      );
    }
    if (chapterId === "risks") {
      return (
        <Frame>
          {[36, 96, 156, 216, 276].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy="40" r="16" fill="none" stroke={i % 2 ? copper : green} strokeWidth="2" />
              <text x={x - 4} y="45" fill={ink} fontSize="12" fontFamily="ui-sans-serif, system-ui" fontWeight="650">
                {i + 1}
              </text>
            </g>
          ))}
          <text x="90" y="76" fill={ink} fontSize="11" fontFamily="ui-sans-serif, system-ui">
            F-Gas · Tariff · Cool summer · Power · Incumbents
          </text>
        </Frame>
      );
    }
    if (chapterId === "verdict") {
      return (
        <Frame>
          {["Fuse", "Winner", "Quality", "Field"].map((label, i) => {
            const x = 36 + i * 72;
            return (
              <g key={label}>
                <rect x={x} y="18" width="58" height="40" rx="8" fill={i === 1 ? green : paper} stroke={i === 1 ? green : line} strokeWidth="2" />
                <text
                  x={x + 29}
                  y="42"
                  textAnchor="middle"
                  fill={i === 1 ? paper : ink}
                  fontSize="11"
                  fontFamily="ui-sans-serif, system-ui"
                  fontWeight="650"
                >
                  {label}
                </text>
              </g>
            );
          })}
        </Frame>
      );
    }
  }

  return null;
}

function layoutFallback(layout: string, chart?: string) {
  const kind = layout === "chart" ? chart ?? "bar" : layout;
  if (kind === "bar") {
    return (
      <Frame>
        <rect x="48" y="48" width="36" height="24" rx="4" fill={green} />
        <rect x="100" y="34" width="36" height="38" rx="4" fill={copper} />
        <rect x="152" y="24" width="36" height="48" rx="4" fill={green} />
        <rect x="204" y="16" width="36" height="56" rx="4" fill={ink} />
      </Frame>
    );
  }
  if (kind === "line") {
    return (
      <Frame>
        <path d="M40 60 L100 50 L160 42 L220 28 L280 22" fill="none" stroke={green} strokeWidth="3" />
        <circle cx="280" cy="22" r="5" fill={copper} />
      </Frame>
    );
  }
  if (kind === "pie") {
    return (
      <Frame>
        <circle cx="100" cy="44" r="28" fill={green} />
        <path d="M100 44 L100 16 A28 28 0 0 1 124 60 Z" fill={copper} />
        <rect x="160" y="28" width="14" height="14" rx="3" fill={green} />
        <rect x="160" y="50" width="14" height="14" rx="3" fill={copper} />
      </Frame>
    );
  }
  if (kind === "compare") {
    return (
      <Frame>
        <rect x="36" y="18" width="110" height="52" rx="8" fill="none" stroke={green} strokeWidth="2" />
        <rect x="174" y="18" width="110" height="52" rx="8" fill="none" stroke={copper} strokeWidth="2" />
        <text x="152" y="50" fill={copper} fontSize="14" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
          vs
        </text>
      </Frame>
    );
  }
  if (kind === "timeline") {
    return (
      <Frame>
        <line x1="40" y1="44" x2="280" y2="44" stroke={line} strokeWidth="3" />
        <circle cx="70" cy="44" r="7" fill={green} />
        <circle cx="160" cy="44" r="7" fill={copper} />
        <circle cx="250" cy="44" r="7" fill={ink} />
      </Frame>
    );
  }
  if (kind === "matrix") {
    return (
      <Frame>
        <rect x="48" y="18" width="224" height="52" rx="6" fill="none" stroke={green} strokeWidth="2" />
        <line x1="48" y1="36" x2="272" y2="36" stroke={line} strokeWidth="1.5" />
        <line x1="48" y1="54" x2="272" y2="54" stroke={line} strokeWidth="1.5" />
        <line x1="120" y1="18" x2="120" y2="70" stroke={line} strokeWidth="1.5" />
        <line x1="196" y1="18" x2="196" y2="70" stroke={line} strokeWidth="1.5" />
      </Frame>
    );
  }
  return (
    <Frame>
      <rect x="48" y="22" width="220" height="12" rx="3" fill={green} />
      <rect x="48" y="42" width="160" height="8" rx="2" fill={line} />
      <rect x="48" y="58" width="190" height="8" rx="2" fill={line} />
    </Frame>
  );
}

export function ChapterSketch({
  bookId,
  chapterId,
  layout,
  chart,
}: {
  bookId: string;
  chapterId: string;
  layout: string;
  chart?: string;
}) {
  return sketchFor(bookId, chapterId) ?? layoutFallback(layout, chart);
}
