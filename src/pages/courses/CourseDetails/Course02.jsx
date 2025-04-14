import banner from '../../../assets/course-2.jpg'
import { IoCheckmarkCircleOutline, IoCheckmarkDoneOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Play } from 'lucide-react';
import { useState } from "react";
import { IoIosPeople, IoMdVideocam } from "react-icons/io";
import { MdOutlineSupportAgent, MdOutlineViewModule } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import Faq2 from "../Faq2";
import mentor2 from '../../../assets/mentor-2.png'
import { AiOutlineYoutube } from "react-icons/ai";

const Course02 = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleModal = () => setIsOpen(!isOpen);
   return (
      <div className="pt-16 max-w-7xl mx-auto px-3 flex gap-10  flex-col-reverse md:flex-row">
         {/* about course */}
         <div className="space-y-5 md:basis-[60%]">
            <h1 className="text-3xl font-bold md:text-4xl">Content Creation Pro</h1>
            <p className="text-gray-900/80 text-base text-justify">আপনি যদি একজন সফল কন্টেন্ট ক্রিয়েটর হতে চান, তাহলে প্রফেশনাল, এনগেজিং এবং আই-ক্যাচিং কন্টেন্ট এর কোনো বিকল্প নেই। আপনার কন্টেন্ট যদি আকর্ষণীয় না হয়, তাহলে কন্টেন্ট ক্রিয়েশনের যাত্রা আপনার জন্য কখনোই সহজ হবে না। কিন্তু যদি আপনার কন্টেন্ট প্রফেশনাল এবং এনগেজিং হয়, তাহলে আপনি খুব দ্রুত ফেইসবুক এবং ইউটিউব থেকে আয়ের সুযোগ তৈরি করতে পারবেন!</p>

            <p className="text-gray-900/80 text-base text-justify">আমাদের Content Creation Pro কোর্সটি বিশেষভাবে ডিজাইন করা হয়েছে, যেখানে আপনার হাতে থাকা মোবাইল ফোনটি ব্যবহার করেই আপনি তৈরি করতে পারবেন আকর্ষণীয় এবং প্রফেশনাল কন্টেন্ট। এই কোর্সে আপনাকে শেখানো হবে কিভাবে খুব কম সময়ে ফেইসবুক এবং ইউটিউব চ্যানেল গড়ে তুলতে হয় এবং এই প্ল্যাটফর্মগুলো থেকে নিশ্চিতভাবে লাইফটাইম আয় করা যায়।</p>

            <p className="text-gray-900/80 text-base text-justify">আমাদের এই <span className="font-bold">Content Creation Pro</span> with <span className="font-bold">Life Changing Successful Content Creation Guideline</span> কোর্সটি আপনার জন্য যাতে পারে লক্ষ্য টাকা প্যাসিভ ইনকাম শুরু করার সুবর্ণ সুযোগ !</p>

            <Link target='_blank' to='https://forms.gle/LSdNYAvdWXsprbLy9' className="md:hidden w-full py-4 bg-primary text-white text-center font-semibold text-xl hover:bg-violet-700 rounded-lg block">
               ব্যাচে ভর্তি হোন
            </Link>

            <h3 className="text-2xl font-bold pt-10">কোর্স মেন্টর</h3>
            <div className="flex space-x-4 items-end">
               <img src={mentor2} alt="" className="w-28 h-28 object-cover rounded-lg" />
               <div>
                  <h4 className="text-xl font-semibold">MK Masjed Khan</h4>
                  <p className="font-light">Content Creation Expert</p>
               </div>
            </div>

            <div className="py-10">
               <h3 className="text-xl font-semibold">কোর্সটি করে যা শিখবেন</h3>

               <ul className="py-3 space-y-3">
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">ক্যামেরার সামনে আত্মবিশ্বাসের সাথে কথা বলার কৌশল</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">প্রফেশনাল ভিডিও শুটিং টেকনিক (যেকোনো ক্যামেরা বা মোবাইল দিয়ে)</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">CapCut Mobile ব্যবহার করে সহজে কন্টেন্ট এডিটিং</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">প্রফেশনাল ভয়েসওভার টেকনিক (যা আপনার ভিডিওকে আরও Attractive & Engaging করে তুলবে )</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80"> ফেইসবুক এবং ইউটিউব মনিটাইজেশন A to Z (SEO, Effective Trending Strategies, Analytics, Earning Guideline)</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">ইউটিউব এবং ফেইসবুক থেকে কিভাবে লক্ষ্য টাকা প্যাসিভ ইনকাম করা যায়, তার বাস্তবিক গাইডলাইন।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">একেবারে বিগিনারদের জন্য সহজ ভাষায় ভিডিও ক্রিয়েশন থেকে আর্নিং পর্যন্ত পূর্ণাঙ্গ গাইডলাইন।</p>
                  </li>
                  <li className="flex items-center space-x-2">
                     <IoCheckmarkDoneOutline className="text-blue-600 text-2xl" />
                     <p className="text-gray-700/80">ইউটিউব এবং ফেইসবুক অ্যালগরিদম বুঝে কন্টেন্ট প্ল্যানিং এবং ট্রেন্ডিং কন্টেন্ট তৈরি করার টিপস।</p>
                  </li>
               </ul>
            </div>

            <h4 className='font-bold'>ডিটেইল জানতে কোর্স মডিউলে দেখুন, তাহলেই বুঝতে পারবেন এই কোর্সটি কতটা ভ্যালুয়েবল!</h4>

            <div className="mb-6">
               <Link target="_blank" to="https://drive.google.com/file/d/1Jnd2itFaGSPhtuk_ueaXMb-dqx224cmo/view?usp=sharing" className="inline-block btn">কোর্স মডিউল দেখুন</Link>
            </div>

            {/* faq question */}
            <Faq2 />

            <div className="space-y-3 py-10">
               <h2 className="text-xl font-semibold text-gray-700">হট লাইন</h2>
               <p>কোর্স সংক্রান্ত যেকোনো তথ্যের জন্যে কল করুন <span className="text-amber-700 font-semibold">01336585309</span></p>
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
                        src={banner}
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
                     <del className="text-3xl font-semibold text-red-600">2500/-</del>
                     <p className="text-3xl font-semibold text-green-600">1250/-</p>
                  </div>
                  <Link target='_blank' to='https://forms.gle/LSdNYAvdWXsprbLy9' className="md:block w-full py-4 bg-primary text-white text-center font-semibold text-xl hover:bg-violet-700 rounded-lg hidden">
                     ব্যাচে ভর্তি হোন
                  </Link>
                  <ul className="py-4 space-y-1.5">
                     <li className="flex items-center space-x-2">
                        <IoIosPeople className="text-xl" />
                        <p className="text-gray-800/90">কোর্সটি করেছেন ২০ জন</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <IoIosPeople className="text-xl" />
                        <p className="text-gray-800/90">অনলাইন লাইভ ক্লাস</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <IoIosPeople className="text-xl" />
                        <p className="text-gray-800/90">১২ টি মডিউল</p>
                     </li>

                     <li className="flex items-center space-x-2">
                        <IoIosPeople className="text-xl" />
                        <p className="text-gray-800/90">১২+ অনলাইন ক্লাস</p>
                     </li>
                     
                     <li className="flex items-center space-x-2">
                        <IoIosPeople className="text-xl" />
                        <p className="text-gray-800/90">২০+ রেকর্ডেড ক্লাস</p>
                     </li>
                     {/* ১২+ অনলাইন ক্লাস

                     ২০+ রেকর্ডেড ক্লাস
                     দ্রুত মনিটাইজশন পাওয়ার টিপস
                      */}
                     <li className="flex items-center space-x-2">
                        <IoMdVideocam className="text-xl" />
                        <p className="text-gray-800/90">Free Resource file</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <AiOutlineYoutube className="text-xl" />
                        <p className="text-gray-800/90">দ্রুত ফলোয়ার্স ও সাবস্ক্রাইবার পাওয়ার সিক্রেটস </p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <AiOutlineYoutube className="text-xl" />
                        <p className="text-gray-800/90">দ্রুত মনিটাইজশন পাওয়ার টিপস</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <AiOutlineYoutube className="text-xl" />
                        <p className="text-gray-800/90">Join Our Content Creation Supportive Community.</p>
                     </li>
                     <li className="flex items-center space-x-2">
                        <MdOutlineSupportAgent className="text-xl" />
                        <p className="text-gray-800/90">24/7 support </p>
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
            <Link target='_blank' to='https://forms.gle/LSdNYAvdWXsprbLy9' className=" w-full py-4 bg-green-600 text-white text-center font-semibold text-xl hover:bg-violet-700  block">
               ব্যাচে ভর্তি হোন
            </Link>
         </div>
      </div>
   );
};


export default Course02;