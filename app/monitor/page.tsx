"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";

type PathStat = { path: string; views: number; avgStaySec: number };
type BookStat = {
  bookId: string;
  title?: string;
  views: number;
  sessions: number;
  avgStaySec: number;
  chapterViews: number;
  tocViews: number;
};
type ChapterStat = {
  bookId: string;
  bookTitle?: string;
  chapterId: string;
  path: string;
  views: number;
  avgStaySec: number;
};
type WorkStat = {
  workId: string;
  path: string;
  views: number;
  sessions: number;
  avgStaySec: number;
};
type DaySummary = {
  date: string;
  pageviews: number;
  sessions: number;
  avgStaySec: number;
};
type Summary = {
  appId: string;
  profile: "research" | "logoDesign" | "generic";
  from: string;
  to: string;
  pageviews: number;
  sessions: number;
  avgStaySec: number;
  bounceRate: number;
  locales: Array<{ locale: string; views: number; sessions: number }>;
  funnel: { hall: number; book: number; chapter: number };
  siteFunnel: { home: number; about: number; work: number; other: number };
  books: BookStat[];
  topChapters: ChapterStat[];
  works: WorkStat[];
  days: DaySummary[];
  topPaths: PathStat[];
};

const APP_LABELS: Record<string, string> = {
  research: "行业笔记",
  logoDesign: "设计站",
};

function today() {
  return new Date().toISOString().slice(0, 10);
}

function daysAgo(n: number) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - n);
  return date.toISOString().slice(0, 10);
}

