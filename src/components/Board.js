import React from 'react';
import Row from './Row';

class Board extends React.Component{
    constructor(props){
        super(props);
        this.initial = true;
        this.ended = false;
        this.state = {
            rows: this.initialize(props)  
        };
    }

    componentWillReceiveProps(newProps){
        if (this.props.mode === newProps.mode){
            if (this.props.opened > newProps.opened)
            {
                this.setState({
                    rows: this.initialize(newProps)  
                });
                this.initial = true;
                this.ended = false;
            }
        }
        else {
        
            if (this.props.opened >= newProps.opened){
            
            this.setState({
                rows: this.initialize(newProps)  
            });
            this.initial = true;
            this.ended = false;
           }
    }
    }
    
    initialize = props => {
        
        let board = [];
        
        for (let i = 0; i < props.row; i++){
            board.push([]);
            for (let j = 0; j < props.col; j++){
                board[i].push({
                    x: i,
                    y: j,
                    mineCount: 0,
                    isOpen: false,
                    hasMine: false,
                    hasFlag: false
                });
            }
        }
        //for testing board
        //console.table(board);
        
        return board;
    };

    open = cell => {
        if (this.props.status === "ended"){
            return;
        }
        let rows = this.state.rows;
        let current = rows[cell.x][cell.y];
        if (this.initial){
            this.initial = false;
            for (let m = 0; m < this.props.mine; m++){
                let rx = Math.floor(Math.random() * this.props.row);
                let ry = Math.floor(Math.random() * this.props.col);
                if (rows[rx][ry].hasMine || (rx === cell.x && ry === cell.y) ){
                    m--;
                } else {
                    //mine locations
                    //console.log(`${rx},${ry}`);
                    rows[rx][ry].hasMine = true;
                }
            }
            
            this.props.cellClick();
            current.isOpen = true;
            current.mineCount = this.countMines(cell);
            this.setState({rows: rows});
            if (!current.hasMine && current.mineCount ===0){
               this.checkAround(cell);
            }
        } else {
            if (!cell.hasFlag && !current.isOpen) {
                this.props.cellClick();
                current.isOpen = true;
                current.mineCount = this.countMines(cell);
                this.setState({rows: rows});
                if (!current.hasMine && current.mineCount ===0){
                    this.checkAround(cell);
                }
            }

            if (current.hasMine && this.props.opened !== 0){
                this.ended = true;
                this.props.endGame();
            }
        }
        //console.log(this.state.rows);
    };

    checkAround = cell => {
        let rows = this.state.rows;
        for (let i = -1; i <= 1; i++){
            for (let j = -1; j <= 1; j++){
                if ((cell.x + i >= 0 && cell.y + j >= 0) && (cell.x + i < this.state.rows.length && cell.y + j < this.state.rows[0].length)) {              
                    if (!rows[cell.x + i][cell.y + j].hasMine && !rows[cell.x + i][cell.y + j].isOpen){
                        this.open(rows[cell.x + i][cell.y + j]);
                    }
                }
            }
        }
    }

    countMines = cell => {
        let count = 0;
        for (let i = -1; i <= 1; i++){
            for (let j = -1; j <= 1; j++){
                if ((cell.x + i >= 0 && cell.y + j >= 0) && (cell.x + i < this.state.rows.length && cell.y + j < this.state.rows[0].length)) {              
                    if (this.state.rows[cell.x + i][cell.y + j].hasMine && !(i === 0 && j === 0 )){
                        count++;
                    }
                }
            }
        }
        return count;
    };

    flag = cell => {
        if (this.props.status === "ended"){
            return;
        }
        if (!cell.isOpen){
            let rows = this.state.rows;
            cell.hasFlag = !cell.hasFlag;
            this.setState({rows: rows});
            this.props.updateFlag(cell.hasFlag ? -1 : 1);
        }
    }
    
    render(){
        let rows = this.state.rows.map((row, index) => {
            return (<Row 
                        cells={row} 
                        key={index}
                        flag = {this.flag}
                        open={this.open}
                        ended={this.ended}
                />);
    
        })
        return <div className="board">{rows}</div>;
    };
}

export default Board;