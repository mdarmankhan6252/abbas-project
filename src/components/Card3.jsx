import { motion } from 'framer-motion';
import { IoIosPlay } from 'react-icons/io';
import image55 from '../assets/course-3.jpg';
import { FaUsers } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Card3 = ({ link }) => {
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
            <del className='text-[#fa1111]'>2,500/</del>
            <span className='text-green-600'>1,000/-</span>
         </div>
         <h4 className='text-xl font-semibold text-blue-950'>Ai powered personal branding.</h4>
         <p className="font-primary text-[#828080] leading-7">অনলাইন উদ্যোক্তাদের জন্য একটি অন্তর্জাতিক মানের একটি কোর্স যেখানে  কনটেন্ট ডেভেলপমেন্টের পাশাপাশি শেখানো হবে ফেসবুক মার্কেটিং এর Exclusive সব ট্রিকস!</p>

         <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
               <span className='p-1 text-xl bg-primary text-white rounded-full object-cover w-7 h-7 flex items-center justify-center'><IoIosPlay className='-mr-0.5' /></span>
               <span className='text-sm font-light'>35+ Lessons</span>
            </div>
            <div className='flex items-center space-x-2'>
               <span className='p-1 text-xl bg-primary text-white rounded-full object-cover w-7 h-7 flex items-center justify-center'><FaUsers className='-mr-0.5' /></span>
               <span className='text-sm font-light'>700+ Students</span>
            </div>
         </div>
         <div className='py-2'>
            <hr className='text-gray-200' />
         </div>

         <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
               <span className='text-sm font-light'>4.9</span>
               <div className='flex items-center space-x-1 text-amber-400'>
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
               </div>
            </div>
            <Link to='/course-03' className='btn transition-transform duration-200 hover:-translate-y-1'>বিস্তারিত</Link>
         </div>
      </motion.div>
   );
};

export default Card3;