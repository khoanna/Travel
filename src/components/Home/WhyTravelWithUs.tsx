"use client";

import Image from "next/image";
import { Award } from "lucide-react";

// Swiper (slider)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const FEATURES = [
  { title: "Trusted & Recognized" },
  { title: "Experienced & Local Team" },
  { title: "Support You Can Rely On" },
  { title: "No Hidden Fees, Just Honest Pricing" },
];

// /Feedback/1.jpg -> /Feedback/10.jpg
const FEEDBACK_IMAGES = Array.from({ length: 10 }, (_, i) => `/Feedback/${i + 1}.jpg`);

export default function WhyTravelWithUs() {
  return (
    <section className="relative isolate">
      {/* ======= Background ======= */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Home/Tour.webp"
          alt="Why travel background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ======= Content ======= */}
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center  md:px-10 md:py-24">
        <span className="inline-flex items-center rounded-full border border-blue-300/60 bg-white/10 px-4 py-1.5 text-sm font-semibold text-red-400 backdrop-blur">
          What make us different?
        </span>

        <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-6xl">
          Why travel with Velogo Travel?
        </h2>

        <p className="mx-auto mt-4 max-w-5xl text-balance text-base /90 md:text-lg">
          Velogo Travel offers a variety of options for group sizes short-term tourism in Vietnam.
          These tours are designed to provide travelers with an authentic and memorable experience,
          exploring the country&apos;s natural beauty and vibrant culture. Velogo Travel ensures
          well-planned itineraries that combine relaxation with adventure. The tours are ideal for
          those who wish to discover the essence of Vietnam in short time.
        </p>

        {/* ======= Features (glassmorphism nhẹ) ======= */}
        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="mx-auto flex w-full max-w-[520px] items-center gap-4 rounded-3xl bg-white/85 p-4 text-left text-neutral-900 shadow-sm ring-1 ring-white/40 backdrop-blur-md transition hover:bg-white"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-100">
                <Award className="h-6 w-6 text-blue-600" />
              </span>
              <p className="font-semibold">{f.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ======= Traveler Moments (Slider hiện đại) ======= */}
      <div className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h3 className="text-2xl font-extrabold /95">Traveler Moments</h3>
        </div>

        <div className="group relative rounded-3xl bg-white/8 p-4 ring-1 ring-white/15 backdrop-blur">
          {/* arrows - chỉ hiện khi hover trên desktop */}
          <button
            className="why-prev cursor-pointer absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/95 p-2 text-neutral-800 shadow transition hover:bg-white md:group-hover:inline-flex"
            aria-label="Prev"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="why-next cursor-pointer absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/95 p-2 text-neutral-800 shadow transition hover:bg-white md:group-hover:inline-flex"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, FreeMode, Autoplay]}
            navigation={{ nextEl: ".why-next", prevEl: ".why-prev" }}
            freeMode={{ enabled: true, momentum: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={650}
            slidesPerView={1.2}
            spaceBetween={12}
            breakpoints={{
              480: { slidesPerView: 2.1, spaceBetween: 14 },
              768: { slidesPerView: 3.1, spaceBetween: 16 },
              1024: { slidesPerView: 4.1, spaceBetween: 18 },
            }}
            className="!pb-1"
          >
            {FEEDBACK_IMAGES.map((src, i) => (
              <SwiperSlide key={src}>
                <figure className="group/fig overflow-hidden rounded-2xl bg-white/6 shadow-sm ring-1 ring-white/15">
                  <div className="relative h-56 w-full md:h-64 lg:h-72">
                    <Image
                      src={src}
                      alt={`Traveler feedback ${i + 1}`}
                      fill
                      sizes="(min-width:1024px) 22vw, (min-width:768px) 30vw, 70vw"
                      className="object-cover transition-transform duration-500 group-hover/fig:scale-[1.04]"
                      loading="lazy"
                    />
                    {/* overlay cực nhẹ cho cảm giác chiều sâu, không làm tối */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
