import heroImg2 from "../../../assets/images/Hero Images/2.png";
function Hero() {
  return (
    <div className="max-w-[1440px] min-h-screen xl:min-h-[765px] w-full mx-auto relative flex justify-center items-center ">
      <img
        className="mx-auto h-[100%] w-[100%] object-cover xl:object-fill absolute top-0 -z-10"
        src={heroImg2}
        alt=""
      />
      <div className="w-[85%] xl:w-[75%] text-white text-center p-5 flex md:space-x-[50px] xl:space-x-10 flex-col md:flex-row xl:flex-col justify-center xl:items-center">
        <div className="w-full xl:mb-[60px] pt-20 pb-10 md:pt-0 md:pb-0 md:mt-[120px] xl:mt-0">
          <h1 className="podcast text-[36px] sm:text-[42px] md:text-[48px] lg:text-[64px]  ">
            Our team cares about your full relax
          </h1>
          <h4 className="text-[20px] font-semibold">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
          </h4>
          <button className="hover:text-btnPrimary p-3 border-2 border-white hover:border-btnPrimary rounded-[50px] mt-[24px] text-[20] font-semibold duration-300">
            View out tour packages
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
