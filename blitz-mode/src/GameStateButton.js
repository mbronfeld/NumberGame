import React from 'react'

function UndoButton(props) {

    return (
        <input 
            type='button' 
            value={props.caption}
            onClick={props.onClick}
            className="game-state-button"/>
    );
}

export default UndoButton;