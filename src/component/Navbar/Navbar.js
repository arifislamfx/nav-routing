import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="main-nav-active"
              className="main-nav"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/about"
              activeClassName="main-nav-active"
              className="main-nav"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/contact"
              activeClassName="main-nav-active"
              className="main-nav"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
