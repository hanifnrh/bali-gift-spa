// app/tour-combo/tour-combos.ts

export interface TourCombo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  packageContents?: string[];
  prices?:
    | { label: string; amount: string }[]
    | { single: string; note?: string };
  cardImage: string;
  gallery: string[];
}

export const tourCombos: TourCombo[] = [
  {
    id: "uluwatu-sunset-spa-tour",
    title: "Uluwatu Sunset Spa Tour",
    subtitle: "Amazing Uluwatu Sunset Spa Tour",
    description:
      "Uluwatu Sunset Spa Tour is one of the best Bali combination tours that we made to complete your holiday experience on the paradise island of Bali. This tour will guide you to visit Uluwatu temple with sunset view overlooking the sea and watch the beautiful Kecak and Fire Dance Performance near the temple. You get the best spa services combine with the incredible tourist destinations in Uluwatu.  ",
    packageContents: [
      "60 Minutes Traditional Gift Massage",
      "Full AC well-maintained car",
      "Professional English speaking driver",
      "Petrol",
      "Parking Fee"
    ],
    prices: { single: "IDR 475K/person", note: "Best Price For You" },
    cardImage: "/tour-combo/uluwatu-sunset-spa-tour.png",
    gallery: [
      "/tour-combo/uluwatu-sunset-spa-tour.png",
      "/tour-combo/uluwatu-sunset-spa-tour-2.png",
    ],
  },

    {
    id: "ubud-spa-tour",
    title: "Ubud Spa Tour",
    subtitle: "Relaxation On Ubud Scenery With Ubud SPA Tour",
    description:
      "Ubud Tours is the best day trip and very popular in Bali Islands for a full day journey to Visit Tourist Destination and other interest places in Ubud Village the center art and culture in Bali islands. Package start from the hotel at 9am – Ubud tour (Monkey Forest, Ubud Market, Royal King Palace, Rice Terrace, Holy Water Temple) then back to BALI Gift Spa for 60 minutes traditional gift massage.",
    packageContents: [
      "60 Minutes Traditional Gift Massage",
      "Full AC well-maintained car",
      "Professional English speaking driver",
      "Petrol",
      "Parking Fee"
    ],
    prices: { single: "IDR 475K/person", note: "Best Price For You" },
    cardImage: "/tour-combo/ubud-spa-tour.png",
    gallery: [
      "/tour-combo/ubud-spa-tour.png",
      "/tour-combo/ubud-spa-tour-2.png",
    ],
  },

    {
    id: "sunset-tanah-lot-tour",
    title: "Sunset Tanah Lot Tour",
    subtitle: "Refresh Mind With Wonderful Sunset, Tanah Lot View & Balinese SPA",
    description:
      "The Spectacular Tanah Lot Sunset Tour will be enjoyable come with our professional English speaking driver who is always offer our best services during the trip.",
    packageContents: [
      "60 Minutes Traditional Gift Massage",
      "Sunset Tour to Tanah Lot",
      "Full AC well-maintained car",
      "Professional English speaking driver",
      "Petrol",
      "Parking Fee"
    ],
    prices: { single: "IDR 650K/person", note: "Best Price For You" },
    cardImage: "/tour-combo/sunset-tanah-lot-tour.png",
    gallery: [
      "/tour-combo/sunset-tanah-lot-tour.png",
      "/tour-combo/sunset-tanah-lot-tour-2.png",
    ],
  },

   {
    id: "rafting-and-spa-tour",
    title: "Rafting and Spa Tour",
    subtitle: "Adventure & Relaxation in one day!",
    description:
      "Enjoy a great challenge of adventure in northern of Ubud and this package will offer you the best spa treatments to make your day like new again with professional therapist.",
    packageContents: [
      "Rafting on Telaga Waja - White Water (Lunch, Equipment, Insurance)",
      "60 Minutes Traditional Gift Massage",
      "Full AC well-maintained car",
      "Professional English speaking driver",
      "Petrol",
      "Parking Fee"
    ],
    prices: { single: "IDR 650K/person", note: "Best Price For You" },
    cardImage: "/tour-combo/rafting-and-spa-tour.png",
    gallery: [
      "/tour-combo/rafting-and-spa-tour.png",
      "/tour-combo/rafting-and-spa-tour-2.png",
    ],
  },

     {
    id: "bali-airport-transfer",
    title: "Bali Airport Transfer",
    subtitle: "Convenient and Comfortable Transportation to and from the Airport",
    description:
      "Pickup From or Drop off to Ngurah Rai Airport & Get Welcoming Massage From Bali Gift spa. Enjoy this delightful traditional Balinese massage with professional therapist before you leave Bali Island.",
    packageContents: [
      "60 Minutes Traditional Gift Massage",
      "Drop off to Airport or Pickup from airport"
    ],
    prices: { single: "IDR 350K/person", note: "Best Price For You" },
    cardImage: "/tour-combo/bali-airport-transfer.png",
    gallery: [
      "/tour-combo/bali-airport-transfer.png",
      "/tour-combo/bali-airport-transfer-2.png",
    ],
  },
];
