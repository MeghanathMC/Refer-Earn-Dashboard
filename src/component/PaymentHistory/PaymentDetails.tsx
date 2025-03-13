import { useState } from "react";

type Payment = {
  id: number;
  amount: number;
  date: string;
  tid: string;
  status: "Paid" | "Pending" | "Failed";
};

const initialPaymentData: Payment[] = [
  { id: 1, amount: 25000, date: "15/01/2025", tid: "TXNAZ103", status: "Paid" },
  { id: 2, amount: 18000, date: "10/01/2025", tid: "TXNBX204", status: "Pending" },
  { id: 3, amount: 22000, date: "05/01/2025", tid: "-", status: "Failed" },
  { id: 4, amount: 27000, date: "02/01/2025", tid: "TXNDZ406", status: "Paid" },
  { id: 5, amount: 15000, date: "28/12/2024", tid: "TXNEE507", status: "Pending" },
  { id: 6, amount: 30000, date: "25/12/2024", tid: "TXNFF608", status: "Paid" }
];

const PaymentDetails = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [paymentData, setPaymentData] = useState(initialPaymentData);

  // Filter counts
  const filterCounts = {
    All: paymentData.length,
    Paid: paymentData.filter(p => p.status === "Paid").length,
    Failed: paymentData.filter(p => p.status === "Failed").length,
    Pending: paymentData.filter(p => p.status === "Pending").length,
  };

  // Handle filter
  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    const filtered = initialPaymentData.filter(payment =>
      filter === "All" || payment.status === filter
    );
    setPaymentData(filtered);
  };

  // Handle date sort
  const handleDateSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const sorted = [...paymentData].sort((a, b) => {
      const dateA = new Date(a.date.split('/').reverse().join('-')).getTime();
      const dateB = new Date(b.date.split('/').reverse().join('-')).getTime();
      return newOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setPaymentData(sorted);
  };

  return (
    <div className="w-full px-4 md:px-6 py-4 bg-white rounded-lg shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Payment History</h2>
        <p className="text-gray-500 text-sm mt-1">Track all your payment transactions here</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-6">
        <button 
          onClick={() => handleFilter("All")}
          className={`px-4 py-2 text-sm rounded-full transition-all ${
            activeFilter === "All" ? "bg-blue-100 text-blue-600" : "text-gray-500"
          }`}
        >
          All <span className="ml-1 text-xs bg-gray-100 px-2 py-0.5 rounded-full">{filterCounts.All}</span>
        </button>
        <button 
          onClick={() => handleFilter("Paid")}
          className={`px-4 py-2 text-sm rounded-full transition-all ${
            activeFilter === "Paid" ? "bg-green-100 text-green-600" : "text-gray-500"
          }`}
        >
          Paid <span className="ml-1 text-xs bg-gray-100 px-2 py-0.5 rounded-full">{filterCounts.Paid}</span>
        </button>
        <button 
          onClick={() => handleFilter("Failed")}
          className={`px-4 py-2 text-sm rounded-full transition-all ${
            activeFilter === "Failed" ? "bg-red-100 text-red-600" : "text-gray-500"
          }`}
        >
          Failed <span className="ml-1 text-xs bg-gray-100 px-2 py-0.5 rounded-full">{filterCounts.Failed}</span>
        </button>
        <button 
          onClick={() => handleFilter("Pending")}
          className={`px-4 py-2 text-sm rounded-full transition-all ${
            activeFilter === "Pending" ? "bg-yellow-100 text-yellow-600" : "text-gray-500"
          }`}
        >
          Pending <span className="ml-1 text-xs bg-gray-100 px-2 py-0.5 rounded-full">{filterCounts.Pending}</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm border-b">
              <th className="px-4 py-3 font-medium text-gray-600 text-center">Installment</th>
              <th className="px-4 py-3 font-medium text-gray-600 text-center">Amount</th>
              <th className="px-4 py-3 font-medium text-gray-600 text-center cursor-pointer" onClick={handleDateSort}>
                Date {sortOrder === "asc" ? "↑" : "↓"}
              </th>
              <th className="px-4 py-3 font-medium text-gray-600 text-center">Transaction ID</th>
              <th className="px-4 py-3 font-medium text-gray-600 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment) => (
              <tr key={payment.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2.5 text-sm text-center">{payment.id}</td>
                <td className="px-4 py-2.5 text-sm text-center">₹{payment.amount.toLocaleString('en-IN')}</td>
                <td className="px-4 py-2.5 text-sm text-center">{payment.date}</td>
                <td className="px-4 py-2.5 text-sm text-center">{payment.tid}</td>
                <td className="px-4 py-2.5 text-center">
                  <span className={`inline-flex items-center px-2 py-1 text-sm rounded-full ${
                    payment.status === "Paid" ? "bg-green-100 text-green-600" :
                    payment.status === "Failed" ? "bg-red-100 text-red-600" :
                    "bg-yellow-100 text-yellow-600"
                  }`}>
                    <span className="flex items-center justify-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        payment.status === "Paid" ? "bg-green-500" :
                        payment.status === "Failed" ? "bg-red-500" :
                        "bg-yellow-500"
                      }`}></span>
                      {payment.status}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentDetails;
