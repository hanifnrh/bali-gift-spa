import { Footer } from "@/components/section/footer";
import Navbar from "@/components/ui/navbar";
import ServicesPage from "./services";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col gap-18">
        <ServicesPage />
        <Footer />
      </div>
    </div>
  );
}
