"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
    X,
    SendHorizontal,
    RotateCcw,
    CalendarDays,
    Users,
    MapPin,
    MessageSquareText,
    Phone,
    Mail,
    UserRound,
    Globe2,
} from "lucide-react";

export default function BookingModal({
    open,
    onClose,
    tour,
}: {
    open: boolean;
    onClose: () => void;
    tour: string; // tên tour sẽ được gửi kèm
}) {
    const dialogRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = React.useState(false);

    // URL Apps Script Web App (đặt trong .env)
    const endpoint = process.env.NEXT_PUBLIC_SHEET_WEBAPP_URL || "";

    // ESC để đóng
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        if (open) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    // Click ngoài để đóng
    const onBackdrop = (e: React.MouseEvent) => {
        if (e.target === dialogRef.current) onClose();
    };

    // Khóa scroll nền khi mở (tránh giật layout)
    useEffect(() => {
        if (!open) return;
        const prevOverflow = document.body.style.overflow;
        const prevPos = document.body.style.position;
        const prevW = document.body.style.width;
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        return () => {
            document.body.style.overflow = prevOverflow;
            document.body.style.position = prevPos;
            document.body.style.width = prevW;
        };
    }, [open]);

    // Gom dữ liệu form + tour và gửi về Google Sheet
    async function handleSubmit() {
        setLoading(true);
        if (!formRef.current) return;
        if (!endpoint) {
            alert("Missing NEXT_PUBLIC_SHEET_WEBAPP_URL");
            return;
        }

        const fd = new FormData(formRef.current);
        const payload: Record<string, string> = {};
        fd.forEach((v, k) => (payload[k] = String(v)));

        // bổ sung meta
        payload.tour = tour; // tên tour cần gửi
        payload.page = typeof window !== "undefined" ? window.location.href : "";
        payload.ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" }, // tránh preflight
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                throw new Error(`Network error (${res.status})`);
            }

            alert("✅ Your inquiry has been sent! We’ll get back to you soon.");
            onClose();
            setLoading(false);

        } catch (err) {
            setLoading(false);
            console.error(err);
            alert("❌ Failed to send your request. Please try again later.");
        }
    }

    if (!open) return null;

    const modalContent = (
        <div
            ref={dialogRef}
            onMouseDown={onBackdrop}
            className="
        fixed inset-0 z-[99999]
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm
        p-4 sm:p-6 md:p-10 lg:p-16
      "
            role="dialog"
            aria-modal="true"
            style={{ zIndex: 2147483647 }}
        >
            {/* Khối modal có khoảng thở trên/dưới nhờ my-6/md:my-10 */}
            <div
                className="
          relative w-full max-w-5xl
          my-6 md:my-10
          overflow-hidden rounded-3xl bg-white
          shadow-2xl ring-1 ring-neutral-200
        "
            >
                {/* Header */}
                <div className="relative border-b border-neutral-100 bg-gradient-to-t from-white via-white to-pink-50 px-5 pb-5 pt-6 sm:px-6 md:px-8">
                    <h3 className="text-center text-2xl font-extrabold text-neutral-900 md:text-3xl">
                        SEND MY INQUIRY
                    </h3>
                    <p className="mt-1 text-center text-sm text-neutral-500">
                        Don’t hesitate to fill the form below — get free quotation within 2hrs ✨
                    </p>

                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute right-4 top-4 inline-flex rounded-full p-2 text-neutral-500 hover:bg-neutral-100"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Body: giảm max-h để luôn chừa mép trên/dưới đẹp mắt */}
                <div className="max-h-[74vh] overflow-y-auto px-5 py-6 sm:px-6 md:px-8 md:py-8">
                    <form
                        ref={formRef}
                        onSubmit={async (e) => {
                            e.preventDefault();
                            await handleSubmit();
                        }}
                        onReset={(e) => e.currentTarget.reset()}
                        className="space-y-10"
                    >
                        {/* (Optional) Nếu muốn hiển thị tên tour ở đầu form */}
                        {/* <div className="rounded-xl bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-700">
              Tour: {tour}
            </div> */}

                        <SectionTitle
                            index={1}
                            title="Your Travel Plan"
                            subtitle="Tell us a bit about the trip you have in mind"
                        />

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <Input
                                label="Travel Date"
                                name="date"
                                type="date"
                                icon={<CalendarDays className="h-4 w-4" />}
                                required
                            />
                            <Select
                                label="Adults"
                                name="adults"
                                icon={<Users className="h-4 w-4" />}
                                options={["No of adults", "1", "2", "3", "4", "5", "6+"].map((t) => ({
                                    label: t,
                                    value: t,
                                }))}
                                required
                            />
                            <Select
                                label="Children (5–10)"
                                name="children"
                                icon={<Users className="h-4 w-4" />}
                                options={["No of children", "0", "1", "2", "3", "4", "5+"].map((t) => ({
                                    label: t,
                                    value: t,
                                }))}
                            />
                        </div>

                        <Input
                            label="Pickup Location"
                            name="pickup"
                            placeholder="Enter your address or hotel name…"
                            icon={<MapPin className="h-4 w-4" />}
                            required
                        />

                        <Textarea
                            label="Special Requests"
                            name="requests"
                            placeholder="Any special requests?"
                            icon={<MessageSquareText className="h-4 w-4" />}
                            rows={5}
                        />

                        <SectionTitle
                            index={2}
                            title="Your Personal Information"
                            subtitle="Your information will be kept private"
                        />

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <Select
                                label="Title"
                                name="title"
                                options={["—Please choose an option—", "Mr.", "Ms.", "Mrs.", "Mx."].map((t) => ({
                                    label: t,
                                    value: t,
                                }))}
                                required
                            />
                            <Input
                                label="Your Name"
                                name="name"
                                placeholder="Your name"
                                icon={<UserRound className="h-4 w-4" />}
                                required
                            />
                            <Input
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="name@domain.com"
                                icon={<Mail className="h-4 w-4" />}
                                required
                            />
                            <Input
                                label="Phone/Whatsapp Number"
                                name="phone"
                                placeholder="Enter your phone with country code"
                                icon={<Phone className="h-4 w-4" />}
                                required
                            />
                            <Select
                                label="How did you find us?"
                                name="source"
                                options={[
                                    "—Please choose an option—",
                                    "Google",
                                    "Facebook",
                                    "Tiktok",
                                    "Friend/Referral",
                                    "Other",
                                ].map((t) => ({ label: t, value: t }))}
                            />
                            <Select
                                label="Country of Residence"
                                name="country"
                                icon={<Globe2 className="h-4 w-4" />}
                                options={[
                                    "—Please choose an option—",
                                    "Vietnam",
                                    "United States",
                                    "Australia",
                                    "Singapore",
                                    "Japan",
                                    "France",
                                    "Germany",
                                    "India",
                                    "Other",
                                ].map((t) => ({ label: t, value: t }))}
                                required
                            />
                        </div>

                        <div className="mt-2 flex flex-col-reverse items-stretch gap-3 pt-2 md:flex-row md:items-center md:justify-between">
                            <button
                                type="reset"
                                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 font-semibold text-neutral-700 hover:bg-neutral-50"
                            >
                                <RotateCcw className="h-4 w-4" />
                                Reset
                            </button>

                            <button
                                type="submit"
                                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-blue-700"
                                disabled={loading}
                           >
                                {loading ? "Sending..." : "Send Your Request"}
                                <SendHorizontal className="h-4 w-4" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

    // Portal để luôn nằm top-level
    if (typeof window !== "undefined") {
        return createPortal(modalContent, document.body);
    }
    return modalContent;
}

