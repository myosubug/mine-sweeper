import React from 'react';

const Cell = props => {
    let renderCell = () => {
        if (props.data.isOpen){
            if (props.data.mineCount === 0){
                return (
                    <div className="cell-open" onClick={() => props.open(props.data)}></div>
                );
            } else if (props.data.hasMine){
                return (
                    <div className="cell-open" onClick={() => props.open(props.data)}>m</div>
                );
            } else{
                return (
                <div className="cell-open" onClick={() => props.open(props.data)}>{props.data.mineCount}</div>
                );
            }
            
        } else {
            return(
                <div className="cell-closed" onClick={() => props.open(props.data)}></div>
            );   
        }
    }
    return renderCell();
};

export default Cell;