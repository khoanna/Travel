"use client";

import Image from "next/image";
import clsx from "clsx";

/**
 * HeroBanner
 * - Full‑bleed banner with background image (Next/Image fill)
 * - Centered big headline + subtitle
 * - Subtle gradient overlay for readability
 * - Accounts for fixed navbar (top padding)
 * - Highly configurable via props
 */
export default function HeroBanner({
  title = "Vietnam Beyond the Guidebooks",
  subtitle = "Every journey we craft is personal, rooted in Indochina’s depth and your desires.",
  imageUrl = "/Home/HomeBanner.webp",
  height = "h-[72vh] md:h-[82vh]",
  overlay = true,
  align = "center", 
}: {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  height?: string; // Tailwind height classes
  overlay?: boolean;
  align?: "left" | "center" | "right";
}) {
  const alignments = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  } as const;

  return (
    <section className={clsx("relative isolate w-full", height)}>
      {/* Background image */}
      <Image
        src={imageUrl}
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay gradient for readability */}
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/50" />
      )}

      {/* Content */}
      <div className={clsx(
        "relative z-10 mx-auto max-w-6xl px-6 md:px-10",
        "flex h-full flex-col justify-center gap-6",
        alignments[align]
      )}>
        <div className="text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)]">
          {title}
        </div>
        <p className="max-w-3xl text-base md:text-xl text-white/90 drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]">
          {subtitle}
        </p>
      </div>

      {/* Decorative bottom fade (optional, looks premium) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
}
