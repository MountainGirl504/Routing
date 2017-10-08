import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Weather from './component/weather';

class App extends Component {
  constructor(){
    super()
    this.state={
      conditions:null,
      temp:null,
      humidity: null,
      userInput: "",
      winds:null,
      icon:null
    }
 this.handleChange = this.handleChange.bind(this)
 this.getWeather = this.getWeather.bind(this)
 this.getCelcius = this.getCelcius.bind(this)
  }

  handleChange(value){
    this.setState({userInput:value})
}


  getWeather(){
    if(this.state.userInput){
      axios.get(`http://localhost:8080/api/weather/${this.state.userInput}`)
      .then(response => {  
        this.setState({
          location: `${response.data.name}, ${response.data.sys.country}`,
          conditions: response.data.weather[0].main,
          icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
          temp: `${Math.round(1.8*(response.data.main.temp-273)+32)} F`, 
          humidity: `${response.data.main.humidity} %`,
          winds: `${response.data.wind.speed} m/h`
        })
      })
    }
  }

  getCelcius(){
    console.log("hello")
    if(this.state.userInput){
      axios.get(`http://localhost:8080/api/weather/${this.state.userInput}`)
      .then(response => {  
        this.setState({
          conditions: response.data.weather[0].main,
          icon: `http://openweathermap.org/img/w/${response.data.weather[0].icon}.png`,
          temp: `${Math.round(response.data.main.temp-273.15)} C`,
          humidity: `${response.data.main.humidity} %`,
          winds: `${Math.round(response.data.wind.speed * 1.609344)} km/h`
        })
      })
    }
  }
    

  render() {  
    return(
      <Weather propChange={this.handleChange} propWeather={this.getWeather} propCelcius={this.getCelcius}
      propTemp={this.state.temp} propCondition={this.state.conditions} propIcon={this.state.icon}
      propHumidity={this.state.humidity} propWinds={this.state.winds} propLocation={this.state.location}/>
)
  }
}

export default App