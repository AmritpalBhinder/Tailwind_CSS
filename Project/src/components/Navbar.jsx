import React from 'react';
import logo from '../assets/Images/logo.png';

export default function Navbar() {
  return (
    <div className="w-full h-18 bg-gray-500 text-white flex items-center justify-between px-8 xl:columns-3 lg:columns-3 md:columns-2 sm:columns-1">
      <div className="text-2xl font-bold">
        <img src={logo} alt="logo" className="h-20" />
      </div>
      <div className="space-x-6 text-lg flex hidden-md ">
        <a href="#home" className="hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300">Home</a>
        <a href="#amenties" className="hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300">Amenties</a>
        <a href="#gallery" className="hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300">Gallery</a>
        <a href="#services" className="hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300">Services</a>
        <a href="#location" className="hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300">Location</a>
        <a href="#opening-hours" className="hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300">Opening Hours</a>
        <a href="#about-me" className="hover:text-gray-300 border-b-2 border-transparent hover:border-gray-300">About Me</a>
      </div>
      <div className="md:block">
        <input type="text" className="rounded-md px-2 py-1 text-black bg-white" placeholder="Search..." />
      </div>
    </div>

  );
}
