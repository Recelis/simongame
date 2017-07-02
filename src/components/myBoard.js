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
            onColor={this.props.onColor}
        />
    }
    renderStart() {
        return <StartButton
            isStarted={this.state.isStarted}
            onClick={() => this.props.setStartState()}
            startLight={this.props.startLight}
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
        return <MyButton
            color={color}
            buttonColor={setButtonColor}
            onMouseDown={() => this.props.onMouseDown(color)}
            onMouseUp={() => this.props.onMouseUp()}
        />
    }
    renderStrict() {
        return <StrictButton
            strictColor={this.props.strictColor}
            strictClick={() => this.props.strictClick()}
        />
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6 left">{this.renderButtons("green")}</div>
                    <div className="col-xs-6 right">{this.renderButtons("red")}</div>
                </div>
                <div className="row">
                    <div className="col-xs-6 left">{this.renderButtons("yellow")}</div>
                    <div className="col-xs-6 right">{this.renderButtons("blue")}</div>
                </div>
                <div className="control">
                    <div className="title"><h1>Simon<sup>&reg;</sup></h1></div>
                    <div className="row">
                    <div className="col-xs-4">
                        {this.renderToggle()}
                    </div>
                    <div className="col-xs-4">
                        {this.renderStart(0)}
                    </div>
                    <div className="col-xs-4">
                        {this.renderStrict()}
                    </div>
                    </div>
                    <div>
                        {this.renderScreen()}
                    </div>
                </div>
            </div >
        );
    }
}


function Switch(props) {
    return (
        <button className="switch" onClick={() => props.onClick()} style={{ background: props.onColor }}>
            {props.setOn}
        </button>
    )
}

function StartButton(props) {
    return (
        <button className="start" onClick={() => props.onClick()} style={{ background: props.startLight }}>
            {<p>start</p>}
        </button>
    )
}

function MyScreen(props) {
    return (
        <p className="screen">{props.screen}</p>
    )
}

function StrictButton(props) {
    return (
        <button className="strictButton" onClick={() => props.strictClick()} style={{ background: props.strictColor }}>
            {<p>strict</p>}
        </button>
    )
}


export default MyBoard




