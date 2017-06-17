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

class Game extends Component{
  render(){
    <Board
    />
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Game;
