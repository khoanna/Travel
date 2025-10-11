"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

// ⚠️ tránh trùng tên với component UI
import type { TourDetail as TourDetailType } from "@/data";
import { tourList } from "@/data";
import Link from "next/link";
import TourDetail from "@/components/TourDetail/Detail";

export default function Page() {
  const params = useParams();
  const id = String(params?.id ?? "");

  // tìm tour theo id từ TourData
  const tour = tourList.find(
    (t: TourDetailType) => String(t.id) === id
  ) as TourDetailType | undefined;

  // cuộn lên đầu khi đổi tour
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!tour) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-neutral-900">Tour not found</h1>
        <p className="mt-2 text-neutral-600">
          We couldn’t find the tour you’re looking for.
        </p>
        <Link
          href="/tours"
          className="mt-6 inline-flex rounded-full bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-700"
        >
          Back to all tours
        </Link>
      </div>
    );
  }

  return <TourDetail tour={tour} />;
}
