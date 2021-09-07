import React, { Component } from 'react';
import Pelicula from './Pelicula';

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
            },
            {
                title: 'Loki',
                image: 'https://images.clarin.com/2021/04/05/el-afiche-de-loki-con___n0zI0_5PB_720x0__1.jpg',
                year: 2021
            }
        ],
        name: 'Hernan.Reiq',
        action: 'Estamos recorriendo un array de objetos que tiene el state y usando las props para tener un código más limpio',
        favorita: {}
    }

    changeData = () => {
        var { peliculas } = this.state;
        peliculas[0].title = 'Avengers: Endgame';
        peliculas[0].image = 'https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY741_.jpg';
        peliculas[0].year = 2019;
        this.setState({
            peliculas: peliculas
        });
    }

    marcarFavorita = (pelicula, indice) => {
        console.log('Indice de la película por si quieres evitar pasar el objeto:', indice);
        this.setState({
            favorita: pelicula
        });
    }

    eliminarFavorita = () => {
        this.setState({
            favorita: {}
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h3>Selección de películas y series geniales por {this.state.name}</h3>
                    {this.state.favorita.title &&
                        <div class="alert alert-success alert-dismissible fade show my-3" role="alert">
                            <p className="mb-0">
                                Tu favorita es <strong>{this.state.favorita.title}</strong> estrenada en el año <strong>{this.state.favorita.year}</strong>
                            </p>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={this.eliminarFavorita}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    }
                    <div className="card-columns my-3">
                        {
                            this.state.peliculas.map((pelicula, i) => {
                                return (
                                    <Pelicula
                                        key={i}
                                        pelicula={pelicula}
                                        marcarFavorita={this.marcarFavorita}
                                        indice={i}
                                    />
                                );
                            })
                        }
                    </div>
                    <p>{this.state.action}</p>
                    <button className="btn btn-success" onClick={this.changeData}>Change the data for Avengers!</button>
                </div>
            </React.Fragment>
        );
    }
}

export default MasState;