import React from 'react';
import './Landing.css';
import img1 from './98766982e56d7f89-sticker.png'

function landing() {
  return (
 
     
      <div className="landing-content">
          <h3>Hello I'm</h3>
          <h1><span>Quaya</span> Brown</h1>
            <img src={img1} class="landing-img"/>
          <div className='landing-btns'>
            <button className="about-btn">About Me</button>
            <button 
              className="resume-btn" 
              onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vRtIIX0gqoRdKJfLYDMgC0Pw0Q2VcgDtpQSHzS_jxcwrAtf7SHOILNeA5FEW2AaL8Rxikc9JGjgX0WX/pub?embedded=true', '_blank')}
            >
            Resume
          </button>
          </div>
        </div>

    
  )
}

export default landing
