import React, { Component } from 'react';
import './App.css';
import MyGame from './components/myGame'

"use strict";

class App extends Component {
  render() {
    return (
      <div>
        <MyGame/>
        <div><p className = "copyright">created By Jacky Lui using ReactJS &#169; 2017</p></div>
      </div>
    )
  }
}


export default App;
