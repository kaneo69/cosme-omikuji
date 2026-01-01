"use client";
import { motion } from "framer-motion";

type Props = {
  onDraw: () => void;
};

export function OmikujiBox({ onDraw }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onDraw}
      whileTap={{ scale: 0.98, rotate: [-1, 1, -1, 0] }}
      transition={{ duration: 0.22 }}
      className="relative select-none"
      aria-label="おみくじを引く"
    >
      {/* 上面 */}
      <div
        className="w-[260px] h-[70px] rounded-[18px] border border-[#E6DED1]
                   shadow-[0_10px_20px_rgba(0,0,0,0.16)]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(0,0,0,0.10)), " +
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 6px, rgba(0,0,0,0.06) 6px 12px), " +
            "linear-gradient(90deg, #7A4A2A, #5E371E)",
        }}
      />

      {/* スリット */}
      <div className="absolute left-1/2 top-[26px] -translate-x-1/2 w-[150px] h-[10px]
                      rounded-full bg-[#1B1B1B]/70 shadow-inner" />

      {/* 本体 */}
      <div
        className="-mt-2 w-[260px] h-[170px] rounded-[22px] border border-[#E6DED1]
                   shadow-[0_18px_40px_rgba(0,0,0,0.18)] relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(0,0,0,0.18)), " +
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 10px, rgba(0,0,0,0.06) 10px 20px), " +
            "linear-gradient(90deg, #6A3F23, #4F2D17)",
        }}
      >
        {/* 木目のムラ */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle_at_20%_20%, rgba(255,255,255,0.9) 0%, transparent 45%)," +
              "radial-gradient(circle_at_80%_40%, rgba(0,0,0,0.9) 0%, transparent 55%)",
          }}
        />

        {/* 金具（小） */}
        <div className="absolute right-4 top-4 h-6 w-6 rounded-md border border-[#C9A227]
                        bg-[#C9A227]/15 shadow-[1px_1px_0_rgba(201,162,39,0.35)]" />

        {/* ラベル */}
        <div className="absolute inset-x-0 bottom-6 text-center">
          <div className="text-sm tracking-widest text-[#F7F2E8]/90">タップして引く</div>
          <div className="mt-2 text-xs text-[#F7F2E8]/70">COSME OMikuji 2026</div>
        </div>
      </div>
    </motion.button>
  );
}