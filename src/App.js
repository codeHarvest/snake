import React, { Component } from 'react';
import './App.scss';

    var Width = 500;
    var Height = 500;
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
  

  componentDidMount() {
    let canvas = this.refs.canvas.getContext('2d');
    canvas.font = '20px Calibri';

    this.startGame();
  }

  startGame(){
    snakeList = [
      {x:220,y:200},
      {x:210,y:200},
      {x:200,y:200}
    ];

    foodList = [];

    snakeList.forEach(this.drawSnake());
  }


  drawSnake(sb,i){
    this.canvas.save();
    this.canvas.fillStyle = snakeBody.color;
    this.canvas.fillRect(sb.x,sb.y,snakeBody.width,snakeBody.height);
    this.canvas.restore();
  }

  drawFood(f,i){
    this.canvas.save();
    this.canvas.fillStyle = snakeFood.color;
    this.canvas.fillRect(f.x,f.y,snakeFood.width,snakeFood.height);
    this.canvas.restore();
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
