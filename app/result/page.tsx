"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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

  const picked = useMemo(
    () => (pickedIndex === null ? null : results[pickedIndex]),
    [pickedIndex]
  );

  const onAgain = useCallback(() => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate(10);
    setPickedIndex(pickIndexAvoidingLast(results.length));
  }, []);

  const onCopy = useCallback(async () => {
    if (!picked) return;

    const moodLines = picked.moodDetails.slice(0, 5).map((s) => `・${s}`).join("\n");
    const tipLines = picked.focusTips.slice(0, 5).map((s) => `・${s}`).join("\n");

    const text =
      `【化粧品おみくじ 2026】\n` +
      `\n` +
      `2026の気分：${picked.moodTitle}\n` +
      `${picked.moodCatch}\n` +
      `${moodLines}\n` +
      `\n` +
      `注力コスメ：${picked.focus}\n` +
      `${tipLines}\n` +
      `\n` +
      `お告げ：\n${picked.message}\n` +
      `\n#化粧品おみくじ`;

    try {
      await navigator.clipboard.writeText(text);
      alert("コピーしました！");
    } catch {
      alert("コピーに失敗しました");
    }
  }, [picked]);

  return (
    <main className="min-h-screen pop-bg relative overflow-hidden">
      <div className="min-h-screen grid place-items-center px-6 py-10">
        <div className="w-full max-w-[520px] grid gap-7">
          {picked && (
            <div key={pickedIndex ?? "init"}>
              <PaperCard result={picked} />
            </div>
          )}

          <div className="grid gap-3">
            <button
              onClick={onAgain}
              className="h-11 rounded-2xl bg-[var(--accent)] text-white
                         hover:opacity-90 active:opacity-80 transition
                         tracking-[0.08em] text-[14px] font-medium
                         shadow-[0_14px_30px_rgba(255,59,122,0.25)]"
            >
              もう一回引く
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onCopy}
                className="h-11 rounded-2xl border border-[var(--border)] bg-white/75
                           hover:bg-white transition text-[13px]
                           shadow-[0_10px_22px_rgba(0,0,0,0.08)]"
              >
                結果をコピー
              </button>

              <Link
                href="/"
                className="h-11 rounded-2xl border border-[var(--border)] bg-white/75
                           hover:bg-white transition grid place-items-center text-[13px]
                           shadow-[0_10px_22px_rgba(0,0,0,0.08)]"
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
