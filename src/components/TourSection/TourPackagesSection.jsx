import biketour from "../../assets/images/Destination/lucca-bike.png";
import wineTesting from "../../assets/images/Destination/wine-testing.png";
import tour from "../../assets/images/Destination/cinque-terre-tour.png";
import surroundings from "../../assets/images/Destination/siena-and-surroundings.png";
import Destination from "../../components/Destinations/Destination";
const data = [
  {
    id: 1,
    title: "Lucca Bike Tour",
    price: "34",
    day: "EVERY DAY",
    people: "3-5",
    detail:
      "A tour of the city and its surroundings led by a professional guide ...",
    imglink: biketour,
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
  },
];
function TourPackagesSection() {
  return (
    <div className="pt-[120px] pb-[40px]">
      <h1 className="text-[32px] font-extrabold px-[20px]   py-10 md:px-[40px]">
        Top Packages
      </h1>
      <div className="px-[20px] pb-10 md:px-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[50px] sm:gap-x-[33px]">
        {data.map((item) => (
          <Destination key={item.id} data={item}></Destination>
        ))}
      </div>
    </div>
  );
}

export default TourPackagesSection;