/* ---------- bits ---------- */
function SectionTitle({
    index,
    title,
    subtitle,
}: {
    index: number;
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-700 ring-1 ring-pink-200">
                {index}
            </span>
            <div>
                <h4 className="text-xl font-extrabold text-neutral-900 md:text-2xl">{title}</h4>
                {subtitle && <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>}
            </div>
        </div>
    );
}

function Input({
    label,
    name,
    type = "text",
    placeholder,
    icon,
    required,
}: {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    icon?: React.ReactNode;
    required?: boolean;
}) {
    return (
        <label className="group block">
            <span className="mb-1.5 block text-sm font-semibold text-neutral-700">
                {label} {required && <span className="text-pink-600">*</span>}
            </span>
            <div className="relative">
                {icon && (
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                        {icon}
                    </span>
                )}
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    className={`w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-[15px] outline-none placeholder:text-neutral-400 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 ${icon ? "pl-9" : ""
                        }`}
                />
            </div>
        </label>
    );
}

function Select({
    label,
    name,
    options,
    icon,
    required,
}: {
    label: string;
    name: string;
    options: { label: string; value: string }[];
    icon?: React.ReactNode;
    required?: boolean;
}) {
    return (
        <label className="group block">
            <span className="mb-1.5 block text-sm font-semibold text-neutral-700">
                {label} {required && <span className="text-pink-600">*</span>}
            </span>
            <div className="relative">
                {icon && (
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                        {icon}
                    </span>
                )}
                <select
                    name={name}
                    required={required}
                    className={`w-full appearance-none rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-[15px] outline-none focus:border-pink-300 focus:ring-4 focus:ring-pink-100 ${icon ? "pl-9" : ""
                        }`}
                >
                    {options.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                <svg
                    viewBox="0 0 24 24"
                    className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </div>
        </label>
    );
}

function Textarea({
    label,
    name,
    placeholder,
    rows = 4,
    icon,
}: {
    label: string;
    name: string;
    placeholder?: string;
    rows?: number;
    icon?: React.ReactNode;
}) {
    return (
        <label className="group block">
            <span className="mb-1.5 block text-sm font-semibold text-neutral-700">{label}</span>
            <div className="relative">
                {icon && <span className="pointer-events-none absolute left-3 top-3 text-neutral-400">{icon}</span>}
                <textarea
                    name={name}
                    rows={rows}
                    placeholder={placeholder}
                    className={`w-full rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-[15px] outline-none placeholder:text-neutral-400 focus:border-pink-300 focus:ring-4 focus:ring-pink-100 ${icon ? "pl-9" : ""
                        }`}
                />
            </div>
        </label>
    );
}
