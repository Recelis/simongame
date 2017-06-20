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
       
    }
  }
  
  renderToggle(){
    return <Switch
      setOn = {this.props.setOn}
      onClick={()=>this.props.toggleClick()}
    />
  }
  renderStart(){
    return <StartButton
      isStarted = {this.state.isStarted}
      onClick = {()=>this.props.setStartState()}
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
          {this.renderToggle()}
        </div>
        <div className = "start">
          {this.renderStart(0)}
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
      setOn: 'off',
      isOn: true,
      isStarted: false.toString(),
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


  render() {
    return (
      <div className="App">
        <h1>Simon Game</h1>
        <Board 
          setOn = {this.state.setOn}
          isOn = {this.state.isOn}
          setStartState = {()=>this.setStartState()}
          toggleClick = {()=>this.toggleClick()}
        />
      </div>
    );
  }
}

export default Game;
