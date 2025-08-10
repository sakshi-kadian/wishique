import React from "react";
import { FaStar, FaRegStar, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    customer: "Eliza Starling",
    rating: 5,
    message: "Absolutely loved the product. Beautifully crafted and packed with care!",
    date: "Aug 2, 2025",
  },
  {
    id: 2,
    customer: "Evelyn Maroni",
    rating: 4,
    message: "Great quality. Fast delivery. Will buy again!",
    date: "Aug 4, 2025",
  },
  {
    id: 3,
    customer: "Seraphina Moon",
    rating: 3,
    message: "Product was nice, but packaging could be better.",
    date: "Aug 6, 2025",
  },
  {
    id: 4,
    customer: "Cassian Frost",
    rating: 5,
    message: "Loved the attention to detail! Will definitely recommend to friends.",
    date: "Aug 1, 2025",
  },
  {
    id: 5,
    customer: "Isolde Wren",
    rating: 4,
    message: "Really good value for money. Exceeded expectations.",
    date: "Jul 30, 2025",
  },
  {
    id: 6,
    customer: "Eira Lark",
    rating: 5,
    message: "Customer support was responsive and helpful. Great experience overall!",
    date: "Jul 28, 2025",
  },
  {
    id: 7,
    customer: "Dorian Vale",
    rating: 3,
    message: "Decent product but could improve the delivery packaging.",
    date: "Jul 25, 2025",
  },
  {
    id: 8,
    customer: "Liora Quinn",
    rating: 5,
    message: "Absolutely stunning! Came exactly as shown and feels premium.",
    date: "Jul 23, 2025",
  },
  {
    id: 9,
    customer: "Celestia Everhart",
    rating: 4,
    message: "Nicely packed, good quality. Arrived earlier than expected.",
    date: "Jul 20, 2025",
  },
];

const Reviews = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-[#E8DCD2] max-w-7xl mx-auto my-4">
      <div className="text-center mb-10 px-2 sm:px-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#3B2B2B] font-serif leading-tight">
          What Our Customers Say
        </h2>
        <p className="text-[#7A6F66] text-xs sm:text-sm mt-6 max-w-xl mx-auto px-1 sm:px-0">
          Honest words from people who experienced our products. We value every
          voice that helps us grow.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 sm:px-0">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="bg-[#FBF4ED] border border-[#E8DCD2] rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] max-w-full break-words"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 min-w-0">
                <FaUserCircle className="text-[#BFA89B] text-2xl flex-shrink-0" />
                <div className="truncate min-w-0">
                  <h4 className="text-md font-medium text-[#3B2B2B] truncate">
                    {r.customer}
                  </h4>
                  <span className="text-xs text-[#8B7E75]">{r.date}</span>
                </div>
              </div>
              <div className="flex text-[#F5C518] text-sm flex-shrink-0">
                {[...Array(5)].map((_, i) =>
                  i < r.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>
            </div>
            <p className="text-[#5F4C4C] text-sm sm:text-base leading-relaxed">
              {r.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
