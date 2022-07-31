import React from 'react';
import '../App.css';

let bgChange = (event) => {
    if(event === "Clouds"){
        document.body.setAttribute('clouds', '');
        
    }
    else {
        document.body.removeAttribute('clouds');
    }
    if (event === "Rain"){
        document.body.setAttribute('rain', '');
    }
    else {
        document.body.removeAttribute('rain');
    }
    if (event === "Clear"){
        document.body.setAttribute('clear', '');
    }
    else {
        document.body.removeAttribute('clear');
    }
    if (event === "Snow"){
        document.body.setAttribute('snow', '');
    }
    else {
        document.body.removeAttribute('snow');
    }
}

class WeatherInfo extends React.Component{

    render() {
        return (
            // <div>
                <div className = "WeatherInfo">
                    <div className = "WeatherInfoSpace">
                        <div className = "Temreture">
                            <p>Tempreture</p>
                            <p>{this.props.tempreture}</p>
                            <p>Feels like</p>
                            <p>{this.props.feelLike}</p>
                        </div>
                    </div>
                    <div className = "WeatherInfoSpace">
                        <div className = "CountryName">
                            <p>City</p>
                            <p>{this.props.city}</p>
                            <p>Weather</p>
                            <p onChange={bgChange(this.props.weather)}>{this.props.weather}</p>
                        </div>
                        <div className = "Cloudiness">
                        </div>
                    </div>
                    <div className = "WeatherInfoSpace">
                        <div className = "Humidity">
                            <p>Humidity</p>
                            <p>{this.props.humidity}</p>
                            <p>Pressure</p>
                            <p>{this.props.pressure}</p>
                        </div>
                    </div>
                </div>
            // </div>
        );
    }
}

export default WeatherInfo;