import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import CustomNavbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
