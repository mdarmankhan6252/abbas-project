import { Link } from "react-router-dom";
import eBook from '../../assets/eBook.jpg';

const EBook = () => {
   return (
      <div>
         <div className="max-w-5xl mx-auto px-8 py-8 flex justify-center gap-16 pt-20">
            <div className="w-full rounded-2xl bg-slate-100 max-w-xl mx-auto pb-4 shadow-[0_0_6px_0] shadow-gray-300">
               <img src={eBook} alt="" className="w-full rounded-2xl" />
               <div className="flex items-center justify-between pt-6 px-4 ">
                  <h3 className="font-semibold">সাকসেস হ্যাক</h3>
                  <div className="text-xl flex items-center space-x-3">
                     <del className="text-gray-800/80">৫০০ টাকা</del>
                     <span className="text-black font-semibold">২৫০ টাকা</span>
                  </div>
               </div>
               <div className="flex items-center justify-between p-4 gap-6">
                  <Link to="/e-book" className="bg-gradient-to-r from-primary to-[#1253cd] hover:from-[#1253cd] hover:to-primary duration-300  text-white rounded-lg p-4 grow text-center">ইবুকটি পড়ুন</Link>
                  <Link to="/e-book" className="border p-4 rounded-lg hover:bg-black hover:text-white grow text-center">অর্ডার করুন</Link>
               </div>
            </div>
         </div>

         {/* about us */}

         <div className="bg-gradient-to-r from-primary to-[#1253cd] py-16 text-white text-center px-8 mt-6 ">
            <h1 className=" flex flex-col items-center justify-center text-lg md:text-3xl font-semibold space-y-4 max-w-4xl mx-auto">  
               <span>আপনি যদি সত্যিই সফল হতে চান</span>
               <span>তবে এই বইটি আপনার প্রথম পদক্ষেপ হতে পারে</span>
            </h1>
            <h1 className="text-3xl md:text-5xl text-black font-bold py-5 max-w-4xl mx-auto">অর্ডার করুন</h1>

            <p className="font-light text-lg max-w-4xl mx-auto">এই বইটি শুধু একটি বই নয় এটি আপনার জীবনকে পরিবর্তন করার এক চমৎকার উপায় এ বইটি আপনাকে পথ দেখাবে,  পড়ুন আর আপনার জীবন বদলে ফেলুন</p>

            <Link target="_blank" to="https://www.facebook.com/profile.php?id=61572466610055" className="inline-block  bg-black text-white py-3 md:py-4 px-10 mt-6 rounded-lg hover:bg-transparent border-2  hover:border-white text-sm md:text-[16px]">যোগাযোগ করুন</Link>
            
         </div>
      </div>
   );
};

export default EBook;