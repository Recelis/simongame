import React, { Component } from 'react'
import MyButton from './myButton'
import '../App.css';

class MyBoard extends Component {
    constructor() {
        super();
        this.state = {
            setOn: "on",
            text: "off",
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
            onColor={this.props.onColor}
        />
    }
    renderScreen() {
        return <MyScreen
            screen={this.props.screen}
        />
    }
    renderButtons(color) {
        var setButtonColor;
        switch (color) {
            case 'red':
                setButtonColor = this.props.red;
                break;
            case 'green':
                setButtonColor = this.props.green;
                break;
            case 'blue':
                setButtonColor = this.props.blue;
                break;
            case 'yellow':
                setButtonColor = this.props.yellow;
                break;
            default:
                break;
        }
        console.log(setButtonColor);
        return <MyButton
            color={color}
            buttonColor={setButtonColor}
            onClick={() => this.props.onClick(color)}
            onMouseUp={() => this.props.onmouseup(color)}
        />
    }
    renderStrict() {
        return <StrictButton
            strictColor={this.props.strictColor}
            strictClick={() => this.props.strictClick()}
        />
    }

    render() {
        // let Buttons = this.offToOn();
        return (
            <div>
                <div className="buttons">
                    {this.renderButtons("green")}
                    {this.renderButtons("red")}
                    {this.renderButtons("yellow")}
                    {this.renderButtons("blue")}
                </div>
                <div className="control">
                    <div className="title"><h1>Simon <sup>&reg;</sup></h1></div>
                    <div className="turnOn">
                        {this.renderToggle()}
                    </div>
                    <div className="start">
                        {this.renderStart(0)}
                    </div>
                    <div className="screen">
                        {this.renderScreen()}
                    </div>
                    <div className="strict">
                        {this.renderStrict()}
                    </div>
                </div>
            </div>
        );
    }
}


function Switch(props) {
    return (
        <button className="switch" onClick={() => props.onClick()}>
            {props.setOn}
        </button>
    )
}

function StartButton(props) {
    return (
        <button className="start" onClick={() => props.onClick()} style={{ background: props.onColor }}>
            {<p>start</p>}
        </button>
    )
}

function MyScreen(props) {
    return (
        <p>{props.screen}</p>
    )
}

function StrictButton(props) {
    console.log(props.strictColor);
    return (
        <button className="strictButton" onClick={() => props.strictClick()} style={{ background: props.strictColor }}>
            {<p>strict mode</p>}
        </button>
    )
}


export default MyBoard




