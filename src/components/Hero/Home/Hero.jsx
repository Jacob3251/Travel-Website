import heroImg1 from "../../../assets/images/Hero Images/1.png";
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { PiUsersThree } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";
import { IoCarSharp } from "react-icons/io5";
function Hero() {
  return (
    <div className="max-w-[1440px] min-h-screen xl:min-h-[765px] w-full mx-auto relative flex justify-center items-center ">
      <img
        className="mx-auto h-[100%] w-[100%] object-cover xl:object-fill absolute top-0 -z-10"
        src={heroImg1}
        alt=""
      />
      <div className="text-white text-center p-5 flex md:space-x-[50px] xl:space-x-10 flex-col md:flex-row xl:flex-col justify-center xl:items-center">
        {/* hero heading */}
        <div className="w-full xl:mb-[60px] pt-20 pb-10 md:pt-0 md:pb-0 md:mt-[120px] xl:mt-0">
          <h1 className="podcast text-[46px] md:text-[72px] ">
            Enjoy in the best way!
          </h1>
          <h4 className="text-[24px] font-bold">
            Enjoy our services for your trip anytime
          </h4>
        </div>
        {/* hero search */}
        <div className="min-h-[208px] max-w-[1383px] flex flex-col justify-start items-start h-auto w-full p-[20px] rounded-[12px] bg-white bg-opacity-20 ">
          {/* tab selector */}
          <div className="flex font-semibold ">
            <div className="bg-white rounded-tl-[12px] p-[16px] flex justify-center items-center text-[18px]  text-btnPrimary">
              <LiaGlobeAmericasSolid className="mr-[0px] xl:mr-[16px]  text-[38px] xl:text-[24px]" />
              Public Tours
            </div>
            <div className="bg-white bg-opacity-40 rounded-tr-[12px] p-[16px] flex justify-center items-center text-[18px]  text-white">
              <PiUsersThree className="mr-[0px] xl:mr-[16px]  text-[38px] xl:text-[24px]" />
              Private Tours
            </div>
          </div>
          {/* tabcontent */}
          <div className="bg-white w-full flex flex-col xl:flex-row xl:justify-between rounded-b-[12px] rounded-tr-[12px] p-[12px]">
            <div className="text-black p-[16px] mr-[10px] flex flex-col justify-center items-center ">
              <div className="flex w-full text-[18px] ">
                <PiUsersThree className="mr-[7px] text-[24px]" />
                <h1 className="font-medium tracking-wide text-[18px] text-[#333333]">
                  Number of people
                </h1>
              </div>
              <div className="flex w-full justify-end mt-2  items-center space-x-2">
                <h1 className=" text-[18px] text-left  ">Choose Number</h1>
                <IoIosArrowDown className=" text-[20px]" />
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="w-[2px] max-h-[50px] h-full bg-black bg-opacity-20"></div>
            </div>
            <div className="text-black p-[16px] mx-[10px] flex flex-col justify-center items-center ">
              <div className="flex w-full text-[18px] ">
                <MdOutlineDateRange className="mr-[7px] text-[24px]" />
                <h1 className="font-medium text-[18px] tracking-wide text-[#333333]">
                  Date
                </h1>
              </div>
              <div className="flex w-full justify-end mt-2  items-center space-x-2">
                <h1 className=" text-[18px] text-left  ">Choose Date</h1>
                <IoIosArrowDown className=" text-[20px]" />
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="w-[2px] max-h-[50px] h-full bg-black bg-opacity-20"></div>
            </div>
            <div className="text-black p-[16px] mx-[10px] flex flex-col justify-center items-center ">
              <div className="flex w-full text-[18px] ">
                <MdOutlineWatchLater className="mr-[7px] text-[24px]" />
                <h1 className="font-medium text-[18px] text-[#333333] tracking-wide">
                  Time
                </h1>
              </div>
              <div className="flex w-full justify-end mt-2  items-center space-x-2">
                <h1 className=" text-[18px] text-left  ">Choose Time</h1>
                <IoIosArrowDown className=" text-[20px]" />
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="w-[2px] max-h-[50px] h-full bg-black bg-opacity-20"></div>
            </div>
            <div className="text-black p-[16px] mx-[10px] flex flex-col justify-center items-center ">
              <div className="flex w-full text-[18px] ">
                <CiFlag1 className="mr-[7px] text-[24px]" />
                <h1 className="font-medium tracking-wide text-[18px] text-[#333333]">
                  Tour
                </h1>
              </div>
              <div className="flex w-full justify-end mt-2  items-center space-x-2">
                <h1 className=" text-[18px] text-left  ">Select Tour</h1>
                <IoIosArrowDown className=" text-[20px]" />
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="w-[2px] max-h-[50px] h-full bg-black bg-opacity-20"></div>
            </div>
            <div className="text-black p-[16px] mx-[10px] flex flex-col justify-center items-center ">
              <div className="flex w-full text-[18px] ">
                <IoCarSharp className="mr-[7px] text-[24px]" />
                <h1 className="font-medium tracking-wide text-[18px] text-[#333333]">
                  Transportation
                </h1>
              </div>
              <div className="flex w-full justify-end mt-2  items-center space-x-2">
                <h1 className=" text-[18px] text-left  ">
                  Select Transportation
                </h1>
                <IoIosArrowDown className=" text-[20px]" />
              </div>
            </div>

            {/* search btn */}
            <button className="bg-btnPrimary p-5 rounded-lg">
              <IoSearchOutline className="text-[46px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
