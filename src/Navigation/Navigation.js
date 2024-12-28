import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navigation.css";
import logoimg from './46292f5e6c8d90a4-sticker.png'


function Navigation() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeMenu = () => setMenuVisible(false);
  

  return (
    <header className="header" id="header">
      <nav className="nav container">
        {/* <img src={logoimg} className="logoimg"/> */}
        <a href="/" className="nav__logo">TechnoQuaya</a>

        <div className={`nav__menu ${menuVisible ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list">
            {/* <li className="nav__item">
              <NavLink to="/" onClick={closeMenu}>
                <span>Home</span>
              </NavLink>
            </li> */}
            <li className="nav__item">
              <NavLink to="/about" onClick={closeMenu}>
                <span>About Me</span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/experience" onClick={closeMenu}>
                <span>Experience</span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/projects" onClick={closeMenu}>
                <span>Projects</span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/contact" onClick={closeMenu}>
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>

          <div className="nav__close" onClick={closeMenu}>
            <i className="ri-close-large-line"></i>
          </div>

          <div className="nav__social">
            <a href="https://github.com/DQuaya" target="_blank" className="nav__social-link" rel="noreferrer">
              <i className="ri-github-line"></i>
            </a>
            <a href="https://dribbble.com/Technoquaya" target="_blank" className="nav__social-link" rel="noreferrer">
              <i className="ri-dribbble-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/donquayabrown/" target="_blank" className="nav__social-link" rel="noreferrer">
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>
        </div>

        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}


export default Navigation;


