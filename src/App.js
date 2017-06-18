import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Button(props){
  return(
    <button className = "button" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends Component{
  buttonHandler(color){
    return <Button
      value = {color}
      onClick={()=>this.props.onClick(color)}
    />
  }
  render(){
    return (
      <div>
        <div className="colors">
          {this.buttonHandler('red')}
          {this.buttonHandler('green')}
          {this.buttonHandler('yellow')}
          {this.buttonHandler('blue')}
        </div>
        <div className="turnOn">
          {this.buttonHandler('OnOff')}
        </div>
        <div className="Start">
          {this.buttonHandler('start')}
        </div>
        <div className="Score">
          {this.buttonHandler('score')}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  randomGenerator(){

  }
  sounds(){
    
  }
  render() {
    return (
      <div className="App">
        <h1>Simon Game</h1>
        <Board />
      </div>
    );
  }
}

export default Game;
