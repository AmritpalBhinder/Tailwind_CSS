import React from 'react';
import logo from '../assets/Images/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="
        w-full h-16 bg-gray-700 text-white 
        px-6 py-4 
        flex flex-col 
        gap-4

        sm:flex-row sm:items-center sm:justify-between
        md:px-10 md:py-4
        lg:px-16 lg:py-5
        xl:px-24 xl:py-6
    ">

      {/* LOGO */}
      <div className="
          flex justify-center sm:justify-start
      ">
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

      {/* NAV LINKS */}
      <div className="
          flex flex-wrap justify-center gap-4 text-base

          sm:gap-6 sm:text-lg
          md:gap-8 md:text-xl
          lg:gap-10 lg:text-xl
          xl:text-2xl
      ">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/amenties" className="hover:text-gray-300">Amenities</Link>
        <Link to="/galleries" className="hover:text-gray-300">Galleries</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/location" className="hover:text-gray-300">Location</Link>
        <Link to="/about-us" className="hover:text-gray-300">About Us</Link>
      </div>

      {/* SEARCH BAR */}
      <div className="
          flex justify-center sm:justify-end
      ">
        <input
          type="text"
          className="
              rounded-md px-3 py-1 text-black bg-white w-40
              sm:w-44
              md:w-52
              lg:w-60
              xl:w-72
          "
          placeholder="Search..."
        />
      </div>

    </div>
  );
}
