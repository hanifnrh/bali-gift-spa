import {
  ArrowRight,
  Quote,
} from "lucide-react";
import { JSX } from "react/jsx-runtime";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { FaTripadvisor } from "react-icons/fa";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const reviews = [
  {
    name: "David Armishaw",
    body: "This place is a total gem. The staff and amazing and the massages professional and always consistently good even when you change masseuse.",
    img: "/reviews/david.png",
  },
  {
    name: "Louize Rose",
    body: "We have visited this spa many times over the past 6 or so years. We were here 2 months ago, and my husband and I once again experienced wonderful massages. I am in Bali with my son now, and hoping they we can get in today.",
    img: "/reviews/louize.png",
  },
  {
    name: "Gal Shalom",
    body: "The staff is very caring from arrival it felt a restful and comfortable experience. treatment, the therapist be able to do more for my head and arms massage: very relaxing! Hot ginger tea was offered after massage. Thank you for the experience.",
    img: "/reviews/galshalom.png",
  },
  {
    name: "Jazmin Lao",
    body: "The service and facilities were excellent... staffs and therapist were very accommodating... and the massage was fantastic! We will surely come back!😍",
    img: "/reviews/jazmin.png",
  },
  {
    name: "Kate Mc",
    body: "The spa here is second to none. From the beautiful entrance, to the warm Balinese welcome with water and a cold compress then the heavenly bliss of 3.5 hours of every massage I could think of plus more.",
    img: "/reviews/katemc.png",
  },
  {
    name: "Wei Ling Wang",
    body: "I have just had a wonderful Hawaiian Lomi Lomi massage by Nia at Bali gift Spa. It was very comfortable and calm made me fall asleep. Honestly the pressure is not strong enough for me but if you just looking for some relaxation I totally recommend.",
    img: "/reviews/weiling.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Quote className="h-24 w-24 text-[#F05A21]/20 absolute bottom-0 right-0 z-10" />
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className={`${dmSans.className} flex flex-col`}>
          <figcaption className="text-sm font-semibold dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className={`${dmSans.className} mt-2 font-regular text-sm z-100`}>
        {body}
      </blockquote>
    </figure>
  );
};
const DotCluster = () => {
  return (
    <div className="inline-flex items-center">
      <div className="h-8 w-8 rounded-full bg-[#F05A21]" />
      <div className="h-8 w-8 rounded-full bg-[#F05A21]/80 -ml-2" />
      <div className="h-8 w-8 rounded-full bg-[#F05A21]/60 -ml-2" />
    </div>
  );
};

export const Reviews = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="mx-auto flex w-full flex-col items-start gap-18 px-4 md:px-8 lg:px-24">
        <section className="flex w-full flex-col items-start gap-12 px-0 py-8">
          <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="inline-flex flex-col items-start gap-2">
              <DotCluster />
              <h2
                className={`${dmSans.className} w-fit text-3xl font-semibold tracking-[-1.80px] text-[#005e83] sm:text-4xl`}
              >
                Trusted by Various Customers
              </h2>
            </div>
            <Link
              href="https://www.google.com/search?client=firefox-b-d&sca_esv=543020fee301dd73&sxsrf=APpeQnvuU1DkojZ7HX8hBuqTdSYh-zUIeQ:1783238822308&q=seminyak+gift+spa&si=APenkKnzv9m99ToiohAuzpadUwbOz34nZJ3j2Ukmo5XOUYWApsMGQrVoe6MOJ-zRgAQx8iYF8lJoDq1L8XYjEWrxhcq93GLVgcRVeZPdl8h-0-WQ6Q9guQGU2w51RWSxjKY8jPFfte5I&sa=X&ved=2ahUKEwiLzLWkiruVAxXGzDgGHZKUMcUQrrQLegQIGBAA&cshid=1783238885878525&biw=1920&bih=911&dpr=1"
              target="_blank"
              rel="canonical"
              className="flex items-center gap-2 h-auto rounded-[1000px] border-2 border-[#005e83] bg-white px-6 py-4 hover:bg-white"
            >
              <span
                className={`${dmSans.className} text-xl font-semibold tracking-[-1.00px] text-[#005e83]`}
              >
                More Reviews
              </span>
              <ArrowRight className="h-5 w-5 text-[#005e83]" />
            </Link>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.name} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </section>
      </div>
    </section>
  );
};