function formatStay(sec: number) {
  if (sec < 60) return `${sec}s`;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}m ${s}s`;
}

function FunnelBars({ items, total }: { items: Array<[string, number]>; total: number }) {
  const max = Math.max(total, 1);
  return (
    <ul className="admin-funnel">
      {items.map(([label, value]) => (
        <li key={label}>
          <div className="day-meta">
            <span>{label}</span>
            <span className="muted">{value}</span>
          </div>
          <div className="track" aria-hidden="true">
            <div className="bar" style={{ width: `${(value / max) * 100}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function AdminAnalyticsPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [apps, setApps] = useState<string[]>(["research", "logoDesign"]);
  const [appId, setAppId] = useState("research");
  const [from, setFrom] = useState(daysAgo(6));
  const [to, setTo] = useState(today());
  const [data, setData] = useState<Summary | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("analytics_admin_password");
    if (saved) {
      setPassword(saved);
      setAuthed(true);
    }
  }, []);

  const load = useCallback(
    async (pwd: string, nextAppId?: string) => {
      setLoading(true);
      setError("");
      const params = new URLSearchParams({ from, to, appId: nextAppId || appId || "research" });
      const res = await fetch(`/api/analytics/summary?${params}`, {
        headers: { "x-admin-password": pwd },
      });
      setLoading(false);
      if (res.status === 401) {
        setAuthed(false);
        setError("密码不对");
        sessionStorage.removeItem("analytics_admin_password");
        return;
      }
      if (!res.ok) {
        setError("加载失败");
        return;
      }
      const json = (await res.json()) as { apps: string[]; summary: Summary };
      setApps(json.apps);
      setAppId(json.summary.appId);
      setData(json.summary);
      setAuthed(true);
      sessionStorage.setItem("analytics_admin_password", pwd);
    },
    [appId, from, to],
  );

  useEffect(() => {
    if (!authed || !password) return;
    void load(password);
  }, [authed, password, from, to, load]);

  function onLogin(event: FormEvent) {
    event.preventDefault();
    void load(password);
  }

  const maxViews = useMemo(() => Math.max(...(data?.days.map((day) => day.pageviews) ?? [1]), 1), [data]);
  const profile = data?.profile ?? (appId === "logoDesign" ? "logoDesign" : "research");
  const title = profile === "logoDesign" ? "设计站访问监控" : profile === "research" ? "行业笔记访问监控" : "访问监控";
  const lead =
    profile === "logoDesign"
      ? "看首页、关于我们、作品详情谁有人停留。"
      : "看人数、停留、哪本书和哪一章有人读。";

  if (!authed) {
    return (
      <main className="admin">
        <h1>访问监控</h1>
        <p className="muted">行业笔记与设计站共用后台，进门后按项目切换视图。</p>
        <form className="admin-login" onSubmit={onLogin}>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="管理密码"
            autoComplete="current-password"
          />
          <button className="text-button" type="submit">
            进入
          </button>
        </form>
        {error ? <p className="error">{error}</p> : null}
      </main>
    );
  }

  return (
    <main className="admin">
      <header className="admin-top">
        <div>
          <h1>{title}</h1>
          <p className="muted">{lead}</p>
        </div>
        <button
          className="text-button"
          type="button"
          onClick={() => {
            sessionStorage.removeItem("analytics_admin_password");
            setAuthed(false);
            setData(null);
          }}
        >
          退出
        </button>
      </header>

      <div className="admin-filters">
        <label>
          项目
          <select
            value={appId}
            onChange={(event) => {
              const next = event.target.value;
              setAppId(next);
              void load(password, next);
            }}
          >
            {apps.map((id) => (
              <option key={id} value={id}>
                {APP_LABELS[id] ?? id}
              </option>
            ))}
          </select>
        </label>
        <label>
          从
          <input type="date" value={from} onChange={(event) => setFrom(event.target.value)} />
        </label>
        <label>
          到
          <input type="date" value={to} onChange={(event) => setTo(event.target.value)} />
        </label>
        <button className="text-button" type="button" disabled={loading} onClick={() => void load(password)}>
          {loading ? "加载中…" : "刷新"}
        </button>
      </div>

      {error ? <p className="error">{error}</p> : null}

      {data ? (
        <>
          <section className="admin-cards admin-cards-4">
            <div className="admin-card">
              <div className="kicker">浏览量</div>
              <div className="admin-num">{data.pageviews}</div>
            </div>
            <div className="admin-card">
              <div className="kicker">用户会话</div>
              <div className="admin-num">{data.sessions}</div>
            </div>
            <div className="admin-card">
              <div className="kicker">平均停留</div>
              <div className="admin-num">{formatStay(data.avgStaySec)}</div>
            </div>
            <div className="admin-card">
              <div className="kicker">短停占比 &lt;5s</div>
              <div className="admin-num">{data.bounceRate}%</div>
            </div>
          </section>

          {profile === "logoDesign" ? (
            <>
              <section>
                <h2>站点漏斗</h2>
                <FunnelBars
                  total={data.siteFunnel.home + data.siteFunnel.about + data.siteFunnel.work + data.siteFunnel.other}
                  items={[
                    ["首页", data.siteFunnel.home],
                    ["关于我们", data.siteFunnel.about],
                    ["作品详情", data.siteFunnel.work],
                    ["其他", data.siteFunnel.other],
                  ]}
                />
              </section>

              <section>
                <h2>热门作品</h2>
                <table className="matrix">
                  <thead>
                    <tr>
                      <th>作品</th>
                      <th>会话</th>
                      <th>PV</th>
                      <th>平均停留</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.works.map((work) => (
                      <tr key={work.workId}>
                        <td>
                          <code>{work.workId}</code>
                          <div className="muted">{work.path}</div>
                        </td>
                        <td>{work.sessions}</td>
                        <td>{work.views}</td>
                        <td>{formatStay(work.avgStaySec)}</td>
                      </tr>
                    ))}
                    {!data.works.length ? (
                      <tr>
                        <td colSpan={4}>还没有作品详情访问</td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </section>
            </>
          ) : (
            <>
              <section className="admin-split">
                <div>
                  <h2>阅读漏斗</h2>
                  <FunnelBars
                    total={data.funnel.hall + data.funnel.book + data.funnel.chapter}
                    items={[
                      ["大厅", data.funnel.hall],
                      ["书目录", data.funnel.book],
                      ["章节", data.funnel.chapter],
                    ]}
                  />
                </div>
                <div>
                  <h2>语言</h2>
                  <table className="matrix">
                    <thead>
                      <tr>
                        <th>语言</th>
                        <th>PV</th>
                        <th>会话</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.locales.map((row) => (
                        <tr key={row.locale}>
                          <td>{row.locale}</td>
                          <td>{row.views}</td>
                          <td>{row.sessions}</td>
                        </tr>
                      ))}
                      {!data.locales.length ? (
                        <tr>
                          <td colSpan={3}>暂无</td>
                        </tr>
                      ) : null}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2>书</h2>
                <table className="matrix">
                  <thead>
                    <tr>
                      <th>书</th>
                      <th>会话</th>
                      <th>PV</th>
                      <th>目录</th>
                      <th>章节</th>
                      <th>平均停留</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.books.map((book) => (
                      <tr key={book.bookId}>
                        <td>{book.title ?? book.bookId}</td>
                        <td>{book.sessions}</td>
                        <td>{book.views}</td>
                        <td>{book.tocViews}</td>
                        <td>{book.chapterViews}</td>
                        <td>{formatStay(book.avgStaySec)}</td>
                      </tr>
                    ))}
                    {!data.books.length ? (
                      <tr>
                        <td colSpan={6}>这段时间还没有书页访问</td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </section>

              <section>
                <h2>热门章节</h2>
                <table className="matrix">
                  <thead>
                    <tr>
                      <th>书</th>
                      <th>章节</th>
                      <th>PV</th>
                      <th>平均停留</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.topChapters.map((row) => (
                      <tr key={row.path}>
                        <td>{row.bookTitle ?? row.bookId}</td>
                        <td>{row.chapterId}</td>
                        <td>{row.views}</td>
                        <td>{formatStay(row.avgStaySec)}</td>
                      </tr>
                    ))}
                    {!data.topChapters.length ? (
                      <tr>
                        <td colSpan={4}>还没有章节阅读</td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </section>
            </>
          )}

          <section>
            <h2>每日趋势</h2>
            <ul className="admin-days">
              {data.days.map((day) => (
                <li key={day.date}>
                  <div className="day-meta">
                    <span>{day.date}</span>
                    <span className="muted">
                      PV {day.pageviews} · 会话 {day.sessions} · 停留 {formatStay(day.avgStaySec)}
                    </span>
                  </div>
                  <div className="track" aria-hidden="true">
                    <div className="bar" style={{ width: `${(day.pageviews / maxViews) * 100}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>路径明细</h2>
            <table className="matrix">
              <thead>
                <tr>
                  <th>路径</th>
                  <th>PV</th>
                  <th>平均停留</th>
                </tr>
              </thead>
              <tbody>
                {data.topPaths.map((row) => (
                  <tr key={row.path}>
                    <td>{row.path}</td>
                    <td>{row.views}</td>
                    <td>{formatStay(row.avgStaySec)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </>
      ) : null}
    </main>
  );
}
