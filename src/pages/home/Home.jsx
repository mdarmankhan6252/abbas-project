import AboutCourse from "./AboutCourse";
import Banner from "./Banner";
import CallUs from "./CallUs";
import Courses from "./Courses";
import Guide from "./Guide";
import Testimonials from "./Testimonials";
import WhyCourse from "./WhyCourse";

const Home = () => {
   return (
      <div>
         <Banner />
         <Courses />
         <Guide />
         <AboutCourse />
         <WhyCourse />
         <Testimonials />
         <CallUs />
      </div>
   );
};

export default Home;