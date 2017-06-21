import React, { Component } from 'react'
import MyButton from './myButton'

class MyBoard extends Component{
    constructor(){
        super();
        this.state = {
            moves:[0,1],
            text:"off"
        }
    }
    offToOn(){
        this.setState({
            text:"on",
        })
        // this.state.moves.map(function (element) {
        //     return (
        //         <MyButton text={this.state.text} id={element}/>
        //     )
        // })
    }

    render() {
        // let Buttons = this.offToOn();
        return (
            <div>
                <button onClick={()=>this.offToOn()}>
                    {this.state.text}
                </button>
               
            </div>
        )
    } 
}

export default MyBoard 

 /*<Board 
          setOn = {this.state.setOn}
          isOn = {this.state.isOn}
          setStartState = {()=>this.setStartState()}
          toggleClick = {()=>this.toggleClick()}
        />*/


