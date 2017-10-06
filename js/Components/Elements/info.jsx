import React from 'react';
import {Button} from './button.jsx'

//Kontent

class Info extends React.Component {
    render() {

        if((this.props.clouds === 0)&&(this.props.clouds < 20)) {
            return <h1 className="info">W miejscowości {this.props.city} <br /> niebo jest bezchmurne ({this.props.clouds}%).</h1>
        } else if((this.props.clouds > 21) && (this.props.clouds < 40)) {
            return <h1 className="info">W miejscowości {this.props.city} występuje <br /> lekkie zachmurzenie ({this.props.clouds}%).</h1>
        } else if((this.props.clouds > 41) && (this.props.clouds < 60)) {
            return <h1 className="info">W miejscowości {this.props.city}  <br /> niebo jest umiarkowanie zachmurzone ({this.props.clouds}%).</h1>
        } else if((this.props.clouds > 61) && (this.props.clouds < 80)) {
            return <h1 className="info">W miejscowości {this.props.city}  <br /> występuje duże zachmurzenie ({this.props.clouds}%).</h1>
        } else if(this.props.clouds > 81) {
            return <h1 className="info">W miejscowości {this.props.city}  <br /> niebo jest całkowicie zachmurzone ({this.props.clouds}%).</h1>
        } else {
            return null;
        }
    }
}

export {Info}
