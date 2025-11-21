import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Amenties() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="w-full min-h-screen bg-gray-100 py-10 px-5">

        <h1 className="text-center text-3xl font-bold text-gray-800 mb-10">
          Our Amenities
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">


          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">High-Quality Steel Work</h2>
            <p className="text-gray-600 text-sm">
              Premium-grade steel fabrication with precision tools ensuring
              durability and quality.
            </p>
          </div>


          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">Welding Facility</h2>
            <p className="text-gray-600 text-sm">
              MIG, TIG and ARC welding with professional finishing.
            </p>
          </div>


          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">Custom Metal Design</h2>
            <p className="text-gray-600 text-sm">
              Customizable designs based on customer requirements.
            </p>
          </div>


          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">Cutting & Bending</h2>
            <p className="text-gray-600 text-sm">
              Modern cutting & bending machines for precision results.
            </p>
          </div>


          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">On-Site Work</h2>
            <p className="text-gray-600 text-sm">
              Installation and welding work available at customer location.
            </p>
          </div>


          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">Fast Delivery</h2>
            <p className="text-gray-600 text-sm">
              Fast and reliable service with timely delivery guaranteed.
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
