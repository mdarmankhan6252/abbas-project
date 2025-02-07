import { Link } from "react-router-dom";

const CallUs = () => {
   return (
      <div className="bg-black py-16">
         <div className="flex sm:items-center sm:justify-between px-3 max-w-7xl mx-auto flex-col sm:flex-row ">
            <div className="text-white space-y-4">
               <h2 className="text-2x
                md: text-3xl">কথা বলুন আমাদের এক্সপার্ট এর সাথে! কল করুন</h2>
               <h1 className="text-3xl font-semibold text-[#6392f7]">+880 100000000</h1>

            </div>
            <div className="pt-4">
               <Link to='tel:+8801875778050' className="btn inline-block" style={{ padding: '14px 30px' }}>যোগাযোগ</Link>
            </div>
         </div>
      </div>
   );
};

export default CallUs;