
import { useState } from "react";

// react icons
import { FaChevronDown } from "react-icons/fa6";

const Faq = () => {
   const accordingData = [
      {
         title: "এই কোর্সটি কাদের জন্য ?",
         description:
            "আপনি যদি এক্সপার্ট মার্কেটার দের মতো করে ডেটা নির্ভর ফেসবুক এড রান করতে চান; তাহলে এই কোর্স টি আপনার জন্য। ফেসবুকে এড রান শিখতে পেইড কোর্স করার প্রয়োজন হয় না, ইউটিউব সার্চ করলেই পারা যায়। ফেসবুক এড এর আসল খেলা স্ট্রাটিজিতে! মানুষের সাইকোলজিকে যতো ভালোভাবে ক্রাক করতে পারবেন আপানার এড ততো ভালো পারফর্ম করবে। ইফেক্টিভ এড রান করার জন্য শুরু থেকে যা কিছু জানার লাগে Customer journey map, Strategy, data analysis এবং Facebook marketing এর সকল টুলস সম্ভন্ধে জানতে পারবেন এই কোর্সে। একটা ক্যাম্পেইনকে কিভাবে optimize করতে হয়, কেম্পেইন স্ট্রাটিজি টা কিভাবে সাজাতে হয়, কিভাবে রিটার্গেটিং করতে হয়, রিটার্গেট এর স্ট্রাটিজি কেমন হবে, কোন সাইজের ছবি বা ভিডিও দিয়ে এড রান করলে বেটার রেজাল্ট আসবে, কিভাবে ট্রেকিং করতে হয়, ab testing, campaign budget optimization, conversion rate optimization, Ad scaling সবকিছুই; সব কিছু মানে সবকিছুই পাবেন এক কোর্সে! facebook ads a-z এই কোর্সে শেখানো হয়েছে আপনি আপনার personal business কিংবা অন্যের বিজনেসের জন্য কিভাবে এড রান করলে কম খরচে বেশি সেল জেনারেট করতে পারবেন।",
      },
      {
         title: "এই কোর্সটি অন্য সকল কোর্স থেকে কিভাবে আলাদা?",
         description:
            "আপনি যদি এক্সপার্ট মার্কেটার দের মতো করে ডেটা নির্ভর ফেসবুক এড রান করতে চান; তাহলে এই কোর্স টি আপনার জন্য। ফেসবুকে এড রান শিখতে পেইড কোর্স করার প্রয়োজন হয় না, ইউটিউব সার্চ করলেই পারা যায়। ফেসবুক এড এর আসল খেলা স্ট্রাটিজিতে! মানুষের সাইকোলজিকে যতো ভালোভাবে ক্রাক করতে পারবেন আপানার এড ততো ভালো পারফর্ম করবে। ইফেক্টিভ এড রান করার জন্য শুরু থেকে যা কিছু জানার লাগে Customer journey map, Strategy, data analysis এবং Facebook marketing এর সকল টুলস সম্ভন্ধে জানতে পারবেন এই কোর্সে। একটা ক্যাম্পেইনকে কিভাবে optimize করতে হয়, কেম্পেইন স্ট্রাটিজি টা কিভাবে সাজাতে হয়, কিভাবে রিটার্গেটিং করতে হয়, রিটার্গেট এর স্ট্রাটিজি কেমন হবে, কোন সাইজের ছবি বা ভিডিও দিয়ে এড রান করলে বেটার রেজাল্ট আসবে, কিভাবে ট্রেকিং করতে হয়, ab testing, campaign budget optimization, conversion rate optimization, Ad scaling সবকিছুই; সব কিছু মানে সবকিছুই পাবেন এক কোর্সে! facebook ads a-z এই কোর্সে শেখানো হয়েছে আপনি আপনার personal business কিংবা অন্যের বিজনেসের জন্য কিভাবে এড রান করলে কম খরচে বেশি সেল জেনারেট করতে পারবেন।",
      },
      {
         title: "Facebook Ads Mastermind কোর্স সম্পর্কে",
         description:
            "আপনি যদি এক্সপার্ট মার্কেটার দের মতো করে ডেটা নির্ভর ফেসবুক এড রান করতে চান; তাহলে এই কোর্স টি আপনার জন্য। ফেসবুকে এড রান শিখতে পেইড কোর্স করার প্রয়োজন হয় না, ইউটিউব সার্চ করলেই পারা যায়। ফেসবুক এড এর আসল খেলা স্ট্রাটিজিতে! মানুষের সাইকোলজিকে যতো ভালোভাবে ক্রাক করতে পারবেন আপানার এড ততো ভালো পারফর্ম করবে। ইফেক্টিভ এড রান করার জন্য শুরু থেকে যা কিছু জানার লাগে Customer journey map, Strategy, data analysis এবং Facebook marketing এর সকল টুলস সম্ভন্ধে জানতে পারবেন এই কোর্সে। একটা ক্যাম্পেইনকে কিভাবে optimize করতে হয়, কেম্পেইন স্ট্রাটিজি টা কিভাবে সাজাতে হয়, কিভাবে রিটার্গেটিং করতে হয়, রিটার্গেট এর স্ট্রাটিজি কেমন হবে, কোন সাইজের ছবি বা ভিডিও দিয়ে এড রান করলে বেটার রেজাল্ট আসবে, কিভাবে ট্রেকিং করতে হয়, ab testing, campaign budget optimization, conversion rate optimization, Ad scaling সবকিছুই; সব কিছু মানে সবকিছুই পাবেন এক কোর্সে! facebook ads a-z এই কোর্সে শেখানো হয়েছে আপনি আপনার personal business কিংবা অন্যের বিজনেসের জন্য কিভাবে এড রান করলে কম খরচে বেশি সেল জেনারেট করতে পারবেন।",
      }
   ];

   const [isAccordingOpen, setIsAccordingOpen] = useState(50);

   const handleClick = (index) =>
      setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

   return (
      <div className="flex gap-3 flex-col w-full">
         {accordingData?.map((according, index) => (
            <article
               key={index}
               className="border px-3 border-gray-200 rounded py-3 bg-slate-50"
            >
               <div
                  className="flex gap-2 cursor-pointer items-center justify-between w-full"
                  onClick={() => handleClick(index)}
               >
                  <h2 className=" font-[600] text-lg">
                     {according.title}
                  </h2>
                  <p>
                     <FaChevronDown
                        className={`text-[1.2rem] text-text transition-all duration-300 ${isAccordingOpen === index &&
                           "rotate-[180deg] "
                           }`}
                     />
                  </p>
               </div>
               <div
                  className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordingOpen === index
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

export default Faq;