import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Location() {
  return (
    
    <div className="w-full bg-gray-50 ">
        <Navbar />
        <Header />
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Our Location
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="bg-white shadow-md p-6 rounded-xl border">
          <h2 className="text-2xl font-semibold mb-4">Address</h2>
          <p className="text-gray-700">
            <span className="font-semibold">Shop No: 125, Sarthee Appartment</span><br />
            Chalthan, Surat, Gujarat, India
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
          <p className="text-gray-700">📞 +91 9558841150</p>
          <p className="text-gray-700">📧 gurukrupasteelart1550@gmail.com</p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-md">
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
