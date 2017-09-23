import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand">Navbar</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><a className="nav-link" href="#">{props.homeLink}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};