import React from "react";
import banner1 from "../assets/Images/banner1.png";

export default function Banner() {
  return (
    <div className="w-full flex justify-center mt-6 px-4">
      <div
        className="
          w-full max-w-6xl 
          rounded-2xl overflow-hidden 
          shadow-[0_4px_25px_rgba(0,0,0,0.4)]
          border border-gray-700
          relative group
        "
      >
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-10"></div>

        <img
          src={banner1}
          alt="banner"
          className="
            w-full 
            h-[200px]
            sm:h-[260px]
            md:h-[320px]
            lg:h-[380px]
            xl:h-[420px]
            object-cover
            transform group-hover:scale-105 
            transition-all duration-700
          "
        />
        
      </div>
    </div>
  );
}
