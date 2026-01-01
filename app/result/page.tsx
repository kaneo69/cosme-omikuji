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

  const onAgain = useCallback(() => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(10);
    }
    setPickedIndex(pickIndexAvoidingLast(results.length));
  }, []);

  const picked = pickedIndex === null ? null : results[pickedIndex];

  const onCopy = useCallback(async () => {
    if (!picked) return;
    const text = `【化粧品おみくじ】\n${picked.text}\n2026の気分：${picked.mood}\n注力コスメ：${picked.focus}\n#化粧品おみくじ`;
    try {
      await navigator.clipboard.writeText(text);
      alert("コピーしました！");
    } catch {
      alert("コピーに失敗しました（ブラウザ設定をご確認ください）");
    }
  }, [picked]);

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#F7F2E8] text-[#1B1B1B]">
      {/* うっすら紙のムラ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle_at_15%_15%, rgba(255,255,255,1) 0%, transparent 45%)," +
            "radial-gradient(circle_at_85%_25%, rgba(255,255,255,1) 0%, transparent 40%)," +
            "radial-gradient(circle_at_35%_95%, rgba(0,0,0,1) 0%, transparent 55%)",
        }}
      />

      <div className="min-h-screen grid place-items-center p-6">
        <div className="grid gap-6 w-full place-items-center">
          {picked && (
            <div key={pickedIndex ?? "init"} className="w-full">
              <PaperCard result={picked} />
            </div>
          )}

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={onAgain}
              className="px-5 py-2 rounded-full border border-[#C1121F] text-[#C1121F]
                         bg-white/60 hover:bg-white transition"
            >
              もう一回引く
            </button>

            <button
              onClick={onCopy}
              className="px-5 py-2 rounded-full border border-[#E6DED1] bg-white/60
                         hover:bg-white transition"
            >
              結果をコピー
            </button>

            <Link
              href="/"
              className="px-5 py-2 rounded-full border border-[#E6DED1] bg-white/60
                         hover:bg-white transition"
            >
              TOPへ
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}