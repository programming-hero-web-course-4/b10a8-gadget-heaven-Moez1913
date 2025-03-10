import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className=" bg-[#9538E2] flex flex-row justify-between items-center max-w-7xl mt-7 py-4 mx-auto px-10 border-t-2 border-solid border-base-400 rounded-t-lg">


      <h3 className="text-white text-xl">Gadget Heaven </h3>

      <div className="navbar-center hidden lg:flex">
        <ul className="text-white gap-2 menu-horizontal px-1">
          <li><NavLink className={({ isActive }) =>
            isActive ? "underline text-white" : "text-white"
          } to='/'>Home</NavLink></li>

          <li><NavLink className={({ isActive }) =>
            isActive ? "underline text-white" : "text-white"
          } to='/stat'>Statistics</NavLink></li>

          <li><NavLink className={({ isActive }) =>
            isActive ? "underline text-white" : "text-white"
          } to='/dashboard'>Dashboard</NavLink></li>

          <li><NavLink className={({ isActive }) =>
            isActive ? "underline text-white" : "text-white"
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