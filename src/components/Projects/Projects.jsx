import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Projects.css'; // Import CSS for styling if needed

const projects = [
  {
    title: 'Bullet Wars 2D Game',
    description: 'A brief description of Project One. This project involves... ',
    link: '#'
  },
  {
    title: 'SalesStream (Order Processing System)',
    description: 'A brief description of Project Two. This project focuses on... ',
    link: '#'
  },
  {
    title: '5x5 TicTacToe',
    description: 'Test ',
    link: '#'
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
