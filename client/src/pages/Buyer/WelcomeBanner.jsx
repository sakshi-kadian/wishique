import React from "react";

const WelcomeBanner = () => {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-[#f4e0d8] via-[#eedbd1] to-[#f7ede2]">
      <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-wide bg-gradient-to-r from-[#6e0d0d] via-[#9b1b1b] to-[#6e0d0d] bg-clip-text text-transparent drop-shadow-sm">
        WELCOME BACK
      </h1>

      <p className="mt-4 text-lg md:text-xl text-[#4a1f1f] max-w-2xl mx-auto leading-relaxed">
        Discover handcrafted, heartfelt products, curated just for you.
      </p>
    </section>
  );
};

export default WelcomeBanner;
