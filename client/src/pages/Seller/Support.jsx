import React, { useState } from "react";
import {
  FaComments,
  FaTicketAlt,
  FaBook,
  FaShieldAlt,
  FaEnvelope,
  FaCog,
} from "react-icons/fa";

const Support = () => {
  const [activeModal, setActiveModal] = useState(null);

  const modalsContent = {
    "Live Chat": {
      icon: <FaComments className="inline mr-2 text-[#5A4A42]" />,
      title: "Live Chat",
      content:
        "Our real-time chat support is launching soon to give you direct access to experts.",
    },
    "Submit a Ticket": {
      icon: <FaTicketAlt className="inline mr-2 text-[#5A4A42]" />,
      title: "Submit a Ticket",
      content:
        "You’ll soon be able to submit support tickets for personalized help with your account.",
    },
    "FAQ": {
      icon: <FaBook className="inline mr-2 text-[#5A4A42]" />,
      title: "FAQ",
      content: (
        <>
          <strong>Q:</strong> How do I reset my password?<br />
          <strong>A:</strong> Go to Settings &gt; Security &gt; Reset Password.<br /><br />
          <strong>Q:</strong> How can I contact support?<br />
          <strong>A:</strong> Use our contact form or live chat anytime!
        </>
      ),
    },
    "Policies": {
      icon: <FaShieldAlt className="inline mr-2 text-[#5A4A42]" />,
      title: "Policies",
      content:
        "We value transparency. All transactions are protected under our Buyer & Seller Protection Policy. If something goes wrong, we’ve got you covered.",
    },
    "Contact Us": {
      icon: <FaEnvelope className="inline mr-2 text-[#5A4A42]" />,
      title: "Contact Us",
      content:
        "Support available 24/7 at support@wishique.com. Expect premium help — always.",
    },
    "Settings": {
      icon: <FaCog className="inline mr-2 text-[#5A4A42]" />,
      title: "Settings",
      content:
        "Account preference and privacy controls will be rolling out soon!",
    },
  };

  const supportOptions = [
    {
      icon: <FaComments className="text-2xl text-[#5A4A42]" />,
      title: "Live Chat",
      description: "Start a live conversation with our support team.",
    },
    {
      icon: <FaTicketAlt className="text-2xl text-[#5A4A42]" />,
      title: "Submit a Ticket",
      description: "Have a specific issue? Submit a support ticket.",
    },
    {
      icon: <FaBook className="text-2xl text-[#5A4A42]" />,
      title: "FAQ",
      description: "Browse our Frequently Asked Questions.",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-[#5A4A42]" />,
      title: "Policies",
      description: "Learn about our protection policies.",
    },
    {
      icon: <FaEnvelope className="text-2xl text-[#5A4A42]" />,
      title: "Contact Us",
      description:
        "Reach us at support@wishique.com — we’re here to help you succeed.",
    },
    {
      icon: <FaCog className="text-2xl text-[#5A4A42]" />,
      title: "Settings",
      description: "Update your account preferences or privacy options.",
    },
  ];

  // Keyboard accessibility handler
  const handleKeyDown = (e, title) => {
    if (e.key === "Enter" || e.key === " ") {
      setActiveModal(title);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-[#E8DCD2] space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#3B2B2B] mb-2 sm:mb-1">
          Support & Help Center
        </h1>
        <p className="text-[#5A4A42] text-xs sm:text-sm max-w-xl">
          Need help? Our team is here to assist you with anything you need.
        </p>
      </div>

      {/* Support Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {supportOptions.map((item, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            onClick={() => setActiveModal(item.title)}
            onKeyDown={(e) => handleKeyDown(e, item.title)}
            className="cursor-pointer bg-[#FBF4ED] p-5 rounded-lg border border-[#E8DCD2] shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-[#843B3B]"
            aria-label={`Open ${item.title} info`}
          >
            <div className="flex items-start space-x-3">
              {item.icon}
              <div>
                <h3 className="text-[#3B2B2B] font-semibold mb-1 text-base sm:text-lg">
                  {item.title}
                </h3>
                <p className="text-[#5A4A42] text-xs sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 p-4 sm:p-6"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-content"
        >
          <div
            className="bg-white p-6 rounded-xl border border-[#E8DCD2] max-w-md w-full max-h-[80vh] overflow-y-auto relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="modal-title"
              className="text-xl font-semibold text-[#3B2B2B] mb-3 flex items-center gap-2 select-none"
            >
              {modalsContent[activeModal].icon}
              {modalsContent[activeModal].title}
            </h2>
            <div
              id="modal-content"
              className="text-[#5A4A42] text-sm whitespace-pre-wrap"
            >
              {modalsContent[activeModal].content}
            </div>
            <button
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
              className="absolute top-3 right-3 text-[#3B2B2B] text-2xl hover:text-[#8B6B61] focus:outline-none focus:ring-2 focus:ring-[#843B3B] rounded"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
