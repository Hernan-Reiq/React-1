import React, {Component} from "react";
import logo from '../assets/img/logo.svg';
import ComponenteEstatico from "./static";

class logos extends Component {
    render(){
        return (
            <React.Fragment>
                <h2>I'm learning React</h2>
                <img src={logo} alt="Logo of react" className="w-25 App-logo" />
                <ComponenteEstatico />
            </React.Fragment>
        );
    }
}

export default logos;