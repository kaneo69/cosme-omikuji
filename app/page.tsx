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
    <main className="min-h-screen relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle_at_18%_12%, rgba(255,255,255,1) 0%, transparent 50%)," +
            "radial-gradient(circle_at_82%_30%, rgba(255,255,255,1) 0%, transparent 46%)," +
            "radial-gradient(circle_at_30%_92%, rgba(0,0,0,1) 0%, transparent 62%)",
        }}
      />

      <div className="min-h-screen grid place-items-center px-6 py-10">
        <div className="w-full max-w-[520px] grid gap-8 place-items-center text-center">
          <header className="grid gap-3">
            <div className="text-[11px] tracking-[0.22em] text-[var(--muted)]">
              COSME OMikuji 2026
            </div>
            <h1 className="font-serif text-[30px] leading-tight font-semibold tracking-[0.08em]">
              化粧品おみくじ
            </h1>
            <p className="text-[13px] leading-relaxed tracking-[0.03em] text-[var(--muted)]">
              2026の気分と、今年力を入れるべきコスメ
            </p>
          </header>

          <OmikujiBox onDraw={onDraw} />
        </div>
      </div>
    </main>
  );
}
