import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../../layouts/DefaultLayout";

import { FaCheck } from "react-icons/fa6";
function CompletedBooking() {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <div className="w-full h-[calc(100vh_*_0.5)]  flex flex-col justify-center items-center">
        <div className="mb-[18px] w-[50px] aspect-square rounded-full text-white text-[28px] bg-btnPrimary flex justify-center items-center">
          <FaCheck />
        </div>
        <h1 className="text-[24px] mb-[8px] font-bold">
          Your order is complete
        </h1>
        <h4 className="mb-[18px] text-[18px] font-light">
          You will be receiving a confirmation email with order details.
        </h4>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-btnPrimary border-2 border-btnPrimary font-semibold text-[18px] px-[16px] py-[8px] rounded-[50px]"
        >
          Go to the Home Page
        </button>
      </div>
    </DefaultLayout>
  );
}

export default CompletedBooking;
