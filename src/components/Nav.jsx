import { useState, useEffect, useRef } from 'react';
import { VscChromeClose } from "react-icons/vsc";
import { CiMenuBurger } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo2.png';

const Nav = () => {
   const [sidebar, setSidebar] = useState(false);
   const sidebarRef = useRef(null);
   const menuButtonRef = useRef(null);

   useEffect(() => {
      // Function to handle clicks outside the sidebar
      const handleClickOutside = (event) => {
         // Close sidebar if click is outside of the sidebar AND outside the menu button
         if (
            sidebar && 
            sidebarRef.current && 
            !sidebarRef.current.contains(event.target) &&
            menuButtonRef.current && 
            !menuButtonRef.current.contains(event.target)
         ) {
            setSidebar(false);
         }
      };

      // Add event listener when the sidebar is open
      if (sidebar) {
         document.addEventListener("mousedown", handleClickOutside);
      }

      // Cleanup function to remove event listener
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [sidebar]); // Re-run effect when sidebar state changes

   return (
      <nav
         className={`
    fixed top-0 left-0 w-full z-50
    bg-white/90 backdrop-blur-2xl shadow
    
  `}
      >
         <div className="flex items-center justify-between px-3 max-w-7xl mx-auto py-3">
            <div className='flex items-center space-x-6'>
               <Link to='/'>
                  <img src={logo} alt="logo" className="w-40" />
               </Link>
               <ul className="items-center space-x-8 text-lg nav hidden md:flex *:hover:text-primary">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/course">Course</NavLink>
                  <NavLink to="/free-course">Free Course</NavLink>
                  <NavLink to="/e-book">E-Book</NavLink>
               </ul>
            </div>
            <Link to='/contact' className="btn hidden md:inline-block">
               যোগাযোগ করুন</Link>

            <div 
               ref={menuButtonRef} 
               onClick={() => setSidebar(!sidebar)} 
               className='text-2xl border cursor-pointer border-gray-200 p-1 md:hidden'
            >
               {sidebar ? <VscChromeClose /> : <CiMenuBurger />}
            </div>

         </div>
         {/* nav links for small screen */}
         <ul 
            ref={sidebarRef}
            className={`flex flex-col text-lg nav md:hidden bg-white/90 backdrop-blur-3xl z-50 border-b border-l border-gray-300 absolute top-[67px] rounded-bl-lg duration-500 p-10 pr-32 h-[70vh] space-y-5 ${sidebar ? 'right-0 opacity-100' : '-right-80 opacity-0'}`}
         >
            <NavLink onClick={() => setSidebar(false)} to="/">Home</NavLink>
            <NavLink onClick={() => setSidebar(false)} to="/course">Course</NavLink>
            <NavLink onClick={() => setSidebar(false)} to="/e-book">Free Course</NavLink>
            <NavLink onClick={() => setSidebar(false)} to="/e-book">E-Book</NavLink>
            <NavLink onClick={() => setSidebar(false)} to="/contact">Contact us</NavLink>
         </ul>

      </nav>
   );
};

export default Nav;