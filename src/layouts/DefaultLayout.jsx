import { IoIosArrowDown } from "react-icons/io";
import navLogo from "../assets/images/Navbar/logo.png";
import { useState } from "react";

function DefaultLayout({ children }) {
  const active = "border-b-2 border-btnPrimary";
  const [activeNav, setActiveNav] = useState("home");
  const handleNav = (selectedNav) => {
    setActiveNav(selectedNav);
  };
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="fixed z-50 xl:px-[120px]  h-[120px] bg-white bg-opacity-20 w-full max-w-[1440px] flex justify-between items-center">
        <div className="w-1/3">
          <div className="w-[65px] h-[65px]">
            <img src={navLogo} className="h-full w-full" alt="" />
          </div>
        </div>
        {/* navOptions */}
        <div className="flex w-full justify-between items-center">
          <div className=" text-white text-[20px] font-semibold">
            <ul className="flex space-x-[40px]">
              <div onClick={() => handleNav("home")}>
                <div className={`group  overflow-hidden relative   z-10`}>
                  <li className="px-2 py-2">Home</li>
                  <div
                    className={`w-full h-[5px]  bottom-0 z-20  absolute bg-btnPrimary  ${
                      activeNav === "home"
                        ? "group-hover:-translate-x-0 duration-300"
                        : "-translate-x-[100%] group-hover:-translate-x-0 duration-500 "
                    }`}
                  ></div>
                </div>
              </div>
              <div onClick={() => handleNav("about")}>
                <div className={`group  overflow-hidden relative   z-10`}>
                  <li className="px-2 py-2">About Us</li>
                  <div
                    className={`w-full h-[5px]  bottom-0 z-20  absolute bg-btnPrimary  ${
                      activeNav === "about"
                        ? "group-hover:-translate-x-0 duration-300"
                        : "-translate-x-[100%] group-hover:-translate-x-0 duration-300 "
                    }`}
                  ></div>
                </div>
              </div>
              <div onClick={() => handleNav("packages")}>
                <div className={`group  overflow-hidden relative   z-10`}>
                  <li className="px-2 py-2">Tour Packages</li>
                  <div
                    className={`w-full h-[5px]  bottom-0 z-20  absolute bg-btnPrimary  ${
                      activeNav === "packages"
                        ? "group-hover:-translate-x-0 duration-300"
                        : "-translate-x-[100%] group-hover:-translate-x-0 duration-300 "
                    }`}
                  ></div>
                </div>
              </div>
              <div onClick={() => handleNav("contact")}>
                <div className={`group  overflow-hidden relative   z-10`}>
                  <li className="px-2 py-2">Contact Us</li>
                  <div
                    className={`w-full h-[5px]  bottom-0 z-20  absolute bg-btnPrimary  ${
                      activeNav === "contact"
                        ? "group-hover:-translate-x-0 duration-300"
                        : "-translate-x-[100%] group-hover:-translate-x-0 duration-300 "
                    }`}
                  ></div>
                </div>
              </div>
            </ul>
          </div>
          <div>
            <ul className="flex items-center text-white space-x-4 text-[20px] font-semibold">
              <li className="flex items-center justify-center space-x-2">
                <div>Eng</div>
                <IoIosArrowDown className="text-[18px]" />
              </li>
              <li>Login</li>
              <li className="bg-btnPrimary py-[10px] px-[24px] rounded-[50px]">
                Sign Up
              </li>
            </ul>
          </div>
        </div>
      </div>
      {children}
      <div>footer</div>
    </div>
  );
}

export default DefaultLayout;
