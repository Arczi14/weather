import React from 'react';

//Wyszukiwanie

class Button extends React.Component {
    searchClick = (event) => {
        console.log("arek");
    }

    render() {
        return <button className="mainBtn" onClick={this.props.onClick}>Szukaj</button>
      }
  }

export {Button}
