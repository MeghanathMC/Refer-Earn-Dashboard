import Lottie from "lottie-react";
import Info from "../InfoTile/Info";
import wave from "../../assets/Lottie/wave.json";

function Greet(props: { setOpen: () => void }) {
  return (
    <div
      className="w-full pt-5 px-5 flex gap-10 flex-col"
      style={{ fontFamily: "Outfit, sans-serif" }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-start">
          <h1 className="text-4xl font-medium">Welcome Harshith!</h1>
          <div className="w-16 flex items-center justify-center">
            <Lottie animationData={wave} loop={true} />
          </div>
        </div>
        <div>
          <button className="bg-[#2160ad] text-white flex items-center justify-center gap-3 px-3 py-2 rounded-2xl text-base cursor-pointer hover:bg-[#e8cfff] transition-all" onClick={props.setOpen}>
          <i className="fi fi-rr-indian-rupee-sign flex items-center justify-center"></i>
            <span>Refer and Earn</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-5 w-full max-w-md">
        <Info title="Remaining amount" value="28,999rs" type="red" />
        <Info title="Days left" value="15 days" type="blue" />
        <Info title="Referral Earnings" value="5000rs" type="green" />
        <Info title="Successful Referrals" value="5" type="green" />
      </div>
    </div>
  );
}

export default Greet;
