import Destination from "./Destination";
import biketour from "../../assets/images/Destination/lucca-bike.png";
import wineTesting from "../../assets/images/Destination/wine-testing.png";
import tour from "../../assets/images/Destination/cinque-terre-tour.png";
import surroundings from "../../assets/images/Destination/siena-and-surroundings.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./DestinationSwiper.css";

import { Autoplay, Navigation } from "swiper/modules";
import { tours } from "../../assets/data";
// const data = [
//   {
//     id: 1,
//     title: "Lucca Bike Tour",
//     price: "34",
//     day: "EVERY DAY",
//     people: "3-5",
//     detail:
//       "A tour of the city and its surroundings led by a professional guide ...",
//     imglink: biketour,
//   },
//   {
//     id: 2,
//     title: "Wine tasting In Tuscany",
//     price: "104",
//     day: "MONDAY",
//     people: "10-50",
//     detail:
//       "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
//     imglink: wineTesting,
//   },
//   {
//     id: 3,
//     title: "Cinque Terre Tour",
//     price: "34",
//     day: "TO BE DECIDED",
//     people: "10-50",
//     detail:
//       "Visiting the 5 Terre is a must, and you can never go there enough ...",
//     imglink: tour,
//   },
//   {
//     id: 4,
//     title: "Siena and Surroundings",
//     price: "254",
//     day: "TO BE DECIDED",
//     people: "5-10",
//     detail:
//       "Visit the beautiful Siena and the cities that surround it to experience ...",
//     imglink: surroundings,
//   },
//   {
//     id: 4,
//     title: "Siena and Surroundings",
//     price: "254",
//     day: "TO BE DECIDED",
//     people: "5-10",
//     detail:
//       "Visit the beautiful Siena and the cities that surround it to experience ...",
//     imglink: surroundings,
//   },
//   {
//     id: 4,
//     title: "Siena and Surroundings",
//     price: "254",
//     day: "TO BE DECIDED",
//     people: "5-10",
//     detail:
//       "Visit the beautiful Siena and the cities that surround it to experience ...",
//     imglink: surroundings,
//   },
// ];
function Destinations() {
  return (
    <div className="w-full  px-[20px] xl:px-[150px] my-[100px] lg:my-[120px]">
      <div
        className="relative w-full min-h-[800px] lg:min-h-[680px]"
        id="destinations"
      >
        <h1 className="text-[32px] font-extrabold absolute top-0 z-10  destinationHeading">
          Explore Our Popular Destinantions{" "}
        </h1>

        <Swiper
          watchSlidesProgress={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {tours.map((item) => (
            <SwiperSlide key={item.id}>
              <Destination data={item}></Destination>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Destinations;
