"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
    MapPin,
    Clock,
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    Plus,
    Minus,
    SendHorizontal,
    PhoneCall,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type TourDetail = {
    id: number;
    img: string[];
    title: string;
    destination: string[];
    duration: number;
    type: string[];
    price: number;
    general: string;
    special: string[];
    details: { title: string; description: string }[];
    accommodation: string;
};

export default function TourDetail({ tour }: { tour: TourDetail }) {
    return (
        <section className="w-full bg-white mt-24">
            {/* ======= GALLERY ======= */}
            <Gallery images={tour.img} />

            {/* ======= HEADER ======= */}
            <div className="mx-auto max-w-7xl px-6 pt-6 md:px-10">
                <div className="mb-2 flex items-center gap-2 text-sm text-neutral-600">
                    <MapPin className="h-4 w-4" />
                    {tour.destination.join(" • ")}
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
                    {tour.title}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                    {tour.type.map((t) => (
                        <span
                            key={t}
                            className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-sm font-semibold text-neutral-700"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* ======= 2-COLUMN LAYOUT ======= */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 md:px-10 lg:grid-cols-12">
                {/* LEFT: content */}
                <div className="lg:col-span-8">
                    <SectionCard title="This Trip At a Glance">
                        <p className="leading-7 text-neutral-700">{tour.general}</p>
                    </SectionCard>

                    <SectionCard title="What Makes This Trip Special">
                        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {tour.special.map((s, i) => (
                                <li key={i} className="flex gap-2 text-neutral-700">
                                    <CheckCircle2 className="mt-1 h-5 w-5 text-pink-600" />
                                    <span className="leading-7 w-9/12">{s}</span>
                                </li>
                            ))}
                        </ul>
                    </SectionCard>

                    <AccordionGroup title="Detailed Itinerary" items={tour.details} />
                </div>

                {/* RIGHT: sticky info + price + meta */}
                <aside className="lg:col-span-4">
                    <PriceCard
                        price={tour.price}
                        duration={tour.duration}
                        destinations={tour.destination}
                    />
                </aside>
            </div>
        </section>
    );
}

/* ----------------------------------------------------------------------------
 * GALLERY
 * --------------------------------------------------------------------------*/
function Gallery({ images }: { images: string[] }) {
    return (
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
            {/* fade mép cho sang */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-white to-transparent md:w-10" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white to-transparent md:w-10" />

            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                centeredSlides
                loop
                grabCursor
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                speed={700}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 140,
                    modifier: 1.1,
                    slideShadows: false,
                }}
                slidesPerView="auto"
                spaceBetween={18}
                navigation={{ nextEl: ".tourGallery-next", prevEl: ".tourGallery-prev" }}
                className="!pb-10"
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i} className="!w-[78vw] md:!w-[46vw] lg:!w-[34vw]">
                        <div className="relative h-56 md:h-64 lg:h-80 overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                            <Image
                                src={src}
                                alt={`photo ${i + 1}`}
                                fill
                                sizes="(min-width:1024px) 34vw, (min-width:768px) 46vw, 78vw"
                                className="object-cover transition-transform duration-500 group-[.swiper-slide-active]:scale-100 scale-[1.02]"
                                priority={i === 0}
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                className="tourGallery-prev cursor-pointer absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white p-2 text-neutral-800 shadow hover:bg-neutral-50"
                aria-label="Previous"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>
            <button
                className="tourGallery-next cursor-pointer absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white p-2 text-neutral-800 shadow hover:bg-neutral-50"
                aria-label="Next"
            >
                <ChevronRight className="h-5 w-5" />
            </button>

            <div className="tourGallery-dots mt-2 flex justify-center" />
        </div>
    );
}

/* ----------------------------------------------------------------------------
 * PRICE CARD + SECTION WRAPPER
 * --------------------------------------------------------------------------*/
function PriceCard({
    price,
    duration,
    destinations,
}: {
    price: number;
    duration: number;
    destinations: string[];
}) {
    return (
        <div className="sticky top-20 space-y-4">
            {/* Price + CTA */}
            <div className="rounded-3xl bg-white p-6 ring-1 ring-neutral-200 shadow-sm">
                <p className="text-sm text-neutral-600">Starting from</p>
                <div className="mt-1 text-3xl font-extrabold text-neutral-900 md:text-4xl">
                    US$ {price}
                    <span className="text-base font-semibold text-neutral-500"> /person</span>
                </div>
                <ul className="mt-3 space-y-4">
                    <li className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-5 w-5 text-neutral-700" />
                        <div className="w-10/12">
                            <div className="text-sm font-semibold text-neutral-900">Duration</div>
                            <div className="text-sm text-neutral-700">{duration} Days</div>
                        </div>
                    </li>
                    <li className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 text-neutral-700" />
                        <div className="w-10/12">
                            <div className="text-sm font-semibold text-neutral-900">Destinations</div>
                            <div className="text-sm text-neutral-700">{destinations.join(", ")}</div>
                        </div>
                    </li>
                </ul>

                <div className="mt-5 flex flex-col gap-3">
                    <button className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-3 font-semibold text-white hover:opacity-90">
                        Send My Inquiry <SendHorizontal className="h-4 w-4" />
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700">
                        Book Now <PhoneCall className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <div className="rounded-3xl bg-white p-6 ring-1 ring-neutral-200 shadow-sm">
                <h3 className="text-center text-2xl font-extrabold tracking-tight text-neutral-900">
                    WHY TRAVEL WITH US
                </h3>

                <ul className="mt-5 space-y-4 text-[15px] leading-7 text-neutral-800">
                    <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-600 text-white">
                            {/* dùng lucide-react */}
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                        </span>
                        <span>All itineraries are hand-picked for you and by you</span>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-600 text-white">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                        </span>
                        <span>Exceptional service from first contact to return</span>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-600 text-white">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M20 6 9 17l-5-5" />
                            </svg>
                        </span>
                        <span>Local Price for memorable trip</span>
                    </li>
                </ul>

            </div>
        </div>
    );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-8 rounded-3xl bg-white p-6 ring-1 ring-neutral-200 shadow-sm">
            <h3 className="mb-4 text-2xl font-extrabold text-pink-600">{title}</h3>
            {children}
        </div>
    );
}

