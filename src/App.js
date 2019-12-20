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
    var Food = {
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

    // drawing snake
    snakeList.forEach((sb,i) => {
      if(i === 0){
        canvas.fillStyle = 'black';
      }else{
        canvas.fillStyle = snakeBody.color;
      }
      canvas.fillRect(sb.x,sb.y,snakeBody.width,snakeBody.height);
    }
    );
    canvas.restore();

    // drawing food
    foodList = [];

    canvas.save();
    canvas.fillStyle = Food.color;
    foodList.forEach((f,i) => {
        canvas.fillRect(f.x,f.y,Food.width,Food.height);
    })
    canvas.restore();
    
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
