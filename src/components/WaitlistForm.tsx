"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export function WaitlistForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = useMemo(() => {
    return (
      state.status !== "submitting" &&
      name.trim().length >= 2 &&
      email.trim().length >= 3 &&
      message.trim().length >= 10
    );
  }, [state.status, name, email, message]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setState({ status: "submitting" });
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setState({ status: "error", message: data.error ?? "Something went wrong." });
        return;
      }
      setState({ status: "success" });
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setState({ status: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <label className="block">
          <span className="sr-only">Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-white/20 focus:bg-white/7"
          />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-white/20 focus:bg-white/7"
          />
        </label>
      </div>

      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What would you like MindGrove to help you with?"
          rows={5}
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-white/20 focus:bg-white/7"
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-white/55">
          No spam. Your message goes straight into our build inbox.
        </div>
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
          disabled={!canSubmit}
          className="rounded-full bg-gradient-to-r from-mg-fern to-mg-aqua px-5 py-2.5 text-sm font-medium text-mg-ink shadow-[0_12px_30px_-12px_color-mix(in_oklab,var(--mg-fern)_50%,transparent)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {state.status === "submitting" ? "Sending..." : "Join waitlist"}
        </motion.button>
      </div>

      {state.status === "success" ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
          You’re in. We’ll reach out soon.
        </div>
      ) : null}
      {state.status === "error" ? (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {state.message}
        </div>
      ) : null}
    </form>
  );
}

