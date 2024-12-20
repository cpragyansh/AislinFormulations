"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Automatically close the menu when a link is clicked
  };

  return (

<div className="navbar-main-container">
    {/* <div className="navbar-days-time-block-main">

<div className="navbar-days-flex-section">

<div className="days-and-time-block">
  Monday-Saturday 10AM-7PM
</div>

<div className="navbar-phone-number-section">
  <a href="tel:+9179797979"><p>+91 797979799979</p></a>
</div>
<div className="navbar-mail-section">
  <a href="mailto:info@gmail.com">xxxxxxxxxx</a>
</div>

</div>



</div> */}


<div className="navbar-certifications-of-company">

<div className="aislin-main-logo-first-navbar">
  <img src="assets/Aisilin-logo.png" alt="" className="aislin-main-navbar-logo" />
</div>

<div className="nav-bar-certifications-main-main-box">
  <div className="navbar-certifications-1">
    <div className="certificate-logo">
     <img src="assets/approved.png" alt="" className="gmp-certificate-approved-logo"/>
     </div>

     <div className="navbar-certificate-title-head">
    <h1 className="naavbar-certification-1-name">

      GMP Certified Company 
    </h1>
    <p className="navbar-certifications-1-number">
      783432983444
    </p>
    </div>

  </div>
  <div className="navbar-certifications-1">
  <div className="certificate-logo">
      <img src="assets/reward.png" alt="" className="gmp-certification-reward-logo" />
   </div>
   <div className="navbar-certificate-title-head">
    <h1 className="naavbar-certification-1-name">
      GMP Certified Company 
    </h1>
    <p className="navbar-certifications-1-number">
    88998326721
    </p>
</div>

  </div>
  </div>
</div>


<div className="navbar-bottom-container">
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <img
          src="/assets/Aisilin-logo.png"
          alt="CGC Jhanjeri"
          className="logo"
        />
      </div>

      <button
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Additional section */}





        {/* end */}

      <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li className="dropdown">
          <Link to="#" onClick={(e) => e.preventDefault()}>
            Products
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/patents" onClick={closeMenu}>
                Patents Filed
              </Link>
            </li>
            <li>
              <Link to="/success-stories" onClick={closeMenu}>
                Success Stories
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/our-policy" onClick={closeMenu}>
            Our Policy
          </Link>
        </li>
        <li>
          <Link to="/manufacturing" onClick={closeMenu}>
            Manufacturing
          </Link>
        </li>
      </ul>
      <div className="navbar-logo">
        <img
          src="/assets/Aisilin-logo.png"
          alt="CGC Jhanjeri"
          className="logo"
        />
      </div>
    </nav>
    </div>
    </div>
  );
};

export default Navbar;
