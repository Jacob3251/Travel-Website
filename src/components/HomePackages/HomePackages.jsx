import { LuCalendarDays } from "react-icons/lu";
import { TbChartTreemap } from "react-icons/tb";
import { RiCoupon2Line } from "react-icons/ri";
import { PiHeadsetLight } from "react-icons/pi";
import image1 from "../../assets/images/HomePackages/1.png";
import image2 from "../../assets/images/HomePackages/2.png";
import image3 from "../../assets/images/HomePackages/3.png";
import image4 from "../../assets/images/HomePackages/4.png";

const data = [
  {
    id: 1,
    title: "Bike and rickshaw rental",
    detail: "Book your quality vehicle quickly for an hour or all day!",
    imgLink: image1,
  },
  {
    id: 2,
    title: "Guided tour of the countryside",
    detail:
      "Live the real Lucchese experience by visiting the suburbs by bike!",
    imgLink: image2,
  },
  {
    id: 3,
    title: "Taxi and NCC service",
    detail:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
    imgLink: image3,
  },
  {
    id: 4,
    title: "Bus Package",
    detail:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
    imgLink: image4,
  },
];
function HomePackages() {
  return (
    <div className="mb-[150px] xl:px-[10px]">
      <h1 className="mb-[60px] text-[32px] font-extrabold px-[50px] ">
        The Most Popular Packages
      </h1>
      <div className=" flex flex-wrap justify-center items-start">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-[24px] overflow-hidden border-2 border-slate-100 border-opacity-50 hover:drop-shadow-sm hover:scale-105 duration-300 flex flex-col max-w-screen  md:max-w-[330px] w-full m-5 lg:m-8 xl:m-3"
          >
            <div className="w-full mb-[20px]">
              <img className="w-full" src={item.imgLink} alt="" />
            </div>
            <div className="text-[#333333] p-[25px]">
              <h1 className="text-[20px] mb-[16px] font-extrabold uppercase ">
                Bike/ Rickshaw
              </h1>
              <div className="text-[48px] my-[16px] relative h-[60px] w-[113px] text-[#333333]">
                <h4 className="text-[20px] absolute top-0 left-0">€</h4>
                <h3 className="text-[48px] text-btnPrimary font-bold absolute left-4 top-[50%] -translate-y-[50%] ">
                  10
                </h3>
                <h4 className="text-[20px] absolute bottom-0 right-0">/day</h4>
              </div>
              <div className="my-[16px] space-y-[16px]">
                <div className="flex justify-start items-center text-[18px] space-x-[10px] ">
                  <LuCalendarDays className="text-btnPrimary" />
                  <h4>Your bike for a day</h4>
                </div>
                <div className="flex justify-start items-center text-[18px] space-x-[10px] ">
                  <TbChartTreemap className="text-btnPrimary" />
                  <h4>City App</h4>
                </div>
                <div className="flex justify-start items-center text-[18px] space-x-[10px] ">
                  <RiCoupon2Line className="text-btnPrimary" />
                  <h4>Discount on Rickshaw</h4>
                </div>
                <div className="flex justify-start items-center text-[18px] space-x-[10px] ">
                  <PiHeadsetLight className="text-btnPrimary" />
                  <h4>Guaranteed Support</h4>
                </div>
              </div>
              <div className="rounded-[50px] py-2 text-[20px] font-semibold mt-[30px] cursor-pointer text-btnPrimary flex justify-center items-center w-full border-2 border-btnPrimary">
                Book Now
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePackages;
