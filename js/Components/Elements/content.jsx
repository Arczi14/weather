import React from 'react';
import {Info} from './info.jsx'
import {Results} from './results.jsx'

//Kontent

class Content extends React.Component {

    render() {
        return <div className="content">
                <Info city={this.props.city} clouds={this.props.clouds}/>
                <Results temp={this.props.temp} wind={this.props.wind} preasure={this.props.preasure}/>
            </div>
      }
  }

export {Content}
