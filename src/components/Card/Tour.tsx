import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TourDetail } from "@/data";

export default function TourCard({ tour }: { tour: TourDetail }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/60 bg-white/80 backdrop-blur shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition-all hover:bg-white hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)]">
      {/* Image */}
      <div className="relative">
        <Image
          src={tour.img}
          alt={tour.title}
          width={1200}
          height={800}
          className="h-64 w-full object-cover"
          priority={false}
        />

        {/* Tag */}
        <span className="absolute left-4 top-4 rounded-full bg-pink-600 px-3 py-1 text-xs font-semibold text-white shadow">
          {tour.type[0]}
        </span>

        <span className="absolute right-4 top-4 rounded-full bg-black/45 px-3 py-1 text-xs font-semibold text-white shadow">
          {tour.duration} days
        </span>

      </div>

      {/* Body */}
      <div className="p-5">
        <p className="line-clamp-1 text-sm text-neutral-600">{tour.destination.join(", ")}</p>
        <h3 className="mt-2 line-clamp-2 text-lg font-semibold text-neutral-900 h-[3.5rem]">
          {tour.title}
        </h3>

        <div className="my-4 h-px w-full bg-neutral-200/70" />

        <div className="flex items-center justify-between">
          <div className="text-sm text-neutral-500">
            From
            <div className="text-2xl font-extrabold text-neutral-900">
              ${tour.price}
            </div>
          </div>

          <Link
            href={`/tour/${tour.id}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-pink-200 bg-white/90 px-5 py-2 font-semibold text-neutral-900 backdrop-blur transition-colors hover:border-pink-500 hover:bg-pink-50"
          >
            View Tour <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}