import TourPackagesSection from "../../components/TourSection/TourPackagesSection";
import DefaultLayout from "../../layouts/DefaultLayout";
import BookingCta from "../../components/Cta/BookingCta";
import Testimonials from "../../components/Testimonials/Testimonials";
import TourServiceSection from "../../components/TourSection/TourServiceSection";

function TourPackages() {
  return (
    <DefaultLayout>
      <TourPackagesSection></TourPackagesSection>
      <TourServiceSection></TourServiceSection>
      <BookingCta></BookingCta>
      <Testimonials></Testimonials>
    </DefaultLayout>
  );
}

export default TourPackages;
