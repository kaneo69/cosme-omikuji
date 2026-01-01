"use client";
import type { ReactNode } from "react";
import type { ItemKey } from "../app/results";

type Props = {
  itemKey: ItemKey;
  className?: string;
};

function Wrap({
  children,
  className,
}: { children: ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className ?? "h-16 w-16"} aria-hidden="true">
      {children}
    </svg>
  );
}

const S = {
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ItemIllustration({ itemKey, className }: Props) {
  const base = { stroke: "currentColor", fill: "none" as const, ...S };
  const accent = { stroke: "#C1121F", fill: "none" as const, ...S };

  switch (itemKey) {
    case "primer":
      return (
        <Wrap className={className}>
          <g {...base}>
            <path d="M26 10h12v6H26z" />
            <path d="M30 10V6h4v4" />
            <path d="M24 16h16v34a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V16z" />
            <path {...accent} d="M28 28h8" />
          </g>
        </Wrap>
      );

    case "concealer":
      return (
        <Wrap className={className}>
          <g {...base}>
            <path d="M22 12h20l-2 10H24l-2-10z" />
            <path d="M24 22h16v26a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V22z" />
            <path {...accent} d="M26 36h12" />
          </g>
        </Wrap>
      );

    case "lip":
      return (
        <Wrap className={className}>
          <g {...base}>
            <path d="M26 10h12v10H26z" />
            <path d="M24 20h16v8H24z" />
            <path d="M26 28h12v20a6 6 0 0 1-6 6 6 6 0 0 1-6-6V28z" />
            <path {...accent} d="M26 34h12" />
          </g>
        </Wrap>
      );

    case "brow":
      return (
        <Wrap className={className}>
          <g {...base}>
            <path d="M18 46l30-30 4 4-30 30-8 2 4-6z" />
            <path d="M42 22l4 4" />
            <path {...accent} d="M20 50l6-4" />
          </g>
        </Wrap>
      );

    case "exfoliation":
      return (
        <Wrap className={className}>
          <g {...base}>
            <path d="M26 10h12v6H26z" />
            <path d="M24 16h16v34a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V16z" />
            <circle cx="28" cy="34" r="2" />
            <circle cx="34" cy="36" r="2" />
            <circle cx="30" cy="40" r="2" />
            <path {...accent} d="M40 32c3 2 3 8 0 10" />
          </g>
        </Wrap>
      );

    case "blush":
      return (
        <Wrap className={className}>
          <g {...base}>
            <path d="M18 18h28v28H18z" />
            <path d="M18 26h28" />
            <circle cx="32" cy="38" r="7" />
            <path {...accent} d="M28 38h8" />
          </g>
        </Wrap>
      );

    case "eyeshadow":
      return (
        <Wrap className={className}>
          <g {...base}>
            <path d="M18 20h28v24H18z" />
            <path d="M18 28h28" />
            <path d="M26 28v16M38 28v16" />
            <path {...accent} d="M22 24h10" />
          </g>
        </Wrap>
      );

    case "highlight":
      return (
        <Wrap className={className}>
          <g {...base}>
            <path d="M26 10h12v14H26z" />
            <path d="M24 24h16v24a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V24z" />
            <path {...accent} d="M40 30l4-4M44 40h6" />
          </g>
        </Wrap>
      );

    case "mascara":
      return (
        <Wrap className={className}>
          <g {...base}>
            <path d="M22 12h12v44H22z" />
            <path d="M38 18h4v32h-4z" />
            <path {...accent} d="M38 26h4" />
          </g>
        </Wrap>
      );

    case "hairmist":
      return (
        <Wrap className={className}>
          <g {...base}>
            <path d="M26 12h12v6H26z" />
            <path d="M24 18h16v34a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V18z" />
            <path {...accent} d="M44 26c4 2 4 10 0 12" />
            <path {...accent} d="M48 22c6 3 6 16 0 19" />
          </g>
        </Wrap>
      );

    default:
      return null;
  }
}