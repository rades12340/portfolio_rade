import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* <div className="one">
          <a
            href="https://www.facebook.com/rade.savkovic.7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/radisav-savkovic-3218b3156/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://twitter.com/rades_90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/rade_savkovic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div> */}
        <div className="two">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="three">
          Development by Radisav Savkovic. Copyright 2019.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
