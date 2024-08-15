import React from 'react';
import NavBar from '../NavBar/NavBar';
import './HomePage.css';
import TechIcon from './TechIcons/TechIcons';

// Import images
import javaLogo from '../../assets/Java-Logo.png';
import pythonLogo from '../../assets/python-logo.png';
import qlikLogo from '../../assets/qlik-logos.png';
import cLogo from '../../assets/C_LOGO.png';
import javascriptLogo from '../../assets/javascriptt-logo.png';
import headshot from '../../assets/headshot.png';
import resume from '../../assets/Alex Merlo Resume.pdf';





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
          <a href={resume} download className="resume-download">
             <i className="material-icons">download</i> My Resume
          </a>    
          </div>
        </div>
        <div className="my-picture">
          <img src={headshot} alt="Picture of Alex Merlo" />
        </div>
      </div>
      <div className='technologies-container'>
        <h3>My Skills</h3>
        <div className='technologies-icons'>
          <TechIcon src={javaLogo} alt="Java Logo" />
          <TechIcon src={pythonLogo} alt="Python Logo" />
          <TechIcon src={qlikLogo} alt="Qlik Logo" />
          <TechIcon src={cLogo} alt="C Logo" />
          <TechIcon src={javascriptLogo} alt="JavaScript Logo" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
