import React from "react";
import hero from '../Pictures/herobanner.webp'
import '../CSS/Hero.css'

function Hero() {
  return (
    <div className="hero-banner">
      <img src={hero} alt="hero-banner" className="hero-image" />
    </div>
  );
}

export default Hero;
