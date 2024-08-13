import React from 'react';
import './TechIcons.css';

const TechIcon = ({ src, alt, label }) => {
  return (
    <div className="tech-icon">
      <img src={src} alt={alt} />
      <p>{label}</p>
    </div>
  );
};

export default TechIcon;
