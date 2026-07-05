import { Footer } from "@/components/section/footer";
import Navbar from "@/components/ui/navbar";
import TourComboPage from "./tour-combo";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col gap-18">
        <TourComboPage />
        <Footer />
      </div>
    </div>
  );
}
