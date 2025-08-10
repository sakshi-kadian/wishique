import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";

const products = [
  { id: 1, image: "/asset/buyer/products/img1.jpg", name: "Bluebell Desk Lamp", price: "$85", rating: 5, category: "Decor" },
  { id: 2, image: "/asset/buyer/products/img2.jpg", name: "Embroidered Cushion Cover", price: "$65", rating: 4, category: "Wellness" },
  { id: 3, image: "/asset/buyer/products/img3.jpg", name: "Wildflower Scent Candle", price: "$40", rating: 3, category: "Candle" },
  { id: 4, image: "/asset/buyer/products/img4.jpg", name: "Handwoven Cotton Scarf", price: "$70", rating: 5, category: "Fashion" },
  { id: 5, image: "/asset/buyer/products/img5.jpg", name: "Dreamy Silk Scrunchie Set", price: "$25", rating: 4, category: "Haircare" },
  { id: 6, image: "/asset/buyer/products/img6.jpg", name: "Artisan Journal Notebook", price: "$35", rating: 5, category: "Stationery" },
  { id: 7, image: "/asset/buyer/products/img7.jpg", name: "Vintage Ceramic Vase", price: "$110", rating: 3, category: "Decor" },
  { id: 8, image: "/asset/buyer/products/img8.jpg", name: "Neutral Crochet Pullover", price: "$90", rating: 4, category: "Fashion" },
];

const ProductGrid = ({
  searchQuery,
  selectedCategory,
  selectedPrice,
  cart,
  setCart,
  wishlist,
  setWishlist,
  activeToast,
  setActiveToast,
}) => {
  const renderStars = (count) => (
    <div className="flex text-[#F5C518] text-xs mb-1">
      {[...Array(count)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
  );

  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((p) => (selectedCategory ? p.category === selectedCategory : true))
    .filter((p) => {
      if (!selectedPrice) return true;
      const price = parseInt(p.price.replace("$", ""));
      if (selectedPrice === "0-50") return price <= 50;
      if (selectedPrice === "51-100") return price > 50 && price <= 100;
      if (selectedPrice === "101+") return price > 100;
      return true;
    });

  const toggleWishlist = (id) => {
    const isWishlisted = wishlist.includes(id);
    setWishlist((prev) =>
      isWishlisted ? prev.filter((w) => w !== id) : [...prev, id]
    );
    setActiveToast({
      id,
      message: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
    });
    setTimeout(() => setActiveToast(null), 2000);
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
      setActiveToast({ id: product.id, message: "Added to Cart" });
      setTimeout(() => setActiveToast(null), 2000);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    setActiveToast({ id: productId, message: "Removed from Cart" });
    setTimeout(() => setActiveToast(null), 2000);
  };

  return (
    <section className="px-6 md:px-12 py-1">
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-2xl font-serif font-semibold text-[#4A3F3F] mb-3">
            No Products Found
          </h3>
          <p className="text-[#7A6F66] text-base">
            Try adjusting your category or price filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="relative bg-white border border-[#E8DCD2] rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              {activeToast?.id === p.id && (
                <div className="absolute top-2 left-2 bg-[#4A3F3F] text-white text-xs px-3 py-1 rounded-md shadow animate-fade-in-out z-50">
                  {activeToast.message}
                </div>
              )}

              <button
                onClick={() => toggleWishlist(p.id)}
                className={`absolute top-3 right-3 text-xl transition duration-200 ${
                  wishlist.includes(p.id)
                    ? "text-[#e84e4e]"
                    : "text-[#5E1F2F]"
                }`}
              >
                <FaHeart />
              </button>

              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <p className="font-medium text-[#2E2E2E] text-[16px] mb-1">
                {p.name}
              </p>
              {renderStars(p.rating)}
              <p className="font-semibold text-[#3B2B2B] text-[16px]">
                {p.price}
              </p>
              {cart.find((item) => item.id === p.id) ? (
                <button
                  onClick={() => removeFromCart(p.id)}
                  className="mt-3 w-full py-2 text-white bg-[#9e3b3b] hover:bg-[#5a1e1e] rounded-md text-sm font-medium hover:scale-[1.01] transition"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(p)}
                  className="mt-3 w-full py-2 text-white bg-[#b46f5b] hover:bg-[#301515] rounded-md text-sm font-medium hover:scale-[1.01] transition"
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
