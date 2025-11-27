import React from 'react';
import product1 from '../assets/Images/product1.webp';
import product2 from '../assets/Images/product2.webp';
import product3 from '../assets/Images/product3.webp';
import product4 from '../assets/Images/product4.webp';
import pr5 from '../assets/Images/pr5.webp';
import pr6 from '../assets/Images/pr6.webp';
import pr7 from '../assets/Images/pr7.jpeg';
import pr8 from '../assets/Images/pr8.jpg';

export default function ProductCard() {
  const products = [
    { img: product1, name: "Steel Gates", desc: "Custom-designed heavy-duty steel gates for homes & industries.", price: "₹4,500 – ₹18,000" },
    { img: product2, name: "Steel Railings", desc: "High-strength stainless steel railings for safety & durability.", price: "₹500 – ₹1,500 per ft" },
    { img: product3, name: "Steel Staircase", desc: "Modern & strong steel staircases for commercial spaces.", price: "₹15,000 – ₹65,000" },
    { img: product4, name: "Steel Sheds", desc: "Weather-resistant steel sheds for warehouses & workshops.", price: "₹25,000 – ₹1,20,000" },
    { img: pr5, name: "Metal Fabrication", desc: "All types of custom metal cutting, bending & fabrication work.", price: "₹300 – ₹2,000 per piece" },
    { img: pr6, name: "Welding Services", desc: "MIG, TIG, Arc welding services with professional finishing.", price: "₹200 – ₹1,000 per job" },
    { img: pr7, name: "Steel Grills", desc: "Strong and stylish window & balcony steel grill designs.", price: "₹400 – ₹900 per ft" },
    { img: pr8, name: "Steel Furniture", desc: "Durable & long-lasting steel tables, racks, and cabinets.", price: "₹2,000 – ₹15,000" },
  ];

  return (
    <div className="m-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 bg-black">

        {products.map((p, i) => (
          <div
            key={i}
            className="
              group 
              bg-[#1a1a1a]/70 
              backdrop-blur-xl 
              rounded-2xl 
              p-4 
              border border-gray-700 
              shadow-[0_0_20px_rgba(0,0,0,0.4)]
              transition 
              duration-300 
              hover:-translate-y-2 
              hover:border-blue-500 
              hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]
            "
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition duration-300"
            />

            <h3 className="text-center mt-3 font-semibold text-lg text-blue-300 group-hover:text-blue-400 transition">
              {p.name}
            </h3>

            <p className="text-center text-sm text-gray-300 mt-1">
              {p.desc}
            </p>

            <p className="text-center mt-3 font-bold text-blue-400 tracking-wide">
              {p.price}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
