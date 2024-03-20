import footerLogo from "../../assets/images/Navbar/logo.png";
import { FaFacebookF, FaInstagram, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#333333] px-[80px] md:px-[120px] xl:px-[150px]">
      {/* logo */}
      <div className="p-[20px] w-[120px] h-[120px]">
        <img className="w-full h-full" src={footerLogo} alt="" />
      </div>
      {/* Main Footer section */}
      <div className="w-full border-b-2 border-t-2 border-[#f5f5f5] border-opacity-5 py-8  text-white max-w-[1420px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-content-center gap-y-[32px] xl:gap-y-0 md:gap-x-[18px] xl:gap-x-[36px]">
        <div className="">
          <h1 className="md:text-[24px] xl:text-[20px] mb-[20px] font-bold">Services</h1>
          <h4 className="md:text-[20px] xl:text-[14px] mb-[10px] font-semibold">Bike and Rickshaw rental</h4>
          <h4 className="md:text-[20px] xl:text-[14px] mb-[10px] font-semibold">Guided Tours of Lucca</h4>
          <h4 className="md:text-[20px] xl:text-[14px] mb-[10px] font-semibold">Guided Bike Tour of Lucca</h4>
          <h4 className="md:text-[20px] xl:text-[14px] mb-[10px] font-semibold">Trip In The Tuscan Hills</h4>
          <h4 className="md:text-[20px] xl:text-[14px] mb-[10px] font-semibold">Transportation With Luxury Cars</h4>
          <h4 className="md:text-[20px] xl:text-[14px]  font-semibold">Wine Tours By Bus With Guide</h4>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-start space-y-[32px] md:space-y-0 md:space-x-[36px]">
        <div className="">
          <h1 className=" md:text-[24px] xl:text-[20px] mb-[20px] font-bold">Home</h1>
          <h4 className=" md:text-[20px] xl:text-[14px] mb-[10px] font-semibold">Home</h4>
          <h4 className=" md:text-[20px] xl:text-[14px] mb-[10px] font-semibold">About Us</h4>
          <h4 className=" md:text-[20px] xl:text-[14px]  font-semibold">Tour Packages</h4>
        </div>
        <div className="">
          <h1 className="md:text-[24px] xl:text-[20px] mb-[20px] font-bold">Help</h1>
          <h4 className="md:text-[20px] xl:text-[14px] mb-[10px] font-semibold">Terms of Use</h4>
          <h4 className="md:text-[20px] xl:text-[14px] font-semibold">Provicy Policy</h4>
        </div>
        </div>
        <div className="">
          <h1 className="md:text-[24px] xl:text-[20px] mb-[20px] font-bold">Contacts</h1>
          <div className="text-[16px] xl:text-[14px] mb-[10px] font-semibold flex items-center space-x-[10px]">
            <FaLocationDot className="text-btnPrimary text-[18px]" /> <h4>Piazza Napoleone, Lucca, Tuscany</h4>
          </div>
          <div className="text-[16px] xl:text-[14px] mb-[10px] font-semibold flex items-center space-x-[10px]">
            <BsFillTelephoneFill className="text-btnPrimary text-[18px]" /> <h4> +39 346 368 5708</h4>
          </div>
          <div className="text-[16px] xl:text-[14px] mb-[10px] font-semibold flex items-center space-x-[10px]">
            <FaEnvelope className="text-btnPrimary text-[18px]" /> <h4> italiainlimo@gmail.com</h4>
          </div>
        </div>
        <div className="flex w-full justify-center items-center md:items-end md:justify-start  xl:items-center flex-col">
            <div className="">
            <h1 className="text-center text-[20px] mb-[20px] font-bold">Social Media</h1>
            <div className="flex justify-center items-center space-x-[14px]">
            <div className="w-[30px] h-[30px] flex justify-center items-center  rounded-full bg-btnPrimary">
              <FaXTwitter  className="text-black text-[20px]"/>
            </div>
            <div className="w-[30px] h-[30px]  flex justify-center items-center rounded-full bg-btnPrimary">
              <FaFacebookF  className="text-black text-[20px]"/>
            </div>
            <div className="w-[30px] h-[30px]  flex justify-center items-center rounded-full bg-btnPrimary">
              <FaInstagram  className="text-black text-[20px]"/>
            </div>
            </div>
            </div>
        </div>
      </div>
      {/* copyright section */}
      <div className="flex justify-center items-center text-[14px] py-[20px] text-white">Copyright © 2024. All rights reserved.</div>
    </div>
  );
};

export default Footer;
