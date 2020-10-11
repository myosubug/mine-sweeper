import React from 'react';


class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board: this.initialize(props)
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

        for (let m = 0; m < props.mine; m++){
            let rx = Math.floor(Math.random() * props.row);
            let ry = Math.floor(Math.random() * props.col);
            let cell = board[rx][ry];
            if (cell.hasMine){
                m--;
            } else {
                cell.hasMine = true;
            }
            console.log(cell);
        }
        //for testing board
        console.table(board);
    }
    
    render(){
        return <div></div>
    }
}

export default Board;