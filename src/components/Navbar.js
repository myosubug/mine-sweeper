import React from 'react';
import CountUp from 'react-countup';

const Navbar = props => {
    
    if (props.status === "waiting"){
        return (
        
            <div className="navbar">
                <button className="easy" onClick={props.easy}>easy</button>
                <button className="hard" onClick={props.hard}>hard</button>
                <div className="flag-count">Flags:{props.flagCount}</div>
                <div className="timer">Ready to start?</div> 
            </div>
        );
    } 
    else if (props.status === "running"){
        return (
        
            <div className="navbar">
                <button className="easy" onClick={props.easy}>easy</button>
                <button className="hard" onClick={props.hard}>hard</button>
                <div className="flag-count">flags:{props.flagCount}</div>
                <div className="timer">Time: <CountUp start={0} end={1000} duration={4500}/></div> 
            </div>
        );
    }
    
    else {
        return (
        
            <div className="navbar">
                <button className="easy"onClick={props.easy} >easy</button>
                <button className="hard" onClick={props.hard}>hard</button>
                <div className="flag-count">flags:{props.flagCount}</div>
                <div className="timer">GAME OVER!</div> 
            </div>
        );
    }

};

export default Navbar;