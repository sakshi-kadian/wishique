import React, { useEffect } from "react";

const LoginModal = ({ isOpen, onClose, role, onContinue }) => {
  const demoEmail = "demo@wishique.com";
  const demoPassword = "password123";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div className="relative w-[90%] max-w-sm rounded-xl bg-gradient-to-br from-[#2E1E1E] to-[#3B2B2B] p-8 text-white shadow-2xl ring-1 ring-white/10 transition-transform scale-100 animate-fadeIn">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl font-bold focus:outline-none focus:ring-2 focus:ring-white/40 rounded transition"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-2 font-serif tracking-wide">
          Welcome to Wishique
        </h2>
        <p className="text-sm text-[#D9D2CD] mb-6">
          Login as <span className="font-semibold text-white">{role}</span> to
          continue
        </p>

        {/* Divider */}
        <hr className="border-t border-[#5C4444]/30 mb-6" />

        {/* Demo Email */}
        <input
          type="email"
          value={demoEmail}
          readOnly
          className="w-full px-4 py-2.5 mb-4 rounded-md bg-[#3E2C2C] text-white border border-[#6E4C4C] placeholder:text-[#CFC2BC] focus:outline-none focus:ring-2 focus:ring-[#A67C7C] transition"
        />

        {/* Demo Password */}
        <input
          type="password"
          value={demoPassword}
          readOnly
          className="w-full px-4 py-2.5 mb-6 rounded-md bg-[#3E2C2C] text-white border border-[#6E4C4C] placeholder:text-[#CFC2BC] focus:outline-none focus:ring-2 focus:ring-[#A67C7C] transition"
        />

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="w-full py-2.5 rounded-md bg-gradient-to-r from-[#8B3A4D] to-[#672D3C] hover:from-[#732C3C] hover:to-[#531C2B] transition-all text-white font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#B36A75]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
