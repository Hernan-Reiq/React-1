import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">

                        <NavLink to="/error" className="navbar-brand">Error</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mx-2">
                                    <NavLink to="/home" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink to="/logos" className="nav-link">Logos</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink to="/static" className="nav-link">Static</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink to="/test" className="nav-link">Test</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink to="/test/hernan/demorizi ureña" className="nav-link">Name</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;