import Card1 from "../../components/Card1";
import Card3 from "../../components/Card3";
import Card2 from "../../components/Card2";

const Courses = () => {
   return (
      <div className="mx-3">
         <div
            className="sm:py-12 py-6 rounded-lg max-w-7xl mx-auto px-6 border border-gray-200"
            style={{ background: 'radial-gradient(at center top, #d6e6ff 0%, #EFF4FC 100%)' }}
         >
            <div
               className="text-center space-y-4 max-w-2xl mx-auto px-3"
            >
               <h1
                  className="text-3xl md:text-4xl font-primary font-bold text-gray-800"
               >
                  Our Courses
               </h1>

               <p
                  className="font-primary text-[#3e3d3d] leading-7 text-lg"
               >
                  সফলতার জন্য সঠিক স্কিল দরকার। EduKing BD দেখাচ্ছে বাস্তব অভিজ্ঞতাভিত্তিক সঠিক গাইডলাইন, যা স্বল্প সময়ে আপনার ক্যারিয়ার কয়েকগুন সামনে এগিয়ে নিয়ে যাবে। আপনার আইডিয়াকে বাস্তবে রূপ দিন এবং সাফল্যের শিখরে পৌঁছান!
               </p>
            </div>

            <div
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
            >
               {/* course and it's path is here */}

               <Card1 link='/Mastering-YouTube-Shorts-Secret' />
               <Card2 link='/Contention-Creation-Pro' />
               <Card3 link='/Ai-Powered-Personal-Branding' />
               
            </div>
         </div>
      </div>
   );
};

export default Courses;