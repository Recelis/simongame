import React, { Component } from 'react'
import '../App.css';

class MyButton extends Component {
    render() {
        return (
            <button 
            className = {this.props.color} 
            onMouseDown={this.props.clearScreen} 
            onMouseUp={this.props.onMouseUp} 
            style={{background:this.props.buttonColor}}></button>
        )
    }
}


export default MyButton;