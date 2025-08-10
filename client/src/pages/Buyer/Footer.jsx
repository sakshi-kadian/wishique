import React from "react";

const Footer = () => {
  const links = ["About", "Terms", "Privacy", "Social Links"];

  return (
    <footer
      className="bg-[#F7EDE2] text-center py-3 font-sans text-[#5F4C4C] select-none"
      role="contentinfo"
      aria-label="Footer"
    >
      <nav
        className="flex justify-center flex-wrap gap-6 mb-3"
        aria-label="Footer navigation"
      >
        {links.map((item) => (
          <a
            key={item}
            href="#"
            className="px-2 py-1 rounded-md hover:bg-[#ead6cc] focus:bg-[#ead6cc] focus:outline-none transition duration-200 cursor-pointer text-xs font-semibold"
            aria-label={item}
          >
            {item}
          </a>
        ))}
      </nav>

      <p className="text-[10px] text-[#7A6F66]">
        © 2025 Wishique. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
