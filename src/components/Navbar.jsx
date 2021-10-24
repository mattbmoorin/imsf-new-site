import React from 'react';
import Logo from '../imsf_logo.png';

const scrollToTop = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
};

const Navbar = () => {
  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <img
          src={Logo}
          className="nav-logo"
          alt="Logo."
          onClick={scrollToTop}
        />
        <ul className="nav-items">
          <a href="#SectionOne">
            <li name="section1" className="nav-item">
              This Year's Recipients
            </li>
          </a>
          <a href="#SectionTwo">
            <li className="nav-item">Past Recipients</li>
          </a>
          <a href="#SectionThree">
            <li className="nav-item">Special Events</li>
          </a>
          <a href="#SectionFour">
            <li className="nav-item">Donate</li>
          </a>
        </ul>
        <div className="nav-phone">Call Now: 203-918-3211</div>
      </div>
    </nav>
  );
};

export default Navbar;
