import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sIcon from "../assets/images/letter-s.png";
import '../assets/styles/NavBar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav') && !event.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="nav">
      <button className="menu-toggle" onClick={toggleMenu}>
        <img src={sIcon} alt="Menu icon" className="nav-icon" />
      </button>
      <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
