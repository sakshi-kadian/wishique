import React from "react";

const Newsletter = () => (
  <section
    id="newsletter"
    className="py-24 px-6 text-center bg-[#f1e7df] scroll-mt-[100px]"
  >
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2B2B2B] tracking-tight">
        Stay Ahead – Join the Newsletter
      </h2>
      <p className="mt-6 text-[17px] leading-relaxed text-[#4B4B4B]">
        Be the first to access exclusive drops, creator spotlights, and curated finds you won’t see anywhere else.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-[#C5B7AE] px-5 py-3 rounded-md w-full sm:w-[300px] text-base placeholder-[#7A6E65] focus:outline-none focus:ring-2 focus:ring-[#7D2E3F] transition"
        />
        <button className="px-6 py-3 bg-[#7D2E3F] text-white text-base font-medium rounded-md hover:bg-[#5E1F2F] hover:shadow transition w-full sm:w-auto">
          Subscribe
        </button>
      </div>
    </div>
  </section>
);

export default Newsletter;
