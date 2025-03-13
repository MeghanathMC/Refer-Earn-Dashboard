// import Lottie from "lottie-react";
// import coin from "../../assets/Lottie/coin.json";

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center py-4 px-5">
      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center justify-center">
          <div className="w-10">
            {/* <Lottie animationData={coin} loop={true} /> */}
          </div>
          {/* <span>23</span> */}
        </div>
        {/* <div>
          <button className="flex items-center justify-center gap-3 font-main">
            <span>User</span>
            <i className="fi fi-rr-circle-user flex items-center justify-center text-4xl"></i>
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
