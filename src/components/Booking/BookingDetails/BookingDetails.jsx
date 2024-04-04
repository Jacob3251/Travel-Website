import { FaMinus, FaPlus } from "react-icons/fa";
import { RiTimer2Line } from "react-icons/ri";
import "animate.css";
import Select, { components } from "react-select";
import { useState } from "react";
import { format } from "date-fns";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <RiTimer2Line className="text-[#333333]" />
    </components.DropdownIndicator>
  );
};
function BookingDetails({
  increment,
  decrement,
  setBookingInfo,
  info,
  functions,
}) {
  const { incrementActive } = increment;
  const { onChange } = functions;
  const { adultNumber, childrenNumber, infantNumber, date } = info;
  const [timeSelected, setTimeSelected] = useState(null);
  //   const { decrementActive } = decrement;

  //   adult handle functions
  const handleAdultNumberIncrease = () => {
    setBookingInfo((prevState) => ({
      ...prevState,
      adultNumber: adultNumber + 1,
    }));
  };
  const handleAdultNumberDecrease = () => {
    setBookingInfo((prevState) => ({
      ...prevState,
      adultNumber: adultNumber <= 1 ? adultNumber : adultNumber - 1,
    }));
  };

  //   child handle functions
  const handleChildNumberIncrease = () => {
    setBookingInfo((prevState) => ({
      ...prevState,
      childrenNumber: childrenNumber + 1,
    }));
  };
  const handleChildNumberDecrease = () => {
    setBookingInfo((prevState) => ({
      ...prevState,
      childrenNumber: childrenNumber <= 0 ? childrenNumber : childrenNumber - 1,
    }));
  };
  //   infant handle functions
  const handleInfantNumberIncrease = () => {
    setBookingInfo((prevState) => ({
      ...prevState,
      infantNumber: infantNumber + 1,
    }));
  };
  const handleInfantNumberDecrease = () => {
    setBookingInfo((prevState) => ({
      ...prevState,
      infantNumber: infantNumber <= 0 ? infantNumber : infantNumber - 1,
    }));
  };

  const handleTimeSelect = (e) => {
    setBookingInfo((prevState) => ({
      ...prevState,
      time: e.value.toString(),
    }));
    // console.log(info);
  };
  const options1 = [
    { value: "1am", label: "1:00 am" },
    { value: "2am", label: "2:00 am" },
    { value: "3am", label: "3:00 am" },
    { value: "4am", label: "4:00 am" },
    { value: "5am", label: "5:00 am" },
  ];
  let todayDate = new Date();
  let recentDate = `${todayDate.getFullYear()}-${
    todayDate.getMonth() + 1
  }-${todayDate.getDate()}`;
  return (
    <div className="animate__animated animate__fadeInUp">
      {/* date */}
      <div className="flex flex-col space-y-[18px]">
        <label htmlFor="date" className="text-[24px] font-semibold">
          When you will visit?
        </label>
        <input
          onChange={onChange}
          className="h-[54px] px-[18px] text-[18px] text-[#333333] outline-none rounded-[8px] border-[#333333] border-2 border-opacity-20"
          type="date"
          name="date"
          id="date"
          value={date ? date : recentDate}
        />
      </div>

      {/* select time */}
      <div className="mt-[20px] space-y-[18px]">
        <label htmlFor="time" className="text-[24px] font-semibold">
          Which time?
        </label>
        <Select
          onChange={handleTimeSelect}
          components={{ DropdownIndicator }}
          styles={{
            indicatorSeparator: () => {},
            placeholder: (defaultStyles) => ({
              ...defaultStyles,
              fontSize: "18px",
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
      {/* notice for disable and pregnant*/}
      <div className="my-[20px]">
        <h3 className="text-[24px] font-semibold mb-[15px]">
          Select Your Tickets
        </h3>
        <ul className="list-disc list-inside px-4 space-y-[10px]">
          <li className=" text-[#333333]">
            Free for kids under 6 and disabled visitors (74%+)
          </li>
          <li className=" text-[#333333]">
            Pregnant women, families with strollers, and visitors on crutches
            can buy priority tickets at the venue
          </li>
        </ul>
      </div>
      {/* adult counter */}
      <div className="flex justify-between w-full mx-auto  px-[24px] py-[16px] my-5 border-2 rounded-[12px] border-[#333333] border-opacity-20">
        <div>
          <h3 className="text-[#333333] font-bold text-[20px]">Adult(18+)</h3>
          <h4 className="text-btnPrimary text-[20px] font-bold">€34.00 </h4>
        </div>
        <div className="flex  h-[50px] items-center justify-center bre-red-500 text-[18px] font-semibold border-2 rounded-[6px] border-[#EFEFEF]">
          <div
            onClick={handleAdultNumberDecrease}
            className="cursor-pointer p-[13px] w-[50px] bg-white flex justify-center items-center h-full"
          >
            <FaMinus />
          </div>
          <div className="p-[13px] w-[50px] h-full flex justify-center items-center bg-[#EFEFEF]">
            {adultNumber}
          </div>
          <div
            onClick={handleAdultNumberIncrease}
            className="cursor-pointer p-[13px] w-[50px] bg-white h-full flex justify-center items-center"
          >
            <FaPlus />
          </div>
        </div>
      </div>
      {/* child counter */}
      <div className="flex flex-col sm:flex-row justify-center space-y-[10px] sm:space-y-0 sm:justify-between w-full mx-auto  px-[24px] py-[16px] my-5 border-2 rounded-[12px] border-[#333333] border-opacity-20">
        <div>
          <h3 className="text-[#333333] font-bold text-[20px]">Child(6-17)</h3>
          <ul className="px-3 my-[10px] list-inside list-disc text-[#333333] text-opacity-80 text-[18px] leading-[30px]">
            <li className="">With valid ID</li>
            <li className="">Only in combination with:Adult(18+)</li>
          </ul>
          <h4 className="text-btnPrimary text-[20px] font-bold">€22.00 </h4>
        </div>
        <div className="flex w-[150px] h-[50px] items-center justify-center  text-[18px] font-semibold border-2 rounded-[6px] border-[#EFEFEF]">
          <div
            onClick={handleChildNumberDecrease}
            className="cursor-pointer p-[13px] w-[50px] bg-white flex justify-center items-center h-full"
          >
            <FaMinus />
          </div>
          <div className="p-[13px] w-[50px] h-full flex justify-center items-center bg-[#EFEFEF]">
            {childrenNumber}
          </div>
          <div
            onClick={handleChildNumberIncrease}
            className="cursor-pointer p-[13px] w-[50px] bg-white h-full flex justify-center items-center"
          >
            <FaPlus />
          </div>
        </div>
      </div>
      {/* infant counter */}
      <div className="flex flex-col sm:flex-row justify-between space-y-[10px] sm:space-y-0 w-full mx-auto  px-[24px] py-[16px] my-5 border-2 rounded-[12px] border-[#333333] border-opacity-20">
        <div>
          <h3 className="text-[#333333] font-bold text-[20px]">Infant (0-5)</h3>
          <ul className="px-3 my-[10px] list-inside list-disc text-[#333333] text-opacity-80 text-[18px] leading-[30px]">
            <li className="">Only in combination with:Adult(18+)</li>
          </ul>
          <h4 className="text-btnPrimary text-[20px] font-bold">FREE</h4>
        </div>
        <div className="flex w-[150px] h-[50px] items-center justify-center bre-red-500 text-[18px] font-semibold border-2 rounded-[6px] border-[#EFEFEF]">
          <div
            onClick={handleInfantNumberDecrease}
            className="cursor-pointer p-[13px] w-[50px] bg-white flex justify-center items-center h-full"
          >
            <FaMinus />
          </div>
          <div className="p-[13px] w-[50px] h-full flex justify-center items-center bg-[#EFEFEF]">
            {infantNumber}
          </div>
          <div
            onClick={handleInfantNumberIncrease}
            className="cursor-pointer p-[13px] w-[50px] bg-white h-full flex justify-center items-center"
          >
            <FaPlus />
          </div>
        </div>
      </div>
      {/* <button onClick={decrementActive}>Prev</button> */}
      {/* <button onClick={incrementActive}>next</button> */}
    </div>
  );
}

export default BookingDetails;
