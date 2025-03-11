import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const location=useLocation();
  const isDashboard=location.pathname==='/dashboard';
  const navbarBgColor = location.pathname === '/dashboard' ? 'bg-white' : 'bg-[#9538E2]';
  const textColor = isDashboard? 'text-gray-700' : 'text-white';
  const borderStyle = isDashboard ? 'border-none' : 'border-t-2 border-solid border-base-400';
  return (
    <div className={`${navbarBgColor} ${textColor} ${borderStyle} flex flex-row justify-between items-center max-w-7xl mt-7 py-4 mx-auto px-10 rounded-t-lg`}>


      <h3 className="text-white text-xl">Gadget Heaven </h3>

      <div className="navbar-center hidden lg:flex">
        <ul className=" gap-2 menu-horizontal px-1">
          <li><NavLink className={({ isActive }) =>
            isActive ? `underline ${textColor}` : `${textColor}`
          } to='/'>Home</NavLink></li>

          <li><NavLink className={({ isActive }) =>
            isActive ?  `underline ${textColor}` : `${textColor}`
          } to='/stat'>Statistics</NavLink></li>

          <li><NavLink className={({ isActive }) =>
            isActive ? `underline ${textColor}` : `${textColor}`
          } to='/dashboard'>Dashboard</NavLink></li>

          <li><NavLink className={({ isActive }) =>
            isActive ?  `underline ${textColor}` : `${textColor}`
          } to='/help'>Help</NavLink></li>
        </ul>
      </div>
      <div className="navbar-right flex flex-row gap-4">
        <button className='h-8 w-8 pl-2 rounded-full  bg-white text-center'><IoCartOutline /></button>
        <button className='h-8 w-8 pl-2 rounded-full  bg-white text-center'><CiHeart /></button>
      </div>
    </div>
  );
};

export default Navbar;