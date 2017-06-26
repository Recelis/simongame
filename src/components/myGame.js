import React, { Component } from 'react'
import MyBoard from './myBoard'

let isStarted = false;
let input = [];
var sequence = [];
var timerHandler;
var  pressedButtonFlag = false;

class MyGame extends Component {
  constructor() {
    super();
    this.state = {
      setOn: 'off',
      isOn: false,
      isStarted: false.toString(),
      score: 0,
      mode: 'output',
      strictMode: false,
     
    }
  }
  toggleClick() { // change to feature fully functional slide
    this.setState({
      setOn: this.state.isOn ? 'off' : 'on',
      isOn: !this.state.isOn,
      isStarted: false.toString(),
    })
    if (timerHandler !== undefined) clearInterval(timerHandler);
  }

  setStartState() {
    if (this.state.isOn === false) isStarted = false;
    else {
      isStarted = true;
      this.setState({
        isStarted: isStarted.toString,
        mode: 'output'
      });
      this.overRideRestart();
      this.setSequence();
      timerHandler = setInterval(() => this.gameplay(), 5000);
    }
  }

  gameplay() {
    if (input.length !== sequence.length) {
      if (pressedButtonFlag === false) return this.restart();
      else pressedButtonFlag=false;
    } 
  }

  restart() {
    if (this.state.strictMode === false) alert("restart level!");
    else alert("restart game!");
  }

  overRideRestart(){
    alert("restart game!");
  }

  buttonClick(color) {
    pressedButtonFlag=true;
    switch (this.state.mode) {
      case "input":
        input.push(color);
        break;
      case "output":
        console.log(color);
        input = [];
        break;
      default:
        break;
    }
  }

  setSequence() {
    if (sequence < this.state.score + 1) {
      var randomNum = this.generateRandomSequence();
      sequence.push(this.convertToColor(randomNum));
      console.log(sequence);
    }
  }

  convertToColor(num) {
    var output;
    switch (num) {
      case 0:
        output = "red";
        break;
      case 1:
        output = "blue";
        break;
      case 2:
        output = "green";
        break;
      case 3:
        output = "yellow";
        break;
      default:
        break;
    }
    return output;
  }

  generateRandomSequence() {
    var min = 0
    var max = 4;
    return Math.floor(Math.random() * (max - min)) + min;
  }


  render() {
    return (
      <div className="App">
        <h1>Simon Game</h1>
        <MyBoard
          setOn={this.state.setOn}
          isOn={this.state.isOn}
          setStartState={() => this.setStartState()}
          toggleClick={() => this.toggleClick()}
          screen={this.state.score}
          onClick={(color) => this.buttonClick(color)}
        />

      </div>
    );
  }
}

export default MyGame;