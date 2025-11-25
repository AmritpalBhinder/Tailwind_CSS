import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Location() {
  return (
    <div className="w-full min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />
      <Header />

      <h1 className="text-3xl font-bold text-center text-blue-400 drop-shadow-lg mb-10">
        Our Location
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 pb-16">

      
        <div
          className="
            bg-[#1a1a1a]/90 
            backdrop-blur-xl 
            p-6 
            rounded-2xl 
            border border-gray-700 
            shadow-[0_0_20px_rgba(0,0,0,0.5)]
            hover:border-blue-500 
            hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]
            transition duration-300
          "
        >
          <h2 className="text-2xl font-semibold text-blue-300 mb-4">
            Address
          </h2>
          <p className="text-gray-300 leading-relaxed">
            <span className="font-semibold text-gray-100">
              Shop No: 125, Sarthee Appartment
            </span>
            <br />
            Chalthan, Surat, Gujarat, India
          </p>

          <h2 className="text-xl font-semibold text-blue-300 mt-8 mb-2">
            Contact
          </h2>
          <p className="text-gray-300">📞 +91 9558841150</p>
          <p className="text-gray-300">📧 gurukrupasteelart1550@gmail.com</p>
        </div>

    
        <div
          className="
            rounded-2xl 
            overflow-hidden 
            shadow-[0_0_25px_rgba(0,0,0,0.6)]
            border border-gray-700
            hover:border-blue-500
            hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]
            transition duration-300
          "
        >
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            className="w-full h-80 lg:h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>

      <Footer />
    </div>
  );
}
