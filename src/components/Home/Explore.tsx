"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExploreStyles() {
    return (
        <section className="relative w-full bg-neutral-50 py-14 md:py-20">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
                {/* Section header */}
                <div className="text-center">
                    <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-semibold text-red-400 shadow-sm">
                        Travel styles
                    </span>
                    <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-neutral-800 md:text-5xl">
                        Explore Vietnam Your Way
                    </h2>
                    <p className="mx-auto mt-3 max-w-3xl text-neutral-600 md:text-lg">
                        Discover hidden gems for your next getaway
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {TILES.map((t) => (
                        <StyleTile key={t.id} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- Tile ---------------- */
function StyleTile({ id, title,  }: { id: number; title: string}) {
    const src = `/Explore/${id}.webp`;
    return (
        <div
            className="h-18 cursor-pointer group relative block overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
            {/* image */}
            <div className="absolute inset-0 ">
                <Image
                    src={src}
                    alt={title}
                    fill
                    sizes="h-12"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-black/40" />
            </div>

            <div className="relative z-10 flex items-center justify-center p-5 ">
                <div>
                    <h3 className="text-xl font-bold text-white drop-shadow">
                        {title}
                    </h3>
                </div>
            </div>

            {/* focus ring */}
            <span className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/0 transition group-hover:ring-blue-500/30" />
        </div>
    );
}

/* ---------------- Data ---------------- */
const TILES = [
    { id: 1, title: "Honeymoon", href: "#" },
    { id: 2, title: "Family Holiday", href: "#" },
    { id: 3, title: "Sightseeing", href: "#" },
    { id: 4, title: "Beach Holiday", href: "#" },
] as const;
