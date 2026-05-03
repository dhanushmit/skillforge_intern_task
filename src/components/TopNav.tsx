"use client";

import { motion } from "framer-motion";

export function TopNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white/10 bg-mg-ink/60 backdrop-blur"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-mg-fern shadow-[0_0_18px_color-mix(in_oklab,var(--mg-fern)_55%,transparent)]" />
          MindGrove
        </a>
        <nav className="hidden items-center gap-7 text-sm text-white/75 md:flex">
          <a className="hover:text-white transition-colors" href="#features">
            Features
          </a>
          <a className="hover:text-white transition-colors" href="#how">
            How it works
          </a>
          <a className="hover:text-white transition-colors" href="#stories">
            Stories
          </a>
          <a
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition-colors"
            href="#waitlist"
          >
            Join waitlist
          </a>
        </nav>
        <a
          className="md:hidden rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs text-white hover:bg-white/10 transition-colors"
          href="#waitlist"
        >
          Join
        </a>
      </div>
    </motion.header>
  );
}

