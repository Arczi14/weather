import React from 'react';
import {Search} from './Components/Elements/search.jsx';
import {Content} from './Components/Elements/content.jsx';
import {Button} from './Components/Elements/button.jsx';
import {Info} from './Components/Elements/info.jsx';
import {Results} from './Components/Elements/results.jsx';
import {StartPage} from './Components/Elements/start_page.jsx';
import {GeoLocBtn} from './Components/Elements/geolocButton.jsx';
import {NotFound} from './Components/Elements/error.jsx';


class Page extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            city: "",
            temp: "",
            wind: "",
            clouds: "",
            preasure: "",
            inputValue: "",
            name: "",
            geoloc: "",
            GeoLatitudes: "",
            GeoLongitudes: "",
            error: "",
        }
    }

    findMe() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let latitude = position.coords.latitude.toFixed(4);
                let longitude = position.coords.longitude.toFixed(4);
                this.setState({
                    GeoLatitudes: latitude,
                    GeoLongitudes: longitude,
                    geoloc: true
                }), () => {fetch(`https://api.apixu.com/v1/current.json?key=7aeed42ae9eb4f47bc8185433170310&q=${this.state.GeoLatitudes},${this.state.GeoLongitudes}`).then( resp => resp.json() ).then( response => {
                            console.log(response);
                            const city = response.location.name
                            const temp = response.current.temp_c
                            const wind = response.current.wind_kph
                            const clouds = response.current.cloud
                            const preasure = response.current.pressure_mb

                            this.setState({
                                city: city,
                                temp: temp,
                                wind: wind,
                                clouds: clouds,
                                preasure: preasure
                            })
                        })
                    }
                })
            }
            console.log(`https://api.apixu.com/v1/current.json?key=7aeed42ae9eb4f47bc8185433170310&q=${this.state.GeoLatitudes},${this.state.GeoLongitudes}`);
        }

    geolocClick = (event) => {
        this.findMe();
    }

    handleChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleClick = (event) => {
        event.preventDefault();

        if(this.state.error === true) {
            this.setState({
                error: false
            })
        }
        let urlInput = `https://api.apixu.com/v1/current.json?key=7aeed42ae9eb4f47bc8185433170310&q=${this.state.name}`
        this.setState({
            inputValue: this.state.name,
        });
        console.log(urlInput);
        fetch(urlInput).then( resp => resp.json() ).then( response => {
            const city = response.location.name
            const temp = response.current.temp_c
            const wind = response.current.wind_kph
            const clouds = response.current.cloud
            const preasure = response.current.pressure_mb
            console.log("test")

            this.setState({
                city: city,
                temp: temp,
                wind: wind,
                clouds: clouds,
                preasure: preasure
            })
        })
        .catch((err) => {
            this.setState({
                error: true
            })
            console.log("err", err)
        });
    };

    render() {
        if (this.state.error) {
            return <div className="wrap_all" style={{backgroundImage: 'url(../img/spring.jpg)'}} >
                <Search onChange={this.handleChange} value={this.state.name} check={this.handleClick}/>
                <div className="box">
                    <NotFound />
                    <GeoLocBtn findMe={this.geolocClick}/>
                </div>
            </div>
        }else if(this.state.temp == 0) {
            return <div className="wrap_all" style={{backgroundImage: 'url(../img/spring.jpg)'}}>
                <Search onChange={this.handleChange} value={this.state.name} check={this.handleClick}/>
                <div className="box">
                    <StartPage />
                    <GeoLocBtn findMe={this.geolocClick}/>
                </div>
            </div>
        } else if(this.state.clouds < 20) {
            return <div className="wrap_all" style={{backgroundImage: 'url(../img/clear.jpg)'}} >
            <Search onChange={this.handleChange} value={this.state.name} check={this.handleClick}/>
            <Content city={this.state.city} preasure={this.state.preasure} temp={this.state.temp} clouds={this.state.clouds} wind={this.state.wind}/>
            </div>
        } else if ((this.state.clouds > 21)&&(this.state.clouds < 40)) {
            return <div className="wrap_all" style={{backgroundImage: 'url(../img/little.jpg)'}} >
            <Search onChange={this.handleChange} value={this.state.name} check={this.handleClick}/>
            <Content city={this.state.city} preasure={this.state.preasure} temp={this.state.temp} clouds={this.state.clouds} wind={this.state.wind}/>
            </div>
        } else if ((this.state.clouds > 41)&&(this.state.clouds < 60)) {
            return <div className="wrap_all" style={{backgroundImage: 'url(../img/strong-clouds.jpg)'}} >
            <Search onChange={this.handleChange} value={this.state.name} onClick={this.handleClick}/>
            <Content city={this.state.city} preasure={this.state.preasure} temp={this.state.temp} clouds={this.state.clouds} wind={this.state.wind}/>
            </div>

        } else if ((this.state.clouds > 61)&&(this.state.clouds < 80)) {
            return <div className="wrap_all" style={{backgroundImage: 'url(../img/strong.jpg)'}} >
            <Search onChange={this.handleChange} value={this.state.name} check={this.handleClick}/>
            <Content city={this.state.city} preasure={this.state.preasure} temp={this.state.temp} clouds={this.state.clouds} wind={this.state.wind}/>
            </div>
        } else if (this.state.clouds > 81) {
            return <div className="wrap_all" style={{backgroundImage: 'url(../img/dark-clouds.jpg)'}} >
            <Search onChange={this.handleChange} value={this.state.name} check={this.handleClick}/>
            <Content city={this.state.city} preasure={this.state.preasure} temp={this.state.temp} clouds={this.state.clouds} wind={this.state.wind}/>
            </div>
        } else {
            return null;
        }
    }
}

export {Page}
