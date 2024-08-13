import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="topnav">
      <a className="active" href="">Home</a>
      <a href="AboutMe">About Me</a>
      <a href="Experience">Experience</a>
      <a href="Projects">Projects</a>
      <a href="https://github.com/alexmerlo1" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/alexander-merlo-779716209" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      {/* GitHub and LinkedIn icons with links */}


    </div>
  );
}

export default NavBar;
