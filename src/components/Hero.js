import React from 'react';
import '../assets/styles/Hero.css';
import heroImage from '../assets/images/HeroBackground.jpg';

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Welcome to My Portfolio!</h1>
        <p>Explore my projects & learn about me!</p>
      </div>
    </div>
  );
}

export default Hero;
