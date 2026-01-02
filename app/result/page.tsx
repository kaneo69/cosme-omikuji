"use client";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { results } from "../results";
import { PaperCard } from "../../components/PaperCard";

function pickIndexAvoidingLast(n: number) {
  const key = "lastIndex";
  const last = Number(localStorage.getItem(key));
  let idx = Math.floor(Math.random() * n);

  if (!Number.isNaN(last) && n > 1 && idx === last) {
    idx = (idx + 1 + Math.floor(Math.random() * (n - 1))) % n;
  }
  localStorage.setItem(key, String(idx));
  return idx;
}

export default function ResultPage() {
  const [pickedIndex, setPickedIndex] = useState<number | null>(null);

  useEffect(() => {
    setPickedIndex(pickIndexAvoidingLast(results.length));
  }, []);

  const picked = pickedIndex === null ? null : results[pickedIndex];

  const onAgain = useCallback(() => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate(10);
    setPickedIndex(pickIndexAvoidingLast(results.length));
  }, []);

  const onCopy = useCallback(async () => {
    if (!picked) return;
    const text = `【化粧品おみくじ】\n${picked.text}\n2026の気分：${picked.mood}\n注力コスメ：${picked.focus}\n#化粧品おみくじ`;
    try {
      await navigator.clipboard.writeText(text);
      alert("コピーしました！");
    } catch {
      alert("コピーに失敗しました");
    }
  }, [picked]);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle_at_15%_15%, rgba(255,255,255,1) 0%, transparent 50%)," +
            "radial-gradient(circle_at_85%_25%, rgba(255,255,255,1) 0%, transparent 48%)," +
            "radial-gradient(circle_at_35%_95%, rgba(0,0,0,1) 0%, transparent 62%)",
        }}
      />

      <div className="min-h-screen grid place-items-center px-6 py-10">
        <div className="w-full max-w-[520px] grid gap-7">
          {picked && (
            <div key={pickedIndex ?? "init"}>
              <PaperCard result={picked} />
            </div>
          )}

          <div className="grid gap-3">
            {/* Primary */}
            <button
              onClick={onAgain}
              className="h-11 rounded-xl bg-[var(--accent)] text-white
                         hover:opacity-90 active:opacity-80 transition
                         tracking-[0.08em] text-[14px] font-medium"
            >
              もう一回引く
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onCopy}
                className="h-11 rounded-xl border border-[var(--border)] bg-white/70
                           hover:bg-white transition text-[13px]"
              >
                結果をコピー
              </button>

              <Link
                href="/"
                className="h-11 rounded-xl border border-[var(--border)] bg-white/70
                           hover:bg-white transition grid place-items-center text-[13px]"
              >
                TOPへ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
