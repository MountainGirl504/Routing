import React, { Component } from 'react';
import './weather.css';

class Weather extends Component {

    render(props) {
        return (
            <div className="main_theme">
                <div className="theme">
                <h2 className="header"> Weather App </h2>
                <div className="input_buttons">
                    <input placeholder="City:" className="location" onChange={(e) => this.props.propChange(e.target.value)}></input>
                    <button className="button1" onClick={this.props.propWeather}>Fareiheit</button>
                    <button className="button2" onClick={this.props.propCelcius}>Celcius</button>
                </div>
                <img className="pic" src={this.props.propIcon} />
                <div className="lines">
                    <p className="loc"> Location: {this.props.propLocation}</p>
                    <p className="temp">Temperature: {this.props.propTemp} </p>
                    <p className="humidity">Humidity: {this.props.propHumidity} </p>
                    <p className="condition">Condition: {this.props.propCondition} </p>
                    <p className="wind">Winds: {this.props.propWinds}</p>
                    
                </div>
                
                </div>
            </div>
        )
    }
}
export default Weather