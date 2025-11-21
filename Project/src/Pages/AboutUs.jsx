import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import banner2 from "../assets/Images/banner2.png";

export default function AboutUs() {
  return (
    <div className="w-full bg-white ">
        <Navbar />
        <Header />
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        About Us
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div>
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Gurukrupa Steel & Fabrication specializes in high-quality steel
            fabrication, welding work, and custom metal structures.  
            With years of experience, we deliver durable, reliable and premium
            craftsmanship for industrial as well as residential projects.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To create strong and long-lasting steel structures with modern
            technology, precision, and customer-focused service.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">Why Choose Us?</h2>
          <ul className="text-gray-700 list-disc ml-6 space-y-1">
            <li>Premium-grade steel material</li>
            <li>Professional welding team</li>
            <li>Custom fabrication for any requirement</li>
            <li>On-time delivery & installation</li>
          </ul>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
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
