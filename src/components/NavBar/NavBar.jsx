import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="topnav">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link>
      <a href="https://github.com/alexmerlo1" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/alexander-merlo-779716209" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      
      {/* Contact button that opens the modal */}
      <button onClick={toggleModal} className="contact-btn">Contact</button>

      {/* Modal for displaying email and phone number */}
      {isModalOpen && (
        <div className="contact-modal">
          <div className="contact-modal-content">
            <h2>Contact Info</h2>
            <p>Email: <a href="mailto:alexmerlo220@gmail.com">alexmerlo220@gmail.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 (248) 817-9020</a></p>
            <button onClick={toggleModal} className="close-modal">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
