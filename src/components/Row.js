import React from 'react';
import Cell from './Cell';

const Row = props => {
    let cells = props.cells.map((data, index) => {
        return (
            <Cell data={data} key={index} open={props.open}></Cell>
        )
    })
    return (
        <div className="row"> 
            {cells}
        </div>
    );
};

export default Row;