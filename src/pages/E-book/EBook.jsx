import { Link } from "react-router-dom";
import eBook from '../../assets/eBook.jpg';

const EBook = () => {
   return (
      <div className="max-w-5xl mx-auto px-3 py-8 flex justify-center gap-16 flex-col md:flex-row">
         <div className="w-full basis-[50%]">
            <img src="https://storex.com.bd/media/book-new.png" alt="" className="w-full" />
         </div>
         <div className="w-full rounded-2xl bg-slate-100 basis-[45%]">
            <img src={eBook} alt="" className="w-full rounded-2xl" />
            <div className="flex items-center justify-between p-4">
               <h3 className="text-xl font-semibold">সাকসেস হ্যাক</h3>
               <div className="text-xl flex items-center space-x-3">
                  <del className="text-gray-800/80">৫০০ টাকা</del>
                  <span className="text-black font-semibold">২৫০ টাকা</span>
               </div>
            </div>
            <div className="flex items-center justify-between p-4 ">  
               <Link to="/e-book" className="bg-primary text-white rounded-lg p-3">আরও দেখুন</Link>
               <Link to="/e-book" className="border p-3 rounded-lg hover:bg-black hover:text-white">আরও দেখুন</Link>
            </div>
         </div>
      </div>
   );
};

export default EBook;