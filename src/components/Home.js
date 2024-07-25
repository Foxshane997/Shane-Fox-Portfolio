import React from "react";
import Hero from "./Hero";
import HeroBackground from "../assets/images/HeroBackground.jpg"

function HomePage() {
  return (
    <div>
      
      <Hero
        backgroundImage={HeroBackground}
        title="Welcome to My Website"
        subtitle="Explore my work and projects"
      />
    </div>
  );
}

export default HomePage;
