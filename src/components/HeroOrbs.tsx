"use client";

import { motion } from "framer-motion";

export function HeroOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--mg-fern)_70%,transparent)_0%,transparent_60%)] blur-2xl"
        animate={{ y: [0, 16, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-10 right-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--mg-aqua)_55%,transparent)_0%,transparent_62%)] blur-2xl"
        animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-[-160px] left-[-140px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--mg-lav)_55%,transparent)_0%,transparent_62%)] blur-2xl"
        animate={{ x: [0, 18, 0], y: [0, -14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mg-ink/40 via-transparent to-mg-ink" />
    </div>
  );
}

