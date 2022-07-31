import React from "react";

import '../App.css';

class Search extends React.Component{
    render() {
        return (
            <div className = "d-flex flex-wrap align-items-center justify-content-around">
                <div className = "Heading">
                    <h1><img className = "AppIcon" src = "../AppIcon.png"/><span className = "WeatherApp">
                    Weather App</span></h1>
                </div>
                <div className = "row align-items-start" id = "Wrapper">
                    <form onSubmit={this.props.getWeather}>
                        <input className = "Search" type="text" name="city" placeholder="Search"/>
                        <button>Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;