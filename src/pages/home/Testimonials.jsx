import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { IoStarSharp } from "react-icons/io5";

const testimonials = [
   {
      id: 1,
      name: "Sophie Moore",
      photo: 'https://i.ibb.co.com/tMttd8HG/armankhan.jpg',
      comment: "অন্য কোর্সগুলো ফেসবুকের টুলস, পেইজ সেটআপ এগুলো নিয়ে আলোচনা করে। কিন্তু কনটেন্ট নিয়ে যেই স্ট্রাগল করি, সেটার সমাধান কেউ দেয়না, দিলেও সেটা থেকে কখনই কোন উপকার পাইনি। কনটেন্ট কিং কোর্স করে এখন কনটেন্ট তৈরি সবচাইতে বড় নেশা হয়ে গেছে। মাথাতে এখন আর কনটেন্ট নিয়ে অনেক অনেক আইডিয়া। এখানের সাপোর্ট আর সাপ্তাহিক লাইভ ক্লাশ আমার দেখা সবচাইতে সেরা।"
   },
   {
      id: 2,
      name: "James Carter",
      photo: 'https://iili.io/2DfYrLQ.jpg',
      comment: "অন্য কোর্সগুলো ফেসবুকের টুলস, পেইজ সেটআপ এগুলো নিয়ে আলোচনা করে। কিন্তু কনটেন্ট নিয়ে যেই স্ট্রাগল করি, সেটার সমাধান কেউ দেয়না, দিলেও সেটা থেকে কখনই কোন উপকার পাইনি। কনটেন্ট কিং কোর্স করে এখন কনটেন্ট তৈরি সবচাইতে বড় নেশা হয়ে গেছে। মাথাতে এখন আর কনটেন্ট নিয়ে অনেক অনেক আইডিয়া। এখানের সাপোর্ট আর সাপ্তাহিক লাইভ ক্লাশ আমার দেখা সবচাইতে সেরা।"
   },
   {
      id: 3,
      name: "Emily Johnson",
      photo: 'https://i.ibb.co.com/tMttd8HG/armankhan.jpg',
      comment: "অন্য কোর্সগুলো ফেসবুকের টুলস, পেইজ সেটআপ এগুলো নিয়ে আলোচনা করে। কিন্তু কনটেন্ট নিয়ে যেই স্ট্রাগল করি, সেটার সমাধান কেউ দেয়না, দিলেও সেটা থেকে কখনই কোন উপকার পাইনি। কনটেন্ট কিং কোর্স করে এখন কনটেন্ট তৈরি সবচাইতে বড় নেশা হয়ে গেছে। মাথাতে এখন আর কনটেন্ট নিয়ে অনেক অনেক আইডিয়া। এখানের সাপোর্ট আর সাপ্তাহিক লাইভ ক্লাশ আমার দেখা সবচাইতে সেরা।"
   },
   {
      id: 4,
      name: "Michael Brown",
      photo: 'https://iili.io/2DfYrLQ.jpg',
      comment: "অন্য কোর্সগুলো ফেসবুকের টুলস, পেইজ সেটআপ এগুলো নিয়ে আলোচনা করে। কিন্তু কনটেন্ট নিয়ে যেই স্ট্রাগল করি, সেটার সমাধান কেউ দেয়না, দিলেও সেটা থেকে কখনই কোন উপকার পাইনি। কনটেন্ট কিং কোর্স করে এখন কনটেন্ট তৈরি সবচাইতে বড় নেশা হয়ে গেছে। মাথাতে এখন আর কনটেন্ট নিয়ে অনেক অনেক আইডিয়া। এখানের সাপোর্ট আর সাপ্তাহিক লাইভ ক্লাশ আমার দেখা সবচাইতে সেরা।"
   },
   {
      id: 5,
      name: "Olivia Davis",
      photo: 'https://i.ibb.co.com/tMttd8HG/armankhan.jpg',
      comment: "অন্য কোর্সগুলো ফেসবুকের টুলস, পেইজ সেটআপ এগুলো নিয়ে আলোচনা করে। কিন্তু কনটেন্ট নিয়ে যেই স্ট্রাগল করি, সেটার সমাধান কেউ দেয়না, দিলেও সেটা থেকে কখনই কোন উপকার পাইনি। কনটেন্ট কিং কোর্স করে এখন কনটেন্ট তৈরি সবচাইতে বড় নেশা হয়ে গেছে। মাথাতে এখন আর কনটেন্ট নিয়ে অনেক অনেক আইডিয়া। এখানের সাপোর্ট আর সাপ্তাহিক লাইভ ক্লাশ আমার দেখা সবচাইতে সেরা।"
   },
   {
      id: 6,
      name: "William Smith",
      photo: 'https://iili.io/2DfYrLQ.jpg',
      comment: "অন্য কোর্সগুলো ফেসবুকের টুলস, পেইজ সেটআপ এগুলো নিয়ে আলোচনা করে। কিন্তু কনটেন্ট নিয়ে যেই স্ট্রাগল করি, সেটার সমাধান কেউ দেয়না, দিলেও সেটা থেকে কখনই কোন উপকার পাইনি। কনটেন্ট কিং কোর্স করে এখন কনটেন্ট তৈরি সবচাইতে বড় নেশা হয়ে গেছে। মাথাতে এখন আর কনটেন্ট নিয়ে অনেক অনেক আইডিয়া। এখানের সাপোর্ট আর সাপ্তাহিক লাইভ ক্লাশ আমার দেখা সবচাইতে সেরা।"
   }
];

const Testimonials = () => {
   return (
      <div className="primaryBg pb-10 pt-2">
         <div className="text-center pb-16 pt-6">
            <h2 className="text-3xl md:text-4xl font-primary font-bold text-gray-800">What our students says</h2>
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
