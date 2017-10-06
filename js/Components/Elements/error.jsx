import React from 'react';

//Error

class NotFound extends React.Component {

    render() {
        return <div className="startPage">
            <h1 className="startText">Niestety nie znaleźliśmy danej miejscowości :( <br />
                Proszę ponownie wpisać nazwę lub skorzystać z geolokalizacji.
            </h1>
        </div>
    }
  }

export {NotFound}
