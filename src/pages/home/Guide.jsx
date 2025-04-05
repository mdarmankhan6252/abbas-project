import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

const Guide = () => {
   return (
      <div className="max-w-7x mx-auto px-3 my-16 max-w-7xl flex justify-between flex-col md:flex-row">
         <div className="space-y-5 basis-[70%]">
            <h1 className="text-3xl font-semibold">শেখা যখন হয় সহজ, সাফল্য তখন সময়ের ব্যাপার!</h1>
            <p className="text-lg text-[#696666]">শুধু শেখাই নয়, আমরা আপনাকে দক্ষ করে তুলতে চাই। বাস্তব অভিজ্ঞতা, লাইভ প্রজেক্ট এবং এক্সপার্টদের গাইডলাইন নিয়ে আমরা আছি আপনার পাশে। নতুন কিছু শিখুন, দক্ষতা বাড়ান, নিজেকে প্রস্তুত করুন এবং আয় করুন!</p>
         </div>
         <div className="mt-6 md:mt-0">
            <Link to="/course" className="btn flex items-center space-x-2 max-w-52 justify-center grow">
               <span>শেখা শুরু করুন</span> <MdArrowForward className="text-lg" />
            </Link>
         </div>

      </div>
   );
};

export default Guide;