import React, { Component } from 'react';
import './App.scss';

    // var Width = 500;
    // var Height = 500;
    var foodList;
    var snakeList;
    
    
    var snakeBody = {
      width: 20,
      height:20,
      color: 'green'
    }
    var snakeFood = {
      width: 20,
      height: 20,
      color: 'orange'
    }
    

class App extends Component{
  
  componentDidMount(){
    // const canvas = this.refs.canvas.getContext('2d');
    this.startGame();
  }


  startGame(){
    snakeList = [
      {x:220,y:200},
      {x:210,y:200},
      {x:200,y:200}
    ];

    const canvas = this.refs.canvas.getContext('2d');
    canvas.save();
    canvas.fillStyle = snakeBody.color;
    snakeList.forEach(sb => {
      canvas.fillRect(sb.x,sb.y,snakeBody.width,snakeBody.height);
    }
    );
    canvas.restore();

    // foodList = [];

    
  }
  
  render(){
    return (
        <div className="App">
          <canvas ref="canvas" width="500" height="500" style={{border:'2px solid black'}}></canvas>
        </div>
      );
  }
}

export default App;
