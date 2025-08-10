import React, { useState, useEffect } from "react";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaClipboardList,
  FaStar,
  FaWallet,
  FaUser,
  FaSignOutAlt,
  FaChartBar,
  FaEnvelopeOpenText,
  FaHeadset,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// Tab Button Component
const TabButton = ({ label, tab, activeTab, setActiveTab, icon }) => (
  <button
    aria-label={`Go to ${label}`}
    onClick={() => setActiveTab(tab)}
    className={`group w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
      activeTab === tab
        ? "bg-[#843B3B] text-white shadow-inner"
        : "text-[#5C3B36] hover:bg-[#F2DED7] hover:text-[#843B3B]"
    }`}
  >
    <span className="text-[16px]">{icon}</span>
    <span className="group-hover:font-semibold">{label}</span>
  </button>
);

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar on window resize > md breakpoint (768px)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hamburger button for mobile */}
      <button
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#843B3B] text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#843B3B]"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Overlay when sidebar open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-[#F7ECE8] p-6 shadow-xl border-r border-[#C89A93] flex flex-col min-h-screen
          transform transition-transform duration-300 ease-in-out
          z-50
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Logo + Title */}
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/asset/landing/header.png"
            alt="Wishique Logo"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-2xl font-serif font-bold text-[#4e0c02] tracking-wide">
            WISHIQUE
          </span>
        </div>

        {/* MAIN NAVIGATION */}
        <nav className="flex flex-col gap-1 mb-6">
          <TabButton
            label="Dashboard"
            tab="dashboard"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<FaTachometerAlt />}
          />
          <TabButton
            label="Products"
            tab="products"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<FaBoxOpen />}
          />
          <TabButton
            label="Orders"
            tab="orders"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<FaClipboardList />}
          />
          <TabButton
            label="Reviews"
            tab="reviews"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<FaStar />}
          />
          <TabButton
            label="Wallet"
            tab="wallet"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<FaWallet />}
          />
        </nav>

        {/* ADVANCED NAVIGATION */}
        <div className="mt-2 mb-6 border-t border-[#C89A93] pt-4 flex flex-col gap-1">
          <TabButton
            label="Analytics"
            tab="analytics"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<FaChartBar />}
          />
          <TabButton
            label="Messages"
            tab="messages"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<FaEnvelopeOpenText />}
          />
          <TabButton
            label="Support"
            tab="support"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<FaHeadset />}
          />
        </div>

        {/* ACCOUNT NAVIGATION */}
        <div className="mt-auto pt-4 border-t border-[#C89A93] flex flex-col gap-1">
          <TabButton
            label="Profile"
            tab="profile"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<FaUser />}
          />
          <TabButton
            label="Logout"
            tab="logout"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            icon={<FaSignOutAlt />}
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
