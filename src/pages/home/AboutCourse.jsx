import { MdOutlineTask, MdSupportAgent } from "react-icons/md";
import { PiBookOpenUser } from "react-icons/pi";

const AboutCourse = () => {
   const courses = [
      {
         icon: <PiBookOpenUser />,
         icon_color: '#1CAB55',
         title: 'কোর্স এনরোলমেন্ট',
         description: 'কোর্স রেজিস্ট্রেশন করে পেমেন্ট করুন সম্পূর্ণ করুন, দ্রুতই কোর্সের এক্সেস পেয়ে যাবেন।'
      },
      {
         icon: <MdOutlineTask />,
         icon_color: '#EE7F50',
         title: 'অ্যাসাইনমেন্ট',
         description: 'প্রাকটিক্যাল অ্যাসাইনমেন্টের মাধ্যমে শিখুন, প্রয়োগ করুন, আর দক্ষ হয়ে উঠুন'
      },
      {
         icon: <MdSupportAgent />,
         icon_color: '#5271FF',
         title: 'সাপোর্টিভ কমিউনিটি',
         description: 'আমাদের কমিউনিটিতে যুক্ত করে দেয়া হবে, যেখানে সকল মেন্টর এবং স্কিল্ড লার্নারদের সাপোর্ট পাবে।'
      }
   ];

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-3">
         {courses.map((course, i) => (
            <div 
               key={i} 
               className="p-6 rounded-lg border border-gray-200 bg-[#EFF4FC] hover:shadow-[0px_0px_7px_0] hover:shadow-blue-400 duration-300"
               style={{ background: "radial-gradient(at bottom right, #c2d8f9 0%, #EFF4FC 100%)" }}
            >
               <div 
                  style={{ backgroundColor: course.icon_color }}
                  className="w-12 h-12 flex items-center justify-center text-white rounded-lg"
               >
                  <span className="text-3xl">{course.icon}</span>
               </div>
               
               <div>
                  <h3 className="text-xl font-semibold mt-4 text-primary">{course.title}</h3>
                  <p className="text-gray-600 mt-3 text-lg">{course.description}</p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default AboutCourse;