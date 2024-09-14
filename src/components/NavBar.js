import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sIcon from "../assets/images/letter-s.png";
import '../assets/styles/NavBar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={toggleMenu}>
          <img src={sIcon} alt="Menu icon" className="nav-icon" />
        </button>
        <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
