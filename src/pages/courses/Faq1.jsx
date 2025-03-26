import { useState } from "react";

// react icons
import { FaChevronDown } from "react-icons/fa6";

const Faq1 = () => {
   const accordingData = [
      {
         title: "এই কোর্সটি কাদের জন্য উপযুক্ত?",
         description: "একেবারে নতুন থেকে ইন্টারমিডিয়েট থেকে সবার জন্য পারফেক্ট!",
      },
      {
         title: "এই কোর্সের জন্য কি কোন প্রয়োজনীয় দক্ষতা লাগবে?",
         description: "না, এই কোর্সটি সম্পূর্ণ বিগিনার ফ্রেন্ডলি। আপনি যদি ইউটিউব সম্পর্কে কিছুই না জানেন, তবুও এই কোর্সটি আপনার জন্য।",
      },
      {
         title: "এই কোর্সে কি মোবাইল ফোন ব্যবহার করেই সব শেখানো হবে?",
         description: "হ্যাঁ, এই কোর্সে আপনি শুধুমাত্র মোবাইল ফোন ব্যবহার করে ইউটিউব চ্যানেল তৈরি, কনটেন্ট তৈরি ও এডিটিং এবং সকল কার্যকরী টিপস এন্ড ট্রিক্স  শিখবেন।",
      },
      {
         title: " ইউটিউব থেকে আয় করতে কত সময় লাগতে পারে?",
         description: "ধারাবাহিকভাবে কাজ করলে 2-3 মাসের মধ্যে মনিটাইজেশন পাওয়া সম্ভব",
      },
      {
         title: "কোর্সের জন্য কি কোন সফটওয়্যার বা অ্যাপ কিনতে হবে?",
         description: "প্রয়োজনীয় সকল সফটওয়্যার বা অ্যাপ আমরা ফ্রিতে দিয়ে থাকবো",
      }
   ];

   const [isAccordingOpen, setIsAccordingOpen] = useState(null);

   const handleClick = (index) => {
      setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));
   };

   return (
      <div className="flex gap-3 flex-col w-full">
         {accordingData?.map((according, index) => (
            <article
               key={index}
               className="border px-3 border-gray-200 rounded py-3 bg-slate-50 overflow-visible"
            >
               <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleClick(index)}
               >
                  <h2 className="font-[600] text-lg">{according.title}</h2>

                  <FaChevronDown
                     className={`min-w-[1.2rem] text-[1.2rem] text-text transition-all duration-300 ${
                        isAccordingOpen === index ? "rotate-[180deg]" : ""
                     }`}
                  />
               </div>
               <div
                  className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                     isAccordingOpen === index
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                  }`}
               >
                  <p className="text-[#424242] text-[0.9rem] overflow-hidden">
                     {according.description}
                  </p>
               </div>
            </article>
         ))}
      </div>
   );
};

export default Faq1;
