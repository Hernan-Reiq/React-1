import React, { Component } from "react";
import axios from "axios";

class Peticiones extends Component {
    state = {
        proyectos: []
    }
    pedirProyectos = () => {
        axios.get('https://hernanreiq.github.io/portafolio/json/proyectos.json')
            .then(res => {
                this.setState({
                    proyectos: (res.data)
                })
            })
            .catch(() => {
                console.log('No hay proyectos!')
            })
    }
    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary my-2" onClick={this.pedirProyectos}>Mis proyectos</button>
                <div className="container">
                    {this.state.proyectos.length !== 0 &&
                        <div className="bg-secondary my-5">
                            <p className="mb-0 h4">El orden de los proyectos es igual a como está en el portafolio de <a href="https://bit.ly/hernanreiq" target="_blank" rel="noopener noreferrer" className="text-warning">Hernan Demorizi Ureña</a></p>
                        {
                            this.state.proyectos.map((proyecto, i) => {
                                return (
                                    <div className="card my-2" key={i}>
                                        <div className="card-header">
                                            <h2 className="card-title mb-0">{proyecto.nombre} <span className="badge badge-primary">{i + 1}</span></h2>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Peticiones;