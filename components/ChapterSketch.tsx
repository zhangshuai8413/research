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

function AiMetalSketch({ locale }: { locale: string }) {
  const zh = locale !== "en";
  const left = zh
    ? { title: "铜", a: "50", aUnit: "万吨", aNote: "数据中心一年用铜", b: "45", bUnit: "万吨", bNote: "全球一年多出来的需求", foot: "大约吃完今年的增量" }
    : { title: "Copper", a: "0.50", aUnit: "Mt", aNote: "data-center use, one year", b: "0.45", bUnit: "Mt", bNote: "all of this year’s demand growth", foot: "one use takes the year’s increase" };
  const right = zh
    ? { title: "铁矿", a: "0.5", aUnit: "%", aNote: "AI 用钢 ÷ 一年全球粗钢", b: "−36", bUnit: "%", bNote: "中国地产用钢，相对峰值", foot: "AI 盖不住这块下滑" }
    : { title: "Iron ore", a: "0.5", aUnit: "%", aNote: "AI steel ÷ one year of world steel", b: "−36", bUnit: "%", bNote: "China property steel vs peak", foot: "AI does not offset that drop" };

  const card = (
    side: typeof left,
    x: number,
    stroke: string,
  ) => (
    <g>
      <rect x={x} y="16" width="292" height="268" rx="16" fill="#fffdf8" stroke={stroke} strokeWidth="2.5" />
      <text x={x + 146} y="52" textAnchor="middle" fill={stroke} fontSize="18" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
        {side.title}
      </text>
      <text x={x + 146} y="108" textAnchor="middle" fill={ink} fontSize="40" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
        {side.a}
        <tspan fontSize="18" fontWeight="600">{side.aUnit}</tspan>
      </text>
      <text x={x + 146} y="132" textAnchor="middle" fill={ink} fontSize="13" fontFamily="ui-sans-serif, system-ui">
        {side.aNote}
      </text>
      <text x={x + 146} y="168" textAnchor="middle" fill={copper} fontSize="14" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
        vs
      </text>
      <text x={x + 146} y="214" textAnchor="middle" fill={ink} fontSize="40" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
        {side.b}
        <tspan fontSize="18" fontWeight="600">{side.bUnit}</tspan>
      </text>
      <text x={x + 146} y="238" textAnchor="middle" fill={ink} fontSize="13" fontFamily="ui-sans-serif, system-ui">
        {side.bNote}
      </text>
      <text x={x + 146} y="266" textAnchor="middle" fill={stroke} fontSize="13" fontFamily="ui-sans-serif, system-ui" fontWeight="650">
        {side.foot}
      </text>
    </g>
  );

  return (
    <svg className="chapter-sketch ai-metal-sketch" viewBox="0 0 640 300" aria-hidden="true">
      <rect x="1" y="1" width="638" height="298" rx="16" fill={paper} stroke={line} />
      {card(left, 16, green)}
      {card(right, 332, copper)}
    </svg>
  );
}

function PairSketch({
  left,
  right,
}: {
  left: { title: string; value: string; unit: string; note: string };
  right: { title: string; value: string; unit: string; note: string };
}) {
  const card = (
    side: { title: string; value: string; unit: string; note: string },
    x: number,
    stroke: string,
  ) => (
    <g>
      <rect x={x} y="16" width="292" height="212" rx="16" fill="#fffdf8" stroke={stroke} strokeWidth="2.5" />
      <text x={x + 146} y="52" textAnchor="middle" fill={stroke} fontSize="16" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
        {side.title}
      </text>
      <text x={x + 146} y="118" textAnchor="middle" fill={ink} fontSize="40" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
        {side.value}
        <tspan fontSize="18" fontWeight="600">{side.unit}</tspan>
      </text>
      <text x={x + 146} y="156" textAnchor="middle" fill={ink} fontSize="14" fontFamily="ui-sans-serif, system-ui">
        {side.note}
      </text>
    </g>
  );
  return (
    <svg className="chapter-sketch ai-metal-sketch" viewBox="0 0 640 244" aria-hidden="true">
      <rect x="1" y="1" width="638" height="242" rx="16" fill={paper} stroke={line} />
      {card(left, 16, green)}
      {card(right, 332, copper)}
    </svg>
  );
}

