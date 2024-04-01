import { PiUsersThreeLight } from "react-icons/pi";
import { LiaLanguageSolid } from "react-icons/lia";
import { GrBus } from "react-icons/gr";
import { HiOutlineTicket } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { IoLocationSharp } from "react-icons/io5";
import DefaultLayout from "../../layouts/DefaultLayout";
import { RiTimer2Line } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import gallery1 from "../../assets/images/individualPackages/biketour/gallery/1.png";
import gallery2 from "../../assets/images/individualPackages/biketour/gallery/2.png";
import gallery3 from "../../assets/images/individualPackages/biketour/gallery/3.png";
import gallery4 from "../../assets/images/individualPackages/biketour/gallery/4.png";
import Testimonials from "../../components/Testimonials/Testimonials";
import Select, { components } from "react-select";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import IndividualPackageCarousel from "../../components/IndividualPackageCarousel/IndividualPackageCarousel";
import { useState } from "react";
import { Link } from "react-router-dom";
// const css = `
//   .my-selected:not([disabled]){
//     font-weight:bold;
//     background-color: #FA8B02;
//     color: white;
//   }
// `;

// react select dropdown settings

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <RiTimer2Line className="text-[#333333]" />
    </components.DropdownIndicator>
  );
};

function IndividualPackage() {
  // const [selected, setSelected] = useState();
  const options1 = [
    { value: "1am", label: "1:00 am" },
    { value: "2am", label: "2:00 am" },
    { value: "3am", label: "3:00 am" },
    { value: "4am", label: "4:00 am" },
    { value: "5am", label: "5:00 am" },
  ];
  return (
    <DefaultLayout>
      <div className=" mt-[80px] xl:mt-0 px-2 md:px-[80px] xl:px-[120px] ">
        {/* back button */}
        <div className=" ">
          <button className="text-[18px] flex justify-center items-center text-[#333333] py-3">
            <BsArrowLeft className="mr-[10px]" />
            Back
          </button>
          <div></div>
        </div>
        {/* Initial section */}
        <div className="flex flex-col lg:flex-row w-full space-y-[40px] lg:space-y-[0px] lg:space-x-[40px] mb-[40px] md:mb-[80px] lg:mb-[120px] justify-center items-start">
          {/* carousel part */}
          <div className="w-full lg:w-[50%] text-[#333333] min-h-[300px] ">
            <IndividualPackageCarousel></IndividualPackageCarousel>
          </div>
          {/* description part */}
          <div className="w-full lg:w-[50%] ">
            {/* package heading */}
            <h1 className="text-[26px] font-extrabold mb-[16px]">
              Lucca Bike Tour
            </h1>
            {/* package pricing */}
            <div className="text-[16px] font-semibold mb-[16px] flex items-center">
              <span className="mr-2">from </span>
              <span className="text-[22px] font-extrabold text-btnPrimary">
                340$
              </span>
            </div>
            {/* package description */}
            <p className="text-[14px] font-light leading-[20px] mb-[16px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              ipsum maiores enim beatae excepturi dicta tenetur explicabo
              repudiandae est aperiam!
            </p>
            {/* date selector */}
            {/* <div className="flex flex-col justify-center md:justify-start items-start  w-full ">
              <label htmlFor="" className="font-semibold text-[#333333] mb-2">
                Select a Date
              </label>
              <div className="w-full h-full flex  justify-center items-center  sm:items-start sm:justify-start sm:scale-100 min-h-[300px] lg:min-h-[410px] overflow-hidden">
                <style>{css}</style>
                <DayPicker
                  className=" w-auto scale-[.82]   sm:scale-100"
                  mode="single"
                  styles={{
                    head_cell: {
                      width: "40px",
                      height: "15px",
                    },
                    table: {
                      maxWidth: "none",
                    },
                    day: {
                      margin: "auto",
                    },
                  }}
                  selected={selected}
                  onSelect={setSelected}
                  modifiersClassNames={{ selected: "my-selected" }}
                />
              </div>
            </div> */}
            <div className="flex flex-col w-[100%] lg:max-w-[380px] mb-3">
              <label htmlFor="" className="font-semibold text-[#333333] mb-2">
                Select Date
              </label>
              <input
                type="date"
                name=""
                id=""
                className="rounded-[8px] border-[1px] border-[#333333] outline-blue-300 border-opacity-20 p-[8px] h-[52px] text-[14px]"
              />
            </div>
            {/* time selector */}
            <div className="flex flex-col w-[100%] lg:max-w-[380px] mb-3">
              <label htmlFor="" className="font-semibold text-[#333333] mb-2">
                Time
              </label>
              <Select
                components={{ DropdownIndicator }}
                styles={{
                  indicatorSeparator: () => {},
                  placeholder: (defaultStyles) => ({
                    ...defaultStyles,
                    fontSize: "14px",
                    display: "flex",
                    width: "100%",
                    justifyContent: "start",
                    alignItems: "center",
                    // backgroundColor: "red",
                  }),

                  menuList: () => ({
                    display: "flex",
                    justifyContent: "start",
                    flexDirection: "column",
                    width: "100%",
                  }),
                  control: (defaultStyles) => ({
                    ...defaultStyles,
                    backgroundColor: "white",
                    padding: "4px",
                    height: "52px",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }),
                }}
                options={options1}
                placeholder="Select the time"
                isSearchable
              />
            </div>
            <Link to="/booking">
              <button className="w-full lg:w-auto bg-btnPrimary text-white text-[18px] rounded-lg px-3 py-3">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        {/* details part */}
        <div className=" w-full lg:w-[50%]  text-[#333333] mb-[32px]">
          <h1 className="text-[32px] font-extrabold">Details</h1>

          <p className="text-[16px] leading-[30px] mb-[32px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <div className="space-y-[20px]">
            <div className="flex text-[16px]">
              <span className="text-btnPrimary text-[22px] mr-[10px]">
                <PiUsersThreeLight />
              </span>
              <span className="font-bold mr-3">Number of group</span>
              <span className="text-[15px]">15-30</span>
            </div>
            <div className="flex text-[16px]">
              <span className="text-btnPrimary text-[22px] mr-[10px]">
                <CgSandClock />
              </span>
              <span className="font-bold mr-3">Duration</span>
              <span className="text-[15px]">15 hours and 45 minutes</span>
            </div>
            <div className="flex text-[16px]">
              <span className="text-btnPrimary text-[22px] mr-[10px]">
                <IoLocationSharp />
              </span>
              <span className="font-bold mr-3">
                Departuring and arriving areas:
              </span>
              <span className="text-[15px]">Lucca</span>
            </div>
            <div className="flex text-[16px]">
              <span className="text-btnPrimary text-[22px] mr-[10px]">
                <FaUserTie />
              </span>
              <span className="font-bold mr-3">Guide service:</span>
              <span className="text-[15px]">Included</span>
            </div>
            <div className="flex text-[16px]">
              <span className="text-btnPrimary text-[22px] mr-[10px]">
                <LiaLanguageSolid />
              </span>
              <span className="font-bold mr-3">Language:</span>
              <span className="text-[15px]">English, Italian</span>
            </div>
            <div className="flex text-[16px]">
              <span className="text-btnPrimary text-[22px] mr-[10px]">
                <HiOutlineTicket />
              </span>
              <span className="font-bold mr-3">Entry Fees:</span>
              <span className="text-[15px]">lorem ipsum</span>
            </div>
            <div className="flex text-[16px]">
              <span className="text-btnPrimary text-[22px] mr-[10px]">
                <GrBus />
              </span>
              <span className="font-bold mr-3">EntryTransportation:</span>
              <span className="text-[15px]">Bus</span>
            </div>
          </div>
        </div>
        {/* gallery part */}
        <div className="my-[20px] md:my-[120px]">
          <h1 className="text-[24px] md:text-[32px] font-bold md:font-extrabold mb-[14px] md:mb-[56px]">
            Gallery
          </h1>
          <div className="grid grid-cols-5 lg:grid-cols-4 grid-flow-dense grid-rows-2 gap-[4px] md:gap-[10px]">
            <div className="col-span-3 row-span-2 lg:col-span-2  lg:row-span-2 rounded-sm md:rounded-md xl:rounded-lg overflow-hidden">
              <img
                className="object-cover h-full w-full "
                src={gallery1}
                alt=""
              />
            </div>
            <div className="col-span-2 row-span-1 lg:col-span-1  lg:row-span-1 rounded-sm md:rounded-md xl:rounded-lg overflow-hidden">
              <img
                className="object-cover h-full w-full "
                src={gallery2}
                alt=""
              />
            </div>
            <div className="col-span-1 row-span-1 lg:col-span-1  lg:row-span-2 rounded-sm md:rounded-md xl:rounded-lg overflow-hidden">
              <img
                className="object-cover h-full w-full "
                src={gallery4}
                alt=""
              />
            </div>
            <div className="col-span-1 row-span-1 lg:col-span-1  lg:row-span-1 rounded-sm md:rounded-md xl:rounded-lg overflow-hidden">
              <img
                className="object-cover h-full w-full "
                src={gallery3}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* testimonial */}
        <Testimonials></Testimonials>
      </div>
    </DefaultLayout>
  );
}

export default IndividualPackage;
