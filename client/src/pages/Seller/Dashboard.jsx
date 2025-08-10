import React from "react";
import { FaUser, FaBox, FaDollarSign } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Dashboard = () => {
  const sellerName = "Aurelia";

  const salesData = [
    { month: "Jan", sales: 4200 },
    { month: "Feb", sales: 4800 },
    { month: "Mar", sales: 5300 },
    { month: "Apr", sales: 6100 },
    { month: "May", sales: 6700 },
    { month: "Jun", sales: 7300 },
    { month: "Jul", sales: 7900 },
    { month: "Aug", sales: 8400 },
    { month: "Sep", sales: 9000 },
    { month: "Oct", sales: 9500 },
    { month: "Nov", sales: 10200 },
    { month: "Dec", sales: 11000 },
  ];

  const orderData = [
    { label: "On Delivery", value: 25 },
    { label: "Delivered", value: 85 },
    { label: "Cancelled", value: 7 },
  ];

  const lowStockItems = [
    { name: "Clay Vase", stock: 3 },
    { name: "Lavender Oil", stock: 2 },
    { name: "Crystal Bracelet", stock: 1 },
  ];

  const hoverEffect =
    "transform transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(180,111,91,0.3)]";

  return (
    <section className="min-h-screen bg-[#FDF9F4] max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 pb-12">
      {/* 👋 Greeting Box */}
      <section className="text-center py-16 px-4 bg-gradient-to-b from-[#f4e0d8] via-[#eedbd1] to-[#f7ede2] rounded-2xl mb-8 shadow-lg">
        <h2 className="text-4xl sm:text-5xl font-serif font-extrabold tracking-wide bg-gradient-to-r from-[#6e0d0d] via-[#9b1b1b] to-[#6e0d0d] bg-clip-text text-transparent drop-shadow-sm leading-tight">
          Welcome Back, {sellerName}!
        </h2>
      </section>

      {/* 🔢 Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: <FaBox className="text-[#b46f5b] text-4xl" />,
            label: "Total Orders",
            value: "450",
          },
          {
            icon: <FaUser className="text-[#b46f5b] text-4xl" />,
            label: "Total Customers",
            value: "955",
          },
          {
            icon: <FaDollarSign className="text-[#b46f5b] text-4xl" />,
            label: "Total Revenue",
            value: "$50K",
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`bg-white border border-[#E8DCD2] p-6 rounded-2xl shadow flex items-center gap-6 ${hoverEffect}`}
          >
            {card.icon}
            <div>
              <p className="text-sm sm:text-base text-[#7A6F66]">{card.label}</p>
              <p className="text-2xl sm:text-3xl font-semibold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 📦 Order Summary + 📉 Low Stock */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Order Summary */}
        <div
          className={`bg-white border border-[#E8DCD2] p-6 rounded-2xl shadow ${hoverEffect}`}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-[#5F4C4C]">
              Order Summary
            </h3>
            <button className="text-sm sm:text-base text-[#9b2c2c] border border-[#9b2c2c] rounded px-3 py-1.5 font-semibold transition-colors duration-300 hover:bg-[#b46f5b] hover:text-white">
              Today
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            {orderData.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20">
                  <CircularProgressbar
                    value={item.value}
                    text={`${item.value}%`}
                    styles={buildStyles({
                      textSize: "22px",
                      pathColor: "#9b2c2c",
                      textColor: "#9b2c2c",
                      trailColor: "#E8DCD2",
                    })}
                  />
                </div>
                <span className="text-sm sm:text-base text-[#5F4C4C] font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock Items */}
        <div
          className={`bg-white border border-[#E8DCD2] p-6 rounded-2xl shadow ${hoverEffect}`}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-6 text-[#3B2B2B]">
            Low Stock Items
          </h3>
          {lowStockItems.length === 0 ? (
            <p className="text-sm sm:text-base text-[#A0A0A0] italic">
              You're all stocked up!
            </p>
          ) : (
            <table className="w-full text-sm sm:text-base text-left">
              <thead>
                <tr>
                  <th className="pb-3 border-b border-[#E8DCD2]">Product</th>
                  <th className="pb-3 border-b border-[#E8DCD2]">Stock Left</th>
                </tr>
              </thead>
              <tbody>
                {lowStockItems.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-[#E8DCD2] hover:bg-[#f9f1ed] transition-colors duration-200"
                  >
                    <td className="py-3">{item.name}</td>
                    <td className="py-3 font-semibold">{item.stock}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* 📊 Sales Chart */}
      <div
        className={`bg-white border border-[#E8DCD2] p-6 rounded-2xl shadow ${hoverEffect}`}
      >
        <h3 className="text-lg sm:text-xl font-semibold mb-6 text-[#3B2B2B]">
          Monthly Sales – {new Date().getFullYear()}
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart
            data={salesData}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#7A6F66" }} />
            <YAxis tick={{ fontSize: 12, fill: "#7A6F66" }} />
            <Tooltip
              wrapperStyle={{ fontSize: "12px" }}
              contentStyle={{
                backgroundColor: "#fff",
                borderColor: "#E8DCD2",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(180,111,91,0.15)",
              }}
            />
            <Bar
              dataKey="sales"
              fill="#b46f5b"
              radius={[6, 6, 0, 0]}
              barSize={28}
              animationDuration={900}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default Dashboard;
