import React from "react";
import {
  FaChartLine,
  FaUserPlus,
  FaUserCheck,
  FaShoppingCart,
  FaMoneyBillWave,
  FaPercentage,
} from "react-icons/fa";

const Analytics = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-[#E8DCD2] space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#3B2B2B] tracking-tight mb-1">
          Analytics Dashboard
        </h1>
        <p className="text-[#5A4A42] text-xs sm:text-sm max-w-xl">
          Visualize your jewellery boutique’s sparkle — monitor sales, client trends, and performance growth in real time.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        <MetricCard title="Monthly Sales" value="$18,240" icon={<FaChartLine />} />
        <MetricCard title="New Customers" value="97" icon={<FaUserPlus />} />
        <MetricCard title="Returning Clients" value="54" icon={<FaUserCheck />} />
        <MetricCard title="Total Orders" value="271" icon={<FaShoppingCart />} />
        <MetricCard title="Avg Order Value" value="$122.6" icon={<FaMoneyBillWave />} />
        <MetricCard title="Conversion Rate" value="5.1%" icon={<FaPercentage />} />
      </div>

      {/* Performance Summary */}
      <div className="bg-[#FBF4ED] p-4 sm:p-6 rounded-lg border border-[#E8DCD2] shadow max-w-full">
        <h2 className="text-lg sm:text-xl font-semibold text-[#3B2B2B] mb-2">
          Performance Summary
        </h2>
        <p className="text-[#5A4A42] text-xs sm:text-sm leading-relaxed max-w-full whitespace-normal">
          Your boutique experienced a 14% surge in monthly revenue and a 7% increase in high-value orders. Repeat clients are growing steadily, especially in the premium jewellery category, indicating strong customer trust and satisfaction.
        </p>
      </div>

      {/* Top Products */}
      <div className="bg-[#FBF4ED] p-4 sm:p-6 rounded-lg border border-[#E8DCD2] shadow max-w-full">
        <h2 className="text-lg sm:text-xl font-semibold text-[#3B2B2B] mb-4">
          Top Products
        </h2>
        <ul className="space-y-2 text-[#5A4A42] text-xs sm:text-sm list-disc list-inside max-w-full">
          <li>18k Gold Bloom Earrings — 62 pieces sold</li>
          <li>Royal Ruby Choker Necklace — 41 pieces sold</li>
          <li>Classic Pearl Studs Set — 37 sets sold</li>
        </ul>
      </div>
    </div>
  );
};

// Reusable Metric Card Component
const MetricCard = ({ title, value, icon }) => (
  <div className="bg-[#FBF4ED] p-4 sm:p-6 rounded-lg border border-[#E8DCD2] shadow hover:shadow-md transition-all duration-200 max-w-full">
    <div className="flex items-center justify-between min-w-0">
      <div className="min-w-0">
        <h2 className="text-base sm:text-lg font-semibold text-[#3B2B2B] truncate">
          {title}
        </h2>
        <p className="text-[#B46F5B] font-bold text-xl sm:text-2xl mt-1 truncate">
          {value}
        </p>
      </div>
      <div className="text-[#B46F5B] text-2xl flex-shrink-0 ml-4">{icon}</div>
    </div>
  </div>
);

export default Analytics;
