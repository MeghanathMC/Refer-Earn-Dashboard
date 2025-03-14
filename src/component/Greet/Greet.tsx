import { useState } from "react";
import Info from "../InfoTile/Info";
import { PaymentModal } from "../PaymentModal/PaymentModal";

function Greet(props: { setOpen: () => void }) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const remainingAmount = "₹28,999";

  const handlePayClick = () => {
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="w-full px-6 py-5 flex gap-8 flex-col"
      style={{ fontFamily: "Outfit, sans-serif" }}>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <h1 className="text-4xl font-medium relative">
            Welcome Harshith!
            <span className="absolute -right-12 -top-1 text-4xl" role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
        </div>
        
        <button 
          onClick={handlePayClick}
          className="bg-gradient-to-l from-red-300 to-red-100  text-black flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-base cursor-pointer hover:bg-[#1a4d8c] transition-all"
        >
          <i className="fi fi-rr-indian-rupee-sign"></i>
          <span>Pay Amount</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <Info title="Remaining Amount" value={remainingAmount} type="red" />
        <Info title="Days Left" value="15 Days" type="blue" />
        <Info title="Referral Earnings" value="₹5,000" type="green" />
        <Info title="Successful Referrals" value="5" type="green" />
      </div>

      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        amount={remainingAmount}
      />
    </div>
  );
}

export default Greet;
