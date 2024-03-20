import Hero from "../../components/Hero/About/Hero";
import DefaultLayout from "../../layouts/DefaultLayout";
import Testimonials from "../../components/Testimonials/Testimonials";
import AboutPromotion from "../../components/AboutPromotion/AboutPromotion";
import AboutUsBanner from "../../components/Banners/AboutUsBanner";
function AboutUs() {
  return (
    <DefaultLayout>
      <Hero></Hero>
      <AboutPromotion></AboutPromotion>
      <AboutUsBanner></AboutUsBanner>
      <Testimonials></Testimonials>
    </DefaultLayout>
  );
}

export default AboutUs;
