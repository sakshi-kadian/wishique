import React from "react";
import { FaWallet, FaDollarSign, FaMoneyCheckAlt, FaHistory } from "react-icons/fa";

const walletData = {
  balance: 850.25,
  totalEarnings: 1200.5,
  lastPayout: "2025-07-30",
  pending: 250.0,
  transactions: [
    { id: "TXN001", type: "Deposit", amount: "$200", date: "2025-08-01", status: "Success" },
    { id: "TXN002", type: "Withdrawal", amount: "$100", date: "2025-08-02", status: "Pending" },
    { id: "TXN003", type: "Transfer", amount: "$50", date: "2025-08-03", status: "Failed" },
    { id: "TXN004", type: "Deposit", amount: "$300", date: "2025-08-04", status: "Success" },
    { id: "TXN005", type: "Withdrawal", amount: "$150", date: "2025-08-05", status: "Pending" },
    { id: "TXN006", type: "Transfer", amount: "$80", date: "2025-08-06", status: "Failed" },
  ],
};

const Wallet = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-[#E8DCD2] space-y-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3B2B2B]">Seller Wallet</h2>
          <p className="text-[#905423] text-sm sm:text-base mt-2">
            Track your earnings and payouts here.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <FaWallet className="text-2xl sm:text-xl text-[#5E1F2F]" />,
              label: "Wallet Balance",
              value: `$${walletData.balance.toFixed(2)}`,
            },
            {
              icon: <FaDollarSign className="text-2xl sm:text-xl text-[#5E1F2F]" />,
              label: "Total Earnings",
              value: `$${walletData.totalEarnings.toFixed(2)}`,
            },
            {
              icon: <FaMoneyCheckAlt className="text-2xl sm:text-xl text-[#5E1F2F]" />,
              label: "Last Payout",
              value: walletData.lastPayout,
            },
            {
              icon: <FaDollarSign className="text-2xl sm:text-xl text-[#5E1F2F]" />,
              label: "Pending",
              value: `$${walletData.pending.toFixed(2)}`,
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#FAF4EF] to-[#FFFDFB] border border-[#E8DCD2] rounded-2xl p-5 sm:p-6 shadow-sm drop-shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-2">
                {card.icon}
                <span className="text-sm sm:text-base font-medium text-[#7A6F66]">
                  {card.label}
                </span>
              </div>
              <p className="text-xl sm:text-2xl font-semibold text-[#3B2B2B] truncate">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Transactions Table */}
        <div className="bg-white border border-[#E8DCD2] rounded-2xl shadow overflow-x-auto">
          <div className="flex items-center gap-2 px-4 sm:px-6 py-3 border-b border-[#F1E7DE]">
            <FaHistory className="text-[#5E1F2F]" />
            <h3 className="text-lg sm:text-xl font-semibold text-[#3B2B2B]">
              Recent Transactions
            </h3>
          </div>
          <table className="min-w-[600px] w-full text-sm sm:text-base text-left" role="table">
            <thead className="bg-[#F7EDE2] text-[#5F4C4C]">
              <tr>
                <th className="px-4 sm:px-6 py-2 whitespace-nowrap">Txn ID</th>
                <th className="px-4 sm:px-6 py-2 whitespace-nowrap">Type</th>
                <th className="px-4 sm:px-6 py-2 whitespace-nowrap">Amount</th>
                <th className="px-4 sm:px-6 py-2 whitespace-nowrap">Date</th>
              </tr>
            </thead>
            <tbody>
              {walletData.transactions.map((txn) => (
                <tr
                  key={txn.id}
                  className="bg-[#FAF4EF] border-t border-[#F1E7DE] hover:bg-[#f8ede5] transition-all duration-200"
                >
                  <td className="px-4 sm:px-6 py-3 font-mono font-medium text-[#3B2B2B] truncate max-w-[90px]">
                    {txn.id}
                  </td>
                  <td className="px-4 sm:px-6 py-3 text-[#5F4C4C] truncate max-w-[120px]">
                    {txn.type}
                  </td>
                  <td className="px-4 sm:px-6 py-3 text-[#5F4C4C] truncate max-w-[100px]">
                    {txn.amount}
                  </td>
                  <td className="px-4 sm:px-6 py-3 text-[#5F4C4C] truncate max-w-[110px]">
                    {txn.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
