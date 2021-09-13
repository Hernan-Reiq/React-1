import React, { Component } from "react";

class Formulario extends Component {
    nameRef = React.createRef();
    lastnameRef = React.createRef();

    showData = (e) => {
        e.preventDefault();
        console.log('Your name is:', this.nameRef.current.value);
        console.log('Your last name is:', this.lastnameRef.current.value);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card shadow my-5">
                                <div className="card-header bg-info">
                                    <h2 className="card-title text-white">Formulario</h2>
                                </div>
                                <div className="card-body">
                                    <form id="data_form">
                                        <div className="form-group">
                                            <label htmlFor="form_name">Write your name: </label>
                                            <input id="form_name" ref={this.nameRef} name="name" type="text" autoFocus autoComplete="off" className="w-100 form-group" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="form_lastname">Write your last name: </label>
                                            <input id="form_lastname" ref={this.lastnameRef} name="lastname" type="text" autoComplete="off" className="w-100 form-group" />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer pb-0 bg-warning">
                                    <div className="form-group">
                                        <button type="submit" onClick={this.showData} form="data_form" className="btn btn-secondary shadow w-100">Send information</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Formulario;