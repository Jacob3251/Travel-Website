import { FaLocationDot } from "react-icons/fa6";
import DefaultLayout from "../../layouts/DefaultLayout";
import { BsTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

function ContactUs() {
  return (
    <DefaultLayout>
      <div className="ctabg bg-no-repeat bg-cover flex justify-between items-start px-[250px] py-[60px]">
        {/* conatact section */}
        <div className=" text-[#333333] max-w-[350px]">
          <h1 className="text-[48px] font-extrabold mb-[16px]">
            Get in touch!
          </h1>
          <h3 className="text-[18px] font-semibold mb-[32px]">
            Fill up the form and our team will get back to you within 24 hours.
          </h3>
          {/* addresses */}
          <div className="flex flex-col space-y-[10px]">
            <div className="w-full  border-2 border-transparent hover:border-btnPrimary rounded-[12px] hover:bg-btnPrimary hover:bg-opacity-20 flex justify-start items-center space-x-[10px]  p-[16px]">
              <FaLocationDot />
              <span className="text-[18px] font-semibold leading-[26px]">
                Piazza Napoleone, Lucca, Tuscany
              </span>
            </div>
            <div className="w-full  border-2 border-transparent hover:border-btnPrimary rounded-[12px] hover:bg-btnPrimary hover:bg-opacity-20 flex justify-start items-center space-x-[10px]  p-[16px]">
              <BsTelephoneFill />
              <span className="text-[18px] font-semibold leading-[26px]">
                +39 346 368 5708
              </span>
            </div>
            <div className="w-full  border-2 border-transparent hover:border-btnPrimary rounded-[12px] hover:bg-btnPrimary hover:bg-opacity-20 flex justify-start items-center space-x-[10px]  p-[16px]">
              <FaEnvelope />{" "}
              <span className="text-[18px] font-semibold leading-[26px]">
                italiainlimo@gmail.com
              </span>
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className="w-full max-w-[450px] bg-red-500">
          <div>
            <label htmlFor="">Name and Surname</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Email Address</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <input type="text" name="" id="" />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default ContactUs;
