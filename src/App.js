import React from 'react';
import './App.css';
import Board from "./components/Board";
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      status: "waiting",
      mode: "easy",
      row: 10,
      col: 10,
      flag: 5,
      mine: 5,
      openCell: 0
    };
    this.baseState = this.state;
    this.hardState = {
      status: "waiting",
      mode: "hard",
      row: 20,
      col: 20,
      flag: 40,
      mine: 40,
      openCell: 0
    };
  }

  easy = () => {
    this.setState(Object.assign({}, this.baseState));
  }

  hard = () => {
    this.setState(Object.assign({}, this.hardState));
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.status === "running"){
      this.checkWin();
    }
  }

  checkWin = () => {
    if (this.state.openCell === (this.state.row * this.state.col - this.state.mine)) {
      this.setState({
        status: "won"
      }, alert("You won the game!!! good job!!"));
      this.setState(Object.assign({}, this.baseState));
    }
  }


  endGame = () => {
    this.setState({status: "ended"},alert("You stepped on a mine :( please try again!"));
  }


  handleCellClick = () => {
    if (this.state.openCell === 0 && this.state.status !== "running"){
      this.setState({status: "running"});
    }
    this.setState(prev => {
      return {openCell: prev.openCell+1};
    })
  }

  updateFlag = (newFlag) => {
    this.setState({ flag: this.state.flag + newFlag});
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Sean's MineSweeper!</h1>
        <Navbar flagCount = {this.state.flag} status={this.state.status} easy={this.easy} hard={this.hard.bind(this)}/>
        <Board 
          row={this.state.row} 
          col={this.state.col} 
          mine={this.state.mine} 
          openCell={this.state.openCell}
          endGame = {this.endGame}
          status = {this.state.status}
          updateFlag = {this.updateFlag}
          mode = {this.state.mode}
          cellClick={this.handleCellClick}
        />
      </div>
    );
  }
}

export default App;
