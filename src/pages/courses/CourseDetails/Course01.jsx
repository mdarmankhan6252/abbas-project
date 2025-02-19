import { IoCheckmarkCircleOutline, IoCheckmarkDoneOutline } from "react-icons/io5";
import Faq from "../Faq";
import { Link } from "react-router-dom";
import { Play } from 'lucide-react';
import { useState } from "react";
import { IoIosPeople, IoMdVideocam } from "react-icons/io";
import { MdOutlineViewModule } from "react-icons/md";
import { RiLiveLine, RiMessengerLine } from "react-icons/ri";

const Course01 = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleModal = () => setIsOpen(!isOpen);
   return (
      <div className="pt-16 max-w-7xl mx-auto px-3 flex gap-10  flex-col-reverse md:flex-row">
         {/* about course */}
         <div className="space-y-5 md:basis-[60%]">
            <h1 className="text-3xl font-bold md:text-4xl">Facebook Ads Mastermind - Course 1</h1>
            <p className="text-gray-900/80 text-base text-justify">ফেসবুকে ইফেক্টিভ এড রান করার জন্য শুরু থেকে যা কিছু জানা প্রয়োজন Customer journey map, Strategy, data analysis এবং facebook marketing এর সকল টুলস সম্ভন্ধে জানতে পারবেন এই কোর্সে।</p>

            <p className="text-gray-900/80 text-base text-justify">একটা ক্যাম্পেইনকে কিভাবে optimize করতে হয়, কেম্পেইন স্ট্রাটিজি টা কিভাবে সাজাতে হয়, কিভাবে রিটার্গেটিং করতে হয়, রিটার্গেট এর স্ট্রাটিজি কেমন হবে, কিভাবে ট্রেকিং করতে হয়, ab testing, campaign budget optimization, conversion rate optimization, Ad scaling সবকিছুই পাবেন এই এক কোর্সেই!</p>

            <p className="text-gray-900/80 text-base text-justify">প্রফেশনালি মিডিয়া বায়িং সার্ভিস প্রদান কিংবা নিজের বিজনেস কে সামনে এগিয়ে নিয়ে যেতে ফেসবুক এডস এর যা কিছু জানা প্রয়োজন সবকিছুই পাচ্ছেন এক কোর্সে! মেন্টরশিপ তো থাকছেই!</p>

            <Link to='/' className="md:hidden w-full py-4 bg-green-600 text-white text-center font-semibold text-xl hover:bg-violet-700 rounded-lg block">
               কোর্সটি কিনুন
            </Link>

            <h3 className="text-2xl font-bold pt-10">কোর্স মেন্টর</h3>
            <div className="flex space-x-4 items-end">
               <img src="https://i.ibb.co.com/tMttd8HG/armankhan.jpg" alt="" className="w-28 h-28 object-cover rounded-lg" />
               <div>
                  <h4 className="text-xl font-semibold">MD Arman Khan</h4>
                  <p className="font-light">CEO, XYZ Company</p>
               </div>
            </div>

            <div className="py-10">
               <h3 className="text-xl font-semibold">কোর্সটি করে যা শিখবেন</h3>

               <ul className="py-3 space-y-3">
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">ফেসবুক এডস এর সকল টুলস</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">ফেসবুক এডস এর সিক্রেট স্ট্রাটেজি</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">কম খরচে বেশি সেলস জেনারেশন</p>
                  </li>
               </ul>
            </div>

            {/* faq question */}
            <Faq />

            <div className="space-y-3 py-10">
               <h2 className="text-xl font-semibold text-gray-700">হট লাইন</h2>
               <p>কোর্স সংক্রান্ত যেকোনো তথ্যের জন্যে কল করুন <span className="text-amber-700 font-semibold">+880 1776-825-224</span></p>
            </div>

            <div>
               <h2 className="text-xl font-semibold text-gray-700 pb-3">পেমেন্ট</h2>
               <ul className="list-disc pl-5 ml-2 space-y-2">
                  <li>“কোর্সটি কিনুন” বাটনে ক্লিক করুন</li>
                  <li>নাম, ফোন নম্বর, আপনার এড্রেস এবং ইমেইল এড্রেস পূরণ করুন</li>
                  <li>ডানে দেয়া বিকাশ অথবা ফোন নম্বরে সেন্ড মানি করুন</li>
                  <li>আপনার ফোন নম্বর এবং বিকাশ বা নগদ ট্রাঞ্জেকশন আইডিটি লিখুন</li>
               </ul>
            </div>

            <div className="text-lg md:text-2xl flex items-center space-x-2 pt-4">
               <IoCheckmarkCircleOutline className="text-primary" />
               কিভাবে পেমেন্ট করবেন <Link to='/' className="text-primary pl-2 hover:underline">এই ভিডিওটি দেখুন</Link>
            </div>


         </div>

         {/*  */}
         <div className="md:basis-[40%]">
            <div>
               <div className="p-3 border border-gray-300 rounded-lg">
                  <div className="relative">
                     <img
                        src="https://www.contentkingbd.com/wp-content/uploads/2024/06/abul-kalam-thumbnail-2-update.jpg"
                        alt=""
                        className="w-full rounded-lg"
                     />
                     <div className="absolute bg-black/50 top-0 left-0 right-0 bottom-0 rounded-lg"></div>
                     <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        onClick={toggleModal}
                     >
                        <div className="relative cursor-pointer">
                           {/* Animated border ring */}
                           <div className="absolute -inset-1 rounded-full bg-white opacity-75 animate-ping" />
                           {/* Static play button */}
                           <button className="relative text-4xl text-white p-2 rounded-full border border-white cursor-pointer">
                              <Play size={20} />
                           </button>
                        </div>
                     </div>
                  </div>

                  <div className="flex items-center justify-around py-4">
                     <del className="text-3xl font-semibold text-red-600">10,000</del>
                     <p className="text-3xl font-semibold text-green-600">4000/-</p>
                  </div>
                  <Link to='/' className="md:block w-full py-4 bg-green-600 text-white text-center font-semibold text-xl hover:bg-violet-700 rounded-lg hidden">
                     কোর্সটি কিনুন
                  </Link>
                  <ul className="py-4 space-y-1.5">
                     <li className="flex items-center space-x-2">
                        <IoIosPeople className="text-xl" />
                        <p className="text-gray-800/90">কোর্সটি করেছেন 254 জন</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <MdOutlineViewModule className="text-xl" />
                        <p className="text-gray-800/90">২০ টি মডিউল</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <IoMdVideocam className="text-xl" />
                        <p className="text-gray-800/90">৭০+ ভিডিও লেসন</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <RiLiveLine className="text-xl" />
                        <p className="text-gray-800/90">অনলাইন লাইভ ক্লাস</p>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Modal */}
            {isOpen && (
               <div
                  className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                  onClick={toggleModal}
               >
                  <div
                     className="bg-black rounded-lg p-2 w-full max-w-4xl mx-4"
                     onClick={e => e.stopPropagation()}
                  >
                     <div className="relative pt-[56.25%]">
                        <iframe
                           className="absolute top-0 left-0 w-full h-full rounded-lg"
                           src="https://www.youtube.com/embed/dT913aGGYFw?si=GqTto7TQpnRobwQG"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen
                        ></iframe>
                     </div>
                  </div>
               </div>
            )}
         </div>

         <div className="fixed right-0 left-0 z-50 w-full bottom-0 md:hidden block">
            <Link target="_blank" to='https://m.me/mdarmankhan6252' className="text-4xl bg-gradient-to-br from-pink-600 to-violet-500 text-white inline-block p-2 rounded-full absolute right-2 bottom-10">
               <RiMessengerLine />
            </Link>
            <Link to='/' className=" w-full py-4 bg-green-600 text-white text-center font-semibold text-xl hover:bg-violet-700  block">
               কোর্সটি কিনুন
            </Link>
         </div>
      </div>
   );
};

export default Course01;