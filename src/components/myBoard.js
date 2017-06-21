import React, { Component } from 'react'
import MyButton from './myButton'

class MyBoard extends Component {
    constructor() {
        super();
        this.state = {
            setOn: "on",
            text: "off"
        }
    }
    renderToggle() {
        return <Switch
            setOn={this.props.setOn}
            onClick={() => this.props.toggleClick()}
        />
    }
    renderStart() {
        return <StartButton
            isStarted={this.state.isStarted}
            onClick={() => this.props.setStartState()}
        />
    }
    render() {
        // let Buttons = this.offToOn();
        return (
            <div>
                <div className="turnOn">
                    {this.renderToggle()}
                </div>
                <div className="start">
                    {this.renderStart(0)}
                </div>
                <MyButton color = 'red'/>
                <MyButton color = 'blue'/>
                <MyButton color = 'green'/>
                <MyButton color = 'yellow'/>
            </div>
        );
    }
}


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

export default MyBoard



