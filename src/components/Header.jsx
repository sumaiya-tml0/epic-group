import React, { useState } from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

import logo from "../assets/logo.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
function Header() {
      const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-6 lg:py-10 lg:px-10 absolute z-20 w-full">
        <div className=" px-3 lg:px-3">
            <div className="flex items-center justify-between">
      <div className="max-w-32 md:max-w-40 lg:max-w-[12em]">
        <img src={logo} alt="Epic group" />
      </div>

      <div className="hidden lg:block ">
        <ul className="capitalize flex items-center gap-6  text-white open-sans">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about us</NavLink>
          </li>
          <li>
            <NavLink to="/our-capabilities">capabilities</NavLink>
          </li>
          <li>
            <NavLink to="/sustainability">sustainability</NavLink>
          </li>
          <li>
            <NavLink to="/our-careers">careers</NavLink>
          </li>
        </ul>
      </div>
     
       {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden ">
            <button onClick={toggleMenu} className="text-2xl text-white z-50">
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
    </div>

     {/* Mobile Navigation */}
      {menuOpen && (
  <div className="mt-4 lg:hidden bg-white z-50 w-full absolute left-0 top-full shadow-md">
    <ul className="flex flex-col text-center capitalize text-base divide-y divide-gray-200">
      <li className="py-4">
       <NavLink to="/">home</NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/about">about us</NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/our-capabilities">capabilities</NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/sustainability">Sustainability</NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/our-careers">careers</NavLink>
      </li>
    </ul>
  </div>
)}

        </div>
    </header>
  );
}

export default Header;
