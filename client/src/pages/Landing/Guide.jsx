import React from "react";
import {
  FaSearch,
  FaHandshake,
  FaShoppingCart,
  FaStore,
  FaUpload,
  FaRocket,
} from "react-icons/fa";

const steps = {
  buyers: [
    {
      icon: <FaSearch />,
      title: "Step 1: Explore",
      desc: "Browse curated collections featuring rare finds, and timeless pieces.",
    },
    {
      icon: <FaHandshake />,
      title: "Step 2: Discover",
      desc: "Support visionary creators and indie brands shaping culture.",
    },
    {
      icon: <FaShoppingCart />,
      title: "Step 3: Checkout",
      desc: "Shop seamlessly with trusted, secure and ethical experiences.",
    },
  ],
  sellers: [
    {
      icon: <FaStore />,
      title: "Step 1: Launch Store",
      desc: "Set up your boutique effortlessly and turn your vision into reality.",
    },
    {
      icon: <FaUpload />,
      title: "Step 2: Showcase",
      desc: "Create product listings optimized with data-driven insights.",
    },
    {
      icon: <FaRocket />,
      title: "Step 3: Grow",
      desc: "Leverage analytics and marketing tools to increase visibility and revenue.",
    },
  ],
};

const Guide = () => (
  <section
    id="guide"
    className="py-28 bg-[#f1e7df] scroll-mt-[100px]"
  >
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2B2B2B] mb-6 tracking-tight">
        Start Your <span className="text-[#7C2D2D]">Wishique</span> Journey
      </h2>
      <p className="text-lg sm:text-xl text-[#4B4B4B] max-w-2xl mx-auto leading-relaxed italic tracking-wide mb-20">
        Whether you're a creator building your brand or a buyer discovering meaningful finds,
        <span className="text-[#9e6341] font-medium"> your journey begins here</span>.
      </p>

      {/* Buyer Label */}
      <div className="relative flex items-center justify-center mb-14">
        <span className="absolute w-full h-px bg-[#C5B7AE] top-1/2 transform -translate-y-1/2" />
        <div className="relative z-10 px-6 py-2 bg-[#F5EFEA] rounded-full shadow-md ring-1 ring-[#D6C8BD]">
          <h3 className="text-xl sm:text-2xl font-serif text-[#7C2D2D] font-semibold tracking-wide">
            For Buyers
          </h3>
        </div>
      </div>

      {/* Buyer Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20 px-4">
        {steps.buyers.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#D9CFC6] shadow-md hover:shadow-lg transition-transform hover:scale-[1.015] text-center"
          >
            <div className="w-12 h-12 mb-5 mx-auto flex items-center justify-center rounded-full bg-[#F5EFEA] text-[#7C2D2D] text-xl shadow-inner">
              {icon}
            </div>
            <h4 className="text-lg font-semibold text-[#2B2B2B] mb-2">{title}</h4>
            <p className="text-sm text-[#4B4B4B] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Seller Label */}
      <div className="relative flex items-center justify-center mb-14">
        <span className="absolute w-full h-px bg-[#C5B7AE] top-1/2 transform -translate-y-1/2" />
        <div className="relative z-10 px-6 py-2 bg-[#F5EFEA] rounded-full shadow-md ring-1 ring-[#D6C8BD]">
          <h3 className="text-xl sm:text-2xl font-serif text-[#7C2D2D] font-semibold tracking-wide">
            For Sellers
          </h3>
        </div>
      </div>

      {/* Seller Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {steps.sellers.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-[#D9CFC6] shadow-md hover:shadow-lg transition-transform hover:scale-[1.015] text-center"
          >
            <div className="w-12 h-12 mb-5 mx-auto flex items-center justify-center rounded-full bg-[#F5EFEA] text-[#7C2D2D] text-xl shadow-inner">
              {icon}
            </div>
            <h4 className="text-lg font-semibold text-[#2B2B2B] mb-2">{title}</h4>
            <p className="text-sm text-[#4B4B4B] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Guide;
