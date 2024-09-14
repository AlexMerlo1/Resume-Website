import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="topnav">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/aboutme" className={location.pathname === '/aboutme' ? 'active' : ''}>About Me</Link>
      <Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link>
      <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
      {/* External links for GitHub and LinkedIn */}
      <a href="https://github.com/alexmerlo1" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/alexander-merlo-779716209" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  );
}

export default NavBar;
