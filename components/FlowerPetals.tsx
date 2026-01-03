"use client";

type Props = {
  count?: number;
  className?: string;
};

/**
 * 背景用の椿っぽい花片アニメーション。
 * - SSR/CSR差分を避けるため、乱数は使わず決定論的パターンで配置
 * - 一部は金箔粒（petal-gold）として混ぜる
 */
export function FlowerPetals({ count = 18, className = "" }: Props) {
  const petals = Array.from({ length: count }, (_, i) => {
    // 位置・サイズ・速度を決定論的に作る（ランダムは使わない）
    const left = (i * 37) % 100; // 0-99 (%)
    const size = 10 + ((i * 13) % 14); // 10-23 (px)
    const dur = 8 + ((i * 7) % 10); // 8-17 (s)
    const delay = -((i * 11) % 12); // -0..-11 (s) 先に降ってる感
    const drift = -20 + ((i * 9) % 41); // -20..20 (px)
    const rot = (i * 47) % 360; // deg

    // たまに金箔粒を混ぜる（比率はここで調整）
    const isGold = i % 7 === 0;

    return { left, size, dur, delay, drift, rot, isGold };
  });

  return (
    <div
      aria-hidden
      className={`petals pointer-events-none fixed inset-0 overflow-hidden ${className}`}
    >
      {petals.map((p, idx) => (
        <span
          key={idx}
          className={`petal ${p.isGold ? "petal-gold" : ""}`}
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            // CSS変数で各要素の個性を出す
            ["--dur" as any]: `${p.dur}s`,
            ["--delay" as any]: `${p.delay}s`,
            ["--drift" as any]: `${p.drift}px`,
            ["--rot" as any]: `${p.rot}deg`,
          }}
        />
      ))}
    </div>
  );
}
