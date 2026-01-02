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
      className="relative mx-auto w-full max-w-[520px] overflow-hidden
                 rounded-3xl border border-[var(--border)] bg-[var(--paper)]
                 shadow-[0_20px_60px_rgba(0,0,0,0.14)]"
    >
      {/* 紙ムラ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          background:
            "radial-gradient(circle_at_18%_18%, rgba(0,0,0,0.10) 0%, transparent 45%)," +
            "radial-gradient(circle_at_85%_35%, rgba(0,0,0,0.08) 0%, transparent 52%)," +
            "linear-gradient(180deg, rgba(0,0,0,0.03) 0%, transparent 18%, rgba(0,0,0,0.03) 100%)",
        }}
      />

      {/* ヘッダー */}
      <div className="relative px-6 sm:px-8 pt-6">
        <div className="flex items-center justify-between">
          <div className="text-[11px] tracking-[0.22em] text-[var(--muted)]">
            COSME OMikuji 2026
          </div>
          <div
            className="inline-block rotate-[-6deg] rounded-full border-2 border-[var(--accent)]
                       px-3 py-1 text-[12px] font-semibold tracking-[0.18em]
                       text-[var(--accent)]
                       shadow-[2px_2px_0_rgba(0,0,0,0.10)] bg-white/60"
          >
            2026
          </div>
        </div>
      </div>

      {/* 2026の気分：ヒーロー帯 */}
      <div className="relative mt-4 px-6 sm:px-8">
        <div
          className="rounded-2xl border border-[var(--border)] bg-white/65
                     px-5 py-5 shadow-[0_14px_34px_rgba(0,0,0,0.10)]"
        >
          <div className="text-[11px] tracking-[0.18em] text-[var(--muted)]">
            2026の気分
          </div>

          <div className="mt-2 flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="font-[var(--font-pop)] text-[26px] leading-tight tracking-[0.06em]">
                {result.moodTitle}
              </div>
              <div className="mt-2 text-[13px] leading-relaxed text-[var(--muted)]">
                {result.moodCatch}
              </div>
            </div>

            <div className="shrink-0">
              <div className="rounded-2xl border border-[var(--border)] bg-white/80 p-3">
                <ItemIllustration itemKey={result.itemKey} className="h-12 w-12" />
              </div>
            </div>
          </div>

          <ul className="mt-4 grid gap-2">
            {result.moodDetails.slice(0, 5).map((t, i) => (
              <li key={i} className="flex gap-2 text-[13px] leading-relaxed">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-[rgba(20,20,20,0.88)]">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 仕切り */}
      <div className="relative mt-6 h-px bg-[var(--border)] opacity-70" />

      {/* 注力コスメ */}
      <div className="relative px-6 sm:px-8 py-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[0.18em] text-[var(--muted)]">
              今年力を入れるべきコスメ
            </div>
            <div className="mt-2 font-[var(--font-pop)] text-[22px] leading-tight tracking-[0.04em]">
              {result.focus}
            </div>
          </div>

          <div
            className="rounded-full border border-[var(--border)] bg-white/60
                       px-3 py-1 text-[11px] tracking-[0.14em] text-[var(--muted)]"
          >
            tips
          </div>
        </div>

        <ul className="mt-4 grid gap-2">
          {result.focusTips.slice(0, 5).map((t, i) => (
            <li key={i} className="flex gap-2 text-[13px] leading-relaxed">
              <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent2)]" />
              <span className="text-[rgba(20,20,20,0.86)]">{t}</span>
            </li>
          ))}
        </ul>

        {/* お告げ本文（長文） */}
        <div className="mt-6 rounded-2xl border border-[var(--border)] bg-white/55 px-5 py-4">
          <div className="text-[11px] tracking-[0.18em] text-[var(--muted)]">お告げ</div>
          <p className="mt-2 text-[14px] leading-[1.95] tracking-[0.02em]">
            {result.message}
          </p>
        </div>
      </div>
    </motion.section>
  );
}
