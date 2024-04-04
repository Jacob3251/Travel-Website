import Destination from "../../components/Destinations/Destination";
import { tours } from "../../assets/data";
function TourPackagesSection() {
  return (
    <div className="pt-[120px] pb-[40px]">
      <h1 className="text-[32px] font-extrabold px-[20px]   py-10 md:px-[40px]">
        Top Packages
      </h1>
      <div className="px-[20px] pb-10 md:px-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-[50px] sm:gap-x-[33px]">
        {tours.map((item) => (
          <Destination key={item.id} data={item}></Destination>
        ))}
      </div>
    </div>
  );
}

export default TourPackagesSection;
