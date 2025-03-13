import Lottie from "lottie-react";
import Info from "../InfoTile/Info";
import wave from "../../assets/Lottie/wave.json";

function Greet(props: { setOpen: () => void }) {
  return (
    <div className="w-full px-6 py-5 flex gap-8 flex-col"
      style={{ fontFamily: "Outfit, sans-serif" }}>
      
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <h1 className="text-4xl font-medium relative">
            Welcome Harshith!
            <div className="absolute -right-16 -top-2">
              <Lottie animationData={wave} loop={true} style={{ width: "64px", height: "64px" }} />
            </div>
          </h1>
        </div>
        
        <button 
          onClick={props.setOpen}
          className="bg-[#2160ad] text-white flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-base cursor-pointer hover:bg-[#1a4d8c] transition-all"
        >
          <i className="fi fi-rr-indian-rupee-sign"></i>
          <span>Refer & Earn</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <Info title="Remaining Amount" value="₹28,999" type="red" />
        <Info title="Days Left" value="15 Days" type="blue" />
        <Info title="Referral Earnings" value="₹5,000" type="green" />
        <Info title="Successful Referrals" value="5" type="green" />
      </div>
    </div>
  );
}

export default Greet;
