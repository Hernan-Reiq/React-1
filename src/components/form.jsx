import React, { Component } from "react";

class Formulario extends Component {
    state = {
        userData: {
            name: '',
            lastname: ''
        }
    }

    nameRef = React.createRef();
    lastnameRef = React.createRef();

    showData = (e) => {
        e.preventDefault();
        var data = {
            name: this.nameRef.current.value,
            lastname: this.lastnameRef.current.value
        }
        this.setState({
            userData: (data)
        })
    }

    resetData = (e) => {
        e.preventDefault();
        this.nameRef.current.value = '';
        this.lastnameRef.current.value = '';
        var data = {
            name: '',
            lastname: ''
        }
        this.setState({
            userData: (data)
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.state.userData.name !== '' &&
                        <h3>Name: {this.state.userData.name}</h3>
                    }
                    {this.state.userData.lastname !== '' &&
                        <h3>Last name: {this.state.userData.lastname}</h3>
                    }
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card shadow my-5">
                                <div className="card-header bg-info">
                                    <h2 className="card-title text-white">Formulario</h2>
                                </div>
                                <div className="card-body">
                                    <form id="data_form" onChange={this.showData}>
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
                                        <button type="reset" onClick={this.resetData} form="data_form" className="btn btn-secondary shadow w-100">Reset</button>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" onClick={this.showData} form="data_form" className="btn btn-info shadow w-100">Send information</button>
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