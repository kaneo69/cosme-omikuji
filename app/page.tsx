"use client";
import { useRouter } from "next/navigation";
import { OmikujiBox } from "../components/OmikujiBox";

export default function Home() {
  const router = useRouter();

  const onDraw = () => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate(10);
    router.push("/result");
  };

  return (
    <main className="min-h-screen pop-bg relative overflow-hidden">
      <div className="min-h-screen grid place-items-center px-6 py-10">
        <div className="w-full max-w-[620px] grid gap-7 place-items-center text-center">
          <header className="grid gap-3">
            <div className="inline-flex items-center gap-2 justify-center">
              <span className="px-3 py-1 rounded-full bg-white/70 border border-[var(--border)] text-[11px] tracking-[0.18em]">
                COSME OMikuji
              </span>
              <span className="px-3 py-1 rounded-full bg-white/70 border border-[var(--border)] text-[11px] tracking-[0.18em]">
                2026
              </span>
            </div>

            <h1 className="font-[var(--font-pop)] text-[34px] leading-tight tracking-[0.06em]">
              化粧品おみくじ
            </h1>

            <p className="text-[13px] leading-relaxed text-[var(--muted)] tracking-[0.02em]">
              2026の気分と、今年力を入れるべきコスメ
            </p>
          </header>

          <OmikujiBox onDraw={onDraw} />

          <p className="text-[12px] text-[var(--muted)]">
            何回でも引いてOK♪
          </p>
        </div>
      </div>
    </main>
  );
}
