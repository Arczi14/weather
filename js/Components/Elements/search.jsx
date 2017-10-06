import React from 'react';
import {Button} from './button.jsx'


//Wyszukiwanie

class Search extends React.Component {

    render() {
        return <div className="search">
        Tutaj wpisz miejscowość:
            <input type="text" value={this.props.value} onChange={this.props.onChange}/>
            <Button check={this.props.check}/>
            </div>
      }
  }

export {Search}
