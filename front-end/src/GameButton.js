import React from 'react'

function GameButton(props) {

    return (
        <input 
            type='button' 
            value={props.caption}
            onClick={props.onClick}
            className={`button-5 ${props.className}`}/>
    );
}

export default GameButton;