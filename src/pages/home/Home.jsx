import AboutCourse from "./AboutCourse";
import Banner from "./Banner";
import Courses from "./Courses";
import Guide from "./Guide";

const Home = () => {
   return (
      <div>
         <Banner />
         <Courses />
         <Guide />
         <AboutCourse />
      </div>
   );
};

export default Home;