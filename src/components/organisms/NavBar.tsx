import React from "react";
import "../../styles/organisms/navbar.scss";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
            to="/aboutme"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calculator"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/game"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Game
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
