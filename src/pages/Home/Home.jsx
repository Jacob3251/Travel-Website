import { useLocation } from "react-router-dom";
import BookingCta from "../../components/Cta/BookingCta";
import ContactCta from "../../components/Cta/ContactCta";
import Destinations from "../../components/Destinations/Destinations";
import Hero from "../../components/Hero/Home/Hero";
import HomePackages from "../../components/HomePackages/HomePackages";
import ServiceHome from "../../components/ServiceHome/ServiceHome";
import ServiceDetailHome from "../../components/Services/ServiceDetailHome";
import Testimonials from "../../components/Testimonials/Testimonials";
import DefaultLayout from "../../layouts/DefaultLayout";

function Home() {
  // const location = useLocation();
  // const from = location?.state?.from?.pathname || "/";
  return (
    <DefaultLayout>
      <Hero></Hero>
      <Destinations></Destinations>
      <ServiceHome></ServiceHome>
      <ContactCta></ContactCta>
      <ServiceDetailHome></ServiceDetailHome>
      <BookingCta></BookingCta>
      <HomePackages></HomePackages>
      <Testimonials></Testimonials>
    </DefaultLayout>
  );
}

export default Home;
