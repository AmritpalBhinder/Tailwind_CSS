import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      title: "Steel Fabrication",
      desc: "Custom steel gates, railings, sheds, and industrial structures.",
      icon: "🏗️"
    },
    {
      title: "Welding Services",
      desc: "MIG, TIG & ARC welding with high accuracy and strong finishing.",
      icon: "🔥"
    },
    {
      title: "Metal Cutting & Bending",
      desc: "Advanced cutting machines with premium edge finishing.",
      icon: "⚙️"
    },
    {
      title: "On-Site Installation",
      desc: "Expert installation for industrial and residential projects.",
      icon: "🛠️"
    }
  ];

  return (
    
    <div className="w-full bg-white">
        <Navbar />
        <Header />
      <h1 className="text-3xl text-center font-bold mb-8 text-blue-700">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition border"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
