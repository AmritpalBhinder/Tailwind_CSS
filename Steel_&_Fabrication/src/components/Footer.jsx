export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-gray-300 pt-10 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Gurukrupa Steel & Fabrication
          </h2>
          <p className="text-sm leading-6">
            We specialize in high-quality steel fabrication, welding work,
            and custom metal structures with professional finishing.
          </p>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Location</li>
            <li>Contact</li>
          </ul>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact Us</h2>
          <p className="text-sm">📍 Address: Shop No:- 125, Sarthee Appartment, Chalthan, Surat, Gujarat, India</p>
          <p className="text-sm">📞 Phone: +91 9558841150</p>
          <p className="text-sm">📧 Email: gurukrupasteelart1550@gmail.com</p>
        </div>
      </div>

      
      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-4 text-sm">
        © 2025 Gurukrupa Steel & Fabrication. All rights reserved.
      </div>

    </footer>
  );
}
