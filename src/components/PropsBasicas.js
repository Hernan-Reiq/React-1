import React, { Component } from 'react';

class PropsBasicas extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {/* recibiendo las props desde un elemento padre */}
                    <h3>{this.props.title}</h3>
                    <p>{this.props.text}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default PropsBasicas;