import image1 from "../../assets/images/ServicesDetailHome/1.png";
import image2 from "../../assets/images/ServicesDetailHome/2.png";
import image3 from "../../assets/images/ServicesDetailHome/3.png";
import image4 from "../../assets/images/ServicesDetailHome/4.png";
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
function ServiceDetailHome() {
  return (
    <div className=" flex flex-wrap justify-center items-start xl:px-[80px]">
      {data.map((item) => (
        <div
          key={item.id}
          className=" flex flex-col max-w-screen  md:max-w-[290px] w-full m-3 lg:m-8 xl:m-3"
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
        </div>
      ))}
    </div>
  );
}

export default ServiceDetailHome;
