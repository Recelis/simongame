import React, { Component } from 'react'
import '../App.css';

class MyButton extends Component {
    render() {
        return (
            <button className = {this.props.color} onClick={this.props.onClick}></button>
        )
    }
}


export default MyButton;