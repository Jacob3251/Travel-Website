import biketour from "../assets/images/Destination/lucca-bike.png";
import wineTesting from "../assets/images/Destination/wine-testing.png";
import tour from "../assets/images/Destination/cinque-terre-tour.png";
import surroundings from "../assets/images/Destination/siena-and-surroundings.png";
import luccaHills from "../assets/images/Destination/lucca-hills.png";
//thumbnail carousel images
// bike tour
import carousel1 from "../assets/images/individualPackages/biketour/1.png";
import carousel2 from "../assets/images/individualPackages/biketour/2.png";
import carousel3 from "../assets/images/individualPackages/biketour/3.png";
import carousel4 from "../assets/images/individualPackages/biketour/4.png";
// wine testing
import carousel5 from "../assets/images/individualPackages/winetesting/1.png";
import carousel6 from "../assets/images/individualPackages/winetesting/2.png";
import carousel7 from "../assets/images/individualPackages/winetesting/3.png";
import carousel8 from "../assets/images/individualPackages/winetesting/4.png";
// cinque terre tour
import carousel9 from "../assets/images/individualPackages/cinqueTerreTour/1.png";
import carousel10 from "../assets/images/individualPackages/cinqueTerreTour/2.png";
import carousel11 from "../assets/images/individualPackages/cinqueTerreTour/3.png";
import carousel12 from "../assets/images/individualPackages/cinqueTerreTour/4.png";
// siena and surrounding
import carousel13 from "../assets/images/individualPackages/siennaandsurroundings/1.png";
import carousel14 from "../assets/images/individualPackages/siennaandsurroundings/2.png";
import carousel15 from "../assets/images/individualPackages/siennaandsurroundings/3.png";
import carousel16 from "../assets/images/individualPackages/siennaandsurroundings/4.png";
// lucca hills
import carousel17 from "../assets/images/individualPackages/tourLuccaHills/1.png";
import carousel18 from "../assets/images/individualPackages/tourLuccaHills/2.png";
import carousel19 from "../assets/images/individualPackages/tourLuccaHills/3.png";
import carousel20 from "../assets/images/individualPackages/tourLuccaHills/4.png";
//******************* */ gallery images
import galleryImg1 from "../assets/images/individualPackages/biketour/gallery/1.png";
import galleryImg2 from "../assets/images/individualPackages/biketour/gallery/2.png";
import galleryImg3 from "../assets/images/individualPackages/biketour/gallery/3.png";
import galleryImg4 from "../assets/images/individualPackages/biketour/gallery/4.png";
export const tours = [
  {
    id: 1,
    title: "Lucca Bike Tour",
    price: "34",
    day: "EVERY DAY",
    people: "3-5",
    detail:
      "A tour of the city and its surroundings led by a professional guide ...",
    imglink: biketour,
    galleryImages: [galleryImg1, galleryImg2, galleryImg3, galleryImg4],
    carouselImages: [carousel1, carousel2, carousel3, carousel4],
  },
  {
    id: 2,
    title: "Wine tasting In Tuscany",
    price: "104",
    day: "MONDAY",
    people: "10-50",
    detail:
      "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
    imglink: wineTesting,
    galleryImages: [galleryImg1, galleryImg2, galleryImg3, galleryImg4],
    carouselImages: [carousel5, carousel6, carousel7, carousel8],
  },
  {
    id: 3,
    title: "Cinque Terre Tour",
    price: "34",
    day: "TO BE DECIDED",
    people: "10-50",
    detail:
      "Visiting the 5 Terre is a must, and you can never go there enough ...",
    imglink: tour,
    galleryImages: [galleryImg1, galleryImg2, galleryImg3, galleryImg4],
    carouselImages: [carousel9, carousel10, carousel11, carousel12],
  },
  {
    id: 4,
    title: "Siena and Surroundings",
    price: "254",
    day: "TO BE DECIDED",
    people: "5-10",
    detail:
      "Visit the beautiful Siena and the cities that surround it to experience ...",
    imglink: surroundings,
    galleryImages: [galleryImg1, galleryImg2, galleryImg3, galleryImg4],
    carouselImages: [carousel13, carousel14, carousel15, carousel16],
  },
  {
    id: 5,
    title: "Tour of the Lucca Hills",
    price: "34",
    day: "TO BE DECIDED",
    people: "5-10",
    detail:
      "Visit the beautiful Siena and the cities that surround it to experience ...",
    imglink: luccaHills,
    galleryImages: [galleryImg1, galleryImg2, galleryImg3, galleryImg4],
    carouselImages: [carousel17, carousel18, carousel19, carousel20],
  },
];
