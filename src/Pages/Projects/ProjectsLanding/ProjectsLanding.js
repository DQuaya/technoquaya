import React from 'react';
import Projects from '../Projects';
import './ProjectLanding.css';
import p1 from './home.PNG';
import p2 from './load.png'
import p3 from './Release.JPG'
// import p4 from './home.PNG'

function ProjectsLanding() {
  return (
    <>
    <div className='project-banner'>
    <header className='pj-header'>
      <div class="project__section header__container">
        <div class="header__image">
          <img src="https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/1583002816518-ZH2PH7Y8NY21KG3YYKNL/Screen+Shot+2020-02-26+at+2.33.24+PM.png" alt="header" />
          <img src="https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/1583002816518-ZH2PH7Y8NY21KG3YYKNL/Screen+Shot+2020-02-26+at+2.33.24+PM.png" alt="header" />
        </div>
        <div class="header__content">
          <div>
            <h1>Projects🎨</h1>
            <p class="section__subtitle">
              Make your travel more enjoyable with us. We are the best travel
              agency and we are providing the best travel services for our
              clients.
            </p>
            
          </div>
        </div>
      </div>
    </header>

        <div className='bottom-bar'>
            <div className='bottom-item'>
                <span className='hover-bar'></span>
                <p>Trail Ahead</p>
                <div className='image-box'>
                    <img src={p1}/>
                </div>
                <a href='#'>Explore</a>
            </div>
            <div className='bottom-item'>
                <span className='hover-bar'></span>
                <p>B-Loadouts</p>
                <div className='image-box'>
                    <img src={p2}/>
                </div>
                <a href='#'>Explore</a>
            </div>
            <div className='bottom-item'>
                <span className='hover-bar'></span>
                <p>NBBBBB</p>
                <div className='image-box'>
                    <img src={p3}/>
                </div>
                <a href='#'>Explore</a>
            </div>
            <div className='bottom-item'>
                <span className='hover-bar'></span>
                <p>B-Release</p>
                <div className='image-box'>
                    <img src='https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg'/>
                </div>
                <a href='#'>Explore</a>
            </div>
        </div>
    </div>
    <Projects/>
    </>
  )
}

export default ProjectsLanding