import { Routes, Route } from 'react-router-dom';
import './style.css';
import Home from './Pages/Home';
import Amenties from './Pages/Amenties';
import AboutUs from './Pages/AboutUs';
import Galleries from './Pages/Galleries';
import Location from './Pages/Location';
import Services from './Pages/Services';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amenties" element={<Amenties />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/location" element={<Location />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
