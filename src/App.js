import React, { Component } from 'react';
import './App.css';

// function Button(color){
//   return(
//     <button className = "button" onClick={color.onClick}>
//       {color.value}
//     </button>
//   );
// }

function Switch(props){
  return(
    <button className="switch" onClick={()=>props.onClick()}>
      {props.setOn}
    </button>
  )
}

function StartButton(props){
  return (
    <button className="start" onClick={()=>props.onClick()}>
      {<p>start</p>} 
    </button>
  )
}

// function Score(){
//   return (
//     null
//   );
// }

class Board extends Component{
  constructor(){
    super();
    this.state={
      setOn: 'off',
      isOn: true,
      isStarted: false.toString(),
    }
  }
  toggleClick(){ // change to feature fully functional slide
    this.setState({
      setOn: this.state.isOn ? 'off':'on',
      isOn: !this.state.isOn,
      isStarted: false.toString(),
    })
  }
  setStartState(){
    if (this.state.isOn == false) this.setState({isStarted: false.toString()});
    else this.setState({isStarted: true.toString()});
    alert(this.state.isStarted.toString());
  }
  createToggle(){
    return <Switch
      setOn = {this.state.setOn}
      onClick={()=>this.toggleClick()}
    />
  }
  createStart(){
    return <StartButton
      isStarted = {this.state.isStarted}
      onClick = {()=>this.setStartState()}
    />
  }
  // createButton(color){
  //   return <Button
  //     value = {color}
  //     onClick={()=>this.props.onClick(color)}
  //   />
  // }
  
  // createScore(){
  //   return null;
  // }

  render(){
    return (
      <div>
        <div className="turnOn">
          {this.createToggle()}
        </div>
        <div className = "start">
          {this.createStart(0)}
        </div>
      </div>
    );
  }
}
/*<div className="colors">
          {this.createButton('red')}
          {this.createButton('green')}
          {this.createButton('yellow')}
          {this.createButton('blue')}
        </div>*/
/*<div className="Start">
          {this.createButton('start')}
        </div>
        <div className="Score">
          {this.createScore()}
        </div>*/
class Game extends Component {
  constructor(){
    super();
    this.state={
      
    }
  }
  // onState(){

  // }
  // randomGenerator(){
  //   var min = 0
  //   var max = 4;
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }
  // sounds(){
    
  // }
  handleClick(){
    
    alert(this.randomGenerator());
  }

  render() {
    return (
      <div className="App">
        <h1>Simon Game</h1>
        <Board 

        />
      </div>
    );
  }
}

export default Game;
