import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Projects.css';

const projects = [
  {
    title: 'Bullet Wars 2D Game',
    description: 'A 2D Platformer using Pygame that implemented enemy AI, physics, collision detection, and more...',
    link: 'https://github.com/AlexMerlo1/PlatformerGame'
  },
  {
    title: 'SalesStream (Order Processing System)',
    description: 'A javaFX program that allowed users to create orders, track totals, and and "pay" for their goods',
    link: 'https://github.com/AlexMerlo1/SalesStreamProject'
  },
  {
    title: '5x5 TicTacToe',
    description: 'A JavaFX program that ran a 5x5 version of TicTacToe and kept track of scores',
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
