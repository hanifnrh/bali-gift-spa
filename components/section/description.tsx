import { JSX } from "react/jsx-runtime";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const DotCluster = () => {
  return (
    <div className="inline-flex items-center">
      <div className="h-8 w-8 rounded-full bg-[#F05A21]" />
      <div className="h-8 w-8 rounded-full bg-[#F05A21]/80 -ml-2"/>
      <div className="h-8 w-8 rounded-full bg-[#F05A21]/60 -ml-2" />
    </div>
  );
};

export const Description = (): JSX.Element => {
  return (
    <section className={`${dmSans.className} relative w-full px-8 lg:px-24`}>
      <div className="mx-auto flex w-full flex-col items-start gap-18 py-0 lg:px-0">
        <section className="flex w-full flex-col items-start gap-6 px-0 py-3">
          <DotCluster />
          <div className="flex w-full flex-col items-start gap-24 lg:flex-row lg:gap-24">
            <div className="flex flex-1 flex-col items-start gap-6">
              <h2 className="self-stretch text-[32px] font-semibold leading-[35.2px] tracking-[-1.60px] text-[#005e83]">
                We Pledge to Provide You The Comfortable Treatment and
                Bali&apos;s Finest Techniques
              </h2>
              <p className="self-stretch text-xl font-normal leading-6 tracking-[-1.00px] text-neutral-600">
                Bali Gift Spa gives you privacy by providing air-conditioned
                private massage room either double beds or single with sound of
                relaxation music and aroma therapy breeze. We offer you a
                combination of Balinese technique and western treatment created
                by certificated trainer of Balinese therapist. Our aim at Bali
                Gift Spa is to treat you deeply relax and bring you into your
                sacred heart. In doing this; our company focus to customers
                satisfaction, it is a our prime concern either external
                customers as a guest or internal customer as a team . It will be
                benefiting to all as a costumer&apos;s experience of{" "}
                <span className="font-semibold tracking-[-0.20px] text-[#005e83]">
                  Seminyak – Bali Gift Spa.
                </span>
              </p>
            </div>

            <div className="h-auto lg:max-w-69 w-full flex items-center justify-center">
              <img
                className="relative rounded-[14px] object-cover"
                alt="Bali Gift Spa Treatment"
                src="/description/bali-gift-spa-facial.png"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
