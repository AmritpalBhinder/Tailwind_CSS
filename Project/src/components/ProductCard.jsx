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
  return (
    <div className="m-4">

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">

        {/* Card 1 */}
        <div className="bg-gray-100 rounded-md p-3 shadow hover:shadow-lg duration-200">
          <img src={product1} alt="Steel Gate" className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-center mt-2 font-semibold text-lg">Steel Gates</h3>
          <p className="text-center text-sm text-gray-600">Custom-designed heavy-duty steel gates for homes & industries.</p>
          <p className="text-center mt-2 font-bold text-gray-800">₹4,500 – ₹18,000</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-md p-3 shadow hover:shadow-lg duration-200">
          <img src={product2} alt="Steel Railings" className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-center mt-2 font-semibold text-lg">Steel Railings</h3>
          <p className="text-center text-sm text-gray-600">High-strength stainless steel railings for safety & durability.</p>
          <p className="text-center mt-2 font-bold text-gray-800">₹500 – ₹1,500 per ft</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 rounded-md p-3 shadow hover:shadow-lg duration-200">
          <img src={product3} alt="Steel Staircase" className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-center mt-2 font-semibold text-lg">Steel Staircase</h3>
          <p className="text-center text-sm text-gray-600">Modern & strong steel staircases for commercial spaces.</p>
          <p className="text-center mt-2 font-bold text-gray-800">₹15,000 – ₹65,000</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-100 rounded-md p-3 shadow hover:shadow-lg duration-200">
          <img src={product4} alt="Steel Shed" className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-center mt-2 font-semibold text-lg">Steel Sheds</h3>
          <p className="text-center text-sm text-gray-600">Weather-resistant steel sheds for warehouses & workshops.</p>
          <p className="text-center mt-2 font-bold text-gray-800">₹25,000 – ₹1,20,000</p>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-100 rounded-md p-3 shadow hover:shadow-lg duration-200">
          <img src={pr5} alt="Metal Fabrication" className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-center mt-2 font-semibold text-lg">Metal Fabrication</h3>
          <p className="text-center text-sm text-gray-600">All types of custom metal cutting, bending & fabrication work.</p>
          <p className="text-center mt-2 font-bold text-gray-800">₹300 – ₹2,000 per piece</p>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-100 rounded-md p-3 shadow hover:shadow-lg duration-200">
          <img src={pr6} alt="Welding Service" className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-center mt-2 font-semibold text-lg">Welding Services</h3>
          <p className="text-center text-sm text-gray-600">MIG, TIG, Arc welding services with professional finishing.</p>
          <p className="text-center mt-2 font-bold text-gray-800">₹200 – ₹1,000 per job</p>
        </div>

        {/* Card 7 */}
        <div className="bg-gray-100 rounded-md p-3 shadow hover:shadow-lg duration-200">
          <img src={pr7} alt="Custom Steel Grills" className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-center mt-2 font-semibold text-lg">Steel Grills</h3>
          <p className="text-center text-sm text-gray-600">Strong and stylish window & balcony steel grill designs.</p>
          <p className="text-center mt-2 font-bold text-gray-800">₹400 – ₹900 per ft</p>
        </div>

        {/* Card 8 */}
        <div className="bg-gray-100 rounded-md p-3 shadow hover:shadow-lg duration-200">
          <img src={pr8} alt="Steel Furniture" className="w-full h-40 object-cover rounded-md" />
          <h3 className="text-center mt-2 font-semibold text-lg">Steel Furniture</h3>
          <p className="text-center text-sm text-gray-600">Durable & long-lasting steel tables, racks, and cabinets.</p>
          <p className="text-center mt-2 font-bold text-gray-800">₹2,000 – ₹15,000</p>
        </div>

      </div>
    </div>
  );
}
