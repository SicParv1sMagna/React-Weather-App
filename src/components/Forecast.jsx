import React from 'react';
import '../App.css';

const Forecast = (props) => {
      
        return (
            <div className = "WeekForecast">
                <h3>Week Forecast</h3>
                <div className = "WeekForecastSpace">
                    <div className = "DayBox">
                        <p>{props.dateArr[0]}</p>
                        <div className = "DayTempreture">{props.dailyTempArr[0]}</div>
                        <div className = "DayWeather">{props.dailyWeatherArr[0]}</div>
                    </div>
                    <div className = "DayBox">
                        <p>{props.dateArr[1]}</p>
                        <div className = "DayTempreture">{props.dailyTempArr[1]}</div>
                        <div className = "DayWeather">{props.dailyWeatherArr[1]}</div>
                    </div>
                    <div className = "DayBox">
                        <p>{props.dateArr[2]}</p>
                        <div className = "DayTempreture">{props.dailyTempArr[2]}</div>
                        <div className = "DayWeather">{props.dailyWeatherArr[2]}</div>
                    </div>
                    <div className = "DayBox">
                        <p>{props.dateArr[3]}</p>
                        <div className = "DayTempreture">{props.dailyTempArr[3]}</div>
                        <div className = "DayWeather">{props.dailyWeatherArr[3]}</div>
                    </div>
                    <div className = "DayBox">
                        <p>{props.dateArr[4]}</p>
                        <div className = "DayTempreture">{props.dailyTempArr[4]}</div>
                        <div className = "DayWeather">{props.dailyWeatherArr[4]}</div>
                    </div>
                </div>
            </div>
        );
}

export default Forecast;