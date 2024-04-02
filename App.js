// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import CSS file after external libraries
import Nav from './Components/Nav.jsx'; // Import Nav component after CSS
import Home from './Components/Home';
import Services from './Components/Services';
import Technology from './Components/Technology';
import Portfolio from './Components/Portfolio';
import Hero from './Components/Hero.js';
import Cards from './Components/Cards.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Hero/>
        <Cards/>
        <Footer/>
      </div>
    </Router>

    
  );
}

export default App;
