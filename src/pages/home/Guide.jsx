import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

const Guide = () => {
   return (
      <div className="max-w-7x mx-auto px-3 my-16 max-w-7xl flex justify-between flex-col md:flex-row">
         <div className="space-y-5 basis-[70%]">
            <h1 className="text-3xl font-semibold">আপনার সাথে আমাদের পথচলা</h1>
            <p className="text-lg text-[#696666]">ঝাঁপিয়ে পড়ুন এবং আপনার উদ্যোক্তা মনোভাবকে আলিঙ্গন করুন – আপনার আইডিয়াকে বাস্তবে রূপান্তর করার জন্য এখনকার চেয়ে ভাল সময় আর নেই!</p>
         </div>
         <div className="mt-6 md:mt-0">
            <Link to="/" className="btn flex items-center space-x-2 max-w-52 justify-center grow">
               <span>নিজেকে এগিয়ে</span> <MdArrowForward className="text-lg" />
            </Link>
         </div>

      </div>
   );
};

export default Guide;