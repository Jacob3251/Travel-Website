import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./IndividualPackageCarousel.css";
import { FreeMode, Thumbs } from "swiper/modules";
function IndividualPackageCarousel({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div id="individual-package-carousel w-full relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          marginBottom: "10px",
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default IndividualPackageCarousel;
