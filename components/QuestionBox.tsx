"use client";

import { useState } from "react";

export function QuestionBox({
  locale,
  bookId,
  chapterId,
  title,
  hint,
  placeholder,
  submitLabel,
  doneLabel,
  errorLabel,
}: {
  locale: string;
  bookId: string;
  chapterId: string;
  title: string;
  hint: string;
  placeholder: string;
  submitLabel: string;
  doneLabel: string;
  errorLabel: string;
}) {
  const [body, setBody] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const text = body.trim();
    if (!text) return;
    setState("sending");
    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ locale, bookId, chapterId, body: text }),
      });
      if (!response.ok) {
        setState("error");
        return;
      }
      setBody("");
      setState("done");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="question" onSubmit={onSubmit}>
      <h2>{title}</h2>
      <p className="muted">{hint}</p>
      <textarea
        maxLength={500}
        value={body}
        placeholder={placeholder}
        onChange={(event) => setBody(event.target.value)}
      />
      <button className="text-button" type="submit" disabled={state === "sending" || body.trim().length === 0}>
        {submitLabel}
      </button>
      {state === "done" ? <p>{doneLabel}</p> : null}
      {state === "error" ? <p>{errorLabel}</p> : null}
    </form>
  );
}
