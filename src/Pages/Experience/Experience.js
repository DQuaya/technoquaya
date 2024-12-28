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
          <img src='https://i.ibb.co/fHznKG5/release.jpg' alt="Release" />
              <div className="p-content">
                <div className="p-title">Work History</div>
                <div className="p-description">
                  Developed the workflow for the acquisition of new clients and companies using flowable <br/>
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
