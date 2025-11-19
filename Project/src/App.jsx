import { Routes, Route } from 'react-router-dom';
import './style.css';
import Home from './Pages/Home';
import Amenties from './Pages/Amenties';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amenties" element={<Amenties />} />
      </Routes>
    </>
  );
}

export default App;
