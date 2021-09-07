import React, { Component } from 'react';

class MasState extends Component {
    state = {
        peliculas: [
            {
                title: 'Avengers: Infinity War',
                image: 'https://i2.wp.com/hipertextual.com/wp-content/uploads/2018/04/avengers_infinity_war_joe_anthony_russo.jpg',
                year: 2018
            },
            {
                title: 'Interstellar',
                image: 'https://es.web.img3.acsta.net/pictures/14/10/02/11/07/341344.jpg',
                year: 2014
            },
            {
                title: 'Iron Man 3',
                image: 'https://es.web.img3.acsta.net/medias/nmedia/18/77/86/82/20486826.jpg',
                year: 2013
            }
        ],
        name: 'Hernan Demorizi Ureña',
        action: 'Estamos recorriendo un array de objetos que tiene el state'
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h3>Selección de películas geniales por {this.state.name}</h3>
                    <div className="row row-cols-xl-3 my-2">
                        {
                            this.state.peliculas.map((pelicula, i) => {
                                return (
                                    <div className="col-md-4 my-2" key={i}>
                                        <div className="card">
                                            <img src={pelicula.image} alt={pelicula.title} className="card-img-top" />
                                            <div className="card-body">
                                                <h5 className="card-title">{pelicula.title}</h5>
                                                <span className="badge badge-info">
                                                    {pelicula.year}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <p>{this.state.action}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default MasState;