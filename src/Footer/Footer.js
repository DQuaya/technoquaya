import React from 'react';
import "./Footer.css";
function Footer() {
  return (
    <footer>
    <div className='footerContainer'>
        <div className='socialIcons'>
          <a href='https://www.linkedin.com/in/donquayabrown/'><i class="fa-brands fa-linkedin"></i></a>
          <a href='https://github.com/DQuaya'><i class="fa-brands fa-github"></i></a>
          <a href='https://www.upwork.com/freelancers/~01069eb176838d9046'><i class="fa-brands fa-upwork"></i></a>
          <a href='https://dribbble.com/Technoquaya'><i class="fa-brands fa-dribbble"></i></a>
        </div>

        <div className="footerNav">
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/about'>About</a></li>
          </ul>
        </div>
    </div>

    <div className="footerBottom">
          <p>Copyright &copy;2025 by <span className='designer'>DonQuaya Brown</span></p>
        </div>
    </footer>
  );
}

export default Footer;
