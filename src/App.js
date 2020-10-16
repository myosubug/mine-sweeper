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
      opened: 0
    };
    this.easyMode = this.state;
    this.hardMode = {
      status: "waiting",
      mode: "hard",
      row: 20,
      col: 20,
      flag: 40,
      mine: 40,
      opened: 0
    };
  }

  easy = () => {
    this.setState(Object.assign({}, this.easyMode));
  }

  hard = () => {
    this.setState(Object.assign({}, this.hardMode));
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.status === "running"){
      this.checkWin();
    }
  }

  checkWin = () => {
    if (this.state.opened === (this.state.row * this.state.col - this.state.mine)) {
      this.setState({
        status: "won"
      }, alert("You won the game!!! good job!!"));
      this.setState(Object.assign({}, this.easyMode));
    }
  }


  endGame = () => {
    this.setState({status: "ended"},alert("You stepped on a mine :( please try again!"));
  }


  handleCellClick = () => {
    if (this.state.opened === 0 && this.state.status !== "running"){
      this.setState({status: "running"});
    }
    this.setState(prev => {
      return {opened: prev.opened+1};
    })
  }

  updateFlag = (newFlag) => {
    this.setState({ flag: this.state.flag + newFlag});
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">mInE sWeEpEr</h1>
        <Navbar flagCount = {this.state.flag} status={this.state.status} easy={this.easy} hard={this.hard}/>
        <Board 
          row={this.state.row} 
          col={this.state.col} 
          mine={this.state.mine} 
          opened={this.state.opened}
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
