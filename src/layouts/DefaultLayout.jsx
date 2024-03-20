import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";


function DefaultLayout({ children }) {
  
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}

export default DefaultLayout;
