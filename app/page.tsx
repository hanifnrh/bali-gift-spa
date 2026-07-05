import { Benefits } from "@/components/section/benefits";
import { Description } from "@/components/section/description";
import { Footer } from "@/components/section/footer";
import Hero from "@/components/section/hero";
import { Reviews } from "@/components/section/reviews";
import { Services } from "@/components/section/services";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col gap-18">
        <Hero />
        <Description />
        <Services />
        <Benefits />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
}
