import React, { Component } from 'react'
import '../App.css';

class MyButton extends Component {
    render() {
        return (
            <button className = {this.props.color} onClick={this.props.onClick} style={{background:this.props.buttonColor}}></button>
        )
    }
}


export default MyButton;