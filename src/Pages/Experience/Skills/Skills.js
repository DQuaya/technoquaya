import React from 'react'
import './Skills.css';

function Skills() {
  return (
    <section className='skls'>
        <header className='skills-header'>Services</header>
        <div className='skill'>
          <div className='skill-set'>
            <span className='fas fa-globe'></span>
            <header>Web Development</header>
            <div className='skills-list'>
              <label>Build & maintain websites & web applications.</label>
            </div>
            <div className='skills-list'>
              <label>Front-end development.</label>
            </div>
            <div className='skills-list'>
              <label>Full-stack development.</label>
            </div>
            <div className='skills-list'>
              <label>Build fast & interactive SPAs.</label>
            </div>
            <div className='tech'>
            <i className='fab fa-angular'></i>
              <i className='fab fa-react'></i>
              <i className='fab fa-css3'></i>
              <i className='fab fa-js'></i>
              <i className='fab fa-html5'></i>
              <i className='fab fa-node-js'></i>
              <i className='fab fa-github'></i>
            </div>
          </div>

         
          <div className='skill-set'>
          <span className='fas fa-mobile-alt'></span>
            <header>Mobile Development</header>
            <div className='skills-list'>
              <label>Develop apps for Android, iOS, or cross-platform solutions.</label>
            </div>
            <div className='skills-list'>
              <label>Ensure app functionality, responsiveness, and user-friendly design.</label>
            </div>
            <div className='tech'>
              <i className='fab fa-react'></i>
              <i className='fab fa-android'></i>
              <i className='fab fa-apple'></i>
              <i className='fab fa-xcode'></i>
            </div>
          </div>
          
          

        
          <div className='skill-set'>
            <span className='fas fa-web-awesome'></span>
            <header> UI/UX Development</header>
            <div className='skills-list'>
              <label>Transform design mockups into functional & visually appealing web pages.</label>
            </div>
            <div className='skills-list'>
              <label>Ensure intuitive navigation and a seamless user experience.</label>
            </div>
        
            <div className='tech'>
              <i className='fab fa-react'></i>
              <i className='fab fa-figma'></i>
              <i className='fab fa-sketch'></i>
              <i className='fab fa-bootstrap'></i>
            </div>
          </div>
         
        </div>
    </section>

  )
}

export default Skills