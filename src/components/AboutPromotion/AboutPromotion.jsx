import image1 from "../../assets/images/AboutPromotion/1.png";
function AboutPromotion() {
  return (
    <div className="my-[120px] h-full w-full flex flex-col-reverse lg:flex-row  justify-center lg:items-start xl:items-center  lg:space-x-[70px] px-[40px] md:px-[80px] xl:px-[150px] ">
      <div className="  rounded-[24px] overflow-hidden lg:min-w-[500px]  lg:max-w-[450px] w-full mt-[50px] lg:mt-0">
        <img className="w-full h-full" src={image1} alt="" />
      </div>
      <div className="text-[#333333] mb-[50px] md:mb-0 flex flex-col w-[85%] md:w-auto md:justify-start md:items-start text-[16px] font-semibold">
        <h3 className="mb-[6px]">Welcome to out site!</h3>
        <h1 className="text-[32px] mb-[32px] font-extrabold">
          We are the best company for your visit
        </h1>
        <p className="text-[18px] mb-[32px] font-normal leading-[32px]">
          After decades of experience, and a whole life in Lucca, we offer you
          the most complete tourism service in the city. In addition to having
          bikes and rickshaws to have as much fun as you want, you have the
          choice of tour guides with whom to tour and drivers for your every
          need! We offer packages in the way that you get the most at the lowest
          price. Book with us and we will always be available for you!
        </p>
        <div className="flex space-x-[20px] lg:space-x-[30px] xl:space-x-[50px]">
          <div>
            <div className="text-btnPrimary text-[24px] md:text-[32px] font-bold leading-[32px] mb-[6px]">
              20+
            </div>
            <div className="text-[12px] md:text-[16px] leading-[20px] md:leading-[26px]">
              Years <br />
              Experience
            </div>
          </div>
          <div>
            <div className="text-btnPrimary text-[24px] md:text-[32px] font-bold leading-[32px] mb-[6px]">
              100+
            </div>
            <div className="text-[12px] md:text-[16px] leading-[20px] md:leading-[26px]">
              Happy <br />
              Customer
            </div>
          </div>
          <div>
            <div className="text-btnPrimary text-[24px] md:text-[32px] font-bold leading-[32px] mb-[6px]">
              15+
            </div>
            <div className="text-[12px] md:text-[16px] leading-[20px] md:leading-[26px]">
              Choice <br />
              of Service
            </div>
          </div>
          <div>
            <div className="text-btnPrimary text-[24px] md:text-[32px] font-bold leading-[32px] mb-[6px]">
              10+
            </div>
            <div className="text-[12px] md:text-[16px] leading-[20px] md:leading-[26px]">
              Professional <br />
              Guides
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPromotion;
