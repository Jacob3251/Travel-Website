import { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import Stepper from "react-stepper-horizontal";
import image1 from "../../assets/images/individualPackages/biketour/gallery/1.png";
import BookingDetails from "../../components/Booking/BookingDetails/BookingDetails";
import RecepientDetails from "../../components/Booking/RecepientDetails/RecepientDetails";
import PaymentDetails from "../../components/Booking/PaymentDetails/PaymentDetails";
import { LuCalendarDays } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { format } from "date-fns";
import { FaCheck } from "react-icons/fa6";
import toast from "react-hot-toast";

import isEmail from "validator/lib/isEmail";
import { isCreditCard, isMobilePhone } from "validator";
import CompletedBooking from "../../components/Booking/CompletedBooking/CompletedBooking";

function Booking() {
  const [activeStep, setActiveStep] = useState(0);
  const [bookingInfo, setBookingInfo] = useState({
    date: "",
    time: "",
    adultNumber: 1,
    childrenNumber: 0,
    infantNumber: 0,
    recepientsName: "",
    recepientsSurName: "",
    recepientsTelephone: "",
    recepientsEmail: "",
    recepientsCardNumber: "",
    recepientsCardExpDate: "",
    recepientsCardCVS: "",
    grandTotal: 0,
  });

  const incrementActive = () => {
    setActiveStep(activeStep + 1);
  };
  const decrementActive = () => {
    setActiveStep(activeStep - 1);
  };
  const [bookingError, setBookingError] = useState("");

  const [paymentFinished, setPaymentFinished] = useState(false);
  const {
    date,
    time,
    adultNumber,
    childrenNumber,
    infantNumber,
    recepientsName,
    recepientsSurName,
    recepientsTelephone,
    recepientsEmail,
    recepientsCardNumber,
    recepientsCardExpDate,
    recepientsCardCVS,
    grandTotal,
  } = bookingInfo;
  const onChange = (e) => {
    setBookingInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleActive = () => {
    if (activeStep !== 2) {
      if (activeStep === 0) {
        if ((date && time) !== "") {
          setActiveStep(activeStep + 1);
        } else {
          toast.error(`Fill all the fields properly`);
        }
      }
      if (activeStep === 1) {
        if (
          (recepientsName && recepientsSurName) !== "" &&
          isMobilePhone(recepientsTelephone) &&
          isEmail(recepientsEmail)
        ) {
          setActiveStep(activeStep + 1);
        } else {
          if (
            !isEmail(recepientsEmail) &&
            recepientsName === "" &&
            recepientsSurName === "" &&
            recepientsTelephone === ""
          ) {
            toast.error(`Fill all the fields properly`);
          } else if (!isEmail(recepientsEmail)) {
            toast.error(`Enter a valid email`);
          } else if (recepientsName === "") {
            toast.error(`Enter a name properly`);
          } else if (recepientsSurName === "") {
            toast.error(`Enter a surname properly`);
          } else if (recepientsTelephone === "") {
            toast.error(`Enter a telephone number properly`);
          }

          return;
        }
      }
    }
    if (activeStep === 2) {
      if (
        (recepientsCardExpDate && recepientsCardCVS) !== "" &&
        isCreditCard(recepientsCardNumber, [
          "discover",
          "amex",
          "mastercard",
          "unionpay",
          "visa",
        ])
      ) {
        setPaymentFinished(true);
      } else {
        if (
          !isCreditCard(recepientsCardNumber) &&
          recepientsCardExpDate === "" &&
          recepientsCardCVS === ""
        ) {
          toast.error(`Fill all the fields properly`);
        } else if (!isCreditCard(recepientsCardNumber)) {
          toast.error(`Enter a card number`);
        } else if (recepientsCardExpDate === "") {
          toast.error(`Enter exp date`);
        } else if (recepientsCardCVS === "") {
          toast.error(`Enter cvs number`);
        }

        return;
      }
    }
  };
  let todayDate = new Date();
  let recentDate = `${todayDate.getFullYear()}-${
    todayDate.getMonth() + 1
  }-${todayDate.getDate()}`;
  return (
    <DefaultLayout>
      {/* stepper */}
      {!paymentFinished && (
        <div>
          <div className="mt-[100px] xl:mt-5 px-2 md:px-[80px] xl:px-[120px]">
            <Stepper
              activeColor="#FA8B02"
              completeColor="#FA8B02"
              activeTitleColor="#FA8B02"
              completeTitleColor="#FA8B02"
              completeBarColor="#FA8B02"
              steps={[
                { title: "Booking Details" },
                { title: "Your Details" },
                { title: "Payment" },
              ]}
              activeStep={activeStep}
            />
          </div>
          {/* stepper components */}
          <div className="my-8 md:my-16 flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start  lg:space-x-[80px] xl:space-x-[120px] px-[20px] md:px-[50px] xl:px-[120px]">
            <div className="max-w-[600px] w-full mb-[50px]">
              {activeStep === 0 && (
                <BookingDetails
                  increment={{ incrementActive }}
                  info={bookingInfo}
                  functions={{ onChange }}
                  setBookingInfo={setBookingInfo}
                ></BookingDetails>
              )}
              {activeStep === 1 && (
                <RecepientDetails
                  increment={{ incrementActive }}
                  decrement={{ decrementActive }}
                  info={bookingInfo}
                  functions={{ onChange }}
                  setBookingInfo={{ setBookingInfo }}
                ></RecepientDetails>
              )}
              {activeStep === 2 && (
                <PaymentDetails
                  increment={{ incrementActive }}
                  decrement={{ decrementActive }}
                  info={bookingInfo}
                  functions={{ onChange }}
                  setBookingInfo={{ setBookingInfo }}
                ></PaymentDetails>
              )}
            </div>
            {/* card */}
            <div className="animate__animated animate__fadeInDown border-2 border-[#333333] border-opacity-10 w-full max-w-[600px] rounded-[24px] p-[30px]">
              <h1 className="text-[24px] font-extrabold mb-[20px]">
                Your Tickets Overview
              </h1>
              <div className="py-2 flex flex-col md:flex-row space-x-[20px] w-full h-auto md:h-[150px]  text-[#333333] border-b-2 border-[#333333] border-opacity-10">
                <img
                  className="h-[150px] mb-5 md:mb-0 md:h-full object-cover rounded-lg"
                  src={image1}
                  alt=""
                />
                <div>
                  <h1 className="text-[18px] font-extrabold mb-[10px]">
                    Wine Testing in Tuscany
                  </h1>
                  <div className="flex justify-start items-center text-[18px] font-semibold mb-[10px]">
                    <LuCalendarDays className="mr-[10px] text-btnPrimary " />{" "}
                    {date == ""
                      ? format(recentDate, "EEE, dd MMM yyyy")
                      : format(date, "EEE, dd MMM yyyy")}
                  </div>
                  <div className="flex justify-start items-center text-[18px] font-semibold">
                    <FiClock className="mr-[10px] text-btnPrimary " />{" "}
                    {time == "" ? "15.00" : time}
                  </div>
                </div>
              </div>
              <div className="w-full py-[20px] border-b-2 border-[#333333] border-opacity-10">
                <div className="py-[20px] text-[20px]">
                  <div className="flex w-full justify-between">
                    <div className="flex items-center">
                      <div className="bg-[#EFEFEF] h-[35px] w-[35px] font-bold flex justify-center items-center rounded-full text-[#333333] mr-[10px]">
                        {adultNumber}
                      </div>
                      <div>Child (18+) (€32.00)</div>
                    </div>
                    <div className="font-semibold">€{adultNumber * 32}</div>
                  </div>
                </div>
                <div className="py-[20px] text-[20px]">
                  <div className="flex w-full justify-between">
                    <div className="flex items-center">
                      <div className="bg-[#EFEFEF] h-[35px] w-[35px] font-bold flex justify-center items-center rounded-full text-[#333333] mr-[10px]">
                        {childrenNumber}
                      </div>
                      <div>Child (6-17)</div>
                    </div>
                    <div className="font-semibold">€{childrenNumber * 22}</div>
                  </div>
                </div>
                <div className="py-[20px] text-[20px]">
                  <div className="flex w-full justify-between">
                    <div className="flex items-center">
                      <div className="bg-[#EFEFEF] h-[35px] w-[35px] font-bold flex justify-center items-center rounded-full text-[#333333] mr-[10px]">
                        {infantNumber}
                      </div>
                      <div>Infant (0-5)</div>
                    </div>
                    <div className="font-semibold">€{infantNumber * 0}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full text-[24px] text-[#333333] py-[20px] flex justify-between items-center">
                  <div className="font-bold">Total Price</div>
                  <div className="text-btnPrimary font-bold">
                    €{adultNumber * 32 + childrenNumber * 22 + 0}
                  </div>
                </div>
                <div className="w-full">
                  <button
                    onClick={() => handleActive()}
                    className="w-full bg-btnPrimary rounded-[50px] text-[20px] text-white font-bold py-[16px]"
                  >
                    Go to the Next Step
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {paymentFinished && <CompletedBooking></CompletedBooking>}
    </DefaultLayout>
  );
}

export default Booking;
