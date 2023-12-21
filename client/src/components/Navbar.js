import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/images/logo/logo.png';
// import orangeIcon from '../assets/images/icons/orange.png';
// import tomatoIcon from '../assets/images/icons/tomato.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/our-story" onClick={closeMenu}>Our Story</Link>
        <Link to="/our-juices" onClick={closeMenu}>Our Juices</Link>
        <Link to="/our-focus" onClick={closeMenu}>Our Focus</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        {/*<Link to="/fruit" onClick={closeMenu}><img src={orangeIcon} alt="Logo" /></Link>*/}
        {/*<Link to="/vegetable" onClick={closeMenu}><img src={tomatoIcon} alt="Logo" /></Link>*/}
      </div>
      <div className="navbar-mobile">
        <button onClick={toggleMenu} className="menu-button">
          {isOpen ? 'X' : <div className="hamburger-icon" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
