import { Link, NavLink } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import logo from '../assets/footer-logo.png'
import bnr from '../assets/bnr.png'

const Footer = () => {
   return (
      <footer className=" pt-16 pb-6 bg-[#1D1E27]"
      >
         <div className='max-w-7xl mx-auto px-3 flex justify-between flex-col md:flex-row space-y-6 md:space-y-0 *:text-white'>
            <div className='md:basis-[35%] space-y-3'>
               <img src={logo} alt="logo" className='w-40' />
               <p className='font-light'>অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</p>
               <p className='font-light'>কমিউনিটি -এর সাথে কানেক্টেড থাকতে</p>
               <div className='flex items-center space-x-2 *:text-2xl'>
                  <Link to='https://www.facebook.com/profile.php?id=61572466610055'>
                     <FaFacebookSquare className='text-white' />
                  </Link>
                  <Link to=''>
                     <FaLinkedin className='text-white' />
                  </Link>
                  <Link to=''>
                     <FaInstagramSquare className='text-white' />
                  </Link>
                  <Link to=''>
                     <FaYoutube className='text-white' />
                  </Link>
               </div>
            </div>
            <div className='md:basis-[40%] space-y-4'>
               <h4 className='font-semibold'>Contact Us</h4>
               <div className=' flex items-center space-x-1  font-light'>
                  <MdOutlineMailOutline className='mt-1 text-xl' />
                  <p>support@eduking.com</p>
               </div>

               <div className=' flex items-center space-x-1  font-light'>
                  <CiLocationOn className='mt-1 text-xl' />
                  <p>Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2, Dhaka-1212</p>
               </div>

            </div>

            <div className='md:basis-[20%]'>
               <h4 className='font-semibold pb-4'>Important Links</h4>
               <ul className='flex flex-col space-y-3 font-light '>
                  <NavLink to='/about-us'>About Us</NavLink>
                  <NavLink to='/refund-policy'>Refund Policy</NavLink>
                  <NavLink to='/privacy-policy'>Privacy policy</NavLink>
                  <NavLink to='/terms-and-conditions'>Terms and Conditions</NavLink>
               </ul>

            </div>
         </div>
         <div className='py-4'>
            <hr className='text-gray-400' />
         </div>
         <div className='flex items-center justify-between max-w-7xl mx-auto px-3'>
            <img src={bnr} alt="" className='w-40' />
            <p className='font-light text-sm text-white'>All rights reserved - EduKingBd</p>
            <p></p>
         </div>

      </footer>
   );
};

export default Footer;