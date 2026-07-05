import { DM_Sans } from "next/font/google";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const contactItems = [
  {
    icon: Phone,
    title: "Phone Number",
    value: "+62 819-3606-6898",
    href: "tel:+6281936066898",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "baligiftspa@gmail.com",
    href: "mailto:baligiftspa@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jl. Lebak Sari 21 Petitenget, Kuta, Badung, Bali 80361",
    href: "https://maps.google.com/?q=Jl.+Lebak+Sari+21+Petitenget,+Kuta,+Badung,+Bali+80361",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    value: "Everyday, 10.00 - 21.00",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-12 pb-24 lg:px-24">
      {/* Hero */}
      <section className="mb-16 text-center">
        <p
          className={`${dmSans.className} mb-3 text-lg font-semibold text-[#01adef]`}
        >
          Contact Us
        </p>

        <h1
          className={`${dmSans.className} text-5xl font-bold text-[#262626]`}
        >
          Get In Touch With Us
        </h1>

        <p
          className={`${dmSans.className} mx-auto mt-6 max-w-2xl text-lg text-neutral-600`}
        >
          We'd love to hear from you. Whether you're booking a relaxing spa
          treatment or have questions about our services, our team is here to
          help.
        </p>
      </section>

      {/* Contact + Map */}
      <section className="grid gap-10 lg:grid-cols-2">

        
        {/* Google Map */}
        <div className="overflow-hidden rounded-3xl shadow-sm">
          <iframe
            title="Bali Gift Spa"
            src="https://www.google.com/maps?cid=7875212376844853654&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
        
        {/* Contact Cards */}
        <div className="space-y-3">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 items-center rounded-3xl border border-neutral-200 bg-white p-6"
              >
                <div className="flex w-fit h-auto p-3 sm:p-4 items-center justify-center rounded-lg sm:rounded-2xl bg-[#01adef]/10">
                  <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-[#01adef]" />
                </div>

                <div>
                  <h3
                    className={`${dmSans.className} text-lg sm:text-xl font-semibold text-[#262626]`}
                  >
                    {item.title}
                  </h3>

                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className={`${dmSans.className} block text-base text-neutral-600 transition hover:text-[#01adef]`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className={`${dmSans.className} text-base text-neutral-600`}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}