import { BiSolidQuoteAltRight } from "react-icons/bi";
import image from "../../assets/images/Testimonial/1.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./Testimonial.css";
import { useRef } from "react";
function Testimonials() {
  const swiperRef = useRef();
  return (
    <div className="px-[10px] md:px-[50px] my-[160px]">
      <div className="flex space-y-5 xl:space-y-0 xl:justify-between flex-col  xl:flex-row xl:items-start mb-[60px] xl:px-[30px]">
        <div className="text-[#333333] font-extrabold text-[32px]">
          Happy Customer Says
        </div>
        <div className="flex space-x-3">
          <button
            className="bg-[#e5e5e5] rounded-full w-[40px] h-[40px] flex justify-center items-center text-[24px]"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            className="bg-btnPrimary rounded-full w-[40px] h-[40px] flex justify-center items-center text-[24px]"
            onClick={() => swiperRef.current.slideNext()}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
      <div id="testimonial" className="  md:px-0 min-w-screen  min-h-[300px]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          // centeredSlides={true}
          watchSlidesProgress={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4220,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper1"
        >
          <SwiperSlide>
            <div className="w-full h-full p-[30px] rounded-[24px] border-2 border-[#EFEFEF] flex flex-col justify-center items-center">
              {/* img */}
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                <img src={image} alt="" />
              </div>
              {/* name */}
              <div className="text-[18px] text-[#333333] mt-[15px]">
                Lyod Gomez
              </div>
              <div>
                {/* upperquote */}
                <div className="text-[#FA8B02] text-opacity-10 text-[60px] -ml-[20px]">
                  <BiSolidQuoteAltRight />
                </div>
                {/* comment */}
                <div className="my-[10px] leading-[30px] text-[18px]">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure
                </div>
                {/* lowerquote */}
                <div className="flex justify-end items-center text-[#FA8B02] text-opacity-10 text-[60px] -mr-[20px]">
                  <BiSolidQuoteAltRight />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full p-[30px] rounded-[24px] border-2 border-[#EFEFEF] flex flex-col justify-center items-center">
              {/* img */}
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                <img src={image} alt="" />
              </div>
              {/* name */}
              <div className="text-[18px] text-[#333333] mt-[15px]">
                Lyod Gomez
              </div>
              <div>
                {/* upperquote */}
                <div className="text-[#FA8B02] text-opacity-10 text-[60px] -ml-[20px]">
                  <BiSolidQuoteAltRight />
                </div>
                {/* comment */}
                <div className="my-[10px] leading-[30px] text-[18px]">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure
                </div>
                {/* lowerquote */}
                <div className="flex justify-end items-center text-[#FA8B02] text-opacity-10 text-[60px] -mr-[20px]">
                  <BiSolidQuoteAltRight />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full p-[30px] rounded-[24px] border-2 border-[#EFEFEF] flex flex-col justify-center items-center">
              {/* img */}
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                <img src={image} alt="" />
              </div>
              {/* name */}
              <div className="text-[18px] text-[#333333] mt-[15px]">
                Lyod Gomez
              </div>
              <div>
                {/* upperquote */}
                <div className="text-[#FA8B02] text-opacity-10 text-[60px] -ml-[20px]">
                  <BiSolidQuoteAltRight />
                </div>
                {/* comment */}
                <div className="my-[10px] leading-[30px] text-[18px]">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure
                </div>
                {/* lowerquote */}
                <div className="flex justify-end items-center text-[#FA8B02] text-opacity-10 text-[60px] -mr-[20px]">
                  <BiSolidQuoteAltRight />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full p-[30px] rounded-[24px] border-2 border-[#EFEFEF] flex flex-col justify-center items-center">
              {/* img */}
              <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                <img src={image} alt="" />
              </div>
              {/* name */}
              <div className="text-[18px] text-[#333333] mt-[15px]">
                Lyod Gomez
              </div>
              <div>
                {/* upperquote */}
                <div className="text-[#FA8B02] text-opacity-10 text-[60px] -ml-[20px]">
                  <BiSolidQuoteAltRight />
                </div>
                {/* comment */}
                <div className="my-[10px] leading-[30px] text-[18px]">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure
                </div>
                {/* lowerquote */}
                <div className="flex justify-end items-center text-[#FA8B02] text-opacity-10 text-[60px] -mr-[20px]">
                  <BiSolidQuoteAltRight />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
