import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Root = () => {
   return (
      <div>
         <Nav />

         <div className="py-16">
            <ScrollToTop />
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default Root;