import { useState } from "react";

// react icons
import { FaChevronDown } from "react-icons/fa6";

const Faq2 = () => {
   const accordingData = [
      {
         title: "এই কোর্সটি কাদের জন্য উপযুক্ত?",
         description: "এই কোর্সটি বিশেষভাবে ডিজাইন করা হয়েছে যারা ফেইসবুক এবং ইউটিউব থেকে কন্টেন্ট ক্রিয়েটর হয়ে আয় করতে চান, কিন্তু সঠিক পদ্ধতিতে কিভাবে শুরু করবেন এবং দ্রুত সফলতা পাবেন তা জানেন না।",
      },
      {
         title: "এই কোর্সের জন্য কি কোন প্রয়োজনীয় দক্ষতা লাগবে?",
         description: "না, এই কোর্সটি একেবারে বিগিনার ফ্রেন্ডলি ভাবে তৈরি করা হয়েছে। আপনি যদি সম্পর্কে, ভিডিও তৈরি করা বা এডিটিং সম্পর্কে কিছুই না জানেন, তবুও আপনি এই কোর্স থেকে পূর্ণাঙ্গ শিখতে পারবেন।",
      },
      {
         title: "এই কোর্সে কি মোবাইল ফোন ব্যবহার করেই সব শেখানো হবে?",
         description: "হ্যাঁ! আমাদের কোর্সটি এমনভাবে ডিজাইন করা হয়েছে যাতে আপনি শুধুমাত্র মোবাইল ফোন ব্যবহার করেই প্রফেশনাল ভিডিও শুটিং, এডিটিং ও ভয়েসওভার পূর্ণাঙ্গ কন্টেন্ট ক্রিয়েশন শিখতে পারেন এবং ফেইসবুক ও ইউটিউব থেকে প্যাসিভ আয় শুরু করতে পারেন।",
      },
      {
         title: "ফেইসবুক এবং ইউটিউব থেকে আয় করতে কত সময় লাগতে পারে?",
         description: "এটি আপনার পরিশ্রম ও কনসিস্টেন্সির ওপর নির্ভর করে। তবে সাধারণত, সঠিকভাবে আমাদের গাইডলাইন অনুযায়ী কাজ করলে 2-3 মাসের মধ্যে মনিটাইজেশন পাওয়া সম্ভব।",
      },
      {
         title: "কোর্সটি কিভাবে আমার কন্টেন্ট ক্রিয়েশন জার্নিতে সাহায্য করবে?",
         description: " এই কোর্সটি আপনাকে শেখাবে কিভাবে প্রফেশনাল এবং এনগেজিং কন্টেন্ট তৈরি করতে হয়, ফেইসবুক এবং ইউটিউব অ্যালগরিদম বুঝতে হয় এবং দ্রুত মনিটাইজেশন পাওয়া যায়। এটি আপনার কন্টেন্ট ক্রিয়েশন জার্নিকে সহজ এবং স্ট্রাকচার্ড করে তুলবে।",
      },
      {
         title: "কোর্সটি কি শুধু ফেইসবুক এবং ইউটিউবের জন্য নাকি অন্যান্য প্ল্যাটফর্মেও কাজে লাগবে?",
         description: "এই কোর্সে শেখানো টেকনিক এবং টিপস ফেইসবুক এবং ইউটিউব ছাড়াও অন্যান্য প্ল্যাটফর্ম যেমন Instagram, TikTok, LinkedIn এও প্রয়োগ করা যাবে।",
      },
      {
         title: " কোর্সের জন্য কি কোনো সফটওয়্যার বা অ্যাপ কিনতে হবে?",
         description: "না, এই কোর্সে আমরা CapCut (ফ্রি মোবাইল এডিটিং অ্যাপ) ও অন্যান্য ফ্রি টুল ব্যবহার করবো, যা দিয়ে আপনি সহজেই প্রফেশনাল কন্টেন্ট তৈরি করতে পারবেন।",
      },
      {
         title: "কোর্সটি কীভাবে আপনাকে লাইফটাইম ইনকামের সুযোগ করে দিতে পারে?",
         description: "আমাদের কোর্সে ফেইসবুক এবং ইউটিউব SEO, মনিটাইজেশন, ট্রেন্ডিং স্ট্র্যাটেজি ও কনটেন্ট প্ল্যানিং শেখানো হয়, যা আপনাকে দীর্ঘমেয়াদী প্যাসিভ ইনকামের পথ তৈরি করতে  অনেক সাহায্য করবে।",
      },
      {
         title: "অনলাইন ক্লাস কখন হবে?",
         description: " সপ্তাহে ২ দিন ক্লাস হবে ( ব্যাচের স্টুডেন্টেডের সকলের কথা বিবেচনা করে পোল এর মাধ্যমে সময় নির্বাচন করা হবে)",
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

export default Faq2;