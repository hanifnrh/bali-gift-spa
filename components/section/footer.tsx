import {
  Phone,
  ArrowRightCircle,
  ArrowRight,
  Quote,
  MapPin,
  CalendarCheck,
  ChevronRight,
  Award,
  Sparkles,
  Tag,
  Star,
} from "lucide-react";
import { JSX } from "react/jsx-runtime";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { FaTripadvisor } from "react-icons/fa";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const footerLinks: FooterGroup[] = [
  {
    title: "Reservation",
    links: [
      { label: "Reserve Now", href: "https://baligiftspa.as.me/schedule/b42c5723/?locations=BALI%20gift%20SPA" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Ala Carte", href: "/services?tab=ala-carte" },
      { label: "Gift Packages", href: "/services?tab=gift-packages" },
      { label: "Spa/Tour Combo", href: "/tour-combo" },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/giftspa2013/",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/baligiftspa2013/?hl=id",
        external: true,
      },
      {
        label: "Tripadvisor",
        href: "https://www.tripadvisor.co.id/Attraction_Review-g469404-d6522177-Reviews-BALI_gift_SPA-Seminyak_Kuta_District_Bali.html",
        external: true,
      },
    ],
  },
];

export const Footer = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="mx-auto flex w-full flex-col items-start gap-18 px-4 md:px-8 lg:px-24">
        <section className="flex w-full flex-col items-center gap-8 rounded-3xl bg-[#00adef33] p-6 sm:p-8 lg:flex-row lg:gap-12 lg:p-10">
          <div className="flex flex-1 flex-col items-start gap-12">
            <div className="flex w-full flex-col items-start">
              <h2
                className={`${dmSans.className} text-3xl font-bold tracking-normal text-[#262626] sm:text-4xl`}
              >
                Come Visit Us
              </h2>
              <p
                className={`${dmSans.className} text-xl font-medium leading-10 tracking-[-1.00px] text-[#262626]`}
              >
                Visit us and let our experienced, certified therapists guide you
                into pure bliss.
              </p>
            </div>
            <div className="w-full justify-start items-start flex gap-1 sm:gap-2.5 flex-col sm:flex-row">
              <Link
                href="/reserve"
                className="w-full sm:w-fit flex gap-2 items-center justify-center h-auto rounded-[1000px] bg-[#01adef] px-6 py-4 hover:bg-[#01adef]/90 hover:scale-105 transition-transform duration-300"
                target="_blank"
                rel="canonical"
              >
                <p
                  className={`${dmSans.className} text-lg sm:text-xl font-semibold tracking-[-1.00px] text-white`}
                >
                  Reserve Now
                </p>
                <CalendarCheck className="h-6 w-6 fill-[#01adef] text-white" />
              </Link>
              <Link
                href="https://www.tripadvisor.co.id/Attraction_Review-g469404-d6522177-Reviews-BALI_gift_SPA-Seminyak_Kuta_District_Bali.html"
                target="_blank"
                rel="canonical"
                className="w-full sm:w-fit flex gap-2 items-center justify-center h-auto rounded-[1000px] border-2 border-[#01adef] bg-white px-6 py-4 hover:bg-white hover:scale-105 transition-transform duration-300"
              >
                <p
                  className={`${dmSans.className} text-lg sm:text-xl font-semibold tracking-[-1.00px] text-[#01adef]`}
                >
                  Tripadvisor Review
                </p>
                <FaTripadvisor className="h-8 w-8 fill-[#01adef] text-[#01adef]" />
              </Link>
            </div>
          </div>
          <img
            className="w-full min-w-[200px] max-w-[380px] self-stretch rounded-2xl object-cover"
            alt="Spa relaxation"
            src="/baligiftspa-footer.png"
          />
        </section>
        <footer className="flex w-full flex-col items-start justify-between gap-10 lg:flex-row lg:items-start mb-32">
          <div className="inline-flex flex-col items-start gap-3">
            <div className="flex items-center justify-center rounded-lg bg-[#005e83]">
              <Image
                src="/baligiftspa-logo.png"
                alt="Seminyak Bali Gift & Spa Logo"
                width={200}
                height={100}
              />
            </div>
            <div className="inline-flex flex-col items-start gap-8">
              <address className="not-italic">
                <div className="inline-flex flex-col items-start gap-3">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-5 w-5 text-[#005e83]" />
                    <p
                      className={`${dmSans.className} text-base font-semibold leading-[23px] tracking-[-0.80px] text-[#005e83]`}
                    >
                      Jl. Lebak Sari 21 Petitenget, Kuta, Badung, Bali 80361
                    </p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="h-5 w-5 text-[#005e83]" />
                    <p
                      className={`${dmSans.className} text-base font-semibold leading-[23px] tracking-[-0.80px] text-[#005e83]`}
                    >
                      0819-3606-6898
                    </p>
                  </div>
                </div>
              </address>
              <p
                className={`${dmSans.className} text-base font-medium leading-[23px] tracking-[-0.80px] text-[#262626]`}
              >
                © 2026 Bali Gift Spa. All rights reserved.
              </p>
            </div>
          </div>
          <nav
            aria-label="Footer navigation"
            className="inline-flex flex-wrap items-start gap-x-11.5 gap-y-6"
          >
            {footerLinks.map((group) => (
              <div
                key={group.title}
                className="flex w-35 flex-col items-start gap-2.5 p-2.5"
              >
                <h3
                  className={`${dmSans.className} text-xl font-semibold leading-5.75 tracking-[-1.00px] text-[#262626]`}
                >
                  {group.title}
                </h3>
                {group.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`${dmSans.className} text-left text-base font-medium leading-5.75 tracking-[-0.80px] text-neutral-600 transition-colors hover:text-[#01adef]`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </footer>
      </div>
    </section>
  );
};
