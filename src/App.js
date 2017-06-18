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
  constructor(){
    super();

  }
  createButton(color){
    return <Button
      value = {color}
      onClick={()=>this.props.onClick(color)}
    />
  }
  render(){
    return (
      <div>
        <div className="colors">
          {this.createButton('red')}
          {this.createButton('green')}
          {this.createButton('yellow')}
          {this.createButton('blue')}
        </div>
        <div className="turnOn">
          {this.createButton('OnOff')}
        </div>
        <div className="Start">
          {this.createButton('start')}
        </div>
        <div className="Score">
          {this.createButton('score')}
        </div>
      </div>
    );
  }
}

class Game extends Component {
  constructor(){
    super();
    this.state={
      memory:[],
    }
  }
  randomGenerator(){

  }
  sounds(){
    
  }
  handleClick(){
    alert("okay!");
  }

  render() {
    return (
      <div className="App">
        <h1>Simon Game</h1>
        <Board 
          onClick={()=>this.handleClick()}
        />
      </div>
    );
  }
}

export default Game;
