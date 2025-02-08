import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import brn from '../assets/bnr.png'

const Footer = () => {
   return (
      <footer className=" pt-16 pb-6 border border-gray-200"
         style={{ background: "radial-gradient(at center top, #c2d8f9 0%, #EFF4FC 100%)" }}>

         <div className='max-w-7xl mx-auto px-3 flex justify-between flex-col md:flex-row space-y-6 md:space-y-0'>
            <div className='md:basis-[35%] space-y-3'>
               <img src={logo} alt="logo" className='w-40' />
               <p className='font-light'>অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</p>
               <p className='font-light'>কমিউনিটি -এর সাথে কানেক্টেড থাকতে</p>
               <div className='flex items-center space-x-2 *:text-2xl'>
                  <Link to=''>
                     <FaFacebookSquare className='text-primary' />
                  </Link>
                  <Link to=''>
                     <FaLinkedin className='text-[#0A66C2]' />
                  </Link>
                  <Link to=''>
                     <FaInstagramSquare className='text-[#DF09B1]' />
                  </Link>
                  <Link to=''>
                     <FaYoutube className='text-red-500' />
                  </Link>
               </div>
            </div>
            <div className='md:basis-[40%] space-y-4'>
               <h4 className='font-semibold'>যোগাযোগ</h4>
               <div className=' flex items-center space-x-1 text-[#6e6c6c] font-light'>
                  <MdOutlineMailOutline className='mt-1 text-xl' />
                  <p>support@eduking.com</p>
               </div>

               <div className=' flex items-center space-x-1 text-[#6e6c6c] font-light'>
                  <CiLocationOn className='mt-1 text-xl' />
                  <p>Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2, Dhaka-1212</p>
               </div>

            </div>

            <div className='md:basis-[20%]'>
               <h4 className='font-semibold pb-4'>কোম্পানি</h4>
               <ul className='flex flex-col space-y-3 font-light'>
                  <NavLink to='/about-us'>আমাদের সম্পর্কে</NavLink>
                  <NavLink to='/refund-policy'>রিফান্ড পলিসি</NavLink>
                  <NavLink to='/privacy-policy'>প্রাইভেসী পলিসি</NavLink>
                  <NavLink to='/terms-and-conditions'>টার্মস এবং শর্তাবলী</NavLink>
               </ul>

            </div>
         </div>
         <div className='py-4'>
            <hr className='text-gray-400' />
         </div>
         <div className='flex items-center justify-between max-w-7xl mx-auto px-3'>
            <img src={brn} alt="" className='w-40' />
            <p className='font-light text-sm'>All rights reserved - EduKingBd</p>
            <p></p>
         </div>
        
      </footer>
   );
};

export default Footer;