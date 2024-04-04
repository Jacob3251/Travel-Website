import image1 from "../../assets/images/HomePackages/1.png";
import image2 from "../../assets/images/HomePackages/2.png";
import image3 from "../../assets/images/HomePackages/3.png";
import image4 from "../../assets/images/HomePackages/4.png";
import HomePackage from "./HomePackage";

const data = [
  {
    id: 1,
    title: "Bike and rickshaw rental",
    price: 10,
    detail: [
      "Your bike for a day",
      "City App",
      "Discount on Rickshaw",
      "Guaranteed Support",
    ],
    imgLink: image1,
  },
  {
    id: 2,
    title: "Guided tour of the countryside",
    price: 30,
    detail: [
      "A Mountain Bike Included",
      "A Guide For You",
      "Bottle of water",
      "Guaranteed Support",
    ],
    imgLink: image2,
  },
  {
    id: 3,
    title: "Taxi and NCC service",
    price: 45,
    detail: ["Park ticket", "Return bus", "Companion", "Guaranteed Support"],
    imgLink: image3,
  },
  {
    id: 4,
    title: "Bus Package",
    price: 10,
    detail: [
      "Personal Driver",
      "Wherever You Want",
      "At the best price",
      "Guaranteed Support",
    ],
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
          <HomePackage key={item.id} item={item}></HomePackage>
        ))}
      </div>
    </div>
  );
}

export default HomePackages;
