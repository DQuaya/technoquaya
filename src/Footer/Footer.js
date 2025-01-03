import React from 'react';
import "./Footer.css";
function Footer() {
  return (
    <footer>
    <div className='footerContainer'>
        <div className='socialIcons'>
          <a href=''><i class="fa-brands fa-linkedin"></i></a>
          <a href=''><i class="fa-brands fa-github"></i></a>
          <a href=''><i class="fa-brands fa-upwork"></i></a>
          <a href=''><i class="fa-brands fa-dribbble"></i></a>
        </div>

        <div className="footerNav">
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href=''>Contact</a></li>
            <li><a href=''>About</a></li>
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
