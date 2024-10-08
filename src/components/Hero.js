import React, { useEffect, useState } from 'react';
import '../assets/styles/Hero.css';
import heroImage from '../assets/images/HeroBackground.jpg';

const Hero = ({ title = "Welcome to My Portfolio!", subtitle = "Explore my projects & learn about me!" }) => {
  const [isImageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className="hero" style={{ backgroundImage: isImageLoaded ? `url(${heroImage})` : 'none' }}>
      {isImageLoaded ? (
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      ) : (
        <div className="hero-content">
          <h1>Loading...</h1>
          <p>Please wait while we load the hero image.</p>
        </div>
      )}
    </div>
  );
}

export default Hero;
