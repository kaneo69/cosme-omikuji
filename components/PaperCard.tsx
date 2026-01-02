"use client";
import { motion } from "framer-motion";
import type { OmikujiResult } from "../app/results";
import { ItemIllustration } from "./ItemIllustration";

type Props = { result: OmikujiResult };

export function PaperCard({ result }: Props) {
  return (
    <motion.section
      initial={{ y: 14, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="relative mx-auto w-full max-w-[520px] rounded-2xl
                 bg-[var(--paper)] border border-[var(--border)]
                 shadow-[0_18px_42px_rgba(0,0,0,0.10)]
                 px-6 sm:px-8 py-7 sm:py-8 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.03) 0%, transparent 18%, rgba(0,0,0,0.03) 100%)," +
            "radial-gradient(circle_at_20%_15%, rgba(0,0,0,0.06) 0%, transparent 42%)",
        }}
      />

      <header className="flex items-center justify-between gap-3">
        <div className="text-[11px] tracking-[0.22em] text-[var(--muted)]">
          COSME OMikuji 2026
        </div>
        <div
          className="inline-block rotate-[-5deg] rounded-full border-2 border-[var(--accent)]
                     px-3 py-1 text-[var(--accent)] font-semibold tracking-[0.18em]
                     shadow-[2px_2px_0_rgba(193,18,31,0.18)] text-[12px]"
        >
          2026
        </div>
      </header>

      {/* 上段：アイコンと注力コスメ */}
      <div className="mt-6 grid grid-cols-[76px_1fr] items-center gap-4">
        <div className="rounded-2xl border border-[var(--border)] bg-white/80 p-3 text-[var(--ink)]">
          <ItemIllustration itemKey={result.itemKey} className="h-[48px] w-[48px]" />
        </div>

        <div className="min-w-0">
          <div className="text-[11px] tracking-[0.18em] text-[var(--muted)]">注力コスメ</div>
          <div className="mt-1 font-serif text-[20px] leading-tight font-semibold tracking-[0.05em] truncate">
            {result.focus}
          </div>
        </div>
      </div>

      {/* 本文：行幅と行間を固定 */}
      <p className="mt-6 text-[15px] leading-[1.95] tracking-[0.02em] max-w-[34em]">
        {result.text}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        <span className="text-[11px] px-3 py-1 rounded-full border border-[var(--border)] bg-white/60 text-[var(--muted)]">
          2026の気分：<span className="text-[var(--ink)] font-medium">{result.mood}</span>
        </span>
      </div>
    </motion.section>
  );
}
