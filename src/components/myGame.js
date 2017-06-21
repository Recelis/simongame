import React, { Component } from 'react'
import MyBoard from './myBoard'

class MyGame extends Component {
  constructor(){
    super();
    this.state={
      setOn: 'off',
      isOn: false,
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

  render() {
    return (
      <div className="App">
        <h1>Simon Game</h1>
         <MyBoard 
          setOn = {this.state.setOn}
          isOn = {this.state.isOn}
          setStartState = {()=>this.setStartState()}
          toggleClick = {()=>this.toggleClick()}
        />
        
      </div>
    );
  }
}

export default MyGame;