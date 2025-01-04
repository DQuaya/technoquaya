
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import React, { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import { PropagateLoader } from "react-spinners";
import { css } from "@emotion/react";
import Projects from './Pages/Projects/Projects';
import Landing from './Pages/Landing/Landing';
import Navigation from './Navigation/Navigation';
import About from './Pages/About/About.js';
import Experience from './Pages/Experience/Experience';
import Contact from './Pages/Contact/Contact';
import ProjectsLanding from './Pages/Projects/ProjectsLanding/ProjectsLanding.js';
import Footer from './Footer/Footer.js';

function App() {

  const [loading, setLoading] = useState(false);
    const override = css`
        display: block;
        border-color: blue;
        margin-top: 20%;
    `;

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
  return (
    <Router>
    <div className="App">

{loading ? (
          <PropagateLoader
            color={"#0017c7"}
            Loading={loading}
            css={override}
            size={40}
          />
        ) : (
          <>
     <Navigation/>
        <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="about" element={<About/> } />
              <Route path="experience" element={<Experience/>} />
              <Route path="projects" element={<ProjectsLanding/>} />
              <Route path="contact" element={<Contact />} />
              <Route path="resume" element={<Projects />} />
          </Routes>
          <Footer/>
          </>
          )}
    </div>
    </Router>
  );
}

export default App;
