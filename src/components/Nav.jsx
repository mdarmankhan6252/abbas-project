import { useState } from 'react';
import { VscChromeClose } from "react-icons/vsc";
import { CiMenuBurger } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

const Nav = () => {
   const [sidebar, setSidebar] = useState(false)

   return (
      <nav
         className={`
    fixed top-0 left-0 w-full z-50
    bg-white/60 backdrop-blur-2xl shadow
    
  `}
      >
         <div className="flex items-center justify-between px-3 max-w-7xl mx-auto py-3">
            <div className='flex items-center space-x-6'>
               <Link to='/'>
                  <img src={logo} alt="logo" className="w-40" />
               </Link>
               <ul className="items-center space-x-8 text-lg nav hidden md:flex *:hover:text-primary">
                  <NavLink to="/">হোম</NavLink>
                  <NavLink to="/course">কোর্স</NavLink>
                  <NavLink to="/e-book">ই-বুক</NavLink>
               </ul>
            </div>
            <Link to='/contact' className="btn hidden md:inline-block">
               যোগাযোগ করুন</Link>

            <div onClick={() => setSidebar(!sidebar)} className='text-2xl border cursor-pointer border-gray-200 p-1 md:hidden'>
               {sidebar ? <VscChromeClose /> : <CiMenuBurger />}
            </div>

         </div>
         {/* nav links for small screen */}
         <ul className={`flex  flex-col text-lg nav md:hidden bg-white absolute top-15 duration-500  p-10 pr-32 h-screen space-y-5 ${sidebar ? 'right-0 opacity-100' : '-right-56 opacity-0'}`}>
            <NavLink to="/">হোম</NavLink>
            <NavLink to="/course">কোর্স</NavLink>
            <NavLink to="/e-book">ই-বুক</NavLink>
            <NavLink to="/contact">যোগাযোগ করুন</NavLink>
         </ul>

      </nav>
   );
};

export default Nav;