import React, { Component } from 'react'

class MyButton extends Component {
    render() {
        return (
            <button>{this.props.color}</button>
        )
    }
}


export default MyButton;