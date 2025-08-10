import React from "react";

const Footer = () => (
  <footer className="text-center text-base py-4 border-t border-[#333] bg-[#362222] text-[#EFE4D8]">
    <div className="flex flex-col items-center space-y-2">
      
      {/* Back to Top */}
      <div>
        <a
          href="#top"
          className="px-3 py-1 rounded hover:bg-[#EFE4D8] hover:text-[#362222] transition duration-200"
        >
          Back to Top
        </a>
      </div>

      {/* Marketplace Links */}
      <div className="flex flex-wrap justify-center gap-3 text-sm">
        {[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Use", href: "#" },
          { label: "Shipping & Returns", href: "#" },
          { label: "Seller Guidelines", href: "#" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="px-2 py-1 rounded hover:bg-[#EFE4D8] hover:text-[#362222] transition duration-200"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-sm text-[#d5c5b4] mt-2">
        ©2025 WISHIQUE. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
