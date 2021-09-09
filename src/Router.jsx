import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home";
import Logos from "./components/logos";
import StaticComponent from './components/static';

class Router extends Component {
    render(){
        return(
            <BrowserRouter> {/*Aquí van todas las configuraciones*/}
                <Switch>{/*Aquí van las rutas*/}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/logos" component={Logos} />
                    <Route exact path="/static" component={StaticComponent} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;