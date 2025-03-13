import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const pathname = useLocation();
  const navigate = useNavigate();

  return (
    <motion.div
      className={`h-screen fixed z-50 top-0 left-0 py-8 px-5 flex flex-col justify-between transition-all duration-300 bg-white`}
    >
      <div>
        <img src={logo} alt="Logo" className="w-10" />
      </div>
      <div className="w-full">
        <ul className="flex flex-col items-start gap-5 ">
          {[
            { icon: "fi fi-ss-house-chimney", path: "/" },
            { icon: "fi fi-ss-book-open-cover", path: "/learn" },
            {
              icon: "fi fi-ss-briefcase",
              path: "/jobs",
            },
            { icon: "fi fi-sr-web-test", path: "/test" },
            { icon: "fi fi-ss-bookmark", path: "/bookmark" },
            { icon: "fi fi-sr-user", path: "/profile" }
          ].map(({ icon, path }, index) => (
            <li key={index} className="w-full">
              <button
                className={`w-full flex justify-center items-center ${
                  path  === pathname.pathname
                    ? "bg-black text-white"
                    : "bg-white"
                } p-4 rounded-full cursor-pointer`}
                onClick={() => navigate(path)}
              >
                <span>
                  <i
                    className={`${icon} flex items-center justify-center text-base`}
                  ></i>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`flex items-center justify-center bg-red-200 p-3 rounded-full`}
      >
        <span>
          <i className="fi fi-ss-power text-xl flex items-center justify-center"></i>
        </span>
      </button>
    </motion.div>
  );
}

export default Sidebar;
