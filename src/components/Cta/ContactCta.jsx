import { useNavigate } from "react-router-dom";
import girl from "../../assets/images/Cta/girl.png";
function ContactCta() {
  const navigate = useNavigate();
  return (
    <div className="ctabg bg-no-repeat bg-cover w-full px-[20px] lg:px-[50px] xl:px-[150px] py-[60px] flex justify-center items-center lg:justify-between lg:items-start relative my-[150px]">
      {/* cta content */}
      <div className="flex flex-col w-full max-w-[570px] rounded-[24px] bg-white bg-opacity-30 p-[30px] text-[#333333] justify-center items-center">
        <h1 className="text-[28px] lg:text-[32px] text-center font-extrabold mb-[24px] lg:mb-[32px]">
          Get Special Offers for Organizations
        </h1>
        <p className="text-[16px] lg:text-[18px] leading-[26px] mb-[24px] lg:mb-[32px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          eveniet modi repellendus optio. Molestias distinctio corrupti cumque,
          consequuntur soluta magni!
        </p>
        <button
          onClick={() => navigate("/contact-us")}
          className="rounded-[50px] bg-btnPrimary text-white p-[10px] text-[16px] lg:text-[20px] font-semibold"
        >
          Contact Us
        </button>
      </div>
      {/* cta image */}
      <div className=" absolute h-[120%] hidden lg:block lg:right-[5%] xl:right-[12%] bottom-0 ">
        <img className="h-full w-full" src={girl} alt="" />
      </div>
    </div>
  );
}

export default ContactCta;
