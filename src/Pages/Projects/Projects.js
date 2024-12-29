import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section className='portfolio' id='portfolio'>
        <div className='portfolio-container'>
            <div className='section-heading'>
                <h1>Portfolio</h1>
                <h6>View some of my recent work</h6>
            </div>

            <div className='portfolio-items'>
              <div className='portfolio-image has-margin-right'>
                <img src='https://i.ibb.co/jLdKmVj/Screenshot-2024-12-28-at-7-49-35-PM.jpg'/>
              </div>

              <div className='portfolio-description'>
                <h6>NBA Trivia</h6>
                <h1>Python</h1>
                <p>App developed with sports lovers specifically basketball lovers in mind.  Users have to chance to test their
                  NBA knowledge and see if they can get all of the questions answered correctly.
                </p>
                <a href='#' className='cta'>click</a>
              </div>
            </div>

            <div className='portfolio-items'>

            <div className='portfolio-description has-margin-right'>
                <h6>Breezy Collabs</h6>
                <h1>Artist Social App</h1>
                <p>
                  Testing you NBA knowledge <br/>
                  Can you get them all right?
                </p>
                <a href='#' className='cta'>click</a>
              </div>
              <div className='portfolio-image'>
                <img src='https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg'/>
              </div>

              
            </div>

            <div className='portfolio-items'>
              <div className='portfolio-image'>
                <img src='https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg'/>
              </div>

              <div className='portfolio-description'>
                <h6>Web Development</h6>
                <h1>Blog Website</h1>
                <p>this is a test insert infromation here</p>
                <a href='#' className='cta'>click</a>
              </div>
            </div>

            {/* <div className='portfolio-items'>
              <div className='portfolio-image has-margin-right'>
                <img src='https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg'/>
              </div>

              <div className='portfolio-description'>
                <h6>Web Development</h6>
                <h1>Blog Website</h1>
                <p>this is a test insert infromation here</p>
                <a href='#' className='cta'>click</a>
              </div>
            </div> */}

        </div>
    </section>
  )
}

export default Projects
