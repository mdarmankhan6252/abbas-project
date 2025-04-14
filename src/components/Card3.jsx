import { IoIosPlay } from 'react-icons/io';
import image55 from '../assets/course-3.jpg';
import { FaUsers } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Card3 = ({ link }) => {
   return (
      <div
         className='bg-white p-6 rounded-lg space-y-3'
      >
         <img src={image55} alt="" className='w-full rounded-xl border border-gray-200' />
         <div className='flex items-center text-2xl space-x-3 font-semibold'>
            <del className='text-[#fa1111]'>1,800/</del>
            <span className='text-green-600'>1,000/-</span>
         </div>
         <h4 className='text-xl font-semibold text-blue-950'>Ai Powered Personal Branding</h4>
         <p className="font-primary text-[#828080] leading-7">{('আপনি যদি আপনার প্রফেশনাল ক্যারিয়ারকে এগিয়ে নিতে চান তাহলে নিজের প্রফেশনাল পোর্টফোলিও বিল্ডাপ এর কোন বিকল্প নেই। এই ডিজিটাল ওয়ার্ল্ড প্রতিনিয়ত আপডেট হচ্ছে , আপনি যদি নিজেকে আপডেটেড রাখতে না পারেন এবং তা অবশ্যই আপনার প্রফেশনাল লাইফে প্রকাশ করতে না পারেন তাহলে আপনি অন্যদের থেকে পিছিয়ে পড়বেন তা অবধারিত।').slice(0, 80)}...</p>

         <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
               <span className='p-1 text-xl bg-primary text-white rounded-full object-cover w-7 h-7 flex items-center justify-center'><IoIosPlay className='-mr-0.5' /></span>
               <span className='text-sm font-light'>12+ Lessons</span>
            </div>
            <div className='flex items-center space-x-2'>
               <span className='p-1 text-xl bg-primary text-white rounded-full object-cover w-7 h-7 flex items-center justify-center'><FaUsers className='-mr-0.5' /></span>
               <span className='text-sm font-light'>20+ Students</span>
            </div>
         </div>
         <div className='py-2'>
            <hr className='text-gray-200' />
         </div>

         <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
               <span className='text-sm font-light'>4.90</span>
               <div className='flex items-center space-x-1 text-amber-400'>
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
                  <IoStarSharp />
               </div>
            </div>
            <Link to={link} className='btn transition-transform duration-200 hover:-translate-y-1'>বিস্তারিত</Link>
         </div>
      </div>
   );
};

export default Card3;