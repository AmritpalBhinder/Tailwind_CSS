import React from 'react';

export default function Header() {
  return (
    <div className="
      w-full bg-blue-600 text-white 
      flex flex-col items-center justify-center 
      py-3 
      sm:flex-row sm:justify-between sm:px-6
      md:px-10
      lg:px-16
    ">
      
      
      <h1 className="
        text-xl font-bold 
        sm:text-2xl 
        md:text-3xl
      ">
        Gurukrupa Steel And Fabrication
      </h1>

      <p className="
        text-sm mt-1 
        sm:mt-0 sm:text-base
      ">
        Excellence in Steel Works & Fabrication Services
      </p>
    </div>
  );
}
