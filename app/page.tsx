"use client";
import { useRouter } from "next/navigation";
import { OmikujiBox } from "../components/OmikujiBox";

export default function Home() {
  const router = useRouter();

  const onDraw = () => {
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate(10);
    }
    router.push("/result");
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#F7F2E8] text-[#1B1B1B]">
      {/* うっすら紙のムラ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle_at_20%_10%, rgba(255,255,255,1) 0%, transparent 45%)," +
            "radial-gradient(circle_at_80%_30%, rgba(255,255,255,1) 0%, transparent 40%)," +
            "radial-gradient(circle_at_30%_90%, rgba(0,0,0,1) 0%, transparent 55%)",
        }}
      />
      {/* 薄い市松 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(#000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="min-h-screen grid place-items-center p-6">
        <div className="grid gap-6 place-items-center text-center">
          <h1 className="text-2xl font-semibold tracking-wide">化粧品おみくじ</h1>
          <p className="text-sm opacity-70">2026の気分と、今年力を入れるべきコスメ</p>

          <OmikujiBox onDraw={onDraw} />
        </div>
      </div>
    </main>
  );
}