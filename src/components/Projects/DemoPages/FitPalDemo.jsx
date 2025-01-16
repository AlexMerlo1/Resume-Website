import React from 'react';
import NavBar from '../../NavBar/NavBar';
import './FitPalDemo.css';
import demoVideo from '../../../assets/FitPalProDemo.mp4'; 

const FitPalDemo = () => {
  return (
    <div>
      <NavBar />
      <div className="demo-container">
        <h1>Fit Pal Pro</h1>
        <video controls className="demo-video">
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FitPalDemo;
