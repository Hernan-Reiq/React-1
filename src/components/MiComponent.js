import React, {Component} from 'react';
import image_card from '../assets/img/image_card.jpg';

class MiComponent extends Component {
    render(){
        var name = "Hernan V. Demorizi Ureña";
        var age = 22;
        var title = "Engineer";
        var friends = {
            names: ['Reiq', 'GoldWhite', 'DemondR'],
            happy: false,
            money: 'Yes, I\'m happy with he.'
        }
        return (
            <React.Fragment>
                <div className="container p-4">
                    <h2>Hello everyone my name is {name}, I'am {title} and I'm {age} years old.</h2>
                    <br />
                    <h3>These are my great friends</h3>
                    <div className="row row-cols-3">
                        {
                            friends.names.map((name, i) => {
                                return (
                                    <div className="col-md-4">
                                        <div className="card m-2" key={i}>
                                            <div className="card-header">
                                                <h2 className="card-title">
                                                    {name}
                                                </h2>
                                            </div>
                                            <div className="card-body">
                                                <img src={image_card} alt={name} className="w-100" />
                                                <h5>Does he make you happy?</h5>
                                                {
                                                    friends.happy ? <p className="card-text">{friends.money}</p> : <p className="card-text">No, I'm very sad with he.</p>  
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MiComponent;