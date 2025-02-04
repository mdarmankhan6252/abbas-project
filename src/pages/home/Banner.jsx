import { MdArrowForwardIos } from "react-icons/md";
const Banner = () => {
   return (
      <div className="text-center py-20">
         <div className=" text-center space-y-6 flex items-center flex-col justify-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-primary font-semibold flex items-center flex-col gap-y-4"><span><span className="text-primary">নলেজ </span>থেকে স্কিল</span><span>গন্তব্য হউক <span className="text-primary">সফলতার</span> পথে</span></h1>
            <p className="font-primary text-[#828080] leading-7 text-[15px] sm:text-[16px]">লার্নিং এর এই ইজি দুনিয়ায়, হাজারো অজুহাতে নিজের সফলতাকে আটকে দিচ্ছেন নিজেই! সব অজুহাত ছাপিয়ে এখন ঘরে বসে স্কিল ডেভেলপ করুন দেশসেরা এক্সপার্টদের কাছে</p>
            <form className="w-full max-w-xl mx-auto flex items-center justify-center space-x-5 px-3">
               <div className="flex items-center justify-center  space-x-6 ">
                  <button type="submit" className="btn flex items-center space-x-2 cursor-pointer"><span>কোর্স ডিটেইলস</span> <MdArrowForwardIos className="-mb-1" /></button>
                  <button type="submit" className="btn flex items-center space-x-2 cursor-pointer "><span>যোগাযোগ করুন</span> <MdArrowForwardIos className="-mb-1" /></button>
               </div>
            </form>
         </div>

      </div>
   );
};

export default Banner;