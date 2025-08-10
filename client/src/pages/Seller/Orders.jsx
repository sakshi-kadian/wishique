import React from "react";

const orders = [
  { id: "#001", product: "Gold-Plated Bracelet", date: "Aug 1, 2025", amount: "$55", status: "Shipped" },
  { id: "#002", product: "Boho Chain Necklace", date: "Aug 2, 2025", amount: "$70", status: "Pending" },
  { id: "#003", product: "Crystal Ring Set", date: "Aug 3, 2025", amount: "$45", status: "Shipped" },
  { id: "#004", product: "Pearl Drop Earrings", date: "Aug 4, 2025", amount: "$60", status: "Cancelled" },
  { id: "#005", product: "Beaded Anklet", date: "Aug 5, 2025", amount: "$30", status: "Shipped" },
  { id: "#006", product: "Macrame Wall Hanging", date: "Aug 5, 2025", amount: "$85", status: "Shipped" },
  { id: "#007", product: "Lavender Scented Candle", date: "Aug 6, 2025", amount: "$25", status: "Pending" },
  { id: "#008", product: "Handcrafted Clay Vase", date: "Aug 7, 2025", amount: "$95", status: "Shipped" },
  { id: "#009", product: "Sunstone Earrings", date: "Aug 7, 2025", amount: "$40", status: "Pending" },
  { id: "#010", product: "Silk Scrunchie Pack", date: "Aug 8, 2025", amount: "$35", status: "Shipped" },
];

const getStatusBadge = (status) => {
  const base = "inline-block px-3 py-1 rounded-full text-xs font-semibold text-center w-24";

  switch (status) {
    case "Shipped":
      return <span className={`${base} bg-green-100 text-green-700`}>Shipped</span>;
    case "Pending":
      return <span className={`${base} bg-yellow-100 text-yellow-700`}>Pending</span>;
    case "Cancelled":
      return <span className={`${base} bg-red-100 text-red-700`}>Cancelled</span>;
    default:
      return <span className={`${base} bg-gray-100 text-gray-600`}>{status}</span>;
  }
};

const Orders = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-4">
      <div className="bg-white border border-[#E8DCD2] shadow-lg rounded-xl p-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-2 text-center text-[#3B2B2B]">
          Recent Orders
        </h2>
        {/* Subtext */}
        <p className="text-sm sm:text-base text-center text-[#6F5E55] mb-6 max-w-3xl mx-auto">
          Review the latest purchases and monitor order status in real time.
        </p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[600px] sm:min-w-full text-sm sm:text-base text-left border-collapse">
            <thead className="bg-[#F7EDE2] text-[#5F4C4C] uppercase text-xs sm:text-sm font-medium sticky top-0 z-10">
              <tr>
                <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Order ID</th>
                <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Product</th>
                <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Date</th>
                <th className="px-4 sm:px-6 py-3 whitespace-nowrap">Amount</th>
                <th className="px-4 sm:px-6 py-3 text-center whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr
                  key={idx}
                  className="border-t border-[#F1E7DE] hover:bg-[#FAF4EF]/60 transition-colors duration-150"
                >
                  <td className="px-4 sm:px-6 py-3 font-medium text-[#3B2B2B] whitespace-nowrap">
                    {order.id}
                  </td>
                  <td className="px-4 sm:px-6 py-3 whitespace-normal max-w-xs">
                    {order.product}
                  </td>
                  <td className="px-4 sm:px-6 py-3 whitespace-nowrap">
                    {order.date}
                  </td>
                  <td className="px-4 sm:px-6 py-3 whitespace-nowrap">
                    {order.amount}
                  </td>
                  <td className="px-4 sm:px-6 py-3 text-center">
                    {getStatusBadge(order.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
