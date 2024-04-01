import { IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";
import navLogo from "../../assets/images/Navbar/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // const active = "border-b-2 border-btnPrimary";
  const [activeNav, setActiveNav] = useState("");
  const [hovered, setHovered] = useState(false);
  const handleNav = (selectedNav) => {
    setActiveNav(selectedNav);
  };
  const [openMini, setOpenMini] = useState(false);

  const location = useLocation();
  // if (location.pathname === "/") {
  //   setActiveNav("home");
  // } else if (location.pathname === "/about-us") {
  //   setActiveNav("about-us");
  // }
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveNav("home");
    }
    if (location.pathname === "/about-us") {
      setActiveNav("about-us");
      console.log(activeNav);
    }
    if (location.pathname === "/tour-packages") {
      setActiveNav("tour-packages");
      console.log(activeNav);
    }
    if (location.pathname === "/contact-us") {
      setActiveNav("contact-us");
      console.log(activeNav);
    }
  }, [location, activeNav]);
  return (
    <div className="">
      {/* mobile navbar */}

      <div className="flex xl:hidden">
        <div
          className={`fixed flex justify-between top-0 h-[80px] w-full bg-[#333333] z-50 p-5 ${
            openMini ? "drop-shadow-none" : " drop-shadow-md"
          }`}
        >
          <div className="h-full flex items-center">
            <img className="h-full" src={navLogo} alt="" />
            <span className="text-btnPrimary uppercase font-extrabold text-[20px] md:text-[24px]">
              Tours to Tuscany
            </span>
          </div>
          <div
            className="text-btnPrimary text-[38px]"
            onClick={() => {
              setOpenMini(!openMini);
            }}
          >
            {openMini ? <MdClose /> : <CiMenuFries />}
          </div>
        </div>
        <div
          className={`fixed ${
            !openMini ? "-translate-y-[100%]" : "translate-y-0"
          } duration-500 h-auto top-[80px] bg-[#333333] bg-opacity-95  w-full flex flex-col  justify-center items-center    text-[18px] px-5 md:px-10 md:text-[24px]  z-40`}
        >
          <div className="w-full space-y-3 flex  justify-center items-center flex-col">
            <div className="text-white drop-shadow-md  px-5 rounded-md text-center inline-block  font-bold  py-3">
              Home
            </div>
            <div className="text-white drop-shadow-md  px-5 rounded-md text-center inline-block  font-bold  py-3">
              About Us
            </div>
            <div className="text-white drop-shadow-md  px-5 rounded-md text-center inline-block  font-bold  py-3">
              Tour Packages
            </div>
            <div className="text-white drop-shadow-md  px-5 rounded-md text-center inline-block  font-bold  py-3">
              Contact Us
            </div>
          </div>
          <div className="w-full space-y-3 mt-5 flex flex-col justify-center items-center pb-8">
            <div className="text-white drop-shadow-md  px-5 rounded-md text-center inline-block  font-bold  py-3">
              Login
            </div>
            <div className="text-white bg-btnPrimary drop-shadow-md  px-5 rounded-xl text-center inline-block  font-bold  py-3">
              Signup
            </div>
          </div>
        </div>
      </div>
      {/* web navbar */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`hidden z-50 xl:px-[120px] bg-[#333333]  h-[120px] duration-300 w-full max-w-[1440px] xl:flex justify-between items-center`}
      >
        <div className="w-1/3">
          <div className="w-[65px] h-[65px]">
            <img src={navLogo} className="h-full w-full" alt="" />
          </div>
        </div>
        {/* navOptions */}
        <div className="flex w-full justify-between items-center">
          <div className={`text-white  text-[20px] font-semibold`}>
            <ul className="flex space-x-[10px] 2xl:space-x-[40px]">
              <div>
                <div className={`group  overflow-hidden relative   z-10`}>
                  <Link to="/">
                    <li className="px-2 py-2">Home</li>
                  </Link>
                  <div
                    className={`w-full h-[5px]  bottom-0 z-20  absolute bg-btnPrimary  ${
                      activeNav === "home"
                        ? "group-hover:-translate-x-0 duration-300"
                        : "-translate-x-[101%] group-hover:-translate-x-0 duration-500 "
                    }`}
                  ></div>
                </div>
              </div>
              <div>
                <div className={`group  overflow-hidden relative   z-10`}>
                  <Link to="/about-us">
                    <li className="px-2 py-2">About Us</li>
                  </Link>
                  <div
                    className={`w-full h-[5px]  bottom-0 z-20  absolute bg-btnPrimary  ${
                      activeNav === "about-us"
                        ? "group-hover:-translate-x-0 duration-300"
                        : "-translate-x-[101%] group-hover:-translate-x-0 duration-300 "
                    }`}
                  ></div>
                </div>
              </div>
              <div>
                <div className={`group  overflow-hidden relative   z-10`}>
                  <Link to="/tour-packages">
                    <li className="px-2 py-2">Tour Packages</li>
                  </Link>
                  <div
                    className={`w-full h-[5px]  bottom-0 z-20  absolute bg-btnPrimary  ${
                      activeNav === "tour-packages"
                        ? "group-hover:-translate-x-0 duration-300"
                        : "-translate-x-[101%] group-hover:-translate-x-0 duration-300 "
                    }`}
                  ></div>
                </div>
              </div>
              <div>
                <div className={`group  overflow-hidden relative   z-10`}>
                  <Link to="/contact-us">
                    <li className="px-2 py-2">Contact Us</li>
                  </Link>
                  <div
                    className={`w-full h-[5px]  bottom-0 z-20  absolute bg-btnPrimary  ${
                      activeNav === "contact-us"
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
              <a href="#">
                <li className="flex items-center justify-center space-x-2">
                  <div className={`text-white`}>Eng</div>
                  <IoIosArrowDown
                    className={`${
                      hovered ? "text-btnPrimary" : "text-white"
                    } text-[18px]`}
                  />
                </li>
              </a>
              <a href="#">
                <li className={`text-white`}>Login</li>
              </a>
              <a href="#">
                <li className="bg-btnPrimary py-[10px] px-[24px] rounded-[50px]">
                  Sign Up
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
