import React from "react";

const Contact = () => (
  <section
    id="contact"
    className="py-24 px-6 text-center bg-[#F5EFEA] scroll-mt-[100px]"
  >
    <h2 className="text-5xl font-serif font-semibold mb-6 text-[#2B2B2B] tracking-tight">
      Contact Us
    </h2>

    <p className="text-[17px] text-[#4B4B4B] mb-2 leading-relaxed">
      Whether you're reaching out with a question, a collaboration idea, or a
      spark of inspiration — we’re here for it.
    </p>
    <p className="text-[17px] text-[#4B4B4B] mb-10 leading-relaxed">
      At <span className="font-semibold text-[#4B1E1E]">Wishique</span>, every
      message is an opportunity, and every voice matters.
    </p>

    <div className="max-w-md mx-auto space-y-4 text-base">
      <input
        type="text"
        placeholder="Name"
        className="w-full border border-[#DDD2C8] px-5 py-3 rounded-md placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-[#C5B7AE]"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-[#DDD2C8] px-5 py-3 rounded-md placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-[#C5B7AE]"
      />
      <textarea
        placeholder="Message"
        rows="4"
        className="w-full border border-[#DDD2C8] px-5 py-3 rounded-md resize-none placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-[#C5B7AE]"
      />
      <button className="bg-[#7D2E3F] text-white px-6 py-3 rounded-md hover:bg-[#5E1F2F] hover:shadow w-full transition">
        Send Message
      </button>
    </div>
  </section>
);

export default Contact;
