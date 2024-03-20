import bike from "../../assets/images/Cta/bikePicture.png";
import Select from "react-select";
function BookingCta() {
  const options1 = [
    { value: "bike_rent", label: "Bike Rent" },
    { value: "hotel_booking", label: "Hotle Booking" },
    { value: "car_rent", label: "Car Rent" },
  ];
  const options2 = [
    { value: "10-11", label: "10am to 11am" },
    { value: "13-14", label: "1pm to 2pm" },
    { value: "15-16", label: "3pm to 4pm" },
  ];

  return (
    <div className="ctabg bg-no-repeat bg-cover w-full px-[30px]  lg:px-[50px]  py-[60px] flex justify-center items-center xl:justify-between xl:items-start relative my-[150px]">
      {" "}
      <div className="flex flex-col w-full max-w-[570px] rounded-[24px]  text-[#333333] justify-center items-center">
        <h1 className="text-[28px] lg:text-[32px] text-center font-extrabold mb-[24px] lg:mb-[32px]">
          Book Bike Now
        </h1>
        <div className="bg-white rounded-[24px] w-full bg-opacity-30 p-[30px] flex flex-col justify-center items-center">
          <form className="w-full grid grid-cols-1 gap-y-[20px] md:grid-cols-2 gap-x-[30px]">
            <div className="w-full flex flex-col space-y-[8px]">
              <label
                htmlFor="name"
                className="text-[18px] text-[#333333] font-semibold"
              >
                Name and Surname
              </label>
              <input
                type="text"
                id="name"
                className="px-[24px] w-full py-[14px] text-[16px] rounded-[8px] outline-none"
                placeholder="Enter your name and surname"
              />
            </div>
            <div className="w-full flex flex-col space-y-[8px]">
              <label
                htmlFor="email"
                className="text-[18px] text-[#333333] font-semibold"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="px-[24px] w-full py-[14px] text-[16px] rounded-[8px] outline-none"
                placeholder="Enter your email address"
              />
            </div>
            <div className="w-full flex flex-col space-y-[8px]">
              <label
                htmlFor="tel"
                className="text-[18px] text-[#333333] font-semibold"
              >
                Telephone Number
              </label>
              <input
                type="text"
                id="tel"
                className="px-[24px] w-full py-[14px] text-[16px] rounded-[8px] outline-none"
                placeholder="Enter your telephone number"
              />
            </div>
            <div className="w-full flex flex-col space-y-[8px]">
              <label
                htmlFor="ServiceName"
                className="text-[18px] text-[#333333] font-semibold"
              >
                Service Type
              </label>
              <div className="w-full">
                <Select
                  styles={{
                    indicatorSeparator: () => {},
                    dropdownIndicator: (baseStyles) => ({
                      ...baseStyles,
                      color: "black",
                    }),

                    control: (defaultStyles) => ({
                      ...defaultStyles,
                      // Notice how these are all CSS properties
                      backgroundColor: "white",
                      borderRadius: "8px",
                      borderColor: "transparent",
                      padding: "4px",
                      height: "52px",
                      overflow: "hidden",
                    }),
                  }}
                  options={options1}
                  placeholder="Select the service types"
                  isSearchable
                  noOptionsMessage={() => "No services found"}
                />
              </div>
              {/* <input
                type="text"
                id="name"
                className="px-[24px] w-full py-[14px] text-[16px] rounded-[8px] outline-none"
                placeholder="Enter your name and surname"
              /> */}
            </div>
            <div className="w-full flex flex-col space-y-[8px]">
              <label
                htmlFor="date"
                className="text-[18px] text-[#333333] font-semibold"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className="px-[24px] w-full py-[14px] text-[16px] rounded-[8px] outline-none"
                placeholder="Select the date"
              />
            </div>
            <div className="w-full flex flex-col space-y-[8px]">
              <label
                htmlFor="name"
                className="text-[18px] text-[#333333] font-semibold"
              >
                Time
              </label>
              <div className="w-full">
                <Select
                  styles={{
                    indicatorSeparator: () => {},
                    dropdownIndicator: (baseStyles) => ({
                      ...baseStyles,
                      color: "black",
                    }),

                    control: (defaultStyles) => ({
                      ...defaultStyles,
                      // Notice how these are all CSS properties
                      backgroundColor: "white",
                      borderRadius: "8px",
                      borderColor: "transparent",
                      padding: "4px",
                      height: "52px",
                      overflow: "hidden",
                    }),
                  }}
                  options={options2}
                  placeholder="Select the time"
                  isSearchable
                  noOptionsMessage={() => "No services found"}
                />
              </div>
            </div>
          </form>
          <button className="min-w-[212px] mt-[30px] rounded-[50px] bg-btnPrimary text-white px-[24px] py-[10px] text-[20px] lg:text-[20px] font-semibold">
            Book Now
          </button>
        </div>
      </div>
      {/* cta image */}
      <div className="absolute  xl:max-w-[600px]  hidden xl:block right-5  -bottom-5 ">
        <img className="h-full w-full" src={bike} alt="" />
      </div>
    </div>
  );
}

export default BookingCta;
