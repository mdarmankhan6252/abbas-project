import { motion } from 'framer-motion';
import { IoIosPlay } from 'react-icons/io';
import image55 from '../assets/course-2.jpg';
import { FaUsers } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Card2 = ({ link }) => {
   return (
      <motion.div
         initial={{ scale: 0.4 }}
         whileInView={{ scale: 1 }} 
         viewport={{ once: false }} 
         transition={{ duration: 0.8, ease: "easeOut" }}
         className='bg-white p-6 rounded-lg space-y-3'
      >
         <img src={image55} alt="" className='w-full rounded-xl border border-gray-200' />
         <div className='flex items-center text-2xl space-x-3 font-semibold'>
            <del className='text-[#fa1111]'>1,850/</del>
            <span className='text-green-600'>1,250/-</span>
         </div>
         <h4 className='text-xl font-semibold text-blue-950'>Contention Creation Pro</h4>
         <p className="font-primary text-[#828080] leading-7">{('আপনি যদি একজন সফল কন্টেন্ট ক্রিয়েটর হতে চান, তাহলে প্রফেশনাল, এনগেজিং এবং আই-ক্যাচিং কন্টেন্ট এর কোনো বিকল্প নেই। আপনার কন্টেন্ট যদি আকর্ষণীয় না হয়, তাহলে কন্টেন্ট ক্রিয়েশনের যাত্রা আপনার জন্য কখনোই সহজ হবে না। কিন্তু যদি আপনার কন্টেন্ট প্রফেশনাল এবং এনগেজিং হয়, তাহলে আপনি খুব দ্রুত ফেইসবুক এবং ইউটিউব থেকে আয়ের সুযোগ তৈরি করতে পারবেন!').slice(0, 80)}...</p>

         <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
               <span className='p-1 text-xl bg-primary text-white rounded-full object-cover w-7 h-7 flex items-center justify-center'><IoIosPlay className='-mr-0.5' /></span>
               <span className='text-sm font-light'>12+ Lessons</span>
            </div>
            <div className='flex items-center space-x-2'>
               <span className='p-1 text-xl bg-primary text-white rounded-full object-cover w-7 h-7 flex items-center justify-center'><FaUsers className='-mr-0.5' /></span>
               <span className='text-sm font-light'>30+ Students</span>
            </div>
         </div>
         <div className='py-2'>
            <hr className='text-gray-200' />
         </div>

         <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
               <span className='text-sm font-light'>5.00</span>
               <div className='flex items-center space-x-1 text-amber-400'>
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
               </div>
            </div>
            <Link to='/course-02' className='btn transition-transform duration-200 hover:-translate-y-1'>বিস্তারিত</Link>
         </div>
      </motion.div>
   );
};

export default Card2;