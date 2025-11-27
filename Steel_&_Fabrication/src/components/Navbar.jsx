import React from 'react';
import logo from '../assets/Images/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div
      className="
      w-full bg-gray-700 text-white 
      flex flex-col items-center gap-4 py-4
      sm:flex-row sm:justify-between sm:px-6

      md:px-10 md:py-4
      lg:px-16
      xl:px-24
    ">
      
    
      <div className="flex justify-center sm:justify-start">
        <img
          src={logo}
          alt="logo"
          className="
            h-14
            sm:h-16
            md:h-20
            lg:h-24
            xl:h-28
          "
        />
      </div>

  
      <div
        className="
          flex flex-wrap justify-center gap-3 text-sm
          sm:gap-5 sm:text-base
          md:gap-6 md:text-lg
          lg:gap-10 lg:text-xl
        "
      >
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/amenties" className="hover:text-gray-300">Amenities</Link>
        <Link to="/galleries" className="hover:text-gray-300">Galleries</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/location" className="hover:text-gray-300">Location</Link>
        <Link to="/about-us" className="hover:text-gray-300">About Us</Link>
      </div>

     
      <div className="flex justify-center sm:justify-end">
        <input
          type="text"
          className="
            rounded-md px-3 py-1 text-black bg-white 
            w-40
            sm:w-48
            md:w-56
            lg:w-64
          "
          placeholder="Search..."
        />
      </div>
    </div>
  );
}
