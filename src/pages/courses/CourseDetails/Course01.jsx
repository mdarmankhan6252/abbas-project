import { IoCheckmarkCircleOutline, IoCheckmarkDoneOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Play } from 'lucide-react';
import { IoIosPeople, } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { MdFlightClass, MdViewModule } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import image from '../../../assets/course-1.jpg'
import { AiFillForward, AiOutlineYoutube } from "react-icons/ai";
import { CgCommunity } from "react-icons/cg";
import Faq1 from "../Faq1";
import { useState } from "react";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { FaHandHoldingDollar, FaWhatsapp } from "react-icons/fa6";

const Course01 = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleModal = () => setIsOpen(!isOpen);

   return (
      <div className="pt-16 max-w-7xl mx-auto px-3 flex gap-10  flex-col-reverse md:flex-row">
         {/* about course */}
         <div className="space-y-5 md:basis-[60%]">
            <h1 className="text-3xl font-bold md:text-4xl">Mastering YouTube Shorts Secret</h1>
            <p className="text-gray-900/80 text-base text-justify">আপনি কি অনলাইনে প্যাসিভ এবং হেলথি ইনকাম এর সহজ এবং কার্যকর উপায় খুঁজছেন? YouTube হতে পারে আপনার জন্য পারফেক্ট একটি প্ল্যাটফর্ম! Youtube লক্ষ্য কোটি মানুষের জন্য একটি আয়ের অন্যতম শক্তিশালী উৎস হিসেবে কাজ করে যাচ্ছে ।</p>

            <p className="text-gray-900/80 text-base text-justify"> প্রতিদিন  মিলিয়ন মিলিয়ন কন্টেন্ট ক্রিয়েটর ইউটিউব থেকে আয় করছেন, অনেকেই তাদের চাকরির বিকল্প হিসেবে ইউটিউবকে বেছে নিয়েছেন। আপনি যদি ধৈর্য ও সঠিক গাইডেলিনের মাধ্যমে কাজ করেন, তবে ইউটিউব থেকে আয় করতে পারেন লক্ষ্য লক্ষ্য টাকা।</p>

            <p className="text-gray-900/80 text-base text-justify">আমাদের Mastering Youtube Shorts Secret কোর্স আপনাকে শেখাবে কিভাবে আপনার মোবাইল ফোন ব্যবহার করেই সফল ইউটিউব চ্যানেল দাড় করা যায়  এবং কিভাবে ইউটিউব থেকে নিশ্চিতভাবে লাইফ টাইম  আয় করা যায়।</p>

            <Link target="_blank" to='https://forms.gle/FRCBsXPBqhnVe6g7A' className="md:hidden w-full py-4 bg-primary text-white text-center font-semibold text-xl hover:bg-violet-700 rounded-lg block">
               ব্যাচে ভর্তি হোন
            </Link>

            <h3 className="text-2xl font-bold pt-10">কোর্স মেন্টর</h3>
            <div className="flex space-x-4 items-end">
               <img src="https://iili.io/3qLqJPS.jpg" alt="" className="w-28 h-28 object-cover rounded-lg" />
               <div>
                  <h4 className="text-xl font-semibold">Afjal Hosen</h4>
                  <p className="font-light">Expert Youtuber, With 5+ Years of experience in content creation.</p>
               </div>
            </div>

            <div className="py-10">
               <h3 className="text-xl font-semibold">কোর্সটি করে যা শিখবেন</h3>

               <ul className="py-3 space-y-3">
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80"> ইউটিউব ক্যারিয়ার গড়তে পর্যাপ্ত গাইডলাইন ও স্ট্র্যাটেজি।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">মোবাইল ফোন ব্যবহার করে ইউটিউব কনটেন্ট তৈরি করা শেখানো হবে।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">ইউটিউব SEO, মনিটাইজেশন ও আয়ের সঠিক উপায় শেখানো হবে।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">একেবারে বিগিনারদের জন্য সহজ ভাষায় ভিডিও ক্রিয়েশন থেকে আর্নিং পর্যন্ত পূর্ণাঙ্গ কোর্স।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80"> ইউটিউব থেকে কিভাবে মাসে $1000+ বা তার বেশি ইনকাম করা যায়, তার বাস্তবিক গাইডলাইন।</p>
                  </li>
               </ul>
            </div>

            <h4 className='font-bold'>ডিটেইল জানতে কোর্স মডিউলে দেখুন, তাহলেই বুঝতে পারবেন এই কোর্সটি কতটা ভ্যালুয়েবল!</h4>

            <div className="mb-6">
               <Link target="_blank" to="https://drive.google.com/file/d/1_dXT3WVxsjzmOt9dhDBD8pRjC6KIqyAr/view?usp=sharing" className="inline-block btn">কোর্স মডিউল দেখুন</Link>
            </div>

            {/* faq question */}
            <Faq1 />

            <div className="space-y-3 py-10">
               <h2 className="text-xl font-semibold text-gray-700">হট লাইন</h2>
               <p>কোর্স সংক্রান্ত যেকোনো তথ্যের জন্যে কল করুন<span className="text-amber-700 font-semibold"><a href="tel:+8801776825224"> 01336585309</a></span></p>
            </div>

            <div>
               <h2 className="text-xl font-semibold text-gray-700 pb-3">পেমেন্ট</h2>
               <ul className="list-disc pl-5 ml-2 space-y-2">
                  <li>“কোর্সটি কিনুন” বাটনে ক্লিক করুন</li>
                  <li>গুগল ফর্মটি পূরণ করুন </li>
                  <li>ফর্মে দেয়া একাউন্ট নাম্বারে পেমেন্ট সম্পূর্ণ করুন </li>
                  <li>আপনার ফোন নম্বর এবং পেমেন্ট ট্রাঞ্জেকশন আইডিটি লিখুন</li>
                  <li>সাবমিট করুন</li>
               </ul>
            </div>

            <div className="md:text-2xl flex items-center space-x-2 pt-4">
               <IoCheckmarkCircleOutline className="text-primary" />
               কিভাবে পেমেন্ট করবেন <Link target="_blank" to='https://www.youtube.com/watch?v=5iqoaPLwgO0' className="text-primary pl-2 hover:underline">এই ভিডিওটি দেখুন</Link>
            </div>
         </div>

         {/*  */}
         <div className="md:basis-[40%]">
            <div>
               <div className="p-3 border border-gray-300 rounded-lg">
                  <div className="relative">
                     <img
                        src={image}
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
                     <del className="text-3xl font-semibold text-red-600">2,000</del>
                     <p className="text-3xl font-semibold text-green-600">999/-</p>
                  </div>
                  <Link target="_blank" to='https://forms.gle/FRCBsXPBqhnVe6g7A' className="md:block w-full py-4 bg-primary text-white text-center font-semibold text-xl hover:bg-violet-700 rounded-lg hidden">
                     ব্যাচে ভর্তি হোন
                  </Link>
                  <ul className="py-4 space-y-1.5">
                     <li className="flex items-center space-x-2">
                        <IoIosPeople className="text-xl" />
                        <p className="text-gray-800/90">কোর্সটি করেছেন ২০ জন</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <HiOutlineStatusOnline className="text-xl" />
                        <p className="text-gray-800/90">অনলাইন লাইভ ক্লাস</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <MdViewModule className="text-xl" />
                        <p className="text-gray-800/90">১২ টি মডিউল</p>
                     </li>

                     <li className="flex items-center space-x-2">
                        <MdFlightClass className="text-xl" />
                        <p className="text-gray-800/90">১২+ অনলাইন ক্লাস</p>
                     </li>

                     <li className="flex items-center space-x-2">
                        <RiLiveLine className="text-xl" />
                        <p className="text-gray-800/90">২০+ রেকর্ডেড ক্লাস</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <AiFillForward className="text-xl" />
                        <p className="text-gray-800/90">Free Resource file</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <AiOutlineYoutube className="text-xl" />
                        <p className="text-gray-800/90">100k subscriber pauar secret tips</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <FaHandHoldingDollar className="text-xl" />
                        <p className="text-gray-800/90">দ্রুত মনিটাইজশন পাওয়ার টিপস</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <MdSupportAgent className="text-xl" />
                        <p className="text-gray-800/90">24/7 support </p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <CgCommunity className="text-xl" />
                        <p className="text-gray-800/90">Join Content creation supportive community.</p>
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
                           src="https://www.youtube.com/embed/SH5K2f0DqHc?si=KjG_-ppAW27PWt7M"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen
                        ></iframe>
                     </div>
                  </div>
               </div>
            )}
         </div>

         <div className="fixed right-0 left-0 z-50 w-full bottom-0 md:hidden block">
            <Link target="_blank" to='https://wa.me/+8801336585309' className="text-4xl bg-gradient-to-br from-pink-600 to-violet-500 text-white inline-block p-2 rounded-full absolute right-2 bottom-10">
               <FaWhatsapp />
            </Link>
            <Link target="_blank" to='https://forms.gle/FRCBsXPBqhnVe6g7A' className=" w-full py-4 bg-green-600 text-white text-center font-semibold text-xl hover:bg-violet-700  block">
               ব্যাচে ভর্তি হোন
            </Link>
         </div>
      </div>
   );
};

export default Course01;