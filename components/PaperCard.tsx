"use client";
import { motion } from "framer-motion";
import type { OmikujiResult } from "../app/results";
import { ItemIllustration } from "./ItemIllustration";

type Props = {
  result: OmikujiResult;
};

export function PaperCard({ result }: Props) {
  return (
    <motion.section
      initial={{ y: 28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="relative mx-auto w-[min(560px,92vw)] rounded-2xl bg-[#FFFCF6]
                 px-6 py-7 border border-[#E6DED1]
                 shadow-[0_18px_40px_rgba(0,0,0,0.12)] overflow-hidden"
    >
      {/* うっすら折り目 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.04) 48%, transparent 100%)",
        }}
      />

      <header className="flex items-center justify-between gap-3">
        <div className="text-xs tracking-widest opacity-70">COSME OMikuji 2026</div>
        <div className="inline-block rotate-[-6deg] rounded-full border-2 border-[#C1121F]
                        px-3 py-1 text-[#C1121F] font-bold tracking-widest
                        shadow-[2px_2px_0_rgba(193,18,31,0.25)]">
          2026
        </div>
      </header>

      {/* アイテムイラスト */}
      <div className="mt-5 flex items-center gap-4">
        <div className="shrink-0 rounded-2xl border border-[#E6DED1] bg-white/80 p-3 text-[#1B1B1B]">
          <ItemIllustration itemKey={result.itemKey} className="h-14 w-14" />
        </div>
        <div className="text-sm">
          <div className="opacity-70">注力コスメ</div>
          <div className="font-medium">{result.focus}</div>
        </div>
      </div>

      <p className="mt-5 text-[17px] leading-7">{result.text}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="text-xs px-3 py-1 rounded-full border border-[#E6DED1] bg-white/60">
          2026の気分：<span className="font-medium">{result.mood}</span>
        </span>
        <span className="text-xs px-3 py-1 rounded-full border border-[#E6DED1] bg-white/60">
          注力コスメ：<span className="font-medium">{result.focus}</span>
        </span>
      </div>
    </motion.section>
  );
}