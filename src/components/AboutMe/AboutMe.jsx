import React from 'react'
import NavBar from '../NavBar/NavBar'
import './AboutMe.css'


const AboutMe = () => {
  return (
    <div>
      <NavBar />
      <div className='about-me-wrapper'>
        <h1>What I Do</h1>
        <p>One of the most important aspects of my life is staying fit. I go to the gym everyday and have competed in a powerlifting competition. From then my journey has turned into bodyweight exercises and basketball. </p>
      </div>
    </div>
  )
}

export default AboutMe