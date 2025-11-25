import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import banner2 from "../assets/Images/banner2.png";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />
      <Header />

      <h1 className="text-3xl font-bold text-center text-blue-400 drop-shadow-lg mb-10">
        About Us
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 pb-16">

        
        <div
          className="
            bg-[#1a1a1a]/80 
            backdrop-blur-xl 
            p-6 
            rounded-2xl 
            border border-gray-700 
            shadow-[0_0_20px_rgba(0,0,0,0.6)]
            hover:border-blue-500 
            hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]
            transition duration-300
          "
        >
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Gurukrupa Steel & Fabrication specializes in high-quality steel
            fabrication, welding work, and custom metal structures.
            With years of experience, we deliver durable, reliable and premium
            craftsmanship for both industrial and residential projects.
          </p>

          <h2 className="text-2xl font-semibold text-blue-300 mt-8 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            To create strong and long-lasting steel structures using modern
            technology, precision, and a customer-focused service approach.
          </p>

          <h2 className="text-2xl font-semibold text-blue-300 mt-8 mb-3">
            Why Choose Us?
          </h2>
          <ul className="text-gray-300 list-disc ml-6 space-y-2">
            <li>Premium-grade steel material</li>
            <li>Professional and experienced welding team</li>
            <li>Custom fabrication for any requirement</li>
            <li>On-time delivery & expert installation</li>
          </ul>
        </div>

        {/* Image Section */}
        <div
          className="
            rounded-2xl 
            overflow-hidden 
            border border-gray-700 
            shadow-[0_0_25px_rgba(0,0,0,0.6)]
            hover:border-blue-500
            hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]
            transition duration-300
          "
        >
          <img
            src={banner2}
            alt="fabrication work"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      <Footer />
    </div>
  );
}
