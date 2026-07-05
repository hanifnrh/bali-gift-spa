// app/services/treatments.ts

export interface Treatment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  packageContents?: string[];
  prices?:
    | { label: string; amount: string }[]
    | { single: string; note?: string };
  cardImage: string;
  gallery: string[];
  category: "ala-carte" | "gift-packages";
}

export const treatments: Treatment[] = [
  {
    id: "manicure",
    category: "ala-carte",
    title: "Manicure",
    subtitle: "Beautify Your Nail — Treat Yourself Like A Queen",
    description:
      "The Manicure Service at Seminyak Gift Spa provides special beauty care service for fingernails and hands. The service package provided consists of cutting nails with techniques to make nails more beautiful, cleaning the cuticle area, hand massage, and applying nail polish. Get a best experience manicure treatment only at Seminyak Gift Spa.",
    benefits: [
      "Boosted nail health",
      "Prevent fungal infection",
      "Prevent calluses",
      "Caring for cuticles",
      "Make your hands look younger",
    ],
    prices: [
      { label: "Spa Manicure Female", amount: "IDR 200K" },
      { label: "Spa Manicure Male", amount: "IDR 140K" },
      { label: "Basic Manicure Female", amount: "IDR 180K" },
      { label: "Basic Manicure Male", amount: "IDR 120K" },
    ],
    cardImage: "/services/ala-carte/manicure.png",
    gallery: [
      "/services/ala-carte/manicure.png",
      "/services/ala-carte/manicure-2.png",
    ],
  },
  {
    id: "pedicure",
    category: "ala-carte",
    title: "Pedicure",
    subtitle: "Beautify Your Nail — Pampering Your Soul",
    description:
      "The Pedicure Service at Seminyak Gift Spa provides treatments not only for toenails, but also removes dead skin cells rubbed from the bottom of the feet using coarse stones (usually pumice) and other materials. The extra care given from this special treatment is a massage in the knee area. The last step our profesional team will given a moisturizer for best final result.",
    benefits: [
      "Caring for cuticles",
      "Trim fingernails",
      "Caring for nail beds",
      "Overcoming dry skin on hands and feet",
      "Overcoming various complaints in the hands and feet",
      "Provides a relaxing effect",
    ],
    prices: [
      { label: "Spa Pedicure Male", amount: "IDR 170K" },
      { label: "Spa Pedicure Female", amount: "IDR 250K" },
      { label: "Basic Pedicure Male", amount: "IDR 140K" },
      { label: "Basic Pedicure Female", amount: "IDR 220K" },
    ],
    cardImage: "/services/ala-carte/pedicure.png",
    gallery: [
      "/services/ala-carte/pedicure.png",
      "/services/ala-carte/pedicure-2.png",
    ],
  },
  {
    id: "body-mask",
    category: "ala-carte",
    title: "Body Mask",
    subtitle: "Pamper Your Body — Relaxation To The Fullest",
    description:
      "Get benefit from a body mask treatment for a more radiant and moisturized skin. Body mask treatments have the advantage of detoxifying and smoothing your body’s skin. This body mask is formulated with natural ingredients and left on your skin for about 15-25 minutes until absorbed. The last stage, the treatment will be followed by the application of body lotion which aims to keep your skin moist.",
    benefits: [
      "Makes skin smoother and softer",
      "Revitalize skin",
      "Overcoming back acne",
      "Moisturize and tighten skin",
      "Provides a relaxing effect",
    ],
    prices: { single: "IDR 300K", note: "Best Price For You" },
    cardImage: "/services/ala-carte/body-mask.png",
    gallery: [
      "/services/ala-carte/body-mask.png",
      "/services/ala-carte/body-mask-2.png",
    ],
  },
  {
    id: "shirodara-bali-gift",
    category: "ala-carte",
    title: "Shirodara Bali Gift",
    subtitle: "Pamper Your Body — Feel The Stress Melt Away",
    description:
      "Shirodara Bali Gift is a shirodara massage focuses on the back, shoulders, chest area and gentle massage on the face. Shirodara massage using herbal oil is used to massage the forehead area which is located between our eyebrows. This area is known as the “sixth chakra”. The final touch is followed by a massage of the head evenly. The Shirodhara Bali gift treatment ritual ends with a hot bath and ginger tea for the best results in relaxing your body.",
    benefits: [
      "Mental relaxation",
      "Reducing insomnia and vertigo",
      "Smooth blood circulation",
      "Optimizing the body to be fitter",
      "Reduce stiffness",
    ],
    prices: { single: "IDR 400K", note: "Best Price For You" },
    cardImage: "/services/ala-carte/shirodara.png",
    gallery: [
      "/services/ala-carte/shirodara.png",
      "/services/ala-carte/shirodara-2.png",
    ],
  },
  {
    id: "foot-massage",
    category: "ala-carte",
    title: "Foot Massage",
    subtitle: "Relax Your Feet — Step Away From The Stress",
    description:
      "Foot massage has been around for hundreds of years and is often used to promote health and relax the body. This special treatment is an express massage that works on the feet. This massage uses a massage technique on the thumb and in between fingers.The advantage that you will get by choosing this massage is that it can help to stimulate and increase blood circulation in the legs.",
    benefits: [
      "Improve blood circulation",
      "Relieves symptoms of depression",
      "Boost Immune System",
      "Helps Sleep Quality",
      "Prevent foot and ankle injuries",
    ],
    prices: { single: "IDR 160K", note: "Best Price For You" },
    cardImage: "/services/ala-carte/foot-massage.png",
    gallery: [
      "/services/ala-carte/foot-massage.png",
      "/services/ala-carte/foot-massage-2.png",
    ],
  },
  {
    id: "abhyanga-bali-gift",
    category: "ala-carte",
    title: "Abhyanga Bali Gift",
    subtitle: "Relax Your Body — Treat Yourself Well",
    description:
      "Abhayanga Bali Gift package treatment is focuses massages on a full body massage with herbal oils. This massage technique is done with a full body massage technique which is anointed thoroughly with warm aromatic oils.Abhayanga is specially designed to balance energy. Abhyanga is designed to balance the subtle energies of the body through both applications of aromatic oils.",
    benefits: [
      "Cleanse and detoxify body",
      "Soothe the body",
      "Revitalize the body",
      "Reduce Stiffness",
      "Smooth Blood Circulation",
    ],
    prices: { single: "IDR 475K", note: "Best Price For You" },
    cardImage: "/services/ala-carte/abhyanga.png",
    gallery: [
      "/services/ala-carte/abhyanga.png",
      "/services/ala-carte/abhyanga-2.png",
    ],
  },
  {
    id: "back-and-shoulder-massage",
    category: "ala-carte",
    title: "Back and Shoulder Massage",
    subtitle: "Relax Your Body — Remove all tension",
    description:
      "Back and shoulder massage is a massage technique that focuses on your back and neck and shoulders, similar to the Hawaiian Lomi Lomi technique. The benefits of this massage are to refresh the body, overcome colds, wrong sleep, and stiffness in the body.",
    benefits: [
      "Smooth blood flow",
      "Relieves tension in the upper back",
      "Relieves lower back pain",
      "Overcoming Osteoarthritis spine",
      "Overcoming Fibrimyalgia",
    ],
    prices: [
      { label: "30 Minutes", amount: "IDR 160K" },
      { label: "40 Minutes", amount: "IDR 180K" },
    ],
    cardImage: "/services/ala-carte/back-shoulder.png",
    gallery: [
      "/services/ala-carte/back-shoulder.png",
      "/services/ala-carte/back-shoulder-2.png",
    ],
  },
  {
    id: "indian-head-massage",
    category: "ala-carte",
    title: "Indian Head Massage",
    subtitle: "Take off the heat — Relax and rejuvenate",
    description:
      "Indian head massage involves not only massaging the head, but also the upper back, neck, shoulders and scalp. This massage not only provides a sensation of maximum relaxation but also becomes a healing experience in the head area, rejuvenation and stimulation.",
    benefits: [
      "Relieves tension and headaches",
      "Reduce stress",
      "Stimulates lymphatic drainage",
      "Smooth blood flow",
      "Overcoming Insomnia",
    ],
    prices: { single: "IDR 130K", note: "Best Price For You" },
    cardImage: "/services/ala-carte/indian-head.png",
    gallery: [
      "/services/ala-carte/indian-head.png",
      "/services/ala-carte/indian-head-2.png",
    ],
  },
  {
    id: "warm-stone",
    category: "ala-carte",
    title: "Warm Stone",
    subtitle: "Care For Your Body — Feel the pleasure",
    description:
      "Warm Stone Massage is one type of massage therapy have many advantages for body. This therapy is used to help you relax and reduce muscle and soft tissue tension throughout the body. During the treatment, smooth and flat stones will be heated and placed on certain parts of the body.The stone used is usually made of basalt or a type of volcanic rock that retains heat.",
    benefits: [
      "Reduce muscle soreness",
      "Reduce stress and anxiety",
      "Reduce cancer risk",
      "Increase endurance",
      "Increase joint and muscle flexibility",
    ],
    prices: { single: "IDR 350K", note: "Best Price For You" },
    cardImage: "/services/ala-carte/warm-stone.png",
    gallery: [
      "/services/ala-carte/warm-stone.png",
      "/services/ala-carte/warm-stone-2.png",
    ],
  },
  {
    id: "body-scrub",
    category: "ala-carte",
    title: "Body Scrub",
    subtitle: "Rejuvenate Your Body — Recover Your Soul",
    description:
      "Body scrub is a massage technique with a combination of body skin care which has a characteristic in the form of fine granules that will be immediately felt on the skin when rubbed. Body scrubs are very popular all over the world and are often referred to as one of the best skin care methods to remove dead skin cells with herbal scrubs or other relaxing fragrances.",
    benefits: [
      "Streamlining blood circulation",
      "Brighten skin",
      "Overcoming premature aging",
      "Relax the body",
      "Relieves body stiffness",
    ],
    prices: { single: "IDR 650K", note: "Best Price For You" },
    cardImage: "/services/ala-carte/body-scrub.png",
    gallery: [
      "/services/ala-carte/body-scrub.png",
      "/services/ala-carte/body-scrub-2.png",
    ],
  },
  {
    id: "balinese-massage",
    category: "ala-carte",
    title: "Balinese Massage",
    subtitle: "Pamper Yourself — Rejuvenate Your Body",
    description:
      "Balinese massage is a treatment that is carried out throughout the body with a relaxing deep massage. Traditional Balinese massage uses a combination of reflexology, gentle stretching of acupressure and Balinese aromatherapy to promote the flow of blood and oxygen throughout your body, bringing a sense of calm and deep relaxation.",
    benefits: [
      "Increased blood flow",
      "Sooth joint pains",
      "Increase energy levels",
      "Boost IQ and balance life",
      "Whole body relaxation",
    ],
    prices: [
      { label: "60min", amount: "IDR 250K" },
      { label: "90min", amount: "IDR 400K" },
    ],
    cardImage: "/services/ala-carte/balinese-massage.png",
    gallery: [
      "/services/ala-carte/balinese-massage.png",
      "/services/ala-carte/balinese-massage-2.png",
    ],
  },
  {
    id: "balinese-facial",
    category: "ala-carte",
    title: "Balinese Facial",
    subtitle: "Care For Your Skin — Care For Your Beauty",
    description:
      "Balinese Facial is a special treatment to clean pores, exfoliate dead skin cells, and treat skin problems on the face with a natural mask ingridients. This multi-step process is meant to rejuvenate and nourish the face, leaving skin looking healthier and younger. It is also a popular spa treatment for pampering and relaxing with a massage. Feel the sensation of the best facial massage to cleanse and pamper your face only at Seminyak Gift Spa.",
    benefits: [
      "Clean face thoroughly",
      "Prevent aging",
      "Help detox",
      "Reduce blackheads",
      "Makes skin smooth and soft",
    ],
    prices: { single: "IDR 250K", note: "Best Price For You" },
    cardImage: "/services/ala-carte/balinese-facial.png",
    gallery: [
      "/services/ala-carte/balinese-facial.png",
      "/services/ala-carte/balinese-facial-2.png",
    ],
  },
  {
    id: "reflexology-massage",
    category: "ala-carte",
    title: "Reflexology Massage",
    subtitle: "Relax your body — Unwind And Get A Fresh",
    description:
      "Reflexology treatment is a massage technique that involves applying different amounts of pressure to the hands and feet. Reflexology is believed to be a massage technique that puts pressure on certain organs of the body system to offer various health for your body.",
    benefits: [
      "Boost their immune system",
      "Recover from back problems",
      "Correct hormonal imbalances",
      "Smooth Blood Circulation",
      "Get over bacterial infections",
    ],
    prices: { single: "IDR 230K", note: "Best Price For You" },
    cardImage: "/services/ala-carte/reflexology.png",
    gallery: [
      "/services/ala-carte/reflexology.png",
      "/services/ala-carte/reflexology-2.png",
    ],
  },
  {
    id: "lomi-lomi-massage",
    category: "ala-carte",
    title: "Lomi-Lomi Massage",
    subtitle: "Relax Your Body — Indulge Yourself Well",
    description:
      "Lomi – lomi is a traditional Hawaiian massage technique using a combination of massage techniques with oils to soothe the body and restore energy. Lomi lomi has a focusing movement with a long, continuous massage designed to help the body release pressure and tension such as muscle tension.",
    benefits: [
      "Improves circulation",
      "Lowers blood pressure",
      "Improves posture",
      "Increases range of motion",
      "Stimulate toxins",
    ],
    prices: { single: "IDR 300K", note: "Best Price For You" },
    cardImage: "/services/ala-carte/lomi-lomi.png",
    gallery: [
      "/services/ala-carte/lomi-lomi.png",
      "/services/ala-carte/lomi-lomi-2.png",
    ],
  },
  {
    id: "the-simple-gift",
    category: "gift-packages",
    title: "The Simple Gift",
    subtitle: "Simple Love For Your Body & Soul",
    description:
      "Enjoy your precious 70 minutes with The Simple Gift Spa. This package is the best gift that can be given to yourself or a loved one. Pamper yourself with our original massage. A combination foot massage and traditional Balinese massage with comfortable pressure, using rolling hand movements and long strokes that can provide body relaxation.",
    benefits: [
      "Reduce stiffness",
      "Mental relaxation",
      "Smooth blood circulation",
      "Revitalize the body",
      "Cleanse and detoxify body ",
    ],
    packageContents: [
      "90 Minutes Abhyanga Massage",
      "45 Minutes Balinese Facial",
      "30 Minutes Foot Massage",
      "30 Minutes Shirodara Massage",
      "15 Minutes Milk Aroma Bath",
    ],
    prices: { single: "IDR 375K", note: "Best Price For You" },
    cardImage: "/services/gift-packages/the-simple-gift.png",
    gallery: [
      "/services/gift-packages/the-simple-gift.png",
      "/services/gift-packages/the-simple-gift-2.png",
    ],
  },

  {
    id: "shirodara-package",
    category: "gift-packages",
    title: "Shirodara Package",
    subtitle: "Pamper Your Body — Treating Your Deserving Care",
    description:
      "Shirodara package is the super complete package that is recommended for those of you who are tired from vacationing with hectic activities. Enjoy a massage that relaxes your body from head to toe with a variety of combination Indian massage techniques, namely the abhyanga massage technique. You also get a spesial treatment such as Balinese Facial. The last step after a toe to head massage for the perfect spa result is with a milky fragrance bath",
    benefits: [
      "Optimizing the body to be fitter",
      "Reducing insomnia and vertigo",
      "Revitalize the body",
      "Smooth Blood Circulation",
      "Provides a relaxing effect",
    ],
    packageContents: [
      "90 Minutes Abhyanga Massage",
      "45 Minutes Balinese Facial",
      "30 Minutes Foot Massage",
      "30 Minutes Shirodara Massage",
      "15 Minutes Milk Aroma Bath",
    ],
    prices: { single: "IDR 1.050K", note: "Best Price For You" },
    cardImage: "/services/gift-packages/shirodara.png",
    gallery: [
      "/services/gift-packages/shirodara.png",
      "/services/gift-packages/shirodara-2.png",
    ],
  },

  {
    id: "botanical-package",
    category: "gift-packages",
    title: "Botanical Package",
    subtitle: "Ultimate Relaxation for your Soul",
    description:
      "Botanical package is combination of natural herbs that is sure for those of you who want to experience a spa with the concept of nature, Indonesian-style spices. This package will give you the best sensation with Balinese massage with spices and a botanical body mask. The last step that you can pamper yourself is with a bath fragrance with the aroma of milk.",
    benefits: [
      "Mental relaxation",
      "Soothe the body",
      "Revitalize the body",
      "Reducing insomnia and vertigo",
      "Smooth blood circulation",
    ],
    packageContents: [
      "60 Minutes Balinese Massage",
      "30 Minutes Mini Facial",
      "45 Minutes Spice Body Scrub",
      "30 Minutes Botanical Body Mask",
      "15 Minutes Milk Aroma Bath",
    ],
    prices: { single: "IDR 950K", note: "Best Price For You" },
    cardImage: "/services/gift-packages/botanical.png",
    gallery: [
      "/services/gift-packages/botanical.png",
      "/services/gift-packages/botanical-2.png",
    ],
  },

  {
    id: "jet-lag-relief",
    category: "gift-packages",
    title: "Jet Lag Relief",
    subtitle: "Massage Can Relieve the Discomfort of Travel",
    description:
      "Jet lag relief suit for those of you who are tired after a long flight. This massage is specially combined and suitable for those of you who have traveled far. You will get a top to toe massage to relax your body after a long flight. Get a fresh body with this best package and you can continue your holiday in Bali.",
    benefits: [
      "Helps relieve pinched nerves",
      "Helps remove toxins from the skin",
      "Helps relieve jet lag",
      "Provides a relaxing and peaceful experience",
      "Improved circulation",
    ],
    packageContents: [
      "60 Minutes Balinese Massage + Lomi Lomi Massage",
      "60 Minutes Balinese Facial",
      "30 Minutes Foot Massage",
    ],
    prices: { single: "IDR 750K", note: "Best Price For You" },
    cardImage: "/services/gift-packages/jet-lag.png",
    gallery: [
      "/services/gift-packages/jet-lag.png",
      "/services/gift-packages/jet-lag-2.png",
    ],
  },

  {
    id: "gift-spa-indulgence",
    category: "gift-packages",
    title: "Gift Spa Indulgence",
    subtitle: "Beauty and Indulgence at Same Place",
    description:
      "Leave problems, stress and worries behind with our special packages Gift Spa Indulgence. This package you will get a full massage from top to toe. The combination of Balinese and Hawaiian massage techniques provides good benefits for smoothing your blood circulation so that the body is not stiff and is ready to move again afterward with more enthusiasm.",
    benefits: [
      "Reduce Stiffness",
      "Smooth Blood Circulation",
      "Soothe the body",
      "Optimizing the body to be fitter",
      "Mental relaxation",
    ],
    packageContents: [
      "60 Minutes Balinese Massage + Lomi Lomi Massage",
      "60 Minutes Balinese Facial",
      "30 Minutes Foot Massage",
    ],
    prices: { single: "IDR 750K", note: "Best Price For You" },
    cardImage: "/services/gift-packages/gift-spa-indulgence.png",
    gallery: [
      "/services/gift-packages/gift-spa-indulgence.png",
      "/services/gift-packages/gift-spa-indulgence-2.png",
    ],
  },

  {
    id: "the-gift-of-bali",
    category: "gift-packages",
    title: "The Gift of Bali",
    subtitle: "More Than Just A Spa Package",
    description:
      "The Gift of Bali is a package that is offered to complement your busy vacation so that you can return to activities with fun. Combining the best of Balinese massage techniques and Hawaiian massage techniques such as the Lomi-Lomi massage. This massager features rolling hand movements and long strokes with comfortable pressure. This package will give you a high level of full body relaxation. This treatment ends with a milk bath for about 30 minutes. We also facilitate shower gels, shampoos and conditioners with fragrances that soothe your mind and soul.",
    benefits: [
      "Revitalize the body",
      "Smooth blood circulation",
      "Optimizing the body to be fitter",
      "Reduce stiffness",
      "Cleanse and detoxify body",
    ],
    packageContents: [
      "10 Minutes Foot Reflexology",
      "95 Minutes Balinese Massage + Lomi Lomi Massage",
      "15 Minutes Milk Aroma Bath",
    ],
    prices: { single: "IDR 600K", note: "Best Price For You" },
    cardImage: "/services/gift-packages/the-gift-of-bali.png",
    gallery: [
      "/services/gift-packages/the-gift-of-bali.png",
      "/services/gift-packages/the-gift-of-bali-2.png",
    ],
  },

  {
    id: "the-gift-of-balinese-lulur",
    category: "gift-packages",
    title: "The Gift of Balinese Lulur",
    subtitle: "Satisfying Your Body Needs",
    description:
      "The Gift Of Balinese Lulur is perfect for those of you who want to get the sensation of a traditional massage experience with natural ingredients of Balinese spices. Our professional therapists will massage you with an original body scrub specially formulated to moisturize your skin, hydrating the skin with fine scrub particles and skin cells. The properties of herbs and spices are believed to be able to make the skin smooth. The last stage, feel the best massage with a milk bath and aromatherapy.",
    benefits: [
      "Revitalize the body",
      "Smooth Blood Circulation",
      "Cleanse and detoxify body",
      "Optimizing the body to be fitter",
      "Provides a relaxing effect",
    ],
    packageContents: [
      "60 Minutes Balinese Massage",
      "45 Minutes Balinese Scrub",
      "15 Minutes Milk Aroma Bath",
    ],
    prices: { single: "IDR 650K", note: "Best Price For You" },
    cardImage: "/services/gift-packages/the-gift-of-balinese-lulur.png",
    gallery: [
      "/services/gift-packages/the-gift-of-balinese-lulur.png",
      "/services/gift-packages/the-gift-of-balinese-lulur-2.png",
    ],
  },

  {
    id: "the-gift-of-balinese-facial",
    category: "gift-packages",
    title: "The Gift of Balinese Facial",
    subtitle: "Pamper Your Soul - Relieve From Stress",
    description:
      "Special packages from us to pamper you for maximum relaxation. Our therapists not only provide relaxation services for your face, but also for special services such as foot reflexology with traditional Balinese massage specifically to remove dead skin cells. Especially for this package, all ingredients are given naturally for smoothness and natural softness on your skin. The last stage we will provide a milk bath facility with a comfortable aroma that soothes your heart.",
    benefits: [
      "Increase circulation",
      "Anti aging",
      "Deep cleansing",
      "Rejuvenate your skin",
      "Reduce stress",
    ],
    packageContents: [
      "60 Minutes Balinese Massage",
      "45 Minutes Balinese Facial",
      "15 Minutes Milk Aroma Bath",
    ],
    prices: { single: "IDR 650K", note: "Best Price For You" },
    cardImage: "/services/gift-packages/the-gift-of-balinese-facial.png",
    gallery: [
      "/services/gift-packages/the-gift-of-balinese-facial.png",
      "/services/gift-packages/the-gift-of-balinese-facial-2.png",
    ],
  },

  {
    id: "the-dua-gift",
    category: "gift-packages",
    title: "The Dua Gift",
    subtitle: "Let Your Body Meet your Soul",
    description:
      "The Dua Gift is a special package combines the best techniques from our spa package, which is a combination of Hawaiian massage from Lomi Lomi Massage and Balinese massage, which is a traditional Balinese massage. Enjoy comfortable pressure using rolling hand movements and long strokes, which provide maximum body relaxation.",
    benefits: [
      "Optimizing the body to be fitter",
      "Soothe the body",
      "Cleanse and detoxify body",
      "Mental relaxation",
      "Reduce stiffness",
    ],
    packageContents: [
      "10 Minutes Reflexology",
      "90 Minutes Balinese Massage + Lomi Lomi Massage",
    ],
    prices: { single: "IDR 500K", note: "Best Price For You" },
    cardImage: "/services/gift-packages/the-dua-gift.png",
    gallery: [
      "/services/gift-packages/the-dua-gift.png",
      "/services/gift-packages/the-dua-gift-2.png",
    ],
  },
];
