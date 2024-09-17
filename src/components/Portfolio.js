import React from 'react';
import '../assets/styles/Portfolio.css';
import StarWarsQuizImage from '../assets/images/Star Wars Quiz Screen Shot.png';
import ToDoImage from '../assets/images/To Do Nuero Image.png';
import MapImage from '../assets/images/Nuero API JS Map.png';
import CounterImage from '../assets/images/Nuero Counter Image.png';
import MoleImage from '../assets/images/Nuero react-a-mole.png';
import GalleryImage from '../assets/images/Nuero Art Gallery.png';
import MernApp from '../assets/images/MERN Recipe Application.png';
import TimerImage from '../assets/images/Nuromophic Timer App.png';
import PortfolioImage from '../assets/images/Portfolio Image.png';

const Portfolio = () => {
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
      title: 'To-Do Application',
      description: 'A To-Do Application built using React.',
      image: ToDoImage,
      link: 'https://foxshane997.github.io/SF-To-Do-List.github.io/',
      mobileFriendly: 'Yes'
    },
    {
      id: 3,
      title: 'Counter app in React',
      description: 'A counter app made with React.',
      image: CounterImage,
      link: 'https://foxshane997.github.io/Counter/',
      mobileFriendly: 'Yes'
    },
    {
      id: 4,
      title: 'JavaScript API Map',
      description: 'Using API fetch to render a Map.',
      image: MapImage,
      link: 'https://foxshane997.github.io/Map.github.io/',
      mobileFriendly: 'Yes'
    },
    {
      id: 5,
      title: 'React-A-Mole',
      description: 'React Wack-A-Mole.',
      image: MoleImage,
      link: 'https://foxshane997.github.io/React-A-Mole/',
      mobileFriendly: 'Yes'
    },
    {
      id: 6,
      title: 'React Art Gallery',
      description: 'A art gallery using React API fetch.',
      image: GalleryImage,
      link: 'https://foxshane997.github.io/RR-Art-Gallery/',
      mobileFriendly: 'Yes'
    },
    {
      id: 7,
      title: 'MERN Fullstack Recipe',
      description: 'Fullstack recipe application using MealDealAPI.',
      image: MernApp,
      link: 'https://recipez-ijuh.onrender.com/',
      mobileFriendly: 'Yes'
    },
    {
      id: 8,
      title: 'Timer React Application',
      description: 'Timer App made with React.',
      image: TimerImage,
      link: 'https://foxshane997.github.io/Timer-Application/',
      mobileFriendly: 'Yes'
    },
    {
      id: 9,
      title: 'My Personal Portfolio',
      description: 'My portfolio made with React.',
      image: PortfolioImage,
      link: 'https://foxshane997.github.io/Shane-Fox-Portfolio/',
      mobileFriendly: 'Yes'
    },
  ];

  return (
    <div className="portfolio">
      {projects.map(project => (
        <a href={project.link} className="card" key={project.id} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p className="mobile-friendly">Mobile Friendly: {project.mobileFriendly}</p>
        </a>
      ))}
    </div>
  );
};

export default Portfolio;
