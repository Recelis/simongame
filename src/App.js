import React, { Component } from 'react';
import './App.css';
import MyButton from './components/myButton'
import MyBoard from './components/myBoard'
import MyGame from './components/myGame'
// function Button(color){
//   return(
//     <button className = "button" onClick={color.onClick}>
//       {color.value}
//     </button>
//   );
// }



// function Score(){
//   return (
//     null
//   );
// }

/*<div className="colors">
          {this.createButton('red')}
          {this.createButton('green')}
          {this.createButton('yellow')}
          {this.createButton('blue')}
        </div>*/
/*<div className="Start">
          {this.createButton('start')}
        </div>
        <div className="Score">
          {this.createScore()}
        </div>*/

  // onState(){

  // }
  // randomGenerator(){
  //   var min = 0
  //   var max = 4;
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }
  // sounds(){
    
  // }



class App extends Component{
  render(){
    return(
      <MyGame

      />
    )
  }
}


export default App;
