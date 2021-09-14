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
    }
    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary my-2" onClick={this.pedirProyectos}>Mis proyectos</button>
                <div className="container">
                    {this.state.proyectos.length !== 0 &&                        
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
            </React.Fragment>
        )
    }
}

export default Peticiones;