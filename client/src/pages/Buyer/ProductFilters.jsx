import React from "react";

const categories = [
  { id: 1, name: "Bags", image: "/categories/bags.jpg" },
  { id: 2, name: "Decor", image: "/categories/decor.jpg" },
  { id: 3, name: "Haircare", image: "/categories/haircare.jpg" },
  { id: 4, name: "Jewellery", image: "/categories/jewellery.jpg" },
  { id: 5, name: "Skincare", image: "/categories/skincare.jpg" },
  { id: 6, name: "Stationery", image: "/categories/stationery.jpg" },
  { id: 7, name: "Fashion", image: "/categories/fashion.jpg" },
  { id: 8, name: "Wellness", image: "/categories/wellness.jpg" },
];

const ProductFilters = ({
  selectedCategory,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
}) => {
  return (
    <section className="pt-20 pb-4 px-14">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-10 gap-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center md:text-left text-[#8B2500] tracking-wide drop-shadow-sm">
          All Products
        </h2>

        {/* Filters */}
        <div className="flex gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-[#E8DCD2] rounded-lg bg-white text-sm text-[#3B2B2B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a34343] hover:border-[#b35a5a] transition-all duration-200"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>

          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="px-4 py-2 border border-[#E8DCD2] rounded-lg bg-white text-sm text-[#3B2B2B] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a34343] hover:border-[#b35a5a] transition-all duration-200"
          >
            <option value="">Select Price Range</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101+">$101+</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default ProductFilters;
