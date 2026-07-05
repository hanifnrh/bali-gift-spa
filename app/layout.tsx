// app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com"),
  title: {
    default: "Bali Gift Spa – Relaxing Spa & Tour Packages in Bali",
    template: "%s | Bali Gift Spa",
  },
  description:
    "Experience the best spa treatments and tour packages in Bali. Choose from our à la carte menu or all‑inclusive packages for the ultimate relaxation getaway.",
  keywords: [
    "Bali spa",
    "spa packages",
    "Bali tour",
    "relaxation",
    "gift spa",
    "wellness retreat",
    "Bali vacation",
  ],
  openGraph: {
    title: "Bali Gift Spa – Relaxing Spa & Tour Packages in Bali",
    description:
      "Experience the best spa treatments and tour packages in Bali. Choose from our à la carte menu or all‑inclusive packages for the ultimate relaxation getaway.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com",
    siteName: "Bali Gift Spa",
    images: [
      {
        url: "/og-image.jpg", // place an image in /public
        width: 1200,
        height: 630,
        alt: "Bali Gift Spa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}