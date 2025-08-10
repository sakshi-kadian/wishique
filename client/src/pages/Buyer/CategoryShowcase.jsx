import React from "react";

const categories = [
  { id: 1, name: "Jewellery", image: "/asset/buyer/category/jewellery.jpg" },
  { id: 2, name: "Ceramics", image: "/asset/buyer/category/ceramics.jpg" },
  { id: 3, name: "Home Decor", image: "/asset/buyer/category/decor.jpg" },
  { id: 4, name: "Painting", image: "/asset/buyer/category/painting.jpg" },
  { id: 5, name: "Candles", image: "/asset/buyer/category/candle.jpg" },
  { id: 6, name: "Bags", image: "/asset/buyer/category/bag.jpg" },
];

const CategoryShowcase = () => {
  return (
    <section className="pt-36 pb-20 px-6 md:px-12">
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-serif text-center mb-14 text-[#8B2500] tracking-wide drop-shadow-sm">
        Explore Our Curated Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="relative bg-gradient-to-b from-[#fdf4f1] to-[#f8ede7] border border-[#E8DCD2] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1.5 hover:border-[#d8c3b3] group"
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="h-56 w-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span
                className="relative text-white text-lg font-serif px-5 py-2 rounded-full overflow-hidden"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.4), rgba(255,215,0,0.4), rgba(0,0,0,0.4))",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 2.5s infinite linear",
                }}
              >
                Coming Soon
              </span>
            </div>

            {/* Category Name */}
            <div className="py-5 bg-gradient-to-b from-[#f8ede7] to-[#f4e3d8] group-hover:from-[#f6e8e0] group-hover:to-[#f1ded3] transition-colors duration-300">
              <p className="font-serif italic font-medium text-[#2E2E2E] text-xl text-center tracking-wide">
                {cat.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Always Visible Coming Soon Banner */}
      <div className="mt-12 text-center font-serif text-xl text-[#8B2500] tracking-wide drop-shadow-sm">
        Coming Soon: More Categories & Collections!
      </div>

      {/* Shimmer Animation */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
};

export default CategoryShowcase;
