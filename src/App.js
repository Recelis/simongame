import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Button(prop){

}

class Board extends Component{
  render(){
    return (
      <div className="buttons">
        <button> Red</button>
        <button> Blue</button>
        <button> Green</button>
        <button> Yellow</button>
      </div>
    );
  }
}

class Game extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simon Game</h2>
        </div>
        <button></button>
      </div>
    );
  }
}

export default Game;
