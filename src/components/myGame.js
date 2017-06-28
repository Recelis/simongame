import React, { Component } from 'react'
import MyBoard from './myBoard'

let isStarted = false;
let input = [];
var sequence = [];
var timerHandler;
var pressedButtonFlag = false;
var counting = 0;
var score = 0;
class MyGame extends Component {
  constructor() {
    super();
    this.state = {
      setOn: 'off',
      isOn: false,
      isStarted: false.toString(),
      scoreDisplay: '--',
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
        mode: 'output',
        scoreDisplay: 0
      });
      this.overRideRestart();
      this.setSequence();
      timerHandler = setInterval(() => this.gameplay(), 2000);
    }
  }

  gameplay() {
    if (this.state.mode === 'output') {
      // count up to sequence all played
      if (counting < sequence.length) counting++;
      else {
        counting = 0;
        console.log(counting);
        return this.setState({mode:'input'});
      }
    } else if (this.state.mode === 'input') {
      if (input.length !== sequence.length) {
        if (pressedButtonFlag === false) return this.restart(); // didn't press button in time
        else {
          pressedButtonFlag = false;
        }
      }
    } else {
      // do nothing
    }
  }

  restart() {
    if (this.state.strictMode === false) alert("restart level!");
    else alert("restart game!");
  }

  overRideRestart() {
    alert("restart game!");
  }

  buttonClick(color) {
    pressedButtonFlag = true;
    switch (this.state.mode) {
      case "input":
        input.push(color);
        this.checkInputAgainstOutput();
        break;
      case "output":
        input = [];
        break;
      default:
        break;
    }
    console.log("input: "+input);
  }

  checkInputAgainstOutput() {
    for (var ii = 0; ii < input.length; ii++) {
      if (input[ii] !== sequence[ii]) {
        this.restart();
        break;
      }
    }
    if (input.length === sequence.length) {
      console.log("next level!");
      score++;
      this.setState({
        mode:'output',
        scoreDisplay:score,
      });
      this.setSequence();
    }
  }

  setSequence() {
    if (sequence.length < score + 1) {
      var randomNum = this.generateRandomSequence();
      sequence.push(this.convertToColor(randomNum));
      console.log("sequence: " + sequence);
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
          screen={this.state.scoreDisplay}
          onClick={(color) => this.buttonClick(color)}
        />

      </div>
    );
  }
}

export default MyGame;