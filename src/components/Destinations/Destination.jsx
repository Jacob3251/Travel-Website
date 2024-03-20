import { LuCalendarDays } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";

function Destination({ data }) {
  const location = useLocation();
  const [showBtn, setShowBtn] = useState(false);
  useEffect(() => {
    if (location.pathname === "/tour-packages") {
      setShowBtn(true);
    }
  }, [location.pathname, showBtn]);
  return (
    <div className="h-full w-full">
      {/* img part */}
      <div className="h-[404px] w-full rounded-[24px]">
        <img className="w-full h-full " src={data.imglink} alt="" />
      </div>
      <div className="mt-[16px]">
        <h1 className="text-[24px] text-left font-bold mb-[12px]">
          {data.title}
        </h1>
        <h2 className="text-[18px] text-left mb-[12px]">
          from{" "}
          <span className="text-[24px] text-btnPrimary font-extrabold">
            {data.price} €
          </span>
        </h2>
        <div className="mb-[12px] flex justify-between items-center text-[16px] font-semibold text-btnPrimary">
          <div className="flex items-center space-x-[6px]">
            <LuCalendarDays /> <h1>{data.day}</h1>
          </div>

          <div className="flex items-center space-x-[6px]">
            <FaUsers />
            <h1>{data.people} PP</h1>
          </div>
        </div>
        <p className="pb-5 text-left">{data.detail}</p>
        {showBtn && (
          <button className="flex justify-center items-center text-btnPrimary text-[18px] font-semibold">
            <span className="mr-2">Read More </span>
            <BsArrowRight />
          </button>
        )}
      </div>
    </div>
  );
}

export default Destination;
