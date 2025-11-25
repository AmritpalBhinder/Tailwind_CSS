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
    const galleryData = [
        {
            img: gallery1,
            title: "Premium Stainless Steel Main Gate",
            desc: "Custom-designed SS gate featuring modern patterns, high durability, and long-lasting shine."
        },
        {
            img: gallery2,
            title: "Industrial Steel Mezzanine Structure",
            desc: "Heavy-duty mezzanine fabricated for warehouses and factories to increase floor space."
        },
        {
            img: gallery3,
            title: "Industrial Steel Fabrication Work",
            desc: "Steel fabrication including cutting, welding & assembly for industrial applications."
        },
        {
            img: gallery4,
            title: "Designer Steel Window Grill",
            desc: "Modern curved stainless steel grill with strong safety build and sleek design."
        },
        {
            img: gallery5,
            title: "I-Beam Fabrication Line",
            desc: "High-precision steel beam manufacturing inside our fully equipped fabrication unit."
        },
        {
            img: gallery6,
            title: "Industrial Steel Rolling Machine",
            desc: "High-capacity rolling machine for shaping steel components with precision."
        },
        {
            img: gallery7,
            title: "Steel Frame Construction",
            desc: "Robust steel frame structures designed for commercial & residential buildings."
        },
        {
            img: gallery8,
            title: "Metal Grinding & Finishing",
            desc: "Precision grinding and finishing for smooth, polished metal surfaces."
        },
    ];

    return (
        <div className="bg-[#0d0d0d]">
            <Navbar />
            <Header />

            <div className="w-full min-h-screen py-12 px-5">

                <h1 className="text-center text-3xl font-bold text-blue-400 drop-shadow-lg mb-10">
                    Our Gallery
                </h1>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto">

                    {galleryData.map((item, index) => (
                        <div
                            key={index}
                            className="
                                bg-[#1a1a1a]/90
                                backdrop-blur-xl
                                rounded-2xl
                                border border-gray-700
                                p-4
                                shadow-[0_0_20px_rgba(0,0,0,0.5)]
                                hover:-translate-y-3
                                hover:border-blue-500
                                hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]
                                transition
                                duration-300
                            "
                        >
                            <img
                                src={item.img}
                                alt="Gallery"
                                className="w-full h-52 object-cover rounded-lg mb-4"
                            />

                            <h2 className="text-xl font-bold text-blue-300">
                                {item.title}
                            </h2>

                            <p className="text-gray-300 text-sm mt-1">
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