/* ----------------------------------------------------------------------------
 * ITINERARY – Accordion (height animation, không lộ nội dung)
 * --------------------------------------------------------------------------*/
function useIsMd() {
    const [isMd, setIsMd] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(min-width:768px)");
        const onChange = () => setIsMd(mq.matches);
        onChange();
        mq.addEventListener?.("change", onChange);
        return () => mq.removeEventListener?.("change", onChange);
    }, []);
    return isMd;
}

function AccordionGroup({
    title,
    items,
}: {
    title: string;
    items: { title: string; description: string }[];
}) {
    const isMd = useIsMd();
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    useEffect(() => {
        setOpenIdx(isMd ? 0 : null);
    }, [isMd]);

    return (
        <div className="mb-10 rounded-3xl bg-white p-4 ring-1 ring-neutral-200 shadow-sm md:p-6">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-extrabold text-pink-600">{title}</h3>
            </div>

            <div className="space-y-4">
                {items.map((it, idx) => (
                    <AccordionRow
                        key={idx}
                        label={`Day ${idx + 1}: ${it.title}`}
                        isOpen={openIdx === idx}
                        onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
                    >
                        <div className="whitespace-pre-line leading-7 text-neutral-700">{it.description}</div>

                    </AccordionRow>
                ))}
            </div>
        </div>
    );
}

function AccordionRow({
    label,
    isOpen,
    onToggle,
    children,
}: {
    label: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
}) {
    const innerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<string>("0px");
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const node = innerRef.current;
        if (!node) return;

        if (isOpen) {
            const full = node.scrollHeight + "px";
            setAnimating(true);
            setHeight(full);
            const t = setTimeout(() => {
                setHeight("auto");
                setAnimating(false);
            }, 300);
            return () => clearTimeout(t);
        } else {
            if (height === "auto") {
                const full = node.scrollHeight + "px";
                setHeight(full);
                requestAnimationFrame(() => {
                    setAnimating(true);
                    setHeight("0px");
                });
                const t = setTimeout(() => setAnimating(false), 300);
                return () => clearTimeout(t);
            } else {
                setAnimating(true);
                setHeight("0px");
                const t = setTimeout(() => setAnimating(false), 300);
                return () => clearTimeout(t);
            }
        }
    }, [isOpen]); // eslint-disable-line

    return (
        <div
            className={`rounded-2xl border transition-colors ${isOpen ? "border-pink-200 bg-pink-50/40" : "border-neutral-200 bg-white"
                }`}
        >
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
                <span className={`text-lg font-semibold ${isOpen ? "text-pink-600" : "text-neutral-900"}`}>
                    {label}
                </span>
                <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </span>
            </button>

            <div className="overflow-hidden px-5" style={{ height, transition: "height 300ms ease" }}>
                <div
                    ref={innerRef}
                    className={`pb-5 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
                        } ${animating ? "pointer-events-none" : ""}`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

function Included({ label, desc }: { label: string; desc: string }) {
    return (
        <div className="flex items-start gap-3 rounded-xl bg-neutral-50 p-4 ring-1 ring-neutral-100">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-400" />
            <div>
                <div className="font-semibold text-neutral-900">{label}</div>
                <div className="text-sm text-neutral-600">{desc}</div>
            </div>
        </div>
    );
}
