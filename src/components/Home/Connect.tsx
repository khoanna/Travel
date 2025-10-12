"use client";

import Image from "next/image";
import Link from "next/link";

/** tiny WhatsApp svg (không cần thêm thư viện) */
function Connect(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
            <path
                fill="#25D366"
                d="M19.11 6.2a9.74 9.74 0 0 1 6.74 9.31c0 5.39-4.37 9.76-9.76 9.76a9.7 9.7 0 0 1-4.69-1.2l-3.36 1.1a1 1 0 0 1-1.28-1.25l1.04-3.4A9.7 9.7 0 0 1 9.2 8.38a9.75 9.75 0 0 1 9.91-2.18Z"
            />
            <path
                fill="#fff"
                d="M22.7 19.65c-.16.44-.94.84-1.4.9-.36.05-.83.1-2.68-.55-2.25-.85-3.7-2.95-3.82-3.09-.11-.14-.9-1.2-.9-2.3 0-1.1.57-1.64.77-1.86.2-.22.44-.27.58-.27.14 0 .29 0 .42.01.13.01.31-.05.48.36.16.4.55 1.37.6 1.47.05.1.08.22.01.36-.07.13-.11.22-.22.34-.1.12-.22.27-.32.36-.1.09-.21.2-.09.4.12.2.54.88 1.17 1.43.81.72 1.5.94 1.71 1.04.22.1.35.08.48-.05.13-.13.56-.66.7-.88.14-.22.29-.19.48-.11.2.08 1.23.58 1.44.68.21.1.35.16.4.25.06.09.06.53-.09.97Z"
            />
        </svg>
    );
}

type Person = {
    src: string;
    alt: string;
};

type ContactUsProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    ctaText?: string;
    ctaHref?: string;
    whatsappNumber?: string; // hiển thị
    whatsappHref?: string;   // link click
    people?: Person[];
};

export default function ContactUs({
    title = "Contact Our Expert Team Today and\nSee Where It Takes You.",
    subtitle = "",
    description = "Share your ideas with our local expert team – we’re here to listen and help you shape a meaningful journey through Indochina.",
    ctaText = "Let’s Plan Together",
    ctaHref = "/tailor",
    whatsappNumber = "+84 96 219 35 27",
   
}: ContactUsProps) {
    return (
        <section className="w-full  bg-rose-50">
            <div className="grid w-full grid-cols-1 gap-8 text-center lg:text-left p-4 md:px-40 lg:grid-cols-12 lg:gap-12 lg:py-20">
                <div className="lg:col-span-6">
                    {subtitle ? (
                        <p className="mb-3 inline-flex rounded-full bg-white/70 px-4 py-1 text-sm font-semibold text-pink-600 ring-1 ring-rose-200">
                            {subtitle}
                        </p>
                    ) : null}

                    <h2 className="whitespace-pre-line text-3xl font-extrabold leading-tight text-neutral-900 md:text-4xl">
                        {title}
                    </h2>

                    <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
                        {description}
                    </p>
                </div>
                <div className="lg:col-span-6 flex justify-end gap-6 items-center">
                    <Link
                        href={ctaHref}
                        className="flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
                    >
                        {ctaText}
                    </Link>

                    <div
                        className="group inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-neutral-800 ring-1 ring-neutral-200 transition hover:bg-white"
                    >
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-neutral-200">
                            <Connect className="h-6 w-6" />
                        </span>
                        <div className="leading-tight">
                            <div className="text-base text-neutral-900">{whatsappNumber}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
