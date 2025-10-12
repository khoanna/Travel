"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

type ExpItem = { id: number; title: string; src: string };

const ITEMS: ExpItem[] = [
    { id: 1, title: "Hot Air Balloon Ride to Nam Xay Viewpoint ", src: "/Experience/1.webp" },
    { id: 2, title: "Hiking to Tad Mok Falls", src: "/Experience/2.webp" },
    { id: 3, title: "Hanoi - City Tour of Timeless Elegance", src: "/Experience/3.webp" },
    { id: 4, title: "Hanoi Water Puppet Show", src: "/Experience/4.webp" },
];

export default function ExperiencesShowcase() {
    const scrollToTop = () => {
        // mượt, không giật
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="relative w-full bg-white py-14 md:py-20">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                {/* Header */}
                <div className="text-center">
                    <span className="inline-flex items-center rounded-full border border-blue-300 bg-white px-4 py-1.5 text-sm font-semibold text-red-400 shadow-sm">
                        Experiences
                    </span>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
                        Beyond Tours, It’s Your Personal Story in Vietnam
                    </h2>
                    <p className="mx-auto mt-4 max-w-5xl text-base leading-7 text-neutral-600 md:text-lg">
                        Travel isn’t just about seeing new places — it’s about connecting with them on a deeper level.
                        With a deep knowledge of Indochina, we ensure every trip resonates with authenticity and offers
                        moments of discovery that are uniquely yours.
                    </p>
                </div>

                <div
                    className=" mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-6 lg:h-[550px]"
                >
                    <div className="order-1 lg:order-none lg:row-span-5">
                        <ExpCard className="h-64 sm:h-72 lg:h-full" item={ITEMS[0]} />
                    </div>

                    <div className="order-2 lg:order-none lg:row-span-5">
                        <ExpCard className="h-64 sm:h-72 lg:h-full" item={ITEMS[1]} />
                    </div>

                    <div className="order-5 sm:order-5 sm:col-span-2 lg:order-none lg:col-span-2 lg:col-start-1 lg:row-start-6">
                        <StatCta className="h-auto lg:h-full" onClick={scrollToTop} />
                    </div>

                    <div
                        className=" order-3 lg:order-none lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-1">
                        <ExpCard className="h-64 sm:h-72 lg:h-full" item={ITEMS[2]} />
                    </div>

                    <div className=" order-4 lg:order-none lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-4">
                        <ExpCard className="h-64 sm:h-72 lg:h-full" item={ITEMS[3]} />
                    </div>
                </div>


            </div>
        </section>
    );
}

/* -------------------- Card -------------------- */
function ExpCard({ item, className = "" }: { item: ExpItem; className?: string }) {
    return (
        <article className={`relative overflow-hidden rounded-[28px] ring-1 ring-black/5 shadow-sm ${className}`}>
            {/* dùng h-full để fill ô lưới */}
            <div className="relative h-full">
                <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 z-10 p-6 text-2xl font-extrabold leading-tight text-white drop-shadow">
                    {item.title}
                </h3>
            </div>
        </article>
    );
}


/* -------------------- Stat CTA -------------------- */
function StatCta({ className = "", onClick }: { className?: string; onClick: () => void }) {
    return (
        <div
            className={[
                "flex flex-col items-center justify-between gap-4 rounded-[28px] bg-blue-600 px-8 py-4 text-white",
                "sm:flex-row sm:gap-6",
                className,
            ].join(" ")}
        >
            <div className="text-center sm:text-left">
                <div className="font-bold leading-none text-2xl">200+</div>
                <div className="text-sm font-medium text-blue-50/90 md:text-base">
                    Various destinations and tours
                </div>
            </div>

            <button
                onClick={onClick}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-colors hover:bg-blue-50"
                aria-label="View all experiences"
            >
                View all <ArrowRight className="h-4 w-4" />
            </button>
        </div>
    );
}
