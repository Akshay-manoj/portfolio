"use client";

import { useState } from "react";
import { Icon } from "./Icon";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputCls =
    "w-full rounded-lg border border-outline-variant bg-surface/50 p-4 font-body-md transition-all focus:border-primary focus:outline-none";

  return (
    <div className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest/80 p-8 backdrop-blur-sm soft-shadow md:p-12">
      <form onSubmit={onSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant"
            >
              Full Name
            </label>
            <input id="name" name="name" type="text" required placeholder="John Doe" className={inputCls} />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant"
            >
              Email Address
            </label>
            <input id="email" name="email" type="email" required placeholder="john@example.com" className={inputCls} />
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="font-label-mono text-label-mono uppercase tracking-wider text-on-surface-variant"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="Tell me about your project..."
            className={`${inputCls} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          className={`flex w-full items-center justify-center gap-2 rounded-lg px-10 py-4 font-body-md font-bold text-on-primary transition-all hover:translate-y-[-2px] hover:shadow-lg active:scale-95 disabled:hover:translate-y-0 md:w-auto ${
            status === "sent" ? "bg-green-600" : "bg-primary"
          } ${status === "sending" ? "opacity-70" : ""}`}
        >
          {status === "sending" && (
            <>
              <span>Sending...</span>
              <Icon name="sync" className="animate-spin text-[20px]" />
            </>
          )}
          {status === "sent" && (
            <>
              <span>Message Sent!</span>
              <Icon name="check_circle" className="text-[20px]" />
            </>
          )}
          {(status === "idle" || status === "error") && (
            <>
              <span>Send Message</span>
              <Icon name="send" className="text-[20px]" />
            </>
          )}
        </button>

        {status === "error" && (
          <p className="font-body-md text-body-md text-error">{error}</p>
        )}
      </form>
    </div>
  );
}
