import AboutBanner from "./AboutBanner";
import Goal from "./Goal";
import Why from "./Why";

const AboutUs = () => {
   return (
      <div className="max-w-7xl mx-auto px-3 my-10">
         <AboutBanner />
         <Why />
         <Goal />
      </div>
   );
};

export default AboutUs;