function GoldPathSketch({ locale }: { locale: string }) {
  const zh = locale !== "en";
  const points = zh
    ? [
        ["1月高点", "5627"],
        ["6月低点", "3955"],
        ["9月24日", "4256"],
      ]
    : [
        ["Jan peak", "5627"],
        ["Jun low", "3955"],
        ["24 Sep", "4256"],
      ];
  return (
    <svg className="chapter-sketch ai-metal-sketch" viewBox="0 0 640 200" aria-hidden="true">
      <rect x="1" y="1" width="638" height="198" rx="16" fill={paper} stroke={line} />
      {points.map(([title, value], index) => {
        const x = 16 + index * 204;
        const stroke = index === 1 ? copper : green;
        return (
          <g key={title}>
            <rect x={x} y="16" width="192" height="168" rx="16" fill="#fffdf8" stroke={stroke} strokeWidth="2.5" />
            <text x={x + 96} y="58" textAnchor="middle" fill={stroke} fontSize="16" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
              {title}
            </text>
            <text x={x + 96} y="118" textAnchor="middle" fill={ink} fontSize="36" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
              {value}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function metalsSketch(chapterId: string, locale: string) {
  if (chapterId === "precious") return <GoldPathSketch locale={locale} />;
  const zh = locale !== "en";
  const pair = (zh
    ? {
        summary: ["机房建设", "50", "万吨", "30–70 的中枢", "其中 AI", "10–20", "万吨", "真正多出来的"],
        panorama: ["黄金", "−24", "%", "高点 5,627，现 4,256", "铜升水", "106", "美元", "8月17日曾到 544"],
        copper: ["8月17日", "544", "美元", "现货比三个月贵", "9月下旬", "106", "美元", "升水收到这里"],
        uranium: ["现货", "90", "美元", "每磅，9月中", "长期合同", "97", "美元", "电费愿意签长约"],
        "ai-tiers": ["机房", "50", "万吨", "大约等于今年增量", "AI 那一层", "10–20", "万吨", "不要整栋都算 AI"],
        rebar: ["AI 用钢", "0.5", "%", "相对一年全球粗钢", "地产用钢", "−36", "%", "相对 2020 年峰值"],
        acid: ["停出口", "5", "月", "4月只是通报", "贸易少了", "280", "万吨", "CRU 对 2026 年"],
        zijin: ["矿产金", "+13.4", "%", "46,702 千克", "碳酸锂", "4.4", "万吨", "正式半年报"],
        lithium: ["上半年", "4.4", "万吨", "紫金当量碳酸锂", "9月28日", "12.2", "万元", "电池级，每吨"],
        tin: ["8月中", "5535", "吨", "当时约等于 3 天", "9月25日", "4590", "吨", "仓库更少了"],
        "tin-leaders": ["黄金", "−24", "%", "较高点，9月24日", "锡库存", "4590", "吨", "9月25日"],
      }
    : {
        summary: ["Data centers", "0.50", " Mt", "midpoint of 0.30–0.70", "AI-only slice", "0.10–0.20", " Mt", "the extra from AI designs"],
        panorama: ["Gold", "−24", "%", "peak 5,627, now 4,256", "Cu premium", "106", "", "was 544 on 17 Aug"],
        copper: ["17 Aug", "544", "", "$/t cash over 3M", "late Sep", "106", "", "premium narrowed"],
        uranium: ["Spot", "90", "", "$/lb, mid-Sep", "Term", "97", "", "utilities pay for a lock-in"],
        "ai-tiers": ["Buildings", "0.50", " Mt", "about this year’s growth", "AI slice", "0.10–0.20", " Mt", "do not count the whole site"],
        rebar: ["AI steel", "0.5", "%", "of one year of world steel", "Property", "−36", "%", "vs the 2020 peak"],
        acid: ["Export halt", "May", "", "April was the notice", "Trade lost", "2.8", " Mt", "CRU, for 2026"],
        zijin: ["Mined gold", "+13.4", "%", "46,702 kg", "Lithium", "44", " kt", "formal half-year"],
        lithium: ["First half", "44", " kt", "Zijin LCE", "28 Sep", "122k", "", "yuan per tonne"],
        tin: ["Mid-Aug", "5535", " t", "then about 3 days", "25 Sep", "4590", " t", "the warehouse is smaller"],
        "tin-leaders": ["Gold", "−24", "%", "from the peak, 24 Sep", "Tin stocks", "4590", " t", "25 Sep"],
      })[chapterId];
  if (!pair) return null;
  const [lt, lv, lu, ln, rt, rv, ru, rn] = pair;
  return (
    <PairSketch
      left={{ title: lt, value: lv, unit: lu, note: ln }}
      right={{ title: rt, value: rv, unit: ru, note: rn }}
    />
  );
}

function sketchFor(bookId: string, chapterId: string, locale: string) {
  if (bookId === "mining" && chapterId === "ai") {
    return <AiMetalSketch locale={locale} />;
  }
  if (bookId === "mining") {
    const drawn = metalsSketch(chapterId, locale);
    if (drawn) return drawn;
  }
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
  locale = "zh",
}: {
  bookId: string;
  chapterId: string;
  layout: string;
  chart?: string;
  locale?: string;
}) {
  return sketchFor(bookId, chapterId, locale) ?? layoutFallback(layout, chart);
}
