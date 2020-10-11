import React from 'react';
import './App.css';
import Board from "./components/Board";


class App extends React.Component {
  state = {
    mode: "easy",
    row: 10,
    col: 10,
    flag: 10,
    mine: 10
  };
  render() {
    return (
      <div className="App">
        <h1>testtt</h1>
        <Board row={this.state.row} col={this.state.col} mine={this.state.mine}/>
      </div>
    );
  }
}

export default App;
