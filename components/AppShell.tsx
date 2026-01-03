"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { FlowerPetals } from "./FlowerPetals";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {/* 背景の花びら（重いと感じたら count を減らす） */}
      <FlowerPetals count={16} />

    <AnimatePresence mode="wait">
        <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
        transition={{ type: "spring", stiffness: 170, damping: 20, mass: 0.9 }} // しっとり
  >
        {children}
        </motion.div>
    </AnimatePresence>

    </>
  );
}
