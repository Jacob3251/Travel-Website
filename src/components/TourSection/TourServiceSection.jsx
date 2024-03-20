import image1 from "../../assets/images/ServicesDetailHome/1.png";
import image2 from "../../assets/images/ServicesDetailHome/2.png";
import image3 from "../../assets/images/ServicesDetailHome/3.png";
import image4 from "../../assets/images/ServicesDetailHome/4.png";
import { BsArrowRight } from "react-icons/bs";
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
];

function TourServiceSection() {
  return (
    <div className="w-full pb-10">
      <h1 className="text-[32px] font-extrabold px-[20px]   py-14 md:px-[40px]">
        Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-x-[20px] px-5">
        {data.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col sm:min-w-[280px] md:min-w-[320px]  w-full  
          "
          >
            <div className="w-full mb-[20px]">
              <img className="w-full" src={item.imgLink} alt="" />
            </div>
            <div className="text-[#333333]">
              <h1 className="text-[24px] font-bold mb-[12px]">{item.title}</h1>
              <h3 className="text-[18px] leading-[26px] font-normal mb-[26px]">
                {item.title}
              </h3>
            </div>
            <div className="flex justify-start items-center text-btnPrimary text-[18px] font-semibold  ">
              <button className="flex items-center py-3 duration-300 font-bold  px-5 rounded-[18px] border-2 border-transparent hover:border-btnPrimary">
                <span className="mr-2">Read More </span>
                <BsArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourServiceSection;
