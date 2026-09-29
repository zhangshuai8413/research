import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";
import { getReleasedChapter } from "@/lib/content";
import { appEnv } from "@/lib/env";
import { clientKey, rateLimit } from "@/lib/rate-limit";
import type { Question } from "@/lib/types";
import { isLocale } from "@/lib/ui";

export const runtime = "nodejs";

let writeChain: Promise<void> = Promise.resolve();

function withQuestionsLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = writeChain.then(fn, fn);
  writeChain = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

export async function POST(request: Request) {
  if (!rateLimit(clientKey(request, "questions"), 10, 60_000)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  const payload = await request.json().catch(() => null);
  const body = String(payload?.body ?? "").trim();
  const locale = String(payload?.locale ?? "");
  const bookId = String(payload?.bookId ?? "");
  const chapterId = String(payload?.chapterId ?? "");

  if (!isLocale(locale) || !body || body.length > 500 || !getReleasedChapter(bookId, chapterId, locale)) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const env = appEnv();
  const file = path.join(process.cwd(), "data", `questions.${env}.json`);

  await withQuestionsLock(async () => {
    let current: Question[] = [];
    try {
      current = JSON.parse(await fs.readFile(file, "utf8")) as Question[];
      if (!Array.isArray(current)) current = [];
    } catch {
      current = [];
    }

    current.push({
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      locale,
      bookId,
      chapterId,
      body,
      status: "new",
      env,
    });
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, JSON.stringify(current, null, 2));
  });

  return Response.json({ ok: true });
}
