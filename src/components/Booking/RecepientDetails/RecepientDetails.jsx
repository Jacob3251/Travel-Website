import "animate.css";
import toast from "react-hot-toast";
import isEmail from "validator/lib/isEmail";
function RecepientDetails({
  increment,
  decrement,
  setBookingInfo,
  info,
  functions,
}) {
  const { incrementActive } = increment;
  const { decrementActive } = decrement;
  const { onChange } = functions;
  const {
    recepientsName,
    recepientsSurName,
    recepientsTelephone,
    recepientsEmail,
  } = info;
  const handleChange = (e) => {
    if (e.target.name === "recepientsEmail") {
      const result = isEmail(e.target.value);
      if (!result) {
        toast.error("Not a valid email");
        setBookingInfo((prevState) => ({
          ...prevState,
          recepientsEmail: "",
        }));
      }
    }
  };
  return (
    <div className="animate__animated animate__fadeInRight  w-full h-full">
      <h1 className="text-[24px] font-semibold mb-[20px] text-left">
        Who shall we send these tickets to?
      </h1>

      <div className="">
        <div className=" p-0 grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[30px] ">
          <div className=" flex flex-col text-[#333333] ">
            <label
              htmlFor="recepientsName"
              className="text-[18px] font-semibold mb-[8px]"
            >
              Name
            </label>
            <input
              required
              onChange={onChange}
              type="text"
              placeholder="Enter your name"
              name="recepientsName"
              value={recepientsName}
              id="recepientsName"
              className="border-2 border-[#333333] border-opacity-20 focus:outline-btnPrimary text-[16px] px-[24px] py-[14px] rounded-[8px]"
            />
          </div>
          <div className=" flex flex-col text-[#333333] ">
            <label
              htmlFor="recepientsSurName"
              className="text-[18px] font-semibold mb-[8px]"
            >
              Surname
            </label>
            <input
              required
              type="text"
              onChange={onChange}
              id="recepientsSurName"
              name="recepientsSurName"
              value={recepientsSurName}
              placeholder="Enter your surname"
              className="border-2 border-[#333333] border-opacity-20 focus:outline-btnPrimary text-[16px] px-[24px] py-[14px] rounded-[8px]"
            />
          </div>
          <div className=" flex flex-col text-[#333333] ">
            <label
              htmlFor="recepientsTelephone"
              className="text-[18px] font-semibold mb-[8px]"
            >
              Telephone Number
            </label>
            <input
              required
              type="text"
              placeholder="Enter your telephone number"
              id="recepientsTelephone"
              onChange={onChange}
              name="recepientsTelephone"
              value={recepientsTelephone}
              className="border-2 border-[#333333] border-opacity-20 focus:outline-btnPrimary text-[16px] px-[24px] py-[14px] rounded-[8px]"
            />
          </div>
          <div className=" flex flex-col text-[#333333] ">
            <label
              htmlFor="recepientsEmail"
              className="text-[18px] font-semibold mb-[8px]"
            >
              Email Address
            </label>
            <input
              required
              type="email"
              value={recepientsEmail}
              id="recepientsEmail"
              onChange={onChange}
              name="recepientsEmail"
              placeholder="Enter your email address"
              className="border-2 border-[#333333] border-opacity-20 focus:outline-btnPrimary text-[16px] px-[24px] py-[14px] rounded-[8px]"
            />
          </div>
        </div>
        <button
          className="w-full bg-btnPrimary rounded-[50px] text-[20px] text-white font-bold py-[16px] mt-[30px]"
          onClick={decrementActive}
        >
          Back
        </button>
        {/* <button onClick={incrementActive}>next</button>  */}
      </div>
    </div>
  );
}

export default RecepientDetails;
