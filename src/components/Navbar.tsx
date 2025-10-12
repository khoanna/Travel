"use client";

import Link from "next/link";
import { JSX, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, SlidersHorizontal } from "lucide-react";
import Image from "next/image";

type MenuKey = "Tours" | "Travel Guide" | null;

export default function Navbar() {
  // Desktop
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [hoveredMenu, setHoveredMenu] = useState<MenuKey>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const menuRootRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Mobile
  const [mobileOpen, setMobileOpen] = useState(false);

  /** Đóng tất cả khi click ra ngoài (desktop) */
  useEffect(() => {
    function onDocDown(e: MouseEvent) {
      const targets = Object.values(menuRootRefs.current);
      const hit = targets.some((el) => el && el.contains(e.target as Node));
      if (!hit) setActiveMenu(null);
    }
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  /** Khóa scroll khi mở mobile */
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  /** Helpers delay */
  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const scheduleClose = (delay = 140) => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), delay);
  };

  const desktopItems: Array<{ title: Exclude<MenuKey, null>; panel?: JSX.Element }> = [
    { title: "Tours", panel: <ToursPanel /> },
    { title: "Travel Guide", panel: <GuidePanel /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-pink-600">
          <Image src="/logo.png" alt="Velogo" width={120} height={40} />
        </Link>

        {/* Desktop Nav */}
        <nav className="relative hidden items-center gap-8 text-[15px] font-semibold md:flex">
          {desktopItems.map((item) => (
            <div
              key={item.title}
              ref={(el) => {
                menuRootRefs.current[item.title] = el;
              }}
              className="relative"
              onMouseEnter={() => {
                clearCloseTimer();
                setActiveMenu(item.panel ? item.title : null);
                setHoveredMenu(item.title);
              }}
              onMouseLeave={() => {
                setHoveredMenu(null);
                scheduleClose();
              }}
            >
              <button
                className={`relative cursor-pointer flex items-center gap-1 rounded-full px-3 py-2 transition-colors ${
                  activeMenu === item.title ? "text-pink-600" : "text-neutral-800"
                }`}
              >
                {item.title}
                {item.panel && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      activeMenu === item.title ? "rotate-180" : ""
                    }`}
                  />
                )}
                {/* Underline animation */}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-pink-600 transition-all duration-300 ${
                    hoveredMenu === item.title || activeMenu === item.title ? "w-full" : "w-0"
                  }`}
                />
              </button>

              {/* Mega Panel */}
              {item.panel && (
                <MegaPanel
                  open={activeMenu === item.title}
                  onEnter={clearCloseTimer}
                  onLeave={() => scheduleClose()}
                >
                  {item.panel}
                </MegaPanel>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="/tailor"
            className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 font-semibold shadow-sm transition-all duration-300 hover:bg-pink-600 hover:text-white md:inline-flex"
          >
            Tailor My Trip
            <SlidersHorizontal className="h-4 w-4" />
          </Link>

          <button
            className="inline-flex rounded-full border border-neutral-200 bg-white p-2 shadow-sm md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function MegaPanel({
  open,
  onEnter,
  onLeave,
  children,
}: {
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`fixed left-1/2 top-[78px] z-40 -translate-x-1/2 transition-all duration-300 ease-out ${
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      }`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Hover bridge */}
      <div className="absolute -top-5 left-0 h-6 w-full bg-transparent" />
      <div className="w-[900px] rounded-2xl border border-neutral-200 bg-white p-8 shadow-2xl">
        {children}
      </div>
    </div>
  );
}

/* --------------------------- Helpers --------------------------- */
function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
const toShortTripLinks = (names: string[]) =>
  names.map((name) => ({ title: name, href: `/short-trip/${slugify(name)}` }));

/* --------------------------- Panels --------------------------- */

function ToursPanel() {
  const shortTrips = toShortTripLinks([
    "Ha Noi",
    "Ho Chi Minh",
    "Mekong Delta",
    "Da Nang",
    "Hoi An",
    "Da Lat",
    "Ha Giang",
    "Hue",
    "Mai Chau",
    "Nha Trang",
    "Ninh Binh",
    "Phu Quoc",
    "Sapa",
    "Pu Luong",
  ]);

  const cruises = [
    { title: "Halong Bay Cruises", href: "#" },
    { title: "Mekong River Cruises", href: "#" },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-4">
      <Column
        title="Tour Packages"
        items={[{ href: "/tour", title: "Vietnam Tour Packages" }]}
      />
      <Column title="Short Trips" items={shortTrips} twoCols />
      <Column title="Cruises" items={cruises} />
    </div>
  );
}

function GuidePanel() {
  const toLinkItems = (arr: string[]) => arr.map((t) => ({ href: "#", title: t }));

  const cols: Array<{ title: string; items: { href: string; title: string }[] }> = [
    {
      title: "Essential Guide",
      items: toLinkItems([
        "Language",
        "SIM cards & internet",
        "Health & Safety",
        "Money & Budget",
        "Visa guide",
        "Best time to visit",
        "Month by month",
        "Scam",
      ]),
    },
    {
      title: "Getting around",
      items: toLinkItems(["Transportation", "Popular routes", "Must see, visit & experience", "Stay"]),
    },
    {
      title: "Culture & Cuisine",
      items: toLinkItems(["People", "Food", "Shopping", "Festivals", "Insights"]),
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-4">
      {cols.map((c) => (
        <Column key={c.title} title={c.title} items={c.items} />
      ))}
    </div>
  );
}

/* --------------------------- Column --------------------------- */

function Column({
  title,
  items,
  twoCols,
}: {
  title: string;
  items: { href: string; title: string }[];
  twoCols?: boolean;
}) {
  return (
    <div>
      <h3 className="mb-3 border-l-4 border-neutral-200 pl-2 font-semibold text-neutral-700">
        {title}
      </h3>
      <ul className={`${twoCols ? "grid grid-cols-2 gap-2" : "space-y-1"}`}>
        {items.map((t, index) => (
          <li key={index}>
            <Link
              href={t.href}
              className="relative text-sm text-neutral-600 transition-colors hover:text-pink-600"
            >
              {t.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ===================== Mobile Drawer ===================== */

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const toggle = (k: string) => setOpenKey((prev) => (prev === k ? null : k));

  return (
    <div
      className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 ease-out ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      aria-hidden={!open}
      role="dialog"
    >
      <div className="flex items-center justify-between bg-pink-300 px-6 py-2 text-white">
        <Image src="/logo.png" alt="Velogo" width={120} height={40} />
        <button aria-label="Close menu" onClick={onClose}>
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="border-b bg-white border-neutral-100 p-6 text-sm text-neutral-700">
        <p className="mb-3">
          Share your ideas with our local expert team – we’re here to listen and help you shape a
          meaningful journey through Indochina.
        </p>
        <Link
          href="/tailor"
          className="inline-flex rounded-full bg-pink-600 px-5 py-2 font-semibold text-white transition hover:bg-pink-700"
          onClick={onClose}
        >
          Tailor My Trip
        </Link>
      </div>

      <div className="h-[calc(100vh-160px)] overflow-y-auto p-2 bg-white">
        <MobileAccordion
          title="Tours"
          open={openKey === "Tours"}
          onToggle={() => toggle("Tours")}
          items={[
            { label: "Vietnam Tour Packages" },
            {
              label: "Short Trips",
              children: [
                "Ha Noi",
                "Ho Chi Minh",
                "Mekong Delta",
                "Da Nang",
                "Hoi An",
                "Da Lat",
                "Ha Giang",
                "Hue",
                "Mai Chau",
                "Nha Trang",
                "Ninh Binh",
                "Phu Quoc",
                "Sapa",
                "Pu Luong",
              ],
            },
            { label: "Cruises", children: ["Halong Bay Cruises", "Mekong River Cruises"] },
          ]}
          onClose={onClose}
        />

        <MobileAccordion
          title="Ways to travel"
          open={openKey === "Ways to travel"}
          onToggle={() => toggle("Ways to travel")}
          items={[
            { label: "Travel Styles", children: ["Luxury", "Adventure", "Family", "Culture"] },
            { label: "Destinations", children: ["Vietnam", "Cambodia", "Laos", "Indochina"] },
            { label: "Special Themes", children: ["Honeymoon", "Photography", "Wellness", "Food"] },
          ]}
          onClose={onClose}
        />

        <MobileAccordion
          title="Travel Guide"
          open={openKey === "Travel Guide"}
          onToggle={() => toggle("Travel Guide")}
          items={[
            {
              label: "Essential Guide",
              children: [
                "Language",
                "SIM & Internet",
                "Health & Safety",
                "Money & Budget",
                "Visa guide",
                "Best time to visit",
                "Month by month",
                "Scam",
              ],
            },
            {
              label: "Getting around",
              children: ["Transportation", "Popular routes", "Must see & do", "Stay"],
            },
            {
              label: "Culture & Cuisine",
              children: ["People", "Food", "Shopping", "Festivals", "Insights"],
            },
          ]}
          onClose={onClose}
        />

        <MobileAccordion
          title="About Us"
          open={openKey === "About Us"}
          onToggle={() => toggle("About Us")}
          items={[{ label: "Who we are" }, { label: "Contact" }]}
          onClose={onClose}
        />
      </div>
    </div>
  );
}

function MobileAccordion({
  title,
  open,
  onToggle,
  items,
  onClose,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  items: Array<{ label: string; children?: string[] }>;
  onClose: () => void;
}) {
  return (
    <div className="border-b border-neutral-100">
      <button
        className="flex w-full items-center justify-between px-4 py-4 text-base font-semibold text-neutral-800"
        onClick={onToggle}
        aria-expanded={open}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 space-y-3 px-6 pb-5 text-sm text-neutral-700">
          {items.map((it) =>
            it.children ? (
              <div key={it.label}>
                <div className="mb-1 font-medium">{it.label}</div>
                <ul className="ml-3 list-disc space-y-1">
                  {it.children.map((c) => (
                    <li key={c}>
                      {/* build href theo short-trips slug */}
                      <Link
                        href={`/short-trip/${slugify(c)}`}
                        onClick={onClose}
                        className="hover:text-pink-600"
                      >
                        {c}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link key={it.label} href="#" onClick={onClose} className="block hover:text-pink-600">
                {it.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
