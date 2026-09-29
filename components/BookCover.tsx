const ink = "#1c1917";
const green = "#1e4d3a";
const copper = "#8a4b32";
const paper = "#f7f3eb";
const line = "#d9d0c2";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg className="cover" viewBox="0 0 88 104" aria-hidden="true">
      <rect x="1" y="1" width="86" height="102" rx="8" fill={paper} stroke={line} />
      <rect x="1" y="1" width="7" height="102" rx="3" fill={green} />
      {children}
    </svg>
  );
}

function Bars({
  items,
}: {
  items: Array<{ h: number; color: string }>;
}) {
  const gap = 10;
  const width = 12;
  const start = 24;
  return (
    <>
      {items.map((item, index) => (
        <rect
          key={index}
          x={start + index * (width + gap)}
          y={86 - item.h}
          width={width}
          height={item.h}
          rx="2"
          fill={item.color}
        />
      ))}
    </>
  );
}

export function BookCover({ id }: { id: string }) {
  if (id === "mining") {
    return (
      <Frame>
        <Bars items={[{ h: 46, color: copper }, { h: 32, color: green }]} />
      </Frame>
    );
  }
  if (id === "metals") {
    return (
      <Frame>
        <circle cx="34" cy="38" r="10" fill={copper} />
        <circle cx="58" cy="46" r="7" fill={green} />
        <circle cx="40" cy="66" r="5" fill={ink} />
        <circle cx="62" cy="70" r="8" fill="none" stroke={copper} strokeWidth="2" />
      </Frame>
    );
  }
  if (id === "pharma") {
    return (
      <Frame>
        <circle cx="36" cy="58" r="14" fill={green} />
        <circle cx="60" cy="42" r="22" fill={copper} opacity="0.9" />
      </Frame>
    );
  }
  if (id === "solar") {
    return (
      <Frame>
        <circle cx="44" cy="34" r="12" fill="none" stroke={copper} strokeWidth="2" />
        {[0, 45, 90, 135].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 44 + Math.cos(rad) * 16;
          const y1 = 34 + Math.sin(rad) * 16;
          const x2 = 44 + Math.cos(rad) * 22;
          const y2 = 34 + Math.sin(rad) * 22;
          return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={copper} strokeWidth="2" />;
        })}
        <rect x="28" y="68" width="28" height="8" rx="2" fill={green} />
        <rect x="28" y="80" width="12" height="8" rx="2" fill={copper} />
      </Frame>
    );
  }
  if (id === "robots") {
    return (
      <Frame>
        <rect x="26" y="34" width="14" height="18" rx="3" fill={green} />
        <circle cx="33" cy="28" r="5" fill={green} />
        <rect x="50" y="46" width="12" height="14" rx="2" fill={copper} />
        <circle cx="56" cy="41" r="4" fill={copper} />
        <line x1="22" y1="82" x2="70" y2="82" stroke={line} strokeWidth="2" />
      </Frame>
    );
  }
  if (id === "semiconductor") {
    return (
      <Frame>
        <rect x="24" y="28" width="40" height="10" rx="2" fill={green} />
        <rect x="30" y="44" width="28" height="10" rx="2" fill={copper} />
        <rect x="36" y="60" width="16" height="10" rx="2" fill={ink} />
        <rect x="40" y="76" width="8" height="10" rx="2" fill={green} />
      </Frame>
    );
  }
  if (id === "moutai") {
    return (
      <Frame>
        <rect x="34" y="28" width="28" height="52" rx="10" fill="none" stroke={copper} strokeWidth="3" />
        <rect x="42" y="36" width="12" height="28" rx="4" fill={green} />
        <circle cx="48" cy="24" r="4" fill={copper} />
      </Frame>
    );
  }
  if (id === "hog") {
    return (
      <Frame>
        <ellipse cx="48" cy="58" rx="22" ry="14" fill={copper} opacity="0.85" />
        <circle cx="34" cy="52" r="8" fill={green} />
        <circle cx="28" cy="48" r="3" fill={ink} />
      </Frame>
    );
  }
  if (id === "meituan") {
    return (
      <Frame>
        <circle cx="30" cy="70" r="8" fill={green} />
        <circle cx="48" cy="58" r="11" fill={copper} />
        <circle cx="66" cy="44" r="14" fill={ink} opacity="0.85" />
      </Frame>
    );
  }
  if (id === "midea") {
    return (
      <Frame>
        <rect x="28" y="34" width="40" height="36" rx="6" fill="none" stroke={green} strokeWidth="2" />
        <path d="M34 52 Q48 34 62 52" fill="none" stroke={copper} strokeWidth="3" />
        <circle cx="48" cy="52" r="3" fill={ink} />
      </Frame>
    );
  }
  if (id === "h1") {
    return (
      <Frame>
        <path d="M24 78 L40 62 L52 70 L68 36" fill="none" stroke={green} strokeWidth="3" />
        <circle cx="68" cy="36" r="4" fill={copper} />
        <path d="M24 48 L38 52 L50 40 L66 54" fill="none" stroke={copper} strokeWidth="2" />
      </Frame>
    );
  }
  return (
    <Frame>
      <rect x="24" y="70" width="10" height="14" rx="2" fill={green} />
      <rect x="38" y="56" width="10" height="28" rx="2" fill={copper} />
      <rect x="52" y="42" width="10" height="42" rx="2" fill={green} />
      <path d="M26 36 H64" fill="none" stroke={ink} strokeWidth="1.5" strokeDasharray="3 3" />
    </Frame>
  );
}

export function ReadingSketch() {
  return (
    <svg className="reading-sketch" viewBox="0 0 280 72" aria-hidden="true">
      <rect x="1" y="8" width="78" height="56" rx="6" fill="#f7f3eb" stroke="#d9d0c2" />
      <rect x="12" y="20" width="40" height="6" rx="2" fill="#1e4d3a" />
      <rect x="12" y="32" width="54" height="4" rx="2" fill="#d9d0c2" />
      <rect x="12" y="42" width="36" height="4" rx="2" fill="#d9d0c2" />
      <rect x="101" y="8" width="78" height="56" rx="6" fill="#f7f3eb" stroke="#d9d0c2" />
      <rect x="112" y="40" width="12" height="14" rx="2" fill="#8a4b32" />
      <rect x="128" y="28" width="12" height="26" rx="2" fill="#1e4d3a" />
      <rect x="144" y="34" width="12" height="20" rx="2" fill="#1c1917" />
      <rect x="201" y="8" width="78" height="56" rx="6" fill="#f7f3eb" stroke="#d9d0c2" />
      <rect x="212" y="22" width="56" height="22" rx="4" fill="none" stroke="#1e4d3a" />
      <path d="M248 52 l4 6 h-8 z" fill="#8a4b32" />
    </svg>
  );
}
