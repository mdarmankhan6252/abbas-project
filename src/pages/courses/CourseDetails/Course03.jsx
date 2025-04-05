import { IoCheckmarkCircleOutline, IoCheckmarkDoneOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Play } from 'lucide-react';
import { useState } from "react";
import { IoIosPeople, IoMdVideocam } from "react-icons/io";
import { MdOutlineViewModule } from "react-icons/md";
import { RiLiveLine, RiMessengerLine, RiUserCommunityLine } from "react-icons/ri";
import Faq3 from "../Faq3";
import course3 from '../../../assets/course-3.jpg'
import mentor3 from '../../../assets/mentor3.jpg'

const Course03 = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleModal = () => setIsOpen(!isOpen);
   return (
      <div className="pt-16 max-w-7xl mx-auto px-3 flex gap-10  flex-col-reverse md:flex-row">
         {/* about course */}
         <div className="space-y-5 md:basis-[60%]">
            <h1 className="text-3xl font-bold md:text-4xl">AI Powered Personal Branding</h1>
            <p className="text-gray-900/80 text-base text-justify">আপনি যদি আপনার প্রফেশনাল ক্যারিয়ারকে এগিয়ে নিতে চান তাহলে নিজের প্রফেশনাল পোর্টফোলিও বিল্ডাপ এর কোন বিকল্প নেই। এই ডিজিটাল ওয়ার্ল্ড প্রতিনিয়ত আপডেট হচ্ছে , আপনি যদি নিজেকে আপডেটেড রাখতে না পারেন এবং তা অবশ্যই আপনার প্রফেশনাল লাইফে প্রকাশ করতে না পারেন তাহলে আপনি অন্যদের থেকে পিছিয়ে পড়বেন তা অবধারিত। </p>

            <p className="text-gray-900/80 text-base text-justify">এই কোর্স টি চলাকালীন সময়েই আপনি আপনার নিজের একটি স্ট্রং প্রফেশনাল পোর্টফোলিও বিল্ডাপ করে ফেলতে পারবেন, এইটাই আমাদের এই কোর্স এর প্রধান বিশেষত্ব। তাহলে আর দেরি কেন?</p>

            <p className="text-gray-900/80 text-base text-justify">আমাদের AI Powered Personal Branding কোর্সটি বিশেষভাবে ডিজাইন করা হয়েছে, যেখানে আপনি Smart AI Tools এর ব্যবহারের মাধ্যমে Professional Social Media Optimization, Personal Portfolio Website Building, Personal Brand Growth, SEO, Professional CV, Resume & Cover Letter Writing, Meta Ad Campaign এবং Freelancing Guideline, Interview Cracking & Client communication Techniques শিখতে পারবেন। যেই স্কিলস এর গুরুত্ব আপনার প্রফেশনাল লাইফ এর প্রতিটি পদক্ষেপে অপরিসিম। </p>

            <p className="text-gray-900/80 text-base text-justify">এটি শুধু একটি কোর্স নয়—এটি আপনার ক্যারিয়ারকে এক নতুন উচ্চতায় নিয়ে যাওয়ার হাতিয়ার। AI-এর শক্তিকে কাজে লাগিয়ে গড়ে তুলুন একটি Strong Professional Portfolio। এখনই নিজেকে আপগ্রেড করুন এবং সফলতার পথে একধাপ এগিয়ে জান। Build Your Brand, Boost Your Career!</p>

            <Link to='/' className="md:hidden w-full py-4 bg-primary text-white text-center font-semibold text-xl hover:bg-violet-700 rounded-lg block">
               কোর্সটি কিনুন
            </Link>

            <h3 className="text-2xl font-bold pt-10">কোর্স মেন্টর</h3>
            <div className="flex space-x-4 items-end">
               <img src={mentor3} alt="" className="w-28 h-28 object-cover rounded-lg" />
               <div>
                  <h4 className="text-xl font-semibold">S M Sayem</h4>
                  <p className="font-light">Tech Industry Expert </p>
               </div>
            </div>

            <div className="py-10">
               <h3 className="text-xl font-semibold">কোর্সটি করে যা শিখবেন</h3>

               <ul className="py-3 space-y-3">
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">কিভাবে নিজেকে digital platform-এ establish করবেন এবং আপনার brand value বৃদ্ধি করবেন।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">কিভাবে নিজেকে digital platform-এ establish করবেন এবং আপনার brand value বৃদ্ধি করবেন।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">Facebook, LinkedIn, Twitter (X) & Instagram professional profile buildup ও grow করার techniques।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">Facebook & Instagram-এ effective ad campaigns চালিয়ে personal brand বা business expand করার কৌশল।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">Domain & Hosting, website setup, customization, & advanced features integration।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">AI-Powered Professional CV, Resume & Cover Letter Writing।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">Job Hunting, Client communication & Freelancing Marketplace Guideline।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">Real-world project-এ কাজ করার সুযোগ এবং performance-based contest & rewards।</p>
                  </li>
               </ul>
            </div>

            {/* faq question */}
            <Faq3 />

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
                        src={course3}
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
                     <del className="text-3xl font-semibold text-red-600">1,800</del>
                     <p className="text-3xl font-semibold text-green-600">1000/-</p>
                  </div>
                  <Link to='/' className="md:block w-full py-4 bg-primary text-white text-center font-semibold text-xl hover:bg-violet-700 rounded-lg hidden">
                     কোর্সটি কিনুন
                  </Link>
                  <ul className="py-4 space-y-1.5">
                     <li className="flex items-center space-x-2">
                        <IoIosPeople className="text-xl" />
                        <p className="text-gray-800/90">কোর্সটি করেছেন 25 জন</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <MdOutlineViewModule className="text-xl" />
                        <p className="text-gray-800/90">12 টি মডিউল</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <IoMdVideocam className="text-xl" />
                        <p className="text-gray-800/90">কোর্স চলাকালীন সময়ের মধ্যেই নিজের প্রফেশনাল পোর্টফোলিও তৈরির নিচ্চয়তা!</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <RiLiveLine className="text-xl" />
                        <p className="text-gray-800/90">অনলাইন লাইভ ক্লাস</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <RiUserCommunityLine className="text-xl" />
                        <p className="text-gray-800/90">Opportunity to Join Our supportive community.</p>
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
                           src="https://www.youtube.com/embed/4Ybray2skrk?si=3kupUHKv64wKxA6E"
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


export default Course03;