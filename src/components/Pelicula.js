import React, { Component } from 'react';

class Pelicula extends Component {
    render() {
        const { title, image, year} = this.props.pelicula;
        return (
            <React.Fragment>
                <div className="card shadow">
                    <img src={image} alt={title} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <span className="badge badge-info">{year}</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Pelicula;