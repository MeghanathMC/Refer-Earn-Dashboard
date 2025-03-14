import { useState } from "react";

type Referral = {
  id: string;
  name: string;
  email: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending" | "Unpaid";
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
    status: "Paid"
  },
  { 
    id: "TRN24003", 
    name: "Priya Patel", 
    email: "priyapatel99@gmail.com", 
    date: "21/10/2024",
    amount: 12000,
    status: "Paid"
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
    status: "Unpaid"
  },
  { 
    id: "TRN24007", 
    name: "Karthik Menon", 
    email: "karthik.menon21@gmail.com", 
    date: "24/10/2024",
    amount: 16000,
    status: "Unpaid"
  }
];

const ReferDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [referralsData, setReferralsData] = useState(initialReferralsData);

  // Filter counts
  const filterCounts = {
    All: referralsData.length,
    Paid: referralsData.filter(r => r.status === "Paid").length,
    Unpaid: referralsData.filter(r => r.status === "Unpaid").length,
    Pending: referralsData.filter(r => r.status === "Pending").length,
  };

  // Handle search
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = initialReferralsData.filter(referral => 
      referral.name.toLowerCase().includes(term.toLowerCase()) &&
      (activeFilter === "All" || referral.status === activeFilter)
    );
    setReferralsData(filtered);
  };

  // Handle filter
  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    const filtered = initialReferralsData.filter(referral =>
      (filter === "All" || referral.status === filter) &&
      referral.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setReferralsData(filtered);
  };

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

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap items-center gap-2">
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
            onClick={() => handleFilter("Unpaid")}
            className={`px-4 py-2 text-sm rounded-full transition-all ${
              activeFilter === "Unpaid" ? "bg-red-100 text-red-600" : "text-gray-500"
            }`}
          >
            Unpaid <span className="ml-1 text-xs bg-gray-100 px-2 py-0.5 rounded-full">{filterCounts.Unpaid}</span>
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
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search by friend's name..."
            className="w-full md:w-64 px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <i className="fi fi-rr-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
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
                    referral.status === "Paid" ? "bg-green-100 text-green-600" :
                    referral.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
                    "bg-red-100 text-red-600"
                  }`}>
                    <span className="flex items-center justify-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        referral.status === "Paid" ? "bg-green-500" :
                        referral.status === "Pending" ? "bg-yellow-500" :
                        "bg-red-500"
                      }`}></span>
                  {referral.status}
                    </span>
                  </span>
                </td>
                <td className="px-3 py-1.5 text-center">
                  <button className="text-gray-400 hover:text-gray-600">
                    <i className="fi fi-rr-menu-dots-vertical"></i>
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
