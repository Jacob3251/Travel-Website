import { Toaster } from "react-hot-toast";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";

function DefaultLayout({ children }) {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default DefaultLayout;
