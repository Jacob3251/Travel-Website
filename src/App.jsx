import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import TourPackages from "./pages/TourPackages/TourPackages";
import ContactUs from "./pages/ContactUs/ContactUs";
import IndividualPackage from "./pages/IndividualPackage/IndividualPackage";
import Booking from "./pages/Booking/Booking";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/about-us",
      element: <AboutUs></AboutUs>,
    },
    {
      path: "/tour-packages",
      element: <TourPackages></TourPackages>,
    },
    {
      path: "/tour-packages/:id",
      element: <IndividualPackage></IndividualPackage>,
    },
    {
      path: "/contact-us",
      element: <ContactUs></ContactUs>,
    },
    {
      path: "/booking",
      element: <Booking></Booking>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
