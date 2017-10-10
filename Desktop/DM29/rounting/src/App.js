import React, { Component } from 'react';
import './App.css';
import router from './components/Router';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/products'>Products</Link>
          { router }
      </div>
    );
  }
}

export default App;