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
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1c] to-black text-white">
      <Navbar />
      <Header />

      <h1 className="text-3xl text-center font-bold mb-8 text-blue-400 tracking-wide">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 pb-10">
        {services.map((item, index) => (
          <div
            key={index}
            className="
              group
              p-6 
              bg-[#1a1a1a]/70 
              backdrop-blur-xl
              rounded-2xl 
              border border-gray-700 
              shadow-[0_0_20px_rgba(0,0,0,0.4)]
              transition 
              duration-300 
              hover:-translate-y-2 
              hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]
              hover:border-blue-500
            "
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition">{item.icon}</div>
            <h2 className="text-xl font-semibold text-blue-300 group-hover:text-blue-400 transition mb-2">
              {item.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
