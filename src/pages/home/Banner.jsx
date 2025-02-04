import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import banner from '../../assets/banner.jfif'

const Banner = () => {
   return (
      <div className="mx-3">
      <div
        className="max-w-7xl mx-auto px-8 my-12 py-20 border border-gray-200 rounded-lg flex items-center justify-between gap-6 flex-col md:flex-row"
        style={{ background: 'radial-gradient(at center, #c2d8f9 0%, #EFF4FC 100%)' }}
      >
        <div className="space-y-5 basis-[60%] ">
          <h1 className="text-3xl md:text-4xl font-semibold">
            <span className="text-primary font-bold font-serif">Eduking</span> এর লক্ষ্য সবাই হবে দক্ষ !
          </h1>
          <p className="font-light">দক্ষতার জগতে নিজেকে এগিয়ে নেওয়ার এখনই সময়</p>
          <Link to="/" className="btn flex items-center space-x-2 max-w-52 justify-center">
            <span>নিজেকে এগিয়ে</span> <MdArrowForward className="text-lg" />
          </Link>
          <p className="text-lg text-gray-800">
            অজুহাত নয়, এবার দক্ষতার পালা! ঘরে বসেই নতুন স্কিল শিখে নিজের ক্যারিয়ার গড়ুন. EduKing BD আপনার পাশে আছে
          </p>
        </div>
        <div className="basis-[40%]">
         <img src={banner} alt="" className="w-full rounded-2xl"/>
        </div>
      </div>
    </div>

   );
};

export default Banner;