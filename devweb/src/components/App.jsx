import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navigation/Navbar.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar list="123"/>
        
      </div>
    );
  }
}

export default App;
