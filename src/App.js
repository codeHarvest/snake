import React, { Component } from 'react';
import './App.scss';

class App extends Component{
  

  componentDidMount() {
    this.drawCanvas(); 
  }
  
  drawCanvas(){
    let canvas = this.refs.canvas.getContext('2d');
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
