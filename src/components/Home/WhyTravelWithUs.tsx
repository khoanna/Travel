"use client";

import Image from "next/image";
import { Award } from "lucide-react";

const FEATURES = [
  { title: "Trusted & Recognized" },
  { title: "Experienced & Local Team" },
  { title: "Support You Can Rely On" },
  { title: "No Hidden Fees, Just Honest Pricing" },
];

export default function WhyTravelWithUs() {
  return (
    <section className="relative isolate">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Home/Tour.webp"
          alt="Why travel background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/55" />
        {/* top/bottom fade for premium look */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* content */}
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center text-white md:px-10 md:py-24">
        <span className="inline-flex items-center rounded-full border border-pink-300 bg-white/10 px-4 py-1.5 text-sm font-semibold text-pink-200 backdrop-blur">
          What make us different?
        </span>

        <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-6xl">
          Why travel with Seni World?
        </h2>

        <p className="mx-auto mt-4 max-w-5xl text-balance text-base text-white/90 md:text-lg">
          Seniworld is a team of passionate travelers who believe in doing things the right way.
          With more than a decade of experience in crafting journeys, these are four reasons why
          you can count on us.
        </p>

        {/* features */}
        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="mx-auto flex w-full max-w-[520px] items-center gap-4 rounded-3xl bg-white/90 p-4 text-left text-neutral-900 shadow-sm backdrop-blur transition hover:bg-white"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-50 ring-1 ring-pink-100">
                <Award className="h-6 w-6 text-pink-600" />
              </span>
              <p className="font-semibold">{f.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
