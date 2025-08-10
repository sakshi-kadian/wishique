import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#3b2323] text-[#EFE4D8] shadow-md">
      <div className="flex items-center justify-between px-8 py-2 md:px-10">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <img
              src="/asset/landing/header.png"
              alt="Wishique Logo"
              className="h-14 w-14 max-h-14 rounded-full object-cover"
            />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200 bg-[#5B1313] text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
              WISHIQUE
            </div>
          </div>
        </div>

        {/* Hamburger Icon (mobile only) */}
        <button
          className="text-2xl md:hidden transition duration-200 hover:bg-[#311515] hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation (desktop) */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {["hero", "about", "guide", "voices", "newsletter", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-3 py-1 rounded hover:bg-[#EFE4D8] hover:text-[#362222] transition duration-200"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="flex flex-col md:hidden px-6 pb-4 space-y-2 font-medium bg-[#362222]">
          {["hero", "about", "guide", "voices", "newsletter", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)} 
              className="px-3 py-2 rounded hover:bg-[#EFE4D8] hover:text-[#362222] transition duration-200"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
