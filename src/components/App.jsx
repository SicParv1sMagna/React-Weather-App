import React from "react";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import Footer from "./Footer";


const apiKey = "94d433bba52254adc61281bb3bf2b9bc";

class App extends React.Component{

  state = {
    city: undefined,
    tempreture: undefined,
    humidity: undefined,
    pressure: undefined,
    feelLike: undefined,
    weather: undefined,
    dailyTemp: [],
    dailyWeather: [],
    date: [],
    error: undefined
  }
  
  gettingWeatherInfo = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
    const data = await apiUrl.json();

    this.setState({
      city: data.city.name,
      tempreture: isNaN(Math.round(data.list[0].main.temp - 273.15)) ? undefined : Math.round(data.list[0].main.temp - 273.15),
      humidity: data.list[0].main.humidity,
      pressure: data.list[0].main.pressure,
      feelLike: isNaN(Math.round(data.list[0].main.feels_like - 273.15)) ? undefined : (Math.round(data.list[0].main.feels_like - 273.15).toString() + "°C"),
      weather: data.list[0].weather[0].main,
      error: data.message
    });
    
    let dailyTempArr = [];
    dailyTempArr.push((Math.round(data.list[0].main.temp - 273.15)).toString() + "°C");
    dailyTempArr.push((Math.round(data.list[8].main.temp - 273.15)).toString() + "°C");   
    dailyTempArr.push((Math.round(data.list[16].main.temp - 273.15)).toString() + "°C");
    dailyTempArr.push((Math.round(data.list[24].main.temp - 273.15)).toString() + "°C");
    dailyTempArr.push((Math.round(data.list[32].main.temp - 273.15)).toString() + "°C");
    console.log(dailyTempArr);
    this.setState({ dailyTemp : dailyTempArr });

    let dailyWeatherArr = [];
    dailyWeatherArr.push(data.list[0].weather[0].main);
    dailyWeatherArr.push(data.list[8].weather[0].main);
    dailyWeatherArr.push(data.list[16].weather[0].main);
    dailyWeatherArr.push(data.list[24].weather[0].main);
    dailyWeatherArr.push(data.list[32].weather[0].main);
    this.setState({ dailyWeather : dailyWeatherArr });

    let calendarData = [];
    calendarData.push(data.list[0].dt_txt.split(" ")[0].split("-")[2] + "." + data.list[0].dt_txt.split(" ")[0].split("-")[1]);
    calendarData.push(data.list[8].dt_txt.split(" ")[0].split("-")[2] + "." + data.list[8].dt_txt.split(" ")[0].split("-")[1]);
    calendarData.push(data.list[16].dt_txt.split(" ")[0].split("-")[2] + "." + data.list[16].dt_txt.split(" ")[0].split("-")[1]);
    calendarData.push(data.list[24].dt_txt.split(" ")[0].split("-")[2] + "." + data.list[24].dt_txt.split(" ")[0].split("-")[1]);
    calendarData.push(data.list[32].dt_txt.split(" ")[0].split("-")[2] + "." + data.list[32].dt_txt.split(" ")[0].split("-")[1]);
    this.setState({ date: calendarData });
  }

  render(){
    return(
      <div className = "app__container">
        <Search getWeather={this.gettingWeatherInfo}/>
        <WeatherInfo
          city = {this.state.city}
          tempreture = {this.state.tempreture}
          humidity = {this.state.humidity}
          pressure = {this.state.pressure}
          feelLike = {this.state.feelLike}
          weather = {this.state.weather}
          error = {this.state.error}
        />
        <Forecast
          dailyTempArr = {this.state.dailyTemp}
          dailyWeatherArr = {this.state.dailyWeather}
          dateArr = {this.state.date}
        />
        <Footer />
      </div>
    )
  }
}

export default App;