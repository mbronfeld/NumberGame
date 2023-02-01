import React from 'react'

function UndoButton(props) {

    return (
        <input 
            type='button' 
            value="UNDO"
            onClick={props.onClick}
            className="equal-button"/>
    );
}

export default UndoButton;