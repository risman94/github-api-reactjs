import React from "react";
import {NavLink} from "react-router-dom"

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home" activeStyle={{fontWeight: "bold", color: "#2196f3"}}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/user/10" activeClassName={"active"} activeStyle={{fontWeight: "bold", color: "#2196f3"}}>User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/github" activeStyle={{fontWeight: "bold", color: "#2196f3"}}>Github</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};