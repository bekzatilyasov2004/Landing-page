import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineMenu,
  AiOutlineClose,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { PiInfinityBold } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";

import {
  MdSupervisedUserCircle,
  MdCategory,
  MdBusinessCenter,
} from "react-icons/md";
import infinitylogo from '../images/infinitylogo.png'

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="bg-gray-900 text-white flex justify-between items-center h-20 px-6 fixed top-0 left-0 right-0 z-10 lg:px-16 ">
      {/* Hamburger Menu */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer">
        <AiOutlineMenu
          size={30}
          className="text-white shadow-white shadow-sm hover:scale-105 duration-100"
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <PiInfinityBold size={30} className="" />
  <div className="hidden md:block">
        <img src={infinitylogo} style={{ width: '100px', height: 'auto' }} alt="Infinity Logo" />
      </div>
      </div>
      {/* Search Icon and input */}
      <div className="  rounded-full  shadow-white shadow-sm flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} className="" />
        <input
          className="bg-gray-900 p-2 w-full focus:outline-none rounded-full placeholder-gray-200 placeholder:italic"
          type="text"
          placeholder="Search the depth..."
        />
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-gray-900/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-gray-900 z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer "
        />
        <div className="flex justify-start items-center m-5 gap-1">
        <PiInfinityBold size={30} />
        <img src={infinitylogo} style={{ width: '100px', height: 'auto' }} alt="Infinity Logo" />
         
        </div>
        <nav>
          <ul className="flex flex-col p-4 ">
            <li
              onClick={() => setNav(!nav)}
              className="text-xl py-4 px-5 flex cursor-pointer hover:bg-white hover:text-gray-900 hover:rounded-sm"
            >
              <div to="/" className="flex justify-between items-center ">
                <AiFillHome size={25} className="mr-4 " /> Home
              </div>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="text-xl py-4 px-5 flex cursor-pointer hover:bg-white hover:text-gray-900 hover:rounded-sm"
            >
              <div to="/menu" className="flex justify-between items-center ">
                <MdSupervisedUserCircle size={25} className="mr-4" /> About
              </div>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="text-xl py-4 px-5 flex cursor-pointer hover:bg-white hover:text-gray-900 hover:rounded-sm"
            >
              <div
                to="/categories"
                className="flex justify-between items-center "
              >
                <MdCategory size={25} className="mr-4" /> Partners
              </div>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="text-xl py-4 px-5 flex cursor-pointer hover:bg-white hover:text-gray-900 hover:rounded-sm"
            >
              <div to="/about" className="flex justify-between items-center ">
                <MdBusinessCenter size={25} className="mr-4" /> Contact
              </div>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="text-xl py-4 px-5 flex cursor-pointer hover:bg-white hover:text-gray-900 hover:rounded-sm"
            >
              <div to="faq" className="flex justify-between items-center ">
                <AiFillQuestionCircle size={25} className="mr-4" /> FAQ
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
