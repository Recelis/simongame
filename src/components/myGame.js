import React, { Component } from 'react'
import MyBoard from './myBoard'

let isStarted = false;

class MyGame extends Component {
  constructor(){
    super();
    this.state={
      setOn: 'off',
      isOn: false,
      isStarted: false.toString(),
      score:0,
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
    if (this.state.isOn === false) isStarted = false;
    else isStarted = true;
    this.setState({isStarted: isStarted.toString});
  }



  render() {
    return (
      <div className="App">
        <h1>Simon Game</h1>
         <MyBoard 
          setOn = {this.state.setOn}
          isOn = {this.state.isOn}
          setStartState = {()=>this.setStartState()}
          toggleClick = {()=>this.toggleClick()}
          screen={this.state.score}
        />
        
      </div>
    );
  }
}

export default MyGame;