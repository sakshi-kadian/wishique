import React, { useState } from "react";

const Messages = () => {
  const [replies, setReplies] = useState({});
  const [replyInputs, setReplyInputs] = useState({});
  const [showConfirmation, setShowConfirmation] = useState({});

  const sampleMessages = [
    { sender: "Amara", content: "Is this item available in medium size?", time: "2 hours ago" },
    { sender: "Luna", content: "Can I get faster shipping?", time: "1 day ago" },
    { sender: "Hazel", content: "Love the quality! Thank you!", time: "3 days ago" },
    { sender: "Ziya", content: "Can I cancel my last order?", time: "4 days ago" },
    { sender: "Lily", content: "Will you restock the floral dress?", time: "1 week ago" },
  ];

  const handleReplyChange = (index, value) => {
    setReplyInputs({ ...replyInputs, [index]: value });
  };

  const handleSendReply = (index) => {
    const reply = replyInputs[index];
    if (!reply?.trim()) return;

    setReplies({ ...replies, [index]: reply });
    setReplyInputs({ ...replyInputs, [index]: "" });
    setShowConfirmation({ ...showConfirmation, [index]: true });

    setTimeout(() => {
      setShowConfirmation((prev) => ({ ...prev, [index]: false }));
    }, 1500);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-[#E8DCD2] space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#3B2B2B] tracking-tight mb-1">
          Customer Messages
        </h1>
        <p className="text-[#5A4A42] text-sm max-w-xl">
          Stay connected with your boutique shoppers — reply quickly and build lasting trust.
        </p>
      </div>

      <ul className="space-y-6">
        {sampleMessages.map((msg, index) => (
          <li
            key={index}
            className="bg-[#FBF4ED] p-5 rounded-lg border border-[#E8DCD2] shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#B46F5B] text-white flex items-center justify-center font-semibold text-lg">
                {msg.sender.charAt(0)}
              </div>

              {/* Content & Reply */}
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <h3 className="text-[#3B2B2B] font-semibold text-lg sm:text-base break-words max-w-full">
                    {msg.sender}
                  </h3>
                  <span className="text-xs text-[#9B8B82] mt-1 sm:mt-0 whitespace-nowrap">
                    {msg.time}
                  </span>
                </div>

                <p className="text-[#5A4A42] mt-1 text-sm break-words max-w-full">
                  {msg.content}
                </p>

                {/* Reply Input */}
                <div className="mt-3 space-y-2">
                  <textarea
                    placeholder="Type your reply..."
                    value={replyInputs[index] || ""}
                    onChange={(e) => handleReplyChange(index, e.target.value)}
                    className="w-full p-2 rounded border border-[#D8CFC7] text-sm focus:outline-none focus:ring-2 focus:ring-[#B46F5B]"
                    rows={2}
                    style={{ resize: "none" }}
                  />
                  <button
                    onClick={() => handleSendReply(index)}
                    className="bg-[#B46F5B] text-white px-4 py-1.5 rounded text-sm hover:bg-[#9b5d4d] transition w-full sm:w-auto"
                  >
                    Send Reply
                  </button>

                  {showConfirmation[index] && (
                    <p className="text-xs text-[#CBA28B] mt-1 truncate max-w-full">
                      Reply sent: “{replies[index]}”
                    </p>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
