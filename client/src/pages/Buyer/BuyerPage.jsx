import React, { useState } from "react";
import Header from "./Header";
import WelcomeBanner from "./WelcomeBanner";
import ProductFilters from "./ProductFilters";
import ProductGrid from "./ProductGrid";
import CategoryShowcase from "./CategoryShowcase";
import CreatorSpotlight from "./CreatorSpotlight";
import Help from "./Help";
import Footer from "./Footer";

const BuyerPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeToast, setActiveToast] = useState(null);

  return (
    <div className="bg-[#FDF9F4] text-[#4A3F3F] font-sans tracking-tight leading-relaxed text-[16px]">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cart={cart}
        wishlist={wishlist}
      />
      <WelcomeBanner />
      <ProductFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      <ProductGrid
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        selectedPrice={selectedPrice}
        cart={cart}
        setCart={setCart}
        wishlist={wishlist}
        setWishlist={setWishlist}
        activeToast={activeToast}
        setActiveToast={setActiveToast}
      />
      <CategoryShowcase />
      <CreatorSpotlight />
      <Help />
      <Footer />
    </div>
  );
};

export default BuyerPage;
