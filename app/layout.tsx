import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const sans = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Noto_Serif_JP({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "化粧品おみくじ",
  description: "2026の気分と、今年力を入れるべきコスメを引くおみくじ",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
