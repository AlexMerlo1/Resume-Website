import React from 'react';
import NavBar from '../NavBar/NavBar';
import './HomePage.css';
import TechIcon from './TechIcons/TechIcons';
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="summary">
          <h2>Hello I'm,</h2>
          <h1>Alex Merlo</h1>
          <h2>Software Developer</h2>
          <p>
            I am computer science student at Oakland University with experience in data analytics and software development.
          </p>
          <div>
          <a href="src\assets\Alex Merlo Resume.pdf" download className="resume-download">
             <i className="material-icons">download</i> My Resume
          </a>    
          </div>
        </div>
        <div className="my-picture">
          <img src="src/assets/placeholderHeadshot.png" alt="Picture of Alex Merlo" />
        </div>
      </div>
      <div className='technologies-container'>
        <h3>My Skills</h3>
        <div className='technologies-icons'>
          <TechIcon src="src/assets/Technology Icons/Java-Logo.png" alt="Java Logo"/>
          <TechIcon src="src\assets\Technology Icons\python-logo.png" alt="Python Logo" />
          <TechIcon src="src\assets\Technology Icons\qlik-logos.png" alt="Qlik Logo" />
          <TechIcon src="src\assets\Technology Icons\C_LOGO.png" alt="C Logo" />
          <TechIcon src="src\assets\Technology Icons\javascriptt-logo.png" alt="JavaScript Logo" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
