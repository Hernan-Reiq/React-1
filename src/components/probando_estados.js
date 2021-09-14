import React, { Component } from "react";

class Estados extends Component {
    /* Cambiar el state, forma larga 
    contador = 0;
    constructor(props){
        super(props);

        this.state = {
            contador: 0
        };
    }*/
    /* Cambiar el state, forma corta */
    state = {
        contador: 0
    }
    restar() {
        this.setState({
            contador: (this.state.contador - 1)
        });
    }
    /* Esta forma de declarar un método ahorra el uso del método bind(this) */
    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h3>Cambio de estado (State)</h3>
                    <p className="mb-0 h4">Contador: {this.state.contador}</p>
                    <div className="row">
                        <div className="col-md-6 my-2 px-0">
                            <button onClick={this.restar.bind(this)} className="btn btn-danger">Restar</button>
                        </div>
                        <div className="col-md-6 my-2 px-0">
                            <button onClick={this.sumar} className="btn btn-success">Sumar</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Estados;