import React from "react";
import { NavLink } from "react-router-dom";

export const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Github API
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/home"
                activeStyle={{ fontWeight: "bold", color: "#2196f3" }}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
