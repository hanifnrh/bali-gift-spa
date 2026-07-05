import {
  MapPin,
  Award,
  Sparkles,
  Tag,
} from "lucide-react";
import { JSX } from "react/jsx-runtime";
import { Card, CardContent } from "../ui/card";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const iconMap: Record<string, React.ReactNode> = {
  award: <Award className="h-10 w-10 text-[#F05A21]" />,
  sparkles: <Sparkles className="h-10 w-10 text-[#F05A21]" />,
  "map-pin": <MapPin className="h-10 w-10 text-[#F05A21]" />,
  tag: <Tag className="h-10 w-10 text-[#F05A21]" />,
};

const passionCards = [
  {
    icon: "award",
    title: "The Best Service",
    description:
      "Made with durable, responsibly sourced materials designed to last for years.",
  },
  {
    icon: "sparkles",
    title: "Spoiled Facilities",
    description:
      "We dedicate our complete facilities to give you the best experience of SPA in Bali",
  },
  {
    icon: "map-pin",
    title: "Convenience Location",
    description:
      "Made with durable, responsibly sourced materials designed to last for years.",
  },
  {
    icon: "tag",
    title: "Fair Affordable Price",
    description:
      "We provide deliver service to ensure the product arrives safely.",
  },
];

export const Benefits = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="mx-auto flex w-full flex-col items-start gap-18 px-4 md:px-8 lg:px-24 py-0">
        <section className="flex w-full flex-col items-center gap-8 px-0 py-6">
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <h2 className={`${dmSans.className} self-stretch text-center text-3xl font-semibold tracking-[-1.80px] text-[#c03b09] sm:text-4xl`}>
              Your Expectation, Our Passion
            </h2>
            <p className={`${dmSans.className} self-stretch text-center text-xl font-normal tracking-[-1.00px] text-black`}>
              Visiting Bali is one of the best choices. Feel the pleasure of Spa
              Bali is the best decision. In a lifetime, the Balinese Massage
              technique will be your unforgettable experience and memory.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 lg:gap-6 sm:grid-cols-2">
            {passionCards.map((item) => (
              <Card
                key={item.title}
                className="w-full rounded-[20px] border-0 ring-0 bg-[#FFCDBA]/30 shadow-none"
              >
                <CardContent className="flex h-full flex-col items-start gap-2 p-6">
                    <div className="flex h-fit w-fit items-center justify-center rounded-xl p-3 bg-linear-to-t from-[#FFF5F2] to-white border-3 border-[#F05A21]/30">
                  {iconMap[item.icon]}
                    </div>
                  <h3 className={`${dmSans.className} self-stretch text-xl font-extrabold tracking-[-1.00px] text-neutral-800`}>
                    {item.title}
                  </h3>
                  <p className={`${dmSans.className} self-stretch text-base font-medium tracking-[-0.80px] text-neutral-600`}>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
