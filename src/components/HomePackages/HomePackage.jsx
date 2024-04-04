import { LuCalendarDays } from "react-icons/lu";
import { TbChartTreemap } from "react-icons/tb";
import { RiCoupon2Line } from "react-icons/ri";
import { PiHeadsetLight } from "react-icons/pi";
import { GiMountainRoad } from "react-icons/gi";
import { FaPersonMilitaryPointing } from "react-icons/fa6";
import { GiWaterFlask } from "react-icons/gi";
import { LuTicket } from "react-icons/lu";
import { IoBusOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { FaUserNurse } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";
function HomePackage({ item }) {
  return (
    <div className="cursor-pointer rounded-[24px] overflow-hidden border-2 border-slate-100 border-opacity-50 hover:drop-shadow-sm hover:scale-105 duration-300 flex flex-col max-w-screen  md:max-w-[330px] w-full m-5 lg:m-8 xl:m-3">
      <div className="w-full mb-[20px]">
        <img className="w-full" src={item.imgLink} alt="" />
      </div>
      <div className="text-[#333333] p-[25px]">
        <h1 className="text-[20px] mb-[16px] md:h-[60px] font-extrabold uppercase ">
          {item.title}
        </h1>
        <div className="text-[48px] my-[16px] relative h-[60px] w-[113px] text-[#333333]">
          <h4 className="text-[20px] absolute top-0 left-0">€</h4>
          <h3 className="text-[48px] text-btnPrimary font-bold absolute left-4 top-[50%] -translate-y-[50%] ">
            {item.price}
          </h3>
          <h4 className="text-[20px] absolute bottom-0 right-0">/day</h4>
        </div>
        <div className="my-[16px] space-y-[16px]">
          <div className="flex justify-start items-center text-[18px] space-x-[10px] ">
            {item.id === 1 && <LuCalendarDays className="text-btnPrimary" />}
            {item.id === 2 && <GiMountainRoad className="text-btnPrimary" />}
            {item.id === 3 && <LuTicket className="text-btnPrimary" />}
            {item.id === 4 && <FaUserNurse className="text-btnPrimary" />}
            <h4>{item.detail[0]}</h4>
          </div>
          <div className="flex justify-start items-center text-[18px] space-x-[10px] ">
            {item.id === 1 && <TbChartTreemap className="text-btnPrimary" />}
            {item.id === 2 && (
              <FaPersonMilitaryPointing className="text-btnPrimary" />
            )}
            {item.id === 3 && <IoBusOutline className="text-btnPrimary" />}
            {item.id === 4 && <IoLocationOutline className="text-btnPrimary" />}
            <h4>{item.detail[1]}</h4>
          </div>
          <div className="flex justify-start items-center text-[18px] space-x-[10px] ">
            {item.id === 1 && <RiCoupon2Line className="text-btnPrimary" />}
            {item.id === 2 && <GiWaterFlask className="text-btnPrimary" />}
            {item.id === 3 && <LuUsers className="text-btnPrimary" />}
            {item.id === 4 && <SlLike className="text-btnPrimary" />}
            <h4>{item.detail[2]}</h4>
          </div>
          <div className="flex justify-start items-center text-[18px] space-x-[10px] ">
            <PiHeadsetLight className="text-btnPrimary" />

            <h4>{item.detail[3]}</h4>
          </div>
        </div>
        <div className="rounded-[50px] py-2 text-[20px] font-semibold mt-[30px] cursor-pointer text-btnPrimary flex justify-center items-center w-full border-2 border-btnPrimary">
          Book Now
        </div>
      </div>
    </div>
  );
}

export default HomePackage;
