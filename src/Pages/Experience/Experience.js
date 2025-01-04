import React, { useEffect, useRef } from 'react';
import './Experience.css';
import Training from './Training/Training';
import Skills from './Skills/Skills';
import Projects from '../Projects/Projects';
import Technologies from './Technologies/Technologies';
import Workhistory from '../About/WorkHistory/Workhistory';

function Experience() {
  
  return (
    <>
    <div className="p-slider">
          <div className="p-list">
          <div className="p-item" style={{ background: 'linear-gradient(#0553fc,rgb(0, 0, 0))' }}>
          <img src='https://i.ibb.co/QmY6Wdw/IMG-7439.jpg' alt="Release" />
              <div className="p-content">
                <div className="p-title">History</div>
                <div className="p-description">
                  I bring a diverse background in software development, with roles ranging from Associate 
                  Engineer to Front-End Developer and a hands-on internship in front-end development. 
                  My experience spans designing user interfaces, developing full-stack applications, and 
                  automating workflows for enhanced efficiency. I have contributed to innovative projects 
                  in both corporate and independent capacities, consistently delivering functional and 
                  visually appealing solutions tailored to client and user needs. <br/>
                  {/* <br/> */}
                 
                </div>
               
              </div>
            </div>
          </div>
        </div>
    
      {/* <Training/> */}
      <Workhistory/>
      <Technologies/>
        </>
  )
}

export default Experience
