"use client";

import { MapPin, Soup, Flag, Gem } from "lucide-react";
import clsx from "clsx";

/**
 * FeaturesSection
 * - Responsive 1/2/4‑column grid
 * - Pink soft icon badge, clean typography
 * - Subtle hover lift + ring
 * - Accessible and configurable via props
 */
export default function FeaturesSection({
  items = DEFAULT_ITEMS,
  className,
}: {
  items?: FeatureItem[];
  className?: string;
}) {
  return (
    <section className={clsx("mx-auto bg-[#F3F3F3] w-full px-6 md:px-10 py-16 md:py-24", className)}>
      <div className="grid grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <article
            key={it.title}
            className="group relative flex flex-col items-center text-center"
          >
            {/* Icon badge */}
            <span className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-pink-50 ring-1 ring-inset ring-pink-100 transition-transform duration-300 group-hover:scale-[1.03]">
              {it.icon}
            </span>

            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-neutral-800">
              {it.title}
            </h3>

            <p className="mt-3 max-w-[32ch] text-base leading-7 text-neutral-600 md:max-w-[36ch]">
              {it.description}
            </p>

          </article>
        ))}
      </div>
    </section>
  );
}

export type FeatureItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const DEFAULT_ITEMS: FeatureItem[] = [
  {
    title: "Authentic Local Experiences",
    description:
      "At Seniworld, we bring you closer to the soul of Indochina – experiences that only locals can share with you.",
    icon: <Soup className="h-10 w-10 text-pink-600" />,
  },
  {
    title: "Stress‑Free, Flexible Travel",
    description:
      "Your journey is fully customizable and stress‑free, so you can explore without a worry in the world.",
    icon: <MapPin className="h-10 w-10 text-pink-600" />,
  },
  {
    title: "Expert Support, Anytime You Need It",
    description:
      "We’re here for you 24/7. Whether it’s last‑minute advice or local insights, we’ve got you covered at every step.",
    icon: <Flag className="h-10 w-10 text-pink-600" />,
  },
  {
    title: "Best Value with Honest Pricing",
    description:
      "Fair pricing, no hidden fees, and no middleman. What you see is what you get — guaranteed.",
    icon: <Gem className="h-10 w-10 text-pink-600" />,
  },
];

/* Example usage
import FeaturesSection from "@/components/FeaturesSection";

export default function Page() {
  return (
    <>
      <FeaturesSection />
      // or pass custom items
      <FeaturesSection items={[{title:"...", description:"...", icon:<Gem/>}]} />
    </>
  )
}
*/
