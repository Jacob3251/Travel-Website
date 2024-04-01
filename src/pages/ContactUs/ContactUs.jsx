import { FaLocationDot } from "react-icons/fa6";
import DefaultLayout from "../../layouts/DefaultLayout";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import locationImage from "../../assets/images/contactus/location.png";
function ContactUs() {
  return (
    <DefaultLayout>
      <div className="ctabg bg-no-repeat bg-cover flex flex-col xl:flex-row justify-center xl:justify-between items-center xl:items-start space-y-[50px] xl:space-y-0 px-[50px] md:px-[100px] 2xl:px-[150px] xl:py-[60px] xl:min-h-[670px] py-[150px]">
        {/* conatact section */}
        <div className=" text-[#333333] w-full max-w-screen xl:max-w-[330px] 2xl:max-w-[350px]">
          <h1 className="text-[36px] md:text-[48px] font-extrabold mb-[16px]">
            Get in touch!
          </h1>
          <h3 className="text-[16px] md:text-[18px] font-semibold mb-[32px]">
            Fill up the form and our team will get back to you within 24 hours.
          </h3>
          {/* addresses */}
          <div className="flex flex-col space-y-[10px]">
            <div className="w-full  border-2 border-transparent hover:border-btnPrimary rounded-[12px] hover:bg-btnPrimary hover:bg-opacity-20 flex justify-start items-center space-x-[10px]  p-[16px]">
              <FaLocationDot />
              <span className="text-[16px] md:text-[18px] font-semibold leading-[18px] md:leading-[26px]">
                Piazza Napoleone, Lucca, Tuscany
              </span>
            </div>
            <div className="w-full  border-2 border-transparent hover:border-btnPrimary rounded-[12px] hover:bg-btnPrimary hover:bg-opacity-20 flex justify-start items-center space-x-[10px]  p-[16px]">
              <BsTelephoneFill />
              <span className="text-[16px] md:text-[18px] font-semibold leading-[18px] md:leading-[26px]">
                +39 346 368 5708
              </span>
            </div>
            <div className="w-full  border-2 border-transparent hover:border-btnPrimary rounded-[12px] hover:bg-btnPrimary hover:bg-opacity-20 flex justify-start items-center space-x-[10px]  p-[16px]">
              <FaEnvelope />{" "}
              <span className="text-[16px] md:text-[18px] font-semibold leading-[18px] md:leading-[26px]">
                italiainlimo@gmail.com
              </span>
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className="w-full xl:max-w-[500px] 2xl:max-w-[580px] bg-white bg-opacity-30 rounded-[24px] p-[30px] flex flex-col justify-start items-center">
          <div className="w-full mb-[30px]">
            <label className="text-[18px] font-semibold " htmlFor="">
              Name and Surname
            </label>
            <input
              type="text"
              name=""
              id=""
              className="w-full py-[14px] px-[24px] mt-[8px] rounded-[8px] placeholder:text-[#333333] ouline-none focus:outline-none"
              placeholder="Enter your name and surname"
            />
          </div>
          <div className="w-full mb-[30px]">
            <label className="text-[18px] font-semibold " htmlFor="">
              Email Address
            </label>
            <input
              type="email"
              name=""
              id=""
              className="w-full py-[14px] px-[24px] mt-[8px] rounded-[8px] placeholder:text-[#333333] ouline-none focus:outline-none"
              placeholder="Enter your email address"
            />
          </div>
          <div className="w-full ">
            <label className="text-[18px] font-semibold " htmlFor="">
              Message
            </label>
            <textarea
              className="w-full py-[14px] px-[24px] mt-[8px] rounded-[8px] placeholder:text-[#333333] ouline-none focus:outline-none"
              placeholder="Enter your message"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className=" w-full flex justify-center items-center my-[30px]">
            <button className="bg-btnPrimary hover:bg-white px-[24px] py-[10px] rounded-[50px] font-semibold border-2 border-transparent hover:border-btnPrimary  text-white hover:text-btnPrimary duration-300">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-[350px] max-h-[420px] w-full h-full">
        <img
          className="w-full h-full min-h-[350px] max-h-[420px] object-cover bg-red-500"
          src={locationImage}
          alt=""
        />
      </div>
    </DefaultLayout>
  );
}

export default ContactUs;
