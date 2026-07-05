// app/services/[slug]/page.tsx

import { notFound } from "next/navigation";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { tourCombos } from "../tour-combos"; // adjust path if needed
import Navbar from "@/components/ui/navbar";
import { Footer } from "@/components/section/footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

// ✅ Enable static generation (required for `output: 'export'`)
export const dynamic = "force-static";

// Generate all possible slugs
export async function generateStaticParams() {
  return tourCombos.map((t) => ({
    slug: t.id,
  }));
}

// ✅ Make component async and await params
export default async function TourComboDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>; // 👈 note: params is a Promise
}) {
  const { slug } = await params; // 👈 await it

  const tourCombo = tourCombos.find((t) => t.id === slug);

  if (!tourCombo) {
    notFound();
  }

  const isArrayPrices = Array.isArray(tourCombo.prices);

  return (
    <section className={`${dmSans.className}`}>
      <Navbar />
      <div className="relative w-full px-4 md:px-8 lg:px-24 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Back button */}
          <Link
            href="/tour-combo"
            className="inline-flex items-center gap-2 bg-sky-100 hover:bg-sky-200 transition-colors font-semibold tracking-tight text-sky-600 py-2 px-4 rounded-full mb-12"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to tour combo
          </Link>

          {/* Hero: Title + subtitle + description + gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 tracking-[-1.5px]">
                {tourCombo.title}
              </h1>
              <p className="text-xl text-[#F05A21] font-medium mt-1">
                {tourCombo.subtitle}
              </p>
              <div className="text-neutral-600 mt-4 leading-relaxed">
                {tourCombo.description}
              </div>
            </div>

            {/* Gallery: main + two thumbs */}
            <div className="flex flex-col gap-4">
              <div className="col-span-2 h-60 rounded-xl overflow-hidden">
                <img
                  src={tourCombo.gallery[0]}
                  alt={tourCombo.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {tourCombo.gallery.slice(1, 3).map((img, idx) => (
                <div key={idx} className="h-60 rounded-xl overflow-hidden">
                  <img
                    src={img}
                    alt={`${tourCombo.title} ${idx + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details: Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pricing (only if prices exist) */}
            {tourCombo.prices && (
              <div>
                <h2 className="text-2xl tracking-tight font-bold text-neutral-800 mb-4">
                  Pricing
                </h2>
                {isArrayPrices ? (
                  <div className="bg-white rounded-xl border border-neutral-200 divide-y divide-gray-100">
                    {(
                      tourCombo.prices as { label: string; amount: string }[]
                    ).map((item, idx) => (
                      <div key={idx} className="flex justify-between py-3 px-4">
                        <span className="text-neutral-600">{item.label}</span>
                        <span className="font-semibold text-neutral-800">
                          {item.amount}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-[#00adef33] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-[#005e83]">
                      {(tourCombo.prices as { single: string }).single}
                    </p>
                    <p className="text-sm text-neutral-600 mt-1">
                      {(tourCombo.prices as { note?: string }).note ||
                        "Best Price"}
                    </p>
                  </div>
                )}
              </div>
            )}

            {tourCombo.packageContents &&
              tourCombo.packageContents.length > 0 && (
                <div className="mt-8 md:mt-0">
                  <div className="flex w-full justify-between items-center mb-4">
                    <h2 className="text-2xl tracking-tight font-bold text-neutral-800">
                      Package Includes
                    </h2>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <ul className="space-y-2">
                      {tourCombo.packageContents.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-neutral-700 border-b border-gray-50 last:border-0 py-1.5"
                        >
                          <span className="text-[#F05A21] font-bold">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
          </div>

          {/* Booking CTA + Steps (matching your original content) */}
          <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-neutral-800">
                  Book an Appointment
                </h3>
                <p className="text-neutral-600 text-sm">
                  Simple booking from our link reservation
                </p>
              </div>
              <Link
                className="bg-[#F05A21] hover:bg-[#d04a1a] text-white font-medium px-8 py-3 rounded-full transition-colors"
                href={`https://wa.me/6281234567890?text=Hello%20Bali%20Gift%20Spa,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(tourCombo.title)}%20treatment.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book here
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00adef33] flex items-center justify-center text-[#005e83] font-bold">
                  1
                </div>
                <span className="text-neutral-700">Book an Appointment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00adef33] flex items-center justify-center text-[#005e83] font-bold">
                  2
                </div>
                <span className="text-neutral-700">Get Your Schedule</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00adef33] flex items-center justify-center text-[#005e83] font-bold">
                  3
                </div>
                <span className="text-neutral-700">Meet With Our Experts</span>
              </div>
            </div>
          </div>

          {/* Additional description from original content */}
          <div className="mt-8 text-sm text-neutral-500 text-center border-t border-gray-100 pt-6">
            <p>
              Get the most quality holiday while in Bali with a variety of the
              best spa treatments only at Seminyak Gift Spa.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
