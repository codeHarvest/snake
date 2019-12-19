import React, { Component } from 'react';
import './App.scss';

class App extends Component{
  
  constructor(){
    super();

    this.state = {
      snakeBody : {
        width: 20,
        height:20,
        color: 'green'
      },
      Food: {
        width: 20,
        height: 20,
        color: 'orange'
      },
      foodList: [],
      snakeList:[]
    }
  }
  
  componentDidMount() {
    let canvas = this.refs.canvas.getContext('2d');
    canvas.font = '20px Calibri';
    this.startGame();    
  }


  startGame(){
    this.setState({snakeList: [
      {x:220,y:200},
      {x:210,y:200},
      {x:200,y:200}
    ]});

    this.setState({
      foodList: []
    })

    this.state.snakeList.forEach(this.drawSnake());
  }

  drawSnake(sb,i){
    this.canvas.save();
    this.canvas.fillStyle = this.state.snakeBody.color;
    this.canvas.fillRect(sb.x,sb.y,this.state.snakeBody.width,this.state.snakeBody.height);
    this.canvas.restore();
  }

  render(){
  
    return(
      <div className="App">
          <canvas ref="canvas" width="500" height="500" style={{border:'2px solid black'}}></canvas>
      </div>
    )

  }
}


export default App;
