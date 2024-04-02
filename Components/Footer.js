import React from "react";
import logo from "../Pictures/logos.png";
import "../CSS/Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="links">
        <img className="aryu-logo" src={logo} alt="logo" />
        <div className="foot-1">
          <h2>Important Links</h2>
          <h2>About</h2>
          <h2>Career</h2>
          <h2>Solutions</h2>
          <h2>Blog</h2>
          <h2>Contact</h2>
        </div>

        <div className="foot-2">
          <h2>Services</h2>
          <h2>DevOps</h2>
          <h2>VR & AR</h2>
          <h2>Robotic Process Automation</h2>
          <h2>Blockchain Development</h2>
          <h2>Data and Analysis</h2>
          <h2>Cloud Services</h2>
        </div>

        <div className="foot-3">
          <h2>Web Development</h2>
          <h2>Designing Services</h2>
          <h2>QA and Testing</h2>
          <h2>E-Commerce</h2>
          <h2>Mobile Application</h2>
        </div>

        <div className="contact-details">
          <img src="" alt="" />
          <h2>+919994715106</h2>
          <img src="" alt="" />
          <h2>+919994715106</h2>
          <img src="" alt="" />
          <h2>yuvaraj@aryuenterprises.com</h2>
          <input type="text" className="text" />
          <button>Subscribe Now</button>
        </div>

        

        <div className="privacy">
          <div className="icons">
            {/* Placeholder for icons */}
            {/* <img src={} alt=''/> */}
            {/* <img src={} alt=''/> */}
            {/* <img src={} alt=''/> */}
            {/* <img src={} alt=''/> */}
          </div>
          <hr />
        </div>
      </div>
      <div className="footer-last">
      
      <h4>@2024 Aryu Enterprises Pvt Ltd</h4>
      <h4>All Rights Reserved</h4>
        <h4>Sitemap | Privacy Policy | Terms and Conditions</h4>
          
    
      </div>
    </div>
  );
}

export default Footer;
