import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaMicrophone,
  FaBell,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = ({
  searchQuery,
  setSearchQuery,
  cart,
  wishlist,
  userName = "User",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F7EDE2] px-4 md:px-10 py-4 flex items-center shadow-sm select-none">
      {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer transform transition-transform duration-300 hover:scale-110 flex-shrink-0 pr-8">
        <img
          src="/asset/landing/header.png"
          alt="Wishique Logo"
          className="h-8 w-8 rounded-full"
        />
      </div>

      {/* Search bar */}
      <div className="flex items-center gap-3 border border-[#E8DCD2] rounded-md px-4 py-2 bg-white shadow-sm flex-grow max-w-none min-w-0">
        <FaSearch className="text-[#7A6F66] text-[16px]" />
        <input
          type="text"
          placeholder="Search Wishique"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent outline-none text-[#3B2B2B] text-sm w-full min-w-0"
        />
        <button
          aria-label="Voice Search (Coming Soon)"
          title="Voice Search - Coming Soon"
          className="text-[#7A6F66] cursor-not-allowed opacity-50"
          disabled
        >
          <FaMicrophone className="text-[18px]" />
        </button>
      </div>

      {/* Desktop icons */}
      <div className="hidden md:flex items-center gap-8 text-[15px] relative flex-shrink-0 ml-6">
        {/* Wishlist */}
        <div className="relative group cursor-pointer hover:scale-105 transition duration-200">
          <FaHeart className="text-[#3B2B2B] text-[18px] hover:text-[#5E1F2F]" />
          {wishlist.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#5E1F2F] text-white text-[10px] px-1.5 rounded-full">
              {wishlist.length}
            </span>
          )}
          <span className="absolute left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded shadow z-10">
            Wishlist
          </span>
        </div>

        {/* Cart */}
        <div className="relative group cursor-pointer hover:scale-105 transition duration-200">
          <FaShoppingCart className="text-[#3B2B2B] text-[18px] hover:text-[#5E1F2F]" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#5E1F2F] text-white text-[10px] px-1.5 rounded-full">
              {cart.length}
            </span>
          )}
          <span className="absolute left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded shadow z-10">
            Cart
          </span>
        </div>

        {/* Profile */}
        <div className="relative group cursor-pointer hover:scale-105 transition duration-200">
          <FaUser className="text-[#3B2B2B] text-[18px] hover:text-[#5E1F2F]" />
          <span className="absolute left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded shadow z-10 whitespace-nowrap">
            Profile
          </span>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden ml-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#3B2B2B] text-[20px] focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#F7EDE2] shadow-lg py-4 px-6 flex flex-col gap-6 z-50 md:hidden">
          {/* Wishlist */}
          <div className="flex items-center gap-3 cursor-pointer">
            <FaHeart className="text-[#3B2B2B] text-[18px]" />
            Wishlist ({wishlist.length})
          </div>
          {/* Cart */}
          <div className="flex items-center gap-3 cursor-pointer">
            <FaShoppingCart className="text-[#3B2B2B] text-[18px]" />
            Cart ({cart.length})
          </div>
          {/* Notifications */}
          <div className="flex items-center gap-3 opacity-50 cursor-not-allowed">
            <FaBell className="text-[#3B2B2B] text-[18px]" />
            Notifications
          </div>
          {/* Profile */}
          <div className="flex items-center gap-3 cursor-pointer">
            <FaUser className="text-[#3B2B2B] text-[18px]" />
            Profile
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
