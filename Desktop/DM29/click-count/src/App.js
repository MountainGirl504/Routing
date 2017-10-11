import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./components/Display"

class App extends Component {
  constructor(){
    super()

    this.state = {
      count:0
    }
    this.countUp = this.countUp.bind(this)
  }

  countUp(){
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1> {this.state.count}</h1>
        <button onClick={this.countUp}> Click me !!!</button>
      </div>
      
    )
  }
}

export default App;
