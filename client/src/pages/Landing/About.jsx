import React from "react";
import { FaLightbulb, FaBalanceScale, FaGlobe } from "react-icons/fa";

const About = () => (
  <section id="about" className="py-24 bg-[#F5EFEA] scroll-mt-[100px]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      {/* Left: About Wishique */}
      <div>
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2B2B2B] mb-6 tracking-tight">
          About Wishique
        </h2>

        <p className="text-lg text-[#4B4B4B] leading-relaxed mb-4">
          <span className="block font-semibold text-[#7C2D2D] text-xl mb-4">
            Crafted to Empower. Designed to Connect.
          </span>
          Wishique is a values-driven marketplace where visionary creators grow
          into independent brands with ease, and conscious buyers discover
          intentional, design-forward lifestyle and wellness products.
        </p>

        <p className="text-lg text-[#4B4B4B] leading-relaxed mb-8">
          We eliminate technical hurdles for creators, letting them focus on
          their craft. Buyers enjoy a seamless, purpose-rich experience—where
          each interaction is shaped by ethics, beauty, and thoughtful curation.
        </p>

        <blockquote className="border-l-4 border-[#7C2D2D] pl-6 italic text-[#7C2D2D] text-lg bg-white/60 backdrop-blur-sm rounded-lg py-4 px-2 shadow-sm max-w-xl">
          “To empower creators and connect conscious buyers through a curated,
          story-driven marketplace that celebrates design, ethics, and
          discovery.”
        </blockquote>
      </div>

      {/* Right: Values Section */}
      <div className="space-y-6">
        {[
          {
            icon: <FaLightbulb className="text-[#7C2D2D] w-6 h-6" />,
            title: "Our Mission",
            desc: "To empower creators with intuitive and seamless tools, and to connect them with buyers who value authenticity and purpose.",
          },
          {
            icon: <FaBalanceScale className="text-[#7C2D2D] w-6 h-6" />,
            title: "Our Philosophy",
            desc: "We believe commerce should be thoughtful. Design is more than aesthetics; it is how a product resonates. Every item reflects intention, shaped by data, grounded in ethics, and built to inspire.",
          },
          {
            icon: <FaGlobe className="text-[#7C2D2D] w-6 h-6" />,
            title: "Our Vision",
            desc: "To shape a borderless marketplace where creativity thrives, conscious living leads, and economic freedom becomes a reality for every maker everywhere.",
          },
        ].map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="flex items-start gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#E9D5C9] shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="mt-1">{icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-[#7C2D2D] mb-1">
                {title}
              </h3>
              <p className="text-base text-[#4B4B4B] leading-relaxed font-light">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
