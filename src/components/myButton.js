import React, { Component } from 'react'

class MyButton extends Component {
    render() {
        return (
            <button className = {this.props.color}>{this.props.color}</button>
        )
    }
}


export default MyButton;