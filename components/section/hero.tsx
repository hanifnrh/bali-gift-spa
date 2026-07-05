import { PhoneCall } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="px-4 md:px-8 lg:px-24">
      <div className="relative w-full rounded-4xl overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero/hero-bg.png" // Change to your actual filename
          alt="Seminyak Bali Gift & Spa"
          fill
          priority
          className="object-cover"
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[80vh] items-center">
          <div className="w-full px-4 md:px-8 lg:px-20">
            <div className="flex flex-col items-center lg:items-start max-w-4xl space-y-6 lg:space-y-12">
              <h1
                className={`${dmSans.className} text-base font-normal tracking-wide text-white`}
              >
                SEMINYAK BALI GIFT & SPA
              </h1>

              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center lg:text-left font-semibold tracking-tight text-white">
                Assist An Ultimate Relaxation for your Soul & Rejuvenate for
                your Body
              </h2>

              <Link
                href="https://baligiftspa.as.me/schedule/b42c5723/?locations=BALI%20gift%20SPA"
                target="_blank"
                rel="canonical"
                className={`${dmSans.className} flex items-center gap-2 rounded-full text-xl tracking-tight font-semibold bg-white px-6 py-6 text-black}`}
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Reservation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
