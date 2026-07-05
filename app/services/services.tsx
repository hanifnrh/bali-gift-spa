// app/services/page.tsx
'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { ArrowRightCircle } from "lucide-react";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { treatments } from "./treatments";

const dmSans = DM_Sans({ subsets: ["latin"] });

const DotCluster = () => {
  return (
    <div className="inline-flex items-center">
      <div className="h-8 w-8 rounded-full bg-[#F05A21]" />
      <div className="h-8 w-8 rounded-full bg-[#F05A21]/80 -ml-2" />
      <div className="h-8 w-8 rounded-full bg-[#F05A21]/60 -ml-2" />
    </div>
  );
};

// Move the logic that uses useSearchParams into a separate component
function TabContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialTab = searchParams.get('tab') === 'gift-packages' ? 'gift-packages' : 'ala-carte';
  const [activeTab, setActiveTab] = useState<'ala-carte' | 'gift-packages'>(initialTab);

  const handleTabChange = (tab: 'ala-carte' | 'gift-packages') => {
    setActiveTab(tab);
    router.push(`/services?tab=${tab}`, { scroll: false });
  };

  useEffect(() => {
    const currentTab = searchParams.get('tab');
    if (currentTab === 'gift-packages' || currentTab === 'ala-carte') {
      setActiveTab(currentTab);
    }
  }, [searchParams]);

  const filteredTreatments = treatments.filter(t => t.category === activeTab);

  return (
    <>
      {/* Tabs */}
      <div className="flex w-full justify-start gap-4 border-b border-gray-200 pb-2">
        <button
          onClick={() => handleTabChange('ala-carte')}
          className={`text-lg font-semibold px-4 py-2 rounded-t-lg transition-colors ${
            activeTab === 'ala-carte'
              ? 'text-[#F05A21] border-b-2 border-[#F05A21]'
              : 'text-neutral-500 hover:text-neutral-700'
          }`}
        >
          Ala Carte
        </button>
        <button
          onClick={() => handleTabChange('gift-packages')}
          className={`text-lg font-semibold px-4 py-2 rounded-t-lg transition-colors ${
            activeTab === 'gift-packages'
              ? 'text-[#F05A21] border-b-2 border-[#F05A21]'
              : 'text-neutral-500 hover:text-neutral-700'
          }`}
        >
          Gift Packages
        </button>
      </div>

      {/* Treatment Grid */}
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredTreatments.map((treatment) => (
          <Link key={treatment.id} href={`/services/${treatment.id}`} className="group block w-full">
            <Card
              className="h-full min-h-100 rounded-2xl border-0 shadow-none transition-transform duration-300 group-hover:scale-[1.02] p-0 overflow-hidden"
              style={{
                backgroundImage: `url(${treatment.cardImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <CardContent className="flex h-full flex-col justify-end p-6 bg-linear-to-t from-black/70 to-transparent">
                <div className="flex w-full items-end gap-6">
                  <div className="flex flex-1 flex-col items-start gap-2">
                    <h3 className="text-[32px] font-bold tracking-[-1.60px] text-white">
                      {treatment.title}
                    </h3>
                    <p className="text-base font-medium tracking-[-0.80px] text-white/90 line-clamp-2">
                      {treatment.subtitle}
                    </p>
                  </div>
                  <ArrowRightCircle className="h-12 w-12 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}

// Main page component – wraps the tab content in Suspense
export default function ServicesPage() {
  return (
    <section className={`${dmSans.className} relative w-full px-4 md:px-8 lg:px-24 py-12`}>
      <div className="mx-auto flex w-full flex-col items-start gap-18">
        <section className="flex w-full flex-col items-center justify-center gap-6 rounded-3xl bg-[#00adef33] p-6 sm:p-10 lg:p-12">
          {/* Header remains unchanged */}
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

          {/* Suspense boundary – fallback can be a loading spinner or null */}
          <Suspense fallback={<div className="py-10 text-center">Loading services...</div>}>
            <TabContent />
          </Suspense>
        </section>
      </div>
    </section>
  );
}