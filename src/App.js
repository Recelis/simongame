import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Button(color){
  return(
    <button className = "button" onClick={color.onClick}>
      {color.value}
    </button>
  );
}

function Switch(state){

return(
  null
);
}

function Score(){
  return (
    null
  );
}

class Board extends Component{
  constructor(){
    super();
    this.state={
      setOn: true
    }
  }
  createButton(color){
    return <Button
      value = {color}
      onClick={()=>this.props.onClick(color)}
    />
  }
  createToggle(state){
  return <Switch
      
  />
  }
  createScore(){
    return null;
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
          {this.createToggle('state')}
        </div>
        <div className="Start">
          {this.createButton('start')}
        </div>
        <div className="Score">
          {this.createScore()}
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
