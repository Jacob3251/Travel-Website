import heroImg1 from "../../../assets/images/Hero Images/1.png";
import Select from "react-select";
import { LiaGlobeAmericasSolid } from "react-icons/lia";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { PiUsersThree } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdOutlineDateRange } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";
import { IoCarSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { format } from "date-fns";
const css = `
  .my-selected:not([disabled]){
    font-weight:bold;
    background-color: #FA8B02;
    color: white;
  }
`;

function Hero() {
  const [openedTab, setOpenedTab] = useState("public");
  const options1 = [
    { value: "1am", label: "1:00 am" },
    { value: "2am", label: "2:00 am" },
    { value: "3am", label: "3:00 am" },
    { value: "4am", label: "4:00 am" },
    { value: "5am", label: "5:00 am" },
  ];
  const options3 = [
    { value: "minivan", label: "Minivan and Bus" },
    { value: "ncc", label: "Transfers & NCC" },
    { value: "luxury", label: "Luxury Experience" },
  ];
  const options2 = [
    { value: "Lucca_Bike_Tour", label: "Lucca Bike Tour" },
    { value: "Book_a_bike ", label: "Book a bike" },
    {
      value: "Tour_in_the_outside_of_Lucca",
      label: "Tour in the outside of Lucca",
    },
    { value: "Wine_Tasting_in_Tuscany", label: "Wine Tasting in Tuscany" },
    { value: "Cinque_Terre_Tour", label: "Cinque Terre Tour" },
    { value: "Siena_and_Surroundings", label: "Siena and Surroundings" },
    { value: "Cinque_Terre_Tour", label: "Cinque Terre Tour" },
    { value: "Pisa_&_Lucca", label: "Pisa & Lucca" },
    { value: "Italy_Special_Trips", label: "Italy Special Trips" },
  ];
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateValue, setDateValue] = useState("Choose Date");
  const [selected, setSelected] = useState();

  // useEffect(() => {
  //   if (showDatePicker) {
  //     if (selected) {
  //       const date = format(selected, "PP");
  //       console.log(date);
  //       setDateValue(selected);
  //       setShowDatePicker(false);
  //     }
  //   }
  // }, [showDatePicker, selected]);
  return (
    <div className="max-w-[1440px] min-h-screen xl:min-h-[765px] w-full mx-auto relative flex justify-center items-center ">
      <img
        className="mx-auto h-[100%] w-[100%] object-cover xl:object-fill absolute top-0 -z-10"
        src={heroImg1}
        alt=""
      />

      <div className="text-white text-center p-5 flex sm:space-y-[10%] xl:space-y-[0px] flex-col justify-center xl:items-center">
        {/* hero heading */}
        <div className="w-full xl:mb-[60px] pt-20 pb-10 md:pt-0 md:pb-0 md:mt-[120px] xl:mt-0">
          <h1 className="podcast text-[46px] md:text-[72px] ">
            Enjoy in the best way!
          </h1>
          <h4 className="text-[24px] font-bold">
            Enjoy our services for your trip anytime
          </h4>
        </div>
        {/* hero search */}
        <div className="min-h-[208px] max-w-[1000px] flex flex-col justify-start items-start h-auto w-full p-[20px] rounded-[12px] bg-white bg-opacity-20 ">
          {/* tab selector */}
          <div className="flex font-semibold ">
            <div
              onClick={() => setOpenedTab("public")}
              className={`bg-white ${
                openedTab === "public"
                  ? "text-btnPrimary"
                  : "bg-opacity-40 text-white"
              } rounded-tl-[12px] p-[16px] flex justify-center items-center text-[18px] cursor-pointer `}
            >
              <LiaGlobeAmericasSolid className="mr-[0px] xl:mr-[16px]  text-[38px] xl:text-[24px]" />
              Public Tours
            </div>
            <div
              onClick={() => setOpenedTab("private")}
              className={`bg-white ${
                openedTab === "private"
                  ? "text-btnPrimary"
                  : "bg-opacity-40 text-white"
              } rounded-tr-[12px] p-[16px] flex justify-center items-center text-[18px]  cursor-pointer`}
            >
              <PiUsersThree className="mr-[0px] xl:mr-[16px]  text-[38px] xl:text-[24px]" />
              Private Tours
            </div>
          </div>
          {/* tabcontent */}
          <div className="bg-white w-full flex flex-col xl:flex-row xl:justify-between rounded-b-[12px] rounded-tr-[12px] p-[12px]">
            {/* date */}
            <div className="text-black  p-[16px] mx-[10px] flex flex-col justify-center items-center ">
              <div className="flex w-full text-[18px] ">
                <MdOutlineDateRange className="mr-[7px] text-[24px]" />
                <h1 className="font-medium text-[18px] tracking-wide text-[#333333]">
                  Date
                </h1>
              </div>
              <div
                onClick={() => {
                  setShowDatePicker(!showDatePicker);
                  // setSelected(null);
                  // console.log(dateValue);
                }}
                className="relative flex w-full min-w-[180px] h-[51px] justify-end mt-2  items-center"
              >
                <div className="w-full text-[18px]  overflow-hidden text-ellipsis text-[#333333]  flex justify-center items-center  h-[52px] rounded-md">
                  <input
                    className="w-full cursor-default h-full outline-none text-center text-[14px] placeholder:text-[#333333] placeholder:text-opacity-75"
                    value={selected ? format(selected, "PP") : ""}
                    type="text"
                    readOnly
                    placeholder="Choose Date"
                  />
                  <MdKeyboardArrowDown className="text-[32px]" />
                </div>
                {showDatePicker && (
                  <div className="absolute overflow-hidden rounded-b-[8px] right-0 z-50 w-full h-[250px] md:h-[200px]  -bottom-[490%] md:-bottom-[380%] bg-white flex justify-center items-center">
                    <style>{css}</style>
                    <DayPicker
                      className="scale-[.70] md:scale-[.60]"
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                      modifiersClassNames={{ selected: "my-selected" }}
                    />
                  </div>
                )}
                {/* {selected && console.log(selected)} */}
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="w-[2px] max-h-[50px] h-full bg-black bg-opacity-20"></div>
            </div>
            {/* TIme */}
            <div className="text-black p-[16px] mx-[10px] w-full flex flex-col justify-center items-center ">
              <div className="flex w-full text-[18px] ">
                <MdOutlineWatchLater className="mr-[7px] text-[24px]" />
                <h1 className="font-medium text-[18px] text-[#333333] tracking-wide">
                  Time
                </h1>
              </div>
              <div className="w-full mt-2">
                <Select
                  styles={{
                    indicatorSeparator: () => {},
                    placeholder: (defaultStyles) => ({
                      ...defaultStyles,
                      fontSize: "14px",
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      // backgroundColor: "red",
                    }),
                    dropdownIndicator: (baseStyles) => ({
                      ...baseStyles,
                      color: "black",
                    }),
                    menuList: () => ({
                      display: "flex",
                      justifyContent: "start",
                      flexDirection: "column",
                      width: "100%",
                    }),
                    control: (defaultStyles, state) => ({
                      ...defaultStyles,
                      backgroundColor: "white",
                      padding: "4px",
                      height: "52px",

                      overflow: "hidden",
                      border: state.isFocused ? "none" : "none",
                    }),
                  }}
                  options={options1}
                  placeholder="Choose Time"
                  isSearchable
                />
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="w-[2px] max-h-[50px] h-full bg-black bg-opacity-20"></div>
            </div>
            {/* TOur */}
            <div className="text-black p-[16px] mx-[10px] w-full flex flex-col justify-center items-center ">
              <div className="flex w-full text-[18px] ">
                <CiFlag1 className="mr-[7px] text-[24px]" />
                <h1 className="font-medium tracking-wide text-[18px] text-[#333333]">
                  Tour
                </h1>
              </div>
              <div className="w-full mt-2">
                <Select
                  styles={{
                    indicatorSeparator: () => {},
                    dropdownIndicator: (baseStyles) => ({
                      ...baseStyles,
                      color: "black",
                    }),
                    placeholder: (defaultStyles) => ({
                      ...defaultStyles,
                      fontSize: "14px",
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      // backgroundColor: "red",
                    }),
                    control: (defaultStyles, state) => ({
                      ...defaultStyles,
                      backgroundColor: "white",
                      padding: "4px",
                      height: "52px",

                      overflow: "hidden",
                      border: state.isFocused ? "none" : "none",
                    }),
                  }}
                  options={options2}
                  placeholder="Select Tour"
                  isSearchable
                  noOptionsMessage={() => "No people selected"}
                />
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="w-[2px] max-h-[50px] h-full bg-black bg-opacity-20"></div>
            </div>
            {/* transportation */}
            <div className="text-black p-[16px] mx-[10px]  w-full  flex flex-col justify-center items-center ">
              <div className="flex w-full text-[18px] ">
                <IoCarSharp className="mr-[7px] text-[24px]" />
                <h1 className="font-medium tracking-wide text-[18px] text-[#333333]">
                  Transportation
                </h1>
              </div>
              <div className="w-full mt-2">
                <Select
                  styles={{
                    indicatorSeparator: () => {},
                    dropdownIndicator: (baseStyles) => ({
                      ...baseStyles,
                      color: "black",
                    }),
                    placeholder: (defaultStyles) => ({
                      ...defaultStyles,
                      fontSize: "14px",
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                      // backgroundColor: "red",
                    }),
                    control: (defaultStyles, state) => ({
                      ...defaultStyles,
                      backgroundColor: "white",
                      padding: "4px",
                      height: "52px",

                      overflow: "hidden",
                      border: state.isFocused ? "none" : "none",
                    }),
                  }}
                  options={options3}
                  placeholder="Select Tour"
                  isSearchable
                  noOptionsMessage={() => "No people selected"}
                />
              </div>
            </div>

            {/* search btn */}
            <button className="bg-btnPrimary p-5 rounded-lg flex justify-center items-center">
              <IoSearchOutline className="text-[46px]" />
              <span className="text-white text-[24px] xl:hidden">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
