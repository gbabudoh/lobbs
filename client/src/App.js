import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import OurStory from './pages/OurStory';
import OurJuices from './pages/OurJuices';
import OurFocus from './pages/OurFocus';
import Contact from './pages/Contact';
import CookieBanner from './components/CookieBanner';
import Main from './pages/Main'
import Footer from './components/Footer'
import Fruits from './pages/Fruits';
import Vegetables from './pages/Vegetables';
import Label from './pages/Label';
import Distribution from './pages/Distribution';
import WhereToBuy from './pages/WhereToBuy';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/our-juices" element={<OurJuices />} />
        <Route path="/our-focus" element={<OurFocus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/main" element={<Main />} />
        <Route path="/fruits" element={<Fruits />} /> 
        <Route path="/vegetables" element={<Vegetables />} /> 
        <Route path="/label" element={<Label />} /> 
        <Route path="/distribution" element={<Distribution />} /> 
        <Route path="/where-to-buy" element={<WhereToBuy />} /> 
        
       
      </Routes>
      <Footer/>
      <CookieBanner/>
    </div>
  );
}

export default App;
