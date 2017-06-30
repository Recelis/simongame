import React, { Component } from 'react'
import MyBoard from './myBoard'

let isStarted = false;
let input = [];
var sequence = [];
var timerHandler;
var pressedButtonFlag = false;
var counting = 0;
var score = 0;
var strictMode = false;
var mode = 'output';
var isOn = false;


class MyGame extends Component {
  constructor() {
    super();
    this.state = {
      setOn: 'off',
      scoreDisplay: '--',
      strictLight: "#B0D09D",
    }
  }
  
  setStartState() {
    gameRestart();
    if (isOn === false) isStarted = false;
    else {
      isStarted = true;
      this.setState({
        isStarted: isStarted.toString,
        scoreDisplay: 0
      });
      setSequence();
      timerHandler = setInterval(() => gameplay(), 2000);
    }
  }


  toggleClick() { // change to feature fully functional slide
    this.setState({
      setOn: isOn ? 'off' : 'on',
      isStarted: false.toString(),
    })
    isOn = !isOn;
    if (timerHandler !== undefined) clearInterval(timerHandler);
  }

  buttonClick(color) {
    pressedButtonFlag = true;
    switch (mode) {
      case "input":
        input.push(color);
        checkInputAgainstOutput();
        this.setState({scoreDisplay: score});
        break;
      case "output":
        input = [];
        break;
      default:
        break;
    }
    console.log("input: " + input);
  }

  setStrict() {
    strictMode = strictMode ? false : true;
    this.setState({strictLight:strictMode?"#9CFF5F":"#B0D09D"});
  }

  render() {
    return (
      <div className="App">
        <MyBoard
          setOn={this.state.setOn}
          isOn={this.state.isOn}
          setStartState={() => this.setStartState()}
          toggleClick={() => this.toggleClick()}
          screen={this.state.scoreDisplay}
          onClick={(color) => this.buttonClick(color)}
          strictClick={() => this.setStrict()}
          strictColor={this.state.strictLight}
        />

      </div>
    );
  }
}

function restart() {
  if (strictMode === false) {
    console.log("restart level");
    input = [];
    mode = 'output';
    // make sure that sequence is same 
  }
  else gameRestart();
}

function gameRestart() { // restarts game
  console.log("restart game");
  mode = 'output';
  score = 0;
  isStarted = false;
  input = [];
  sequence = [];
  pressedButtonFlag = [];
  counting = 0;
  return 0;
}

function gameplay() {
  if (mode === 'output') {
    // count up to sequence all played
    if (counting < sequence.length) console.log("beeps:" + counting++);
    else {
      counting = 0;
      console.log(counting);
      return mode = 'input';
    }
  } else if (mode === 'input') {
    if (input.length !== sequence.length) {
      if (pressedButtonFlag === false) return restart(); // didn't press button in time
      else {
        pressedButtonFlag = false;
      }
    }
  } else {
    // do nothing
  }
}

function checkInputAgainstOutput() {
  for (var ii = 0; ii < input.length; ii++) {
    if (input[ii] !== sequence[ii]) {
      restart();
      break;
    }
  }
  if (input.length === sequence.length) {
    console.log("next level!");
    score++;
    mode = 'output';
    setSequence();
  }
}

function setSequence() {
  console.log("setsequence");
  if (sequence.length < score + 1) {
    var randomNum = generateRandomSequence();
    sequence.push(convertToColor(randomNum));
    console.log("sequence: " + sequence);
  }
}

function generateRandomSequence() {
  var min = 0
  var max = 4;
  return Math.floor(Math.random() * (max - min)) + min;
}

function convertToColor(num) {
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


export default MyGame;