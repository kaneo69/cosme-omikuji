"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = { onDraw: () => void };

export function OmikujiBox({ onDraw }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onDraw}
      whileTap={{ scale: 0.98 }}
      className="group w-full max-w-[460px]"
      aria-label="おみくじを引く"
    >
      <div
        className="relative overflow-hidden rounded-[28px] border border-[var(--border)]
                   bg-[var(--paper)]
                   shadow-[0_22px_60px_rgba(0,0,0,0.14)]
                   px-6 py-6"
      >
        {/* キラっとポップ */}
        <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[var(--accent)]/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 -right-14 h-48 w-48 rounded-full bg-[var(--accent2)]/10 blur-2xl" />

        {/* リボン/シールっぽいラベル */}
        <div className="absolute left-5 top-5 rotate-[-6deg]">
          <div className="px-3 py-1 rounded-full bg-white/80 border border-[var(--border)] shadow-[2px_2px_0_rgba(0,0,0,0.08)] text-[11px] tracking-[0.14em]">
            TAP
          </div>
        </div>

        <div className="grid gap-4 place-items-center">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[330px] aspect-square"
          >
            <Image
              src="/assets/omikuji-box.png"
              alt="おみくじ箱"
              fill
              priority
              className="object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.22)]"
            />
          </motion.div>

          <div className="grid gap-1 text-center">
            <div className="text-[12px] tracking-[0.20em] text-[var(--muted)]">
              2026 mood / focus cosme
            </div>

            <div className="inline-flex items-center gap-2 justify-center">
              <span className="font-[var(--font-pop)] text-[18px] tracking-[0.06em]">
                タップして引く
              </span>
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent)]" />
            </div>
          </div>

          <div className="w-full h-px bg-[var(--border)]" />

          <div className="w-full flex items-center justify-between">
            <span className="text-[11px] tracking-[0.18em] text-[var(--muted)]">
              COSME OMikuji 2026
            </span>

            <span
              className="px-3 py-1 rounded-full bg-white/70 border border-[var(--border)]
                         text-[11px] tracking-[0.18em] font-semibold
                         shadow-[2px_2px_0_rgba(0,0,0,0.08)]
                         group-hover:-translate-y-[1px] group-hover:translate-x-[1px] transition"
              style={{ color: "var(--accent)" }}
            >
              START
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}
