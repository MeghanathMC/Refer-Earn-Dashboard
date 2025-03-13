// import { useState } from "react";

type Referral = {
  id: number;
  friendName: string;
  course: string;
  status: "Pending" | "Accepted" | "Rejected";
  date: string;
};

const referralsData: Referral[] = [
  { id: 1, friendName: "John Doe", course: "React Basics", status: "Accepted", date: "June 12-14, 2024" },
  { id: 2, friendName: "Jane Smith", course: "Full Stack Dev", status: "Pending", date: "June 11-14, 2024" },
  { id: 3, friendName: "Alice Brown", course: "UI/UX Design", status: "Rejected", date: "June 13, 2024" },
  { id: 4, friendName: "Mike Ross", course: "Cyber Security", status: "Accepted", date: "June 6-7, 2024" }
];

const ReferDetails = () => {

  return (
    <div className="w-full max-w-5xl px-5">
      <div className="flex justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">Referral History</h2>
          <p className="text-gray-500 text-sm">See your referral tracking history</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left text-sm">
              <th className="p-3">Friend's Name</th>
              <th className="p-3">Course</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {referralsData.map((referral) => (
              <tr key={referral.id} className="hover:bg-gray-50">
                <td className="p-3 text-sm">{referral.friendName}</td>
                <td className="p-3 text-sm">{referral.course}</td>
                <td className="p-3 text-sm">{referral.date}</td>
                <td className="p-3 text-xs flex items-center gap-2">
                  <span className="px-3 rounded-full bg-gray-100 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      referral.status === "Accepted" ? "bg-green-400" :
                      referral.status === "Rejected" ? "bg-red-400" :
                      "bg-yellow-400"
                    }`}
                  ></span>
                  {referral.status}
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

export default ReferDetails;
