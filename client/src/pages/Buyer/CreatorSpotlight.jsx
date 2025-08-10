import React from "react";

const creators = [
  {
    id: 1,
    handle: "@brushworks",
    quote:
      "Fine brushes that bring art to life—crafted for precision and designed for every artist’s touch.",
  },
  {
    id: 2,
    handle: "@luminara",
    quote:
      "Candles that whisper warmth and elegance, hand-poured with natural ingredients for a soothing ambiance.",
  },
  {
    id: 3,
    handle: "@byessence",
    quote:
      "Botanical skincare rooted in nature, delivering pure, effective care through sustainably sourced ingredients.",
  },
  {
    id: 4,
    handle: "@earthcraft",
    quote:
      "Shaping timeless clay creations with skilled hands—each piece a unique blend of tradition and modern design.",
  },
];

const CreatorSpotlight = () => {
  return (
    <section className="pt-14 pb-20 px-6 md:px-12">
      {/* Title */}
      <h2 className="text-5xl md:text-6xl font-serif text-center mb-4 text-[#8B2500] tracking-wide drop-shadow-sm">
        Today’s Creator Spotlight
      </h2>

      {/* Subtitle */}
      <p className="text-center text-lg md:text-xl text-[#6B5C53] font-serif italic max-w-2xl mx-auto mb-14 opacity-90"></p>

      {/* Creator Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {creators.map((c) => (
          <div
            key={c.id}
            className="bg-gradient-to-b from-[#fdf4f1] to-[#f8ede7] border border-[#E8DCD2] rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1.5 hover:border-[#d8c3b3] group flex flex-col justify-between"
          >
            <div>
              {/* Creator Handle */}
              <h3 className="font-semibold text-[#2E2E2E] text-lg text-center">
                {c.handle}
              </h3>

              {/* Quote */}
              <p className="text-base text-[#5A4A42] mt-2 font-serif text-center">
                "{c.quote}"
              </p>
            </div>

            {/* View Shop Button */}
            <div className="flex justify-center mt-6">
              <button
                type="button"
                className="px-6 py-2 text-white font-semibold rounded-full shadow-lg bg-[#5e0101] hover:bg-[#800202] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7A2B2B] focus:ring-offset-0"
              >
                View Shop
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreatorSpotlight;
