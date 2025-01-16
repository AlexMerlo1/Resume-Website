import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import NavBar from '../NavBar/NavBar';
import './Projects.css';

const projects = [
  {
    title: 'Fit Pal Pro',
    description: 'A web application allowing users to create accounts, become friends with other users, and track their workout progress',
    link: '/Projects/FitPalProDemo' 
  },
  {
    title: 'Quadratic Surface Visualizor',
    description: 'Creates a Quadratic Surface class in Python to analyze and visualize quadratic surfaces in 3D space using QR factorization, eigenvalues, and shape classification',
    link: 'https://github.com/AlexMerlo1/Quadratic-Surfaces'
  },
  {
    title: 'Bullet Wars 2D Game',
    description: 'A 2D Platformer using Pygame that implemented enemy AI, physics, and collision detection',
    link: 'https://github.com/AlexMerlo1/PlatformerGame'
  },
  {
    title: 'SalesStream (Order Processing System)',
    description: 'A point-of-sales system that allows users to create orders, track totals, and "pay" for their goods',
    link: 'https://github.com/AlexMerlo1/SalesStreamProject'
  },
  {
    title: '5x5 TicTacToe',
    description: 'A 5x5 version of TicTacToe with score tracking created using JavaFX',
    link: 'https://github.com/AlexMerlo1/5x5TicTacToe'
  }
];

const Projects = () => {
  return (
    <div>
      <NavBar />
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div className="project-item" key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.link.startsWith('/Projects') ? (
                <Link to={project.link}>Watch Demo</Link>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer">Learn More</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
