import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">

                        <NavLink to="/error" activeClassName="active" className="h5 text-decoration-none">Error</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item mx-2">
                                    <NavLink to="/home" activeClassName="active" className="h5 text-decoration-none">Home</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink to="/logos" activeClassName="active" className="h5 text-decoration-none">Logos</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink to="/static" activeClassName="active" className="h5 text-decoration-none">Static</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink to="/test" activeClassName="active" className="h5 text-decoration-none">Test</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink to="/react/hernan/demorizi ureña" activeClassName="active" className="h5 text-decoration-none">Name</NavLink>
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