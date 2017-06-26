import React, { Component } from 'react'

class MyButton extends Component {
    render() {
        return (
            <button className = {this.props.color} onClick={this.props.onClick}>{this.props.color}</button>
        )
    }
}


export default MyButton;