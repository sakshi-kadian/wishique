import React from "react";

const Logout = ({ setActiveTab }) => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FFF7F1] to-[#FDF9F4] px-4">
      <div className="flex flex-col items-center text-center max-w-md w-full">
        {/* Logo */}
        <img
          src="/asset/landing/header.png"
          alt="Wishique Logo"
          className="w-20 h-20 mb-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        />

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#905423] mb-8 font-serif">
          You've been logged out.
        </h2>

        {/* Subtext */}
        <p className="text-[#5F4C4C] text-base mb-8">
          We hope to see you again!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-[#b46f5b] text-white px-6 py-3 rounded-md hover:bg-[#3B2B2B] transition text-sm w-full sm:w-auto"
          >
            Return to Homepage
          </button>
          <button
            onClick={() => setActiveTab("dashboard")}
            className="bg-[#b46f5b] text-white px-6 py-3 rounded-md hover:bg-[#3B2B2B] transition text-sm w-full sm:w-auto"
          >
            Login Again
          </button>
        </div>
      </div>
    </section>
  );
};

export default Logout;
