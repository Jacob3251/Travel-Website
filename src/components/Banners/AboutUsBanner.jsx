import logo4 from "../../assets/images/Banner/icon_bestprice.png";
import logo2 from "../../assets/images/Banner/icon_experience.png";
import logo3 from "../../assets/images/Banner/icon_guide.png";
import logo1 from "../../assets/images/Banner/icon_map.png";

function AboutUsBanner() {
  return (
    <div className="ctabg bg-no-repeat bg-cover xl:px-[40px]  py-[10px] flex flex-wrap justify-center items-center  w-full h-full bg-blue-500">
      <div className=" p-[30px] w-full h-full  max-w-[320px] md:max-w-[300px] lg:max-w-[250px]  min-h-[220px] m-[1rem] lg:m-[1.2rem] bg-white bg-opacity-30 rounded-[24px] flex justify-start items-center flex-col space-y-5 text-center">
        <div>
          <img src={logo1} alt="" />
        </div>
        <h3 className="font-semibold text-[20px]">
          Complete Packages For All Your Wishes
        </h3>
      </div>
      <div className=" p-[30px] w-full h-full  max-w-[320px] md:max-w-[300px] lg:max-w-[250px]  min-h-[220px] m-[1rem] lg:m-[1.2rem] bg-white bg-opacity-30 rounded-[24px] flex justify-start items-center flex-col space-y-5 text-center">
        <div>
          <img src={logo2} alt="" />
        </div>
        <h3 className="font-semibold text-[20px]">
          Over 30 Years Of Experience
        </h3>
      </div>
      <div className=" p-[30px] w-full h-full  max-w-[320px] md:max-w-[300px] lg:max-w-[250px]  min-h-[220px] m-[1rem] lg:m-[1.2rem] bg-white bg-opacity-30 rounded-[24px] flex justify-start items-center flex-col space-y-5 text-center">
        <div>
          <img src={logo3} alt="" />
        </div>
        <h3 className="font-semibold text-[20px]">Expert Guides For You</h3>
      </div>
      <div className=" p-[30px] w-full h-full  max-w-[320px] md:max-w-[300px] lg:max-w-[250px]  min-h-[220px] m-[1rem] lg:m-[1.2rem] bg-white bg-opacity-30 rounded-[24px] flex justify-start items-center flex-col space-y-5 text-center">
        <div>
          <img src={logo4} alt="" />
        </div>
        <h3 className="font-semibold text-[20px]">
          Guaranteed fun at the best price!
        </h3>
      </div>
    </div>
  );
}

export default AboutUsBanner;
