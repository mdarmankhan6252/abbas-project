import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IoStarSharp } from "react-icons/io5";

import user1 from '../../assets/1.jpeg'
import user2 from '../../assets/2.jpeg'
import user3 from '../../assets/3.jpeg'
import user4 from '../../assets/4.jpeg'
import user5 from '../../assets/5.jpeg'
import user6 from '../../assets/6.jpeg'
import user7 from '../../assets/7.jpeg'
import user8 from '../../assets/8.jpeg'
import user9 from '../../assets/9.jpeg'
import user10 from '../../assets/10.jpeg'
import user11 from '../../assets/11.jpeg'

const testimonials = [
   {
      id: 1,
      name: "Aslam Hossain",
      photo: user1,
      comment: "CapCut Mobile এ এডিটিং শেখা এত সহজ হবে ভাবতেই পারিনি। ধন্যবাদ EduKing BD"
   },
   {
      id: 2,
      name: "Sanjana Rahman",
      photo: user2,
      comment: "অনেক কিছু জেনেছি। হয়তো আরো কিছু সামনে জানতে পারবো। ধন্যবাদ Eduking BD"
   },
   {
      id: 3,
      name: "Fainur Rahman",
      photo: user3,
      comment: "আমি একজন চাকরিজীবী। কাজের ফাঁকে মোবাইল দিয়ে ভিডিও বানানো ও এডিট শেখার সুযোগ করে দেওয়ার জন্য EduKing BD কে ধন্যবাদ। আপনারা সত্যিই চমৎকার কাজ করছেন!"
   },
   {
      id: 4,
      name: "Kakon Akter",
      photo: user4,
      comment: "আলহামদুলিল্লাহ আমার কন্টেন্ট গুলো খুব তারাতাড়ি ভাইরাল হচ্ছে। ধন্যবাদ আপনাদের"
   },
   {
      id: 5,
      name: "Sk Uzzal",
      photo: user5,
      comment: "অনেক অনেক ধন্যবাদ আপনাদের। আপনাদের গাইডলাইন পেয়ে অনেক উপকার হয়েছি।"
   },
   {
      id: 6,
      name: "Ujjol Ahmed",
      photo: user6,
      comment: "আলহামদুলিল্লাহ খুব তারাতাড়ি ১০০০ সাবস্ক্রাইব করতে পেরেছি। ধন্যবাদ আপনাদের কে।"
   },
   {
      id: 7,
      name: "Imran Mahmud",
      photo: user7,
      comment: "ফেসবুক মনিটাইজেশন নিয়ে স্পষ্ট ধারণা পেয়েছি Thanks EduKing BD."
   },
   {
      id: 8,
      name: "Hasan Onue",
      photo: user8,
      comment: "আপনাদের সাপোর্ট এক কথায় অসাধারণ!, অনেক ধন্যবাদ।"
   },
   {
      id: 9,
      name: "MD Mehedi Hasan",
      photo: user9,
      comment: "কাজের ফাঁকে মোবাইল দিয়ে ভিডিও বানানো ও এডিট শেখার সুযোগ করে দেওয়ার জন্য EduKing BD কে ধন্যবাদ। আপনারা সত্যিই চমৎকার কাজ করছেন!"
   },
   {
      id: 10,
      name: "Rocky Ahmed",
      photo: user10,
      comment: "ফেসবুক টিপস, অ্যালগোরিদম নিয়ে অনেক কিছু জানতে পেরেছি অনেক ধন্যবাদ।"
   },
   {
      id: 11,
      name: "Romana Rony",
      photo: user11,
      comment: "Thanks EduKing BD. আপনাদের থেকে পাওয়া গাইডলাইন সত্যি আমার Content Creation এর যাত্রা অনেক সহজ করেছে। আমি আপনাদের ১০০০০+ কন্টেন্ট ক্রিয়েশন কমিউনিটি বিল্ডাপের পথচলায় সাথে আছি।"
   }
];

const Testimonials = () => {
   return (
      <div className="primaryBg pb-10 pt-2">
         <div className="text-center pb-16 pt-6">
            <h2 className="text-3xl md:text-4xl font-primary font-bold text-gray-800">What Our Students Say</h2>
         </div>
         <div className="max-w-7xl mx-auto px-3">
            <Swiper
               slidesPerView={1}
               spaceBetween={10}
               pagination={{ clickable: true }}
               breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 10 },
                  768: { slidesPerView: 3, spaceBetween: 20 }
               }}
               modules={[Pagination]}
               className="mySwiper"
            >
               {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id} className="mb-12">
                     <div className="rounded-xl p-6 text-center shadow-[0_0_7px_0] mt-2 mx-3 shadow-gray-300 transition-all  hover:bg-gradient-to-tl hover:from-[#f5682c0d] hover:to-[#fefeff]">
                        <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
                        <div className='flex items-center justify-center space-x-1 text-amber-400 '>
                           <IoStarSharp />
                           <IoStarSharp />
                           <IoStarSharp />
                           <IoStarSharp />
                           <IoStarSharp />
                        </div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600 text-justify mt-3 text-sm leading-6">{testimonial.comment}</p>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default Testimonials;
