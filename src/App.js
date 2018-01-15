import React, { Component } from 'react';
import './App.css';
import MyGame from './components/myGame'
import github from "./images/github.png";
class App extends Component {
  openWindow(){
    window.open("https://github.com/Recelis/simongame",'_blank');
  }
  render() {
    return (
      <div>
        <MyGame/>
        <p className = "copyright">created By Jacky Lui using ReactJS &#169; 2017
          <span><button onClick = {()=>this.openWindow()}className = "github"><img className = "github" src = {github}></img></button></span>
        </p>
      </div>
    )
  }
}


export default App;
