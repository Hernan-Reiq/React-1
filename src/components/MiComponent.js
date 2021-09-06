import React, { Component } from 'react';
import image_card from '../assets/img/image_card.jpg';

class MiComponent extends Component {
    state = {
        cardState: 'col-md-4',
        buttonType: 'my-2 btn btn-danger',
        buttonText: 'Hide all cards'
    }
    hideCard() {
        if (this.state.cardState === 'd-none') {
            this.setState({
                cardState: 'col-md-4',
                buttonType: 'my-2 btn btn-danger',
                buttonText: 'Hide all cards'
            });
        } else {
            this.setState({
                cardState: 'd-none',
                buttonType: 'my-2 btn btn-success',
                buttonText: 'Show all cards'
            });
        }
    }
    render() {
        var name = "Hernan V. Demorizi Ureña";
        var age = 22;
        var title = "Engineer";
        var friends = {
            names: ['Reiq', 'GoldWhite', 'Hernan'],
            happy: true,
            text: 'Yes!'
        }
        return (
            <React.Fragment>
                <div className="container p-4">
                    <h2>Hello everyone my name is {name}, I'am {title} and I'm {age} years old.</h2>
                    <br />
                    <h3>These are my great friends</h3>
                    <div className="row row-cols-3">
                        { /* JSX */
                            friends.names.map((name, i) => {
                                return (
                                    <div className={this.state.cardState}>
                                        <div className="card m-2" key={i}>
                                            <div className="card-header">
                                                <h2 className="card-title">
                                                    {name}
                                                </h2>
                                            </div>
                                            <div className="card-body">
                                                <img src={image_card} alt={name} className="w-100" />
                                                <h5>Are you happy?</h5>
                                                {
                                                    friends.happy ? <h2 className="mb-0"><span className="badge badge-success">{friends.text}</span></h2> : ''
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <button className={this.state.buttonType} onClick={this.hideCard.bind(this)}>{this.state.buttonText}</button>
                </div>
            </React.Fragment>
        );
    }
}

export default MiComponent;