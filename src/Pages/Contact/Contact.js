import React from 'react'
import './Contact.css';
function Contact() {
  return (
    <section className='contact'>
      <div className='contact-content'>
        <h2>Contact Me</h2>
        <p>testing testing read all about it</p>
      </div>
      <div className='contact-container'>
        <div className='contact-info'>
          <div className='contact-box'>
            <div className='contact-icon'><br></br><i className="fa-solid fa-location-dot"></i></div>
            <div className='contact-text'>
              <h3>Location</h3>
              <p>Atlanta, Georgia</p>
            </div>
          </div>
          <div className='contact-box'>
            <div className='contact-icon'><br></br><i className="fa-solid fa-phone"></i></div>
            <div className='contact-text'>
              <h3>Phone</h3>
              <p>(989) 992-1259</p>
            </div>
          </div>
          <div className='contact-box'>
            <div className='contact-icon'><br></br><i className="fa-solid fa-envelope"></i></div>
            <div className='contact-text'>
              <h3>Email</h3>
              <p>technoquaya@gmail.com</p>
            </div>
          </div>

          <h2 className='connect-text'>Connect With Me</h2>
          <ul className='connect-social'>
            <li>
              <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href='https://www.github.com/' target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
        
          <div className='contact-picture'>
            <img src='https://i.ibb.co/nDJ3c2x/IMG-1189.jpg' alt='Contact Picture' />
          </div>
      
      </div>
    </section>
  )
}

export default Contact
