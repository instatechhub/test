import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbarContainer ${scrolled ? 'navbarScrolled' : ''}`}>
      <div className="navbarLogo">
        <img src="/logo.png" alt="Tree House Logo" />
      </div>
      <div className="navbarLinks">
        <a href="/">HOME</a>
        <a href="/about">ABOUT US</a>
        <a href="/membership">MEMBERSHIP</a>
        <div className="dropdown">
          <button className="dropbtn">CLIENT ▾</button>
          <div className="dropdown-content">
            <a href="#">Testimonials</a>
            <a href="#">Stories</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">HOTELS & RESORTS ▾</button>
          <div className="dropdown-content">
            <a href="#">Domestic</a>
            <a href="#">International</a>
          </div>
        </div>
        <a href="/contact">CONTACT US</a>
        <a href="/login" className="loginBtn">LOGIN</a>
      </div>
    </div>
  );
};

export default Navbar;
