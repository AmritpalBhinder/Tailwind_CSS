import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Amenties() {
  const amenities = [
    {
      title: "High-Quality Steel Work",
      desc: "Premium-grade steel fabrication with precision tools ensuring durability and quality.",
    },
    {
      title: "Welding Facility",
      desc: "MIG, TIG and ARC welding with professional finishing.",
    },
    {
      title: "Custom Metal Design",
      desc: "Customizable designs based on customer requirements.",
    },
    {
      title: "Cutting & Bending",
      desc: "Modern cutting & bending machines for precision results.",
    },
    {
      title: "On-Site Work",
      desc: "Installation and welding work available at customer location.",
    },
    {
      title: "Fast Delivery",
      desc: "Fast and reliable service with timely delivery guaranteed.",
    }
  ];

  return (
    <div className="bg-[#0d0d0d]">
      <Navbar />
      <Header />

      <div className="w-full min-h-screen py-12 px-5">

        <h1 className="text-center text-3xl font-bold text-blue-400 drop-shadow-lg mb-10">
          Our Amenities
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-7xl mx-auto">

          {amenities.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#1a1a1a]/80 
                backdrop-blur-xl 
                p-6 
                rounded-2xl 
                border border-gray-700 
                shadow-[0_0_20px_rgba(0,0,0,0.5)]
                hover:-translate-y-2 
                hover:border-blue-500 
                hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]
                transition 
                duration-300
              "
            >
              <h2 className="text-xl font-semibold text-blue-300 group-hover:text-blue-400 transition">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm mt-2">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </div>
  )
}
