import { allowedAppIds, isAllowedAppId, summarizeRange } from "@/lib/analytics/store";
import { getBook } from "@/lib/content";

export const runtime = "nodejs";

function unauthorized() {
  return Response.json({ error: "unauthorized" }, { status: 401 });
}

function checkAdmin(request: Request) {
  const header = request.headers.get("x-admin-password") ?? "";
  return header === "1361217";
}

export async function GET(request: Request) {
  if (!checkAdmin(request)) return unauthorized();

  const url = new URL(request.url);
  const appId = (url.searchParams.get("appId") ?? "research").trim() || "research";
  const to = (url.searchParams.get("to") ?? new Date().toISOString().slice(0, 10)).trim();
  const fromDefault = new Date(`${to}T00:00:00.000Z`);
  fromDefault.setUTCDate(fromDefault.getUTCDate() - 6);
  const from = (url.searchParams.get("from") ?? fromDefault.toISOString().slice(0, 10)).trim();

  if (!isAllowedAppId(appId) || !/^\d{4}-\d{2}-\d{2}$/.test(from) || !/^\d{4}-\d{2}-\d{2}$/.test(to) || from > to) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const summary = await summarizeRange(appId, from, to);
  const books = summary.books.map((book) => ({
    ...book,
    title: getBook(book.bookId)?.zh.title ?? book.bookId,
  }));
  const topChapters = summary.topChapters.map((chapter) => ({
    ...chapter,
    bookTitle: getBook(chapter.bookId)?.zh.title ?? chapter.bookId,
  }));

  return Response.json({
    apps: allowedAppIds(),
    summary: { ...summary, books, topChapters },
  });
}
