import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/Landing/LandingPage";
import BuyerPage from "./pages/Buyer/BuyerPage";
import SellerPage from "./pages/Seller/SellerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/seller" element={<SellerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
