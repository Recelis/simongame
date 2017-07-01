import React, { Component } from 'react'
import MyBoard from './myBoard'

let isStarted = false;
let input = [];
var sequence = [];
var timerHandler;
var pressedButtonFlag = true;
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
      scoreDisplay: '',
      strictLight: "#B0D09D",
      onLight: "#009999",
      startLight: "#B86CA3",
      red: "#9f0f17",
      green: "#00a74a",
      yellow: "#cca707",
      blue: "#094a8f",
    }
  }

  setStartState() {
    gameRestart();
    if (isOn === false) isStarted = false;
    else {
      isStarted = true;
      this.setState({
        isStarted: isStarted.toString,
        startLight: "#FF6BD6",
        scoreDisplay: 0,
      });
      setSequence();
      timerHandler = setInterval(() => this.gameplay(), 2000);
    }
  }

  gameplay() {  
  if (mode === 'output') {
    // count up to sequence all played
    this.onMouseUp();
    setTimeout(()=>this.outputSequence(),200);
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

outputSequence(){
  if (counting < sequence.length){
      this.mouseClickEffects(sequence[counting]);
      counting++;
    }
    else {
      counting = 0;
      mode = 'input';
    }
}

  toggleClick() { // change to feature fully functional slide
    this.setState({
      setOn: isOn ? 'off' : 'on',
      isStarted: false.toString(),
      onLight: isOn ? "#009999":"#1affff",
      startLight:isOn? "#B86CA3":this.state.startLight,
      scoreDisplay: '--',
    })
    isOn = !isOn;
    if (timerHandler !== undefined) clearInterval(timerHandler);
  }

  onMouseDown(color) {
    pressedButtonFlag = true;
    switch (mode) {
      case "input":
        this.mouseClickEffects(color);
        input.push(color);
        checkInputAgainstOutput();
        this.setState({ scoreDisplay: score });
        break;
      case "output":
        input = [];
        break;
      default:
        break;
    }
    console.log("input: " + input);
  }

  mouseClickEffects(color) {
    var clickedColor;
    switch (color) {
      case 'red':
        clickedColor = "#ff4c4c";
        this.setState({ red: clickedColor });
        break;
      case 'green':
        clickedColor = "#13ff7c";
        this.setState({ green: clickedColor });
        break;
      case 'yellow':
        clickedColor = "#fed93f";
        this.setState({ yellow: clickedColor });
        break;
      case 'blue':
        clickedColor = "#1c8cff";
        this.setState({ blue: clickedColor });
        break;
      default:
        alert("Something is seriously wrong!");
        break;
    }
    return clickedColor;
  }
  onMouseUp() { // clear buttons
    this.setState({
      red:"#9f0f17",
      green:"#00a74a",
      yellow: "#cca707",
      blue:"#094a8f",
    })
  }

  setStrict() {
    strictMode = strictMode ? false : true;
    this.setState({ strictLight: strictMode ? "#9CFF5F" : "#B0D09D" });
  }

  render() {
    return (
      <div className="App">
        <MyBoard
          setOn={this.state.setOn}
          isOn={this.state.isOn}
          onColor  = {this.state.onLight}
          startLight={this.state.startLight}
          setStartState={() => this.setStartState()}
          toggleClick={() => this.toggleClick()}
          screen={this.state.scoreDisplay}
          onMouseDown={(color) => this.onMouseDown(color)}
          onMouseUp={(color) => this.onMouseUp(color)}
          strictClick={() => this.setStrict()}
          strictColor={this.state.strictLight}

          red={this.state.red}
          green={this.state.green}
          blue={this.state.blue}
          yellow={this.state.yellow}
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
    input = [];
    setSequence();
  }
}

function setSequence() {
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