import React, { useEffect } from "react";
import Typed from "typed.js";
import "./About.css";
import Skills from "../Experience/Skills/Skills";
import bg from './bg.png'
import Technologies from "../Experience/Technologies/Technologies";
import Workhistory from "./WorkHistory/Workhistory";

function About() {
  useEffect(() => {
    // Typed.js initialization for hero text
    const typed = new Typed(".typing", {
      strings: ["Software Engineer", "Full Stack Web Developer", "UX/UI Designer", "App Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    // Cleanup to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <section className="about" id="about">

      <div className="aboutimg">
        <img src={bg}/>
      </div>
      <div className="aboutcontent">
        <h1>Hi, i'm <span>DonQuaya</span> a</h1>
        <h5 className="typing"></h5>
        <p className="about-para">
          Versatile Fullstack Developer, skilled in frontend development using
          modern tools and frameworks such as React, Angular. 
          I build scalable, responsive web and mobile applications. 
          Certified and Proficient in React, and many Front-end libraries. Experience with
          Node.js, and RESTful API integration. Although I am experienced with UX/UI development 
          I also have experience collaborating with UX/UI designers, backend
          engineers, and cross-functional teams. Experienced in
          backend technologies like Node.js, PostgreSQL, and Express.js, and familiar
          with mobile development using React Native. Experience at working in Agile
          environments.
        </p>

        <div className="aboutsocial">
          <a href="https://github.com/Dquaya">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://linkedin.com">
              <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <a href="https://docs.google.com/document/d/e/2PACX-1vRtIIX0gqoRdKJfLYDMgC0Pw0Q2VcgDtpQSHzS_jxcwrAtf7SHOILNeA5FEW2AaL8Rxikc9JGjgX0WX/pub" className="aboutbtn" download>
              Download CV
        </a>
      </div>
      </section>
      <Skills />
      <Workhistory/>
      <Technologies/>
    </>
  );
}

export default About;

