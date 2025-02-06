import AboutCourse from "./AboutCourse";
import Banner from "./Banner";
import Courses from "./Courses";
import Guide from "./Guide";
import WhyCourse from "./WhyCourse";

const Home = () => {
   return (
      <div>
         <Banner />
         <Courses />
         <Guide />
         <AboutCourse />
         <WhyCourse />
      </div>
   );
};

export default Home;