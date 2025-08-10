import React from "react";

const Voices = () => (
  <section
    id="voices"
    className="py-24 px-6 bg-[#F5EFEA] scroll-mt-[100px]"
  >
    <div className="max-w-screen-xl mx-auto text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2B2B2B] tracking-tight">
        Community Spotlight
      </h2>
      <p className="mt-6 text-[17px] text-[#5A4940] leading-relaxed max-w-xl mx-auto">
        Honest reflections from buyers and sellers on their journey.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        {
          quote:
            "I found a handmade necklace that felt like it was crafted just for me. Even the packaging made me smile.",
          role: "first-time buyer",
          name: "— Star",
        },
        {
          quote:
            "Shopping here felt like walking through a dreamy craft fair from my room. Every find tells a story crafted with passion and care.",
          role: "conscious buyer",
          name: "— Hazel",
        },
        {
          quote:
            "As a new seller, I felt seen and supported from day one. The setup was smooth and beautiful.",
          role: "artisan jeweler",
          name: "— Ray",
        },
        {
          quote:
            "I used to sell only on Instagram, but Wishique gave me a real boutique storefront. I finally feel professional.",
          role: "candle maker",
          name: "— Krystal",
        },
      ].map(({ quote, role, name }, i) => (
        <blockquote
          key={i}
          className="bg-white shadow-lg border border-[#C5B7AE] p-6 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:scale-[1.02] transition duration-300"
        >
          <p className="leading-relaxed mb-5 text-[17px] text-[#3B3B3B] italic relative before:content-['“'] before:text-2xl before:mr-1 after:content-['”'] after:text-2xl after:ml-1">
            {quote}
          </p>
          <div className="mt-auto text-sm text-[#5A4940]">
            <p className="text-[15px] font-medium">{name}</p>
            <p className="text-[13px] italic text-[#8B6E5D] capitalize">{role}</p>
          </div>
        </blockquote>
      ))}
    </div>
  </section>
);

export default Voices;
