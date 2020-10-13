import React from 'react';

const Navbar = props => {
    return (
        <div className="navbar">
            <button className="easy">easy</button>
            <button className="hard">hard</button>
            <button className="reset">reset</button>
            <div className="flag-count">flags:{props.flagCount}</div>
            <div className="timer">{props.time.toLocaleTimeString()}</div> 
        </div>
    );
};

export default Navbar;