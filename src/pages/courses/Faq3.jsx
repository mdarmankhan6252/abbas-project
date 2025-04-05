import { useState } from "react";

// react icons
import { FaChevronDown } from "react-icons/fa6";

const Faq3 = () => {
   const accordingData = [
      {
         title: "এই কোর্সটি কাদের জন্য উপযুক্ত?",
         description: "এই কোর্সটি স্টুডেন্ট, ফ্রেশ গ্র্যাজুয়েট, চাকরিপ্রত্যাশী, ফ্রিল্যান্সার, ডিজিটাল মার্কেটার, এবং যারা নিজের পার্সোনাল ব্র্যান্ড ভ্যালু তৈরি করতে চান—তাদের জন্য পারফেক্ট!",
      },
      {
         title: "কোর্সটি সম্পন্ন করে আমি কী কী স্কিল শিখতে পারব?",
         description: "আপনি Personal Branding, AI Tools Utilization, Social Media Optimization, Meta Ad Campaigns, Portfolio Website Development, SEO, Professional CV & Cover Letter Writing, Job Hunting & Freelancing Techniques শিখতে পারবেন।",
      },
      {
         title: "কোর্সের শেষে কি কোনো সার্টিফিকেট দেওয়া হবে?",
         description: "হ্যাঁ! সফলভাবে কোর্স সম্পন্ন করলে EduKing BD থেকে একটি প্রফেশনাল সার্টিফিকেট পাবেন, যা আপনার ক্যারিয়ারে সহায়ক হবে।",
      },
      {
         title: "কোর্স করতে কি কোনো পূর্ব অভিজ্ঞতা প্রয়োজন?",
         description: "না, কোনো পূর্ব অভিজ্ঞতা না থাকলেও চলবে। শূন্য থেকে শুরু করে অ্যাডভান্স লেভেল পর্যন্ত শেখানো হবে।",
      },
      {
         title: "এই কোর্সটি কি অনলাইন নাকি অফলাইন?",
         description: "কোর্সটি অনলাইন ক্লাস হবে এবং আপনাদের সুবিধামতো সময় পোল এর মাধ্যমে নির্ধারণ করা হবে।",
      },
      {
         title: "অনলাইন ক্লাস কখন হবে?",
         description: "সপ্তাহে ২ দিন ক্লাস হবে ( ব্যাচের স্টুডেন্টেডের সকলের কথা বিবেচনা করে পোল এর মাধ্যমে সময় নির্বাচন করা হবে )",
      },
      {
         title: "কোর্স চলাকালীন কি কোনো প্র্যাকটিক্যাল প্রজেক্ট থাকবে?",
         description: "হ্যাঁ! লাইভ প্রজেক্ট, অ্যাসাইনমেন্ট এবং পারফরম্যান্স বেসড কনটেস্ট থাকবে, যেখানে বিজয়ীদের জন্য পুরস্কারের ব্যবস্থা রয়েছে।",
      },
      {
         title: "কীভাবে কোর্সে এনরোল করবো?",
         description: "সহজ! আমাদের ওয়েবসাইট থেকে রেজিস্ট্রেশন করুন অথবা সরাসরি আমাদের পেইজে মেসেজ করুন।",
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

export default Faq3;
