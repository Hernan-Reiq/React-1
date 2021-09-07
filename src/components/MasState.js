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
        name: 'Hernan Demorizi Ureña',
        action: 'Estamos recorriendo un array de objetos que tiene el state y usando las props para tener un código más limpio'
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h3>Selección de películas geniales por {this.state.name}</h3>
                    <div className="card-columns my-3">
                        {
                            this.state.peliculas.map((pelicula, i) => {
                                return (
                                    <Pelicula 
                                        key={i}
                                        pelicula={pelicula}
                                    />
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