import React, { Component } from 'react';

class Pelicula extends Component {
    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula, this.props.indice);
    }
    render() {
        const { title, image, year } = this.props.pelicula;
        return (
            <React.Fragment>
                <div className="card shadow">
                    <img src={image} alt={title} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <span className="badge badge-info">{year}</span>
                        <button className="btn btn-warning mt-3 w-100" onClick={this.marcar}>Marcar como favorita</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Pelicula;