import { useState } from "react";
import Greet from "../component/Greet/Greet";
// import Navbar from "../component/Navbar/Navbar";
import ReferForm from "../component/ReferPopup/ReferForm";
import Sidebar from "../component/Sidebar/Sidebar";
import ReferDetails from "../component/ReferDetails/ReferDetails";
import PaymentDetails from "../component/PaymentHistory/PaymentDetails";
import SuccessModal from "../component/SuccessModal/SuccessModal";
import ReferralScreen from "@/component/ReferralScreen";

function Home() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const setOpenState = () => {
    setOpen(!open);
  };

  const setSuccessState = () => {
    setSuccess(!success);
  };
  return (
    <>
      <Sidebar />
      <div className="w-full min-h-screen relative backdrop-blur-3xl pb-20 ml-20">
        <div className="min-h-screen">
          {/* <Navbar /> */}
          <div className="flex">
          <div className="flex flex-col gap-10">
            <Greet setOpen={setOpenState} />
            <ReferDetails />
            <PaymentDetails />
          </div>
          <ReferralScreen/>
          </div>
         
          <ReferForm
            open={open}
            setOpen={setOpenState}
            setSuccess={setSuccessState}
          />
         
        </div>
        {success && <SuccessModal success={success} setSuccess={setSuccessState}/>}
      </div>
    </>
  );
}

export default Home;
