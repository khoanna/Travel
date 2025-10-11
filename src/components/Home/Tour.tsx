"use client";

import Image from "next/image";
import TourCard from "../Card/Tour";
import { TourDetail, tourList } from "@/data";

export default function TopPicksVietnam() {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Home/Tour.webp"
          alt="Top picks background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* dark-to-light overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-white/85" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-pink-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-pink-600 shadow-sm">
            Tour Packages
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Our Top Picks for Your Own Journey
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-neutral-700 md:text-lg">
            Handpicked with care and crafted from real travel experiences, these are
            Seniworld’s top picks to kick-start a journey that’s truly your own.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOURS.slice(0, 3).map((t) => (
            <TourCard key={t.id} tour={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Card ------------------------------------ */



const TOURS: TourDetail[] = tourList.slice(0, 4);


