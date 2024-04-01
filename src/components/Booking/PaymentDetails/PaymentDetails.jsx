import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaPaypal } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import visa from "../../../assets/images/CardOptionIcons/Visa.png";
import maestro from "../../../assets/images/CardOptionIcons/Maestro.png";
import discover from "../../../assets/images/CardOptionIcons/Discover.png";
import mastercard from "../../../assets/images/CardOptionIcons/Mastercard.png";
import { matchSorter } from "match-sorter";
function PaymentInput({ valueName, value, functions, inputName, inputType }) {
  const [focusedInput, setFocusInput] = useState(false);

  const { onChange } = functions;

  return (
    <div
      onClick={() => setFocusInput(true)}
      className="w-full h-[60px] relative group"
    >
      <div
        className={`left-3 absolute duration-300 ${
          value !== ""
            ? "-top-2.5"
            : focusedInput
            ? "-top-2.5"
            : "top-[50%] -translate-y-[50%]"
        } bg-white px-2`}
      >
        {inputName}
      </div>
      <input
        type={inputType}
        id={valueName}
        name={valueName}
        value={value}
        onChange={onChange}
        placeholder={inputType === "month" && "MM YY"}
        className="border-2 rounded-[4px] bg-white  border-[#333333] border-opacity-20  focus:outline-btnPrimary h-[60px] w-full px-2"
      />
    </div>
  );
}

function PaymentDetails({ setBookingInfo, functions, info, decrement }) {
  const [selectedMode, setSelectedMode] = useState("");
  const { recepientsCardNumber, recepientsCardExpDate, recepientsCardCVS } =
    info;

  const { decrementActive } = decrement;
  return (
    <div className="animate__animated animate__fadeInRight  w-full h-full mb-8 lg:mb-0">
      <h1 className="text-[24px] font-semibold mb-[44px] text-left">
        Select a payment method
      </h1>
      {/* payment options */}
      <div>
        {/* paypal */}
        <div
          onClick={() => setSelectedMode("pp")}
          className={`border-2 ${
            selectedMode === "pp"
              ? "border-btnPrimary"
              : "border-[#333333] border-opacity-20"
          }  rounded-[12px] p-[12px]`}
        >
          <div className="flex">
            <div className="flex items-start  justify-start ">
              <div className="mt-1 mr-2 flex justify-center items-center ">
                {selectedMode !== "pp" && (
                  <svg
                    fill="#333333"
                    height={15}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                  </svg>
                )}

                {selectedMode === "pp" && (
                  <svg
                    fill="#FA8B02"
                    height={15}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                )}
              </div>
              <span className="text-[18px] mr-[15px] font-semibold">
                PayPal
              </span>
              <span>
                You will be redirected to the PayPal website after submitting
                your order
              </span>
            </div>
            <div className="text-[26px] flex justify-center items-center p-2">
              <div className="border-2 border-[#333333] text-blue-500 border-opacity-70  p-2.5 rounded-lg">
                <FaPaypal className="" />
              </div>
            </div>
          </div>
        </div>
        {/* credit card */}
        <div
          onClick={() => setSelectedMode("cc")}
          className={`mt-[20px] border-2 ${
            selectedMode === "cc"
              ? "border-btnPrimary "
              : "border-[#333333] border-opacity-20"
          }  rounded-[12px] p-[12px]`}
        >
          <div className="flex">
            <div className="flex items-start  justify-start ">
              <div className="mt-1 mr-2 flex justify-center items-center ">
                {selectedMode !== "cc" && (
                  <svg
                    fill="#333333"
                    height={15}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                  </svg>
                )}

                {selectedMode === "cc" && (
                  <svg
                    fill="#FA8B02"
                    height={15}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                  </svg>
                )}
              </div>
              <span className="text-[18px] mr-[15px] font-semibold">
                Pay with Credit Card
              </span>
            </div>
            <div className="flex justify-end items-center w-full space-x-2 text-[24px] text-btnPrimary">
              <img src={visa} alt="" />
              <img src={discover} alt="" />
              <img src={maestro} alt="" />
              <img src={mastercard} alt="" />
            </div>
          </div>
          {selectedMode !== "cc" && (
            <div>Please enter you card details for the payment</div>
          )}
          {selectedMode === "cc" && (
            <div className=" grid place-content-center grid-cols-1 sm:grid-cols-2 gap-3 mt-[20px]">
              <PaymentInput
                value={recepientsCardNumber}
                inputName="Card Number"
                inputType="text"
                valueName="recepientsCardNumber"
                functions={functions}
              ></PaymentInput>
              <PaymentInput
                value={recepientsCardExpDate}
                inputName="Exp date (MM / YYYY)"
                inputType="month"
                valueName="recepientsCardExpDate"
                functions={functions}
              ></PaymentInput>
              <PaymentInput
                value={recepientsCardCVS}
                inputName="Card Security Number"
                inputType="text"
                valueName="recepientsCardCVS"
                functions={functions}
              ></PaymentInput>
            </div>
          )}
        </div>
        <button
          className="w-full bg-btnPrimary rounded-[50px] text-[20px] text-white font-bold py-[16px] mt-[30px]"
          onClick={decrementActive}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default PaymentDetails;
