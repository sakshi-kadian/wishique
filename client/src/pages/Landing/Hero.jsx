import React from "react";

const Hero = ({ openModalFor }) => (
  <section
    id="hero"
    className="py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-center scroll-mt-[100px]"
    style={{
      background:
        "radial-gradient(circle at center, #EFE4D8 0%, #2C1A1A 120%)",
    }}
  >
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold mb-4 sm:mb-6 tracking-tight text-[#5b1313] leading-tight">
      WISHIQUE
    </h1>
    <p className="text-xl sm:text-2xl md:text-3xl italic mb-6 sm:mb-8 text-[#4f2222]">
      Where Curated Meets Captivating
    </p>
    <p className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto mb-8 sm:mb-10 text-base sm:text-lg md:text-xl text-[#301313] leading-relaxed sm:leading-relaxed md:leading-loose">
      A curated destination where discerning buyers and independent creators
      converge through elevated craft, refined design, and purposeful
      experiences.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
      <button
        onClick={() => openModalFor("buyer")}
        className="px-6 sm:px-8 py-3 text-base sm:text-lg text-white rounded-md hover:shadow-lg transition font-medium
              bg-gradient-to-r from-[#5C0A0A] via-[#7A2B2B] to-[#5C0A0A]
             hover:from-[#7A2B2B] hover:via-[#A63A3A] hover:to-[#7A2B2B]"
      >
        Browse as Buyer
      </button>
      <button
        onClick={() => openModalFor("seller")}
        className="px-6 sm:px-8 py-3 text-base sm:text-lg text-white rounded-md hover:shadow-lg transition font-medium
             bg-gradient-to-r from-[#5C0A0A] via-[#7A2B2B] to-[#5C0A0A]
             hover:from-[#7A2B2B] hover:via-[#A63A3A] hover:to-[#7A2B2B]"
      >
        Join as Seller
      </button>
    </div>
  </section>
);

export default Hero;
