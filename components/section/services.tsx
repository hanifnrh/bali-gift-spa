import {
  ArrowRightCircle,
} from "lucide-react";
import { JSX } from "react/jsx-runtime";
import { Card, CardContent } from "../ui/card";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const DotCluster = () => {
  return (
    <div className="inline-flex items-center">
      <div className="h-8 w-8 rounded-full bg-[#F05A21]" />
      <div className="h-8 w-8 rounded-full bg-[#F05A21]/80 -ml-2" />
      <div className="h-8 w-8 rounded-full bg-[#F05A21]/60 -ml-2" />
    </div>
  );
};

const services = [
  {
    title: "Ala Carte",
    description:
      "Body Mask, Manicure, Pedicure, Warm Stone, Back & Shoulder Massage, Abyanga, Indian Head Massage, etc",
    backgroundClass:
      "[background:url(/services/ala-carte.png)_50%_50%_/_cover]",
  },
  {
    title: "Gift Packages",
    description:
      "Shirodhara, Balinese Facial, Balinese Scrub, Botanical Package, Jetlag Relief, Reflexology, Milk Aroma Bath, etc",
    backgroundClass:
      "[background:url(/services/gift-packages.png)_50%_50%_/_cover]",
  },
];

export const Services = (): JSX.Element => {
  return (
    <section className={`${dmSans.className} relative w-full px-4 md:px-8 lg:px-24`}>
      <div className="mx-auto flex w-full flex-col items-start gap-18">
        <section className="flex w-full flex-col items-center justify-center gap-6 rounded-3xl bg-[#00adef33] p-6 sm:p-10 lg:p-12">
          <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-24">
            <p className="flex-1 text-xl font-semibold tracking-[-1.00px] text-neutral-800 order-1 lg:order-0">
              As we know that Bali famous as one of the best massage technique
              in the world, so we pleasantly give you the wonderful spa
              experience.
            </p>
            <div className="inline-flex flex-col items-start gap-2 self-start lg:self-end lg:items-end order-0 lg:order-1">
              <DotCluster />
              <h2 className="w-fit text-3xl font-bold tracking-[-1.80px] text-[#005e83] sm:text-4xl">
                Our Services
              </h2>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group block w-full"
              >
                <Card
                  className={`h-full min-h-100 rounded-2xl border-0 shadow-none transition-transform duration-300 group-hover:scale-[1.02] ${service.backgroundClass}`}
                >
                  <CardContent className="flex h-full flex-col justify-end p-6">
                    <div className="flex w-full items-end gap-6">
                      <div className="flex flex-1 flex-col items-start gap-2">
                        <h3 className="text-[32px] font-bold tracking-[-1.60px] text-white">
                          {service.title}
                        </h3>
                        <p className="text-base font-medium tracking-[-0.80px] text-white">
                          {service.description}
                        </p>
                      </div>

                      <ArrowRightCircle className="h-12 w-12 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
