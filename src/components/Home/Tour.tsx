"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";

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

/* -------------------------------- UI bits -------------------------------- */

function Chip({
  children,
  active = false,
  disabled = false,
}: {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <span
      className={[
        "inline-flex select-none items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all",
        active
          ? "bg-pink-600 text-white shadow-sm"
          : disabled
          ? "bg-neutral-900/90 text-white/80 opacity-70"
          : "bg-white/90 text-neutral-800 border border-neutral-200 backdrop-blur",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

/* ------------------------------- Card ------------------------------------ */

type Tour = {
  id: string;
  tag: string;
  image: string;
  location: string; // Vietnam
  days: number;
  title: string;
  route: string;
  priceFrom: number;
  href: string;
};

const TOURS: Tour[] = [
  {
    id: "vnm-01",
    tag: "Tour Package",
    image:"/Home/Tour1.webp",
    location: "Vietnam",
    days: 7,
    route:
      "Hanoi – Halong Bay – Danang – Hoian – Ho Chi Minh City – Mekong Delta",
    title: "7 days Incredible Journey to Vietnam: Hanoi, Danang and…",
    priceFrom: 495,
    href: "#",
  },
  {
    id: "vnm-02",
    tag: "Tour Package",
    image:"/Home/Tour2.webp",
    location: "Vietnam",
    days: 4,
    route: "Phu Quoc",
    title: "Phu Quoc Highlights: Beaches, Safari & Island Fun",
    priceFrom: 249,
    href: "#",
  },
  {
    id: "vnm-03",
    tag: "Tour Package",
    image:"/Home/Tour3.webp",
    location: "Vietnam",
    days: 7,
    route:
      "Ho Chi Minh City – Danang – Hoian – Hanoi – Halong Bay",
    title: "Around Highlights Vietnam in 7 Days: Saigon, Da Nang, Hanoi…",
    priceFrom: 479,
    href: "#",
  },
];

function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/60 bg-white/80 backdrop-blur shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition-all hover:bg-white hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)]">
      {/* Image */}
      <div className="relative">
        <Image
          src={tour.image}
          alt={tour.title}
          width={1200}
          height={800}
          className="h-64 w-full object-cover"
          priority={false}
        />

        {/* Tag */}
        <span className="absolute left-4 top-4 rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white shadow">
          {tour.tag}
        </span>

        {/* Meta overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-0">
          <div className="mx-3 mb-3 flex items-center justify-between rounded-xl bg-black/45 px-3 py-2 text-white backdrop-blur-sm">
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="h-4 w-4" /> {tour.location}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm">
              <Clock className="h-4 w-4" /> {tour.days} Days
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="line-clamp-1 text-sm text-neutral-600">{tour.route}</p>
        <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-neutral-900">
          {tour.title}
        </h3>

        <div className="my-4 h-px w-full bg-neutral-200/70" />

        <div className="flex items-center justify-between">
          <div className="text-sm text-neutral-500">
            From
            <div className="text-2xl font-extrabold text-neutral-900">
              ${tour.priceFrom}
            </div>
          </div>

          <Link
            href={tour.href}
            className="inline-flex items-center gap-2 rounded-full border-2 border-pink-200 bg-white/90 px-5 py-2 font-semibold text-neutral-900 backdrop-blur transition-colors hover:border-pink-500 hover:bg-pink-50"
          >
            View Tour <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
