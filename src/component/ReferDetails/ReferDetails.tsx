import { useState } from "react";

type Referral = {
  id: string;
  name: string;
  email: string;
  date: string;
  amount: number;
  status: "Registered" | "Pending" | "Rejected";
};

// Helper function to format date
const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', { 
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '/');
};

const initialReferralsData: Referral[] = [
  { 
    id: "TRN24002", 
    name: "Rahul Sharma", 
    email: "rahul.sharma234@gmail.com", 
    date: "20/10/2024",
    amount: 15000,
    status: "Registered"
  },
  { 
    id: "TRN24003", 
    name: "Priya Patel", 
    email: "priyapatel99@gmail.com", 
    date: "21/10/2024",
    amount: 12000,
    status: "Registered"
  },
  { 
    id: "TRN24005", 
    name: "Amit Kumar", 
    email: "amitkumar.work@gmail.com", 
    date: "22/10/2024",
    amount: 18000,
    status: "Pending"
  },
  { 
    id: "TRN24006", 
    name: "Sneha Reddy", 
    email: "sneha.reddy45@gmail.com", 
    date: "23/10/2024",
    amount: 20000,
    status: "Rejected"
  },
  { 
    id: "TRN24007", 
    name: "Karthik Menon", 
    email: "karthik.menon21@gmail.com", 
    date: "24/10/2024",
    amount: 16000,
    status: "Rejected"
  }
];

const ReferDetails = () => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [referralsData, setReferralsData] = useState(initialReferralsData);

  // Handle date sort
  const handleDateSort = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    const sorted = [...referralsData].sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split('/');
      const [dayB, monthB, yearB] = b.date.split('/');
      const dateA = new Date(parseInt(yearA), parseInt(monthA) - 1, parseInt(dayA));
      const dateB = new Date(parseInt(yearB), parseInt(monthB) - 1, parseInt(dayB));
      return newOrder === "asc" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
    setReferralsData(sorted);
  };

  return (
    <div className="w-full px-4 md:px-6 py-4 bg-white rounded-lg shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Referral History</h2>
        <p className="text-gray-500 text-sm mt-1">Track and manage all your referral transactions here</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm border-b">
              <th className="px-4 py-2 font-medium text-gray-600 text-center">Number</th>
              <th className="px-4 py-2 font-medium text-gray-600 text-center">Friend</th>
              <th className="px-4 py-2 font-medium text-gray-600 text-center">Email</th>
              <th className="px-4 py-2 font-medium text-gray-600 text-center cursor-pointer" onClick={handleDateSort}>
                Date {sortOrder === "asc" ? "↑" : "↓"}
              </th>
              <th className="px-4 py-2 font-medium text-gray-600 text-center">Amount</th>
              <th className="px-4 py-2 font-medium text-gray-600 text-center">Status</th>
              <th className="px-4 py-2 font-medium text-gray-600"></th>
            </tr>
          </thead>
          <tbody>
            {referralsData.map((referral) => (
              <tr key={referral.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-1.5 text-sm text-center">{referral.id}</td>
                <td className="px-4 py-1.5 text-sm font-medium text-center">{referral.name}</td>
                <td className="px-4 py-1.5 text-sm text-gray-600 text-center">{referral.email}</td>
                <td className="px-4 py-1.5 text-sm text-center">{referral.date}</td>
                <td className="px-4 py-1.5 text-sm text-center">₹{referral.amount.toLocaleString('en-IN')}</td>
                <td className="px-4 py-1.5 text-center">
                  <span className={`inline-flex items-center px-2 py-0.5 text-sm rounded-full ${
                    referral.status === "Registered" ? "bg-green-100 text-green-600" :
                    referral.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
                    "bg-red-100 text-red-600"
                  }`}>
                    <span className="flex items-center justify-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        referral.status === "Registered" ? "bg-green-500" :
                        referral.status === "Pending" ? "bg-yellow-500" :
                        "bg-red-500"
                      }`}></span>
                      {referral.status}
                    </span>
                  </span>
                </td>
                <td className="px-3 py-1.5 text-center">
                  <button className="text-gray-400 hover:text-gray-600">
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReferDetails;
