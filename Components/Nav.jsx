// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/style.css';
import logo from '../Pictures/logos.png'; // Import the image file
function Nav() {
  return (
    <div className="aryu-nav-container">
      <div className='aryu-logo'>
        {/* Use imported image */}
        <img src={logo} alt="logo" />
      </div>
      <div className='Nav-bar'>
        <Link to="/" className="nav-link"><h1>HOME</h1></Link>
        <Link to="/about" className="nav-link"><h1>ABOUT</h1></Link>
        <Link to="/services" className="nav-link"><h1>SERVICES</h1></Link>
        <Link to="/technology" className="nav-link"><h1>TECHNOLOGY</h1></Link>
        <Link to="/portfolio" className="nav-link"><h1>PORTFOLIO</h1></Link>
        <Link to="/contact" className="nav-link"><button>CONTACT US</button></Link>
      </div>
    </div>
  );
}

export default Nav;
