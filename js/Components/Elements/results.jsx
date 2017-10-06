import React from 'react';

//Kontent

class Results extends React.Component {

    render() {
        if(!this.props.temp == 0) {
            return <div className="results">
                <p className="result">Temperatura: {this.props.temp}<sup>o</sup>C</p>
                <p className="result">Wiatr: {this.props.wind} km/h</p>
                <p className="result">Ciśnienie: {this.props.preasure} hPa</p>
            </div>
        } else {
            return null;
        }
    }
}

export {Results}
