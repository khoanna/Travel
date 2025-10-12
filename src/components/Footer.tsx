"use client";

import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Pin,
  TicketCheckIcon,
  MapIcon,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Company */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900">Seni World</h3>
            <ul className="mt-5 space-y-3">
              <FooterNavLink href="/about">About Us</FooterNavLink>
              <FooterNavLink href="/team">Our Team</FooterNavLink>
              <FooterNavLink href="/why-us">Why us</FooterNavLink>
              <FooterNavLink href="/social-responsibility">
                Social Responsibility
              </FooterNavLink>
            </ul>
          </div>

          {/* Col 2: Contact */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900">Get in Touch</h3>

            <ul className="mt-5 space-y-4 text-neutral-700">
              <FooterInfo icon={<MapIcon className="h-5 w-5" />}>
                <div  className="cursor-pointer hover:text-blue-600">
                  33 Alley 193 Trung Kinh, Cau Giay, Ha Noi
                </div>
              </FooterInfo>

              <FooterInfo icon={<Phone className="h-5 w-5" />}>
                <a href="tel:+84962193527" className="hover:text-blue-600">
                  +84 96 219 35 27
                </a>
              </FooterInfo>

              <FooterInfo icon={<Mail className="h-5 w-5" />}>
                <a
                  href="mailto:velogotravel@gmail.com"
                  className="break-all hover:text-blue-600"
                >
                  velogotravel@gmail.com
                </a>
              </FooterInfo>

            </ul>
          </div>

          {/* Col 3: Useful links */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900">Useful Links</h3>
            <ul className="mt-5 space-y-3">
              <FooterNavLink href="/trip-planning/seniors">
                Trip Planning for Seniors
              </FooterNavLink>
              <FooterNavLink href="/trip-planning/family">
                Trip Planning for Family
              </FooterNavLink>
              <FooterNavLink href="/tailor-made-travel">
                What is Tailor-made Travel?
              </FooterNavLink>
              <FooterNavLink href="/faqs">FAQs</FooterNavLink>
              <FooterNavLink href="/how-to-book">How to book</FooterNavLink>
              <FooterNavLink href="/terms">Terms and Conditions</FooterNavLink>
              <FooterNavLink href="/privacy">Privacy Policy</FooterNavLink>
            </ul>
          </div>

          {/* Col 4: Social + TA badge */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900">Follow us</h3>

            <div className="mt-5 flex items-center gap-3">
              <SocialIcon href="https://www.facebook.com/profile.php?id=61578139232634" label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/velogotravel" label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://x.com/Velogotravel" label="Twitter / X">
                <Twitter className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href="https://www.tiktok.com/@velogo.vietnam.tr" label="Tiktok">
                <FaTiktok className="h-4 w-4" />
              </SocialIcon>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p>© 2025 Velogo. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
              <span className="text-neutral-300">•</span>
              <Link href="/terms" className="hover:text-blue-600">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------- atoms -------------------------- */

function FooterNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-neutral-700 hover:text-blue-600"
      >
        <span className="grid h-5 w-5 place-items-center rounded bg-neutral-100 text-neutral-500 transition group-hover:bg-blue-50 group-hover:text-blue-600">
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
        <span>{children}</span>
      </Link>
    </li>
  );
}

function FooterInfo({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
        {icon}
      </span>
      <span className="leading-6">{children}</span>
    </li>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      target="_blank"
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 ring-1 ring-transparent transition hover:bg-blue-50 hover:text-blue-600 hover:ring-blue-200"
    >
      {children}
    </Link>
  );
}
