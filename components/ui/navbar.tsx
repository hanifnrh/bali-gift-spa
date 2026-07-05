"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";                // 👈 for local state
import { Menu, ChevronDown } from "lucide-react"; // 👈 chevron icon

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const menus = [
  {
    title: "Treatments",
    href: "/services?tab=ala-carte",
  },
  {
    title: "Spa Package",
    href: "/services?tab=gift-packages",
  },
  {
    title: "Tour Combo",
    href: "/tour-combo",
    items: [
      { title: "Amazing Uluwatu Sunset + SPA Tour", href: "/tour-combo/uluwatu" },
      { title: "Relaxation On Ubud Scenery With Ubud SPA Tour", href: "/tour-combo/ubud" },
      { title: "Sunset Tanah Lot Tour", href: "/tour-combo/tanahlot" },
      { title: "Rafting & SPA Tour", href: "/tour-combo/rafting" },
      { title: "Airport Transfer", href: "/tour-combo/airport" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const router = useRouter();

  return (
    <header className={`${dmSans.className} sticky top-0 z-50 bg-background`}>
      <div className="container mx-auto flex h-fit items-center justify-between py-4 px-4 md:px-8 lg:px-24">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          <Image
            className="h-20 w-auto"
            src="/baligiftspa-logo.png"
            alt="BaliGiftSpa"
            width={100}
            height={40}
          />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex gap-6 2xl:gap-12">
              {menus.map((menu) => (
                <NavigationMenuItem key={menu.title}>
                  {menu.items ? (
                    <>
                      <NavigationMenuTrigger
                        className="text-base text-[#F05A21] font-semibold"
                        onClick={(e) => {
                          if (menu.href) {
                            e.preventDefault();
                            e.stopPropagation();
                            router.push(menu.href);
                          }
                        }}
                      >
                        {menu.title}
                      </NavigationMenuTrigger>

                      <NavigationMenuContent>
                        <div className="grid w-64 gap-1 p-2">
                          {menu.items.map((item) => (
                            <NavigationMenuLink
                              key={item.title}
                              href={item.href}
                              className={`${dmSans.className} rounded-lg px-3 py-2 text-sm hover:bg-accent`}
                            >
                              {item.title}
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={menu.href}
                      className="px-4 py-2 text-base font-semibold text-[#F05A21]"
                    >
                      {menu.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA – Desktop */}
        <Link
          className="hidden lg:inline-flex bg-sky-500 hover:bg-sky-600 py-3 px-6 w-fit h-fit rounded-2xl border-4 border-sky-300 text-white font-semibold text-base cursor-pointer transition-colors duration-300 ease-in-out"
          href="https://baligiftspa.as.me/schedule/b42c5723/?locations=BALI%20gift%20SPA"
        >
          Reservation
        </Link>

        {/* Mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-80">
              <div className="mt-8 flex flex-col p-6">
                {/* 
                  ✅ Mobile menu: use simple links for top‑level items, 
                  and a custom expandable for items with sub‑items
                */}
                {menus.map((menu) => {
                  // If it has sub‑items, render custom expandable
                  if (menu.items) {
                    return <MobileDropdown key={menu.title} menu={menu} />;
                  }

                  // Otherwise render a simple Link
                  return (
                    <Link
                      key={menu.title}
                      href={menu.href}
                      className={`${dmSans.className} rounded-lg px-4 py-3 text-sm font-medium hover:bg-accent`}
                    >
                      {menu.title}
                    </Link>
                  );
                })}

                {/* Mobile Reservation */}
                <Button
                  className={`${dmSans.className} mt-6 w-full text-base bg-[#0092C9] hover:bg-[#007bb5] py-6 px-6`}
                >
                  <Link href="https://baligiftspa.as.me/schedule/b42c5723/?locations=BALI%20gift%20SPA">
                    Reservation
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// 👇 Mobile dropdown component – title links to parent, chevron toggles
function MobileDropdown({ menu }: { menu: typeof menus[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      {/* Header: Link + Toggle button */}
      <div className="flex items-center justify-between px-4 py-3">
        <Link
          href={menu.href!}
          className={`${dmSans.className} text-sm font-medium hover:text-primary`}
        >
          {menu.title}
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-accent rounded-md transition-colors"
          aria-expanded={isOpen}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Sub‑items */}
      {isOpen && (
        <div className="flex flex-col gap-1 pb-3 pl-4">
          {menu.items!.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`${dmSans.className} rounded-lg px-4 py-2 text-sm hover:bg-accent`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}