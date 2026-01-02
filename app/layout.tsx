import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Mochiy_Pop_One, M_PLUS_Rounded_1c } from "next/font/google";

const pop = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pop",
});

const rounded = M_PLUS_Rounded_1c({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rounded",
});

export const metadata: Metadata = {
  title: "化粧品おみくじ",
  description: "2026の気分と、今年力を入れるべきコスメを引くおみくじ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${pop.variable} ${rounded.variable}`}>
      <body className="font-[var(--font-rounded)]">{children}</body>
    </html>
  );
}
