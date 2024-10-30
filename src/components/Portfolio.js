import React, { useState, useEffect } from 'react';
import '../assets/styles/Portfolio.css';
import StarWarsQuizImage from '../assets/images/Star Wars Quiz Screen Shot.png';
import MapImage from '../assets/images/Nuero API JS Map.png';
import MoleImage from '../assets/images/Nuero react-a-mole.png';
import GalleryImage from '../assets/images/Nuero Art Gallery.png';
import MernApp from '../assets/images/MERN Recipe Application.png';
import CliquePlay from '../assets/images/CliquePlay Portfolio Image.png';
import UtilityImage from "../assets/images/Utility-Image.png"
import PortfolioImage from "../assets/images/Portfolio Image.png"

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const projects = [
    {
      id: 1,
      title: 'Star Wars Quiz Game',
      description: 'A Star Wars quiz game using HTML, CSS, & Javascript.',
      image: StarWarsQuizImage,
      link: 'https://foxshane997.github.io/StarWarsQuiz.github.io/',
      mobileFriendly: 'Yes'
    },
    {
      id: 2,
      title: 'JavaScript API Map',
      description: 'Using API fetch to render a Map.',
      image: MapImage,
      link: 'https://foxshane997.github.io/Map.github.io/',
      mobileFriendly: 'Yes'
    },
    {
      id: 3,
      title: 'React-A-Mole',
      description: 'React Wack-A-Mole.',
      image: MoleImage,
      link: 'https://foxshane997.github.io/React-A-Mole/',
      mobileFriendly: 'Yes'
    },
    {
      id: 4,
      title: 'React Art Gallery',
      description: 'A art gallery using React API fetch.',
      image: GalleryImage,
      link: 'https://foxshane997.github.io/RR-Art-Gallery/',
      mobileFriendly: 'Yes'
    },
    {
      id: 5,
      title: 'MERN Fullstack Recipe',
      description: 'Fullstack recipe application using MealDealAPI.',
      image: MernApp,
      link: 'https://recipez-ijuh.onrender.com/',
      mobileFriendly: 'Yes'
    },
    {
      id: 6,
      title: 'CliquePlay',
      description: 'Music Media player using Express & React With Spotify API.',
      image: CliquePlay,
      link: 'https://milestone-3-front-end-production.up.railway.app/',
      mobileFriendly: 'Yes'
    },
    {
      id: 7,
      title: 'Utility',
      description: 'Utility app made using React.js.',
      image: UtilityImage,
      link: 'https://foxshane997.github.io/Utility/',
      mobileFriendly: 'Yes'
    },
    {
      id: 8,
      title: 'Portfolio',
      description: 'My portfolio using React.js.',
      image: PortfolioImage,
      link: 'https://foxshane997.github.io/Shane-Fox-Portfolio/#/',
      mobileFriendly: 'Yes'
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="portfolio">
      {projects.map((project) => (
        <a
          href={project.link}
          className="card"
          key={project.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isLoading ? (
            <div className="placeholder" />
          ) : (
            <img src={project.image} alt={project.title} />
          )}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p className="mobile-friendly">Mobile Friendly: {project.mobileFriendly}</p>
        </a>
      ))}
    </div>
  );
};

export default Portfolio;
