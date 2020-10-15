import React from 'react';

const Cell = props => {
    let renderCell = () => {
        if (props.data.isOpen){
            if (props.data.mineCount === 0){
                return(
                    <div 
                        className="cell-open" 
                        onClick={() => props.open(props.data)} 
                        onContextMenu={e => {
                            e.preventDefault();
                            props.flag(props.data);    
                        }}>
                    </div>
                );  
            } else if (props.data.hasMine){
                return(
                    <div className="cell-open" onClick={() => props.open(props.data)} 
                        onContextMenu={e => {
                            e.preventDefault();    
                        }}>
                    <span role="img" aria-label="bomb">💣</span></div>
                );   
            } else{
                return(
                    <div 
                        className="cell-open" 
                        onClick={() => props.open(props.data)} 
                        onContextMenu={e => {
                            e.preventDefault();
                            props.flag(props.data);    
                        }}>
                    {props.data.mineCount}</div>
                );  
            }
            
        } 
        
        else if (props.data.hasFlag){
            return(
                <div 
                    className="cell-closed" 
                    onClick={() => props.open(props.data)} 
                    onContextMenu={e => {
                        e.preventDefault();
                        props.flag(props.data);    
                    }}>
                <span role="img" aria-label="flag">🏴‍☠️</span></div>
            );   
        }
        
        else {
            
            if ((props.data.hasMine && props.ended)){
                return(
                    <div 
                        className="cell-closed" 
                        onClick={() => props.open(props.data)} 
                        onContextMenu={e => {
                            e.preventDefault(); 
                        }}>
                    <span role="img" aria-label="bomb">💣</span></div>
                );
            }
            else{
                return(
                    <div 
                        className="cell-closed" 
                        onClick={() => props.open(props.data)} 
                        onContextMenu={e => {
                            e.preventDefault();
                            props.flag(props.data);    
                        }}>
                    </div>
                );   

            }  
        }
    }
    return renderCell();
};

export default Cell;