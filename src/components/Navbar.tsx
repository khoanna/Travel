"use client";

import Link from "next/link";
import { JSX, useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";

/* =================== NAVBAR =================== */

type MenuKey = "Tours" | "Travel Guide" | null;

export default function Navbar() {
  // Desktop
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [hoveredMenu, setHoveredMenu] = useState<MenuKey>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const menuRootRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Mobile
  const [mobileOpen, setMobileOpen] = useState(false);

  // Click outside to close desktop mega
  useEffect(() => {
    function onDocDown(e: MouseEvent) {
      const targets = Object.values(menuRootRefs.current);
      const hit = targets.some((el) => el && el.contains(e.target as Node));
      if (!hit) setActiveMenu(null);
    }
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  // Lock body scroll when mobile open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : prevOverflow;
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

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
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo.png" alt="Velogo" width={120} height={40} />
        </Link>

        {/* Desktop Nav */}
        <nav className="relative hidden items-center gap-8 text-[15px] font-semibold md:flex">
          {desktopItems.map((item) => (
            <div
              key={item.title}
              ref={(el) => { menuRootRefs.current[item.title] = el; }}
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
                  activeMenu === item.title ? "text-blue-600" : "text-neutral-800"
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
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${
                    hoveredMenu === item.title || activeMenu === item.title ? "w-full" : "w-0"
                  }`}
                />
              </button>

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
            className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 font-semibold shadow-sm transition-all duration-300 hover:bg-blue-600 hover:text-white md:inline-flex"
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

/* =============== DESKTOP MEGA =============== */

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
        open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
      }`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="absolute -top-5 left-0 h-6 w-full bg-transparent" />
      <div className="w-[900px] rounded-2xl border border-neutral-200 bg-white p-8 shadow-2xl">
        {children}
      </div>
    </div>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
const toShortTripLinks = (names: string[]) =>
  names.map((name) => ({ title: name, href: `/short-trip/${slugify(name)}` }));

function ToursPanel() {
  const shortTrips = toShortTripLinks([
    "Ha Noi",
    "Ho Chi Minh",
    "Mekong Delta",
    "Da Nang",
    "Hoi An",
    "Ninh Binh",
    "Sapa",
  ]);

  const cruises = [
    { title: "Halong Bay Cruises", href: "#" },
    { title: "Mekong River Cruises", href: "#" },
  ];

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-4">
      <Column title="Tour Packages" items={[{ href: "/tour", title: "Vietnam Tour Packages" }]} />
      <Column title="Short Trips" items={shortTrips} twoCols />
      <Column title="Cruises" items={cruises} />
    </div>
  );
}

function GuidePanel() {
  const toLinkItems = (arr: string[]) => arr.map((t) => ({ href: "#", title: t }));
  const cols = [
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
      <h3 className="mb-3 border-l-4 border-neutral-200 pl-2 font-semibold text-neutral-700">{title}</h3>
      <ul className={`${twoCols ? "grid grid-cols-2 gap-2" : "space-y-1"}`}>
        {items.map((t, i) => (
          <li key={i}>
            <Link href={t.href} className="text-sm text-neutral-600 transition-colors hover:text-blue-600">
              {t.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =============== MOBILE MENU (dropdown titles) =============== */

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Tất cả title mặc định đóng
  const [openKey, setOpenKey] = useState<string | null>(null);
  useEffect(() => {
    if (!open) setOpenKey(null);
  }, [open]);

  const toggle = (k: string) => setOpenKey((prev) => (prev === k ? null : k));

  // pure white background (không trong suốt trên iPhone)
  // dùng safe-area để không dính notch
  return (
    <>
      {/* backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-black/50 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />
      {/* drawer */}
      <div
        className={`fixed left-0 top:0 top-0 z-[80] h-[100dvh] w-[92%] max-w-[480px] bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-hidden={!open}
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        {/* Header solid background */}
        <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-neutral-200">
          <Image src="/Logo.png" alt="Velogo" width={110} height={36} />
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex rounded-full p-2 text-neutral-600 hover:bg-neutral-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* CTA */}
        <div className="px-5 py-3 bg-white">
          <Link
            href="/tailor"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Tailor My Trip
          </Link>
        </div>

        {/* NAV SECTIONS */}
        <div className="h-[calc(100dvh-140px)] overflow-y-auto bg-white px-3 pb-8">
          <MobileDropdown
            title="Tours"
            open={openKey === "Tours"}
            onToggle={() => toggle("Tours")}
          >
            <MobileSubSection label="Tour Packages">
              <MobileLink href="/tour" onClose={onClose}>
                Vietnam Tour Packages
              </MobileLink>
            </MobileSubSection>

            <MobileSubSection label="Short Trips (Cities)">
              <div className="grid grid-cols-2 gap-2">
                {[
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
                ].map((city) => (
                  <MobilePillLink key={city} href={`/short-trip/${slugify(city)}`} onClose={onClose}>
                    {city}
                  </MobilePillLink>
                ))}
              </div>
            </MobileSubSection>

            <MobileSubSection label="Cruises">
              <MobileLink href="#" onClose={onClose}>Halong Bay Cruises</MobileLink>
              <MobileLink href="#" onClose={onClose}>Mekong River Cruises</MobileLink>
            </MobileSubSection>
          </MobileDropdown>

          <MobileDropdown
            title="Travel Guide"
            open={openKey === "Travel Guide"}
            onToggle={() => toggle("Travel Guide")}
          >
            <MobileSubSection label="Essential Guide">
              {[
                "Language",
                "SIM cards & internet",
                "Health & Safety",
                "Money & Budget",
                "Visa guide",
                "Best time to visit",
                "Month by month",
                "Scam",
              ].map((t) => (
                <MobileLink key={t} href="#" onClose={onClose}>{t}</MobileLink>
              ))}
            </MobileSubSection>

            <MobileSubSection label="Getting around">
              {["Transportation", "Popular routes", "Must see, visit & experience", "Stay"].map((t) => (
                <MobileLink key={t} href="#" onClose={onClose}>{t}</MobileLink>
              ))}
            </MobileSubSection>

            <MobileSubSection label="Culture & Cuisine">
              {["People", "Food", "Shopping", "Festivals", "Insights"].map((t) => (
                <MobileLink key={t} href="#" onClose={onClose}>{t}</MobileLink>
              ))}
            </MobileSubSection>
          </MobileDropdown>

          <MobileDropdown
            title="Ways to travel"
            open={openKey === "Ways to travel"}
            onToggle={() => toggle("Ways to travel")}
          >
            <MobileSubSection label="Travel Styles">
              {["Luxury", "Adventure", "Family", "Culture"].map((t) => (
                <MobileLink key={t} href="#" onClose={onClose}>{t}</MobileLink>
              ))}
            </MobileSubSection>

            <MobileSubSection label="Destinations">
              {["Vietnam", "Cambodia", "Laos", "Indochina"].map((t) => (
                <MobileLink key={t} href="#" onClose={onClose}>{t}</MobileLink>
              ))}
            </MobileSubSection>

            <MobileSubSection label="Special Themes">
              {["Honeymoon", "Photography", "Wellness", "Food"].map((t) => (
                <MobileLink key={t} href="#" onClose={onClose}>{t}</MobileLink>
              ))}
            </MobileSubSection>
          </MobileDropdown>

          <MobileDropdown
            title="About Us"
            open={openKey === "About Us"}
            onToggle={() => toggle("About Us")}
          >
            <MobileSubSection label="Company">
              <MobileLink href="/about" onClose={onClose}>Who we are</MobileLink>
              <MobileLink href="/contact" onClose={onClose}>Contact</MobileLink>
            </MobileSubSection>
          </MobileDropdown>
        </div>
      </div>
    </>
  );
}

/* =============== MOBILE ATOMS =============== */

function MobileDropdown({
  title,
  open,
  onToggle,
  children,
}: {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  const contentId = `sect-${title.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className="mb-3 rounded-2xl border border-neutral-200 bg-white">
      <button
        className="flex w-full items-center justify-between px-4 py-3 text-left"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={contentId}
      >
        <span className="text-[15px] font-semibold text-neutral-900">{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Content: mặc định ẩn hoàn toàn (no peek) */}
      <div
        id={contentId}
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[1200px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-[0.99] pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="px-4 pb-4">{open ? children : null}</div>
      </div>
    </div>
  );
}

function MobileSubSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <div className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-500">{label}</div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function MobileLink({
  href,
  onClose,
  children,
}: {
  href: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="block rounded-xl px-3 py-2 text-[15px] text-neutral-800 hover:bg-neutral-50"
    >
      {children}
    </Link>
  );
}
function MobilePillLink({
  href,
  onClose,
  children,
}: {
  href: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="block rounded-xl border border-neutral-200 px-3 py-2 text-sm text-neutral-800 hover:border-blue-300 hover:bg-blue-50/70 hover:text-blue-700"
    >
      {children}
    </Link>
  );
}
