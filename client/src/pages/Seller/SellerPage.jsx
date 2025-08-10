import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Product from "./Products";
import Orders from "./Orders";
import Reviews from "./Reviews";
import Wallet from "./Wallet";
import Analytics from "./Analytics";
import Messages from "./Messages";
import Support from "./Support";
import Profile from "./Profile";
import Logout from "./Logout";

const SellerPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen font-sans text-[#3B2B2B] bg-[#FDF9F4] flex">
      {/* Sidebar */}
      <div className="w-64 fixed h-full">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Main Content shifted to right */}
      <div className="pl-64 w-full">
        <main className="p-10">
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "products" && <Product />}
          {activeTab === "orders" && <Orders />}
          {activeTab === "reviews" && <Reviews />}
          {activeTab === "wallet" && <Wallet />}
          {activeTab === "analytics" && <Analytics />}
          {activeTab === "messages" && <Messages />}
          {activeTab === "support" && <Support />}
          {activeTab === "profile" && <Profile />}
          {activeTab === "logout" && <Logout setActiveTab={setActiveTab} />}
        </main>
      </div>
    </div>
  );
};

export default SellerPage;
