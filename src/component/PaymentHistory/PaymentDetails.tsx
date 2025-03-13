import { useState } from "react";

type Referral = {
  id: number;
  amount: number;
  date: string;
  tid: string;
  status: "Paid" | "Pending" | "Failed";
};

const paymentData: Referral[] = [
  { id: 1, amount: 25000, date: "15/01/2025", tid: "TXNAZ103", status: "Paid" },
  {
    id: 2,
    amount: 18000,
    date: "10/01/2025",
    tid: "TXNBX204",
    status: "Pending",
  },
  {
    id: 3,
    amount: 22000,
    date: "05/01/2025",
    tid: "TXNCY305",
    status: "Failed",
  },
  { id: 4, amount: 27000, date: "02/01/2025", tid: "TXNDZ406", status: "Paid" },
  {
    id: 5,
    amount: 15000,
    date: "28/12/2024",
    tid: "TXNEE507",
    status: "Pending",
  },
  { id: 6, amount: 30000, date: "25/12/2024", tid: "TXNFF608", status: "Paid" },
];

const PaymentDetails = () => {
  return (
    <div className="w-full max-w-5xl px-5">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Payment Details</h2>
          <p className="text-gray-500 text-sm">
            See your transaction details here
          </p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left text-sm">
              <th className="p-3">Installment</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
              <th className="p-3">Transaction ID</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((txn) => (
              <tr key={txn.id} className="hover:bg-gray-50">
                <td className="p-3 text-sm">{txn.id}</td>
                <td className="p-3 text-sm">{txn.amount}</td>
                <td className="p-3 text-sm">{txn.date}</td>
                <td className="p-3 text-sm">{txn.tid}</td>
                <td className="p-3 text-xs flex items-center gap-2">
                  <span className={`px-3 rounded-full bg-gray-100 flex items-center gap-2`}>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        txn.status === "Paid"
                          ? "bg-green-400"
                          : txn.status === "Failed"
                          ? "bg-red-400"
                          : "bg-yellow-400"
                      }`}
                    ></div>
                    {txn.status}
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
