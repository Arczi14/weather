import React from 'react';

//Geolokalizacja Button

class GeoLocBtn extends React.Component {

    render() {
        return <button className="geoBtn" onClick={this.props.findMe}>Użyj Geolokalizacji</button>
    }
}

export {GeoLocBtn}
