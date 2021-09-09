import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Error from './components/Error';
import Home from "./components/home";
import Logos from "./components/logos";
import StaticComponent from './components/static';

class Router extends Component {
    render() {
        return (
            <BrowserRouter> {/*Aquí van todas las configuraciones*/}
                <Switch>{/*Aquí van las rutas*/}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/logos" component={Logos} />
                    <Route exact path="/static" component={StaticComponent} />
                    <Route exact path="/test" render={() => (
                        <h1>Esta ruta renderiza un componente dentro de ella, muy mala práctica pero puede ser útil algún día...</h1>
                    )} />
                    <Route exact path="/home">
                        <Redirect to="/" /> {/*ESTO ME REDIRECCIONA A OTRO LUGAR*/}
                    </Route>
                    <Route path="/test/:nombre/:apellido?" render={(props) => {
                        var nombre = props.match.params.nombre;
                        var apellido = props.match.params.apellido;
                        return (
                            <React.Fragment>
                                <h1 className="display-3">Te doy la bienvenida {nombre} {apellido ? apellido : ''}</h1>
                                <Logos />
                            </React.Fragment>
                        )
                    }
                    } />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;