import React from "react";
import { FaShippingFast, FaUndo, FaQuestionCircle, FaEnvelope } from "react-icons/fa";

const Help = () => {
  const helpLinks = [
    {
      icon: <FaShippingFast className="text-[#B46F5B] text-4xl mb-3" />,
      title: "Shipping Information",
      description: "Details on delivery times, charges, and tracking your order.",
    },
    {
      icon: <FaUndo className="text-[#B46F5B] text-4xl mb-3" />,
      title: "Returns & Exchanges",
      description: "Learn how to initiate a return or exchange with ease.",
    },
    {
      icon: <FaQuestionCircle className="text-[#B46F5B] text-4xl mb-3" />,
      title: "FAQs",
      description: "Answers to the most common buyer questions at Wishique.",
    },
    {
      icon: <FaEnvelope className="text-[#B46F5B] text-4xl mb-3" />,
      title: "Contact Support",
      description: "Need help? Our team is here for you via chat or email.",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Premium Heading */}
        <h2
          className="text-5xl md:text-6xl font-serif text-center mb-4
          text-[#8B2500] tracking-wide drop-shadow-sm pb-2"
        >
          How Can We Help You?
        </h2>

        {/* Help Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {helpLinks.map((link, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-[#fdf4f1] to-[#f8ede7] border border-[#E8DCD2] rounded-xl p-6 text-center 
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Coming Soon Badge */}
              <span className="absolute top-3 right-3 bg-gradient-to-r from-[#B46F5B] to-[#8B4F3A] text-white text-xs px-3 py-1 rounded-full shadow-md opacity-90">
                Coming Soon
              </span>

              {/* Icon */}
              {link.icon}

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#2E2E2E] mb-2">
                {link.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#5A4A42] leading-relaxed">
                {link.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Help;
