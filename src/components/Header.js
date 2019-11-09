import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import classNames from "classnames";

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hamb, setHamb] = useState(false);

  const closeNavbar = () => {
    setHamb(false);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks

  const toggleHamb = () => {
    setHamb(!hamb);
  };

  return (
    <div className="header__menu">
      <div className="logo__cont">
        <h1 className="logo">RadiSav</h1>
      </div>
      <ul className="links">
        <NavLink exact to="/" className="link" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/services" className="link" activeClassName="active">
          Services
        </NavLink>
        <NavLink
          exact
          to="/portfolio"
          className="link"
          activeClassName="active"
        >
          Portfolio
        </NavLink>
        <NavLink exact to="/about" className="link" activeClassName="active">
          About
        </NavLink>
        {/* <NavLink exact to="/contact" className="link" activeClassName="active">
          Contact
        </NavLink> */}
        {/* <NavLink className="link sign__up">Sign Up</NavLink> */}
      </ul>
      <div
        className={classNames({ hamburger: true, active: hamb })}
        onClick={toggleHamb}
      >
        <div></div>
      </div>
      <div className="menu">
        <div className={classNames({ left_header: true, active: hamb })}></div>
        <div className={classNames({ right_header: true, active: hamb })}>
          <nav>
            <NavLink
              exact
              activeClassName="active"
              onClick={closeNavbar}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              onClick={closeNavbar}
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              onClick={closeNavbar}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              onClick={closeNavbar}
              to="/about"
            >
              About
            </NavLink>
            {/* <NavLink
              exact
              activeClassName="active"
              onClick={closeNavbar}
              to="/contact"
            >
              Contact
            </NavLink> */}
          </nav>
          <div className="second__nav"></div>
        </div>
      </div>
    </div>
  );
};

export default header;
