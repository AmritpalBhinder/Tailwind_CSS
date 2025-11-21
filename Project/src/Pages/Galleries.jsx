import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import gallery1 from '../assets/Images/gallery1.jpeg'
import gallery2 from '../assets/Images/gallery2.jpg'
import gallery3 from '../assets/Images/gallery3.jpeg'
import gallery4 from '../assets/Images/gallery4.webp'
import gallery5 from '../assets/Images/gallery5.jpeg'
import gallery6 from '../assets/Images/gallery6.jpg'
import gallery7 from '../assets/Images/gallery7.webp'
import gallery8 from '../assets/Images/gallery8.webp'

export default function Galleries() {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="w-full min-h-screen bg-white py-10 px-5">

                <h1 className="text-center text-3xl font-bold text-gray-800 mb-10">
                    Our Gallery
                </h1>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">


                    <div

                        className="bg-pink-100 p-4 shadow-md rounded-lg hover:shadow-2xl transition-colors duration-300"
                    >
                        <img
                            src={gallery1}
                            alt="Gallery1"
                            className="w-full h-48 object-cover rounded-md mb-3"
                        />
                        


                        <h2 className="text-xl font-semibold">Premium Stainless Steel Main Gate</h2>
                        <p className="text-gray-700 font-medium">Custom-designed SS gate featuring modern patterns, high durability, and long-lasting shine.</p>
                    </div>

                    <div
                        className="bg-gray-100 p-4 shadow-md rounded-lg hover:shadow-xl transition"
                    >
                        <img
                            src={gallery2}
                            alt="Gallery2"
                            className="w-full h-48 object-cover rounded-md mb-3"
                        />  
                        <h2 className="text-xl font-semibold">Industrial Steel Mezzanine Structure</h2>
                        <p className="text-gray-700 font-medium">Heavy-duty mezzanine fabricated for warehouses and factories to increase floor space.</p>
                    </div>

                    <div
                        className="bg-gray-100 p-4 shadow-md rounded-lg hover:shadow-xl transition"
                    >
                        <img
                            src={gallery3}
                            alt="Gallery3"
                            className="w-full h-48 object-cover rounded-md mb-3"
                        />
                        <h2 className="text-xl font-semibold">Industrial Steel Fabrication Work</h2>
                        <p className="text-gray-700 font-medium">Comprehensive steel fabrication services including cutting, welding, and assembly for various industrial applications.</p>
                    </div>
                    <div
                        className="bg-gray-100 p-4 shadow-md rounded-lg hover:shadow-xl transition"
                    >
                        <img
                            src={gallery4}
                            alt="Gallery4"
                            className="w-full h-48 object-cover rounded-md mb-3"
                        />
                        <h2 className="text-xl font-semibold">Designer Steel Window Grill</h2>
                        <p className="text-gray-700 font-medium">Modern curved stainless steel grill with strong safety build and sleek design.</p>
                    </div>
                    <div
                        className="bg-gray-100 p-4 shadow-md rounded-lg hover:shadow-xl transition"
                    >
                        <img
                            src={gallery5}
                            alt="Gallery5"
                            className="w-full h-48 object-cover rounded-md mb-3"
                        />
                        <h2 className="text-xl font-semibold">I-Beam Fabrication Line</h2>
                        <p className="text-gray-700 font-medium">High-precision steel beam manufacturing inside our fully equipped fabrication unit.</p>
                    </div>
                    <div
                        className="bg-gray-100 p-4 shadow-md rounded-lg hover:shadow-xl transition"
                    >
                        <img
                            src={gallery6}
                            alt="Gallery6"
                            className="w-full h-48 object-cover rounded-md mb-3"
                        />
                        <h2 className="text-xl font-semibold">Industrial Steel Rolling Machine</h2>
                        <p className="text-gray-700 font-medium">High-capacity rolling machine for shaping steel components with precision and efficiency.</p>
                    </div>
                    <div
                        className="bg-gray-100 p-4 shadow-md rounded-lg hover:shadow-xl transition"
                    >
                        <img
                            src={gallery7}
                            alt="Gallery7"
                            className="w-full h-48 object-cover rounded-md mb-3"
                        />
                        <h2 className="text-xl font-semibold">Steel Frame Construction</h2>
                        <p className="text-gray-700 font-medium">Robust steel frame structures designed and constructed for commercial and residential buildings.</p>
                    </div>
                    <div
                        className="bg-gray-100 p-4 shadow-md rounded-lg hover:shadow-xl transition"
                    >
                        <img
                            src={gallery8}
                            alt="Gallery8"
                            className="w-full h-48 object-cover rounded-md mb-3"
                        />
                        <h2 className="text-xl font-semibold">Metal Grinding & Finishing</h2>
                        <p className="text-gray-700 font-medium">Precision grinding and finishing services to achieve smooth and polished metal surfaces for various applications.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
