import React from 'react';
import './App.css';
import Board from "./components/Board";
import Navbar from './components/Navbar';

class App extends React.Component {

  state = {
    status: "waiting",
    mode: "easy",
    row: 10,
    col: 10,
    flag: 10,
    mine: 1,
    time: new Date(),
    openCell: 0
  };

  componentDidMount(){
    this.intervalID = setInterval(() => {
      this.setState({date: new Date()});
    }, 1000);
  }

  handleCellClick = () => {
    if (this.state.openCell === 0 && this.state.status !== "running"){
      this.setState({status: "running"});
    }
    this.setState(prev => {
      return {openCell: prev.openCell+1};
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Sean's MineSweeper!</h1>
        <Navbar time={this.state.time} flagCount = {this.state.flag} />
        <Board 
          row={this.state.row} 
          col={this.state.col} 
          mine={this.state.mine} 
          openCell={this.state.openCell}
          cellClick={this.handleCellClick}
        />
      </div>
    );
  }
}

export default App;
