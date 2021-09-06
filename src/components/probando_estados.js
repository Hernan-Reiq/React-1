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
    sumar() {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }
    render() {
        return (
            <React.Fragment>
                <h3>Cambio de estado (State)</h3>
                <p className="mb-0">Contador: {this.state.contador}</p>
                <div className="row">
                    <div className="col-md-6 my-2">
                        <button onClick={this.restar.bind(this)} className="btn btn-danger">Restar</button>
                    </div>
                    <div className="col-md-6 my-2">
                        <button onClick={this.sumar.bind(this)} className="btn btn-success">Sumar</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Estados;